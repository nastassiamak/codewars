// DESCRIPTION

// Jack really likes his number five: the trick here is that you have to multiply each 
// number by 5 raised to the number of digits of each numbers, so, for example:
//
// 3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
// 0 -->     0  (  0 * 5¹)
// -3 -->   -15  ( -3 * 5¹)

// SOLUTION

function multiply(number){
    var n= 0;
    var result = number;
    if (number > 0) {
        for (var i = 0; i < number; i++) {
            number /= 9;
            n++;
        }
    } else {
        number/=9;
        n++;
    }
    return result * Math.pow(5,n);
}
console.log(multiply(3));
console.log(multiply(10));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-3));


