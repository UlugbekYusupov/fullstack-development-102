function greet() {
    return "Hello World"
}
console.log(greet());

let gret = function(){
    return "Hello World"
}
console.log(gret());

let salom = () => {
    console.log("hello World");
}

salom();
(function (){
    return "Hello world"
})();

//chelenge 2

function isPrime(a) {
    if (a== 2){
        return true
    }

    for(let i =2; i<a; i++){
        if(a%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(101));

function countDigits(n) {

    return Math.abs(n).toString().length;

}

console.log(countDigits(12345));
console.log(countDigits(98));

function isPalindrome(n) {

    let str = n.toString();
    let reversed = str.split("").reverse().join("");

    return str === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));

function isArmstrong(n) {

    let digits = n.toString().split("");
    let power = digits.length;

    let sum = 0;

    for (let digit of digits) {
        sum += Math.pow(Number(digit), power);
    }

    return sum === n;
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));

function createCounter(start) {

    let count = start;

    return {
        increment: function () {
            count++;
        },

        decrement: function () {
            count--;
        },

        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter(5);

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());

function orderFood(name, address, food) {

    return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;

}

//chelenge 8
console.log(orderFood("Ali", "Tashkent", "Pizza"));

function lazyAdder(a) {

    return function(b) {
        return a + b;
    };

}

const add5 = lazyAdder(5);

console.log(add5(10));
console.log(add5(20));

//assignment 1

function calculateTotal(price, quantity) {
    let total = price * quantity;

    if (quantity >= 5) {
        total = total * 0.8;
    } else if (quantity >= 3) {
        total = total * 0.9;   
    }

    return total;
}

console.log(calculateTotal(100, 2)); 
console.log(calculateTotal(100, 3)); 
console.log(calculateTotal(100, 5)); 

function checkPassword(password) {

    let hasUpper = /[A-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length >= 8 && hasUpper && hasNumber && hasSpecial) {
        return "Strong";
    } 
    else if (password.length >= 6 && (hasUpper || hasNumber)) {
        return "Medium";
    } 
    else {
        return "Weak";
    }
}

console.log(checkPassword("abc")); 
console.log(checkPassword("Abc123")); 
console.log(checkPassword("Abc123@#"));


function atmWithdraw(amount) {

    if (amount % 10 !== 0) {
        return "Error: amount must be multiple of 10";
    }

    let hundreds = Math.floor(amount / 100);
    amount %= 100;

    let twenties = Math.floor(amount / 20);
    amount %= 20;

    let tens = Math.floor(amount / 10);

    return {
        100: hundreds,
        20: twenties,
        10: tens
    };
}

console.log(atmWithdraw(130));

//assignment 4

function trafficLight() {

    console.log("Red Light");
    setTimeout(() => {

        console.log("Green Light");
        setTimeout(() => {

            console.log("Yellow Light");
            setTimeout(() => {
                trafficLight(); // cycle again
            }, 2000);

        }, 3000);

    }, 5000);
}

trafficLight();


//assignment 5


function passwordStrength(password) {

    let hasUpper = /[A-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length >= 8 && hasUpper && hasNumber && hasSpecial) {
        return "Strong";
    }

    if (password.length >= 6 && (hasUpper || hasNumber)) {
        return "Medium";
    }

    return "Weak";
}

console.log(passwordStrength("abc"));
console.log(passwordStrength("Abc123"));
console.log(passwordStrength("Abc123@"));