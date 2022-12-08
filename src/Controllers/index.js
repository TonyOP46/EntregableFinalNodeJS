const { userLogin } = require("./auth.controllers");
const { getCart, addProductInCart, getProductInCart, cartPurchased } = require("./cart.controllers");
const { getAllOrders } = require("./order.controllers");
const { getAllProducts, createProducts } = require("./products.controllers");
const { createUsers, getAllUsers } = require("./users.controllers");

module.exports = {
    createUsers,
    getAllUsers,
    getAllProducts,
    createProducts,
    getCart,
    addProductInCart,
    getProductInCart,
    cartPurchased,
    getAllOrders,
    userLogin,
    
}