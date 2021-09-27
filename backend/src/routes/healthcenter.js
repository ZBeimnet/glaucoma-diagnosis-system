const express = require('express');

const healthcenterController = require('../controllers/healthcenter');
const grantedController = require('../controllers/granted');
const healthcenterValidator = require('../validation/healthcenter');
const router = express.Router();

router.get("/all/:id",healthcenterController.getHealthCenterById);
router.get("/",healthcenterController.getHealthCenter);
router.get("/granted",grantedController.getGrantedHealthcenters);
router.get("/notgranted",grantedController.getNotGrantedHealthcenters);
router.post("/",healthcenterValidator.validation("APPLY"),healthcenterController.createHealthcenter);
router.post("/login",healthcenterValidator.validation("LOGIN"),healthcenterController.login);
router.delete("/",healthcenterController.deleteHealthcenter);
router.put("/:id",healthcenterController.updateHealthcenter);
router.delete("/:id",healthcenterController.deleteHealthcenterById);




module.exports = router;