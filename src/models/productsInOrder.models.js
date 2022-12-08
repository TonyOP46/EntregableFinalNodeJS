const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const ProductsInOrder = db.define('productsInOrder',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        field: 'order_id',
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
})

module.exports = ProductsInOrder;