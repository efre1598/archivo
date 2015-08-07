var http = require("http");
var url = require("url");

function iniciar(route, Handle){
function onRequest(request, response){
	var dataPosteada = "";
	var pathname = url.parse(request.url).pathname;
	console.log("Peticion para" + pathname + " recibida.");

	request.setEncoding("utf8");

	request.addListener("data", function(trozoPosteado){
		dataPosteada  += trozoPosteado;
		console.log("Recibido trozo Post'" + trozoPosteado + "'.");
		});
	
		request.addListener("end", function(){
			route(Handle, pathname, response, dataPosteada);
		});

	}

	http.createServer(onRequest).listen(8888);
	console.log("servidor iniciado");
}
 exports.iniciar = iniciar;