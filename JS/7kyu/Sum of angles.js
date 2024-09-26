// DESCRIPTION:
//
//     Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

//SOLUTION

function angle(n) {
    return (n - 2) * 180;
}
console.log(angle(2));
console.log(angle(4));