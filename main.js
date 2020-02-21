var httpWas = require('http');
var fileStream = require('fs');
var webServer = httpWas.createServer(function(request, response) {
	var url = request.url;
	if(request.url == '/'){
		url = '/main.html';
	}
	
	if(request.url == '/favicon.ico'){
		return response.writeHead(404);
	}
	
	response.writeHead(200);
	response.end(fileStream.readFileSync(__dirname + url));
});

webServer.listen(8080, function(){
	console.log('Server running at http://127.0.0.1:8080');
});