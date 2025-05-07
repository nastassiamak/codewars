//Your task is to write function factorial.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Факториал 0 и 1 равен 1
    }
    return n * factorial(n - 1); // Рекурсивный вызов для нахождения факториала
}

console.log(factorial(5));