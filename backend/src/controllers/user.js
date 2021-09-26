const user = require('../models/user');
const bcrypt = require('bcrypt');
const auth = require('./auth');
const healthcenter = require('../models/healthcenter');
exports.getUsers = async (req,res,next)=>{
    try{
    const users = await user.find().populate("healthcenter");
    res.status(200).json({
        status:"success",
        users
    })
    }
    catch(err){

    }
  
}

exports.signupUser = async (req,res,next)=>{
    try{
        const existuser = await user.findOne({email:req.body.email}).populate("healthcenter");
        if(existuser){
            return res.status(404).json({
                status:"error",
                message:"user exists"
            })
        }
        const hc = await healthcenter.findById(req.body.healthcenter);
        if(!hc){
            return res.status(404).json({
                message:"error health center not found",

            })
        }
        
        const newuser = new user(req.body);
        const salt = await bcrypt.genSalt(10);
        newuser.password = await bcrypt.hash(newuser.password,salt);
        const token = auth.generateToken(newuser._id);
        const User  = await newuser.save();
        res.status(201).json({
            status:"sucess",
            User,
            token
        })
    }
    catch(err){
        console.log(err);
    }
}

exports.loginUser = async (req,res,next)=>{
       try{

       
        const User = await user.findOne({email:req.body.email}).populate("healthcenter");
        if(!User){
            return res.status(404).json({
                status:"error user not found try again",

            })
        }
        const validPassword = await bcrypt.compare(req.body.password,User.password);
        if(validPassword){
            const token = auth.generateToken(User._id);
            res.status(200).json({
                status:"login success",
                User,
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
    catch(err){
        console.log(err);
    }


}
