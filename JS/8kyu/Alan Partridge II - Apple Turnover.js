// DESCRIPTION:
//
//     Task
//
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//SOLUTION

function apple(x){

    if (Math.pow(x,2) > 1000) {
        return "It's hotter than the sun!!";
    } else {
        return "Help yourself to a honeycomb Yorkie for the glovebox.";

    }

}

console.log(apple(6));