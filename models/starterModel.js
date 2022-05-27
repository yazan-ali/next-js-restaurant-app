const mongoose = require("mongoose");

const starterSchema = new mongoose.Schema({
        name: String,
        price: String
});

module.exports = mongoose.models.Startre || mongoose.model('Startre', starterSchema);