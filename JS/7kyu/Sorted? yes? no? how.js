// Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    if (array.length === 0) return "yes, ascending"; // Пустой массив считается отсортированным

    let isAscending = true; // Предполагаем, что массив по умолчанию отсортирован по возрастанию
    let isDescending = true; // Предполагаем, что массив по умолчанию отсортирован по убыванию

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            isDescending = false; // Убедились, что массив не убывающий
        } else if (array[i] > array[i + 1]) {
            isAscending = false; // Убедились, что массив не возрастающий
        }
    }

    return isAscending ? "yes, ascending" : isDescending ? "yes, descending" : "no"; // Тернарный оператор для возврата результата
}


console.log(isSortedAndHow([1, 2, 3, 4, 5]));
console.log(isSortedAndHow([5, 4, 3, 2, 1]));
console.log(isSortedAndHow([1, 5, 3, 4, 2]));