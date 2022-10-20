

// Functional Declaration
function goodMorning() {
    console.log('Good Morning!');
}

goodMorning()

// Functional Expression
const goodAfternoon = function() {
    console.log('Good Afternoon!');
}

goodAfternoon()

function sum(a = 0, b = 0) {
    return a + b;
}

let result = sum(3, 4);
console.log(result);

result = sum(3);
console.log(result);

result = sum();
console.log(result);