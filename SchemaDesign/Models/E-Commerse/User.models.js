const mongoose = require("mongoose");

// timestamps has 2 fields
// 1_createdAt: a date representing when this document was created
// 2_updatedAt: a date representing when this document was last updated
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User_Ecommerse = mongoose.model("User_Ecommerse", UserSchema);

module.exports = User_Ecommerse;
