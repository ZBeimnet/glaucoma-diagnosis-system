const patient = require('../models/patient');
const {validationResult} = require('express-validator');
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
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                status: "error",
                message: errors.array(),
              }); 
        }
        const pat = await patient.findOne({phoneno:req.body.phoneno});
        if(pat){
            return res.status(400).json({
                status:"error",
                message:"patient already exists"

            })
        }
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
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({
                        status: "error",
                        message: errors.array(),
                      }); 
                }
            const updatePatient = await patient.findByIdAndUpdate(req.params.id,req.body,{new:true});
                 res.status(200).json({
                   status:"success",
                   updatePatient
               });
            }
            catch(err){
                console.log(err);
            }
        }


       
  


exports.searchPatient = async (req,res,next)=>{
        try{
            const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                status: "error",
                message: errors.array()[0],
              }); 
        }
            const patientsByhealthcenter = await patient.find({healthcenter:req.body.healthcenter});
            const searchedpatient = patientsByhealthcenter.filter((patients)=>{
                if(patients.cardNumber==req.body.cardNumber){
                    patients.isDiagnosed = false;
                    patients.save();
                    return patients;
                }
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