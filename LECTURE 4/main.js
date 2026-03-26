
// Challenge 2
// let num1 = '200'
// let integer = parseInt(num) + 50

// let age = 20
// let strAge = toString(age)
// let word = `${strAge} years old`

// let bool = 'false'
// let check = Boolean(bool)

// console.log('10' - true)

// Challenge 3
// const temp = 30
// const farenheit = (temp * 9/5) + 32
// console.log(temp, farenheit);

// Challenge 4
// let totalBudget = 100

// let exp1 = Number(prompt('expense1: '))
// let exp2 = Number(prompt('expense2: '))
// let exp3 = Number(prompt('expense3: '))

// totalBudget -= exp1
// totalBudget -= exp2
// totalBudget -= exp3

// if (totalBudgetm < 0) {
//     alert('U have overspent');
// } else {
//     console.log(`Your balance: $${parseFloat(totalBudget) }`);
// }

// console.log(parseFloat(totalBudget));


// Challenge 5 
// console.log(!!"false" == !!"true");
// console.log(0 || "JavaScript");
// console.log(" "&& 100);
// console.log(null ?? "Fallback");
// console.log(undefined ?? "Default Value");

// // // // Challenge 6

// let a = "42";
// let b = "3.14";
// let c = "hello";
// let d = false;
// let e = null;

// let sum1 = Number(a + b + c.length + Number(d + e));

// console.log(sum);

// Challenge – 1
// The program should count how many even and odd numbers exist between 1 and a given number.
// Print the count of even and odd numbers separately.
// Use the modulus (%) operator to check if a number is even or odd.

// let num = 391
// let evenNum = 0
// let oddNum = 0


// while (num > 0) {
//     if (num % 2 == 0) {
//         ++evenNum
//     } else {
//         ++oddNum
//     }
//     num -= 1
// }

// console.log('even numbers:',evenNum, 'odd numbers:',oddNum);


// Challenge – 2
// Take a number as input and reverse it using only operators, loops, and if conditions.
// Example: 1234 → 4321
// Use the modulus (%) operator to extract the last digit.
// Use division (/) to remove the last digit.

// let number1 = 1234
// let reversed = 0

// while (number > 0){
//     let lastDigit = number % 10
//     reversed = reversed * 10 + lastDigit
//     number = Math.floor(number / 10)
// }

// console.log(reversed);



// Challenge – 3
// Take a number as input and find the largest digit using only operators, loops, and if conditions.
// Extract digits using the modulus (%) operator.
// Compare each digit with the current largest digit using if conditions.
// Remove the last digit using division (/) inside a loop.

// let usrNum = 1234967
// let maxDigit = 0

// while (usrNum > 0) {
//     let expression = usrNum % 10
//     maxDigit = expression % 10 > maxDigit ? expression : maxDigit
//     usrNum = Math.floor(usrNum / 10)
// }


// console.log(maxDigit);

// Challenge – 4
// Take a number as input and find the sum of its digits using only operators, loops, and if conditions.
// Use the modulus (%) operator to extract the last digit.
// Use addition (+) to sum up the digits.
// Remove the last digit using division (/) inside a loop.

// let number = 275
// let sum = 0

// while (number > 0) {
//     let lastDigit2 = number % 10
//     sum += lastDigit2
//     number = Math.floor(number / 10)
// }

// console.log(sum);

// Challenge – 5
// Take a number as input and count how many digits it has using only operators, loops, and if conditions.
// Use division (/) inside a loop to remove digits one by one.
// Use a counter variable to keep track of the number of digits

// let digit = 253267
// let index = 0

// while (digit > 0) {
//     index += 1
//     digit = Math.floor(digit / 10)
// }

// console.log(index);


// Lesson 5 Functions
// challenge 1

// function sayHello (name) {
//     return `hello ${name}`;
// }

// function outer(outerName) {
//     function inner(name) {
//         return `hello ${name}`;
//     }
//     inner(outerName)
// }

// let func = function (name) {
//     return `hello ${name}`;
// }

// let func2 = (name) => { return `Hello ${name}`}

