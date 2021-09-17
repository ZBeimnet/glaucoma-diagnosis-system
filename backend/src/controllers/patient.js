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
        const filters = req.query;
        const filterdPatients = allpatients.filter(patientss=>{
            let isValid = true;
            for(key in filters){
                if(key=='isDiagnosed'){
                    filters[key] = JSON.parse(filters[key]);
                }
                isValid = isValid && patientss[key]==filters[key];

            }
            return isValid;
        });
        res.status(200).json({
            message:"sucess",
            filterdPatients        
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
        const Patient = await patient.findById(req.params.id).populate("healthcenter");
        
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
            return res.status(404).json({
                status: "error",
                message: "patients not found",
              });
        }
        const filters = req.query;
        const filterdPatients = patientsByhealthcenter.filter(patientss=>{
            let isValid = true;
            for(key in filters){
                if(key=='isDiagnosed'){
                    filters[key] = JSON.parse(filters[key]);
                }
                isValid = isValid && patientss[key]==filters[key];

            }
            return isValid;
        });
        res.status(200).json({
            message:"sucess",
            filterdPatients        
    })
       
               
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