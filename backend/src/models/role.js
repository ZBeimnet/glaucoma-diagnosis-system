const mongoose = require('mongoose');

const schema = mongoose.Schema;

const roleschema = new schema({
    healthcenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"healthcenter"
    },
    role:{
        type:String
    }
});

const role = mongoose.model("role",roleschema);

module.exports = role;