// DESCRIPTION:
//
//     Instructions
//
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//
// Example (Input --> Output)
//
// "CodEWaRs" --> [0,3,4,6]


//SOLUTION

var capitals = function (word) {
    let result = [];
    let words = word.split("");
    for (let i = 0; i < words.length; i++){
        if (words[i] === words[i].toUpperCase()){
            result.push(i);
        }
    }
    return result;
};

console.log(capitals("HellOBro"));