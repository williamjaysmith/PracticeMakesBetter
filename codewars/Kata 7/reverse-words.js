/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function reverseWords(str) {
    let wordArray = str.split(" ");

    let letterArray = [];

    for (let i = 0; i < wordArray.length; i++) {
        letterArray[i] = wordArray[i].split("").reverse().join("");
    }

    return letterArray.join(" ");
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}




*/
