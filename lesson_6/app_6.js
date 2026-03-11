// Challenge 1:
function first(array, n) {
  if (array.length === 0) return [];
  if (n === undefined) return array[0];
  if (n < 0) return n;
  return array.slice(0, n);
}
console.log("C1:", first([7, 9, 0, -2]));
console.log("C1:", first([], 3));
console.log("C1:", first([7, 9, 0, -2], 3));
console.log("C1:", first([7, 9, 0, -2], 6));
console.log("C1:", first([7, 9, 0, -2], -3));




// Challenge 2:
function last(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
}
console.log("C2:", last([7, 9, 0, -2]));
console.log("C2:", last([7, 9, 0, -2], 3));
console.log("C2:", last([7, 9, 0, -2], 6));



// Challenge 3: 
let myColor = ["Red", "Green", "White", "Black"];
console.log("C3:", myColor.join(","));



// Challenge 4: 
let num = "025468";
let dashed = num.split('').join('-');
console.log("C4:", dashed);


// Challenge 5: 
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);
console.log("C5:", arr1.join(","));



// Challenge 6: 
const elements = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let frequencyMap = {}; 
let mostFrequentItem; 
let maxCount = 0;      

for (let item of elements) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
        maxCount = frequencyMap[item];
        mostFrequentItem = item;
    }
}

console.log(`${mostFrequentItem} ( ${maxCount} marta )`);

// Challenge 7: 
let str = 'The Quick Brown Fox';
let swapped = str.split('').map(c => 
  c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
).join('');
console.log("C7:", swapped);

// Challenge 8:
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
  let pos = i + 1;
  let suffix = (pos <= 3) ? o[pos] : o[0];
  console.log(`C8: ${pos}${suffix} choice is ${color[i]}.`);
}

// Challenge 9:
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
let result = [];
let maxLength = Math.max(array1.length, array2.length);
for (let i = 0; i < maxLength; i++) {
  result.push((array1[i] || 0) + (array2[i] || 0));
}
console.log("C9:", result);