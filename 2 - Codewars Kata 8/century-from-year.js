/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function century(year) {
    let yearToString = year.toString();
    let firstDigs = Number(yearToString.slice(0, yearToString.length - 2));
    if (year > 100 && year % 100 == 0) {
        return firstDigs;
    } else if (year > 100) {
        return firstDigs + 1;
    } else {
        return 1;
    }
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

const century = year => Math.ceil(year/100)

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to calculate the century from a given year by converting the year to a string, extracting the first digits, and using conditions to adjust the century based on whether the year ends in "00" or not.


*/
