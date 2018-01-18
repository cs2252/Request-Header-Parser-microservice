var express=require("express");
var cors=require("cors");
var bodyParser=require('body-parser');
var useragent=require('express-useragent');

var app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());


app.get("*",function(req,res,next){
	var language=req.acceptsLanguages();
	// var software=req.get('User-Agent');
	// var software=req.useragent;
	var software="OS: "+req.useragent.os+",  Browser: "+req.useragent.browser;
	var ipaddress=req.ip;
	res.json({language:language[0],
				software:software,
				ipaddress:ipaddress});
});











app.listen(3000,function(){
	console.log("its working");
})