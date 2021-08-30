const express = require('express');
const patientController = require('../controllers/patient');
const router = express.Router();

router.get("/",patientController.getAllPatients);
router.post("/",patientController.createPatient);
router.delete("/",patientController.deletePatients);
router.get("/:id",patientController.getPatient);
router.put("/:id",patientController.uploadImage,patientController.updatePatient);


module.exports = router;