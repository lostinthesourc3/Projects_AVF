
var getGeo = function(){
	if(Ti.Geolocation.locationServicesEnabled){
		Ti.Geolocation.purpose = "Get current location";
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
		Ti.Geolocation.distaceFilter = 10;
		Titanium.Geolocation.getCurrentPosition(function(e){
			if(e.error){
				alert("Enable location services" + e.error);
			}else{
				Ti.API.info(e.coords);
				console.log(e.coords);
				var lat = e.coords.latitude;
				var lng = e.coords.longitude;
				var url = "http://api.wunderground.com/api/d1e578e5aa05dc1d/conditions/q/"+lat+","+lng+".json";
				if (Ti.Network.online) {
				     var getData = Ti.Network.createHTTPClient();
				     getData.onload = function(e){
				          console.log(e);  //this is the raw data-string returned from the URL request
				          var weatherArray = JSON.parse(this.responseText);  //convert the string to JS object notation
				          var weatherInfo = {
				          	  loc: weatherArray.current_observation.display_location.full,
				          	  temp: weatherArray.current_observation.temp_f + "ºF",
				          	  feelLike: weatherArray.current_observation.feelslike_f ,
				          	  weather: weatherArray.current_observation.weather,
				          	  humid: weatherArray.current_observation.relative_humidity,
				          	  wind: weatherArray.current_observation.wind_string,
				          	  visib: weatherArray.current_observation.visibility_mi,
				          	  heat: weatherArray.current_observation.heat_index_f,
				          	  pressure: weatherArray.current_observation.pressure_in,
				          	  sRad: weatherArray.current_observation.solarradiation,
				          };				          
				          var ui = require("ui");
						  console.log(weatherInfo);	
				          ui.buildUI(weatherInfo);
				     }; //getData.onload closing
				     getData.open("GET", url);
				     getData.send();
				} else {
				     alert("Network currently unavailable.");
				     timeout: 5000;
				     // load locally stored data perhaps?
				}; // if else Ti.Network closing
			}
		});
	}	
};

exports.getGeo = getGeo;

// var moon = "http://api.wunderground.com/api/d1e578e5aa05dc1d/astronomy/q"+lat+","+lng+".json";// astronomy 
// if (Ti.Network.online) {
     // var getDataM = Ti.Network.createHTTPClient();
     // getDataM.onload = function(e){
          // console.log(e);  //this is the raw data-string returned from the URL request
          // var moonArray = JSON.parse(this.responseText);  //convert the string to JS object notation
          // var moonInfo = {
          	  // illum: moonArray.moon_phase.percentIlluminated,
          	  // age: moonArray.moon_phase.ageOfMoon,
          	  // phase: moonArray.moon_phase.phaseOfMoon,
          	  // hemi: moonArray.moon_phase.hemisphere,
          // };				          
          // var ui = require("ui");
		  // console.log(moonInfo);	
          // ui.moonUI(moonInfo);
     // }; //getDataA.onload closing 
     // getDataM.open("GET", moon);
     // getDataM.send();
// } else {
     // alert("Network currently unavailable.");
     // timeout: 5000;
     // // load locally stored data perhaps?
// }; // if else Ti.Network closing		








