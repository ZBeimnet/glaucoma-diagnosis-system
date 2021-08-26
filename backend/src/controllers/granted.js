const granted = require('../models/granted');



exports.getGranted = async (req,res,next)=>{
    try{
        const grants = await granted.find().populate("healthcenter");
        res.status(200).json({
            status:"success",
            grants
        });q
    }
    catch(err){

    }
}

exports.createGranted = async (req,res,next)=>{
            try{
                 const grant = await granted.create({...req.body});
                //  const id = grant.healthcenter._id;
                //  const grantedHealthcenter = healthcenter.findById(id);
                //  grantedHealthcenter.isGranted = true;

                 console.log(id);
                res.status(201).json({
                    status:"success",
                    grant
                });

            }

            catch(err){

            }
}
exports.deleteGranted = async (req,res,next)=>{
        try{
            const grants = await granted.remove();
            res.status(200).json({
                status:"success",
                grants
            });
        }
        catch(err){

        }   
}