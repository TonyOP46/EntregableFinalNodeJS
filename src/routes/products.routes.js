const { Router } = require('express');
const { getAllProducts, createProducts } = require('../Controllers');
const authenticate = require('../middlewares/auth.middleware');

const productsRoutes = Router()

productsRoutes.get('/products', authenticate, getAllProducts)
productsRoutes.post('/products', authenticate, createProducts)

module.exports = productsRoutes;