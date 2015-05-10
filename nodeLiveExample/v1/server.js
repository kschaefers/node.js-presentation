var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.");
		request.setEncoding("utf8");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8882);

    console.log("Server has started.");
}

exports.start = start;