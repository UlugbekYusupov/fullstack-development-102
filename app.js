// // #1
// console.log("5" + 5)
// console.log("5" - 5)
// console.log("5" * 2)
// console.log("10" / 2)
// console.log(5 + true)
// console.log("10" - true)
// console.log("5" + true)
// console.log(5 + null)
// console.log(5 + undefined)

// // #2
// console.log(200 + 50)
// console.log(25 + "years old")
// console.log(Boolean("false"))
// console.log("10" - true)

// // #3
// const celsius = 30
// const fahrenheit = (celsius * 9/5) + 32
// console.log("Celsius:", celsius)
// console.log("Fahrenheit:", fahrenheit)

// const celsius = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log(`Celsius: celsius`);
// console.log(`Fahrenheit: fahrenheit`);

// // var a = undefined;

// // console.log(a);
// // let a = 20;

// // greet();

// // function greet() {
// //   console.log("hello");
// // }

// // console.log(Array())

// // Array.prototype.greet = function () {
// //   console.log("Arrayy prototypedan keyapdi");
// // };

// // Array().greet();

// console.log(5 === "5");

// console.log("Ulugbek" === "Ulugbek");

// const user = {
//   name: "Ulugbek",
// };

// const userr = user;

// console.log(user || userr);

// let number = prompt();

// for (let i = 1; i < number; i++) {

// }

// let number = prompt("Enter a number : ")

// i = 0

// while(number > 0){

//   let x = number % 10

// }

// for (let i = 0; i < 10; i++) {}

// let i = 0;
// while (i < 10) {
//   i++;
// }

// do {
//   i++;
// } while (i < 10);

// const user = {
//   name: "Ulugbek",
//   age: 20,
//   country: "Uzbekistan",
// };

// let keys = Object.keys(user);

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// for (const element of keys) {
//   console.log(element);
// }

// keys.forEach(function (element) {});z


// ----------lesson 5----------
// Practice
// #1
function greet1(name){
    return "Hello, " + name + "!";
};
console.log(greet1("Shirin"))

let greet2 = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet2("Shirin"))

let greet3 = (name) => {
    return "Hello, " + name + "!";
};
console.log(greet3("Shirin"))

let greet4 = name => `Hello, ${name}!`;
console.log(greet4("Shirin"))

let greet5 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet5("Shirin"))

// #2
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); // true
console.log(isPrime(-1)); // false

// #3
function countDigits(n) {
    return Math.abs(n).toString().length;
}
console.log(countDigits(12345)); // 5

// #4
function isPalindrome(n) {
    const str = n.toString();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

// #5
function isArmstrong(n) {
    const digits = n.toString().split("");
    const power = digits.length;

    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), power);
    }, 0);

    return sum === n;
}
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false

// #6
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
const counter = createCounter(15);

counter.increment();
counter.decrement();
console.log(counter.getCount()); // 15

// #7
function orderFood(name, address, food) {
    return `Dear ${name}, your ordered food ${food} will be ready in 15 minutes and will be delivered to your address ${address}`;
}
console.log(orderFood("Safina", "Tashkent, Yunusabad", "Xanim"));

// #8
function lazyAdder(a) {
    return function(b) {
    return a + b;
    };
}
const add5 = lazyAdder(5);

console.log(add5(10)); // 15
console.log(add5(20)); // 25
