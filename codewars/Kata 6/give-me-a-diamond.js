/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function diamond(n) {
    if (n <= 0 || n % 2 === 0) return null; // Return null for invalid input

    let diamond = "";

    // Generate the top half and middle row
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        let spaces = " ".repeat(Math.floor(n / 2) - i);
        let stars = "*".repeat(2 * i + 1);
        diamond += spaces + stars + "\n";
    }

    // Generate the bottom half
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        let spaces = " ".repeat(Math.floor(n / 2) - i);
        let stars = "*".repeat(2 * i + 1);
        diamond += spaces + stars + "\n";
    }
    console.log(diamond);
    return diamond;
}
diamond(5);
/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function diamond(n) {
   
    if (n <= 0 || n % 2 === 0) return null;
    str = "";
    for (let i = 0; i < n; i++) {
        let len = Math.abs((n - 2 * i - 1) / 2);
        str += " ".repeat(len);
        str += "*".repeat(n - 2 * len);
        str += "\n";
    }
    console.log(str);
    return str;
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
