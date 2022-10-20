
function goodMorning() {
    console.log('Good Morning!');
}

const goodAfternoon = function() {
    console.log('Good Afternoon!');
}

// Send function as parameter
function executeEverything(fn) {
    if (typeof fn === 'function') {
        fn();
    }
}

executeEverything(3);
executeEverything(goodMorning);
executeEverything(goodAfternoon);

// Return power of 2

function power(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
}

const powerOf2 = power(2);
console.log(powerOf2(8));

