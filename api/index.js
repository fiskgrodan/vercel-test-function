const app = require("express")();
const { v4 } = require("uuid");

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=10, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get("/api/hello/:name", (req, res) => {
  const { name = "World" } = req.params;
  res.end(`Hello ${name}!`);
});

module.exports = app;
