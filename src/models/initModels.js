const Cart = require("./cart.models");
const Order = require("./order.models");
const Products = require("./products.models");
const ProductsInCart = require("./productsInCart.models");
const ProductsInOrder = require("./productsInOrder.models");
const Users = require("./users.models");



const initModels = ()=>{
    Products.belongsTo(Users, {as: 'user', foreignKey: 'user_id'})
    Users.hasMany(Products,{as: 'product', foreignKey: 'user_id' })

    Cart.belongsTo(Users, {as:'user', foreignKey: 'user_id'})
    Users.hasOne(Cart,{as: 'cart', foreignKey: 'user_id'})

    Order.belongsTo(Users, {as: 'user', foreignKey: 'user_id'})
    Users.hasMany(Order, {as: 'order', foreignKey: 'user_id'})

    ProductsInCart.belongsTo(Cart, {as: 'cart', foreignKey: 'cart_id'})
    Cart.hasMany(ProductsInCart, {as: 'ProInCart', foreignKey: 'cart_id'})

    ProductsInCart.belongsTo(Products, {as: 'product', foreignKey: 'product_id'})
    Products.hasOne(ProductsInCart, {as: 'ProInCart', foreignKey: 'product_id'})

    ProductsInOrder.belongsTo(Products, {as: 'product', foreignKey: 'product_id'})
    Products.hasOne(ProductsInOrder, {as: 'ProInOrder', foreignKey: 'product_id'})

    ProductsInOrder.belongsTo(Order, {as: 'order', foreignKey: 'order_id'})

    Order.hasMany(ProductsInOrder, {as: '', foreignKey: 'order_id'})

}

module.exports = initModels;