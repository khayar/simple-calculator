#! /usr/bin/env node
import inquire from "inquirer";
// let questions = await inquire.prompt([
//   { message: "Enter first number", type: "number", name: "firstNumber" },
//   { message: "Enter second number", type: "number", name: "secondNumber" },
//   {
//     message: "Select operation to be performed",
//     type: "list",
//     name: "operator",
//     choices: ["+", "-", "*", "/"],
//   },
// ]);
inquire
    .prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select operation to be performed",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
])
    .then((questions) => {
    switch (questions.operator) {
        case "+":
            console.log(questions.firstNumber + questions.secondNumber);
            break;
        case "-":
            console.log(questions.firstNumber - questions.secondNumber);
            break;
        case "*":
            console.log(questions.firstNumber * questions.secondNumber);
            break;
        case "/":
            if (questions.secondNumber === 0)
                console.log("Divide by zero is not allowed.");
            else
                console.log(questions.firstNumber / questions.secondNumber);
            break;
        case "%":
            console.log(questions.firstNumber % questions.secondNumber);
            break;
        default:
            console.log("Enter a valid number");
    }
});
