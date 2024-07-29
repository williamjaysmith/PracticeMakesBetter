/*
DESCRIPTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	                return
name equals owner	    'Hello boss'
otherwise	            'Hello guest'

MY SOLUTION ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████*/

function greet(name, owner) {
    return name === owner ? "Hello boss" : "Hello guest";
}

/*
BEST PRACTICE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

WHAT DID I LEARN? ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
██████████████████████████████████████████████████████████

I learned how to use a conditional statement to return different greetings based on whether the provided name matches the owner’s name. If the names match, it returns "Hello boss"; otherwise, it returns "Hello guest".


*/
