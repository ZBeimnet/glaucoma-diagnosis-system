const healthcenter = require('../models/healthcenter');

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