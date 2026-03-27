// // #1
// console.log("5" + 5)
// console.log("5" - 5)
// console.log("5" * 2)
// console.log("10" / 2)
// console.log(5 + true)
// console.log("10" - true)
// console.log("5" + true)
// console.log(5 + null)
// console.log(5 + undefined)

// // #2
// console.log(200 + 50)
// console.log(25 + "years old")
// console.log(Boolean("false"))
// console.log("10" - true)

// // #3
// const celsius = 30
// const fahrenheit = (celsius * 9/5) + 32
// console.log("Celsius:", celsius)
// console.log("Fahrenheit:", fahrenheit)

// const celsius = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log(`Celsius: celsius`);
// console.log(`Fahrenheit: fahrenheit`);

// // var a = undefined;

// // console.log(a);
// // let a = 20;

// // greet();

// // function greet() {
// //   console.log("hello");
// // }

// // console.log(Array())

// // Array.prototype.greet = function () {
// //   console.log("Arrayy prototypedan keyapdi");
// // };

// // Array().greet();

// console.log(5 === "5");

// console.log("Ulugbek" === "Ulugbek");

// const user = {
//   name: "Ulugbek",
// };

// const userr = user;

// console.log(user || userr);

// let number = prompt();

// for (let i = 1; i < number; i++) {

// }

// let number = prompt("Enter a number : ")

// i = 0

// while(number > 0){

//   let x = number % 10

// }

// for (let i = 0; i < 10; i++) {}

// let i = 0;
// while (i < 10) {
//   i++;
// }

// do {
//   i++;
// } while (i < 10);

// const user = {
//   name: "Ulugbek",
//   age: 20,
//   country: "Uzbekistan",
// };

// let keys = Object.keys(user);

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// for (const element of keys) {
//   console.log(element);
// }

// keys.forEach(function (element) {});z


// // ----------lesson 5----------
// // Practice
// // #1
// function greet1(name){
//     return "Hello, " + name + "!";
// };
// console.log(greet1("Shirin"))

// let greet2 = function(name) {
//     return "Hello, " + name + "!";
// };
// console.log(greet2("Shirin"))

// let greet3 = (name) => {
//     return "Hello, " + name + "!";
// };
// console.log(greet3("Shirin"))

// let greet4 = name => "Hello, " + name + "!";
// console.log(greet4("Shirin"))

// let greet5 = function(name) {
//     return `Hello, ${name}!`;
// };
// console.log(greet5("Shirin"))

// // #2
// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(11)); // true
// console.log(isPrime(-1)); // false

// // #3
// function countDigits(n) {
//     return Math.abs(n).toString().length;
// }
// console.log(countDigits(12345)); // 5

// // #4
// function isPalindrome(n) {
//     const str = n.toString();
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false

// // #5
// function isArmstrong(n) {
//     const digits = n.toString().split("");
//     const power = digits.length;

//     const sum = digits.reduce((acc, digit) => {
//         return acc + Math.pow(Number(digit), power);
//     }, 0);

//     return sum === n;
// }
// console.log(isArmstrong(153)); // true
// console.log(isArmstrong(123)); // false

// // #6
// function createCounter(start) {
//     let count = start;

//     return {
//         increment() {
//             count++;
//         },
//         decrement() {
//             count--;
//         },
//     getCount() {
//         return count;
//         }
//     };
// }
// const counter = createCounter(15);

// counter.increment();
// counter.decrement();
// console.log(counter.getCount()); // 15

// // #7
// function orderFood(name, address, food) {
//     return `Dear ${name}, your ordered food ${food} will be ready in 15 minutes and will be delivered to your address ${address}`;
// }
// console.log(orderFood("Safina", "Tashkent, Yunusabad", "Xanim"));

// // #8
// function lazyAdder(a) {
//     return function(b) {
//     return a + b;
//     };
// }
// const add5 = lazyAdder(5);

// console.log(add5(10)); // 15
// console.log(add5(20)); // 25

// // #Assignment
//         // Challange 1 
//         function calculateTotal(prices) {
//             const itemCount = prices.length;
//             let total = prices.reduce((sum, price) => sum + price, 0);
    
