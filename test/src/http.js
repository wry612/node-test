/**
 * Created by Administrator on 2016/9/6.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function (request, response) {
    //解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;

    //输出请求的文件名
    console.log('request for'+pathname+' received');

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function (err, data) {
        if(err){
            console.error(err);
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log('server running at http://localhost:8081/');
