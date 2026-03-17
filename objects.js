let human = {
    name: "Abdumalik",
    age: 20,
    city: "Tashkent",
    country: "Uzbekistan",
    speak: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old. I live in ${this.city}, ${this.country}.`);
    }

}

document.getElementById("first").innerHTML = `My name is ${human.name} and I am ${human.age} years old. I live in ${human.city}, ${human.country}.`;

human.speak();


let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.color = "red";
car.run = function() {
    console.log(`The ${this.color} ${this.make} ${this.model} is running.`);
}

document.getElementById("second").innerHTML = `The ${car.color} ${car.make} ${car.model} is running.`;


function createperson(name, age){
    return {
        name,
        age,
        greet(){
            return `hi, i'm ${this.name} and i'am ${this.age} years old.`;
        }
    };
}

let person1 = createperson("alice", 25)

console.log(person1)

// CHALLANGE 1


const students  = [
    {name: "Alice", scores : [80, 90, 100]},
    {name: "Bob", scores : [50, 60, 70]},
    {name: "Charlie", scores : [30, 40, 20]}
]

for (let i = 0; i < students.length; i++){
    let average = 0;    
    for (let j = 0; j < students[i].scores.length; j++){
        average += students[i].scores[j] / students[i].scores.length
        if (average > topscore){
        topscore = average;
        topstudent = students[i].name;
    }
    }   console.log(`${students[i].name} average score is ${average}`)
   
    
        if (average >= 50){
            console.log(`${students[i].name} passed the exam.`)
        } 
          
}
console.log(topstudent, topscore)


// CHALLANGE 2


