const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    meal: Object,
    starters: Object,
    total: String,
    user_id: String
})

module.exports = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
