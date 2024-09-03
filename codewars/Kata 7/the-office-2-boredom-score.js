/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function boredom(staff) {
    const boredomScores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };

    let cumulative = 0;

    for (let person in staff) {
        let department = staff[person];
        cumulative += boredomScores[department];
    }

    // Return the appropriate sentiment based on the cumulative score
    return cumulative <= 80
        ? "kill me now"
        : cumulative < 100
        ? "i can handle this"
        : "party time!!";
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function boredom(staff){
   var map = {
     accounts:1,
     finance:2,
     canteen:10,
     regulation:3,
     trading: 6,
     change:6,
     IS:8,
     retail:5,
     cleaning:4,
     'pissing about':25
   };
   
   var score = Object.keys(staff).reduce(
     function(a,b){       
       return a+map[staff[b]]
    },0); 
   
   return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

initially read the problem wrong and solved for something else. One i realized my mistake I fixed it. Got some good practice looping through objects



*/
