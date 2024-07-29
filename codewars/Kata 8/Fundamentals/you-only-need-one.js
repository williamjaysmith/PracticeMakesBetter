/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

*** No Loops Allowed ***

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function check(a, x) {
    return a.includes(x) ? true : false;
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function check(a,b){
  return a.includes(b);
};

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

learned that this includes method will automatically return true or false


*/
