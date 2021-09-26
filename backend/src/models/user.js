const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema({
    healthcenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"healthcenter"
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum: ['admin', 'doctor','reception','gds_admin'],
        default:'admin'
    }
});

const user = mongoose.model("user",userschema);

module.exports = user;