// DESCRIPTION:
//
//     Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
//
// Examples:
//
//     1: -1
// 14: -14
// -34: 34

// SOLUTION
function opposite(number) {
    if (number > 0) {
        return number * -1;
    }
    else {
        return -number;
    }
}

console.log(opposite(34));
console.log(opposite(-34));
