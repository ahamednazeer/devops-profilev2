// Cloudflare Workers compatible entry point
export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    // Handle CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // API Routes
      if (pathname.startsWith('/api/')) {
        return handleApiRequest(request, pathname, corsHeaders);
      }

      // Static file serving
      if (env.ASSETS) {
        const asset = await env.ASSETS.fetch(request);
        if (asset.status !== 404) {
          return asset;
        }
      }

      // Fallback to index.html for SPA routing
      if (env.ASSETS) {
        const indexRequest = new Request(new URL('/index.html', request.url), request);
        const indexResponse = await env.ASSETS.fetch(indexRequest);
        if (indexResponse.status === 200) {
          return new Response(indexResponse.body, {
            ...indexResponse,
            headers: {
              ...Object.fromEntries(indexResponse.headers.entries()),
              'Content-Type': 'text/html',
            },
          });
        }
      }

      return new Response('Not Found', { status: 404 });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  },
};

async function handleApiRequest(request: Request, pathname: string, corsHeaders: Record<string, string>): Promise<Response> {
  const method = request.method;
  
  // Basic health check endpoint
  if (pathname === '/api/health' && method === 'GET') {
    return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Example API endpoint
  if (pathname === '/api/hello' && method === 'GET') {
    return new Response(JSON.stringify({ message: 'Hello from Cloudflare Workers!' }), {
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  // Handle POST requests with JSON body
  if (pathname === '/api/echo' && method === 'POST') {
    try {
      const body = await request.json();
      return new Response(JSON.stringify({ echo: body }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }
  }

  // Default 404 for unknown API routes
  return new Response(JSON.stringify({ error: 'API endpoint not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });
}