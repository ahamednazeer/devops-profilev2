import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

const app = express();

// Basic middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.path.startsWith("/api")) {
      console.log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
    }
  });
  next();
});

// Cloudflare Workers export
export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    try {
      // Register routes
      await registerRoutes(app);

      // Error handling middleware
      app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
      });

      // Convert Cloudflare Workers Request to Express-compatible format
      const url = new URL(request.url);
      
      return new Promise((resolve, reject) => {
        const mockReq = {
          method: request.method,
          url: url.pathname + url.search,
          path: url.pathname,
          originalUrl: url.pathname + url.search,
          headers: Object.fromEntries(request.headers.entries()),
          body: request.body,
          query: Object.fromEntries(url.searchParams.entries()),
        } as any;

        const mockRes = {
          statusCode: 200,
          headers: {} as Record<string, string>,
          body: '',
          finished: false,
          status(code: number) {
            this.statusCode = code;
            return this;
          },
          json(data: any) {
            this.headers['content-type'] = 'application/json';
            this.body = JSON.stringify(data);
            this.end();
            return this;
          },
          send(data: any) {
            this.body = data;
            this.end();
            return this;
          },
          setHeader(name: string, value: string) {
            this.headers[name.toLowerCase()] = value;
          },
          set(headers: Record<string, string> | string, value?: string) {
            if (typeof headers === 'string' && value) {
              this.headers[headers.toLowerCase()] = value;
            } else if (typeof headers === 'object') {
              Object.entries(headers).forEach(([k, v]) => {
                this.headers[k.toLowerCase()] = v;
              });
            }
            return this;
          },
          end(data?: any) {
            if (data) this.body = data;
            this.finished = true;
            resolve(new Response(this.body, {
              status: this.statusCode,
              headers: this.headers,
            }));
          },
          on(event: string, callback: Function) {
            if (event === 'finish') {
              setTimeout(() => callback(), 0);
            }
          }
        } as any;

        try {
          // Handle the request through Express
          app(mockReq, mockRes, (err: any) => {
            if (err) {
              reject(new Response(JSON.stringify({ error: err.message }), {
                status: 500,
                headers: { 'content-type': 'application/json' }
              }));
            }
          });
        } catch (error) {
          reject(new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'content-type': 'application/json' }
          }));
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'content-type': 'application/json' }
      });
    }
  },
};