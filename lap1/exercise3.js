const applyCoupon = (category) => {
    return (discount) => {
        return (item) => {
             item.price = (item.price * (1 - discount));
             return item;
        }
    }

}
const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 2.0
}
const test1 = applyCoupon("food")(0.1)(item).price;
if (test1 == 1.8) {
    console.log("Test passed")
} else {
    console.log("Test failed")
}
