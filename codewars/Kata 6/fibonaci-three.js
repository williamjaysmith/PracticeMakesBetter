/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function exampleFunction() {
    console.time("Function runtime");

    // Fibonacci function with memoization

    // WITH MEMOIZATION
    let memo = {};
    var fib = function (n) {
        if (n < 2) {
            return 1;
        } else if (memo[n]) {
            return memo[n];
        } else {
            let result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
            return result;
        }
    };

    console.log("Fibonacci result:", fib(45));

    // Additional code to measure execution time
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }

    console.timeEnd("Function runtime");

    // Display the memoized results
    // console.table(memo);
}

// Call the function
exampleFunction();

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████



WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
