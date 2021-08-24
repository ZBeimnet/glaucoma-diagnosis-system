const jwt = require('jsonwebtoken');

const {promisify} = require('util');

const admin = require('../models/admin');
const secretKey = "secretkey";

exports.generateToken = (id)=>{
    return jwt.sign({id},secretKey);    
}

exports.authenticateadmin = async (req,res,next)=>{
    try{
        let token = null;
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];

        }
        if(!token){
            res.status(401)
            .json({
                status:"error",
                message:"you are not logged in"
            });
        }

        const id = await promisify(jwt.verify)(
            token,
            secretKey
        );
    const Admin = await admin.findById(id);
    if(!Admin){
        res.status(403).json({
            status:"you are forbidden",
            message:"invalid token"
        });

    }
      req.user = Admin;  
    }
    catch(err){

    }
}

