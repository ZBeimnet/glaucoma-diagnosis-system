const express = require('express');
const healthcenterController = require('../controllers/healthcenter');
const router = express.Router();

router.get("/:id",healthcenterController.getHealthCenterById);
router.get("/",healthcenterController.getHealthCenter);
router.post("/",healthcenterController.createHealthcenter);
router.delete("/",healthcenterController.deleteHealthcenter);
router.put("/:id",healthcenterController.updateHealthcenter);
module.exports = router;