const mongoose = require("mongoose");

const OrderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products_Ecommerse",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const OrdersSchema = new mongoose.Schema(
  {
    orderprize: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_Ecommerse",
    },
    orderitems: {
      type: [OrderItemsSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERD"],  // enum means enumeration which means choices..
      default: "PENDING",
    },
  },
  { timestamps: true }
);

const Orders_Ecommerse = mongoose.model("Orders_Ecommerse", OrdersSchema);

module.exports = Orders_Ecommerse;