//             if (itemCount >= 5) {
//                 total *= 0.8; 
//             } else if (itemCount >= 3) {
//                 total *= 0.9; 
//             }
    
//             return total;
//         }

//         console.log(calculateTotal([10, 20, 30]));        
//         console.log(calculateTotal([5, 15, 25, 35, 45])); 

//         // Challenge 2 
//         function checkPasswordStrength(password) {
//             const hasLength = password.length >= 8;
//             const hasUpper = /[A-Z]/.test(password);
//             const hasNumber = /[0-9]/.test(password);
//             const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

//             const conditionsMet = [hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

//             if (!hasLength) return "Weak";
//             if (conditionsMet === 3) return "Strong";
//             if (conditionsMet === 2) return "Medium";
//             return "Weak";
//         }

//         console.log(checkPasswordStrength("Pass123!"));    
//         console.log(checkPasswordStrength("password"));    
//         console.log(checkPasswordStrength("Password1"));

//         //Challenge 4
//         function trafficLightSimulation() {
//             const lights = [
//                 { color: 'Red', duration: 5000 },
//                 { color: 'Green', duration: 3000 },
//                 { color: 'Yellow', duration: 2000 }
//             ];

//             let index = 0;

//             function showLight() {
//                 const current = lights[index];
//                 console.log(current.color);

//                 index = (index + 1) % lights.length;
//                 setTimeout(showLight, current.duration);
//             }

//             showLight();
//         }

//         trafficLightSimulation();
        

//         // Challenge 6 
//         function bankAccount(initialBalance = 0) {
//             let balance = initialBalance;  

//             return {
//                 deposit(amount) {
//                     if (amount > 0) {
//                         balance += amount;
//                         console.log(`Deposited $${amount}. New balance: $${balance}`);
//                     } else {
//                         console.log('Deposit amount must be positive');
//                     }
//                 },
//                 withdraw(amount) {
//                     if (amount > 0 && amount <= balance) {
//                         balance -= amount;
//                         console.log(`Withdrew $${amount}. New balance: $${balance}`);
//                     } else {
//                         console.log('Insufficient funds or invalid amount');
//                     }
//                 },
//                 getBalance() {
//                     return balance;
//                 }
//             };
//         }

//         const myAccount = bankAccount(100);
//         myAccount.deposit(50);   
//         myAccount.withdraw(30);  
//         console.log(myAccount.getBalance());  


//         // Challenge 8 
//         function calculateTax(income) {
//             if (income < 0) return 0;

//             let tax = 0;

//             if (income > 50000) {
//                 tax += (income - 50000) * 0.20;
//                 income = 50000;
//             }
//             if (income > 10000) {
//                 tax += (income - 10000) * 0.10;
//             }
    
//             return tax;
//         }

//         console.log(calculateTax(5000)); 
//         console.log(calculateTax(30000));  
//         console.log(calculateTax(75000)); 


// // #Lecture6
// let colors = ["Red", "Green", "Blue"];
// console.log(colors); // ["Red", "Green", "Blue"]

// let nums = new Array(5); // Creates an empty array of length 5
// console.log(nums.length); // 5 (Empty slots)

// let names = new Array("Alice", "Bob");
// console.log(names); // ["Alice", "Bob"]

// let original = [1, 2, 3];
// let copy = [...original]
// console.log(copy); // [1, 2, 3]

// let setToArray = [...new Set(["a", "b", "c"])];
// console.log(setToArray); // ["a", "b", "c"]

// let numbers = Array.of(5, 4); // Creates [5], NOT an empty array
// console.log(numbers); // [5]

// // #Basic methods
// const sports = ["soccer", "baseball"];
// const total = sports.push("football", "swimming");
// console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
// console.log(total); // 4

// const sports1 = ["swimming", "badminton", "table tennis"]
// const removedLast = sports1.pop()
// console.log(removedLast);
// console.log(sports1);

// const sports2 = ["swimming", "tennis", "football", "chess"]
// const removedFirst = sports2.shift()
// console.log(removedFirst);
// console.log(sports2);

// const sports3 = ["ballet", "volleyball", "tennis"]
// const addedFirst = sports3.unshift("badminton")
// console.log(addedFirst);
// console.log(sports3);

