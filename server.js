var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){

	console.log("User requested profile");
	
}

function forum(request, response){

	console.log("User requested forum");

}
function index(request, response){

	console.log("User requested index");

}

app.use('/profile', profile);
app.use('/forum', forum);
app.use('/', index);

http.createServer(app).listen(8888);
console.log("Server is running...");