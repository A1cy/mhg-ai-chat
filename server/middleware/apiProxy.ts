import { createProxyMiddleware } from 'http-proxy-middleware';

// Ensures compatibility with Nuxt 3's Nitro server
export default defineEventHandler((event) => {
  // Verify SERVER_DOMAIN is set
  if (!process.env.SERVER_DOMAIN) {
    console.error('SERVER_DOMAIN environment variable is not set');
    throw new Error('SERVER_DOMAIN environment variable is not set');
  }

  // Correctly apply the proxy middleware
  const proxy = createProxyMiddleware({
    target: process.env.SERVER_DOMAIN,
    changeOrigin: true,
    pathRewrite: {'^/api/': ''}, // assuming your intention is to remove /api/ prefix when proxying
  });

  return new Promise((resolve, reject) => {
    proxy(event.req, event.res, (err) => err ? reject(err) : resolve());
  });
});
