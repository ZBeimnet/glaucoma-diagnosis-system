const express = require('express');
const patientController = require('../controllers/patient');
const patientValidator = require('../validation/patient');
const router = express.Router();

router.get("/",patientController.getAllPatients);
router.get("/healthcenter/:id",patientController.getPatientByHealthcenter);
router.post("/search",patientValidator.validation("SEARCH"),patientController.searchPatient);
router.post("/", patientValidator.validation("CREATE"),patientController.createPatient);
router.delete("/",patientController.deletePatients);
router.get("/:id",patientController.getPatient);
router.put("/:id",patientValidator.validation("UPDATE"),patientController.updatePatient);


module.exports = router;