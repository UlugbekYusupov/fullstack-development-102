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
let num = Number(prompt("Enter the  number:"))
let res = 0
while (1 <= num) {
    num /= 10
    num = Math.floor(num)
    res++
}
console.log(res)



