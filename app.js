console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1

let myNumber = 17;
let userInput = window.prompt("Enter a number:");

if (userInput < myNumber) {
    console.log("too low");
} else if (userInput > myNumber) {
    console.log("too high");
} else {
    console.log("Congratulations!!!");
}

// Exercise 2

let numberOfDrinks = Number(window.prompt("How many drinks are too many drinks before driving?"));
switch (numberOfDrinks) {
    case 1:
        console.log("Yes, even 1 drink is too many!");
        break;
    case 2:
        console.log("True, but any drinks are too many!");
    case 3:
        console.log("You are correct, but please do not even have 1 drink if you are driving!");
        break;
    case 4:
        console.log("4 is way too many drinks and you should have answered with a lower number!");
        break;
    case 5:
        console.log("5 is absolutely out of the question and you should never have even close to this many drinks before driving!");
        break;
    default:
        console.log("The only completely true answer to this question is 0! Never drink and drive!");
}




