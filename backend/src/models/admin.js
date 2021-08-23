const mongoose = require('mongoose');

const schema = mongoose.schema;

const adminSchema = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    }

});

const admin = mongoose.model("admin",adminSchema);
module.exports = admin;