// DESCRIPTION:
//
//     Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
//
//     Please use the following function names:
//
//     addition = add
//
// multiply = multiply
//
// division = divide (both integer and float divisions are accepted)
//
// modulus = mod
//
// exponential = exponent
//
// subtraction = subt
//
// Note: All math operations will be: a (operation) b

//SOLUTION

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}

function exponent(a,b){
    return a ** b
}

function subt(a,b){
    return a - b
}

console.log(add(4,1));
console.log(divide(22,11));
console.log(multiply(2,6));
console.log(mod(45,6));
console.log(exponent(2,4));
console.log(subt(14,4));

