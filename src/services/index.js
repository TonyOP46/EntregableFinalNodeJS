const AuthServices = require("./auth.services")
const orderServices = require("./order.services")
const productServices = require("./products.sevices")
const userServices = require("./users.services")


module.exports = {
    userServices,
    productServices,
    orderServices,
    AuthServices
}