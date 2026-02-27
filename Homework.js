// // 1
// console.log("5" + 5);       // "55" string 
// console.log("5" - 5);       // 0
// console.log("5" * "2");     // 10
// console.log("10" / 2);      // 5
// console.log(5 + true);      // 6
// console.log("10" - true);   // 9
// console.log("5" + true);    // "5true"
// console.log(5 + null);      // 5
// console.log(5 + undefined); // NaN

// // 2
// const num1 = Number("200") + 50;  //alternative one
// console.log(num1);       // Output: 250

// const age = 25;
// const num2 = age.toString() + " years old";
// console.log(num2);      // Output: 25 years old

// const stringFalse = "false";
// const num3 = Boolean(stringFalse);
// console.log(num3);      // Output: true

// console.log("10" - true); // Output: 9 // Because "10" is turned to 10 and true is 1, so 10 - 1 = 9

// // 3
// const cel = Number(prompt("Enter temp in Celsius: "));

// const fah = (cel * 9 / 5) + 32;

// console.log(`Celsius: ${cel}°C`);
// console.log(`Fahrenheit: ${fah}°F`);
// // What happens if change the const value: JS shows error, because Const cant be reassigned

// // 4
// let totalBudget = Number(prompt("Enter your total budget: "));

// const expense1 = Number(prompt("Enter expense 1: "));
// const expense2 = Number(prompt("Enter expense 2: "));
// const expense3 = Number(prompt("Enter expense 3: "));

// const Expenses = expense1 + expense2 + expense3;
// const remainingBudget = totalBudget - Expenses;

// if (remainingBudget < 0){
//     console.warn("Warning: You have overspent");
// }
// // Bonus:
// console.log(`Remaining Budget: $${remainingBudget.toFixed(2)}`);



//24.02.2026. Hw: Challenges 1-5
//1
// let n=prompt("Enter number:");
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }
// console.log("Even numbers count: " + even);
// console.log("Odd numbers count: " + odd);

// //2
// let num=prompt("Enter a number:");
// let result = 0;

// while (num > 0) {
//     let lastDigit = num % 10;
//     result = result * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log("Result: " + result);

// //3
// let number =prompt("Enter a number:");
// let largest = 0;

// while (number > 0){
//     let son = number % 10;
//     if (son>largest) { largest = son; }
//     number = Math.floor(number / 10);
// }
// console.log("Largest digit: " + largest);

// //4
// let nums= prompt("Enter a number:");
// let sum = 0;

// while (nums > 0){
//     let lastDigit= nums%10;
//     sum = sum+lastDigit;
//     nums= Math.floor(nums/10);
// }
// console.log("Sum of digits: " + sum);

// //5
// let numbers= prompt("Enter a number:");
// let count = 0;

// if (numbers===0){
//     count = 1;
// } else {
//     while (numbers > 0){
//         numbers = Math.floor(numbers / 10);
//         count++;
//     }
// }
// console.log("Total digits: " + count);


// 27.02.2026. Hw: Challenges 1-7
//1
let num1 = 10;
let num2 = 14;

if (num1>num2) { console.log("The largest number is: " + num1); }
else if (num2>num1) { console.log("The largest number is: " + num2); }
else { console.log("Both numbers are equal."); }

//2
let a= 3;
let b=-7;
let c= 2;
let product= a*b*c;

if (product>0) { alert("The sign is +"); }
else if (product<0) { alert("The sign is -"); } 
else { alert("The sign is 0"); }

//3
let x = 0;
let y = -1;
let z = 4;
let max, mid, min;

if (x>=y && x>=z) {
    max = x;
    if (y >= z) {
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    }
} else if (y>=x && y>=z) {
    max = y;
    if (x >= z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else {
    max = z;
    if (x >= y) {
        mid = x;
        min = y;
    } else {
        mid = y;
        min = x;
    }
}
alert(max+ ", " +mid+ ", " +min);

//4
for (let i= 0; i<=15; i++) {
    if (i %2 ===0) { console.log(i + " is even"); }
    else           { console.log(i + " is odd");  }
}

//5
for (let i= 1; i<=100; i++) {
    if (i %3 ===0 && i% 5 ===0) { console.log("FizzBuzz"); }
    else if (i %3 ===0)  { console.log("Fizz"); }
    else if (i %5 ===0)  { console.log("Buzz"); }
    else{ console.log(i);}
}

//6
for (let i= 100; i<= 999; i++) {
    let num= i;
    let sum= 0;

    while (num>0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }
    if (sum===i){ console.log(i); }
}