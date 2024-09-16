// DESCRIPTION:
//
//     You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
//
// Examples
//
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3


//SOLUTION

function stray(numbers) {
    let stay = numbers[0];
    if(stay !== numbers[1] && stay !== numbers[2]){
        return stay;
    }
    for (let i = 0; i < numbers.length; i++){
        if(stay !== numbers[i]){
            return  numbers[i];
        }
    }

}
console.log(stray([1,2,1]));
console.log(stray([2,1,1]));