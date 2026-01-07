//Print number from 1 to 10 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Check even or odd
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}

//Multiplication of 5 
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

//Reverse a number
let num = 1234;
let reverse = 0;

while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
}

console.log("Reverse =", reverse);


//Factorial of a number
let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log("Factorial =", fact);
