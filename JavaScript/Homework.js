const consoleDiv = document.getElementById("consoleOutput");
const originalLog = console.log;
console.log = function (...messages) {
    originalLog.apply(console, messages);
    messages.forEach(msg => {
        consoleDiv.innerHTML += msg + "\n";
    });
};

// // 1
// console.log("5" + 5);       // "55" string 
// console.log("5" - 5);       // 0
// console.log("5" * "2");     // 10
// console.log("10" / 2);      // 5
// console.log(5 + true);      // 6
// console.log("10" - true);   // 9
// console.log("5" + true);    // "5true"
// console.log(5 + null);      // 5
// console.log(5 + undefined); // NaN

// // 2
// const num1 = Number("200") + 50;  //alternative one
// console.log(num1);       // Output: 250

// const age = 25;
// const num2 = age.toString() + " years old";
// console.log(num2);      // Output: 25 years old

// const stringFalse = "false";
// const num3 = Boolean(stringFalse);
// console.log(num3);      // Output: true

// console.log("10" - true); // Output: 9 // Because "10" is turned to 10 and true is 1, so 10 - 1 = 9

// // 3
// const cel = Number(prompt("Enter temp in Celsius: "));

// const fah = (cel * 9 / 5) + 32;

// console.log(`Celsius: ${cel}°C`);
// console.log(`Fahrenheit: ${fah}°F`);
// // What happens if change the const value: JS shows error, because Const cant be reassigned

// // 4
// let totalBudget = Number(prompt("Enter your total budget: "));

// const expense1 = Number(prompt("Enter expense 1: "));
// const expense2 = Number(prompt("Enter expense 2: "));
// const expense3 = Number(prompt("Enter expense 3: "));

// const Expenses = expense1 + expense2 + expense3;
// const remainingBudget = totalBudget - Expenses;

// if (remainingBudget < 0){
//     console.warn("Warning: You have overspent");
// }
// // Bonus:
// console.log(`Remaining Budget: $${remainingBudget.toFixed(2)}`);



//24.02.2026. Hw: Challenges 1-5
//1
// let n=prompt("Enter number:");
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }
// console.log("Even numbers count: " + even);
// console.log("Odd numbers count: " + odd);

// //2
// let num=prompt("Enter a number:");
// let result = 0;

// while (num > 0) {
//     let lastDigit = num % 10;
//     result = result * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log("Result: " + result);

// //3
// let number =prompt("Enter a number:");
// let largest = 0;

// while (number > 0){
//     let son = number % 10;
//     if (son>largest) { largest = son; }
//     number = Math.floor(number / 10);
// }
// console.log("Largest digit: " + largest);

// //4
// let nums= prompt("Enter a number:");
// let sum = 0;

// while (nums > 0){
//     let lastDigit= nums%10;
//     sum = sum+lastDigit;
//     nums= Math.floor(nums/10);
// }
// console.log("Sum of digits: " + sum);

// //5
// let numbers= prompt("Enter a number:");
// let count = 0;

// if (numbers===0){
//     count = 1;
// } else {
//     while (numbers > 0){
//         numbers = Math.floor(numbers / 10);
//         count++;
//     }
// }
// console.log("Total digits: " + count);


// // 27.02.2026. Hw: Challenges 1-7
// //1
// let num1 = 10;
// let num2 = 14;

// if (num1>num2) { console.log("The largest number is: " + num1); }
// else if (num2>num1) { console.log("The largest number is: " + num2); }
// else { console.log("Both numbers are equal."); }

// //2
// let a= 3;
// let b=-7;
// let c= 2;
// let product= a*b*c;

// if (product>0) { alert("The sign is +"); }
// else if (product<0) { alert("The sign is -"); } 
// else { alert("The sign is 0"); }

// //3
// let x = 0;
// let y = -1;
// let z = 4;
// let max, mid, min;

// if (x>=y && x>=z) {
//     max = x;
//     if (y >= z) {
//         mid = y;
//         min = z;
//     } else {
//         mid = z;
//         min = y;
//     }
// } else if (y>=x && y>=z) {
//     max = y;
//     if (x >= z) {
//         mid = x;
//         min = z;
//     } else {
//         mid = z;
//         min = x;
//     }
// } else {
//     max = z;
//     if (x >= y) {
//         mid = x;
//         min = y;
//     } else {
//         mid = y;
//         min = x;
//     }
// }
// alert(max+ ", " +mid+ ", " +min);

// //4
// for (let i= 0; i<=15; i++) {
//     if (i %2 ===0) { console.log(i + " is even"); }
//     else           { console.log(i + " is odd");  }
// }

// //5
// for (let i= 1; i<=100; i++) {
//     if (i %3 ===0 && i% 5 ===0) { console.log("FizzBuzz"); }
//     else if (i %3 ===0)  { console.log("Fizz"); }
//     else if (i %5 ===0)  { console.log("Buzz"); }
//     else{ console.log(i);}
// }

