let colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors);

let nums = new Array(5);
console.log(nums.length);

console.log(colors.at(2));


// challange 1

console.log("===========challange 1=============")

function first(arr, n) {
    if (n === undefined) {
        return arr[0];
    }
    return arr.slice(0, n);
}

console.log(first(colors));

// challange 2

console.log("===========challange 2=============")



function last(arr, n) {
    if (n === undefined){
        return arr.pop();
    }
    return arr.pop(n)
}

console.log(last(colors, 3));

// challange 3
console.log("===========challange 3=============")

function joinall(arr) {
    let newstring = "";
    for (let i = 0; i < arr.length; i++){
        newstring +=   `${arr[i]}, `;
    }
    return newstring;
}
console.log(joinall(colors));

// challange 4

console.log("===========challange 4=============")

let nums2 = [1, 2, 3, 4, 5];

function fill(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + " -";
    }
    return arr;
}
console.log(fill(nums2));


// challange 5

console.log("===========challange 5=============")

function sorting(arr) {
    return arr.sort();
}

console.log(sorting(colors));


// challange 6

console.log("===========challange 6=============")

function frequency(arr) {
   var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var maxFrequency = 1;
    var count = 0;
    var item;

    for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) count++;
        if (maxFrequency < count) {
        maxFrequency = count;
        item = arr1[i];
        }
    }
    count = 0;
    }

    console.log(arr1);
    console.log(item + " ( " + maxFrequency + " times )");
    
}
frequency();
// ==========================EXERSICE==========================================

console.log("===========EXERSICE=============")

let myarr = [1, 2, 3, 4, 5];

myarr.push(6);
myarr.pop(2);
myarr.shift();
myarr.unshift(0);


myarr.map(x => x * 2);

myarr.filter(x => x % 2 === 0);

myarr.reduce((acc, x) => acc + x, 0);

myarr.slice(1, 3);

myarr.splice(2, 1);
myarr.sort((a, b) => a - b);
myarr.reverse();

myarr.find(x => x > 3);
myarr.findIndex(x => x > 3);
myarr.includes(3);

// ========================END=EXERSICE=================================

// challange 7
console.log("===========challange 7=============")

function swaper(text){
    for (let i = 0; i < text.length; i++){
        if (text[i] === text[i].toUpperCase()){
            text = text.replace(text[i], text[i].toLowerCase());
        }
        else if (text[i] === text[i].toLowerCase()){
            text = text.replace(text[i], text[i].toUpperCase());
        }
    }
    return text;
}

console.log(swaper("Hello World!"));

// challange 8
console.log("===========challange 8=============")

let colors2 = ["red", "green", "blue", "yellow", "purple"];

for (let i = 0; i < colors2.length; i++){
    let order = 'th';
    if (i === 0){ order = 'st'; }
    else if (i === 1){ order = 'nd';}
    else if (i === 2){ order = 'rd';}
    console.log(` ${i+1} ${order} choise is ${colors2[i]}`);
}

// challange 9
console.log("===========challange 9=============")

let nums4 = [1,0,2,3,4]
let nums5 = [3,5,6,7,8,13]

let maxi = NaN
let mini = NaN
if (nums4.length > nums5.length){ maxi = nums4, mini=nums5}
else {maxi = nums5, mini=nums4}

let output = []

for (let i = 0; i < maxi.length; i ++){
    if (mini[i] == null){output.push(maxi[i] + 0)}

    else {output.push(maxi[i] + mini[i])}
}
document.getElementById("ordinal").innerHTML = output;
console.log(output)