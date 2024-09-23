// DESCRIPTION:
//
//     Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//SOLUTION

function sumDigits(number) {
    let str = Math.abs(number).toString().split('');
    let sum = 0;
    for (let i = 0; i < str.length; i++){
        sum += parseInt(str[i]);
    }
    return sum;
}
console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
