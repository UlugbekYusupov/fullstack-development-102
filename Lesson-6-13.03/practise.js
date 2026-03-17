//1

const students = [
 { name: "Alice", scores: [80,90,100] },
 { name: "Bob", scores: [50,60,70] },
 { name: "Charlie", scores: [30,40,20] }
];

function getAverage(scores){
 let sum = 0;

 for(let i = 0; i < scores.length; i++){
  sum += scores[i];
 }

 return sum / scores.length;
}

let topStudent = students[0]; 
let highest = getAverage(students[0].scores);

for(let i = 1; i < students.length; i++){

 let avg = getAverage(students[i].scores);

 if(avg > highest){
  highest = avg;
  topStudent = students[i];
 }
}

console.log(topStudent.name + " has the highest average: " + highest);

// 2

const cart = [
 { id: 1, name: "Laptop", price: 900, quantity: 1 },
 { id: 2, name: "Mouse", price: 50, quantity: 2 },
 { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].quantity;
}

if (total > 100) {
  total = total * 0.9;
}

let expensive = cart[0];

for (let i = 1; i < cart.length; i++) {
  if (cart[i].price > expensive.price) {
    expensive = cart[i];
  }
}

console.log("Total price:", total);
console.log("Most expensive:", expensive.name);

//3

const products = [
 { id: 1, name: "Laptop", price: 1200, stock: 10 },
 { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(product) {
  products.push(product);
}

function updateStock(id, newStock) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].stock = newStock;
    }
  }
}

function deleteProduct(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
    }
  }
}

function findProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return products[i];
    }
  }
}


addProduct({ id: 3, name: "Tablet", price: 500, stock: 8 });

updateStock(1, 5);

deleteProduct(2);

console.log(findProduct("Laptop"));
console.log(products);


//4

const posts = [
 { author: "Alice", likes: 100, comments: 20, shares: 5 },
 { author: "Bob", likes: 200, comments: 50, shares: 10 }
];

let mostLiked = posts[0];

for (let i = 1; i < posts.length; i++) {
  if (posts[i].likes > mostLiked.likes) {
    mostLiked = posts[i];
  }
}

let totalEngagement = 0;

for (let i = 0; i < posts.length; i++) {
  totalEngagement += posts[i].likes + posts[i].comments + posts[i].shares;
}

console.log("Most liked:", mostLiked.author);
console.log("Total engagement:", totalEngagement);

//5

const teams = [
 { name: "Team A", wins: 5, losses: 2, points: 15 },
 { name: "Team B", wins: 6, losses: 1, points: 18 }
];

let bestTeam = teams[0];

for (let i = 1; i < teams.length; i++) {
  if (teams[i].points > bestTeam.points) {
    bestTeam = teams[i];
  }
}

for (let i = 0; i < teams.length; i++) {
  for (let j = i + 1; j < teams.length; j++) {
    if (teams[j].points > teams[i].points) {
      let temp = teams[i];
      teams[i] = teams[j];
      teams[j] = temp;
    }
  }
}

console.log("Best team:", bestTeam.name);

for (let i = 0; i < teams.length; i++) {
  console.log((i + 1) + ". " + teams[i].name + " - " + teams[i].points);
}

//6

const inventory = [
 { itemName: "Laptop", category: "Electronics", stock: 5 },
 { itemName: "Phone", category: "Electronics", stock: 10 }
];

function totalStockByCategory(category) {
  let total = 0;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].category === category) {
      total += inventory[i].stock;
    }
  }

  return total;
}

function lowStockAlert() {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].stock < 6) {
      console.log(inventory[i].itemName + " is LOW stock!");
    }
  }
}

console.log(totalStockByCategory("Electronics"));

lowStockAlert();