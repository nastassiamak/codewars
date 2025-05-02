
//Write function parseF which takes an input and returns a number or null
// if conversion is not possible. The input can be one of many different types so be aware.

function parseF(input) {
    if (input === null) {
        return null; // Если входные данные равны null, возвращаем null.
    }

    // Пробуем преобразовать входные данные в строку и затем в число
    const inputString = String(input);

    // Пробуем преобразовать строку в число
    const result = Number(inputString);

    // Проверяем, является ли результат действительным числом
    return isNaN(result) ? null : result; // Если результат NaN, возвращаем null, иначе возвращаем число.
}
