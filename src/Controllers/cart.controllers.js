const cartServices = require("../services/cart.services")


const getCart = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const result = await cartServices.get(id)
        res.json(result)
    } catch (error) {
        next({
            message: 'error en los datos',
            status: 400, 
            errorContent: error,
        })
    }
}

const addProductInCart = async(req, res, next)=>{
    try {
        const product = req.body;
        const result = await cartServices.add(product)
        res.json({
            message: 'cart creado'
        })
    } catch (error) {
        next({
            message: 'error en los datos',
            status: 400, 
            errorContent: error,
        })
    }
}

const getProductInCart = async(req, res, next)=>{
    try {
        const result = await cartServices.getProInCart()
        res.json(result)
    } catch (error) {
        next({
            message: 'error en los datos',
            status: 400, 
            errorContent: error,
        })
    }
}

const cartPurchased = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const { status } = req.body;
        const newPurchase = { status }
        const result = cartServices.purchased(newPurchase, id)
        res.json({
            message: 'purchased',
        })
    } catch (error) {
        next({
            message: 'error en los datos',
            status: 400, 
            errorContent: error,
        })
    }
}



module.exports = {
    getCart,
    addProductInCart,
    getProductInCart,
    cartPurchased,
}