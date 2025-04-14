// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.

function high(x) {
    const words = x.split(" ");
    let highestScore = 0;
    let highestScoringWord = 0;

    for (const word of words) {
        const score = [...word].reduce((sum, letter) => sum + (letter.charCodeAt(0) - 96), 0);

        if (score > highestScore) {
            highestScore = score;
            highestScoringWord = word;
        }
    }

    return highestScoringWord;
}

console.log(high('man i need a taxi up to ubud'))