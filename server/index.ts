import express, { type Request, type Response, type NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Cloudflare Workers export
export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      throw err;
    });

    // For Cloudflare Workers, always serve static files
    serveStatic(app);

    // Convert Cloudflare Workers Request to Node.js request format
    return new Promise((resolve) => {
      const url = new URL(request.url);
      const mockReq = {
        method: request.method,
        url: url.pathname + url.search,
        headers: Object.fromEntries(request.headers.entries()),
        body: request.body,
      } as any;

      const mockRes = {
        statusCode: 200,
        headers: {} as Record<string, string>,
        body: '',
        status(code: number) {
          this.statusCode = code;
          return this;
        },
        json(data: any) {
          this.headers['content-type'] = 'application/json';
          this.body = JSON.stringify(data);
          return this;
        },
        send(data: any) {
          this.body = data;
          return this;
        },
        setHeader(name: string, value: string) {
          this.headers[name.toLowerCase()] = value;
        },
        end(data?: any) {
          if (data) this.body = data;
          resolve(new Response(this.body, {
            status: this.statusCode,
            headers: this.headers,
          }));
        }
      } as any;

      // Handle the request through Express
      app(mockReq, mockRes);
    });
  },
};

// Node.js server for local development
if (typeof process !== 'undefined' && process.env) {
  (async () => {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      throw err;
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });
  })();
}
