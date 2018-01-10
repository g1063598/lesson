const fs = require('fs');
// js是异步的，回调
// node 异步无阻塞 提高性能，降低服务器需求
// 异步 同步
// fs.readFile('input.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// })
// fs.readFile('input2.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// })
// fs.readFile('input3.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// })

// 同步读取
// var f1 = fs.readFileSync('input.txt','utf-8');
// console.log(f1);
// var f2 = fs.readFileSync('input2.txt','utf-8')
// console.log(f2);
// var f3 = fs.readFileSync('input3.txt','utf-8')
// console.log(f3);


// 回调地狱
// fs.readFile('input.txt',function(err,data){
//     console.log(data.toString());
//     fs.readFile('input2.txt',function(err,data){
//         console.log(data.toString());
//         fs.readFile('input3.txt',function(err,data){
//             // ......
//             console.log(data.toString());
//         })
//     })
// })

// Promise
function readFile1() {
    return new Promise((resolve,reject) => {
        fs.readFile('input.txt',(err,data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
function readFile2() {
    return new Promise((resolve,reject) => {
        fs.readFile('input2.txt',(err,data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
function readFile3() {
    return new Promise((resolve,reject) => {
        fs.readFile('input3.txt',(err,data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    });
}
readFile1().then(data => {
    console.log(data.toString());
    return readFile2();
}).then(data => {
    console.log(data.toString());
    return readFile3()
}).then(data => {
    console.log(data.toString())
});