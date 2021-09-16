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
    },
    isGranted:{
        type:Boolean,
        default:false
    },
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
      },
      confirmationCode: { 
        type: String, 
        unique: true 
    },
});

const healthcenter = mongoose.model("healthcenter",helathcenterSchema);

module.exports = healthcenter;