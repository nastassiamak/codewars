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
    let numberStart = number;
    let quantity = 1;
    while (number >= 10 || number <= -10) {
        number = Math.round(number) / 10;
        quantity++;
    }

    return numberStart * Math.pow(5, quantity);

}
console.log(multiply(3));
console.log(multiply(10));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-3));
console.log(multiply(-52228));
console.log(multiply(52228));
