// Lecture 6
// Arrays

// const first = (n) => { return n.shift() }

// Challenge 2

// const last = (n) => { return n.pop() }

// console.log(last([7, 9, 0, -2,20]));

// challenge 3
// const join = (n) => { return n.join() }
// myColor = ["Red", "Green", "White", "Black"]
// console.log(join(myColor));

// // challenge 4
// const insert = (...n) => { return n.toString(n.join("-")) }
// console.log(insert(87673898789));

// challenge 5
// const arrSort = (n) => { return n.sort() }
// console.log(arrSort([7, 9, 0, -2,20]));

// challenge 6

// function frequent(n) {

//     let iters = {}
//     let count = 0
//     let countObj = null
//     for (i of n) {
//         if (iters[i]) {
//             iters[i] += 1
//         } else {
//             iters[i] = 1
//         }
//     }
    
//     for ([key,value] of Object.entries(iters)) {
//         if (value > count) {
//             count = value
//             countObj = Object.keys(iters).find(key => iters[key] === count)
//         }
//     }

//     console.log(count, countObj);
// } 

// frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

// Challenge 7

// let word = 'The Quick Brown Fox'
// let swappedstr = ''
// for (i of word) {
//     if (i === i.toUpperCase()) {
//         swappedstr += i.toLowerCase()
//     } else {
//         swappedstr += i.toUpperCase()
//     }
// }

// console.log(swappedstr);

// Challenge 8

// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// const o = ["th", "st", "nd", "rd"];

// for (let i = 0; i < color.length; i++) {
//   let index = i + 1;
//   let suffix;

//   if (index === 1) {
//     suffix = o[1];
//   } else if (index === 2) {
//     suffix = o[2];
//   } else if (index === 3) {
//     suffix = o[3];
//   } else {
//     suffix = o[0];
//   }

//   console.log(`${index}${suffix} choice is ${color[i].trim()}.`);
// }

// Challenge 9

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let arraySum = []
for (c of array1) {
  let i = 0
  while (i < array2.length) {
    let valSum = c + array2[i]
    arraySum.push(valSum)
    i++
    if (i == array2.length) {
      break
    }
  }
}

console.log(arraySum);