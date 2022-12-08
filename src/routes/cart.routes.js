const { Router } = require('express')
const { getCart, addProductInCart, getProductInCart, cartPurchased} = require('../Controllers')
const authenticate = require('../middlewares/auth.middleware')


const cartRoutes = Router()

cartRoutes.get('/cart/:id', authenticate,getCart)
cartRoutes.post('/product/cart',authenticate, addProductInCart)
cartRoutes.get('/product/cart',authenticate, getProductInCart)
cartRoutes.put('/cart/purchased/:id',authenticate, cartPurchased)


module.exports = cartRoutes