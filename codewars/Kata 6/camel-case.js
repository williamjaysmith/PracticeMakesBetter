/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"


MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/
function camel(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

console.log(camel("hello case"));
// console.log(camel("hello case"));

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function camel(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

i learned that if i were to use word[0] and it were an empty string, itll throw an error ... but using charAt wont

*/
