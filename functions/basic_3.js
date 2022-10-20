const merryChristmas = () => {
    console.log('Merry Christmas!');
}
merryChristmas()

const happyNewYear = (name) => `Happy new year ${name}!`;
console.log(happyNewYear('John'));

const sum = (numbers) => {
    let total = 0

    for(let n of numbers){
        total += n
    }

    return total
}

const sum_result = sum([1, 2, 3, 4, 5]);
console.log(sum_result);