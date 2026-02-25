console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log("5" + true);
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log("5" + true);
console.log("10" + true);
console.log("5" + null);
console.log("5" + undefined);

// challange 1

function celsiusToFahrenheit(c) {
    const n = Number(c);
    if (Number.isNaN(n)) return null;
    return n * 9 / 5 + 32;
}

// challange 2

function budgetAnalysis(budget, exp1, exp2, exp3) {
    const b = Number(budget) || 0;
    const e1 = Number(exp1) || 0;
    const e2 = Number(exp2) || 0;
    const e3 = Number(exp3) || 0;
    const total = e1 + e2 + e3;
    const remaining = b - total;
    return { budget: b, total, remaining, canBuy: remaining > 0 };
}

// challange 3

function countOddEven(n) {
    // Count odd/even digits in the given number.
    let num = Math.abs(Math.floor(Number(n) || 0));

    if (num === 0) return { odd: 0, even: 1 };

    let odd = 0;
    let even = 0;

    while (num > 0) {
        const digit = num % 10;
        if (digit % 2 === 0) even += 1;
        else odd += 1;
        num = Math.floor(num / 10);
    }

    return { odd, even };
}

// challange 4

function reverseNumber(n) {
    let v = Math.abs(Math.floor(Number(n) || 0));
    if (v === 0) return "0";
    let rev = '';
    while (v > 0) {
        rev += v % 10;
        v = Math.floor(v / 10);
    }
    return rev;
}



// challange 5


function largestDigit(n) {
    let v = Math.abs(Math.floor(Number(n) || 0));
    if (v === 0) return 0;
    let largest = 0;
    while (v > 0) {
        const d = v % 10;
        if (d > largest) {
            largest = d;
            if (largest === 9) break; // early exit
        }
        v = Math.floor(v / 10);
    }
    return largest;
}


window.celsiusToFahrenheit = celsiusToFahrenheit;
window.budgetAnalysis = budgetAnalysis;
window.countOddEven = countOddEven;
window.reverseNumber = reverseNumber;
window.largestDigit = largestDigit;

// Example: keep a non-blocking demo log (no prompts)
console.log('Challenge functions loaded: celsiusToFahrenheit, budgetAnalysis, countOddEven, reverseNumber, largestDigit');
