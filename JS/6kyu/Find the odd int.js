// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
//

function findOdd(A) {
    const counts = {};

    //Подсчитываем к-во вхождений каждого числа
    for (let i of A) {
        counts[i] = (counts[i] || 0) + 1; // увеличиваем счетчик для этого числа
    }

    //Находим число с нечетным к-вом вхождений
    for (let i in counts) {
        if (counts[i] % 2 !== 0) { //если к-во нечетное
            return Number(i); //возвращаем это число
        }
    }
}

console.log(findOdd([6,5,5])); //6
console.log(findOdd([5])); //5
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); //4