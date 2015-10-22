var ui = require("ui"); 
var api = require("api");
//var cloud = require("cloud");

if(Ti.Network.online){
	var cloud = require("cloud");
	cloud.loginUser();
	
	Ti.API.info("Online");
	var geo = require("geo");
	geo.getGeo();
}else{
	alert("Network not found. Please, connect to  internet");
	var db = require("db");
	db.read();
}