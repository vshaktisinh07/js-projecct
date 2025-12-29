// 1. Addition
function add() {
    const a: number = 10;
    const b: number = 5;
    console.log(a + b);
}

// 2. Subtraction
function subtract() {
    const a: number = 10;
    const b: number = 5;
    console.log(a - b);
}

// 3. Multiplication
function multiply() {
    const a: number = 10;
    const b: number = 5;
    console.log(a * b);
}

// 4. Division
function divide() {
    const a: number = 10;
    const b: number = 2;
    console.log(a / b);
}

// 5. Square
function square() {
    const n: number = 4;
    console.log(n * n);
}

// 6. Cube
function cube() {
    const n: number = 3;
    console.log(n * n * n);
}

// 7. Even or Odd
function evenOdd() {
    const n: number = 7;
    if (n % 2 === 0)
        console.log("Even");
    else
        console.log("Odd");
}

// 8. Maximum of two numbers
function max() {
    const a: number = 10;
    const b: number = 20;
    if (a > b)
        console.log(a);
    else
        console.log(b);
}

// 9. Minimum of two numbers
function min() {
    const a: number = 10;
    const b: number = 20;
    if (a < b)
        console.log(a);
    else
        console.log(b);
}

// 10. Simple Interest
function simpleInterest() {
    const p: number = 1000;
    const r: number = 5;
    const t: number = 2;
    const si: number = (p * r * t) / 100;
    console.log(si);
}

// 11. Total Marks
function totalMarks() {
    const m1: number = 70;
    const m2: number = 80;
    const m3: number = 75;
    console.log(m1 + m2 + m3);
}

// 12. Percentage
function percentage() {
    const total: number = 225;
    const per: number = (total / 300) * 100;
    console.log(per);
}

// 13. Grade
function grade() {
    const per: number = 75;
    let result: string;

    if (per >= 80)
        result = "Grade A";
    else if (per >= 60)
        result = "Grade B";
    else if (per >= 40)
        result = "Grade C";
    else
        result = "Fail";

    console.log(result);
}

// 14. Electricity Bill
function bill() {
    const units: number = 150;
    let amount: number;

    if (units <= 100)
        amount = units * 2;
    else if (units <= 200)
        amount = units * 3;
    else
        amount = units * 5;

    console.log(amount);
}

// 15. Gross Salary
function grossSalary() {
    const basic: number = 10000;
    const hra: number = 2000;
    const da: number = 1500;
    const gross: number = basic + hra + da;
    console.log(gross);
}

// 16. Net Salary
function netSalary() {
    const gross: number = 13500;
    const tax: number = 1500;
    const net: number = gross - tax;
    console.log(net);
}

// 17. Positive or Negative
function checkNumber() {
    const n: number = -5;
    let result: string;

    if (n > 0)
        result = "Positive";
    else if (n < 0)
        result = "Negative";
    else
        result = "Zero";

    console.log(result);
}

// 18. Factorial
function factorial() {
    const n: number = 5;
    let fact: number = 1;

    for (let i: number = 1; i <= n; i++) {
        fact = fact * i;
    }
    console.log(fact);
}

// 19. Swap Numbers
function swap() {
    let a: number = 10;
    let b: number = 20;
    const temp: number = a;

    a = b;
    b = temp;

    console.log(a, b);
}

// 20. Celsius to Fahrenheit
function temperature() {
    const c: number = 30;
    const f: number = (c * 9 / 5) + 32;
    console.log(f);
}


add();
subtract();
multiply();
divide();
square();
cube();
evenOdd();
max();
min();
simpleInterest();
totalMarks();
percentage();
grade();
bill();
grossSalary();
netSalary();
checkNumber();
factorial();
swap();
temperature();