const express = require('express');
const admincontroller = require('../controllers/admin');
const router = express.Router();

router.post("/signup",admincontroller.signup);
router.post("/login",admincontroller.login);
router.get("/",admincontroller.getAdmins);
router.delete("/",admincontroller.deleteAdmins);


module.exports = router;

