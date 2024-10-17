/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function solution(str, ending) {
    return str.includes(ending, str.length - ending.length);
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function solution(str, ending){
  return str.endsWith(ending);
}

WHAT DID I LEARN ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to check if a string ends with a specific substring using the includes method, which can be useful in web development for validating user input or ensuring correct data formats in applications.


*/
