const mongoose = require("mongoose");

// timestamps has 2 fields
// 1_createdAt: a date representing when this document was created
// 2_updatedAt: a date representing when this document was last updated
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category_Ecommerse = mongoose.model("Category_Ecommerse", CategorySchema);

module.exports = Category_Ecommerse;
