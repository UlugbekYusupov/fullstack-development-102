//Task 1
// Versiya 1
function greet1(name) {
    return "Hello, " + name + "!";
}

// Versiya 2
const greet2 = function(name) {
    return `Hello, ${name}!`;
}

// Versiya 3
const greet3 = (name) => `Hello, ${name}!`;


//Task 2
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
    }
    return true;
}
//TAsk 3

function countDigits(n) {
    return n.toString().length;
}

//Tassk 4

function isPalindrome(n) {
    const str = n.toString();
    return str === str.split("").reverse().join("");
}

//TAsk5v 

function isArmstrong(n) {
    const digits = n.toString().split("");
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
    return sum === n;
}


//Task 6

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

// Test
const counter = createCounter(10);
counter.increment();
console.log(counter.getCount()); // 11
counter.decrement();
console.log(counter.getCount()); // 10


//TAsk 7
function orderFood(name, address, food) {
    return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;
}

// Test
console.log(orderFood("Timur", "Samarkand, Uzbekistan", "Plov"));


//Task 8

function lazyAdder(a) {
    return function(b) {
    return a + b;
    };
}

// Test
const add5 = lazyAdder(5);
console.log(add5(10)); // 15
console.log(add5(20)); // 25