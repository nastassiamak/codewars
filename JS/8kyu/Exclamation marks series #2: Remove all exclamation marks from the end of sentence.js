// Description:
//
//     Remove all exclamation marks from the end of sentence.
//
//     Examples
//
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
   let result = [];
   for (let i = string.length - 1; i => 0; i--) {
       if (string[i] !== '!'){
       result.push(string.slice(0, i + 1));
       return result.join('');
       }
   }
}

console.log(remove('a!')); //a
console.log(remove('a!!!!')); //a
console.log(remove('!a!')); //!a
console.log(remove('!a')); //!a