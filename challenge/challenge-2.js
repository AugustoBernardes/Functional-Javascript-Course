const cart = [
    { name: 'Pen', price: 12, quantity: 3, weak:true },
    { name: 'Printer', price: 649.50, quantity: 1, weak:false },
    { name: 'Notebook', price: 27.10, quantity: 4, weak:false },
    { name: 'Pencil', price: 2, quantity: 3, weak:true },
]

// 1. weak: true
// 2. quantity * price => total
// 3. avarage

const getWeakProducts = item => item.weak
const sumQuantityAndPrice = item => item.quantity * item.price
const calculateAvarate =   (accumulator, currentValue) => {
    const newQuantity = accumulator.quantity + 1 
    const newTotal = accumulator.total + currentValue
    return {
        quantity: newQuantity ,
        total: newTotal,
        avarage: newTotal / newQuantity
    }
}
const initialAvarage = {quantity:0, total:0,avarage:0}

const filteredProducts = cart
  .filter(getWeakProducts)
  .map(sumQuantityAndPrice)
  .reduce(calculateAvarate, initialAvarage)

console.log(filteredProducts)
