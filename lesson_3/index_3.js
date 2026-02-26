// Challenge 1 – Count Even and Odd

let n = 10;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even:", evenCount);
console.log("Odd:", oddCount);


// Challenge 2 – Reverse a Number

let number1 = 1234;
let reversed = 0;

while (number1 > 0) {
    let remainder = number1 % 10;
    reversed = reversed * 10 + remainder;
    number1 = Math.floor(number1 / 10);
}

console.log("Reversed:", reversed);


// Challenge 3 – Largest Digit

let number2 = 48291;
let largestDigit = 0;

while (number2 > 0) {
    let digit = number2 % 10;

    if (digit > largestDigit) {
        largestDigit = digit;
    }

    number2 = Math.floor(number2 / 10);
}

console.log("Largest digit:", largestDigit);


// Challenge 4 – Sum of Digits

let number3 = 567;
let sum = 0;

while (number3 > 0) {
    sum += number3 % 10;
    number3 = Math.floor(number3 / 10);
}

console.log("Sum:", sum);


// Challenge 5 – Count Digits
let number4 = 98765;
let counter = 0;

while (number4 > 0) {
    number4 = Math.floor(number4 / 10);
    counter++;
}

console.log("Digit count:", counter);