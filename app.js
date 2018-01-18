
var ip=require("public-ip");
var express=require("express");
var bodyParser =require("body-parser");
var os=require("os");
var networkInterface=os.networkInterfaces();


var app=express();
app.use(bodyParser.json());
app.get("",function(req,res,next){
	var language=req.acceptsLanguages();
	ip.v4().then(function(args){
			res.json({software:os.type()+"   "+os.release()+"   "+os.platform(),
						ipaddress:args,
						languages:language[0]
		});

	});
});

app.listen(3000,function(){
	console.log("its working");
});