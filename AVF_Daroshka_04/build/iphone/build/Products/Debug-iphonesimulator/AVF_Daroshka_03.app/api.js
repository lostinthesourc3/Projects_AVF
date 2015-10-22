var getData = function(){

	//var getGeo = require("geo");
	var url = "https://api.instagram.com/v1/tags/cat/media/recent?client_id=c2b82a912a31406d90e4fa60480ba01b";
	if (Ti.Network.online) {
	     var urldata = Ti.Network.createHTTPClient();
	     urldata.onload = function(e){
	          console.log(e);  
	          var json = JSON.parse(this.responseText);  
	   
	          var array = [];
	          
	          for(i=0, j=json.data.length; i<j; i++){
		          	var info = {
			          	  username:json.data[i].caption.from.username,
			          	  image: json.data[i].images.standard_resolution,
			          	  text: json.data[i].caption.text,
		          	};
		          	
		          	array.push(info);
		          	console.log(info);
	          };
	          		
	          
	          var db = require("db"); 
	          db.save(info); 
	          // var ui = require("ui");
			  // ui.buildUI(array);
	          var cloud = require("cloud");
	          cloud.login(array);
			  
	     }; 
	     urldata.open("GET", url);
	     urldata.send();
	}else{
	     alert("Network currently unavailable.");
	     timeout: 5000;
	}; 
};


exports.getData = getData;