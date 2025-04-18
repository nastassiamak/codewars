// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
//
//     For Example:
//
//     [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//     , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//     , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
//
// Note: You will always be given a non-empty list containing positive values.

function sumOfMinimums(arr) {
    let sum = 0; //переменная для хранения

    //проходим по каждой строке в матрице
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i][0]; //предполагаем сто первый элемент  - минимальный

        //проходим по элементам текущей строки
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {//если текущий элемент меньше минимума
                min = arr[i][j];//обновляем минимум
            }
        }
        sum += min; //добавляем минимум к текущей строки к общей сумме
    }
    return sum;
}

console.log(sumOfMinimums([[ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100]]));