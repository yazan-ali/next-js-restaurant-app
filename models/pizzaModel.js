import mongoose from 'mongoose'

const pizzaSchema = new mongoose.Schema({
	type: String,
	img: String,
	name: String,
	description: String,
	price: {
		type_1: {
			medium: String,
			large: String,
			small: String
		},
		type_2: {
			medium: String,
			large: String,
			small: String
		},
		type_3: {
			medium: String,
			large: String,
			small: String
		},
		type_4: {
			medium: String,
			large: String,
			small: String
		},
		type_5: {
			medium: String,
			large: String,
			small: String
		}
	}
});

module.exports = mongoose.models.Pizza || mongoose.model('Pizza', pizzaSchema);
