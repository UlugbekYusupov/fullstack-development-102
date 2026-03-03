console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log("5" + true);
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log("5" + true);
console.log("10" + true);
console.log("5" + null);
console.log("5" + undefined);

// challange 1

function celsiusToFahrenheit(c) {
    const n = Number(c);
    if (Number.isNaN(n)) return null;
    return n * 9 / 5 + 32;
}

// challange 2

function budgetAnalysis(budget, exp1, exp2, exp3) {
    const b = Number(budget) || 0;
    const e1 = Number(exp1) || 0;
    const e2 = Number(exp2) || 0;
    const e3 = Number(exp3) || 0;
    const total = e1 + e2 + e3;
    const remaining = b - total;
    return { budget: b, total, remaining, canBuy: remaining > 0 };
}

// challange 3

function countOddEven(n) {
    // Count odd/even digits in the given number.
    let num = Math.abs(Math.floor(Number(n) || 0));

    if (num === 0) return { odd: 0, even: 1 };

    let odd = 0;
    let even = 0;

    while (num > 0) {
        const digit = num % 10;
        if (digit % 2 === 0) even += 1;
        else odd += 1;
        num = Math.floor(num / 10);
    }

    return { odd, even };
}

// challange 4

function reverseNumber(n) {
    let v = Math.abs(Math.floor(Number(n) || 0));
    if (v === 0) return "0";
    let rev = '';
    while (v > 0) {
        rev += v % 10;
        v = Math.floor(v / 10);
    }
    return rev;
}



// challange 5


function largestDigit(n) {
    let v = Math.abs(Math.floor(Number(n) || 0));
    if (v === 0) return 0;
    let largest = 0;
    while (v > 0) {
        const d = v % 10;
        if (d > largest) {
            largest = d;
            if (largest === 9) break; // early exit
        }
        v = Math.floor(v / 10);
    }
    return largest;
}


window.celsiusToFahrenheit = celsiusToFahrenheit;
window.budgetAnalysis = budgetAnalysis;
window.countOddEven = countOddEven;
window.reverseNumber = reverseNumber;
window.largestDigit = largestDigit;

// Example: keep a non-blocking demo log (no prompts)
console.log('Challenge functions loaded: celsiusToFahrenheit, budgetAnalysis, countOddEven, reverseNumber, largestDigit');




// CONTROLL STATEMENTS




// challange 1
function compareTwoNumbers(num1, num2) {
    const a = Number(num1);
    const b = Number(num2);
    if (Number.isNaN(a) || Number.isNaN(b)) return "Invalid input";
    if (a > b) return `${a} is greater than ${b}`;
    if (a < b) return `${b} is greater than ${a}`;
    return `${a} and ${b} are equal`;
}

// challange 2
function firstNegativeNumber(numb1, numb2, numb3) {
    const nums = [Number(numb1), Number(numb2), Number(numb3)];
    if (nums.some(Number.isNaN)) return "Invalid input";
    for (const num of nums) {
        if (num < 0) return `number ${num} has - sign`;
    }
    return "No negative number";
}



// challange 3 

function sortThreeNumbersAsc(a, b, c) {
    const numbers = [Number(a), Number(b), Number(c)];
    if (numbers.some(Number.isNaN)) return null;
    numbers.sort((x, y) => x - y);
    return numbers;
}

    
    
// challange 4

function oddEvenFrom1To15() {
    const results = [];
    for (let i = 1; i <= 15; i++) {
        results.push(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
    }
    return results;
}


// challange 5

function fizzBuzzByDigits(limit = 100) {
    const max = Math.max(1, Math.floor(Number(limit) || 100));
    const results = [];
    for (let n = 1; n < max; n++) {
        const value = String(n);
        if (value.includes("3") && value.includes("5")) results.push("fizzbuzz");
        else if (value.includes("3")) results.push("fizz");
        else if (value.includes("5")) results.push("buzz");
        else results.push(String(n));
    }
    return results;
}



// challange 6

function armstrongNumbersInRange(start = 100, end = 999) {
    const from = Math.floor(Number(start));
    const to = Math.floor(Number(end));
    if (Number.isNaN(from) || Number.isNaN(to) || from > to) return [];

    const results = [];
    for (let num = from; num <= to; num++) {
        const strNum = String(Math.abs(num));
        const power = strNum.length;
        const sumOfPowers = strNum
            .split("")
            .map(Number)
            .reduce((sum, d) => sum + Math.pow(d, power), 0);

        if (sumOfPowers === Math.abs(num)) {
            results.push(num);
        }
    }
    return results;
}




// challange 7

function calculateStudentLetterGrades(studentGrades) {
    const defaultGrades = {
        david: 80,
        sarah: 77,
        john: 88,
        lisa: 95,
        michael: 68
    };
    const grades = studentGrades && typeof studentGrades === "object" ? studentGrades : defaultGrades;
    const results = [];

    for (const student in grades) {
        if (!Object.hasOwn(grades, student)) continue;
        const grade = Number(grades[student]);
        if (Number.isNaN(grade)) continue;

        let letterGrade = "";
        if (grade >= 90) letterGrade = "A";
        else if (grade >= 80) letterGrade = "B";
        else if (grade >= 70) letterGrade = "C";
        else if (grade >= 60) letterGrade = "D";
        else letterGrade = "F";

        results.push(`${student}: ${grade} (${letterGrade})`);
    }

    return results;
}

window.compareTwoNumbers = compareTwoNumbers;
window.firstNegativeNumber = firstNegativeNumber;
window.sortThreeNumbersAsc = sortThreeNumbersAsc;
window.oddEvenFrom1To15 = oddEvenFrom1To15;
window.fizzBuzzByDigits = fizzBuzzByDigits;
window.armstrongNumbersInRange = armstrongNumbersInRange;
window.calculateStudentLetterGrades = calculateStudentLetterGrades;



