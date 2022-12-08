const { AuthServices } = require("../services");


const userLogin= async(req, res, next)=>{
    try {
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials)

        if(result){
            const {id, username, email, password }=result.result
            const user = {id, username, email, password }
            const token = AuthServices.getToken(user)
            user.token = token
            res.json({...user})
        }else{
            res.status(400).json({
                message: 'Informacion invalida'
            })
        }

    } catch (error) {
        next({
            message: 'Email o contraseña invalida',
            status: 400, 
            errorContent: error,
        })
    }

}

module.exports = {
    userLogin,
}
