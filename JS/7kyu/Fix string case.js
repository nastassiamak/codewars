// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//     For example:
//
//     solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to

function solve(s){
   let lowerCount = 0; //счетчик строчных букв
   let upperCount = 0; //счетчик заглавных букв

    //проходим по каждому символу строки
   for (let i = 0; i < s.length; i++) {
       if(s[i] >= 'a' && s[i] <= 'z'){
           lowerCount++; //увеличиваем счетчик строчных букв
       } else {
           upperCount++; //увеличиваем счетчик заглавных букв
       }
   }

   //проверяем количество заглавных и строчных букв
    if (lowerCount >= upperCount) {
        return s.toLowerCase(); //если строчных >= заглавных, возвращаем в нижнем регистре
    } else {
        return s.toUpperCase(); //если заглавных >= строчных, возвращаем в верхнем регистре
    }
}

console.log(solve("Code")); //code
console.log(solve('code')); //code
console.log(solve('CODe')); //CODE
console.log(solve('COde')); //code