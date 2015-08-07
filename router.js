function route(Handle,pathname, response,postData){
	console.log("A punto de rutear una peticion para" + pathname);
	if(typeof Handle[pathname] === 'function'){
		 Handle[pathname](response, postData);
	}
	else{
		console.log("no se encuentra manipulador para" + pathname);
		response.writeHead(404,{"content-type": "text/html"});
		response.write ("404 no se encuentra");
		response.end();
	}
}
exports.route = route;