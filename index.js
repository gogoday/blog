const http = require('http');

http.createServer((req, res) => {
  res.end('<h1>小桥流水的空间正在建设中</h1>');
}).listen(3000, () => {
  console.log('server listen on port: 3000');
})
