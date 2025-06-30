// DESCRIPTION:
//
//     You need to write regex that will validate a password to make sure it meets the following criteria:
//
//     At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

console.log(REGEXP.test("Password1"));   // true
console.log(REGEXP.test("pass1"));       // false (короткий)
console.log(REGEXP.test("PASSWORD1"));   // false (нет строчной)
console.log(REGEXP.test("password1"));   // false (нет заглавной)
console.log(REGEXP.test("Password_1"));  // false (символ "_" недопустим)
