var getGeo = function(){
	if(Ti.Platform.osname === "android"){
		var lat = 40.88010787963867;
		var lng = -74.11193084716797;
		var loc = lat + "," + lng;
		exports.loc = loc;
		var api = require("api");
		api.getData(lat, lng);
		
	}else{ 
		Titanium.Geolocation.purpose = "Get Current Position";
		Titanium.Geolocation.getCurrentPosition(function(e){
			console.log(e);
			if(e.error){
				alert("Enable location services");
			}else{
				Ti.API.info(e.coords);
				console.log(e.coords);
				var lat = e.coords.latitude;
				var lng = e.coords.longitude;
				var loc = lat + "," + lng;
				exports.loc = loc;
				var api = require("api");
				api.getData(lat, lng);
			}
		});
	};
}; 

exports.getGeo = getGeo;