const { Cart, ProductsInCart, Products } = require("../models");

class cartServices {
    static async get(id){
        try {
            const result = await Cart.findByPk(id,{
                attributes: ['userId'],
                include: {
                    model: ProductsInCart,
                    as: 'ProInCart',
                    attributes: ['quantity', 'status'],
                    include: {
                        model: Products,
                        as: 'product',
                        attributes: ['name', 'price']
                    }
                }
            })
            
            return result
        } catch (error) {
            throw error;
        }
    }

    static async add(product){
        try {
            const result = await ProductsInCart.create(product)
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getProInCart(){
        try {
            const result = await ProductsInCart.findAll()
            return result
        } catch (error) {
            throw error;
        }
    }

    static async purchased(newPurchase, id){
        try {
            console.log("datos a actualizar",newPurchase);
            const result = await ProductsInCart.update(newPurchase,{
                where: {id},
            })
            return result
        } catch (error) {
            throw error;
        }
    }

   
}

module.exports = cartServices