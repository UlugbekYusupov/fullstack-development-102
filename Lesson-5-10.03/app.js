// // let colors = ["red",'blue','green']
// // console.log(colors);

// // let setToArray = [...new Set(['a','b','c'])]
// // console.log(setToArray);

// //chelenge 1

const sonlar = [1,2,3,4,5,6,7,8,9,0];
const lastElement = sonlar.at(-1);

console.log(lastElement); // Output: 'cherry'


// //chelenge 3

// let myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join()); 

// //ch4

// function insertDash(num) {
//     return num.toString().split("").join("-");
// }

// console.log(insertDash(25468)); 

// //ch 5

// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr1);





// numbers = [1,2,3,4,5,6,8,10,30,11]

// let result = numbers.map(function(num){
//     return num **3
// });

// console.log(result);

// let natija = numbers.filter(function(num){
//     return num%2==0;
// })

// console.log(natija);

let fruits = ["banana", "apple", "orange"];

// fruits.sort()
// console.log(fruits);
// fruits.reverse()
// console.log(fruits);

// let cut = numbers.slice(1,5)
// console.log(cut);

// numbers.splice(0,2)

// console.log(numbers);
let raqamlar  = [1,2,3,4,5,6,7,8,9,10]
let a = raqamlar.find(function(num){
    return num > 6
})

console.log(a);

let b = raqamlar.findIndex(function(num){
    return num>6
})
console.log(b);

console.log(raqamlar.includes(10));

function reverse(){
    return raqamlar.slice(-1)
}
console.log(reverse);

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var freq = {};
var maxCount = 0;
var mostItem;

for (var i = 0; i < arr1.length; i++) {

    if (freq[arr1[i]] == null) {
        freq[arr1[i]] = 1;
    } else {
        freq[arr1[i]]++;
    }

    if (freq[arr1[i]] > maxCount) {
        maxCount = freq[arr1[i]];
        mostItem = arr1[i];
    }
}

console.log(mostItem + " (" + maxCount + " times)");

var str = "The Quick Brown Fox";
var result = "";

for (var i = 0; i < str.length; i++) {

    if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
    } else {
        result += str[i].toUpperCase();
    }

}

console.log(result);


//7

var str = "The Quick Brown Fox";
var result = "";

for (var i = 0; i < str.length; i++) {

    if (str[i] === str[i].toUpperCase()) {
        result += str[i].toLowerCase();
    } else {
        result += str[i].toUpperCase();
    }

}

console.log(result);

//8
var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th","st","nd","rd"];

for (var i = 0; i < color.length; i++) {

    var ordinal;

    if (i + 1 == 1) {
        ordinal = o[1];
    } 
    else if (i + 1 == 2) {
        ordinal = o[2];
    } 
    else if (i + 1 == 3) {
        ordinal = o[3];
    } 
    else {
        ordinal = o[0];
    }

    console.log((i+1) + ordinal + " choice is " + color[i]);
}

//9

var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

var result = [];
var maxLength = Math.max(array1.length, array2.length);

for (var i = 0; i < maxLength; i++) {

    var e = array1[i] || 0;
    var f = array2[i] || 0;

    result.push(e + f);
}

console.log(result);