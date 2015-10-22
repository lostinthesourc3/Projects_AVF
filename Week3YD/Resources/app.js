
//var api = require("api");
//var cloud = require("cloud");

if(Ti.Network.online){
	Ti.API.info("Online");
	
	var cloud = require("cloud");
	cloud.loginUser();
	
	var geo = require("geo");
	geo.getGeo();
	
	var api = require("api");
	api.getData();
}else{
	alert("Network not found. Please, connect to  internet");
	var db = require("db");
	db.read();
	
	
}