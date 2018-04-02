let fs = require('fs');
let http = require('http');
let url = require('url');

let server= http.createServer(function (request,response){
    //当请求一次，这里的回调函数执行一次
    //console.log('我我我');
    //response.writeHead(200,{'content-type':'text/plain;charset=utf-8'});//设置响应头，默认不设置，中文乱码
    // console.log(request.url);
    // response.end('我我我');
    let {pathname} = url.parse(request.url);
    console.log(url.parse(request.url));
    console.log(pathname);
    //let con = fs.readFileSync(`.${pathname}`,'utf-8');
    let con = fs.readFileSync('./index.html','utf-8');

    console.log(con)
    response.end(con); //在浏览器中输出
    //console.log(url.parse(request.url).pathname);
});

server.listen(8080,function(){
    //监听成功，执行回调函数
    console.log(1);
});