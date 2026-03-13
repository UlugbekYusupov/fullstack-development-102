// function first(arr, n) {
//   if (n !== undefined && n < 0) return n;
//   if (!Array.isArray(arr)) return [];

//   if (n === undefined) return arr[0];
//   return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2])); 
// console.log(first([], 3)); 
// console.log(first([7, 9, 0, -2], 3)); 
// console.log(first([7, 9, 0, -2], 6)); 
// console.log(first([7, 9, 0, -2], -3));


// function last(arr, n) {
//   if (!Array.isArray(arr)) return [];

//   if (n === undefined) return arr[arr.length - 1];
//   return arr.slice(-n);
// }

// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2], 3)); 
// console.log(last([7, 9, 0, -2], 6)); 

// const myColor = ["Red", "Green", "White", "Black"];
// const joined = myColor.join(",");
// console.log(joined); 

// function insertDashes(numberInput) {
//   const str = String(numberInput);
//   return str.split("").join("-");
// }

// console.log(insertDashes("025468")); 

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// var sorted = arr1.slice().sort(function (a, b) {
//   return a - b;
// });
// console.log(sorted.join(","));

// function swapCase(input) {
//   return input
//     .split("")
//     .map(function (ch) {
//       var upper = ch.toUpperCase();
//       var lower = ch.toLowerCase();
//       return ch === upper ? lower : upper;
//     })
//     .join("");
// }

// console.log(swapCase("The Quick Brown Fox"));
