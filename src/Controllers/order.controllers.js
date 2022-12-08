const { orderServices } = require("../services");



const getAllOrders = async(req, res, next)=>{
    try {
        const { id }= req.params;
        const result = await orderServices.getOrder(id)
        res.json(result)
    } catch (error) {
        next({
            message: 'error en los datos',
            status: 400,
            errorContent: error,
        })
    }
}

module.exports = {
    getAllOrders,
}