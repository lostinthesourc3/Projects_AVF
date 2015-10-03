//The following code is similar to code written by one of the students in the previous class. 
//This code makes sense to me as I dissected it and learned how it all is incorporated and how it works
//and I understand why it works as I had a ton of trouble trying to start with this app. 


var getGeo = function(){
	if(Ti.Geolocation.locationServicesEnabled){ //location 
		Ti.Geolocation.purpose = "Get current location";
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
		Ti.Geolocation.distaceFilter = 10;
		Titanium.Geolocation.getCurrentPosition(function(e){ //get coords
			if(e.error){
				alert("Enable location services" + e.error);
			}else{
				Ti.API.info(e.coords);
				console.log(e.coords);
				var lat = e.coords.latitude;
				var lng = e.coords.longitude;
				var url = "http://api.wunderground.com/api/d1e578e5aa05dc1d/conditions/q/"+lat+","+lng+".json"; //current cond API
				if (Ti.Network.online) {
				     var getData = Ti.Network.createHTTPClient();
				     getData.onload = function(e){
				          console.log(e);  //raw data-string returned from the URL request
				          var weatherArray = JSON.parse(this.responseText);  //convert the string to JS object notation
				          var weatherInfo = {
				          	  loc: weatherArray.current_observation.display_location.full,
				          	  temp: weatherArray.current_observation.temp_f + "ºF",
				          	  feelLike: weatherArray.current_observation.feelslike_f ,
				          	  weather: weatherArray.current_observation.weather,
				          	  humid: weatherArray.current_observation.relative_humidity
				          };				          
				          var ui = require("ui");
						  console.log(weatherInfo);	
				          ui.buildUI(weatherInfo);
				     }; //getData.onload closing
				     getData.open("GET", url);
				     getData.send();
				}else{
				     alert("Network currently unavailable.");
				     timeout: 5000;
				}; // if else Ti.Network closing
			}
		});
	}	
};

exports.getGeo = getGeo;









