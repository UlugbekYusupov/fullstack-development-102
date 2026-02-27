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


//7 

let grades = [80, 77, 88, 95, 68]
let avg = 0
let sum = 0
for (let i = 0; i < grades.length; i++) {
    sum += grades[i]
}
avg = sum / grades.length
if (avg >= 90) {
    console.log("Grade: A")
} else if (avg >= 80) {
    console.log("Grade: B")
} else if (avg >= 70) {
    console.log("Grade: C")
} else if (avg >= 60) {
    console.log("Grade: D")
} else {
    console.log("Grade: F")
}
