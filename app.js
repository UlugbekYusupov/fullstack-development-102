console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log("5" + true);
console.log("10" + true);
console.log("5" + null);
console.log("5" + undefined);


// covert "200" to 200 and + 50
let num = "200";
console.log(Number(num) + 50);


// convert 25 to "25" + "years old"
let num2 = 25;
console.log(String(num2) + "years old");

let abc = "false";
console.log(Boolean(abc)); // true

console.log("10" - true); // because true is 1



// CHALLANGE 3

const C = 11;
const F = (C * 9 / 5) + 32;
console.log("F: ", F, "C:", C);
// const C = 12  ERROR RAISED

const c = prompt("celscius:")
console.log("F", c * 9 / 5 + 32)


// CHALLANGE 4
let budget = 3900000
let your_budget = prompt("your budget:")
