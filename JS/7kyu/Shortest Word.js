// DESCRIPTION:
//
//     Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.


//SOLUTION

function findShort(s){
    let s1 = s.split(" ")
    let shortWord = s1[0];
    for (const str of s1){
        if (str.length < shortWord.length){
            shortWord = str;
        }
    }
    return shortWord.length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
