var express =require("express"),
	mongoose = require("mongoose")

var app = express()
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home")
});

app.get("/secret", function(req, res){
	res.render("secret")
});


app.listen(8000, function(){
	console.log("Server start!")
})