alert("Hello and welcome!");

var pies = ["apple", "pumpkin", "pecan", "banana cream", "chocolate mousse"];
var cakes = ["vanilla", "chocolate", "swirl", "strawberry"];

userInput1 = prompt("What would you like to order today?").toLowerCase();

if (userInput1 === "cake"){
    alert("Great! We have some made fresh this morning!");
} else if (userInput1 === "pies") {
    alert("Mmmm... we have some fresh out of the oven!")
} else if(userInput1 === "pastries" || userInput1 === "pastry") {
    alert("Yumm...they're nice and flaky!!!")
} else {
    alert("I'm sorry, we don't have that.")
}


function piesLeft() {

    userInput2 = prompt("Which pie would you like?");
    if(userInput2 === "apple") {
        for (var i=0; i > pies.length; i++) {
            alert("We have " + pies[i] + "left.");
        }
    }

}


piesLeft();