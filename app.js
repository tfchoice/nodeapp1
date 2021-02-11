var http = require("http");
var fs = require('fs');
http.createServer(function(req,res)
{
  res.writeHead(200,{"Content-Type" : 'text/html'});
	
	var url = req.url;
	if(url ==='/')
	{
	
	 fs.readFile("header.html", function(err,pgres))
	 {
	 	if(err)
		{
		 res.write("header file not found");
		
		}else
		{
		 res.writeHead(200,{"Content-Type": "text/html"})
		 res.write(pgres);
		 res.end(); 
		}
	 });
	}
}).listen(3000,function(){
console.log("server statted at port 3000");
});
