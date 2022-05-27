var mongoose = require("mongoose");

var dessertSchema = new mongoose.Schema({
	img: String,
	name: String,
	description: String,
	price: String,
});

module.exports = mongoose.models.Dessert || mongoose.model('Dessert', dessertSchema);
