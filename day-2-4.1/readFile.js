let fs = require('fs');

//读取文件路径,编码，回调函数
fs.readFile('./1.txt',function(err,val){ //异步
    //读取成功调用里面的函数
    console.log(val);
    console.log(typeof val);
})
console.log(111)

let con = fs.readFileSync('./1.txt','utf-8');//同步
console.log(con);
console.log(222);

//追加
/*fs.readFile('./1.txt',function(err,val){ //异步
    //读取成功调用里面的函数
    console.log(val);
    console.log(typeof val);
    fs.writeFile('./1.txt',val + '11111',function(err){})
})*/

fs.appendFile('./1.txt','append',function(err,val){
    console.log(err)
    console.log(val)
})