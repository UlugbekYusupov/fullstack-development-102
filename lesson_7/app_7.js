// Object Literal ({})


let car = {
    brand: "Tesla",
    model: "Model S",
    year:2024,
    start: function () {
        console.log("Car is starting...");
    }
};

console.log(car.brand);
car.start(); 


// Using new Object()

 let person = new Object();

person.name = "Alice";

person.age = 25;

person.greet = function () {

 return `Hello, my name is ${this.name}`;

};

console.log(person.greet()); 


// 3.  Factory Function

function createPerson (name, age) {
return {
    name,
    age,
    greet() {
    return ` Hi, I'm ${this.name}, and I'm ${this.age} years old`;
    }
  };
}

let person1 = createPerson("Alice", 25);

let person2 = createPerson("Bob", 30);

console.log(person1.greet()); 
console.log(person2.greet());



//  4 


let animal = {
    type: "Mammal",
    makeSound() {
console.log("Some generic animal sound");
    }
};

let dog = Object.create(animal);
dog.breed = "Golden Retriever";
dog.makeSound(); 
console.log(dog.type);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
    return `Hello, my name is ${this.name}`;
    }
}
let person3 = new Person("Alice", 25);
console.log(person3.greet()); 


// Practices

// 1

let topName = "", maxAvg = 0;

students.forEach(s => {
  let avg = s.scores.reduce((a, b) => a + b) / s.scores.length;
  
  console.log(`${s.name}: ${avg} (${avg >= 50 ? 'Passed' : 'Failed'})`);

  if (avg > maxAvg) {
    maxAvg = avg;
    topName = s.name;
  }
});

console.log(`${topName} has the highest average: ${maxAvg}`);


// practise 2

let total = 0;
let expensive = cart[0];

cart.forEach(item => {
  total += item.price * item.quantity;
  if (item.price > expensive.price) expensive = item;
});

if (total > 100) total *= 0.9;

console.log(`Total Price: $${total} (after discount)`);
console.log(`Most expensive item: ${expensive.name}`);


// practie 3

let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 }
];

const addProduct = (p) => products.push(p);

const updateStock = (id, stock) => {
  products = products.map(p => p.id === id ? { ...p, stock } : p);
};

const deleteProduct = (id) => {
  products = products.filter(p => p.id !== id);
};

const findProduct = (name) => products.find(p => p.name === name);

// Tekshirish:
addProduct({ id: 3, name: "Mouse", price: 25, stock: 50 });
updateStock(1, 8);
deleteProduct(2);

console.log(products);
console.log(findProduct("Mouse"));


// practise 4

const posts = [
  { author: "Alice", likes: 100, comments: 20, shares: 5 },
  { author: "Bob", likes: 200, comments: 50, shares: 10 }
];

const mostLiked = posts.reduce((prev, curr) => prev.likes > curr.likes ? prev : curr);

const totalEngagement = posts.reduce((sum, p) => sum + p.likes + p.comments + p.shares, 0);

console.log("Most Liked Post:", mostLiked);
console.log("Total Engagement:", totalEngagement);


// practise 5 

const teams = [
  { name: "Team A", wins: 5, losses: 2, points: 15 },
  { name: "Team B", wins: 6, losses: 1, points: 18 },
  { name: "Team C", wins: 4, losses: 3, points: 12 }
];

const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

const bestTeam = sortedTeams[0];

console.log("Ranked Teams:", sortedTeams);
console.log(`Best Team: ${bestTeam.name} with ${bestTeam.points} points`);

// practise 6

const inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 },
  { itemName: "Desk", category: "Furniture", stock: 2 }
];

const totalStockByCategory = (cat) => 
  inventory.filter(i => i.category === cat).reduce((sum, i) => sum + i.stock, 0);

const lowStockAlert = (limit) => 
  inventory.filter(i => i.stock < limit).map(i => `${i.itemName} kam qoldi!`);

console.log(`Electronics total: ${totalStockByCategory("Electronics")}`);
console.log(lowStockAlert(6));