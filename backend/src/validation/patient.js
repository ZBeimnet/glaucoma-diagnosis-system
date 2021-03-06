const {body} = require('express-validator');

exports.validation = (type)=>{
    switch(type){
    case"CREATE":
    return [
        body("firstname").not().isEmpty().withMessage("First name is required"),
        body("lastname").not().isEmpty().withMessage("last name is required"),
        body("gender").not().isEmpty().withMessage("gender is required"),
        body("phoneno").not().isEmpty().withMessage("phone no is required"),
        body("phoneno").isLength({min:10,max:10}).withMessage("phone number length must be 10"),
        body("comp_usage").not().isEmpty().withMessage("computer usage time is required"),
        body("age").not().isEmpty().withMessage("age is required"),
        body("age").isNumeric().withMessage("age must be number"),
        body("healthcenter").not().isEmpty().withMessage("healthcenter must login"),
        body("region").not().isEmpty().withMessage("region is required"),
        body("city").not().isEmpty().withMessage("subcity is required"),

    ];
    case "SEARCH":
        return[
            body("healthcenter").not().isEmpty().withMessage("healthcenter must login"),
            body("cardNumber").not().isEmpty().withMessage("card number is required"),
            body("cardNumber").isNumeric().withMessage("card number must be a valid number"),
            
           
        ];
    default:
        return [];
    }
}