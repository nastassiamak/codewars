// DESCRIPTION:
//
//     Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

//SOLUTION

function combat(health, damage) {
    if( health - damage > 0) {
        return health-damage
    } else {
        return 0
    }
}

console.log(combat(100,5));
console.log(combat(6,12));