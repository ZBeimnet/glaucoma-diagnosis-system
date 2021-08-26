const express = require('express');

const grantedController = require('../controllers/granted');
const router = express.Router();

router.get("/",grantedController.getGranted);
router.post("/",grantedController.createGranted);
router.delete("/",grantedController.deleteGranted);
module.exports = router;


