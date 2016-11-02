


function print(msg){
	var now=new Date();
	var result=now.getFullYear()+"-"+(now.getMonth()+1)
	console.log("时间"+result+msg)
}

exports.print=print;