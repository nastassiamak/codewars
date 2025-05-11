// Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
//
//     For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
//
// Task
//
// Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
//
//     Examples
//
// 1 is a strong number, because 1! = 1, so return "STRONG!!!!".
// 123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
// 145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
// 150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return
// "Not Strong !!".

function strong(n) {
    function factorial(num) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i; // Вычисляем факториал
        }
        return result;
    }

    let sum = 0;
    let temp = n;

    while (temp > 0) {
        let digit = temp % 10;        // Получаем последнюю цифру
        sum += factorial(digit);      // Добавляем факториал этой цифры к сумме
        temp = Math.floor(temp / 10); // Удаляем последнюю цифру
    }

    return sum === n ? "STRONG!!!!" : "Not Strong !!"; // Возвращаем результат
}

// Примеры использования
console.log(strong(145)); // Вернет "STRONG!!!!"
console.log(strong(123)); // Вернет "Not Strong !!"
console.log(strong(1));   // Вернет "STRONG!!!!"
console.log(strong(150)); // Вернет "Not Strong !!"