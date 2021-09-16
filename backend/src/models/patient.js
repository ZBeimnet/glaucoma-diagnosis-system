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
        type:Number
    },
    phoneno:{
        type:String
    },
    region:{
        type:String
    },
    subcity:{
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
            type:Date,
    
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
