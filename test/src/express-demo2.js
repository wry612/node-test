/**
 * Created by Administrator on 2016/9/6.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('主页get请求');
    res.send('Hello Get');
});

app.post('/',function (req, res) {
    console.log('hostpage post request');
    res.send('hello post');
});

app.get('/del-user',function (req, res) {
    console.log('del-user request');
    res.send('delete page');
});

app.get('/list-user',function (req, res) {
    console.log('/list-user get');
    res.send('user-list');
});

app.get('/ab*cd',function (req, res) {
    console.log('/ab*cd get request');
    res.send('正则匹配');
});

var server = app.listen(8081, function () {

    var host = server.address().adderss;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})