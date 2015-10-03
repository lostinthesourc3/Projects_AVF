var geo = require("geo");

var win = Ti.UI.createWindow({
	backgroundImage: "wallpaper.png",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
	layout: "vertical"
});

//current weather conditions
var bgView = Ti.UI.createView({
	height: 305,
	width: "70%",
	top: 150,
	backgroundColor: "#80ffffff",
	layout: "vertical"
});
var locationText = Ti.UI.createLabel ({
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	color: "#3d1104",
	text: " ", 
	top: 25
});

var tempText = Ti.UI.createLabel({
	font: {fontFamily: "AvenirNext-DemiBold ", fontSize: 100},
	text: " ",
	top: 10,
	color: "#3d1104"
});

var weatherText = Ti.UI.createLabel({
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	text: " ",
	color: "#3d1104"
});	

var feelText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#3d1104",
	left: 15,
	top: 10
});

var humidText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#3d1104",
	left: 15,
});

bgView.add(locationText, tempText, weatherText, feelText, humidText);

//current cond elements
var currentCond = Ti.UI.createLabel({
	text: "CURRENT CONDITIONS", 
	font: {fontFamily: "Avenir-Black", fontSize: 20},
	color: "#3d1104",
	left: 55,
	top: 60
});

var conditionsView = Ti.UI.createView({
	height: 150,
	width: "70%",
	top: 10,
	backgroundColor: "#00ffffff",
	layout: "vertical"
});

var wind = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#3d1104",
	left: 0,
	top: 0	
});
var visibility = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#3d1104",
	left: 0,
	//top: 10	
});
var heatInd = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#3d1104",
	left: 0,
	//top: 10	
});
var pressure = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#3d1104",
	left: 0,
	//top: 10	
});
var solarRad = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#3d1104",
	left: 0,
	//top: 10	
});
conditionsView.add(wind, visibility, heatInd, pressure, solarRad);



// astronomy 
var astronomy = Ti.UI.createLabel({
	text: "ASTRONOMY", 
	font: {fontFamily: "Avenir-Black", fontSize: 20},
	color: "#3d1104",
	left: 55,
	top: 60
});

var bar = Ti.UI.createView({
	backgroundColor: "#8073210c",
	height: 130,
	top: 10,
	width: "100%",
	layout: "vertical"
});

var illum = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#ffcea0",
	left: 114,
	top: 10	
});

var age = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#ffcea0",
	left: 114,
	top: 0	
});

var phase = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#ffcea0",
	left: 114,
	top: 0	
});

var hemi = Ti.UI.createLabel({
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#ffcea0",
	left: 114,
	top: 0	
});
bar.add(illum, age, phase, hemi);

//text
var buildUI = function(weatherInfo){
	locationText.text = weatherInfo.loc;
	tempText.text = weatherInfo.temp;
	weatherText.text = weatherInfo.weather;
	feelText.text = "FEELS LIKE: " + weatherInfo.feelLike + "ºF";
	humidText.text = "HUMIDITY: " + weatherInfo.humid; 
	wind.text = "WIND: " + weatherInfo.wind;
	visibility.text = "VISIBILITY: " + weatherInfo.visib + "mi";
	heatInd.text = "HEAT INDEX: " + weatherInfo.heat;
	pressure.text = "PRESSURE: " + weatherInfo.pressure + "in";
	solarRad.text = "SOLAR RADIATION: " + weatherInfo.sRad;
};

var moonUI = function(astrInfo){
	sunrise.text = astrInfo.sunrise;
	sunset.text = astrInfo.sunset;
	moonAge.text = astrInfo.moonAge;
	moonPhase.text = astrInfo.moonPhase;
};

exports.buildUI = buildUI;
exports.moonUI = moonUI;

win.add(bgView, currentCond, conditionsView, astronomy, bar);
win.open();



