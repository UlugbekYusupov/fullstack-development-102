let number = Number(prompt("Enter a number:"));
let reversed = 0;

while (number > 0) {
    let digit = number % 10;     
    reversed = reversed * 10 + digit;
    number = Math.floor(number / 10); 
}

console.log(reversed);


let nums = Number(prompt("Enter a number:"));
let largest = 0;

while (nums > 0) {
    let digit = nums % 10; 

    if (digit > largest) {    
        largest = digit;
    }

    nums = Math.floor(nums / 10); 
}

console.log("Largest digit is:", largest);


let number1 = Number(prompt("Enter a number:"));
let sum = 0;

while (number1 > 0) {
    let digit = number1 % 10;  
    sum = sum + digit;        
    number1 = Math.floor(number1 / 10); 
}

console.log("Sum of digits:", sum);


let number2 = Number(prompt("Enter a number:"));
let count = 0;

while (number2 > 0) {
    number2 = Math.floor(number2 / 10); 
    count = count + 1;              
}

console.log("Total digits:", count);

