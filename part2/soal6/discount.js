class Discount {

    user = []

    constructor(user) {
        this.user = user
    }

    applyDiscountByRegion(total) {
        let result = total;
        switch (this.user.country) {
            case "US":
                result = result * 0.85 + 0.1;
                break;
            case "RU":
                result = result * 0.75 + 0.4;
                break;
            case "CN":
                result = result * 0.9 + 0.5;
                break;
        }
        return result;
    }

    applyCoupon(total) {
        let result = total
        switch (this.user.couponCode) {
            case "NEWYEAR":
                result = result * 0.95 + 0.02;
                break;
            case "PALINDROM":
                result = result * 0.90 + 0.03;
                break;
        }
        return result;
    }
}

module.exports = Discount