// // #Transform method
// const array = [4, 9, 16, 25]
// const mapped = array.map((x) => x * 2)
// console.log(mapped);
// // const array1 = [4, 9, 16, 25]
// // const mapped1 = array1.map((x) => Math.sqrt(x))
// // console.log(mapped1);

// const fruits = ["banana", "orange", "apricot", "lemon", "strawberry"]
// const result = fruits.filter((word) => word.length > 6)
// console.log(result);

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.x,
//     0,
// );
// console.log(sum); // 6
// const nums1 = [1, 2, 3, 4, 5]
// const multiplication = nums1.reduce(
//     (num, currentValue) => num * currentValue, 1,
// );
// console.log(multiplication);

// // #Sorting methods
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);

// const array2 = [-5, -10, -2, 30, 21, 100];
// array2.sort((a,b) => a - b);
// console.log(array2);

// const items = [1, 2, 3];
// items.reverse();
// console.log(items); // [3, 2, 1]

// const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits1.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

// const myFish1 = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish1.splice(2, 0, "drum");
// // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// // removed is [], no elements removed

// const array3 = [5, 12, 8, 130, 44];
// const found = array3.find((element) => element > 10);
// console.log(found);
// // Expected output: 12

// const array4 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array4.findIndex(isLargeNumber));
// // Expected output: 3

// const array5 = [1, 2, 3];
// console.log(array5.includes(2));
// // Expected output: true
// const pets = ["cat", "dog", "bat"];
// console.log(pets.includes("cat"));
// // Expected output: true
// console.log(pets.includes("at"));
// // Expected output: false

// // #Practice
// // #1
// function first(arr, n) {
//     if (arr == null || arr.length === 0) return [];
//     if (n == null) {
//     return arr[0]; 
//     }
//     if (n < 0) {
//     return n;
//     }
//     return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2]));        
// console.log(first([], 3));                
// console.log(first([7, 9, 0, -2], 3));     
// console.log(first([7, 9, 0, -2], 6));     
// console.log(first([7, 9, 0, -2], -3));   

// // #2
// function last(arr, n) {
//     if (arr == null || arr.length === 0) return [];
//     if (n == null) {
//     return arr[arr.length - 1];
//     }
//     return arr.slice(Math.max(arr.length - n, 0));
// }

// console.log(last([7, 9, 0, -2]));      
// console.log(last([7, 9, 0, -2], 3));  
// console.log(last([7, 9, 0, -2], 6));  

// // #3
// let myColor = ["Red", "Green", "White", "Black"];
// let result = myColor.join(",");
// console.log(result);

// // #4

// // #5
// const nums = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// nums.sort((a,b) => a - b)
// console.log(nums);

// // #6
// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// function mostFrequent(arr) {
//     let count = {};
//     let maxItem;
//     let maxCount = 0;
//     for (let item of arr) {
//         count[item] = (count[item] || 0) + 1;

//         if (count[item] > maxCount) {
//             maxCount = count[item];
//             maxItem = item;
//         }
//     }
//     return maxItem + " ( " + maxCount + " times )";
// }
// console.log(mostFrequent(arr1));

// // #7
// function swapCase(str) {
//     let result = "";
//     for (let char of str) {
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }

//     return result;
// }
// console.log(swapCase("The Quick Brown Fox"));

// // #8
// var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// var o = ["th","st","nd","rd"];

// for (let i = 0; i < color.length; i++) {
//     let ordinal;

//     if (i === 0) {
//         ordinal = o[1]; 
//     } else if (i === 1) {
//         ordinal = o[2]; 
//     } else if (i === 2) {
//         ordinal = o[3]; 
//     } else {
//         ordinal = o[0]; 
//     }
// console.log((i + 1) + ordinal + " choice is " + color[i] + ".");
// }

// // #9
// var array1 = [1,0,2,3,4];
// var array2 = [3,5,6,7,8,13];
// function sumArrays(arr1, arr2) {
//     let result = [];
//     let maxLength = Math.max(arr1.length, arr2.length);
//     for (let i = 0; i < maxLength; i++) {
//         let val1 = arr1[i] || 0;
//         let val2 = arr2[i] || 0;
//         result.push(val1 + val2);
//     }
//     return result;
// }
// console.log(sumArrays(array1, array2));


