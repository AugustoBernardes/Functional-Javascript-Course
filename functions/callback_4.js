
const cart = [
    { name: 'Pen', price: 7.99, quantity: 1000 },
    { name: 'Printer', price: 649.50, quantity: 0 },
    { name: 'Notebook', price: 27.10, quantity: 4 },
    { name: 'Pencil', price: 3.75, quantity: 3 },
]

const getTotal = item => item.quantity * item.price
const sum = (accumulator, currentValue) => accumulator + currentValue

const total = cart.map(getTotal).reduce(sum)

console.log(total)
