const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is a top secret......just to know......Read More!");
  } else {
    res.end("Hello World");
  }
});

server.listen(7777);
