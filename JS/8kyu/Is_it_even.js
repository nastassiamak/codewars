// DESCRIPTION:
//
//     In this Kata we are passing a number (n) into a function.
//
// Your code will determine if the number passed is even (or not).
//
// The function needs to return either a true or false.
//
//     Numbers may be positive or negative, integers or floats.
//


//SOLUTION

function testEven(n) {
    if ( n % 2 === 0 ){
        return true;
    }
    else return false;
}
console.log(testEven(7));