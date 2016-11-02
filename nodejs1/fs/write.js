var fs=require("fs")
var cxckjh=require("cxckjh")

var data="写不完";
fs.writeFile("d:\\data.txt",data,(err,data)=>{
	if (err) 
		throw new Error("写入出错");
	cxckjh.print('文本写入完毕')
})
