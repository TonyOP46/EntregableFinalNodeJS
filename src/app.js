const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const handleError = require('./middlewares/error.middleware')
const {authRoutes, userRoutes, productsRoutes, cartRoutes, orderRoutes} = require('./routes')
const morgan = require('morgan')
const cors = require('cors')



const app = express()

initModels()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())


db.authenticate()
    .then(()=>console.log("Autenticacion exitosa"))
    .catch((error)=>console.log(error))

db.sync({force: false})
    .then(()=>console.log("Sincronizacion exitosa"))
    .catch((error)=>console.log(error))

app.get('/', ()=>{
    console.log('Todo bien');
})

app.use('/api/v1', userRoutes)
app.use('/api/v1', productsRoutes)
app.use('/api/v1', cartRoutes)
app.use('/api/v1', orderRoutes)
app.use('/api/v1', authRoutes)
app.use(handleError)

module.exports = app;
