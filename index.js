const http = require("http");
const { exec } = require("child_process");

const PORT = 3000;

http
  .createServer((req, res) => {
    exec("ollama chat llama2", (err, stdout) => {
      if (err) {
        res.writeHead(500);
        res.end("Error: " + err.message);
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(stdout);
    });
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

