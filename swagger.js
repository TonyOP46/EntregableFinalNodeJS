const swaggerJSDoc = require('swagger-jsdoc')

const swaggerUi = require('swagger-ui-express')


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Entregable Final NodeJS",
            version: "1.0.0",
            description: "API que sirve para realizar compras"
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/models/users.models"
    ]
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port)=>{
    app.use('/api/v1/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

    app.get('/api/v1/docs.json', (req, res)=>{
        res.setHeader("ContenType", "application/json");
        res.send(swaggerSpec)
    });
    console.log(`Documentacion disponible en http://localhost:${port}/api/v1/docs`);
}

module.exports = swaggerDocs