const mongoose = require('mongoose');

const schema = mongoose.Schema;

const helathcenterSchema = new schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    city:{
        type:String
    },
    region:{
        type:String
    },
    password:{
        type:String
    },
    medicallicense:{
        type:String
    }
});

const healthcenter = mongoose.model("healthcenter",helathcenterSchema);

module.exports = healthcenter;