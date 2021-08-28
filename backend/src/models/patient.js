const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
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
        glaucomatous:{
            type:Boolean,
            default:false
    
        },
        image:{
            type:String
        }
    }
    ]


});
const patient = mongoose.model("patient",patientSchema);
module.exports = patient;
