const http=require("http");//const 创建一个常量
//http://user:pass@host:port/path     (用户名 密码 主机名 端口 路径)
var url=require("url");
var fs=require("fs")
// var urlStr="http://user:password@10.0.161.193:8080/index.html?id=10&name=tom";
// var urlObj=url.parse(urlStr);//url转对象
// console.log(urlObj);

// //对象转url
// console.log(url.format(urlObj));


//创建了一个服务器对象
const server=http.createServer(function(req,res){//俩参数 一个请求 一个响应
	fs.readFile("c:\\index.html",(err,data)=>{
		res.writeHead(200,{'Content-Type':'text/html'});//200状态码 说明成功 
		res.write(data);
		res.end();
	})
	console.log("请求未接受");
});//在函数里面处理请求
server.listen(7700);
console.log("服务器启动")

