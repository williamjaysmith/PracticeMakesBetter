/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function noOdds(values) {
    return values.filter((a) => a % 2 === 0);
}
/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

var noOdds = values => values.filter(x => x % 2 === 0);

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to filter out odd numbers from an array, which could be useful in a web app for processing data to display only even values, such as in a list of user scores or settings.


*/
