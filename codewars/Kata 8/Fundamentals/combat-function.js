/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.


MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function combat(health, damage) {
    const newHealth = health - damage;
    if (newHealth < 0) {
        return 0;
    } else {
        return newHealth;
    }
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

didnt realize they were looking for 0 if under 0...so this took a while. I learned how to use conditional statements to check if the new health is less than 0 and return 0 in that case.

*/
