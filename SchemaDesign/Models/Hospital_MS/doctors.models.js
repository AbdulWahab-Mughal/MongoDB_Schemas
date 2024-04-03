const mongoose = require("mongoose");

const DoctorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    Salary: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospitals",
      },
    ],
  },
  { timestamps: true }
);

const Doctors = mongoose.model("Doctors", DoctorsSchema);

module.exports = Doctors;
