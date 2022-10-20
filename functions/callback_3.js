
const cart = [
    { name: 'Pen', price: 7.99, quantity: 1000 },
    { name: 'Printer', price: 649.50, quantity: 0 },
    { name: 'Notebook', price: 27.10, quantity: 4 },
    { name: 'Pencil', price: 3.75, quantity: 3 },
]

const getName = item => item.name
const quantityBiggerThanZero = item => item.quantity > 0
// const quantityWithBigQuantities = item => item.quantity >= 1000

const validItems = cart
    .filter(quantityBiggerThanZero)
    .map(getName)

console.log(validItems)

Array.prototype.myFilter = function(fn) {
    const filtered = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            filtered.push({
                name:`==> ${this[i].name}`,
                price: this[i].price,
                quantity: this[i].quantity
            } )
        }
    }
    return filtered
}

const result = cart.myFilter(quantityBiggerThanZero)
console.log(result)