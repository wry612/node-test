/**
 * Created by Administrator on 2016/9/5.
 */
var server = require("./server");
var router = require('./router');

server.start(router.route);