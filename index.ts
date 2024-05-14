#! /usr/bin/env node
// shabang

import inquirer from "inquirer"

let answer = await inquirer.prompt([{
    message: "Enter First Number" , type: "number" ,
    name: "firstNumber" 
},
{
    message: "Enter Second Number", type: "number", name: "secondNumber"        
    },
    {message: "Selection of the operator to perform an action", type: "list",
    name: "operator", choices: ["Addition", "Subtraction", "Multiplication","Division"],
    }
]) 
console.log(answer);

if (answer.operator === "Addition")
    {console.log(answer.firstNumber + answer.secondNumber);}
else if (answer.operator === "Subtraction")
    {console.log(answer.firstNumber - answer.secondNumber);}
else if (answer.operator === "Multiplication")
    {console.log(answer.firstNumber * answer.secondNumber);}
else if (answer.operator === "Division")
    {console.log(answer.firstNumber / answer.secondNumber);}
else {console.log("Please Select A Valid Operator") };



