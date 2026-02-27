// var a = undefined;

// console.log(a);
// let a = 20;

// greet();

// function greet() {
//   console.log("hello");
// }

// console.log(Array())

// Array.prototype.greet = function () {
//   console.log("Arrayy prototypedan keyapdi");
// };

// Array().greet();


function challenge2(n) {
  let reversed = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  console.log("\nChallenge 2:");
  console.log("Reversed number:", reversed);
}

challenge2(1234);


function challenge3(n) {
  let largest = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    if (lastDigit > largest) {
      largest = lastDigit;
    }
    n = Math.floor(n / 10);
  }

  console.log("\nChallenge 3:");
  console.log("Largest digit:", largest);
}

challenge3(3947);


function challenge4(n) {
  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    sum = sum + lastDigit;
    n = Math.floor(n / 10);
  }

  console.log("\nChallenge 4:");
  console.log("Sum of digits:", sum);
}

challenge4(1234);


function challenge5(n) {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  console.log("\nChallenge 5:");
  console.log("Number of digits:", count);
}

challenge5(98765);


//homework 
// controle statements 
// TASK 1 — Largest of two numbers

let a = 10;
let b = 25;

if (a > b) {
    console.log("Task 1: Largest number is " + a);
} else {
    console.log("Task 1: Largest number is " + b);
}

// TASK 2 — Find the sign of 3 numbers
let x = 3;
let y = -7;
let z = 2;

if (x * y * z > 0) {
    console.log("Task 2: The sign is +");
} else {
    console.log("Task 2: The sign is -");
}

// TASK 3 — Sort three numbers
let n1 = 0;
let n2 = -1;
let n3 = 4;

if (n1 >= n2 && n1 >= n3) {
    if (n2 >= n3) console.log("Task 3:", n1, n2, n3);
    else console.log("Task 3:", n1, n3, n2);
}
else if (n2 >= n1 && n2 >= n3) {
    if (n1 >= n3) console.log("Task 3:", n2, n1, n3);
    else console.log("Task 3:", n2, n3, n1);
}
else {
    if (n1 >= n2) console.log("Task 3:", n3, n1, n2);
    else console.log("Task 3:", n3, n2, n1);
}

// TASK 4 — Odd or Even (0–15)
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("Task 4:", i + " is even");
    } else {
        console.log("Task 4:", i + " is odd");
    }
}

// TASK 5 — FizzBuzz (1–100)
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Task 5: FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Task 5: Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Task 5: Buzz");
    }
    else {
        console.log("Task 5:", i);
    }
}
// TASK 6 — Armstrong Numbers
for (let num = 100; num <= 999; num++) {

    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }

    if (sum === num) {
        console.log("Task 6: Armstrong number =", num);
    }
}
// TASK 7 — Average Marks & Grade
let marks = [80, 77, 88, 95, 68];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let grade;

if (average < 60) grade = "F";
else if (average < 70) grade = "D";
else if (average < 80) grade = "C";
else if (average < 90) grade = "B";
else grade = "A";

console.log("Task 7: Average =", average);
console.log("Task 7: Grade =", grade);