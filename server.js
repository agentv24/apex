var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){

	console.log("Bacon");
}

http.createServer(app).listen(8888);
console.log("Server is running...");