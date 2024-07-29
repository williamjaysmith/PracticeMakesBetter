/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function sumMix(x) {
    let toNumber = x.map((el) => Number(el));
    let reduceNumber = toNumber.reduce((a, b) => a + b);
    return reduceNumber;
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to convert all elements of an array to numbers and then sum them using map() and reduce()


*/
