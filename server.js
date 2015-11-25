var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());

app.listen(8888, function() {
	console.log("Treedentity program active");
});