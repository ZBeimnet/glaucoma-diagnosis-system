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
        let ageGroup;
        const patientage = req.body.age;
        if(patientage<13){
            ageGroup = "0-12";
        }
        else if(patientage>=13 && patientage<=18){
            ageGroup = "13-18"
        }
        else if(patientage>18 && patientage<=30){
            ageGroup = "19-30";
        }
        else if(patientage>30 && patientage<=50){
            ageGroup="31-50";

        }
        else{
            ageGroup = ">50"
        }
        let sTime;
        const time = req.body.comp_usage;
        
        if(time<3){
            sTime = "0-3";
        }
        else if(time>=4 && time<=7){
            sTime = "4-7"
        }
        else if(time>7 && time<=13){
            sTime = "8-13";
        }
        else{
            sTime = ">13";
        }

        
        
        const newpatient = await patient.create({
             cardNumber:patientsByhealthcentercount,
             age_group:ageGroup,
             screentime:sTime,
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
        const allpatients = await patient.find(req.query).populate("healthcenter");
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
        const patientsByhealthcenter = await patient.find({healthcenter:req.params.id}).find(req.query);
        if(!patientsByhealthcenter){
            return res.status(404).json({
                status: "error",
                message: "patients not found",
              });
        }
        // const filters = req.query;
        // const filterdPatients = patientsByhealthcenter.filter(patientss=>{
        //     let isValid = true;
        //     for(key in filters){
        //         if(key=='isDiagnosed'){
        //             filters[key] = JSON.parse(filters[key]);
        //         }
                
        //         isValid = isValid && patientss[key]==filters[key];

        //     }
        //     return isValid;
        // });
       
        res.status(200).json({
            message:"sucess",
            patientsByhealthcenter        
    })
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