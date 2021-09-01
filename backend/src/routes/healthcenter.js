const express = require('express');

const healthcenterController = require('../controllers/healthcenter');
const grantedController = require('../controllers/granted');
const router = express.Router();

router.get("/all/:id",healthcenterController.getHealthCenterById);
router.get("/all",healthcenterController.getHealthCenter);
router.get("/granted",grantedController.getGrantedHealthcenters);
router.get("/notgranted",grantedController.getNotGrantedHealthcenters);
router.post("/",healthcenterController.createHealthcenter);
router.delete("/",healthcenterController.deleteHealthcenter);
router.put("/:id",healthcenterController.updateHealthcenter);

module.exports = router;