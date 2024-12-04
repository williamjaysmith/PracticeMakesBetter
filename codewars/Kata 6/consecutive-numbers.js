/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/
function longestRepetition(s) {
    if (!s || s.length === 0) {
        return ["", 0];
    }

    let maxChar = "";
    let maxCount = 0;

    let currentChar = s[0];
    let currentCount = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxChar = currentChar;
                maxCount = currentCount;
            }
            currentChar = s[i];
            currentCount = 1;
        }
    }

    // Check the last streak
    if (currentCount > maxCount) {
        maxChar = currentChar;
        maxCount = currentCount;
    }

    return [maxChar, maxCount];
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function longestRepetition(s) {
  let count = 0;
  let prevLetter = '';
  
  return s.toLowerCase().split('').reduce((acc, curr) => {
    if(curr === prevLetter){
      count++;
    }
    else{
      count = 1;
    }

    if(count > acc[1]){
      acc[1] = count;
      acc[0] = curr;
    }

    prevLetter = curr;
    return acc;
  }, ['', 0]);
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
