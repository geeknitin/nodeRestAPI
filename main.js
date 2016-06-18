console.log("hello world!!!")

var http = require("http");

//console.log(http);
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());


var express = require('express');
var app = express();

app.get('/:id', function (req, res) {
// First read existing users.
	fs.readFile("/Users/nitigupta/Desktop/users.json", 'utf8', function (err, data) {
		data = JSON.parse( data );

		var user = data["user" + req.params.id];
		console.log( user );
		res.end( JSON.stringify(user));
	}); 
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})

/*
http.createServer(function (request, response) {
	// Send the HTTP header
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// Send the response body as "Hello World" 
	response.end('Hello World\n');

	//console.log(response);
	console.log(request);

	//request.ref

}).listen(8081);



console.log('Server running at http://127.0.0.1:8081/');

*/

console.log("program ended")
