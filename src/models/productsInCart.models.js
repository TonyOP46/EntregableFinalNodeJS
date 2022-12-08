const db = require('../utils/database')
const { DataTypes } = require('sequelize')


const ProductsInCart = db.define('productsInCart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false, 
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        field: 'cart_id',
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        field: 'product_id',
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false, 
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});


module.exports = ProductsInCart;