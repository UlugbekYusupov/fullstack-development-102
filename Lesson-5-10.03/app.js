// let colors = ["red",'blue','green']
// console.log(colors);

// let setToArray = [...new Set(['a','b','c'])]
// console.log(setToArray);

//chelenge 1

numbers = [5,1,5,6,8,6]

function last(arr, n) {
    if (n == null) {
        return arr[arr.length - 1];
    }
    return arr.slice(Math.max(arr.length - n, 0));
}

console.log(last(numbers));

//chelenge 3

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join()); 

//ch4

function insertDash(num) {
    return num.toString().split("").join("-");
}

console.log(insertDash(25468)); 

//ch 5

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort(function(a, b) {
    return a - b;
});

console.log(arr1);




