// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
//
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1

function sameCase(a, b) {
    // Проверяем, являются ли оба символа буквами
    if ((a < 'A' || a > 'Z') && (a < 'a' || a > 'z') ||
        (b < 'A' || b > 'Z') && (b < 'a' || b > 'z')) {
        return -1; // Если хотя бы один не буква, возвращаем -1
    }

    // Проверяем, одинаковый ли регистр
    if ((a >= 'A' && a <= 'Z' && b >= 'A' && b <= 'Z') || (a >= 'a' && a <= 'z' && b >= 'a' && b <= 'z')) {
        return 1; // Одинаковые регистры (оба заглавные или оба строчные)
    } else {
        return 0; // Разные регистры, но оба буквы
    }
}

console.log(sameCase('C', 'B')); // 1
console.log(sameCase('b', 'a')); // 1
console.log(sameCase('d', 'd')); // 1
console.log(sameCase('A', 's')); // 0
console.log(sameCase('c', 'B')); // 0
console.log(sameCase('b', 'Z')); // 0
console.log(sameCase('\t', 'Z')); // -1
console.log(sameCase('H', ':')); // -1