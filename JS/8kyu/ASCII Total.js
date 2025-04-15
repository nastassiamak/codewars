//
// Description
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
//
// Examples:
//
//     uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal (string) {
    let sum = 0; // Создаем переменную для хранения суммы

    for (let i = 0; i < string.length; i++) { // Проходим по каждому символу в строке
        sum += string.charCodeAt(i); // Добавляем код символа к сумме
    }

    return sum; // Возвращаем общую сумму
}

