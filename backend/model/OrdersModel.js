const { model} = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = new model("ordering", OrdersSchema);

module.exports = { OrdersSchema};