const mongoose = require('mongoose');

const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);