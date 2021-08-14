const express = require('express');
const patientController = require('../controllers/patient');
const router = express.Router();

router.get("/",patientController.getAllPatients);
router.post("/",patientController.createPatient);

module.exports = router;