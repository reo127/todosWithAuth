const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLenth: [100, "Your name shoud not be bigger then 100 word"],
        minLenth: [3, "name should be bigger then 3 word"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    password: {
        type: String,
        minLenth: [3, "name should be bigger then 3 word"],
        required: true,
    },
   tasks: [
    {
        todos : {
            type:String
        }
    }
   ]
}, { timestamps: true })


module.exports = mongoose.model('user', userSchema);