// Find the number with the most digits.
//
//     If two numbers in the argument array have
//     the same number of digits, return the first one in the array.

function findLongest(array){
    let result = array[0];
    for(let i = 1; i < array.length; i++){
        if (String(array[i]).length > String(result).length){
            result= array[i];
        }
    }
    return result;
}

console.log(findLongest([100, 66, 1]));