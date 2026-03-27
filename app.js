// // Lesson 2


// console.log(a)
// var a = 10

// //Practice

// //Challenge 1
// console.log("5" + 5)
// console.log("5" - 5)
// console.log("5" * "2")
// console.log("10" / 2)
// console.log(5 + true)
// console.log("5" + true)
// console.log("5" - true)
// console.log("5" + null)
// console.log("5" + undefined)
// console.log("5" - null)
// console.log("5" - undefined)

// //Challenge 2
// let num = "200"
// console.log(Number(num) + 50)
// console.log(String(25) + " Years old")
// console.log(Boolean("false"))
// console.log("10" - true)

// //Challenge 3
// const celsius = 25
// const fahrenheit = (celsius * 9 / 5) + 32
// console.log(`${celsius}°C is equal to ${fahrenheit}°F`)

// celsius = 30
// const fahrenheit2 = (celsius * 9 / 5) + 32
// console.log(`${celsius}°C is equal to ${fahrenheit2}°F`)


//lesson 3

//challange 1

// let givenNumber = Number(prompt("Enter a number:"))
// let evenNum = 0
// let oddNum = 0

// for (let i = 1; i <= givenNumber; i++) {
//     if (i % 2 === 0) {
//         evenNum += i
//     } else {
//         oddNum += i
//     }
// }

// console.log(`The sum of even numbers from 1 to ${givenNumber} is: ${evenNum}`)
// console.log(`The sum of odd numbers from 1 to ${givenNumber} is: ${oddNum}`)

// //challange 2

// let num = Number(prompt("Enter the  number:"))
// let res = 0
// while (1 <= num) {
//     res *= 10
//     res += num % 10
//     num /= 10
//     num = Math.floor(num)
// }
// console.log(res)


//challange 3

// let num = Number(prompt("Enter the  number:"))
// let res = num % 10
// while (1 <= num) {
//     num /= 10
//     num = Math.floor(num)
//     if (res < num % 10) {
//         res = num % 10
//     }
// }
// console.log(res)

//challange 4
// let num = Number(prompt("Enter the  number:"))
// let res = 0
// while (1 <= num) {
//     res += num % 10
//     num /= 10
//     num = Math.floor(num)
// }
// console.log(res)


//challange 5
// let num = Number(prompt("Enter the  number:"))
// let res = 0
// while (1 <= num) {
//     num /= 10
//     num = Math.floor(num)
//     res++
// }
// console.log(res)



//lesson 4

//practice

//1

// let num1 = Number(prompt("Enter the first number:"))
// let num2 = Number(prompt("Enter the second number:"))

// function max(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     } else {
//         return num2
//     }
// }

// alert(`The largest number is: ${max(num1, num2)}`)


// //2 

// let num1 = Number(prompt("Enter the first number:"))
// let num2 = Number(prompt("Enter the second number:"))
// let num3 = Number(prompt("Enter the third number:"))
// let negativeCount = 0

// function sign(num1, num2, num3) {
//     if (num1 < 0) {
//         negativeCount++
//     }
//     if (num2 < 0) {
//         negativeCount++
//     }
//     if (num3 < 0) {
//         negativeCount++
//     }

//     if (negativeCount % 2 == 0) {
//         return "the sign is +"
//     } else {
//         return "the sign is -"
//     }
// }

// alert(sign(num1, num2, num3))


//3

// let num1 = Number(prompt("Enter the first number:"))
// let num2 = Number(prompt("Enter the second number:"))
// let num3 = Number(prompt("Enter the third number:"))
// let res = []

// function max(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     } else {
//         return num2
//     }
// }

// function min(num1, num2) {
//     if (num1 < num2) {
//         return num1
//     } else {
//         return num2
//     }
// }

// function sort(num1, num2, num3) {
//     let arr = [num1, num2, num3]
//     let max = max(num1, max(num2, num3))
//     let min = min(num1, min(num2, num3))
//     let mid = num1 + num2 + num3 - max - min
//     return [min, mid, max]
// }

// alert(sort(num1, num2, num3))


//4 
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }


//5

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }


//6 

// for (let i = 100; i <= 999; i++) {
//     let num = i
//     let sum = 0
//     let yuzlik = Math.floor(num / 100)
//     let onlik = Math.floor((num % 100) / 10)
//     let birlik = num % 10
//     sum = yuzlik ** 3 + onlik ** 3 + birlik ** 3
//     if (sum === i) {
//         console.log(i)
//     }
// }


// //7 

// let grades = [80, 77, 88, 95, 68]
// let avg = 0
// let sum = 0
// for (let i = 0; i < grades.length; i++) {
//     sum += grades[i]
// }
// avg = sum / grades.length
// if (avg >= 90) {
//     console.log("Grade: A")
// } else if (avg >= 80) {
//     console.log("Grade: B")
// } else if (avg >= 70) {
//     console.log("Grade: C")
// } else if (avg >= 60) {
//     console.log("Grade: D")
// } else {
//     console.log("Grade: F")
// }



