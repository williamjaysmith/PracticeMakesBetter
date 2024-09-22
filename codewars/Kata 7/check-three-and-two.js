/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function checkThreeAndTwo(array) {
    const frequency = {};

    for (let char of array) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    const counts = Object.values(frequency);

    return counts.includes(3) && counts.includes(2);
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
    
    return result;
  }, {});
  
  const containsThree = Object.values(counts).some(x => x === 3);
  const containsTwo = Object.values(counts).some(x => x === 2);
  
  return containsThree && containsTwo;
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to count occurrences of items in an array and check for specific counts, which could be useful in a web app for validating patterns, like ensuring a form has specific numbers of selected options.

*/
