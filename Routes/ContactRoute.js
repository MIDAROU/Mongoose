//IMPORTS
const express = require("express");
const ContactSchema = require("../Models/ContactSchema");
const Router = express.Router();

//GET METHOD
Router.get("/list", async (req, res) => {
	try {
		const contacts = await ContactSchema.find();
		res.status(200);
		res.send(contacts);
	} catch (err) {
		res.send(err);
	}
});

//POST METHOD
Router.post("/add", async (req, res) => {
	try {
		const addContact = new ContactSchema(req.body);
		await addContact.save();
		res.send({ msg: "Contact Added", addContact });
	} catch (err) {
		res.send(err);
	}
});

//PUT METHOD
Router.put("/update/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const updated = await ContactSchema.findByIdAndUpdate(id, {
			$set: { ...req.body },
		});
	} catch (err) {
		res.send(err);
	}
});

//DELETE METHOD
Router.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const deleted = await ContactSchema.findByIdAndDelete(id);
		res.send({ msg: "Contact Removed", deleted });
	} catch (err) {
		res.send(err);
	}
});

//EXPORTS
module.exports = Router;
