const express = require('express');
const patientController = require('../controllers/patient');
const router = express.Router();

router.get("/all",patientController.getAllPatients);
router.get("/search",patientController.searchPatient);
router.post("/",patientController.createPatient);
router.delete("/",patientController.deletePatients);
router.get("/all/:id",patientController.getPatient);
router.put("/:id",patientController.uploadImage,patientController.updatePatient);


module.exports = router;