const admin = require('../models/admin');
const auth = require('./auth');

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
        const Admin = await admin.create(req.body);
        const token = auth.generateToken(Admin._id);
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
        if(!Admin || Admin.password!=req.body.password){
            return res.status(401).json({
                staus:"error",
                message:"invalid email or password"
            });
        }
        
        const token = auth.generateToken(Admin._id);
        
        res.status(200).json({
            status:"login success",
            Admin,
            token
        });

    }
    catch(err){
        console.log(err);
    }
}


