var express = require("express");
var app = express();

var PORT = process.env.PORT || 3001;

app.all('/*' , function(req,res){
	res.send('<!DOCTYPE html> <html> <head> <title> Social App </title><base href="/"></head><body><div ui-view></div><script src="bundle.js"></script></body></html>');
				

});

app.listen(PORT ,function(){
	console.log('Running on port'+PORT);

});


