const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebinarSchema = new Schema({
    _webinarid: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {type: String, maxlength: 500},
    date: Date,
    hosts: String,
    duration: String,
    mainTopic: String,
    skillLevel: {type: String, required: true, enum: ["Beginner", "Intermediate", "Advanced"]},
    quiz: {
        directions: String,
            questions: [{
                question: {
                    body: String,
                    choices: [{
                        choice: String
                    }],
                    answer: String,
                }
            }],
        },
    tags: {
        educational: Boolean,
        networking: Boolean,
        finance: Boolean,
        marketing: Boolean,
        engineering: Boolean
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Webinar = mongoose.model("Webinar", WebinarSchema);

module.exports = Webinar;