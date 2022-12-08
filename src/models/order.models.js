const db = require('../utils/database')
const { DataTypes } = require('sequelize');
const Users = require('./users.models');


const Order = db.define('order',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        field: 'total_price',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            as: 'user',
        },
        field: 'user_id'
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Order;