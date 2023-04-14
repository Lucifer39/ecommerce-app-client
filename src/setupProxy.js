const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
  target: "http://localhost:4000",
  changeOrigin: true,
};

const proxy1 = {
  target: "http://localhost:4001",
  changeOrigin: true,
};

const proxy2 = {
  target: "http://localhost:4002",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/api", createProxyMiddleware(proxy));

  app.use("/auth", createProxyMiddleware(proxy1));

  app.use("/get", createProxyMiddleware(proxy2));
};
