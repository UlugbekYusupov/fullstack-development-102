const consoleDiv = document.getElementById("consoleOutput");
const originalLog = console.log;
console.log = function (...messages) {
    originalLog.apply(console, messages);
    messages.forEach(msg => {
        consoleDiv.innerHTML += msg + "\n";
    });
};

// 10.03.2026. Classwork: Challenges 1-4
let colors=["red","blue","green","yellow"];
console.log(colors);

//2
let nums= new Array(5);
console.log(nums.length);

let names= new Array("Jojo", " Dio");
console.log(names);

//3
let original=[1,2,3];
let copy=[...original];
console.log(copy);

let setToArray= [...new Set (["a","b","a","c"])];
console.log(setToArray);

//4
let numbs= Array.of(5);
console.log(numbs);