const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: "Username is a required field",
        trim: true
    },
    password: {
        type: String,
        required: "Password is a required field",
        trim:true
    },
    role: {type: String, required: true, enum: ["Virtuoso", "Prodigy"]},
    favorite: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }],
    registered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }],
    completedVideo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }],
    passedQuiz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Webinar"
    }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;