const { userServices } = require("../services");


const createUsers =async(req, res, next)=>{
try {
    const newUser = req.body;
    const result = await userServices.add(newUser)
    res.json({
        message: 'usuario creado'
    })
} catch (error) {
    next({
        message: 'Error en los datos',
        status: 400,
        errorContent: error,
    })
}
}

const getAllUsers = async(req, res, next)=>{
    try {
        const result = await userServices.get()
        res.json(result)
    } catch (error) {
        next({
            message: 'Error no existen datos',
            status: 400, 
            errorContent: error,
        })
    }
}


module.exports = {
    createUsers,
    getAllUsers,
}