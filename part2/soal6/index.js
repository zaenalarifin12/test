let Discount = require("./discount")
let Order = require("./order")

const user = {
    country: "US", couponCode: "NEWYEAR"
}

const products = [{
    quantity: 5, price: 5000
}, {
    quantity: 5, price: 5000
}]


let userNew = new Discount(user)
console.log(userNew.applyCoupon(100))
//
let order = new Order(products, 100, user)
console.log(order.calculateTotal())

// console.log(userNew)
