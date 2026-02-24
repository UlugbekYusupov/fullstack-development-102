console.log("5"+5);
console.log("5"-5);
console.log("5"*"2");
console.log("10"/2);
console.log(5 +true);
console.log("10" - true);
console.log(5+null);
console.log(5+undefined);

// //chelenges

console.log("200"+50);
console.log(25+"years old");
console.log(typeof("false"));
console.log("10"-true);

//chelenge 3

const temperature = 35;
const F = (temperature*9/5)+32
console.log(temperature);
console.log(F);

//chelenge 4

let totalBudget = Number(prompt("Enter your total budget:"));

let expense1 = Number(prompt("Enter first expense:"));
let expense2 = Number(prompt("Enter second expense:"));
let expense3 = Number(prompt("Enter third expense:"));

let result = expense1 + expense2 + expense3;
let remaining = totalBudget - result;

if (remaining <0){
    console.log("Warning!");
}
else {
    console.log(remaining);
}

// chelenge 5
console.log(!!"false" == !! "true");
console.log(0 || "JavaScript");
console.log(" " && 100);
console.log(null ??  "Fallback");
console.log(undefined ?? "Default Value");

//chelenge 6
let a = '42'
let b = '3.14'
let c = 'hello'
let d = false
let e = null

let sum = Number(a) + Number(b) + Number(d) + Number(e);

console.log(sum);
