/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function sumMix(x) {
    return x.reduce((acc, num) => acc + Number(num), 0);
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to sum an array of mixed data types by converting each element to a number, which can be helpful in web development when processing user input that may come as strings but needs to be treated as numbers for calculations.


*/
