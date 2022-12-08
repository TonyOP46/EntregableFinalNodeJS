const { Router } = require('express')
const { getAllOrders } = require('../Controllers')
const authenticate = require('../middlewares/auth.middleware')


const orderRoutes = Router()


orderRoutes.get('/orders/:id', authenticate, getAllOrders)


module.exports = orderRoutes