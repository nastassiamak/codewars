// DESCRIPTION:
//
//     Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F


//SOLUTION

function abbrevName(name){
    let arr = name.split(' ');
    let result = arr[0].split('',1) + "." + arr[1].split('', 1);
    return result.toUpperCase();

}

console.log(abbrevName("Nikola Tesla"));
console.log(abbrevName("lana lee"));