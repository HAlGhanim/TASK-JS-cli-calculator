const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

const fNumber = prompt("Please enter the first number: ")
const sNumber = prompt("Please enter the second number: ")
const op = prompt("Please choose the operation (+, -, /, *): ")


if (isNaN(fNumber) || isNaN(sNumber)){
    console.log("the numbers were invalid");  
}
else {
    if (op === "+") {
        console.log(`${fNumber} ${op} ${sNumber} = ${fNumber + sNumber}`);
    }
    else if (op === "-") {
        console.log(`${fNumber} ${op} ${sNumber} = ${fNumber - sNumber}`);
    }
    else if (op === "/") {
        console.log(`${fNumber} ${op} ${sNumber} = ${fNumber / sNumber}`);
    }
    else if (op === "*") {
        console.log(`${fNumber} ${op} ${sNumber} = ${fNumber * sNumber}`);
    }
    else {
        console.log("operation is not valid");
    }
}