// // ----------lesson 6----------
// // 1
// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2024,
//     start: function () {
//         console.log("Car is starting...");
//     }
// };
// console.log(car.brand); 
// car.start(); 

// // 2
// let person = new Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function () {
//     return `Hello, my name is ${this.name}`;
// };

// console.log(person.greet());

// // 3
// function createPerson(name,age) {
//     return {
//         name,
//         age,
//         greet () {
//             return `Hi I'm ${this.name}, and I'm ${this.age} years old`;
//         }
//     };
// }
// let person1 = createPerson("Alice",25);
// let person2 = createPerson("Bob",30);
// console.log(person1.greet());
// console.log(person2.greet());

// // 4
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hi I'm ${this.name}, and I'm ${this.age} years old`; 
//     };
// }
// let person3 = new Person("Alice",25);
// let person4 = new Person("Bob",30);
// console.log(person3.greet());
// console.log(person4.greet());

// // 5
// let animal = {
//     type: "Mammal",
//     makeSound() {
//         console.log("Some generic animal sound");
//     }
// };
// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";
// dog.makeSound();
// console.log(dog.type);

// // 6
// class Person1{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// }
// let person5 = new Person1("Alice", 25);
// console.log(person5.greet());

// // 7
// const config= Object.freeze({
//     theme:"dark",
//     version:"1.0.0"
// });
// config.theme = "light";
// console.log(config.theme);

// // #Practice
// // 1
// const students=[
//     {name: "Alice", scores:[80,90,100]},
//     {name: "Bob", scores:[50,60,70]},
//     {name: "Alice", scores:[30,40,20]}

// ]
// let avg=[]
// for(let i=0; i<students.length; i++){
//     let sum=students[i].scores.reduce(function(prev,next){
//         return prev+next;
//     })
//     let eachEvg=sum/students[i].scores.length
//     avg.push(eachEvg);
// }
// avg.sort();
// console.log(`The result is ${Math.max(...avg)}`);

// // 2
// const cart=[
//     {id:1,name:"Laptop",price:900, quantity:1},
//     {id:2,name:"Mouse",price:50, quantity:2},
//     {id:3,name:"keyboard",price:100, quantity:1},
// ]
// let total=0
// for(let i=0; i<cart.length; i++){
//     let eachTotal=cart[i].price*cart[i].quantity
//     if (eachTotal>100){
//         eachTotal+=eachTotal*0.1
//         total+=eachTotal
//     }
// }
// console.log(`the result is $${total}`)
// // 4
// let posts = [
//     { author: "Ali", likes: 50, comments: 10, shares: 5 },
//     { author: "Vali", likes: 120, comments: 20, shares: 10 },
//     { author: "Hasan", likes: 80, comments: 15, shares: 8 }
// ];

// let mostLiked = posts[0];

// for (let i = 1; i < posts.length; i++) {
//     if (posts[i].likes > mostLiked.likes) {
//         mostLiked = posts[i];
//     }
// }

// console.log("Most liked post:", mostLiked);

// let engagement = 0;

// for (let i = 0; i < posts.length; i++) {
//     engagement += posts[i].likes + posts[i].comments + posts[i].shares;
// }
// console.log("Total engagement:", engagement);

// // 5
// let teams = [
//     { name: "Team A", wins: 10, losses: 2, points: 30 },
//     { name: "Team B", wins: 8, losses: 4, points: 24 },
//     { name: "Team C", wins: 12, losses: 1, points: 36 }
// ];

// teams.sort(function(a, b) {
//     return b.points - a.points;
// });

// console.log(teams);

// let bestTeam = teams[0];

// console.log("Best team:", bestTeam.name);

// // 6
// const inventory=[
//     {itemName:"Laptop", category:"Electronics",  stock:5},
//     {itemName:"Phone", category:"Electronics",  stock:10},
// ]
// function findTotalByCategory(category){
//     return inventory
//     .filter((item)=> item.category===category)
//     .reduce((sum,item)=>sum+item.stock,0);
    
// }
// console.log(findTotalByCategory("Electronics"));