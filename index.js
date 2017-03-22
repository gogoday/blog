const http = require('http');

http.createServer((req, res) => {
  res.end('node server start ok.update test');
}).listen(3000, () => {
  console.log('server listen on port: 3000');
})
