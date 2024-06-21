// DESCRIPTION:
//
//     In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
//     Examples
//
//     makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// SOLUTION

function makeNegative(num) {
    if(num > 0){
        return num - num * 2;
    }
    else{
        return num;
    }
}

console.log(makeNegative(-5));
console.log(makeNegative(7));
console.log(makeNegative(0));


