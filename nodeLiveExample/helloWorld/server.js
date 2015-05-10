var http = require("http");

function start() {
	http.createServer(function(request, response) {
		request.setEncoding("utf8");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}).listen(8881);
}

exports.start = start;