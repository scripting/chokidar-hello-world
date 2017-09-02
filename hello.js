var myVersion = "0.4.1", myProductName = "chokidarHelloWorld";   
const chokidar = require ("chokidar");
let watcher = chokidar.watch ("watch/", {
	ignoreInitial: true,
	awaitWriteFinish: true
	});
watcher.on ("all", function (event, f) {
	console.log ("event == " + event + ", f == " + f);
	});
