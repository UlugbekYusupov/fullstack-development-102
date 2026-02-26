//Task 1
function countEvenOdd(n) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("Even numbers:", evenCount);
    console.log("Odd numbers:", oddCount);
}
countEvenOdd(10);

//Tassk 2

function reverseNumber(num) {
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;       
        reversed = reversed * 10 + digit; 
        num = Math.floor(num / 10); 
    }

    console.log("Reversed number:", reversed);
    return reversed;
}
reverseNumber(1234);

//Tsk 3
function largestDigit(num) {
    let largest = 0;

    while (num > 0) {
        let digit = num % 10;       
        if (digit > largest) {
            largest = digit;
        }
        num = Math.floor(num / 10); 
    }

    console.log("Largest digit:", largest);
    return largest;
}
largestDigit(58392);

//TAsk 4

function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;       
        sum += digit;               
        num = Math.floor(num / 10);
    }

    console.log("Raqamlar yig‘indisi:", sum);
    return sum;
}
sumOfDigits(1234);

//Task 5

function countDigits(num) {
    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10); 
        count++;                    
    }

    console.log("Raqamlar soni:", count);
    return count;
}
countDigits(12345);
