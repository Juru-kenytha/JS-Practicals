//A program that printout to the screen all the prime numbers present in the range of 0 - 200.

function Prime(number){
    if (number <= 1) {
        return false;
    }
    for (let k = 2; k <= Math.sqrt(number); k++) {
        if (number % k === 0) {
           return false;
        }
    }
    return true;
}
function PrimeFrom(start, end) {
    for (let k = start; k <= end; k++) {
        if (Prime(k)) {
            console.log(k)
        }
    }
}
PrimeFrom(0, 200);

