const n = 10;

let juft = 0;
let toq = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    juft++;
  } else {
    toq++;
  }
}

console.log("juft sonlar: ", juft);
console.log("toq sonlar: ", toq);

let k = 1234;
let reversed = 0;

while (n > 0) {
  let last = k % 10;
  reversed = reversed * 10 + last;
  k = Math.floor(k / 10);
}

console.log(reversed);

let num = Number(prompt("Enter a number:"));
let largest = 0;

while (num > 0) {
  let digit = num % 10;

  if (digit > largest) {
    largest = digit;
  }

  num = Math.floor(num / 10);
}

console.log("Largest digit is:", largest);

let number = Number(prompt("Enter a number:"));
let sum = 0;

while (number > 0) {
  let digit = num % 10;
  sum = sum + digit;
  number = Math.floor(number / 10);
}

console.log("Sum of digits is:", sum);

let num1 = Number(prompt("Enter a number:"));
let count = 0;

while (num1 > 0) {
  num1 = Math.floor(num / 10);
  count = count + 1;
}

console.log("Number of digits:", count);
