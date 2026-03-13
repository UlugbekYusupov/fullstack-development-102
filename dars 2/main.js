// homework
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

//3
// function countDigits(n){
//   return Math.abs(n).toString().length;
// }
// console.log(countDigits(7352));

//4
// function isPalindrome(n){
//   const str = n.toString();
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome(2002), isPalindrome(2107));

//5
// function isArmstrong(n) {
//   const digits = n.toString().split("");
//   const power = digits.length;
//   let sum = 0;

//   for (let digit of digits){ sum+= Math.pow(Number(digit), power); }
//   return sum===n;
// }
// console.log(isArmstrong(153), isArmstrong(798));

//6
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

//7
// function orderFood(name, address, food) {
//   return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;
// }
// console.log(orderFood("John", "21 Baker Street", "Pizza"));

//8
// function lazyAdder(a){
//   return function(b){ return a + b; };
// }
// const add5 = lazyAdder(5);
// console.log(add5(10));
// console.log(add5(20));


//  Assignment: Challenges 
//1
// function total(price, quantity){
//   let discount = 0;
//   if (quantity>= 5){ discount= 0.20; }
//   else if (quantity>= 3){ discount= 0.10; }
//   const total= (price*quantity)*(1-discount);
//   return total.toFixed(2);
// }
// console.log(`Total for 6 items at $14 each: $${total(14, 6)}`);

//2
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

//3
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

//4
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

//5
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

//6
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

//7
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

//8
function Tax(salary) {
  let taxx = 0;

  if (salary >= 50000)  { taxx = salary * 0.20; } 
  else if(salary>=10000){ taxx = salary * 0.10; }
  else { taxx = 0; }
  return `For a salary of $${salary}, the tax is $${taxx}`;
}
console.log(Tax(60000));
