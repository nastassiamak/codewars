// DESCRIPTION:
//
//     Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//SOLUTION

function include(arr, item) {
    return arr.indexOf(item) !== -1;
}
 console.log(include([2, 7, 0, 4], 7));
console.log(include([2,2,88,4],9));