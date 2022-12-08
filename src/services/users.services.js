const Users = require("../models/users.models");

class userServices {
    static async add(newUser){
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error;
        }
    }

    static async get(){
        try {
            const result = await Users.findAll()
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userServices;