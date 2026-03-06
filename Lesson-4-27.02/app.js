let n1 = 10;
let n2 = 25;
if (n1>n2){
    console.log(`${n1} is greater than ${n2}`);
}
else{
    console.log(`${n2} is greater than ${n1}`);
}


let num1 = 7;
let num2 = -3;
let num3 = -4;

negative = 0
if (num1<0){
    negative+=1
}
if (num2<0 ) {
    negative+=1
}
if (num3<0){
    negative+=1
}
else{
    alert("No - signed numbers!")
}
alert(negative)

numbers = [1,0,5,-8,8,2]

function sortNumber(arr) {
    arr.sort();
    console.log(arr);
}

sortNumber(numbers);

//cehelenge 4

for (let i = 1; i<=15;i++ ){
    if (i%2==0){
        console.log(`${i} 'even'`);
    }
    else{
        console.log(`${i} 'odd'`);
    }
}

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }

}

console.log("chelenge 6 :");

for (let num = 100; num <= 999; num++) {

    let a = Math.floor(num / 100);       
    let b = Math.floor((num % 100) / 10); 
    let c = num % 10;                     

    if (a*a*a + b*b*b + c*c*c === num) {
        console.log(num);
    }
}

//chelenge 7

let students = {
    david: 80,
    vinoth: 77,
    divya: 88,
    ishitha: 95,
    tomas: 68
};

for (let name in students) {

    let mark = students[name];
    let grade;

    if (mark < 60) {
        grade = "F";
    } else if (mark < 70) {
        grade = "D";
    } else if (mark < 80) {
        grade = "C";
    } else if (mark < 90) {
        grade = "B";
    } else {
        grade = "A";
    }

    console.log(name + " : " + grade);
}