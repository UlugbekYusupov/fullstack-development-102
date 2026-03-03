//Task 1

function findLargest(num1,num2) {
    if(num1 > num2){
        console.log(num1 + "is larger than" + num2);
    }
    else if(num2 > num1){
        console.log(num2 + "is larger than" + num1);
    }
    else{
        console.log("Both numbers are equal");
    }
}
findLargest(200, 3455)

//Task 2

var num1 = 3
var num2 =-7
var num3 = 2

if (num1*num2*num3 > 0){
    alert("The sign is +")
}
else if (num1*num2*num3 < 0){
    alert("The sign is -")
}
else{
    alert("The product is zero")
}

//Task 3

var num1 = 0
var num2 = -1
var num3 = 4

if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        result = num1 + ", " + num2 + ", " + num3;
    } else {
        result = num1 + ", " + num3 + ", " + num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        result = num2 + ", " + num1 + ", " + num3;
    } else {
        result = num2 + ", " + num3 + ", " + num1;
    }
} else {
    if (num1 >= num2) {
        result = num3 + ", " + num1 + ", " + num2;
    } else {
        result = num3 + ", " + num2 + ", " + num1;
    }
}

alert("Sorted numbers: " + result);

//Task 4

for (var i = 0; i <= 15; i++){
    if (i % 2 === 0){
        console.log(i + "is even");
    }
    else{
        console.log(i +"is odd")
    }
}


//Task 5

for (let i = 1; i <= 100; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
} else if (i % 3 === 0) {
    console.log("Fizz");
} else if (i % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(i);
}
}

//Task 6

for (let num = 100; num <= 999; num++) {
    let digits = num.toString().split(""); 
    let sum = 0;

    for (let d of digits) {
    sum += Math.pow(parseInt(d), 3); 
    }

    if (sum === num) {
    console.log(num + " Armstrong soni");
    }
}

//TAsk 7


let students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];


let totalMarks = 0;
for (let s of students) {
    totalMarks += s.marks;
}
let average = totalMarks / students.length;


let grade;
if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else {
    grade = "A";
}

console.log("O‘rtacha ball:", average);
console.log("Bahosi:", grade);