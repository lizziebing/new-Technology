// var http = require("http");  
// http.createServer(function(request, response) {  
//     response.writeHead(200, {"Content-Type": "text/html"});  
//     response.write("Hello World!");  
//     response.end();  
// }).listen(8080);  
// console.log("Server running at http://localhost:8080/");  

var http = require('http');//创建web服务器，处理http请求
http.createServer(
//服务器接到请求时匿名回调函数req(请求相关信息，url get post),res(对请求的响应内容)
	function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');//链式创建
console.log('Server running at http://127.0.0.1:1337/');

//ctrl+c重启服务器