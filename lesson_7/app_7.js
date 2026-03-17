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


