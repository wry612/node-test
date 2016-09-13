/**
 * Created by Administrator on 2016/9/5.
 */
var fs = require('fs');

fs.rmdir('test',function(err){
   if(err){
       return console.error(err);
   }
   console.log('view dir');

    fs.mkdir('test/',function (err) {
        if(err){
            return console.error(err);
        }
        console.log('mkdir success');
    });

    console.log('view dir');
    fs.readdir('test/',function (err,files) {
        if(err){
            return console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        })
    });

});
// fs.stat('test.txt',function(err , stats){
//     if(err){
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log(stats.isFile());
// });
//
// var buf = new Buffer(1024);
//
// console.log("准备打开已存在的文件！");
// fs.open('test.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！");
//     fs.writeFile('test.txt','我是通过写入的文件内容',function(err){
//         if(err){
//             return console.error(err);
//         }
//         console.log('write success!');
//         console.log('read data');
//         fs.readFile('test.txt',function (err,data) {
//             if(err){
//                 console.error(err);
//             }
//             console.log('data'+data.toString());
//         });
//     });
//     console.log("截取10字节后的文件内容。");
//
//     // 截取文件
//     fs.ftruncate(fd, 10, function(err){
//         if (err){
//             console.log(err);
//         }
//         console.log("文件截取成功。");
//         console.log("读取相同的文件");
//         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//             if (err){
//                 console.log(err);
//             }
//
//             // 仅输出读取的字节
//             if(bytes > 0){
//                 console.log(buf.slice(0, bytes).toString());
//             }
//
//             // 关闭文件
//             fs.close(fd, function(err){
//                 if (err){
//                     console.log(err);
//                 }
//                 console.log("文件关闭成功！");
//             });
//         });
//     });
//     console.log("准备读取文件：");
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if (err){
//             console.log(err);
//         }
//         console.log(bytes + "  字节被读取");
//
//         // 仅输出读取的字节
//         if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());
//         }
//
//         // 关闭文件
//         fs.close(fd, function(err){
//             if (err){
//                 console.log(err);
//             }
//             console.log("文件关闭成功");
//         });
//     });
// });
// fs.unlink('test.txt',function(err){
//     if(err) {
//         return console.error(err);
//     }
//     console.log('delete success');
// });
