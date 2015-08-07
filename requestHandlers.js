var querystring = require("querystring");

function iniciar(response, postData){
	console.log("Manipulador de peticion iniciar ha sido llamado");

	var body = '<html>' +
		'<head>'+
		
		'</head>'+
		'<body>'+
		'<form action="/subir" method="post">'+
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Enviar texto" />' +
		'</form>'+
		'</body>'+
		'</html>';

	//exec("Ls -Lash", function(error, stdout, stderr){
		response.writeHead(200,{"content-type":"text/html"});
		response.write(body);
		response.end();
	
	}
	

function subir(response, dataPosteada){
	console.log("Manipulador de peticion Subir ha sido llamado");
	response.writeHead(200,{"Content-Type": "text/html"});
	response.write("tu enviaste el texto: :  " + 
		querystring.parse(dataPosteada)["text"]);
	response.end();
	//return "hola Subir";
}

exports.iniciar = iniciar;
exports.subir = subir;