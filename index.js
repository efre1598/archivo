var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var Handle = {}
Handle["/"] = requestHandlers.iniciar;
Handle["/iniciar"] = requestHandlers.iniciar;
Handle["/subir"]   = requestHandlers.subir;

 server.iniciar(router.route, Handle);
