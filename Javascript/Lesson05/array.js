// challenge 1
function first(arr, n) {
    if (arr.length === 0) return [];
    if (n === undefined) return arr[0];
    if (n < 0) return [];
    return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));      
console.log(first([], 3));              
console.log(first([7, 9, 0, -2], 3));   
console.log(first([7, 9, 0, -2], 6));   

// challenge 2
function last(arr, n) {
  if (n === undefined) return arr[arr.length - 1];
  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6)); 

// challenge 3 
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(",")); 

// challenge 4 
function insertDashes(num) {
  const str = String(num);
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (i < str.length - 1) {
      result += "-";
    }
  }
  return result;
};

console.log(insertDashes('025468')); 

// challenge 5 
let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);

console.log(arr1);

// challenge 6 
function mostFrequent(arr) {
  let count = {};
  let maxItem = arr[0];
  let maxCount = 0;

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      maxItem = item;
    }
  }

  console.log(maxItem + " (" + maxCount + " times)");
}

const arr = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

mostFrequent(arr);

// challenge 7 
function swapCase(str) {
  let result = "";

  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));

// challenge 8 
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {
  let ordinal;

  if (i + 1 === 1) ordinal = o[1];
  else if (i + 1 === 2) ordinal = o[2];
  else if (i + 1 === 3) ordinal = o[3];
  else ordinal = o[0];

  console.log(`${i+1}${ordinal} choice is ${color[i]}`);
}

// challenge 9 
function sumArrays(a1, a2) {
  let maxLength = Math.max(a1.length, a2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    let val1 = a1[i] || 0;
    let val2 = a2[i] || 0;

    result.push(val1 + val2);
  }

  return result;
}

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

console.log(sumArrays(array1, array2));