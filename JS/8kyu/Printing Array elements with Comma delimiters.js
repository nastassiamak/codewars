// DESCRIPTION:
//
//     Input: Array of elements
//
//     ["h","o","l","a"]
//
// Output: String with comma delimited elements of the array in th same order.
//
// "h,o,l,a"
//
// Note: if this seems too simple for you try the next level
//
// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕


//SOLUTION

function printArray(array){
    return array.toString().split(',').join(",");
}
console.log(printArray(["h","o","l","a"]));
console.log(printArray([1, 5, 3, 1]));
