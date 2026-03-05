
// let num = 10;
// let odd = [];
// let even = [];

// for(let i = 1; i < num; i++) {
//     if(i % 2 === 0) {
//         even.push(i);
//     } else {
//         odd.push(i)
//     }
// }

// console.log(odd, odd.length);
// console.log(even, even.length);


// let num = 4567;
// const digits = []

// while (num > 0) {
//     digits.push(num % 10)
//     num = Math.floor(num / 10);
// }

// console.log(digits.join(''));


// let n = parseInt(prompt("Enter a number:"));

// let even = 0;
// let odd = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }

// console.log("Even numbers:", even);
// console.log("Odd numbers:", odd);


// let num = 2345;

// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;      
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log("Reversed number:", reverse);


// let num = parseInt(prompt("Enter a number:"));

// let largest = 0;

// while (num > 0) {
//     let digit = num % 10;

//     if (digit > largest) {
//         largest = digit;
//     }

//     num = Math.floor(num / 10);
// }

// console.log("Largest digit:", largest);

// let num = parseInt(prompt("Enter a number:"));

// let sumDigits = 0;

// while (num > 0) {
//     let digit = num % 10;
//     sumDigits += digit;
//     num = Math.floor(num / 10);
// }

// console.log("Sum of digits:", sumDigits);


// let num = parseInt(prompt("Enter a number:"));

// let count = 0;

// if (num === 0) {
//     count = 1;
// } else {
//     while (num > 0) {
//         num = Math.floor(num / 10);
//         count++;
//     }
// }

// console.log("Number of digits:", count);



// const num1 = +prompt("enter the number 1: ");
// const num2 = +prompt("enter the number 2: ");
// const num3 = +prompt("enter the number 3: ");

// if (num1 < 0) {
//     alert("The signed number is: " + num1);
// }
// if (num2 < 0) {
//     alert("The signed number is: " + num2);
// }
// if (num3 < 0) {
//     alert("The signed number is: " + num3);
// }

// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
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

// keys.forEach(function (element) {});

