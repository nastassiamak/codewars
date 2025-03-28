
// DESCRIPTION:
//
//     Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
//     If no occurrences can be found, a count of 0 should be returned.
//
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
function strCount(str, letter){
    if (str.length === 0){
        return 0;
    }
    let arr = str.split('');
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === letter){
          count++;
        }
    }
    return count;

}

console.log(strCount("Hello","l"));
console.log(strCount("", "z"));