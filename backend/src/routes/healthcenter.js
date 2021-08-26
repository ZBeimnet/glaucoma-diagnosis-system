const express = require('express');
const healthcenterController = require('../controllers/healthcenter');
const router = express.Router();

router.get("/",healthcenterController.getHealthCenter);
router.post("/",healthcenterController.createHealthcenter);
router.delete("/",healthcenterController.deleteHealthcenter);
module.exports = router;