import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://api.cntv.cn',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // 去掉路径中的 /api
  },
});
