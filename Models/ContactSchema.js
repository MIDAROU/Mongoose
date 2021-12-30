//IMPORTS
const mongoose = require("mongoose");

//SCHEMA
const ContactSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
	},
	age: Number,
});

//EXPORTS
module.exports = mongoose.model("contact", ContactSchema);
