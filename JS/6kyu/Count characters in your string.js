// DESCRIPTION:
//
//     The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

//SOLUTION

function count(string) {
    let result = {};
    string.split('');
    for(let i = 0; i < string.length; i++){
        if (string[i] in result){
            result[string[i]]++
        } else {
            result[string[i]] = 1
        }
    }
    return  result;
}

console.log(count("aabs"));
console.log(count("Asd"));
