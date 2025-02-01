// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//
//     Example:
//
//     'acb' --> 'bca'
//     'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
    const str = x.split('');
    let arr = [];

   for (let i = 0; i < str.length; i++) {
       if (str[i] === 'a') {
           arr.push('b');
       } else if (str[i] === 'b') {
           arr.push('a');
       } else {
           arr.push(str[i]);
       }
   }
   return arr.join('');
}


console.log(switcheroo('acb')); //bca
console.log(switcheroo('aaccccba')); // bbcccab
console.log(switcheroo('ccc')); //ccc