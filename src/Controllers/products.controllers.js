const { productServices } = require("../services")

const getAllProducts = async(req, res, next)=>{
    try {
        const result = await productServices.get()
        res.json(result)
        
    } catch (error) {
        console.log(error);
        next({
            message: 'Error en los datos ',
            status: 400,
            errorContent: error,
        })
    }
}

const createProducts = async(req, res, next)=>{
    try {
        const newProduct = req.body;
        const result = await productServices.add(newProduct)
        res.json({
            message: 'producto creado'
        })
    } catch (error) {
        next({
            message: 'error en los datos',
            status: 400,
            errorContent: error,
        })
    }
}

module.exports ={
    getAllProducts,
    createProducts,
}