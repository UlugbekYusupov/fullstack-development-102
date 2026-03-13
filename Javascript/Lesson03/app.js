 // task 1
console.log("Largest Number =");
let num1 = 10, num2 = 25;
if (num1 > num2) {
    console.log(`${num1} is the largest number`);
} 
else if (num2 > num1) {
    console.log(`${num2} is the largest number`);
} 
else {
    console.log("Both numbers are equal");
}

// task 2
console.log("\nSigned Number =");
let a = 3, b = -7, c = 2;
let negativeCount = 0;
if (a < 0) negativeCount++;
if (b < 0) negativeCount++;
if (c < 0) negativeCount++;

if (a === 0 || b === 0 || c === 0) {
    alert("The sign is neither + nor - (product is zero)");
} 
else if (negativeCount % 2 === 1) {
    alert("The sign is –");
} 
else {
    alert("The sign is +");
}

// task 3
console.log("\nSorted Numbers =");
let x = 0, y = -1, z = 4;
let numbers = [x, y, z];
numbers.sort((a, b) => b - a);
alert(`Sorted numbers: ${numbers.join(', ')}`);

// task 4
console.log("\nOdd/Even Numbers =");
for (let i = 0; i <= 15; i++) {
    console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`);
}

// task 5 
for (let i = 1; i <= 100; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
} 
else if (i % 3 === 0) {
    console.log("Fizz");
} 
else if (i % 5 === 0) {
    console.log("Buzz");
} 
else {
    console.log(i);
} }

//task 6 
console.log("3 xonali Armstrong sonlari:");
for (let num = 100; num <= 999; num++) {
let yuzlik = Math.floor(num / 100);
let onlik = Math.floor((num % 100) / 10);
let birlik = num % 10;
let sum = (yuzlik ** 3) + (onlik ** 3) + (birlik ** 3);
if (sum === num) {
    console.log(num + " Armstrong soni");
} }

// task 7
const marks = [80, 77, 88, 95, 68];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

let average = sum / marks.length;
console.log("O'rtacha baho: " + average);

let grade;
if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else {
    grade = "A";
}

console.log("Olingan baho: " + grade);