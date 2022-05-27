const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
	img: String,
	name: String,
	description: String,
	price: String
});

module.exports = mongoose.models.Deal || mongoose.model('Deal', dealSchema);
