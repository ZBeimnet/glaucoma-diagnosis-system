const express = require('express');
const usercontroller = require('../controllers/user');
const router = express.Router();
const auth = require('../controllers/auth');

router.get("/",usercontroller.getUsers);
router.post("/signup",usercontroller.signupUser);
router.post("/login",usercontroller.loginUser);

module.exports = router;