// // PART 4 ARRAY EXERCISE
// // This is  a .js file with commented hints, its optional to use this.

// // Create Empty Student Roster Array
// // This has been done for you!
// var roster = [];

// // Create the functions for the tasks
// var start = prompt("To start the functioning hit y else n"); 
// if(start.toLowerCase==="y"){var input = prompt(" what would you like to Add Subtact Display Quit");

// // ADD A NEW STUDENT
// if (input.toLowerCase === "add") {
//   add = prompt("enter the name");
//   roster.push(add);
// }
// // Create a function called addNew that takes in a name
// // and uses .push to add a new student to the array

// // REMOVE STUDENT
// if (input.toLowerCase === "delete") {
//   deleted = prompt("enter the name");
//   const index = array.indexOf(deleted);
//   if (index > -1) {
//     // only splice array when item is found
//     array.splice(index, 1); // 2nd parameter means remove one item only
//   }
// }

// // Create a function called remove that takes in a name
// // Finds its index location, then removes that name from the roster

// // HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// //

// // DISPLAY ROSTER
// if (input.toLowerCase === "display") {
//     roster.forEach((displays)=>console.log(displays))
// }

// // Create a function called display that prints out the orster to the console.
// if (input.toLowerCase === "quit") {
//     thanks=prompt("thanks")
// }else{
//     thanks=prompt("thanks")
//             }}

// // Start by asking if they want to use the web app

// // Now create a while loop that keeps asking for an action (add,remove, display or quit)
// // Use if and else if statements to execute the correct function for each command.
// Create Empty Student Roster Array
var roster = [];

// Function to add a new student
function addNew(name) {
    roster.push(name);
}

// Function to remove a student
function remove(name) {
    var index = roster.indexOf(name);
    if (index !== -1) {
        roster.splice(index, 1);
        console.log(name + " has been removed from the roster.");
    } else {
        console.log(name + " is not found in the roster.");
    }
}

// Function to display roster
function display() {
    console.log("Student Roster:");
    roster.forEach(function(student, index) {
        console.log((index + 1) + ". " + student);
    });
}

// Start by asking if they want to use the web app
var start = prompt("To start the functioning hit y else n");
if (start.toLowerCase() === "y") {
    while (true) {
        var input = prompt("What would you like to do? (Add, Remove, Display, Quit)");

        if (input.toLowerCase() === "add") {
            var newName = prompt("Enter the name of the new student:");
            addNew(newName);
        } else if (input.toLowerCase() === "remove") {
            var removeName = prompt("Enter the name of the student to remove:");
            remove(removeName);
        } else if (input.toLowerCase() === "display") {
            display();
        } else if (input.toLowerCase() === "quit") {
            break;
        } else {
            console.log("Invalid input. Please try again.");
        }
    }
    console.log("Thank you for using the web app!");
}
