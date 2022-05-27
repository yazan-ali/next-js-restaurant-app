const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);