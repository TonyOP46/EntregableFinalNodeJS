const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')


/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Ian
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Ian
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *      register:
 *      type: object
 *      properties: 
 *         firstname:
 *           type: string
 *           example: Ian
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *          securitySchemes:
 *      bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *          
 * 
 */
const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        },
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    hooks: {
        beforeCreate: (user, option)=>{
            const { password} = user
            const hash = bcrypt.hashSync(password, 8)
            user.password = hash;
        }
    }
})

module.exports = Users;
