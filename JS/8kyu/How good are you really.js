// DESCRIPTION:
//
//     There was a test in your class and you passed it. Congratulations!
//
//     But you're an ambitious person. You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
//
// Return true if you're better, else false!
//
// Note:
//
//     Your points are not included in the array of your class's points. Do not forget them when calculating the average score!


//SOLUTION

function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
}

console.log(betterThanAverage([2,3],5));