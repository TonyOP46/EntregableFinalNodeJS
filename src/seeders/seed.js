const {Users, Products, Cart, Order, ProductsInCart, ProductsInOrder} = require('../models')
const db = require('../utils/database')


const users =[
    {username: "Brenda", email: "BrendaG@gmail.com", password: "12345"},
    {username: "Andres", email: "AndresM@gmail.com", password: "12345"},
    {username: "Ian", email: "IanR@gmail.com", password: "12345"},
    {username: "Nicolas", email: "NicolasR@gmail.com", password: "12345"}
]

const carts = [
    {userId: 1, totalPrice: 20},
    {userId: 2, totalPrice: 20},
    {userId: 3, totalPrice: 20},
    {userId: 4, totalPrice: 20}

]

const products = [
    {name: "libro de fundamentos", price: 20, ProductImage: "https://informaticapinguela.eu/images/1/10/SintaxisJS.pdf", availableQty: 5 ,userId: 1},

    {name: "libro de React", price: 20, ProductImage: "https://manual-informatica.com/desarrollo-web/20-descargar-react-tutorial-gratis.html", availableQty: 4, userId: 2},

    {name: "libro de Node", price: 20, ProductImage: "https://www.buscalibre.pe/libro-node-js-javascript-en-el-lado-del-servidor-manual-practico-avanzado-ismael-lopez-quintero-alfaomega/9786076225769/p/47273741", availableQty: 3, userId: 3},

    {name: "libro de Python", price: 20, ProductImage: "https://argentinaenpython.com/quiero-aprender-python/aprenda-a-pensar-como-un-programador-con-python.pdf", availableQty: 6, userId: 4}
]

const orders = [
    {totalPrice: 20, userId: 1},
    {totalPrice: 20, userId: 2},
    {totalPrice: 20, userId: 3},
    {totalPrice: 20, userId: 4}
]

const productCart = [
    {cartId: 1, productId: 1, quantity: 1, price: 20},
    {cartId: 2, productId: 2, quantity: 1, price: 20},
    {cartId: 3, productId: 3, quantity: 1, price: 20},
    {cartId: 4, productId: 4, quantity: 1, price: 20},
]

const productOrder= [
    {orderId: 1, productId: 1, quantity: 1, price: 20},
    {orderId: 2, productId: 2, quantity: 1, price: 20},
    {orderId: 3, productId: 3, quantity: 1, price: 20},
    {orderId: 4, productId: 4, quantity: 1, price: 20}
]

db.sync({force: true})
    .then(()=>{
        console.log("Iniciando plantacion");
        users.forEach((user)=>Users.create(user));
        setTimeout(()=>{
            products.forEach((product)=>Products.create(product))
        },100);
        setTimeout(()=>{
            carts.forEach((cart)=>Cart.create(cart))
        },200);
        setTimeout(()=>{
            orders.forEach((order)=>Order.create(order))
        },300);
        setTimeout(()=>{
            productCart.forEach((proCart)=>ProductsInCart.create(proCart))
        },400);
        setTimeout(()=>{
            productOrder.forEach((proOrder)=>ProductsInOrder.create(proOrder))
        },500)
    });