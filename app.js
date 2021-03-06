var http = require('http'); 
var fs = require('fs'); // to get data from html file 

http.createServer(function (req, res) { 
	res.writeHead(200, { 'Content-Type': 'text/html' }); 

	// req.url stores the path in the url 
	var url = req.url; 
	const newLocal = "/newpage";
	if (url === "/") { 
// fs.readFile looks for the HTML file 
// the first parameter is the path to the HTML page 
// the second is the call back function 
// if no file is found the function gives an error 
// if the file is successfully found, the content of the file are contained in pgres 
		fs.readFile("header.html", function (err, pgres) { 
			if (err) 
				res.write("HEAD.HTML NOT FOUND"); 
			else { 
				// The following 3 lines 
				// are reponsible for sending the html file 
				// and ends the response process 
				res.writeHead(200, { 'Content-Type': 'text/html' }); 
				res.write(pgres); 
				res.end(); 
			} 
		}); 
	} 
	else if (url === "/aboutus") { 
		fs.readFile("aboutus.html", function (err, pgres) { 
			if (err) 
				res.write("ABOUTUS.HTML NOT FOUND"); 
			else { 
				res.writeHead(200, { 'Content-Type': 'text/html' }); 
				res.write(pgres); 
				res.end(); 
			} 
		}); 
	} 
	else if (url === "/newpage") { 
		fs.readFile("newpage.html", function (err, pgres) { 
			if (err) 
				res.write("New page.HTML NOT FOUND"); 
			else { 
				res.writeHead(200, { 'Content-Type': 'text/html' }); 
				res.write(pgres); 
				res.end(); 
			} 
		}); 
	} 
	
}).listen(3000, function () { 
	console.log("SERVER STARTED PORT: 4000"); 
}); 
