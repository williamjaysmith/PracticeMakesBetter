/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});


MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function twoSum(arr, sum) {
    const pairs = [];
    const numMap = {};

    for (let num of arr) {
        let difference = sum - num;
        if (numMap[difference]) {
            pairs.push([num, difference]);
        } else {
            numMap[num] = difference;
        }
    }

    return pairs;
}
console.log(twoSum([1, 2, 2, 3, 4], 4));

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function twoSum(arr, sum) {
    const pairs = [];
    const numMap = {};

    for (let num of arr) {
        let difference = sum - num;
        if (numMap[difference]) {
            pairs.push([num, difference]);
        } else {
            numMap[num] = difference;
        }
    }

    return pairs;
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
