const mongoose = require("mongoose");

const MedicalRecordsSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
      required: true,
    },
    patient_Name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
      required: true,
    },
    Treatment_Of_Diagnose: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
      required: true,
    },
    Doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctors",
      required: true,
    },
    Hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospitals",
      required: true,
    },
    Admitted_Time: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
    },
    Discharge_Time: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const MedicalRecords = mongoose.model("MedicalRecords", MedicalRecordsSchema);

module.exports = MedicalRecords;
