let Discount = require("./discount")

class Order {

    products = [];
    total = 0;
    user = {}
    

    constructor(products, total, user) {
        this.products = products
        this.total = total
        this.user = user
    }

    calculateTotal() {
        this.products.forEach(product => {
            this.total = this.total + (product.price * product.quantity)
        })

        let discount = new Discount(this.user)
        this.total = discount.applyDiscountByRegion(this.total);
        this.total = discount.applyCoupon(this.total);
        return this.total;
    }
}


module.exports = Order
