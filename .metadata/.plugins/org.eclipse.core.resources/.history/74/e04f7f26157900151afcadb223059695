var read = function(){
	var db = Ti.Database.open("stockDB");
	//db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id INTEGER PRIMARY KEY, username TEXT, image TEXT, text TEXT)");
	var dbResult = db.execute("SELECT * FROM stockTBL");
	var info = [];	
		while (dbResult.isValidRow()){
			var localData = {
				username: dbResult.fieldByName("username"),
				image: dbResult.fieldByName("image"),
				text: dbResult.fieldByName("text"),
			};
		info.push(localData);	
		dbResult.next();
	}

	dbResult.close();
	db.close();
	console.log(localData);
	
	var ui = require("ui");
	ui.buildUI(info);
};

var save = function(savedData){
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id INTEGER PRIMARY KEY, username TEXT, image TEXT, text TEXT)");
	db.execute("DELETE FROM stockTBL");
	for(i=0, j=savedData.length; i<j; i++){
		db.execute("INSERT INTO stockTBL (username, image, text) VALUES (?, ?, ?)", savedData[i].username, savedData[i].image, savedData[i].text);
	};
	// for(i in savedData){
		// db.execute("INSERT INTO stockTBL (username, image, text) VALUES (?, ?, ?)", savedData[i].username, savedData[i].image, savedData[i].text);
	// }; 
	
	//db.execute("INSERT INTO stockTBL (username, image, text) VALUES (?, ?, ?)", savedData.username, savedData.image, savedData.text);
	console.log(savedData);
	// var rowID = db.lastInsertRowId;
	// console.log(rowID);
	db.close();
	read(); 
};

exports.save = save;
//exports.read = read;