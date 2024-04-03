const mongoose = require("mongoose");

const HospitalsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    City: {
      type: String,
      required: true,
    },
    Pin_Code: {
      type: String,
      required: true,
    },
    SpecializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Hospitals = mongoose.model("Hospitals", HospitalsSchema);

module.exports = Hospitals;
