
const cart = [
    { name: 'Pen', price: 7.99, quantity: 10 },
    { name: 'Printer', price: 649.50, quantity: 0 },
    { name: 'Notebook', price: 27.10, quantity: 4 },
    { name: 'Pencil', price: 3.75, quantity: 3 },
]

const getTotal = item => item.price * item.quantity
const getNames = item => item.name

const total = cart.map(getTotal)
const names = cart.map(getNames)

Array.prototype.myMap = function(fn) {
    const mapped = []
    for (let i = 0; i < this.length; i++) {
        mapped.push(fn(this[i], i, this))
    }
    return mapped

}

const myTotal = cart.myMap(getTotal)
console.log(myTotal)
console.log(total, names)
