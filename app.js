// // // // var a = undefined;

// // // // console.log(a);
// // // // let a = 20;

// // // // greet();

// // // // function greet() {
// // // //   console.log("hello");
// // // // }

// // // // console.log(Array())

// // // // Array.prototype.greet = function () {
// // // //   console.log("Arrayy prototypedan keyapdi");
// // // // };

// // // // Array().greet();

// // // console.log(5 === "5");

// // // console.log("Ulugbek" === "Ulugbek");

// // // const user = {
// // //   name: "Ulugbek",
// // // };

// // // const userr = user;

// // // console.log(user || userr);

// // // let number = prompt();

// // // for (let i = 1; i < number; i++) {

// // // }

// // // let number = prompt("Enter a number : ")

// // // i = 0

// // // while(number > 0){

// // //   let x = number % 10

// // // }

// // // for (let i = 0; i < 10; i++) {}

// // // let i = 0;
// // // while (i < 10) {
// // //   i++;
// // // }

// // // do {
// // //   i++;
// // // } while (i < 10);

// // // const user = {
// // //   name: "Ulugbek",
// // //   age: 20,
// // //   country: "Uzbekistan",
// // // };

// // // let keys = Object.keys(user);

// // // for (const key in user) {
// // //   const element = user[key];
// // //   console.log(element);
// // // }

// // // for (const element of keys) {
// // //   console.log(element);
// // // }

// // // keys.forEach(function (element) {});

// // // console.log(a);
// // // var a = 10;

// // // console.log(b);
// // // let b = 10;

// // // console.log(c);
// // // let c = 30;

// // // (function (a, b) {
// // //   console.log(a + b);
// // // })(4, 5);

// // let colors = ["Red", "Gree,", "Blue"];

// // console.log(colors);

// // let nums = new Array(5);
// // console.log(nums);

// // let names = new Array("bob", "alice");

// // console.log(names);

// // let original = [1, 2, 3];
// // let copy = [...original];

// // function test(...rest) {
// //   console.log(rest[0] + rest[1]);
// // }

// // test(1, 2);

// // let numbers = Array.of(4, 5);
// // console.log(numbers);

// // let numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.length);

// // console.log(numbers.push(8));

// // console.log(numbers);

// // console.log(numbers.pop());
// // console.log(numbers);

// // const array = [1, 4, 9, 16];
// // const mapped = array.map((x) => x * 2);
// // console.log(mapped);
// // console.log(array);

// // const words = ["spray", "elite", "exuberant", "destruction", "present"];
// // const result = words.filter((word) => word.length > 6);
// // console.log(result);

// // const arr = [1, 2, 3, 4];

// // const initialValue = 0;

// // const sumWithInitial = arr.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue,
// // );
// // console.log(sumWithInitial);

// // #Basic
// // const sports = ["swimming", "tennis", "footbal"]
// // const added = sports.push("badminton")
// // console.log(sports);
// // console.log(added);

// // const popped = sports.pop()
// // console.log(popped);
// // console.log(sports);

// // const shift = sports.shift()
// // console.log(shift);
// // console.log(sports);

// // const unshift = sports.unshift("volleball")
// // console.log(unshift);
// // console.log(sports);

// // map

// // let children = ["ali", "vali","g'ani" ]
// // let bek = children.map(name => name + "bek")
// // console.log(bek);

// // filter

// // let names = ["shoxrux" , "isoxon" , "ali"]
// // let lenght = names.filter(name => name.length === 3)
// // console.log(lenght);

// // reduce

// // let numbers = [200, 300 , 500]
// // let all = numbers.reduce((numbers,all) => all + numbers ,0)
// // console.log(all);

// // way 1  function declaration

// // let sum = (a, b) => {
// //   return a + b;
// // };
// // sum(2, 3);

// // // way 3 function expression

// // // let sum =

// // let words = ["daftar", "ruchka", "qalam"]
// // let tanlangan = words.splice(0,1 ,"kurushka")

// // console.log(words)

// // let numbers = [1,3,10,33,199];
// // let find = numbers.findIndex(x => x == 10);

// // console.log(find)

// // let fruits = ["apple", "cherry", "banana"];
// // let feuits2 = fruits.includes("bbb")

// // console.log(feuits2)

// // function first(arr,n){
// //     if (arr==null||arr==[]){return arr}
// //     if (n==null){return arr[0]}
// //     if (n<0){return n}

// //     return arr.slice(0,n)
// // }

// // console.log(first([7,9,0,-2]))
// // console.log(first([],3))
// // console.log(first([7,9,0,-2],6))
// // console.log(first([7,9,0,-2],-3))

// const students = [
//   { name: "Alica", score: [80, 90, 100] },
//   { name: "Bob", score: [50, 60, 70] },
//   { name: "Charlie", score: [30, 40, 20] },
// ];
// function avg() {
//   for (i = 0; i < students.length; i++) {
//     let score = students[i].score;
//     for (let j = 0; j < score.length; j++) {
//       let average = +score[j];
//       average = average / score.length;
//     }
//   }
// }

// const heading = document.getElementById("heading");
// const paragraph = document.getElementsByClassName("paragraph");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   heading.textContent = "This is heading from button click";
// });

// const buttons = document.querySelectorAll("button");

// heading.classList.add("heading");

// heading.innerHTML = "bu js dan kelgan text";
// heading.textContent = "bu js dan kelgan text";

// setTimeout(() => {
//   heading.classList.remove("heading");
// }, 2000);

// console.log(heading);
// console.log(paragraph);
// console.log(button);
// console.log(buttons);

// const newPara = document.createElement("p");
// newPara.textContent = "This is new paragraph";

// document.body.appendChild(newPara);

// setTimeout(() => {
//   document.body.removeChild(button);
// }, 2000);

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

child.addEventListener("click", function () {
  console.log("Child is clicked");
});

parent.addEventListener("click", function () {
  console.log("parent is clicked");
});

// grandparent.addEventListener("click", function () {
//   console.log("grandparent is clicked");
// });

const list = document.getElementById("list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(`Clicked: ${event.target.textContent}`);
  }
});
