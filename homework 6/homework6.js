//Task1
function first(arr, n) {
    if (arr.length === 0) return [];
    if (n === undefined) return arr[0];
    if (n < 0) return n; 
    return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));      
console.log(first([], 3));               
console.log(first([7, 9, 0, -2], 3));   
console.log(first([7, 9, 0, -2], 6));    
console.log(first([7, 9, 0, -2], -3));   

//Task 2

function last(arr, n) {
    if (arr.length === 0) return [];
    if (n === undefined) return arr[arr.length - 1];
    if (n < 0) return [];
    return arr.slice(-n);
}


console.log(last([7, 9, 0, -2]));      
console.log(last([7, 9, 0, -2], 3));   
console.log(last([7, 9, 0, -2], 6));   

//Task 3

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(",")); 

//Task 4

function insertDashes(num) {
    let str = num.toString();
    return str.split("").join("-");
}

console.log(insertDashes(025468));  

//Tassk 5

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort(function(a, b) {
    return a - b; 
});
console.log(arr1); 

//Task 6

function mostFrequent(arr) {
    let freq = {};
    let maxItem = arr[0];
    let maxCount = 1;

    for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
        maxItem = item;
        maxCount = freq[item];
    }
    }

    return `${maxItem} (${maxCount} times)`;
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1)); 


//Task 7

function swapCase(str) {
return str
    .split("")
    .map(char => 
    char === char.toUpperCase() 
        ? char.toLowerCase() 
        : char.toUpperCase()
    )
    .join("");
}

console.log(swapCase("The Quick Brown Fox")); 

//Task 8

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {
let suffix = (i+1) % 10 === 1 && (i+1) !== 11 ? o[1] :
            (i+1) % 10 === 2 && (i+1) !== 12 ? o[2] :
            (i+1) % 10 === 3 && (i+1) !== 13 ? o[3] : o[0];
            console.log(`${i+1}${suffix} choice is ${color[i]}.`);
}

//Taslk 9

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

let maxLength = Math.max(array1.length, array2.length);
let result = [];

for (let i = 0; i < maxLength; i++) {
  let val1 = array1[i] || 0; // default to 0 if undefined
    let val2 = array2[i] || 0;
    result.push(val1 + val2);
}

console.log(result); // -> [4, 5, 8, 10, 12, 13]
