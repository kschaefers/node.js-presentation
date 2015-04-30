var server = require("./server");
var router = require("./router");

function start() {
	server.start(router.route);
}

exports.start=start;