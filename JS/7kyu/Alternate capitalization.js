// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!

function capitalize(s){

    let eventIndex = [];
    let oddIndex = [];
    for (let i = 0; i < s.length; i++){
        if (i % 2 !== 0 ){
           eventIndex.push(s[i].toUpperCase());
           oddIndex.push(s[i].toLowerCase());
        } else {
           eventIndex.push(s[i].toLowerCase());
           oddIndex.push(s[i].toUpperCase());
        }
    }


    return [oddIndex.join('') , eventIndex.join('')];
}

console.log(capitalize("abcdef"));

