const mongoose = require("mongoose");

const pastaSchema = new mongoose.Schema({
	img: String,
	name: String,
	description: String,
	price: String
});

module.exports = mongoose.models.Pasta || mongoose.model('Pasta', pastaSchema);