// //6
// for (let i= 100; i<= 999; i++) {
//     let num= i;
//     let sum= 0;

//     while (num>0) {
//         let digit = num % 10;
//         sum += digit ** 3;
//         num = Math.floor(num / 10);
//     }
//     if (sum===i){ console.log(i); }
// }

// //7
// let students = [
//     { name: "David",  marks: 80 },
//     { name: "Vinoth", marks: 77 },
//     { name: "Divya",  marks: 88 },
//     { name: "Ishitha",marks: 95 },
//     { name: "Thomas", marks: 68 }
// ];

// let total= 0;
// for (let i= 0; i< students.length; i++) { total += students[i].marks; }
// let average = total / students.length;
// console.log("Average Marks: " + average);

// let grade;
// if (average < 60) { grade= "F"; }
// else if (average <70) { grade= "D"; }
// else if (average <80) { grade= "C"; }
// else if (average <90) { grade= "B"; }
// else if (average<100) { grade= "A"; }
// console.log("Grade: " + grade);


// // 3.03.2026. Hw: Challenges 1-8
// //1
// function greet1(name){ return "Hello " + name; }
// function greet2(name){ return `Hello ${name}`; }
// const greet3= function(name){ return "Hello " + name; }
// const greet4= (name)=> { return `Hello ${name}`; };
// const greet5= (name)=> `Hello ${name}`;

// console.log(greet1("Arthur"));
// console.log(greet2("Violet"));
// console.log(greet3("Tyler"));
// console.log(greet4("Stephen"));
// console.log(greet5("Michael"));
// //2
// function isPrime(n){
//   if (n <= 1) return false;
//   for (let i= 2; i<= Math.sqrt(n); i++){ if (n% i=== 0) return false; }
//   return true;
// }
// console.log(isPrime(7));
// console.log(isPrime(10));

// //3
// function countDigits(n){
//   return Math.abs(n).toString().length;
// }
// console.log(countDigits(7352));

// //4
// function isPalindrome(n){
//   const str = n.toString();
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome(2002), isPalindrome(2107));

// //5
// function isArmstrong(n) {
//   const digits = n.toString().split("");
//   const power = digits.length;
//   let sum = 0;

//   for (let digit of digits){ sum+= Math.pow(Number(digit), power); }
//   return sum===n;
// }
// console.log(isArmstrong(153), isArmstrong(798));

// //6
// function createCounter(start) {
//   let count = start;
//   return {
//     increment(){ count++; },
//     decrement(){ count--; },
//     getCount (){ return count; }
//   };
// }
// const counter = createCounter(10);
// counter.increment();
// counter.increment();
// console.log(counter.getCount());
// counter.decrement();
// console.log(counter.getCount());

// //7
// function orderFood(name, address, food) {
//   return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;
// }
// console.log(orderFood("John", "21 Baker Street", "Pizza"));

// //8
// function lazyAdder(a){
//   return function(b){ return a + b; };
// }
// const add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));


// // 6.03.2026. Assignment: Challenges 1-8
// //1
// function total(price, quantity){
//   let discount = 0;
//   if (quantity>= 5){ discount= 0.20; }
//   else if (quantity>= 3){ discount= 0.10; }
//   const total= (price*quantity)*(1-discount);
//   return total.toFixed(2);
// }
// console.log(`Total for 6 items at $14 each: $${total(14, 6)}`);

// //2
// function checkPass(password) {
//   let requirementsMet = 0;

//   if (password.length >= 8) requirementsMet++;
//   if (/[A-Z]/.test(password)) requirementsMet++;
//   if (/[0-9]/.test(password)) requirementsMet++;
//   if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) requirementsMet++;
//   if (requirementsMet <= 2)  return "Weak"  ;
//   if (requirementsMet === 3) return "Medium";
//   if (requirementsMet === 4) return "Strong";
// }
// console.log(checkPass("Pass123!"));
// console.log(checkPass("password"));

// //3
// function withdraw(amount) {
//   if (amount% 10 !==0){ return "Error: Amount must be a multiple of $10."; }
//   const bills= [100, 50, 20, 10];
//   let remaining= amount;
//   let result= {};

//   bills.forEach(bill=> {
//     if (remaining >= bill) {
//       let count= Math.floor(remaining / bill);
//       result[`$${bill}`] = count;
//       remaining %= bill;
//     }
//   });
//   return result;
// }
// console.log(withdraw(130)); // { "$100": 1, "$20": 1, "$10": 1 }
// console.log(withdraw(135));

// //4
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// async function startTrafficLight() {
//   while (true){
//     console.log("Light: RED (Stop)");
//     await delay(5000);
//     console.log("Light: GREEN (Go)");
//     await delay(3000);
//     console.log("Light: YELLOW (Slow down)");
//     await delay(2000);
//   }
// }
// startTrafficLight();

