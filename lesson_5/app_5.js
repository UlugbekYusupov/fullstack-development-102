// Challenge 1 

function greet1(name) {
    return "Hello, " + name + "!";
}

console.log(greet1("Faxriddin"))

// challenge 2

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 

// challenge 3

function countDigits(n) {
    return n.toString().length;
}
console.log(countDigits(12345)); 

//chalenge 4

function isPalindrome(n) {
    let original = n.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}
console.log("4-misol (isPalindrome - 121):", isPalindrome(121)); 

// challenge 5

function isArmstrong(n) {
    let str = n.toString();
    let power = str.length;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Math.pow(parseInt(str[i]), power);
    }
    return sum === n;
}
console.log("5-misol (isArmstrong - 153):", isArmstrong(153)); 