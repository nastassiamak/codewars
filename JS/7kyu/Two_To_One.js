// DESCRIPTION:
//
//     Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
//
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// SOLUTION

function longest(s1, s2) {
    let str = s1 + s2;
    let strSort = str.split('').sort().join('');
    let result = '';
    for (let i = 0; i < strSort.length; i++){
        if (strSort.indexOf(strSort[i]) >= i){
            result += strSort[i];
        }
    }
    return result;
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

