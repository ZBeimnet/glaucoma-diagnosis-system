const {body} = require('express-validator');

exports.validation = (type)=>{
    switch(type){
        case "APPLY":
            return[
                body("name").not().isEmpty().withMessage("name is required"),
                body("city").not().isEmpty().withMessage("city is required"),
                body("region").not().isEmpty().withMessage("region is required"),
                body("medicallicense").not().isEmpty().withMessage("Medical license is required"),
                body("password").not().isEmpty().withMessage("password is required"),
                body("password").isLength({min:4}).withMessage("minimum length must be 4"),
                body("email").not().isEmpty().withMessage("email is required"),
                body("email").isEmail().withMessage("invalid email")
            ];
        case "LOGIN":
            return[
               body("email").not().isEmpty().withMessage("email is required"),
                body("email").isEmail().withMessage("invalid email"),
                body("password").not().isEmpty().withMessage("password is required"),
                body("password").isLength({min:4}).withMessage("minimum length must be 4"),
            ];
    }
}