/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function bmi(weight, height) {
    let bodyMass = weight / Math.pow(height, 2);

    return bodyMass <= 18.5
        ? "Underweight"
        : bodyMass <= 25
        ? "Normal"
        : bodyMass <= 30
        ? "Overweight"
        : "Obese";
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
  
}



WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I practiced using a long ternary.


*/
