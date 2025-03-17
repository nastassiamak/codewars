//Return the type of the sum of the two arguments

function typeOfSum(a, b) {
    const sum = a + b;
    return typeof sum;
}

console.log(typeOfSum(4,5));
console.log(typeOfSum(5, "j"));
console.log(typeOfSum(null, undefined));
