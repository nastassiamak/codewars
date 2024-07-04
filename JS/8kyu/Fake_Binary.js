// DESCRIPTION:
//
//     Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
//     Note: input will never be an empty string


//SOLUTION

function fakeBin(x){
    let array=[];
    for(let i=0;i < x.length;i++){
        if(Number(x[i]<5)){
            array.push(0);
        }
        else{
            array.push(1);
        }
    }
    return array.join("");
}

console.log(fakeBin("347509812345"));