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
let number_budget = Number(your_budget)
console.log(number_budget)

let expence1 = prompt("give me expence!")
let expence2 = prompt("give me expence!")
let expence3 = prompt("give me expence!")

let number_expence1 = Number(expence1)
let number_expence2 = Number(expence2)
let number_expence3 = Number(expence3)

let total_expence = number_expence1 + number_expence2 + number_expence3
console.log(total_expence)

let remaining_budget = number_budget - total_expence
console.log(remaining_budget)

if (remaining_budget > 0) {
    console.log("you can buy it")
} else {
    console.log("you can't buy it")
}

console.log(`your budget: ${number_budget}`)
console.log(`your expence: ${total_expence}`)
console.log(`your remaining budget: ${remaining_budget}`)
