const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let counter = 1;
let CountedId = {type: Number, default: () => counter++};
const patientSchema = new Schema({
    cardNumber:{
        type:Number
    },
    healthcenter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"healthcenter"
    },
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    age:{
        type:Number
    },
    screentime:{
        type:String
    },
    comp_usage:{
        type:Number,
    },
    age_group:{
        type:String
    },
    phoneno:{
        type:String
    },
    region:{
        type:String
    },
    city:{
        type:String
    },
    gender:{
        type:String
    },
    isDiagnosed:{
        type:Boolean,
        default:false
    },
    patientresult:[ 
        {
        date:{
            type:String,
    
        },
        result:{
            type:String,
           
        },
        probablity:{
            type:Number,
        },
        doctorFinalDecision:{
            type:String,
        },
        image:{
            type:String
        }
    },

    ]


});
const patient = mongoose.model("patient",patientSchema);
module.exports = patient;
