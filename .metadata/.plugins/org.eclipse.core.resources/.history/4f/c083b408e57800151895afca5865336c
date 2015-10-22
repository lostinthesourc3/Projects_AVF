var ui = require("ui"); 
var api = require("api");
var cloud = require("cloud");

if(Ti.Network.online){
	Ti.API.info("Online");
	var geo = require("geo");
	geo.getGeo();
}else{
	Ti.API.info("Network not found");
	var db = require("db");
	db.read();
}
