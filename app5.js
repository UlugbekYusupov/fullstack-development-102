// function greet() {
//     console.log("hello");

// }
// greet();

// let greet1 = function () {
//     console.log("hello");
// }
// greet1();

// let greet2 = () => {
//     console.log("hello");
// }
// greet2();

// (function () {
//     console.log("hi");
// })();

// let greeting = new Function (
//     'console.log("he")'
// );
// greeting()

// function isprime() {
//     const number= Number(prompt("Enter a number: "))
//     if(number<=1) {
//         return false
//     }
//     else {
//         for(let i=2; i<number; i++){
//             if (number%i===0)
//             {
//                 return false
//             }
//         }
//         return true
//     }
// }
// console.log(isprime());

// function countDigits(n) {
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }
// console.log(countDigits(12345));

// function palindrome() {
// let reversed = 0;
// let number = Number(prompt("Enter a number"));
// let number1 = number
// while (number > 0) {
//     let digit = number % 10;
//     reversed = reversed * 10 + digit;
//     number = (number-digit)/10
// }
// if (number1===reversed){
//     return true
// }
// else {return false}
// }
// console.log(palindrome());

// function armstrong() {
//     let a = Number(prompt("Enter a number"));
//     let a1 = a%10
//     let b = (a / 10 | 0) % 10
//     let c = (a / 100) | 0
//     a1 **= 3
//     b **= 3
//     c **= 3
//     if (a1 + b + c != a) {
//         console.log("armstrong false");
//     } else {
//         console.log("armstrong true");
//     }
// }
// console.log(armstrong());


// function createCounter(a) {
//     let a = Number(prompt("Enter a number"));
//     let count = a;
//     return {
//         increment() {
//             count++;
//         },
//         decrement() {
//             count--;
//         },
//         getCount() {
//             return count;
//         }
//     };
// }
// const counter = createCounter(10);

// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.getCount());

// function order() {
//     const name=prompt("ENter your name: ")
//     const food=prompt("ENter your food: ")
//     const address=prompt("ENter your address: ")
//     console.log('Dear', name, "your food, ", food, "will be delivered to", address);
// }
// console.log(order());

// function calculateTotalPrice(pricePerItem, quantity) {

//     let total = pricePerItem * quantity;
//     let discount = 0;
//     if (quantity >= 5) {
//         discount = 0.20; 
//     } else if (quantity >= 3) {
//         discount = 0.10; 
//     }
//     let totalAfterDiscount = total * (1 - discount);
//     return totalAfterDiscount;
// }
// console.log(calculateTotalPrice(100, 2)); 
// console.log(calculateTotalPrice(100, 3)); 
// console.log(calculateTotalPrice(100, 5)); 

function atmWithdraw(amount) {
    if (amount % 10 !== 0) {
        return "Error: Amount must be multiple of 10";
    }
    const bills = [100, 50, 20, 10];
    const result = {};

    for (let bill of bills) {
        const count = Math.floor(amount / bill);
        if (count > 0) result[bill] = count;
        amount = amount % bill;
    }

    return result;
}
console.log(atmWithdraw(130));
console.log(atmWithdraw(70)); 
console.log(atmWithdraw(125));