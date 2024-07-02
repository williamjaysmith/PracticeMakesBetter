/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

const reverseSeq = (n) => {
    let array = [];
    for (let i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
};

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

const reverseSeq = n => {
    let array = [];
    for (let i = n; i > 0; i--) {
        array.push(i);
    }
    return array;
  };

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to create a sequence of numbers in reverse order by initializing an empty array and using a loop to add numbers from n down to 1.


*/
