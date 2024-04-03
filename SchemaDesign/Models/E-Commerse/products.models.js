const mongoose = require("mongoose");

// timestamps has 2 fields
// 1_createdAt: a date representing when this document was created
// 2_updatedAt: a date representing when this document was last updated
const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_Url: {
      type: String,
      required: true,
    },
    prize: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_Ecommerse",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Category_Ecommerse,
    },
  },
  { timestamps: true }
);

const Products_Ecommerse = mongoose.model("Products_Ecommerse", ProductsSchema);

module.exports = Products_Ecommerse;
