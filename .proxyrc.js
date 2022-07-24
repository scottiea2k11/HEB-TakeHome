const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth", {
      target: "http://order-pizza-api.herokuapp.com",
      pathRewrite: {
        "^/": "/api",
      },
    })
  );
  app.use(
    createProxyMiddleware("/api/orders", {
      target: "http://order-pizza-api.herokuapp.com",
      pathRewrite: {
        "^/": "/api",
      },
    })
  );
};