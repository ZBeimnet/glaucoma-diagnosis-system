const patient = require('../models/patient');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../../public/images"));
    },
    filename:function(req,file,cb){
        cb(null,`patient${req.body.firstname}-${path.extname(file.originalname)}`);
    }
})

const upload = multer({
    storage,
});

exports.uploadImage = upload.single("image");

exports.createPatient = async (req,res,next)=>{
    try{
        const newpatient = await patient.create({
            ...req.body, image:req.file.filename
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
