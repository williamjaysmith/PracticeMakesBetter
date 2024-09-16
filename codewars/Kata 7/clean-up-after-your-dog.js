/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████



MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function crap(x, bags, cap) {
    let fullCap = bags * cap;
    let poop = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i].includes("D")) {
            return "Dog!!";
        }

        for (let j = 0; j < x[i].length; j++) {
            if (x[i][j] === "@") {
                poop += 1;
            }
        }
    }

    return fullCap >= poop ? "Clean" : "Cr@p";
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

learned to access nested arrays with multiple brackets



*/
