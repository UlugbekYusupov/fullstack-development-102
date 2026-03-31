const consoleDiv = document.getElementById("consoleOutput");
const originalLog = console.log;
console.log = function (...messages) {
    originalLog.apply(console, messages);
    messages.forEach(msg => {
        consoleDiv.innerHTML += msg + "\n";
    });
};

// // 10.03.2026. Classwork: Challenges 1-4
// let colors=["red","blue","green","yellow"];
// console.log(colors);

// //2
// let nums= new Array(5);
// console.log(nums.length);

// let names= new Array("Jojo", " Dio");
// console.log(names);

// //3
// let original=[1,2,3];
// let copy=[...original];
// console.log(copy);

// let setToArray= [...new Set (["a","b","a","c"])];
// console.log(setToArray);

// //4
// let numbs= Array.of(5);
// console.log(numbs, "\n");


// 13.03.2026. Classwork: Challenges 1-7
//1
let car={
    brand: "Lamborghini",
    model: "Aventador",
    year: 2025,
    start: () => console.log("Car is vrom vromming")
};
console.log(`${car.brand} ${car.model} `);
car.start();

//2
let person= new Object();
person.name= "Rick";
person.age = 69
person.greet= function() { return `Hello, my name is ${this.name}`; };
console.log(person.greet());

//3
function createPerson(name,age){
    return {
        name,
        age,
        greet() { return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`; }
    }
}
let person1= createPerson("Morty", 19);
let person2= createPerson("Teddy", 30);
console.log(person1.greet());
console.log(person2.greet());

// //4
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hi, I'm ${this.name}, and I'm ${this.age} ofc`;
//     };
// }
// let per1= new Person("Arthur", 40);
// let per2= new Person("Morgan", 30);
// console.log(per1.greet());
// console.log(per2.greet());

//5
let animal={
    type: "Mammal",
    makeSound() { 
        console.log("*Some generic animal sound*")
    }
};
let dog = Object.create(animal);
dog.breed="Golden Retriever";
dog.makeSound();
console.log(dog.type);

//6
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        return `Hello, my name is ${this.name}`;
    }
}
let pers1= new Person("Potter",21);
console.log(pers1.greet());

//7
const config= Object.freeze({
    theme: "dark",
    version: "1.0.0"
});
config.theme="light";
console.log(config.theme, "\n"); // dark