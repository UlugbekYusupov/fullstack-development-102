
// object literal
let car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2024,
    start: function(){
        console.log("Car is starting...");
    }
};
console.log(car.brand);
car.start();

// new Object
let person = new Object ();
person.name = 'Alice';
person.age = 25;
person.greet =  function (){
    return 'Hello, my name is ${this.name}';
};
console.log(person.greet());

// factory function
function createPerson(name,age){
    return {
        name,
        age,
        greet() {
            return "Hi, I'm ${this.age}, and I'm ${this.age} years old." ;
        }
    };
}
let person1 = createPerson("Alice", 25);
let person2 = createPerson("Bob", 30);
console.log(person1.greet());
console.log(person2.greet());

// constructor function 
function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        return "hi, I'm ${this.name}, and I'm ${this.age} years old. ";
    };
}
let individ1 = new Person("Alice", 25);
let individ2 = createPerson("Bob", 30);
console.log(individ1.greet());
console.log(individ2.greet());

// Object.create prototype
let  animal = {
    type: 'Mammal',
    makeSound(){
        console.log("Some generical animal sound ");        
    }
};
let dog = Object.create(animal);
dog.bread = 'Golden Retriever';
dog.makeSound();
console.log(dog.type);

// ES6 class 
class Individ {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return "Hi, my name is ${This.name}";
    }
}
let personal1 = new Person("Alice", 25);
console.log(personal1.greet());

// object freeze
const config = Object.freeze({
    theme: 'dark',

    version: "1.0.0"
});
config.theme = 'light';
console.log(config.theme);

// PRACTICE
// array jingalak qavs boladi , object tortburchak
// const students = [
//     {name: "Alice", scores: [80,90,100]},
//     {name: "Bob", scores: [50,60,70]},
//     {name: "Charlie", scores: [30,40,20]}
// ]
 
// let total = 0 
// for(let student of students){
//     total +=student.score
// }

// let average 

// task2
const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

let total = 0;
let mostExpensive = cart[0];

// total price
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].quantity;

  //expensive item
  if (cart[i].price > mostExpensive.price) {
    mostExpensive = cart[i];
  }
}

//apply discount
if (total > 100) {
  total = total * 0.10; 
}

// Output
console.log("Total Price: $" + total);
console.log("Most expensive item: " + mostExpensive.name);


// task3
let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 }
];

//add product
function addProduct(product) {
  products.push(product);
}

//update stock
function updateStock(id, newStock) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].stock = newStock;
    }
  }
}

//delete product
function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
}

// find product
function findProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return products[i];
    }
  }
  return "Not found";
}


// task4
const posts = [
    {author: 'Alice',likes: 100, comments: 20, shares: 5 },
    {author: 'Bob', likes: 200, comments: 50, shares: 10 },
];

let total1 = 0
let mostLiked = posts[0]

//liked post
function mostLikedPost(posts) {
  let top = posts[0];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].likes > top.likes) {
      top = posts[i];
    }
  }

  return top;
}

//total engagement
function totalEngagement(posts) {
  let total = 0;

  for (let i = 0; i < posts.length; i++) {
    total += posts[i].likes + posts[i].comments + posts[i].shares;
  }

  return total;
}
console.log(mostLikedPost(posts));
console.log("Total engagement:", totalEngagement(posts));


// task5
const teams = [
  { name: "Team A", wins: 5, losses: 2, points: 15 },
  { name: "Team B", wins: 6, losses: 1, points: 18 }
];

// ➤ Sort teams by ranking (points DESC)
function sortTeams(teams) {
  return teams.sort((a, b) => b.points - a.points);
}

//best team
function bestTeam(teams) {
  let best = teams[0];

  for (let i = 0; i < teams.length; i++) {
    if (teams[i].points > best.points) {
      best = teams[i];
    }
  }

  return best;
}

console.log(sortTeams(teams));
console.log("Best team:", bestTeam(teams));

