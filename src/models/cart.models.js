const db = require('../utils/database')
const { DataTypes } = require('sequelize');
const Users = require('./users.models');


const Cart = db.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false, 
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id',
        },
        field: 'user_id',
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'total_price'

    }
});

module.exports = Cart;