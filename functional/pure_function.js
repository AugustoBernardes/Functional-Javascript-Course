// Uma função pura é uma função em que o valor 
//  de retorno é determinado APENAS por seus valores de entrada,
//  sem efeitos colaterais observáveis.

const PI = 3.14;

//impure - PI is a external value
function radius(radius){ return PI * radius * radius}

console.log(radius(10)); // 314


// pure - PI is a internal value
function radiusPure(radius, pi){ return pi * radius * radius}

console.log(radiusPure(10, 3.14)); // 314