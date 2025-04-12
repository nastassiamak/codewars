// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
//
//     "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.
//
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactorDecomposition(n) {
    const factors = {};

    // Проверяем количество раз, сколько n делится на 2
    while (n % 2 === 0) {
        factors[2] = (factors[2] || 0) + 1;
        n /= 2;
    }

    // Проверяем остальные нечётные числа
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors[i] = (factors[i] || 0) + 1;
            n /= i;
        }
    }

    // Если n стало больше 2, то это простой множитель
    if (n > 2) {
        factors[n] = 1;
    }

    // Формируем строку
    let result = "";
    for (const [key, value] of Object.entries(factors)) {
        if (value === 1) {
            result += `(${key})`;
        } else {
            result += `(${key}**${value})`;
        }
    }

    return result;
}

// Пример использования
const n = 86240;
console.log(primeFactorDecomposition(n));