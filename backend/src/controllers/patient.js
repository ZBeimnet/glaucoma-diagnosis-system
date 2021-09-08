const patient = require('../models/patient');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../../public/images"));
    },
    filename:async function(req,file,cb){
        const Patient = await patient.findById(req.params.id);
        cb(null,`patient-${Patient.cardNumber}-${req.body.date}${path.extname(file.originalname)}`);
    }
})

const upload = multer({
    storage,
});

exports.uploadImage = upload.single("image");

exports.createPatient = async (req,res,next)=>{
    try{
        
        const patientsByhealthcentercount = await patient.find({healthcenter:req.body.healthcenter}).count()+1; 

        
        const newpatient = await patient.create({
             cardNumber:patientsByhealthcentercount,
            ...req.body
        });
        res.status(201).json({
            status:"sucess",
            newpatient
        })
    }
    catch(err){
     console.log(err);   
    }
}

exports.getAllPatients = async (req,res,next)=>{
   try{
        const allpatients = await patient.find().populate("healthcenter");
        res.status(200).json({
            status:"sucess",
            allpatients
        })
   }
   catch(err){
        console.log(err);
   }

}
exports.deletePatients = async (req,res,next)=>{
        try{
            const patients = await patient.remove();
            res.status(200).json({
                status:"success",
                patients
            });
        }
        catch(err){

        }
}

exports.getPatient = async(req,res,next)=>{
     try{
        const Patient = await patient.findById(req.params.id);
    
        res.status(200).json({
            status:"success",
            Patient
        });
     }
     catch(err){

     }
}

exports.getPatientByHealthcenter = async (req,res,next)=>{
    try{
        const patientsByhealthcenter = await patient.find({healthcenter:req.params.id});
        if(!patientsByhealthcenter){
            res.status(404).json({
                status: "error",
                message: "patients not found",
              });
        }
        else{
            res.status(200).json({
                status:"patients in the healthcenter",
                patientsByhealthcenter
            });
        }       
    }
    catch(err){
        console.log(err);
    }
}

exports.updatePatient = async(req,res,next)=>{
    try{
    
       const updatePatient = await patient.findById(req.params.id);
       if(!updatePatient){
            res.staus(404).json({
                status:"not found",

            });
       }
        updatePatient.isDiagnosed = true;    
        updatePatient.patientresult.push({
           ...req.body,
           image:req.file.filename
       });
       updatePatient.save();


       res.status(200).json({
           status:"success",
           updatePatient
       });
    }
    catch(err){

    }
}

exports.searchPatient = async (req,res,next)=>{
        try{
            const patientsByhealthcenter = await patient.find({healthcenter:req.body.healthcengter});
            const searchedpatient = patientsByhealthcenter.filter((patients)=>{
                return patients.cardNumber==req.body.cardNumber
            });
            res.status(200).json({
                status:"search success",
                
                searchedpatient
            });

        }
        catch(err){
            console.log(err);
        }
}