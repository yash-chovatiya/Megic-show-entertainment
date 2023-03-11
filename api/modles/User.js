const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20
    },
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 20
    },
    DOB: {
        type: Date,
        required: true
    },
    profilePicture: {
        type: String,
        default: "account.png"
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("user", userSchema);