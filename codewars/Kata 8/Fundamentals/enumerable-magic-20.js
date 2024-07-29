/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function eachCons(array, n) {
    let result = [];

    for (let i = 0; i <= array.length - n; i++) {
        result.push(array.slice(i, i + n));
    }

    return result;
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function eachCons(array, n) {
  let res = [];
  
  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }
  
	return res.filter(e => e.length === n);
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

oof! i learned a lot. learned to terminate the loop early based on the subset length, so the last array wouldnt exceed the amount we're given. Then learned to slice according to our position and the value of N to create a certain length subset


*/
