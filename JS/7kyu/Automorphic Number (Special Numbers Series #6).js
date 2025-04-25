// A number is called Automorphic number if and only if its square ends in the
// same digits as the number itself. For example, 25 is an automorphic number
// because its square (625) ends with 25.
//     Task
//
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

function automorphic(n){

    // Вычисляем квадрат числа
    const squared = Math.pow(n,2);
    // Конвертируем как квадрат, так и исходное число в строки
    const squaredStr = squared.toString();
    const numStr = n.toString();

    // Проверяем, заканчивается ли квадрат на исходное число
    if (squaredStr.length >= numStr.length) {
        let endsWithNum = squaredStr.slice(-numStr.length); // Получаем последние цифры квадрата
        return endsWithNum === numStr ? "Automorphic" : "Not!!"; // Сравниваем
    }

    return "Not!!"; // В случае, если длина квадрата меньше длины числа

}

console.log(automorphic(9));
console.log(automorphic(25));