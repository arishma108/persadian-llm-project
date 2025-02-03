import { exec } from "child_process";
import http from "http";

const PORT = 3000;

http
  .createServer((req, res) => {
    // Use Ollama to chat with the model
    exec(`ollama chat llama2`, (err, stdout) => {
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
