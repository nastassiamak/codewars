// DESCRIPTION:
//
//     Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.


//SOLUTION
function sumMix(x){
    var sum = 0;
    for(let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            sum += Number(x[i])
        } else {
            sum += x[i]
        }
    }
    return sum;
}

console.log(sumMix(['1',3,7]))