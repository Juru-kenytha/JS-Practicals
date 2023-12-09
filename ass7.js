// A program that calculate a given number's factorial using loops.

function Factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative values.";
    }
   else {
        let factorial = 1;
        for (let k = 1; k <= number; k++) {
            factorial *= k;
        }
        return factorial;
    }
}
let user = prompt("Input a number to calculate its factorial");
var number = (user);
if (!isNaN(number) && number >= 0) {
    let result = Factorial(number);
    console.log(`Factorial of ${number} is: ${result}`);
}else {
    console.log("Input positive numbers");
}