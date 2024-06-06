/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to determine if a number is even or odd using the modulus operator and a ternary operator to return "Even" or "Odd" based on the result of the modulus operation.


*/
