// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
//
//     Return as a number.

function divCon(x){
    let totalNumber = 0; // Сумма целых чисел
    let totalString = 0; // Сумма строковых представлений

    for (let item of x) {
        if (typeof item === 'number') {
            totalNumber += item; // Если это число, добавляем его к totalNumber
        } else if (typeof item === 'string' && !isNaN(item)) {
            totalString += Number(item); // Если это строка, преобразуем её в число и добавляем к totalString
        }
    }

    return totalNumber - totalString; // Возвращаем разность
}


console.log(divCon([ 9, 3, '7', '3'])); // 12 - 10 = 2