/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function chritmasTreeBuilder(branches) {
    let tree = "";
    let stars = 1;

    for (let i = 0; i < branches; i++) {
        let spaces = " ".repeat(branches - i - 1);
        tree += spaces + "*".repeat(stars) + spaces + "\n";
        stars += 2;
    }
    let trunkWidth = Math.floor(branches / 3) || 1;
    let trunkHeight = Math.floor(branches / 3);
    let trunkSpaces = " ".repeat((stars - 1 - trunkWidth) / 2);

    for (let i = 0; i < trunkHeight; i++) {
        tree += trunkSpaces + "*".repeat(trunkWidth) + trunkSpaces + "\n";
    }

}
      *
     ***
    *****
   *******
  *********
 ***********
*************
      **
      **
chritmasTreeBuilder(11);



/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

There is no best practice, just christmas spirit

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
