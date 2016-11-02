var fs=require("fs")
var cxckjh=require("cxckjh")

//异步读取文件：无需等待
// console.log(fs);
// fs.readFile("c:\\data.txt",cb);
// function cb (err,data) {
// 	if (err) {
// 		console.log("错误"+err)
// 	}
// 	console.log("数据"+data)//data.toString() 转化为字符串 或者在data前或后加上字符串
// }
//es6中改写上述回调函数
// fs.readFile("c:\\data.txt",(err,data)=>{
// 	if (err) throw err;
// 	console.log(data.toString());
// })

//同步读取文件:等待函数的执行 才执行下面的代码
var data=fs.readFileSync("c:\\data.txt",{"encoding":"utf-8"}),
cxckjh.print(data.toString());

// 同步交互：指发送一个请求,需要等待返回,然后才能够发送下一个请求，有个等待过程；

// 异步交互：指发送一个请求,不需要等待返回,随时可以再发送下一个请求，即不需要等待。
// 区别：一个需要等待，一个不需要等待，在部分情况下，我们的项目开发中都会优先选择不需要等待的异步交互方式。


