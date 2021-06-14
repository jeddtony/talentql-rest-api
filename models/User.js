const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: false
    },
    verified: {
        type: Boolean,
        required: false
    },
    verified_at: {
        type: Date,
        required: false
    } 
},
{ timestamps: true });

userSchema.post('save', (error, doc, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('Email already exists'));
      } else {
        next(error);
      }
})

module.exports = mongoose.model('User', userSchema);
