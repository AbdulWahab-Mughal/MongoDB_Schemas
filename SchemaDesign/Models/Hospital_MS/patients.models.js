const mongoose = require("mongoose");

const PatientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    diagnose_with: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    blood_group: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospitals",
      required: true,
    },
    Admitted_Time: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Patients = mongoose.model("Patients", PatientsSchema);

module.exports = Patients;
