// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
//
//     You can assume the input will always be a number.

function validateCode (code) {
    const regex = ['1','2','3'];
    const codeStr = code.toString();
    for (let i = 0; i < regex.length; i++) {

        if (codeStr[0] === regex[i]) {
            return true;
        }

    }
    return false;
}

console.log(validateCode(123));
console.log(validateCode(2678));
console.log(validateCode(512));
console.log(validateCode(3789));
console.log(validateCode(0));
