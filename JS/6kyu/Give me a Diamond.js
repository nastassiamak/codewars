// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
//
//     Task
//
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
//
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
//
//     Examples
//
// A size 3 diamond:
//
//     *
//    ***
//     *
// ...which would appear as a string of " *\n***\n *\n"
//
// A size 5 diamond:
//
//      *
//     ***
//    *****
//     ***
//      *
// ...that is:
//
//     "  *\n ***\n*****\n ***\n  *\n"

function createDiamond(size) {
    // Проверяем, является ли число четным или отрицательным
    if (size < 1 || size % 2 === 0) {
        return null; // Возвращаем null, если это так
    }

    let result = ""; // Создаем пустую строку для результата

    // Создаем верхнюю часть ромба
    for (let i = 0; i < size; i += 2) {
        const spaces = ' '.repeat((size - i) / 2); // Расчет пробелов для центрирования
        const stars = '*'.repeat(i + 1);           // Расчет числа звезд для текущей строки
        result += spaces + stars + '\n';           // Формируем строку и добавляем ее к результату
    }

    // Создаем нижнюю часть ромба
    for (let i = size - 2; i >= 0; i -= 2) {
        const spaces = ' '.repeat((size - i) / 2); // Расчет пробелов для нижней части
        const stars = '*'.repeat(i);            // Расчет числа звезд
        result += spaces + stars + '\n';           // Формируем строку и добавляем ее к результату
    }

    return result;
}

// Примеры вызова функции
console.log(createDiamond(3));
console.log(createDiamond(5));
console.log(createDiamond(-2));
console.log(createDiamond(0));