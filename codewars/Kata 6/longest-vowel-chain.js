/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function solve(s) {
    let vowelCount = 0;
    let maxVowels = 0;
    for (let char of s) {
        if ("aeiou".includes(char)) {
            vowelCount++;
            if (vowelCount > maxVowels) {
                maxVowels = vowelCount;
            }
        } else {
            vowelCount = 0;
        }
    }
    return maxVowels;
}

console.log(solve("codewarriors"));

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function solve(s) {
  let cur = 0
  let max = 0
  for (let i = 0; i < s.length; ++i) {
    if ("aeiou".includes(s[i])) {
      cur++
      if (cur > max) {
        max = cur
      }
    } else {
      cur = 0
    }
  }
  return max
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
