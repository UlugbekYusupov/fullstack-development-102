// Challenge 1 - 
const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

function getAverage(scores) {
  const sum = scores.reduce((acc, val) => acc + val, 0);
  return sum / scores.length;
}

students.forEach(student => {
  const avg = getAverage(student.scores);
  const status = avg >= 50 ? "Passed" : "Failed";
  console.log(`${student.name} average: ${avg}, ${status}`);
});

let topStudent = students[0];
let topAverage = getAverage(topStudent.scores);

students.forEach(student => {
  const avg = getAverage(student.scores);
  if (avg > topAverage) {
    topAverage = avg;
    topStudent = student;
  }
});
console.log(`${topStudent.name} has the highest average: ${topAverage}`);


// Challenge 2  
const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

function getTotal(cart) {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

let total = getTotal(cart);
if (total > 100) {
  total = total * 0.9; // 10% discount
}
console.log(`Total Price: $${total}`);

let mostExpensive = cart[0];
cart.forEach(item => {
  if (item.price > mostExpensive.price) {
    mostExpensive = item;
  }
});
console.log(`Most expensive item: ${mostExpensive.name} ($${mostExpensive.price})`);

// Challenge 3  
let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(product) {
  products.push(product);
}

function updateStock(id, newStock) {
  const product = products.find(p => p.id === id);
  if (product) product.stock = newStock;
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
}

function findProduct(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}

// Test functions
addProduct({ id: 3, name: "Tablet", price: 500, stock: 20 });
updateStock(2, 12);
deleteProduct(1);

console.log("Current Products:", products);
console.log("Find Product (Tablet):", findProduct("Tablet"));


// Challenge 4 
const posts = [
  { author: "Alice", likes: 100, comments: 20, shares: 5 },
  { author: "Bob", likes: 200, comments: 50, shares: 10 },
  { author: "Charlie", likes: 150, comments: 30, shares: 8 }
];

function mostLikedPost(posts) {
  return posts.reduce((max, post) => post.likes > max.likes ? post : max, posts[0]);
}

function totalEngagement(posts) {
  return posts.reduce((acc, post) => acc + post.likes + post.comments + post.shares, 0);
}

console.log("Most liked post:", mostLikedPost(posts));
console.log("Total engagement:", totalEngagement(posts));

// Challenge 5 
const teams = [
  { name: "Team A", wins: 5, losses: 2, points: 15, goalsScored: 12, goalsConceded: 8 },
  { name: "Team B", wins: 6, losses: 1, points: 18, goalsScored: 20, goalsConceded: 5 },
  { name: "Team C", wins: 4, losses: 3, points: 12, goalsScored: 15, goalsConceded: 10 }
];

function sortTeams(teams) {
  return teams.sort((a, b) => b.points - a.points);
}

function bestTeam(teams) {
  return teams.reduce((best, team) => team.points > best.points ? team : best, teams[0]);
}

console.log("Sorted Teams:", sortTeams([...teams]));
console.log("Best Team:", bestTeam(teams));


//task 6
Ё
const inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 },
  { itemName: "Chair", category: "Furniture", stock: 3 },
  { itemName: "Table", category: "Furniture", stock: 8 },
  { itemName: "Notebook", category: "Stationery", stock: 15 }
];


function totalStockByCategory(category) {
  return inventory
    .filter(item => item.category === category)
    .reduce((sum, item) => sum + item.stock, 0);
}

console.log("Electronics total:", totalStockByCategory("Electronics"));
console.log("Furniture total:", totalStockByCategory("Furniture"));
console.log("Stationery total:", totalStockByCategory("Stationery"));


function lowStockAlert(threshold) {
  return inventory.filter(item => item.stock < threshold);
}

console.log("Low stock items (<5):", lowStockAlert(5));

function stockSummary() {
  return inventory.reduce((summary, item) => {
    summary[item.category] = (summary[item.category] || 0) + item.stock;
    return summary;
  }, {});
}

console.log("Stock summary:", stockSummary());