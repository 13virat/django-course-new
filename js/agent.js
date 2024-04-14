var first = prompt("Enter first name");
var last = prompt("Enter last name");

if (first[0] === last[0]) {
    var age = prompt("Enter age");

    if (age > 20 && age < 30) {
        var height = prompt('Enter height');

        if (height > 170) {
            var pet = prompt("Enter pet name ");

            if (pet[pet.length - 1] === "y") {
                console.log("Agent hai Aap");
            } else {
                console.log("Not an agent: Pet name does not end with 'y'");
            }
        } else {
            console.log("Not an agent: Height is not greater than 170");
        }
    } else {
        console.log("Not an agent: Age is not between 20 and 30");
    }
} else {
    console.log("Not an agent: First letter of first name does not match first letter of last name");
}

