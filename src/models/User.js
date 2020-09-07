const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    temp: Number,
    systolic: Number,
    dystolic: Number,
    sp02: Number,
    pulseRate: Number
});

const User = mongoose.model("User", UserSchema);
module.exports = User