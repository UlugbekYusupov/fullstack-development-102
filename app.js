// 1
console.log("5" + 5);       // "55" string 
console.log("5" - 5);       // 0
console.log("5" * "2");     // 10
console.log("10" / 2);      // 5
console.log(5 + true);      // 6
console.log("10" - true);   // 9
console.log("5" + true);    // "5true"
console.log(5 + null);      // 5
console.log(5 + undefined); // NaN

// 2
const num1 = Number("200") + 50;  //alternative one
console.log(num1);       // Output: 250

const age = 25;
const num2 = age.toString() + " years old";
console.log(num2);      // Output: 25 years old

const stringFalse = "false";
const num3 = Boolean(stringFalse);
console.log(num3);      // Output: true

console.log("10" - true); // Output: 9 // Because "10" is turned to 10 and true is 1, so 10 - 1 = 9

// 3
const cel = Number(prompt("Enter temp in Celsius: "));

const fah = (cel * 9 / 5) + 32;

console.log(`Celsius: ${cel}°C`);
console.log(`Fahrenheit: ${fah}°F`);
// What happens if change the const value: JS shows error, because Const cant be reassigned

// 4
let totalBudget = Number(prompt("Enter your total budget: "));

const expense1 = Number(prompt("Enter expense 1: "));
const expense2 = Number(prompt("Enter expense 2: "));
const expense3 = Number(prompt("Enter expense 3: "));

const Expenses = expense1 + expense2 + expense3;
const remainingBudget = totalBudget - Expenses;

if (remainingBudget < 0){
    console.warn("Warning: You have overspent");
}
// Bonus:
console.log(`Remaining Budget: $${remainingBudget.toFixed(2)}`);