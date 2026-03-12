// using array literals
let colors = ['red','green','blue']
console.log(colors);

// using new Array() 
let nums = Array.of(5);
console.log(nums)

let names = new Array('Alice','Bob');
console.log(names)

let original = [1,2,3];
let copy  = [...original];

let setToArray = [...new Set (['a','b','c'])];
console.log(setToArray)

let numbers = Array.of(5);
console.log(numbers);

// push 
let namees = ['Aziza','Muslima','Osiyo','Xadicha']
namees.push('Nozima')
console.log(names.length);

// pop 
let namess = ['Aziza','Muslima','Osiyo','Xadicha']
namess.pop()
console.log(namess);

// shift 
let ismlar = ['Aziza','Muslima','Osiyo','Xadicha']
ismlar.shift()
console.log(ismlar);

// unshift 
let ismlarr = ['Aziza','Muslima','Osiyo','Xadicha']
ismlarr.unshift()
console.log(ismlarr);

// map 
// let fruits = ['apple','nok','mandarin','apelsin','malina']
// fruits.map(console.log())

// filter 
let sonlar = [1,2,3,4,5,6];
let evenNumbers = sonlar.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce 
let scores = [78, 85, 90, 66];
let totalScore = scores.reduce((sum, score) => sum + score, 0);
console.log(totalScore);

// sort alifbo boyicha tartiblaydi
let cities = ['Paris','Tokyo','London','Dubai'];
cities.sort();
console.log(cities);

// reverse tartibini teskari qiladi
let days = ['Monday','Tuesday','Wednesday'];
days.reverse();
console.log(days);

// slice extracts part of an array
let months = ['Jan','Feb','Mar','Apr','May'];
let springMonths = months.slice(1,4);
console.log(springMonths);

// splice elementni oladi va qoshadi
let animals = ['cat','dog','rabbit','lion'];
animals.splice(2,1);
console.log(animals);

//find return the first matching element 
let temperatures = [12,18,25,30];
let hotDay = temperatures.find(temp => temp > 20);
console.log(hotDay);

// findindex returns the index of the first match 
let temperaturess = [12,18,25,30];
let index = temperaturess.findIndex(temp => temp > 20);
console.log(index);

// includes check if a value exist 
let languages = ['JavaScript','Python','Java'];
console.log(languages.includes('Python'));

