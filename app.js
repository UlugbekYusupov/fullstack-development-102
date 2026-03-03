//Write a JavaScript program that displays the largest integer among two integers
let a = 5, b = 10;
if (a>b){
    console.log("A is the largest integer");
}
else {
    console.log("B is the largest integer");
}

///Write a JavaScript conditional statement to find the signed number in three numbers. 
// Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is –

let num = [3, -7, 2];
for (n of num){
    if (n < 0)
        console.log("-");
}

// Write a JavaScript conditional statement to sort three numbers. 
// Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

let num1 = [0, -1, 4];
num1.sort(function(a, b){return b-a});
console.log(num1);

// Write a JavaScript for loop that iterates from 0 to 15. 
// For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output : "0 is even”, "1 is odd”, "2 is even"
for(let i=0; i<=15; i++){
    if (i%2 ==0){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd");
    }
}

// 5.  Write a JavaScript program that iterates integers from 1 to 100. 
// For multiples of 3 print "Fizz" instead of the number 
// For multiples of 5 print "Buzz". 
// For numbers multiples of both 3 and 5 print "FizzBuzz".

fizz = [];
buzz = [];
fizzbuzz = [];
for(let i=1; i<=100; i++){
    if (i%3 == 0){
      fizz.push(i);
    }
    else if (i%5 == 0){
        buzz.push(i);
    }
    else if (i%3 == 0 && i%5 == 0){
        fizzbuzz.push(i);
    }
}

console.log("Fizz", fizz); 
console.log("Buzz", buzz);
console.log("FizzBuzz", fizzbuzz);

name = new Map();
name.set("David", 80);
name.set("Vinoth", 77);
name.set("Divya", 88);
name.set("Ishitha", 95);
name.set("Thomas", 68);

for (let [key, value] of name){
    if (value >= 90){
        console.log(key + " has grade A");
    }
    else if (value >= 80 && value < 90){
        console.log(key + " has grade B");
    }
    else if (value >= 70 && value < 80){
        console.log(key + " has grade C");
    }
    else if (value >= 60 && value < 70){
        console.log(key + " has grade D");
    }
    else{
        console.log(key + " has grade F");
    }
}
