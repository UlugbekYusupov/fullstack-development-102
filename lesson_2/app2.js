// CHALLENGE 1
let a = "42";
let b = "3.14";
let c = "hello";
let d = false;
let e = null;

let sum = Number(a) + Number(b) + Number(d) + Number(e);
console.log(sum);

// CHALLENGE 2
console.log(Number("200") + 50);
console.log(String(25) + " years old");
console.log(Boolean("false"));
console.log("10" - true);

// CHALLENGE 3
const celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(celsius);
console.log(fahrenheit);

// CHALLENGE 4
let budget = Number(prompt("Budget:"));
let ex1 = Number(prompt("Expense 1:"));
let ex2 = Number(prompt("Expense 2:"));
let ex3 = Number(prompt("Expense 3:"));

let res = budget - (ex1 + ex2 + ex3);

if (res < 0) {
    console.log("Warning: Overspent");
} else {
    console.log(res.toFixed(2));
}

// CHALLENGE 5
console.log(!!"false" == !!"true");
console.log(0 || "JavaScript");
console.log(" " && 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default Value");