// Way 1
let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020,
    start: function(){
        console.log("Car is starting...");
        
    }
};
console.log(car.brand);
car.start()

//2

let person = new Object()
person.name = "Alice"
person.age = 25
person.greet = function() {
    return `Hello, my name is ${this.name}`
}

console.log(person.greet());

//3

function createPerson(name,age){
    return {
        name,
        age,
        greet(){
            return `Hi I'm ${this.name}, and I'm ${this.age} years old`
        }
    }
}

let person1 = createPerson("Alice",25)
let person2 = createPerson("Bob",28)
console.log(person1.greet());
console.log(person2.greet());

//4 

function Person(name,age){
    this.name = name
    this.age = age
    this.greet = function (){
        return `Hi I'm ${this.name}, I'm ${this.age} years old!`
    }
}

let person3 = new Person("Alice",25)
let person4 = new Person("Kate",90)

console.log(person3.greet());
console.log(person4.greet());

//5

let animal = {
    type: "Mammal",
    makeSound(){
        console.log("Some generic animal sound");
        
    }
}
let dog = Object.create(animal)
dog.breed = "Golden Retriever"
dog.makeSound()
console.log(dog.type);

// 6

class People{
    constructor(name,age){
        this.name = name
        this.age = age

    }
    greet(){
        return `Hello my name is ${this.name}`
    }
}

let person5 = new People("Odil",78)
console.log(person1.greet());


//7

const config = Object.freeze({
    theme: "dark",
    version: "1.0.0"
})

config.theme = "light"
console.log(config.theme);
