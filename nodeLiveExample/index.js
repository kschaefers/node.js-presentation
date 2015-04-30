var http = require("http");

require("./helloWorld/server").start();
require("./v1/index").start();
require("./v2/index").start();
require("./v3/index").start();
require("./v4/index").go();

var handle = {};
handle["/helloWorld"] = "http://localhost:8881";
handle["/v1"] = "http://localhost:8882";
handle["/v2"] = "http://localhost:8883";
handle["/v3"] = "http://localhost:8884";
handle["/v4"] = "http://localhost:8887";

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