//DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
//     The function takes a name as its only argument, and returns one of the following strings:
//
//     name + " plays banjo"
// name + " does not play banjo"

// SOLUTION

function areYouPlayingBanjo(name) {
    if (name.indexOf("R") === 0 || name.indexOf("r") === 0) {
        return name + " plays banjo";
    }
    else {
        return name + " does not play banjo";
    }
}

console.log(areYouPlayingBanjo("Roman"));
console.log(areYouPlayingBanjo("Nikola"));
console.log(areYouPlayingBanjo("roza"));