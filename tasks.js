// challenge2
function last(array,n) {
    if (n === undefined){
        return array[array.length -1];
    }
    return array.slice(-n)
}

console.log(last([7,9,0,-2]));
console.log(last([7,9,0,-2],3));
console.log(last([7,9,0,-2],4));

// challenge3
let mycolor = ['Red','Green','White','Black'];
let result = mycolor.join(',');
console.log(result);

// challenge4
let num = [1,2,3,4,5,]
let numResult = num.join('-');
console.log(numResult);

// challenge5
var array1 = [-3,8,7,6,5,-4,3,2,1];
array1.sort((a,b) => a - b);
console.log(array1);

// challenge5
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let count = {};
let maxItem = "";
let maxCount = 0;

for (let item of arr1) {
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
        maxCount = count[item];
        maxItem = item;
    }
}

console.log(maxItem + " ( " + maxCount + " times )");

// challenge6
let str = "The Quick Brown Fox";
let resultt = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
        resultt += char.toLowerCase();
    } else {
        resultt += char.toUpperCase();
    }
}

console.log(resultt);

// challenge7
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {

    let ordinal;

    if (i + 1 === 1) {
        ordinal = o[1];
    } 
    else if (i + 1 === 2) {
        ordinal = o[2];
    } 
    else if (i + 1 === 3) {
        ordinal = o[3];
    } 
    else {
        ordinal = o[0];
    }

    console.log((i + 1) + ordinal + " choice is " + color[i] + ".");
}

// cahllenge8
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let arResult = [];

let maxLength = Math.max(array1.length, array2.length);

for (let i = 0; i < maxLength; i++) {
    let a = array1[i] || 0;
    let b = array2[i] || 0;

    result.push(a + b);
}

console.log(result);

