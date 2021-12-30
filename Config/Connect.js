//IMPORTS
const mongoose = require("mongoose");

//CONNECTION TO DATABASE
const ConnectDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017");
		console.log(`DATABASE CONNECTED`);
	} catch (err) {
		console.log(err);
	}
};

//EXPORTS
module.exports = ConnectDB;
