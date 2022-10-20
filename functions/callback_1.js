
const exec = (callback, first_number,second_number) => {

    return callback(first_number, second_number);
}

const sum = (first_number, second_number) => console.log(first_number + second_number)
const sub = (first_number, second_number) => console.log(first_number - second_number)

exec(sub, 3, 2)