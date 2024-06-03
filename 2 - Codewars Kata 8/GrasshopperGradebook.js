/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function getGrade(s1, s2, s3) {
    let avgGrade = (s1 + s2 + s3) / 3;
    if (avgGrade < 60) return "F";
    else if (avgGrade < 70) return "D";
    else if (avgGrade < 80) return "C";
    else if (avgGrade < 90) return "B";
    else return "A";
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function getGrade(s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    const grades = ['F', 'D', 'C', 'B', 'A'];
    return grades[Math.floor(average / 10)] || 'A';
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to calculate the average of three scores and assign a corresponding letter grade based on the average. This involves computing the average and using conditional statements to determine the appropriate grade.


*/
