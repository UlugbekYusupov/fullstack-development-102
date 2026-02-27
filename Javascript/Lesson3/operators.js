// challange 1 
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
    console.log("Even numbers: " + evenCount);
    console.log("Odd numbers: " + oddCount);
}
console.log(countEvenOdd(12))

// challenge 2
function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(1234))

// challenge 3 
function largestDigit(num) {
    let max = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit > max) {
            max = digit;
        }
        num = Math.floor(num / 10);
    }
    return max;
}
console.log(largestDigit(253))

// challenge 4
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(sumDigits(12345))

// challenge 5
function countDigits(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(9876))