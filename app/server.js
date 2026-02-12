const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Workshop Demo App v1");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
