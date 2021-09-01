const bcrypt = require('bcrypt');
const auth = require('./auth');
const admin = require('../models/admin');

exports.getAdmins = async (req,res,next)=>{
        try{
            const alladmins = await admin.find();
            res.status(200).json({
                status:"success",
                alladmins
            });
        }
        catch(err){

        }
}
exports.deleteAdmins = async (req,res,next)=>{
        try{
            const admins = await admin.remove();
            res.status(200).json({
                status:"success",
                admins
            });
        }
        catch(err){
            console.log(err);
        }
}

exports.signup = async (req,res,next)=>{
    try{
        
        const adminexists = await admin.findOne({username:req.body.username});
        if(adminexists){
             return res.status(409).json({
                status:"failed",
                message:"admin already exists"
            });
        }
       
       const resp = new admin(req.body);
       const salt = await bcrypt.genSalt(10);
       resp.password = await bcrypt.hash(resp.password,salt);
       const token = auth.generateToken(resp._id);
       const Admin  = await resp.save();
       
        
        res.status(201) .json({
            status:"register success",
            Admin,
            token
        })

    }
    catch(err){
        console.log(err);
    }
}
exports.login = async (req,res,next)=>{
    try{
        const Admin = await admin.findOne({username:req.body.username});
        if(Admin){
            const validPassword = await bcrypt.compare(req.body.password,Admin.password);
            if(validPassword){
                const token = auth.generateToken(Admin._id);
                res.status(200).json({
                    status:"login success",
                    Admin,
                    token
                });
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
                message:"user not found"
            });
        }
        
        
        
       

    }
    catch(err){
        console.log(err);
    }
}


