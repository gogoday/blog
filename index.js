const http = require('http');

http.createServer((req, res) => {
  res.end('node server start ok.update test, test 2, test 3');
}).listen(3000, () => {
  console.log('server listen on port: 3000');
})
