// Object literal

// const car = {
//   brand: 'Tesla',
//   model: 'MOdel S',
//   year: 2929
// }

// new Object() constructor

// const person = new Object()

// person.name = 'Alice'
// person.age = 37
// person.greet = function () {
//   return `Hello, my name is ${this.name} and i am ${this.age} years old`
// }

// Factory Function

// function createPerson (age, name) {
//   return {
//     age,
//     name,
//     greet () {
//       return `Hi, im ${this.name} and ${this.age} year's old`
//     }
//   }
// }

// let person1 = createPerson(98, 'granny')
// let person2 = createPerson(100, 'grandad')

// Constructor Function

// function Person(name, age) {
//   this.name = name
//   this.age = age
//   this.greet = function () {
//     return `Hello ${this.name}`
//   }
// }

// let person4 = new Person('someone', 38)

// Using Object.create(prototype)

// let animal = {
//   species: 'mammal',
//   makeSound() {
//     console.log('some generic sound');
//   }
// }

// let cat = Object.create(animal)

// cat.species

// ES6 Class

// class Pers0n {
//   constructor(name, age) {
//     this.name
//     this.age
//   }

//   greet() {
//     return `Hello ${this.name}`
//   }
// }

// let person7 = new Pers0n('namr', 8389)

// Challenge 1

// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70]},
//   { name: "Charlie", scores: [30, 40, 20]}
// ]

// const studentStats = students.map(student => {
//   const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
  
//   const average = totalScore / student.scores.length;
  
//   return {
//     name: student.name,
//     average: average,
//     passed: average >= 50
//   };
// });

// const topStudent = studentStats.reduce((top, current) => {
//   return (current.average > top.average) ? current : top;
// });

// console.log("Student Statistics:");
// console.table(studentStats);

// console.log("\nTop Performing Student:");
// console.log(`${topStudent.name} with an average of ${topStudent.average}`);

// Challenge 2

// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ];

// let totalPrice = 0;
// let mostExpensiveItem = cart[0]; // Start by assuming the first item is the most expensive

// for (let i = 0; i < cart.length; i++) {
//   let item = cart[i];
  
//   totalPrice += (item.price * item.quantity);
  
//   if (item.price > mostExpensiveItem.price) {
//     mostExpensiveItem = item; 
//   }
// }

// let finalPrice = totalPrice;
// if (totalPrice > 100) {
//   let discountAmount = totalPrice * 0.10; // Calculate 10%
//   finalPrice = totalPrice - discountAmount;
//   console.log(`A 10% discount of $${discountAmount} was applied!`);
// }

// console.log(`Original Total: $${totalPrice}`);
// console.log(`Final Price: $${finalPrice}`);
// console.log(`Most Expensive Single Item: ${mostExpensiveItem.name} ($${mostExpensiveItem.price})`);

// Challenge 3

// let products = [
//   { id: 1, name: "Laptop", price: 1200, stock: 10 },
//   { id: 2, name: "Phone", price: 700, stock: 15 },
// ];

// const addProduct = (newProduct) => {
//   products = [...products, newProduct];
//   console.log(`Added: ${newProduct.name}`);
// };

// const updateStock = (id, newStock) => {
//   products = products.map(product => {
//     if (product.id === id) {
//       return { ...product, stock: newStock }; // Create a new object with updated stock
//     }
//     return product;
//   });
//   console.log(`Updated stock for product ID: ${id} to ${newStock}`);
// };

// const deleteProduct = (id) => {
//   products = products.filter(product => product.id !== id);
//   console.log(`Deleted product ID: ${id}`);
// };

// const findProduct = (name) => {
//   const found = products.find(product => product.name.toLowerCase() === name.toLowerCase());
//   return found;
// };


// console.log("--- Initial Inventory ---");
// console.table(products);

// addProduct({ id: 3, name: "Tablet", price: 400, stock: 20 });
// updateStock(1, 5);
// deleteProduct(2); 

// console.log("\n--- Searching for 'tablet' ---");
// const searchResult = findProduct("tablet");
// console.log(searchResult);

// console.log("\n--- Final Inventory ---");
// console.table(products);

// Challenge 4

// const posts = [
//   { author: "Alice", likes: 100, comments: 20, shares: 5 },
//   { author: "Bob", likes: 200, comments: 50, shares: 10 },
// ];

// const getMostLikedPost = (postArray) => {
//   let topPost = postArray[0]; 
  
//   for (let i = 1; i < postArray.length; i++) {
//     if (postArray[i].likes > topPost.likes) {
//       topPost = postArray[i]; 
//   
//   return topPost;
// };
// }

// const getTotalEngagement = (postArray) => {
//   let total = 0;
  
//   for (let i = 0; i < postArray.length; i++) {
//     let post = postArray[i];
//     let postEngagement = post.likes + post.comments + post.shares;
//     total += postEngagement;
//   }
  
//   return total;
// };


// const mostLiked = getMostLikedPost(posts);
// console.log(`Most Liked Post: By ${mostLiked.author} with ${mostLiked.likes} likes`);

// const overallEngagement = getTotalEngagement(posts);
// console.log(`Total Engagement Across All Posts: ${overallEngagement}`);

// Challenge 5

// const teams = [
//   { name: "Team A", wins: 5, losses: 2, points: 15 },
//   { name: "Team B", wins: 6, losses: 1, points: 18 }
// ];

// const sortTeams = (teamArray) => {
//   let sortedArray = [...teamArray];
  
//   sortedArray.sort((team1, team2) => team2.points - team1.points);
  
//   return sortedArray;
// };

// const getBestTeam = (teamArray) => {
//   let bestTeam = teamArray[0]; // Start by assuming the first team is the best
  
//   for (let i = 1; i < teamArray.length; i++) {
//     if (teamArray[i].points > bestTeam.points) {
//       bestTeam = teamArray[i];
//     }
//   }
  
//   return bestTeam;
// };


// const rankedTeams = sortTeams(teams);
// console.log("Leaderboard Rankings:");
// console.table(rankedTeams);

// const champion = getBestTeam(teams);
// console.log(`\n Best Performing Team: ${champion.name} with ${champion.points} points!`);

// Challenge 6

const inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 },
];

function totalStockByCategory(categoryName) {
  let totalStock = 0;
  
  for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i];
    
    if (item.category === categoryName) {
      totalStock += item.stock;
    }
  }
  
  return totalStock;
}

function checkLowStock(alertThreshold) {
  console.log(`\n--- Low Stock Alerts (Fewer than ${alertThreshold} items) ---`);
  
  for (let i = 0; i < inventory.length; i++) {
    let item = inventory[i];
    
    if (item.stock < alertThreshold) {
      console.log(`ALERT: ${item.itemName} is running low! Only ${item.stock} left.`);
    }
  }
}


const electronicsTotal = totalStockByCategory("Electronics");
console.log(`Total stock for Electronics: ${electronicsTotal}`);

checkLowStock(8);