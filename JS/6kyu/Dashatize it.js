// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
//
//     Ex:
//
// 274 -> '2-7-4'
// 6815 -> '68-1-5'
function dashatize(num) {
    // Переводим число в строку и берем его абсолютное значение
    const strNum = Math.abs(num).toString();
    let result = "";

    for (let i = 0; i < strNum.length; i++) {
        const digit = strNum[i];

        // Проверяем, является ли цифра нечетной
        if (digit % 2 !== 0) {
            // Если это не первая цифра, добавляем тире перед нечетной цифрой
            if (result.length > 0 && !result.endsWith('-')) {
                result += '-';
            }
            result += digit; // Добавляем нечетную цифру
            // Добавляем тире после нечетной цифры, если это не последняя цифра
            if (i < strNum.length - 1) {
                result += '-';
            }
        } else {
            result += digit; // Просто добавляем четную цифру
        }
    }

    return result; // Возвращаем итоговую строку
}

// Примеры использования
console.log(dashatize(-1));     // '1'
console.log(dashatize(-28369));  // '28-3-6-9'
console.log(dashatize(274));     // '2-7-4'
console.log(dashatize(6815));    // '68-1-5'
console.log(dashatize(0));       // '0'
console.log(dashatize(123456));  // '1-2-3-4-5-6'