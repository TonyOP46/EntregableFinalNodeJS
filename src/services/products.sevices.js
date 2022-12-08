const { Products, Users } = require("../models");

class productServices {
    static async get(){
        try {
            const result = await Products.findAll({
                attributes: {
                    exclude: ['user_id','id','createdAt', 'updatedAt', 'userId']
                },
                include: {
                    model: Users,
                    as: 'user',
                    attributes: ['username']
                }
            })
        
            var values = []
            result.map((product)=>{
                if(product.availableQty > 0){
                    values.push(product)
                }else{
                    return 'empty availableQty'
                }
            })

            return values;
        } catch (error) {
            throw error;
        }
    }

    static async add(newProduct){
        try {
            const result = await Products.create(newProduct)
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = productServices