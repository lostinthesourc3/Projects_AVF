var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "vertical",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var topBar = Ti.UI.createView({
	top: 0, 
	width: "100%",
	height: 100, 
	backgroundColor: "#460067"
});
var catWorld = Ti.UI.createLabel({
	text: "Cat World",
	font: {fontSize: 30, fontFamily: "SnellRoundhand-Black"},
	color: "#fff",
	bottom: 10
});
topBar.add(catWorld);


//SCROLL VIEW

var scrollView = Ti.UI.createScrollView({
	top: 0,
	width: "100%", 
	height: 824,
	showVerticalScrollIndicator: true,
	backgroundColor: "blue",
	layout: "vertical"
});


//------------------------------------------
var buildUI = function(cats){
	for(i=0, j=cat.length; i<j; i++){
		var holder = Ti.UI.createView({
			top: 20,
			width: 450,
			height: Ti.UI.SIZE,
			backgroundColor: "#fdfdfd",
			layout: "vertical"
		});
		scrollView.add(holder);
		
		var user = Ti.UI.createLabel({
			top: 0,
			left: 0,
			text: cats[i].username,
			font: {fontSize: 15, fontFamily: "AvenirNext-Bold"},
			color: "#000"
		});
		var image = Ti.UI.createImageView({
			top: 5,
			height: 450,
			// height: Ti.UI.ZIZE,
			width: 450,
			backgroundColor: "#000",
			image: cats[i].image
		});
		var tags = Ti.UI.createLabel({
			top: 5, 
			left: 0, 
			text: cats[i].text,
			font: {fontSize: 15, fontFamily: "AvenirNext-Regular"},
			color: "#000"
		});
		holder.add(user);
		holder.add(image);
		holder.add(tags);
	}
};
 

var bottomBar = Ti.UI.createView({
	top: 0, 
	width: "100%",
	height: 100, 
	backgroundColor: "#460067"
});

//add screenshot and camera buttons

win.add(topBar);
win.add(scrollView);
win.add(bottomBar);

win.open(); 













//1----------------------------------------------

// var btn3 = Ti.UI.createView({
	// top: 50,
	// width: "100%",
	// height: 50,
	// backgroundColor: "#9f9f9f"
// });
// var btn3txt = Ti.UI.createLabel({
	// text: "Take A Picture",
	// color: "#fff",
	// font: {fontSize: 35}
// });
// btn3.add(btn3txt);
// 
// btn3.addEventListener("click",function(){
	// Titanium.Media.showCamera({
		// success:function(event) {
			// // called when media returned from the camera
			// Ti.API.debug('Our type was: '+event.mediaType);
			// if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				// // var imageView = Ti.UI.createImageView({
					// // width:win.width,
					// // height:win.height,
					// // image:event.media
				// // });
				// // win.add(imageView);
			// } else {
				// alert("got the wrong type back ="+event.mediaType);
			// }
		// },
		// cancel:function() {
			// // called when user cancels taking a picture
		// },
		// error:function(error) {
			// // called when there's an error
			// var a = Titanium.UI.createAlertDialog({title:'Camera'});
			// if (error.code == Titanium.Media.NO_CAMERA) {
				// a.setMessage('Please run this test on device');
			// } else {
				// a.setMessage('Unexpected error: ' + error.code);
			// }
			// a.show();
		// },
		// saveToPhotoGallery:true,
	    // // allowEditing and mediaTypes are iOS-only settings
		// allowEditing:true,
		// mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
	// });
// });
// 
// //--------------------------------------
// 
// 
// var nearMe = Ti.UI.createLabel({
	// top: 15, 
	// text: "Photo Studios Near Me",
	// font: {fontSize: 35, fontWeight: "bold"}
// });
// 
// //scrollview
// var list = Ti.UI.createScrollView({
	// top: 15,
	// bottom: 0,
	// width: "100%", 
	// height: 820,
	// showVerticalScrollIndicator: true,
	// backgroundColor: "#fff",
	// layout: "vertical"
// });
// 
// var buildUI = function(data){
	// for(i=0, j=data.length; i<j; i++){
		// var bubble = Ti.UI.createView({
			// width: "80%",
			// backgroundColor: "#fff",
			// height: 200,
			// layout: "vertical"
		// });
		// list.add(bubble);
// 		
		// var nameLBL = Ti.UI.createLabel({
			// top: 5,
			// font: {fontSize: 20, fontWeight: "bold"},
			// text: data[i].name
		// });
		// var phoneLBL = Ti.UI.createLabel({
			// font: {fontSize: 20},
			// text: data[i].phone
		// });
		// var addressLBL = Ti.UI.createLabel({
			// font: {fontSize: 20},
			// text: data[i].street + ", " + data[i].city + ", " + data[i].state + " " + data[i].zip
		// });
		// var crossStreetLBL = Ti.UI.createLabel({
			// font: {fontSize: 20},
			// text: data[i].crossStreet
		// });
// 		
		// bubble.add(nameLBL);
		// bubble.add(phoneLBL);
		// bubble.add(addressLBL);
		// bubble.add(crossStreetLBL);
	// }
// };
// 
// 
// exports.buildUI = buildUI;
// 
// win.add(btn3);
// win.add(nearMe);
// win.add(list);