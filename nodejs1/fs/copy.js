var fs=require("fs")
// var cxckjh=require("cxckjh")

//同步拷贝 顺序执行 
// try{
// 	//读
// 	var data=fs.readFileSync("c:\\data.txt");
// 	//写
// 	fs.writeFileSync("d:\\data.txt")
	
// 	cxckjh.print("拷贝成功")
// }catch(err){
// 	cxckjh.print(err)
// }

//异步拷贝 

fs.readFile("c:\\data.txt",(err,data)=>{
	if (err) {
		throw new Error("文件的读取出错")
	}
	fs.writeFile("d:\\data1.txt",data,(err,data)=>{
	console.log('拷贝成功')
	})
})

