# Deployment Guide

## Cloudflare Workers Deployment

This application is configured to deploy to Cloudflare Workers with static asset hosting.

### Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Already included in dependencies
3. **Node.js**: Version 18+ required

### Initial Setup

1. **Authenticate with Cloudflare**:
   ```bash
   npm run cf:login
   ```
   This opens your browser to authenticate with Cloudflare.

2. **Configure Environment Variables**:
   Edit `wrangler.toml` and uncomment the database URL sections:
   ```toml
   [env.production.vars]
   DATABASE_URL = "your-production-database-url"

   [env.dev.vars] 
   DATABASE_URL = "your-dev-database-url"
   ```

3. **Build the Application**:
   ```bash
   npm run build
   ```

### Deployment Commands

#### Development Environment
```bash
npm run deploy:dev
```
Deploys to `devops-profilev2-dev.your-subdomain.workers.dev`

#### Production Environment
```bash
npm run deploy:prod
```
Deploys to `devops-profilev2-prod.your-subdomain.workers.dev`

#### Default Deployment
```bash
npm run deploy
```
Deploys to the default environment (production)

### Local Development with Wrangler

```bash
npm run preview
```
Runs the application locally using Wrangler's development server with Workers runtime.

### Environment Configuration

The application supports two environments:

- **Development** (`dev`): For testing and development
- **Production** (`production`): For live deployment

Each environment has its own:
- Worker name
- Environment variables
- Database connections

### Database Setup

1. **Create Neon Database**: Set up your PostgreSQL database at [neon.tech](https://neon.tech)
2. **Push Schema**: 
   ```bash
   npm run db:push
   ```
3. **Add Connection Strings**: Update `wrangler.toml` with your database URLs

### Deployment Process

1. **Build**: `npm run build`
2. **Test Locally**: `npm run preview`
3. **Deploy to Dev**: `npm run deploy:dev`
4. **Test Dev Environment**: Verify functionality
5. **Deploy to Production**: `npm run deploy:prod`

### Troubleshooting

#### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check TypeScript compilation: `npm run check`

#### Deployment Issues
- Verify authentication: `npm run cf:login`
- Check wrangler.toml configuration
- Ensure DATABASE_URL is set for target environment

#### Runtime Issues
- Check Cloudflare Workers logs in the dashboard
- Verify Node.js compatibility flags are enabled
- Ensure all required environment variables are set

### Custom Domain (Optional)

1. Add your domain to Cloudflare
2. In Cloudflare dashboard, go to Workers & Pages
3. Select your worker
4. Add custom domain under "Triggers" tab

### Monitoring

- **Logs**: View in Cloudflare Workers dashboard
- **Analytics**: Available in Cloudflare dashboard
- **Metrics**: CPU time, requests, errors tracked automatically

### CI/CD Integration

For automated deployments, add these secrets to your CI/CD:
- `CLOUDFLARE_API_TOKEN`: From Cloudflare dashboard
- `CLOUDFLARE_ACCOUNT_ID`: From Cloudflare dashboard

Example GitHub Actions:
```yaml
- name: Deploy to Cloudflare Workers
  run: npm run deploy:prod
  env:
    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```