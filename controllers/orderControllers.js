const Order = require("../models/OrderMilk.js");

//createOrder

exports.createOrder = async (req, res) => {
  try {
    console.log(req.body);
    const { milkQuantity, CurrentCapacity, user, phone } = req.body;

    if (!milkQuantity || !user || !phone || !CurrentCapacity) {
      return res.status(400).json({
        success: false,
        message: "please fill the field",
      });
    }
    const NewOrder = await Order.create({
      milkQuantity,
      CurrentCapacity,
      user,
      phone,
    });
    await NewOrder.save();
    console.log(NewOrder);
    res.status(201).json({
      success: true,
      message: "Order created ",
      NewOrder,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      success: false,
    });
  }
};

//updateOrder

exports.updateOrder = async (req, res) => {
  try {
    
    const updateOrderData = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updateOrderData) {
      return res.status(400).json({
        success: false,
        message: "Order not found ",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order updated",
      updateOrderData,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
    });
  }
};

//updateOrderStatus

exports.updateOrderStatus = async (req, res) => {
  try {
    const { milkStatus } = req.body;
    if (milkStatus == "") {
      return res.status(400).json({
        success: false,
        message: "please Enter order status",
      });
    }
    const updateOrderData = await Order.findByIdAndUpdate(
      req.params.id,
      {
        milkStatus,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Order status updated",
      updateOrderData,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
    });
  }
};

//deleteOrder

exports.deleteOrder = async (req, res) => {
  try {
    const deleteOrderData = await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Order Deleted",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
    });
  }
};

//checkCapacityOrder

exports.checkCapacityOrder = async (req, res) => {
  try {
    const data = await Order.findOne({ date_Order: req.params.date });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
    });
  }
};

//get all order

exports.getAllOrder = async (req, res) => {
  try {
    const data = await Order.find({});

    res.status(200).json({
      success: true,
      data,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
    });
  }
};
