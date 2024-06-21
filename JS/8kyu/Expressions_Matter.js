// DESCRIPTION:
//     Task
//
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
//
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// SOLUTION

function expressionMatter(a, b, c) {
    let number1 = a * (b + c);
    let number2 = a * b * c;
    let number3 = a + b * c;
    let number4 = (a + b) * c;
    let number5 = a + b + c;
    const numbers = Math.max(... [number1, number2, number3, number4, number5]);
    console.log(numbers);
    return numbers;
}
expressionMatter(1,2,3);