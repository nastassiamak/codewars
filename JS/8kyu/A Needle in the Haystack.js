// DESCRIPTION:
//
//     Can you find the needle in the haystack?
//
//     Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
//     "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
//     ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

//SOLUTION

function findNeedle(haystack) {
    let count = 0;
    for(let i = 0; i < haystack.length; i++)
    {if(haystack[i]==='needle'){
        count = i;
    }}
    return "found the needle at position " + `${count}`;
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

