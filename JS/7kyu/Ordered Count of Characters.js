// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
//     Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


const orderedCount = function (text) {
    const countMap = new Map(); // Создаем Map для хранения символов и их счетчиков.

    // Считаем количество вхождений символов
    for (const char of text) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }

    // Формируем результат в виде массива массивов
    const result = Array.from(countMap, ([char, count]) => [char, count]);

    return result; // Возвращаем массив символов и их количества.
}
console.log(orderedCount("ssup"));
console.log(orderedCount("abracadabra"));

