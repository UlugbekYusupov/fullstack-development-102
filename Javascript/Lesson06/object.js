// // Object literal {}
// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2024,
//     start: function(){
//         console.log("Car is starting...");
//     }
// };
// console.log(car.brand);
// car.start();

// // using new Object()
// let person = new Object();
// person.name = "Alice";
// person.age = 25
// person.greet = function() {
//     return `Hello my name is ${this.name}`;
// };
// console.log(person.greet());

// // factory function 
// function createPerson(name,age) {
//     return {
//         name,
//         age, 
//         greet() {
//             return `Hi, ${this.name}, and I am ${this.age} years old.`;
//         }
//     };
// }
// let person1 = createPerson("Alice", 25)
// let person2 = createPerson("Ali", 20)   
// console.log(person1.greet);
// console.log(person2.greet);

// // Counstrustor function 
// function Person5 (name,age) {
//     this.name = name;
//     this.age = age;
//     this.greet1 =function() {
//         return `Hi i am ${this.name}, and i am ${this.age} years old`;
//     };
// }
// let person3 = new Person5("Alice", 26);
// let person4 = new Person5("Mirzo", 18);
// console.log(person3.greet1());
// console.log(person4.greet1());

// // object.create(prototype)
// let animal = {
//     type: "Mammal",
//     makeSound() {
//         console.log("Some generic animal sound");
//     }
// };
// let dog = Object.create(animal);
// dog,breed = "Golden Retriver";
// dog.makeSound();
// console.log(dog.type);

// // using ES6 class
// class Person8 {
//     constructor1(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet2() {
//         return `Hello my name is ${this.name}`;
//     }
// }
// let person6 = new Person8("Alice", 28);
// console.log(person6.greet2());

// // singleton object 
// const config  = Object.freeze({
//     theme: "dark",
//     version: "1.0.0",
// });
// config.theme = "Light";
// console.log(config.theme);


// Challenges 

// Challenge 1
let students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

let topScore = 0;
let topStudent = "";
for (let student of students) {
  let sum = 0;
  for (let score of student.scores) {
    sum = sum + score; 
  }

  let avg = sum / student.scores.length;
  let status; 

  if (avg >= 50) {
    status = "Passed"; 
  } else {
    status = "Failed"; 
  }

  console.log(student.name + " Average: " + avg + " Status: " + status);

  if (avg > topScore) {
    topScore = avg;
    topStudent = student.name;
  }
}

console.log("The top student is: " + topStudent);

// Challenge 2 
let cart = [
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "HDMI Cable", price: 10, quantity: 3 }
];

let total = 0;
let expensiveItem = cart[0];

for (let item of cart) {
  total += item.price * item.quantity;

  if (item.price > expensiveItem.price) {
    expensiveItem = item;
  }
}

if (total > 100) {
  total = total * 0.9;
}

console.log("Total Bill: $" + total);
console.log("Most Expensive: " + expensiveItem.name);

// Challenge 3
let inventory = [
  { id: 101, name: "Phone", price: 500, stock: 10 },
  { id: 102, name: "Tablet", price: 300, stock: 5 }
];

function addProduct(id, name, price, stock) {
  inventory.push({ id, name, price, stock });
}

function updateStock(id, newStock) {
  for (let prod of inventory) {
    if (prod.id === id) {
      prod.stock = newStock;
    }
  }
}

function deleteProduct(id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      inventory.splice(i, 1);
    }
  }
}

addProduct(103, "Watch", 150, 20);
updateStock(101, 8);
deleteProduct(102);
console.log(inventory);

// Challenge 4 
let posts = [
  { author: "John", likes: 50, comments: 10, shares: 2 },
  { author: "Sara", likes: 120, comments: 30, shares: 15 }
];

let mostLiked = posts[0];
let totalEngagement = 0;

for (let post of posts) {
  if (post.likes > mostLiked.likes) {
    mostLiked = post;
  }
  totalEngagement += post.likes + post.comments + post.shares;
}

console.log("Most Liked Author: " + mostLiked.author);
console.log("Total Engagement: " + totalEngagement);

// Challenge 5 
let teams = [
  { name: "Tigers", points: 12 },
  { name: "Lions", points: 18 },
  { name: "Eagles", points: 15 }
];

teams.sort((a, b) => b.points - a.points);

console.log("Rankings:", teams);
console.log("Best Team: " + teams[0].name);

// Chellenge 6 
let warehouse = [
  { itemName: "Hammer", category: "Tools", stock: 10 },
  { itemName: "Drill", category: "Tools", stock: 2 },
  { itemName: "Screw", category: "Hardware", stock: 50 }
];

let toolStock = 0;
let hardwareStock = 0;

for (let item of warehouse) {
  if (item.category === "Tools") {
    toolStock += item.stock;
  } else if (item.category === "Hardware") {
    hardwareStock += item.stock;
  }

  if (item.stock < 5) {
    console.log("ALERT: Low stock on " + item.itemName);
  }
}

console.log("Total Tools:", toolStock);
console.log("Total Hardware:", hardwareStock);