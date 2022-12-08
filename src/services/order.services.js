const { Order, Users, ProductsInOrder } = require("../models");

class orderServices {
    static async getOrder (id){
        try {
            const result = await ProductsInOrder.findOne({
                where: {id},
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'user_id', 'product_id', 'order_id'],     
                },
                include: {
                    model: Order,
                    as: 'order',
                    attributes: ['totalPrice'],
                    include: {
                        model: Users,
                        as: 'user',
                        attributes: ['username']
                    }
                }
            });
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = orderServices