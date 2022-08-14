const express = require("express");

const router = express.Router();

const {
  createOrder,
  updateOrder,
  updateOrderStatus,
  deleteOrder,
  checkCapacityOrder,
  getAllOrder,
} = require("../controllers/orderControllers.js");


//all route
router.route("/add").post(createOrder);
router.route("/update/:id").put(updateOrder);
router.route("/updateStatus/:id").put(updateOrderStatus);
router.route("/delete/:id").delete(deleteOrder);
router.route("/checkCapacity/:date").get(checkCapacityOrder);
router.route("/orders").get(getAllOrder);

module.exports = router;
