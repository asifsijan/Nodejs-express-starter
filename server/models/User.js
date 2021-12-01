const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pass: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        
    },
    token: {
        type: String,
    },
    
},{timestamps: true});

const User = mongoose.model("user", userSchema);

module.exports = User;
