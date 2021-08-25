const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
    next();
  });

  app.use(
    createProxyMiddleware('/magnetic-declination', {
      target: 'https://www.magnetic-declination.com/',
      pathRewrite: {
        '^/magnetic-declination/': '/srvact/',
      },
      changeOrigin: true,
    }),
  );
};
