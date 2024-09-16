// DESCRIPTION:
//
//     You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//
//     Array can contain numbers or strings. X can be either.
//
//     Return true if the array contains the value, false if not.

//SOLUTION

function check(a, x) {
    return a.indexOf(x) !== -1;
}
console.log(check([66, 101], 66))
console.log(check(['t', 'e', 's', 't'], 't'))
console.log(check(['what', 'a', 'great', 'kata'], 'kat'))