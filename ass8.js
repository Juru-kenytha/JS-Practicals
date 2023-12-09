// A program that calculate the a certain given number exponent provided by the user.


function calculateExponent(base, exponent) {
    let result = 1;

    for (let k = 1; k <= exponent; k++) {
        result *= base;
    }

    return result;
}

let baseInput = prompt("Input a base: ");
let exponentInput = prompt("Input an exponent: ");


if (!isNaN(base) && !isNaN(exponent)) {

    let answer = calculateExponent(base, exponent);
    console.log(`${base} power ${exponent} is: ${answer}`);
} else {
    console.log("Input a number");
}