// //5
// function password(pw) {
//   const rules = [
//     pw.length >= 8,
//     /[A-Z]/.test(pw),
//     /[0-9]/.test(pw),
//     /[!@#$%^&*]/.test(pw)
//   ];
//   const score = rules.filter(Boolean).length;

//   if (score <= 2) return "Weak";
//   if (score === 3) return "Medium";
//   return "Strong";
// }
// console.log(password("abc123"));    // Weak
// console.log(password("Abc12345"));  // Medium
// console.log(password("Abc12345!")); // Strong

// //6
// function bank(initialBalance) {
//   let balance = initialBalance;

//   return {
//     deposit: function(amount) {
//       balance += amount;
//       return `Deposited $${amount}. Current balance: $${balance}`;
//     },
//     withdraw: function(amount) {
//       if (amount > balance) {
//         return "Insufficient balance!";
//       }
//       balance -= amount;
//       return `Withdrew $${amount}. Current balance: $${balance}`;
//     },
//     viewBalance: function() {
//       return `Current balance: $${balance}`;
//     }
//   };
// }
// const myAccount = bank(100);
// console.log(myAccount.viewBalance());

// //7
// function mission(role) {
//   switch (role.toLowerCase()) {
//     case 'admin': return ["add", "edit", "delete", "view"];
//     case 'editor': return ["edit", "view"];
//     case 'viewer': return ["view"];
//     default: return "Role not recognized.";
//   }
// }
// const userRole = 'editor';
// console.log(`As an ${userRole}, you can: ${mission(userRole).join(', ')}`);

// //8
// function Tax(salary) {
//   let taxx = 0;

//   if (salary >= 50000)  { taxx = salary * 0.20; } 
//   else if(salary>=10000){ taxx = salary * 0.10; }
//   else { taxx = 0; }
//   return `For a salary of $${salary}, the tax is $${taxx}`;
// }
// console.log(Tax(60000));


// // 10.03.2026. HW: Challenges 1-9
// //1
// const first= (array, n)=> {
//   if (array==null) return void 0;
//   if (n==null) return array[0];
//   if (n<0) return array.slice(n);
//   return array.slice(0, n);
// };
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// //2
// const last=(array, n)=> {
//   if (array==null) return void 0;
//   if (n==null) return array[array.length - 1];
//   return array.slice(Math.max(array.length - n, 0));
// };
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// //3
// const myColor = ["Red", "Green", "White", "Black"];
// const result = myColor.join(",");
// console.log(result);

// //4
// const insertDashes = (num) => {
//   return num.toString().split('').join('-');
// };
// console.log(insertDashes(25468));

// //5
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort((a, b) => a - b);
// console.log(arr1.join(','));

// //6
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;

// for (let i= 0; i< arr1.length; i++) {
//   for (let j= i; j< arr1.length; j++) {
//     if (arr1[i] == arr1[j]) m++;
//     if (mf< m) {
//       mf=m;
//       item= arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(`${item} ( ${mf} times )`);

// //7
// const swapCase = (str) => {
//   return str.split('').map(char => {
//     if (char === char.toUpperCase()) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   }).join('');
// };
// console.log(swapCase('Eight-Handled Sword Divergent Sila Divine General mAHORAGA'));

// //8
// const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// const o = ["th", "st", "nd", "rd"];

// for (let i = 0; i < color.length; i++) {
//   let num = i + 1;
//   let suffix = (num <= 3) ? o[num] : o[0];
//   console.log(`${num}${suffix} choice is ${color[i].trim()}.`);
// }

// //9
// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];
// const sumArrays = (arr1, arr2) => {
//   const maxLength = Math.max(arr1.length, arr2.length);
//   const result = [];

//   for (let i = 0; i < maxLength; i++) {
//     const val1 = arr1[i] || 0;
//     const val2 = arr2[i] || 0;
//     result.push(val1 + val2);
//   }
//   return result;
// };
// console.log(sumArrays(array1, array2));


// // 27.03.2026. HW: Password Checking
const passwordInput = document.getElementById('passwordInput');
const strengthBadge = document.getElementById('strengthBadge');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    if (val.length === 0) {
        strengthBadge.className = 'badge hidden';
        return;
    }

    const hasLetters = /[a-zA-Z]/.test(val);
    const hasNumbers = /[0-9]/.test(val);
    const Mixed = hasLetters && hasNumbers;
    strengthBadge.classList.remove('hidden');

    if (val.length >= 8 && Mixed) {
        strengthBadge.textContent = 'Strong';
        strengthBadge.className = 'badge strong';
    } 
    else if (val.length >= 8 || (val.length > 5 && val.length < 8 && Mixed)) {
        strengthBadge.textContent = 'Medium';
        strengthBadge.className = 'badge medium';
    } 
    else {
        strengthBadge.textContent = 'Weak';
        strengthBadge.className = 'badge weak';
    }
});