const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/page-1',
      createProxyMiddleware({
        target: 'http://localhost:3002',
        pathRewrite: {
            '^/page-1': '/', // rewrite path
          },
        changeOrigin: true,
      })
    );
    app.use(
        '/external-page',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          pathRewrite: {
              '^/external-page': '/', // rewrite path
            },
          changeOrigin: true,
        })
      );
  };