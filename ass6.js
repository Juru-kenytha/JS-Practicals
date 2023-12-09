// A program that uses for loop to calculate the average of nth number of students.


let user = [];
let sum = 0;
let average = 0;

for (let k = 0; k < 6; k++){
    let age = prompt("Insert Your Age");
    let userAge = Number(age);
    user.push(userAge);
    sum += user [k];
    average = sum/ user.length;
}
alert("the average :" + average);







