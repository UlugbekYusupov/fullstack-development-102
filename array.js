let colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors);

let nums = new Array(5);
console.log(nums.length);

console.log(colors.at(2));


// challange 1

console.log("challange 1")

function first(arr, n) {
    if (n === undefined) {
        return arr[0];
    }
    return arr.slice(0, n);
}

console.log(first(colors));

// challange 2

console.log("challange 2")



function last(arr, n) {
    if (n === undefined){
        return arr.pop();
    }
    return arr.pop(n)
}

console.log(last(colors, 3));

// challange 3
console.log("challange 3")

function joinall(arr) {
    let newstring = "";
    for (let i = 0; i < arr.length; i++){
        newstring +=   `${arr[i]}, `;
    }
    return newstring;
}
console.log(joinall(colors));

// challange 4

console.log("challange 4")

let nums2 = [1, 2, 3, 4, 5];

function fill(arr) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i] + " -";
    }
    return arr;
}
console.log(fill(nums2));


// challange 5

console.log("challange 5")

function sorting(arr) {
    return arr.sort();
}

console.log(sorting(colors));


// challange 6

console.log("challange 6")

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