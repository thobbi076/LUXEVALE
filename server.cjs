const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`[HTTP Server] ${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HTTP server is running! If you see this, the server is up.');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[HTTP Server] Server running on http://0.0.0.0:${PORT}`);
});
