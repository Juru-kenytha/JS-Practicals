// A program that calculate an area of a given circle and a rectangle.

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateRectangleArea(length, width) {
    return length * width;
}

let shapeChoice = prompt("Choose a 'circle' or 'rectangle' to calculate its area:");

// Convert shape choice to lowercase for case-insensitivity
shapeChoice = shapeChoice.toLowerCase();

if (shapeChoice === "circle") {


    // Calculate area of a circle
    let radius = parseFloat(prompt(" radius of the circle:"));
    
    if (!isNaN(radius) && radius >= 0) {
        let circleArea = calculateCircleArea(radius);
        console.log(`The area of the circle is: ${circleArea.toFixed(2)}`);
    } else {
        console.log("Invalid input for radius. Please enter a valid non-negative number.");
    }
} else if (shapeChoice === "rectangle") {


    // Calculate area of a rectangle
     let length = parseFloat(prompt("Enter the length of the rectangle:"));
     let width = parseFloat(prompt("Enter the width of the rectangle:"));

    if (!isNaN(length) && !isNaN(width) && length >= 0 && width >= 0) {
        let rectangleArea = calculateRectangleArea(length, width);
        console.log(`The area of the rectangle is: ${rectangleArea.toFixed(2)}`);
    } else {
        console.log("Enter positive numbers.");
    }
} else {
    console.log("Invalid shape choice. Please enter 'circle' or 'rectangle'.");
}