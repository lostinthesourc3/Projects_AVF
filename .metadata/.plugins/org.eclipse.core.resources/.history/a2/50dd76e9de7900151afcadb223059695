var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout: "vertical",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

var topBar = Ti.UI.createView({
	top: 0, 
	width: "100%",
	height: "10%", 
	backgroundColor: "#460067"
});
var catWorld = Ti.UI.createLabel({
	text: "CAT  PICTURES",
	font: {fontSize: 30, fontFamily: "AvenirNext-Heavy"},
	color: "#fff",
	bottom: 10
});
topBar.add(catWorld);




//SCROLL VIEW

var scrollView = Ti.UI.createScrollView({
	top: 0,
	width: "100%", 
	height: "80%",
	showVerticalScrollIndicator: true,
	backgroundColor: "#fff",
	layout: "vertical",
	minZoomScale: 1,
	maxZoomScale: 10,
	zoomScale:1,
	oldZoom: 1
});
scrollView.addEventListener("pinch", function(e){
	if(e.scale>1)
	{
		if(e.scale>scrollView.zoomScale){
			scrollView.zoomScale=e.scale;
		}else{
			scrollView.zoomScale=scrollView.oldZoom+(e.scale-1);
		}
	}
	else
	if(e.sclale<scrollView.zoomScale)
	scrollView.zoomScale=scrollView.zoomScale-(1-e.scale);
});


//------------------------------------------
var buildUI = function(cats){
	for(i=0, j=cats.length; i<j; i++){
		var holder = Ti.UI.createView({
			top: 40,
			width: 450,
			height: Ti.UI.SIZE,
			backgroundColor: "#fff",
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
			height: Ti.UI.SIZE,
			width: Ti.UI.SIZE,
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
	bottom: 0,
	width: "100%",
	height: "11%", 
	backgroundColor: "#460067"
});
var circle = Ti.UI.createImageView({
        width: 70,
        height: 70,
        //borderRadius: 35,
        backgroundColor: "#00ffffff",
        image: "/shutter.png"
});

bottomBar.add(circle);	
		
		
		
circle.addEventListener("click",function(){
	
	//TO TAKE VIDEO ON ANDROID
	
	// if(Ti.Platform.osname === "android"){
		    // var intent = Titanium.Android.createIntent({ action: 'android.media.action.VIDEO_CAPTURE' });
		    // win.activity.startActivityForResult(intent, function(e) {
		        // if (e.resultCode == Ti.Android.RESULT_OK) {
		            // if (e.intent.data != null) {
		                // // If everything went OK, save a reference to the video URI
		                // videoURL = e.intent.data;
		                // playButton.visible = true;
		    	    // }
		            // else {
		                // Ti.API.error('Could not retrieve media URL!');
		            // }
		        // }
		        // else if (e.resultCode == Ti.Android.RESULT_CANCELED) {
		            // Ti.API.trace('User cancelled video capture session.');
		        // }
		        // else {
		            // Ti.API.error('Could not record video!');
		        // }
		    // });
// 		
		// playButton.addEventListener('click', function(){
		    // var player = Ti.Media.createVideoPlayer({ url: videoURL, autoplay: true});
		    // win.add(player);
		// });
// 		
// 		
	// }else{
		
		Titanium.Media.showCamera({
			success:function(event) {
				// called when media returned from the camera
				Ti.API.debug('Our type was: '+event.mediaType);
				if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

				} else {
					alert("got the wrong type back ="+event.mediaType);
				}
			},
			cancel:function() {
				
			},
			error:function(error) {
			
				var a = Titanium.UI.createAlertDialog({title:'Camera'});
				if (error.code == Titanium.Media.NO_CAMERA) {
					a.setMessage('Please run this test on device');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			},
			saveToPhotoGallery:true,
		    
			allowEditing:true,
			mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO]
		});
	//}     //closes the full function if I want to add video recording to Android
});	



exports.buildUI = buildUI;

win.add(topBar);
win.add(scrollView);
win.add(bottomBar);

win.open(); 