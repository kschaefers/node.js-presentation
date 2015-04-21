var http = require("http");

require("./finalVersion/index").go();

var handle = {};
handle["/finalVersion"] = "http://localhost:8887";

function onRequest(request, response) {
    //control the favicon
    if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end();
        return;
    }
	
    if (typeof handle[request.url] === 'string') {
		response.writeHead(302, {Location: handle[request.url]});
		response.end();
	} else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

http.createServer(onRequest).listen(8888);
console.log("main server has started.");