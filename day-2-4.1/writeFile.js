let fs = require('fs');

// fs.writeFile('./1.txt','i write file','utf-8',function(err,val){
// fs.writeFile('./1.txt',{name:'ss'},'utf-8',function(err,val){
fs.writeFile('./1.txt','<Buffer 5b 6f 62 6a 65 63 74 20 4f 62 6a 65 63 74 5d>','utf-8',function(err,val){
    console.log(err);
    console.log(val);
    console.log(1);
})
console.log(2);

// console.log({name:'ss'}.toString());
// console.log([].toString());
// console.log([1,2,3].toString());