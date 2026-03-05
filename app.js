// var a = undefined;

// console.log(a);
// let a = 20;

// greet();

// function greet() {
//   console.log("hello");
// }

// console.log(Array())

// Array.prototype.greet = function () {
//   console.log("Arrayy prototypedan keyapdi");
// };

// Array().greet();


// function challenge2(n) {
//   let reversed = 0;

//   while (n > 0) {
//     let lastDigit = n % 10;
//     reversed = reversed * 10 + lastDigit;
//     n = Math.floor(n / 10);
//   }

//   console.log("\nChallenge 2:");
//   console.log("Reversed number:", reversed);
// }

// challenge2(1234);


// function challenge3(n) {
//   let largest = 0;

//   while (n > 0) {
//     let lastDigit = n % 10;
//     if (lastDigit > largest) {
//       largest = lastDigit;
//     }
//     n = Math.floor(n / 10);
//   }

//   console.log("\nChallenge 3:");
//   console.log("Largest digit:", largest);
// }

// challenge3(3947);


// function challenge4(n) {
//   let sum = 0;

//   while (n > 0) {
//     let lastDigit = n % 10;
//     sum = sum + lastDigit;
//     n = Math.floor(n / 10);
//   }

//   console.log("\nChallenge 4:");
//   console.log("Sum of digits:", sum);
// }

// challenge4(1234);


// function challenge5(n) {
//   let count = 0;

//   while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
//   }

//   console.log("\nChallenge 5:");
//   console.log("Number of digits:", count);
// }

// challenge5(98765);



// controle statements 
//TASK 1 — Largest of two numbers

let a = 10;
let b = 25;

if (a > b) {
    console.log("Task 1: Largest number is " + a);
} else {
    console.log("Task 1: Largest number is " + b);
}


// TASK 2 — Find the sign of 3 numbers
let x = 3;
let y = -7;
let z = 2;

if (x * y * z > 0) {
    console.log("Task 2: The sign is +");
} else {
    console.log("Task 2: The sign is -");
}

// TASK 3 — Sort three numbers
let n1 = 0;
let n2 = -1;
let n3 = 4;

if (n1 >= n2 && n1 >= n3) {
    if (n2 >= n3) console.log("Task 3:", n1, n2, n3);
    else console.log("Task 3:", n1, n3, n2);
}
else if (n2 >= n1 && n2 >= n3) {
    if (n1 >= n3) console.log("Task 3:", n2, n1, n3);
    else console.log("Task 3:", n2, n3, n1);
}
else {
    if (n1 >= n2) console.log("Task 3:", n3, n1, n2);
    else console.log("Task 3:", n3, n2, n1);
}

// TASK 4 — Odd or Even (0–15)
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("Task 4:", i + " is even");
    } else {
        console.log("Task 4:", i + " is odd");
    }
}

// TASK 5 — FizzBuzz (1–100)
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Task 5: FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Task 5: Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Task 5: Buzz");
    }
    else {
        console.log("Task 5:", i);
    }
}
// TASK 6 — Armstrong Numbers
for (let num = 100; num <= 999; num++) {

    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }
        if (sum === num) {
        console.log("Task 6: Armstrong number =", num);
    }
}

// TASK 7 — Average Marks & Grade
let marks = [80, 77, 88, 95, 68];
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let grade;

if (average < 60) grade = "F";
else if (average < 70) grade = "D";
else if (average < 80) grade = "C";
else if (average < 90) grade = "B";
else grade = "A";

console.log("Task 7: Average =", average);
console.log("Task 7: Grade =", grade);


// Challenge 1 - greet(name) in 5 ways

function greet(name) {
    return "Hello, " + name + "!";
}

const greet2 = function(name) {
    return "Hello, " + name + "!";
};

const greet3 = (name) => {
    return "Hello, " + name + "!";
};

const greet4 = name => "Hello, " + name + "!";

const greet5 = (name) => `Hello, ${name}!`;

console.log(greet("Lily"));
console.log(greet2("Lily"));
console.log(greet3("Lily"));
console.log(greet4("Lily"));
console.log(greet5("Lily"));



// Challenge 2 - Prime number

function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Is 7 prime?", isPrime(7));



// Challenge 3 - Count digits

function countDigits(n) {
    let count = 0;

    while (n !== 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

console.log("Digits in 12345:", countDigits(12345));



// Challenge 4 - Palindrome number

function isPalindrome(n) {
    let original = n;
    let reversed = 0;

    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }

    return original === reversed;
}

console.log("Is 121 palindrome?", isPalindrome(121));



// Challenge 5 - Armstrong number

function isArmstrong(n) {
    let original = n;
    let digits = n.toString().length;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit ** digits;
        n = Math.floor(n / 10);
    }

    return sum === original;
}

console.log("Is 153 Armstrong?", isArmstrong(153));



// Challenge 6 - Counter object

function createCounter(start) {
    let count = start;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter(10);

counter.increment();
counter.increment();
counter.decrement();

console.log("Counter value:", counter.getCount());



// Challenge 7 - Food order

function orderFood(name, address, food) {
    console.log(
        "Dear " + name +
        ", your ordered food " + food +
        " will be ready in 15 minutes and will be delivered to your address " +
        address
    );
}

orderFood("Lily", "Tashkent", "Burger");



// Challenge 8 - lazyAdder

function lazyAdder(a) {
    return function(b) {
        return a + b;
    };
}

const add5 = lazyAdder(5);

console.log(add5(10));
console.log(add5(20));