// let func3 = new Function("name", "return `Hello ${name}`");

// console.log(func3("Name"));

// Challenge 2 - Write a function isPrime(n) that returns true if n is prime, otherwise false.

// function isPrime(num) {
//     if (num <= 1) return false
//     if (num === 2) return true 
//     if (num % 2 === 0) return false

//     let checker = Math.floor(Math.sqrt(num))
//     for (let i = 3; i <= checker; i += 2) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }

//     return true;
// }

// console.log(isPrime(36)); 

// // Challenge 3 - Write a function countDigits(n) that counts the number of digits in a given number.
// function countDigits (n) {
//     counter = 0
//     while (n > 0) {
//         counter += 1
//         n = Math.floor(n / 10)
//     }
//     return counter
// }

// console.log(countDigits(1));

// // Challenge 4 - Write a function isPalindrome(n) that checks if a number reads the same forward and backward.

// function isPalindrome(n) {
//     let origNum = n
//     let reversed = 0
//     while (n > 0) {
//         let lastDigit = n % 10
//         reversed = reversed * 10 + lastDigit
//         n = Math.floor(n / 10 )
//     }

//     return origNum === reversed
// }

// console.log(isPalindrome(323)); 


// Challenge 5 - Write a function isArmstrong(n) that checks if a number is an Armstrong number.
// (An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.)

// function isArmstrong (n) {
//     let numStore = 0
//     let sum = 0

//     while (n > 0) {
//         let lastDigit = n % 10
//         numStore += Math.pow(lastDigit, 3)
//         n = Math.floor(n / 10)
//     }

//     return numStore
// }

// console.log(isArmstrong(153));

// Challenge 6 - Create a function createCounter(start) that returns an object with three methods:
// increment() ➝ Increases the count
// decrement() ➝ Decreases the count
// getCount() ➝ Returns the current count

// function createCounter(n) {
//     let count = n

//     return {
//         increment: function () {
//             count += 1
//             console.log('increment +1');
//         },
//         decrement: function () {
//             count -= 1
//             console.log('decrement -1');
//         },
//         getCount: function () {
//             console.log('current count', count);
//         }
//     }
// }

// const counter = createCounter(7)
// counter.increment()
// counter.decrement()
// counter.getCount()


// // Challenge 7 – Create a function that order food, the program asks for name, address and what do 	you want to order, then the output should be “Dear (name), your ordered food (food you 	entered) will be ready in 15 minuts and will be delivered to your address(address you 		entered)”

// function foodDelivery() {
//     name = prompt('What is ur name?')
//     adress = prompt('What is ur adress?')
//     order = prompt('what is ur order?')

//     console.warn(`Dear ${name}, your ordered food (${order}) will be ready in 15 minuts and will be delivered to ${adress}`);
// }

// foodDelivery()


// Challenge 8 - Create a function lazyAdder(a) that returns another function that adds b when called.
// const add5 = lazyAdder(5); 
// console.log(add5(10));  - > 15
// console.log(add5(20));  -> 25

// function lazyAdder (a) {
//     numStore = a
//     return function inAdd (b) {
//         console.log(numStore + b);
//     }
// }

// console.log(parseFloat(totalBudget));

// Challenge 1 - Dynamic Pricing Calculation
// Scenario: Create a function that calculates the total price of an online shopping cart, applying discounts based on quantity.
// Example: If a user buys 3+ items, apply a 10% discount; if 5+, apply 20%.

function shoppingCart(items) {

    if (item_quantity >= 3) {
        items * 0.10
    } else {
        items * 0.20
    }
}

console.log(object);


// Challenge 2 - Password Strength Checker
// Scenario: Build a function to check password strength based on conditions:
// Minimum 8 characters
// At least one uppercase letter
// At least one number
// At least one special character
// Return "Weak", "Medium", or "Strong" based on conditions.

// Challenge 3 - ATM Cash Withdrawal System
// Scenario: Simulate an ATM that dispenses the least number of bills for a given amount (e.g., $130 → 1x $100, 1x $20, 1x $10).
// if the requested amount is not in multiples of 10, return an error.