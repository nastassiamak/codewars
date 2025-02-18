// Task
//
// Create a method all which takes two params:
//
//     a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
//
//     Example
//
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

function all(sequence, func) {
    // Проверяем, если последовательность пустая
    if (sequence.length === 0) {
        return true;
    }

    // Используем цикл for для итерации по каждому элементу
    for (let i = 0; i < sequence.length; i++) {
        // Если функция вернет false для любого элемента, возвращаем false
        if (!func(sequence[i])) {
            return false;
        }
    }

    // Если функция вернула true для всех элементов, возвращаем true
    return true;
}

// Примеры функций
function greaterThanNine(x) {
    return x > 9;
}

function lessThanNine(x) {
    return x < 9;
}

// Примеры использования
console.log(all([1, 2, 3, 4, 5], greaterThanNine)); // -> false
console.log(all([1, 2, 3, 4, 5], lessThanNine));    // -> true



