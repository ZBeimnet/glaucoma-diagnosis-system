const healthcenter = require('../models/healthcenter');

exports.getGrantedHealthcenters = async (req,res,next)=>{
    try{
        const grantedhealthcenters = await healthcenter.find({isGranted:true});
        res.status(200).json({
            status:"success",
            grantedhealthcenters
        });
    }
    catch(err){

    }


}
exports.getNotGrantedHealthcenters = async (req,res,next)=>{
    try{
        const notgrantedhealthcenters = await healthcenter.find({isGranted:false});
        res.status(200).json({
            status:"success",
            notgrantedhealthcenters
        });
    }
    catch(err){

    }


}