
// challenge 1
const sum = (first_number = 0) => {
    return (second_number = 0) => {
        return (third_number = 0) => {    
            return first_number + second_number + third_number;
        }
    }
}

const sum_result = sum(2)(4)(5);
console.log(sum_result);


// challenge 2

const multiply = (first_number, second_number) => {
    return first_number * second_number;
}

const calculate = (first_number = 0) => {
    return (second_number = 0) => {
        return (fn) => {
            if(typeof fn === 'function'){
                return fn(first_number, second_number);
            }    

            console.log('That is not a function');
        }    
    }
}

const function_calculate = calculate(2)(2)(multiply);
console.log(function_calculate);