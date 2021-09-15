const bcrypt = require('bcrypt');
const auth = require('./auth');
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
        const healthcenterExists = await healthcenter.findOne({email:req.body.email});
        if(healthcenterExists){
            return res.status(409).json({
                status:"failed",
                message:"Healthcenter already exists"
            });

        }
       // const newhealthcenter = await healthcenter.create(req.body);
            const resp = new healthcenter(req.body);
            const salt = await bcrypt.genSalt(10);
            resp.password = await bcrypt.hash(resp.password,salt);
            const token = auth.generateToken(resp._id);
            const newhealthcenter  = await resp.save();

        res.status(201).json({
            status:"success",
            newhealthcenter,
            token

        })
    }
    catch(err){

    }

    
}

exports.login = async (req,res,next)=>{
    try{
        const healthcent = await healthcenter.findOne({email:req.body.email});
        if(healthcent){
            const isValidPassword = await bcrypt.compare(req.body.password,healthcent.password);
            if(isValidPassword){
                const token = auth.generateToken(healthcent._id);
                res.status(200).json({
                    status:"login sucess",
                    healthcent,
                    token
                })
            }
            else{
                res.status(400).json({
                    status:"login failed",
                    message:"invalid password"
                });
            }
        }
        else{
            res.status(401).json({
                status:"login failed",
                message:"healthcenter not found"
            }); 
        }
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

exports.deleteHealthcenterById = async(req,res,next)=>{
    try{
            const deletedHealthcenter = await healthcenter.findByIdAndDelete(req.params.id);
            if(!deletedHealthcenter){
                res.status(404).json({
                    status: "error",
                    message: "The health center not found",
                  });
            }

            else{
                res.status(200).json({
                    status:"success",
                    deletedHealthcenter
                });
            }
            
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