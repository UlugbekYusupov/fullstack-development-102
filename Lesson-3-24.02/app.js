//Chelenge 1
let number = Number(prompt("........"))

evencount = 0
oddcount = 0
for (let i = 0; i<=number; i++){
    if (i%2==0) {
        evencount++ 
    }
    else{
        oddcount++
    }
    
}
console.log(`even numbers ${evencount}`);
console.log(`odd numbers ${oddcount}`);

//Chelenge 2

let number2 = Number(prompt("..........."));

let reversed = 0;

while (number2 > 0) {
    let lastDigit = number2 % 10;        
    reversed = reversed * 10 + lastDigit; 
    number2 = Math.floor(number2 / 10);   
}

console.log("Reversed:", reversed);

//chelenge 3

let num = Number(prompt("Son kiriting:"));

let largest = 0;

while (num > 0) {
    let digit = num % 10;  

    if (digit > largest) {
        largest = digit;   
    }

    num = Math.floor(num / 10);  
}

console.log("Eng katta raqam:", largest);

//Chelenge 4

let num2 = Number(prompt("Son kiriting:"));

let sum = 0;

while (num2 > 0) {
    let digit = num2 % 10;   
    sum = sum + digit;      
    num2 = Math.floor(num2 / 10); 
}

console.log("Raqamlar yigindisi:", sum);

//Chelenge 5

let num3 = Number(prompt("Son kiriting"));

let count = 0;

if (num3 === 0) {
    count = 1;
} else {
    if (num3 < 0) {
        num3 = -num3;
    }

    while (num3 > 0) {
        num3 = Math.floor(num3 / 10); 
        count++;                    
    }
}

console.log("Xonalar soni:", count);