const { createServer } = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;

const page404 = require("./404");
const about = require("./about");
const contact = require("./contact");

const server = createServer((req, res) => {
  const { url, method } = req;

  res.setHeader("Content-Type", "text/plain");

  if (method === "GET") {
    switch (url) {
      case "/":
        res.statusCode = 200;
        res.end("Welcome to the Home Page");
        break;
      case "/about":
        res.statusCode = 200;
        res.end(about());
        break;
      case "/contact":
        res.statusCode = 200;
        res.end(contact());
        break;
      default:
        res.statusCode = 404;
        res.end(page404());
        break;
    }
  } else {
    res.statusCode = 405;
    res.end(`Method ${method} is not allowed`);
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
