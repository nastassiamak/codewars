// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//
//     Example
//
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    if(input === 0){return 0}

    if (!input || input.length === 0) {
        return []; // Возвращаем пустой массив, если input не является валидным массивом
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count++;
        }
        if(input[i] < 0){
            sum += input[i];
        }
    }

    return [count , sum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([]))
