/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.



MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function whatCentury(year) {
    let yearArray = year.split("");
    let yearSliceA = yearArray.slice(0, 2).join("");
    let yearSliceB = yearArray.slice(2).join("");

    if (yearSliceB !== "00") {
        yearSliceA = String(Number(yearSliceA) + 1);
    }

    const lastDigit = yearSliceA.charAt(yearSliceA.length - 1);
    const lastTwoDigits = Number(yearSliceA.slice(-2));

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${yearSliceA}th`;
    }

    if (lastDigit === "1") {
        return `${yearSliceA}st`;
    } else if (lastDigit === "2") {
        return `${yearSliceA}nd`;
    } else if (lastDigit === "3") {
        return `${yearSliceA}rd`;
    } else {
        return `${yearSliceA}th`;
    }
}
console.log(whatCentury("1999"), whatCentury("2000"), whatCentury("2154"));

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████
function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}


WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████




*/
