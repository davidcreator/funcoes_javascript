
function multiply(a = 2, b = 1) {
    return a * b;
}

console.log(multiply(undefined, 5));


function multiply1(a, b = a) {
    return a * b;
}

console.log(multiply1(5));

// Lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiply2(a, b = randomNumber()) {
    return a * b;    
}
console.log(multiply2(5));

function sum(a, b = randomNumber()) {
    return a + b;    
}
console.log(sum(5));

function subtraction(a, b = randomNumber()) {
    return a - b;
}
console.log(subtraction(5));

function division(a, b = randomNumber()) {
    return a / b;
}
console.log(division(5));