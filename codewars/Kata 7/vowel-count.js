/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████


Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/
function getCount(str) {
    let array = str.toLowerCase().split("");
    let accumulator = 0;
    for (let i = 0; i < array.length; i++) {
        if (
            array[i] === "a" ||
            array[i] === "e" ||
            array[i] === "i" ||
            array[i] === "o" ||
            array[i] === "u"
        )
            accumulator++;
    }
    return accumulator;
}
/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to count the number of vowels in a string, which can be useful in web development for validating text inputs or processing user-generated content.

*/
