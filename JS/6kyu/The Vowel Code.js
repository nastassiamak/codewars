// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
//     a -> 1
    // e -> 2
    // i -> 3
    // o -> 4
    // u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
//     Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
//     For example, decode("h3 th2r2") would return "hi there".
//
//     For the sake of simplicity, you can assume that any numbers passed into the function will
//     correspond to vowels.

function encode(string) {
    const str = string.split().join('');
    const newStrArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a'){
            newStrArr.push('1');
        } else if (str[i] === 'e'){
            newStrArr.push('2');
        } else if (str[i] === 'i'){
            newStrArr.push('3');
        } else if (str[i] === 'o'){
            newStrArr.push('4');
        } else if (str[i] === 'u'){
            newStrArr.push('5');
        } else {
            newStrArr.push(str[i]);
        }
    }
    return newStrArr.join('');
}

function decode(string) {
    return string.replace(/[12345]/g, (match) => {
        switch (match) {
            case '1':
                return 'a';
            case '2':
                return 'e';
            case '3':
                return 'i';
            case '4':
                return 'o';
            case '5':
                return 'u';
            default:
                return match; // Это будет на случай, если совпадение не найдено.
        }
    });
}

console.log(encode("hello world"));
console.log(decode("h2ll4 w4rld"));