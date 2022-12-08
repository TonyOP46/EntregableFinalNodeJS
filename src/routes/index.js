const authRoutes = require("./auth.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");
const productsRoutes = require("./products.routes");
const userRoutes = require("./users.routes");


module.exports = {
    cartRoutes,
    orderRoutes,
    productsRoutes,
    userRoutes,
    authRoutes,
}