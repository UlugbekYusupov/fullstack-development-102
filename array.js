// Practices

function first(arr, n) {
    if (arr.length === 0) return [];
    if (n === undefined) return arr[0];
    if (n < 0) return n;
    return arr.slice(0, n);
}
// Test cases
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));



function last(arr, n) {
    if (arr.length === 0) return [];
    if (n === undefined) return arr[arr.length - 1];
    if (n < 0) return [];
    return arr.slice(-n);
}
// Test cases
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));



let myColor = ["Red", "Green", "White", "Black"];
let result = myColor.join();
console.log(result);



function insertDashes(number) {
    let numStr = number.toString();
    let result = numStr.split('').join('-');
    return result;
}
// Test case
console.log(insertDashes(125468));
console.log(insertDashes(123456));



let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function (a, b) {
    return a - b;
});
console.log(arr1);



let arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function mostFrequent(arr) {
    let freq = {};
    let maxCount = 0;
    let maxItem = null;
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
        if (freq[item] > maxCount) {
            maxCount = freq[item];
            maxItem = item;
        }
    }
    return `${maxItem} (${maxCount} times)`;
}
console.log(mostFrequent(arr2));



function swapCase(str) {
    let swapped = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}
console.log(swapCase('The Quick Brown Fox')); 



let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
    let num = i + 1; 
    let suffix = o[(num <= 3) ? num : 0]; 
    console.log(`${num}${suffix} choice is ${color[i]}.`);
}



let array3 = [1, 0, 2, 3, 4];
let array4 = [3, 5, 6, 7, 8, 13];
function sumArrays(arr3, arr4) {
    let result = [];
    let maxLength = Math.max(arr3.length, arr4.length);
    for (let i = 0; i < maxLength; i++) {
        let sum = (arr3[i] || 0) + (arr4[i] || 0);
        result.push(sum);
    }
    return result;
}
console.log(sumArrays(array3, array4)); 



let array5 = [1, 0, 2, 3, 4];
let array6 = [3, 5, 6, 7, 13];
function sumArrays(arr5, arr6) {
    let result = [];
    let maxlength = Math.max(arr5.length, arr6.length);
    for (let c = 0; c < maxLength; c++){
        let sum = (arr5[c] || 0) +(arr6[c] || 0);
        result.push(sum);
    }
    return result;
}
consol.log(sumArrays(array5, array6));
