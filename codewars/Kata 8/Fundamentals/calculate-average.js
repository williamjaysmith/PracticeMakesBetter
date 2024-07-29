/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function findAverage(array) {
    if (array && array.length > 0) {
        let addArray = array.reduce((a, b) => a + b, 0);
        return addArray / array.length;
    } else {
        return 0;
    }
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████


I learned how to check for empty arrays and use the reduce() method to calculate the sum of elements


*/
