const healthcenter = require('../models/healthcenter');
const sendEmail = require('./sendEmail');
exports.getHealthCenter = async (req,res,next)=>{
    try{
        const healthcenters = await healthcenter.find();
        res.status(200).json({
            status:"success",
            healthcenters

        });

    }
    catch(err){

    }
}
exports.getHealthCenterById = async (req,res,next)=>{
    try{
        const onehealthcenter = await healthcenter.findById(req.params.id);
        if(!onehealthcenter){
            res.status(404).json({
                status:"not found",
            });
        }
        res.status(200).json({
            status:"success",
            onehealthcenter
        });
    }
    catch(err){

    }
}

exports.createHealthcenter = async (req,res,next)=>{
     
    try{
        const newhealthcenter = await healthcenter.create(req.body);
        res.status(201).json({
            status:"success",
            newhealthcenter

        })
    }
    catch(err){

    }

    
}
exports.deleteHealthcenter = async(req,res,next)=>{
        try{
                const healthcenters = await healthcenter.remove();
                res.status(200).json({
                    status:"success",
                    healthcenters
                });
        }  
        catch(err){

        }
}

exports.updateHealthcenter = async(req,res,next)=>{
    try{
        const updatehealthcenter = await healthcenter.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        if(!updatehealthcenter){
            res.status(404).json({
                status: "error",
                message: "The helathcenter is not found",
              });
        }
        if(updatehealthcenter.isGranted){
            sendEmail.isGranted(updatehealthcenter);
        }
        res.status(200).json({
            status:"successfuly updated",
            updatehealthcenter
        }); 
           
    }   
    catch(err){

    }
}