const patient = require('../models/patient');

exports.createPatient = async (req,res,next)=>{
    try{
        const newpatient = await patient.create({
            ...req.body
        });
        res.status(201).json({
            status:"sucess",
            newpatient
        })
    }
    catch(err){

    }
}

exports.getAllPatients = async (req,res,next)=>{
   try{
        const allpatients = await patient.find();
        res.status(200).json({
            status:"sucess",
            allpatients
        })
   }
   catch(err){
        console.log(err);
   }

}
