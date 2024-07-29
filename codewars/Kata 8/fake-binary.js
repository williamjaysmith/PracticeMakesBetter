/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function fakeBin(x) {
    return x
        .split("")
        .map((x) => (x < 5 ? 0 : 1))
        .join("");
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function fakeBin(x){
    return x.split("").map(x => x < 5 ? 0 : 1).join("");
  }

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to transform a string of digits into a string of 0s and 1s based on whether each digit is less than 5 or not. This involves splitting the string into individual characters, mapping each character to 0 or 1, and then joining them back into a single string.


*/
