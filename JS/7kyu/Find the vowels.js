// DESCRIPTION:
//
//     We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//
// So given a string "super", we should return a list of [2, 4].
//
//     Some examples:
//     Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
//
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    const indices = []; // Массив для хранения индексов

    // Проходим по каждому символу в слове
    for (let i = 0; i < word.length; i++) {
        // Проверяем, является ли символ гласной
        if (vowels.includes(word[i])) {
            indices.push(i + 1); // Если да, добавляем индекс в массив
        }
    }

    return indices; // Возвращаем массив индексов
}

console.log(vowelIndices('apple'));