// LESSON 5

// Practice

//1

// function greet(name) {
//     return `Hello, ${name}!`
// }

// let greet = function (name) {
//     return `Hello, ${name}!`
// }

// let greet = (name) => {
//     return `Hello, ${name}!`
// }

// (function (name) {
//     return `Hello, ${name}!`
// })('isoxon')

// let greet = new Function('name', 'return `Hello, ${name}!`')


//2

// let num = Number(prompt("Enter a number:"))

// function isPrime(num) {
//     if (num <= 1) {
//         return false
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }



// //3
// let num = Number(prompt("Enter a number:"))

// function countDigits(num) {
//     let count = 0
//     while (num >= 1) {
//         num /= 10
//         count++
//     }
//     return count
// }



//4 

// let num = Number(prompt("Enter a number:"))

// function isPalindrome(num) {
//     let originalNum = num
//     let reversedNum = 0
//     while (num >= 1) {
//         reversedNum *= 10
//         reversedNum += num % 10
//         num /= 10
//         num = Math.floor(num)
//     }
//     return originalNum === reversedNum
// }


//5 

// let num = Number(prompt("Enter a number:"))

// function isArmstrong(num) {
//     let originalNum = num
//     let sum = 0
//     let count = 0
//     while (num >= 1) {
//         num /= 10
//         count++
//     }
//     num = originalNum
//     while (num >= 1) {
//         sum += (num % 10) ** count
//         num /= 10
//         num = Math.floor(num)
//     }
//     return originalNum === sum
// }



//6 
// function createCounter(start) {
//     let count = start

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         getCount() {
//             return count
//         }
//     }
// }


// let counter = createCounter(5)
// counter.increment()
// counter.increment()
// console.log(counter.getCount()) 
// counter.decrement()
// console.log(counter.getCount()) 


// //7
// function once(fn) {
//     let called = false;

//     return function (...args) {
//         if (!called) {
//             called = true;
//             return fn.apply(this, args);
//         }
//     };
// }


// //8 

// function lazyAdder(a) {
//     return function (b) {
//         return a + b
//     }
// }

// let add5 = lazyAdder(5)
// console.log(add5(10))
// console.log(add5(20))

// //9
// function debounce(fn, delay) {
//     let timer;

//     return function (...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay);
//     };
// }

// function logMessage(message) {
//     console.log(message);
// }

// let debouncedLog = debounce(logMessage, 1000);

// debouncedLog("Hello, World!");
// debouncedLog("Hello, World!");
// debouncedLog("Hello, World!");

//10 
// function throttle(fn, interval) {
//     let lastTime = 0;

//     return function (...args) {
//         const now = Date.now();

//         if (now - lastTime >= interval) {
//             lastTime = now;
//             fn.apply(this, args);
//         }
//     };
// }

// function handleScroll() {
//     console.log("Scrolling...");
// }

// const throttledScroll = throttle(handleScroll, 1000);

// window.addEventListener("scroll", throttledScroll);


// //11
// function taskScheduler() {
//     let timers = [];

//     function schedule(task, delay) {
//         const id = setTimeout(() => {
//             task();

//             // удаляем выполненный таймер из массива
//             timers = timers.filter(timer => timer !== id);
//         }, delay);

//         timers.push(id);
//     }

//     function cancelAll() {
//         timers.forEach(id => clearTimeout(id));
//         timers = [];
//     }

//     return {
//         schedule,
//         cancelAll
//     };
// }

// const scheduler = taskScheduler();

// scheduler.schedule(() => {
//     console.log("Task 1");
// }, 1000);

// scheduler.schedule(() => {
//     console.log("Task 2");
// }, 2000);

// scheduler.schedule(() => {
//     console.log("Task 3");
// }, 3000);


// challange 12

// function passwordChecker(password) {
//     let hasNum = 0;
//     let hasUpCase = 0;
//     let hasSpChar = 0;
//     let has8Chars = 0

//     const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
//     if (length(password) >= 8) has8Chars = 1
//     for (let char of password) {
//         if (char >= 'A' && char <= 'Z') hasUpCase = 1;
//         if (char >= '0' && char <= '9') hasNum = 1;
//         if (char in specialChars) hasSpChar = 1;
//     }
//     let st = has8Chars + hasNum + hasSpChar + hasUpCase
//     if (st == 4) {
//         console.log("strong password")
//     }
//     else if (st < 2) {
//         console.log("weak password")
//     }
//     else {
//         console.log("medium password")
//     }
// }

// let input = prompt()
// passwordChecker(input)




