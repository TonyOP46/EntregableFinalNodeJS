const { Router } = require('express')
const { userLogin } = require('../Controllers')
const authenticate = require('../middlewares/auth.middleware')


const authRoutes = Router()


authRoutes.post('/auth/login', authenticate, userLogin)


module.exports = authRoutes