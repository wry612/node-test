// var http = require("http");
// var url = require('url');
//
// function start(route){
//     function onRequest(request,response){
//         var pathname = url.parse(request.url).pathname;
//         console.log("request for" + pathname);
//         route(pathname);
//         response.writeHead(200,{"Content-Type":"text/plain"});
//         response.write("hello world");
//         response.end();
//     }
//     http.createServer(onRequest).listen(8080);
//     console.log("server start");
// }
// exports.start = start;

var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));

app.get('/index.html',function (req, res) {
    res.sendFile(__dirname+'/'+'index.html');
});

app.get('/process-get',function (req, res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('.file-upload',function (req, res) {
    console.log(req.files[0]);
    var des_file = __dirname+'/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function (err, data) {
        fs.writeFile(des_file,data,function (err) {
           if(err){
               console.log(err);
           }else{
               response = {
                   message:'file uploaded successfully',
                   filename:req.files[0].originalname
               };
           }
           console.log(response);
            res.end(JSON.stringify(response));
        });
    })
})

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://%s:%s',host,port);
});