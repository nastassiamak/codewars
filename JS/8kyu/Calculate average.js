// DESCRIPTION:
//
//     Write a function which calculates the average of the numbers in a given list.
//
//     Note: Empty arrays should return 0.

//SOLUTION

function findAverage(array) {
    let average = 0;
    if (array.length > 0)
    {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum += array[j];
        }
        average = sum / array.length;
    }
    return average;
}

console.log(findAverage([3,8,4]));