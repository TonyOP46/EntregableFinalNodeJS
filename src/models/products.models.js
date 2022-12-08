const db = require('../utils/database')
const { DataTypes } = require('sequelize');
const Users = require('./users.models');


const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE, 
        allowNull: false, 
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ProductImage: {
        type: DataTypes.STRING, 
        allowNull: false,
        field: 'product_image',
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            model: Users,
            key: 'id',
        },
        field: 'user_id'
    }
});

module.exports = Products;