const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    milkQuantity: {
      type: Number,
      required: true,
    },
    CurrentCapacity: {
      type: Number,
      required: true,
      default: 0,
    },
    milkStatus: {
      type: String,
      default: "Placed",
    },
    user: {
      type: String,
      required: true,
    },
    phone: {
      type: String,

      required: true,
    },

    date_Order: {
      type: Date,
      default: Date.now(),
    },
    created_At: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);



