// 1-Mashq:
let num1 = 25;
let num2 = 18;

if (num1 > num2) {
    console.log("1-Mashq: Kattasi - " + num1);
} else if (num2 > num1) {
    console.log("1-Mashq: Kattasi - " + num2);
} else {
    console.log("1-Mashq: Sonlar teng");
}

// 2-Mashq:
let x = 3, y = -7, z = 2;

if (x * y * z < 0) {
    console.log("2-Mashq: The sign is -");
} else {
    console.log("2-Mashq: The sign is +");
}

// 3-Mashqh
let a = 0, b = -1, c = 4;

if (a > b && a > c) {
    if (b > c) console.log(`3-Mashq: ${a}, ${b}, ${c}`);
    else console.log(`3-Mashq: ${a}, ${c}, ${b}`);
} else if (b > a && b > c) {
    if (a > c) console.log(`3-Mashq: ${b}, ${a}, ${c}`);
    else console.log(`3-Mashq: ${b}, ${c}, ${a}`);
} else {
    if (a > b) console.log(`3-Mashq: ${c}, ${a}, ${b}`);
    else console.log(`3-Mashq: ${c}, ${b}, ${a}`);
}

// 4-Mashq
console.log("4-Mashq natijasi:");
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// 5-Mashq: FizzBuzz (1 dan 100 gacha)
console.log("5-Mashq (FizzBuzz):");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 6-Mashq:
console.log("6-Mashq (Armstrong sonlari):");
for (let i = 100; i <= 999; i++) {
    let digit1 = Math.floor(i / 100);
    let digit2 = Math.floor((i % 100) / 10);
    let digit3 = i % 10;
    
    if (Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3) === i) {
        console.log(i);
    }
}

// 7-Mashq: 

const marks = [80, 77, 88, 95, 68]; 
let sum = 0;

for (let mark of marks) {
    sum += mark;
}

let avg = sum / marks.length;
console.log("7-Mashq: O'rtacha ball - " + avg);

let grade = "";
if (avg < 60) grade = "F";
else if (avg < 70) grade = "D";
else if (avg < 80) grade = "C";
else if (avg < 90) grade = "B";
else if (avg < 100) grade = "A";

console.log("Talabalarning umumiy bahosi (Grade): " + grade);