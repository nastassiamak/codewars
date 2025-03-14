// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr) {
    const frequencyArr = {};
    for (const item of arr) {
        frequencyArr[item] = (frequencyArr[item] || 0) + 1;
    }

    let maxFrequency = 0;
    let result = null;

    for (let item in frequencyArr) {
        if (frequencyArr[item] > maxFrequency) {
            maxFrequency = frequencyArr[item];
            result = Number(item);
        } else if (frequencyArr[item] === maxFrequency) {
            result = Math.max(result, Number(item));
        }
    }
    return result;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); //12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); //12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); //3

