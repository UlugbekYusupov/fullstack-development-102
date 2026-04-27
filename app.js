// const passwordinput = document.querySelector('#password')
// const result = document.getElementById("result")

// passwordinput.addEventListener("input",function(){
//     const password = passwordinput.value;

//     let strength = ""
//     let score = 0

//     if (password>=6) score ++;
//     if (password>=10) score++;

//     if(/[a-z]/.test(password)) score++
//     if(/[A-Z]/.test(password)) score++
//     if(/[0-9]/.test(password)) score++
//     if(/[@#$%^&*!]/.test(password)) score++

//     if (score<=2){
//         strength = 'Weak';
//         result.className = "weak"
//     }
//     else if(score<=4){
//         strength = 'Medium'
//         result.className = "medium"
//     }
//     else{
//         strength = 'Strong'
//         result.className = "strong"
//     }

//     result.textContent = strength
// })



// let data;

// setTimeout(() => {
//   data = "Malumot keldi";
// }, 2000);

// console.log(data);

// function getData(callback) {
//   setTimeout(() => {
//     let data = "Malumot keldi";
//     callback(data); // tugagach shu ishlaydi
//   }, 2000);
// }

// getData(function(result) {
//   console.log(result);
// });

function hisobla(a, b, amal) {
  return amal(a, b); // callback darrov ishlaydi
}

function qosh(x, y) {
  return x * y;
}
function qosh(x, y) {
  return x + y;
}
console.log(hisobla(3, 4, qosh));
console.log(hisobla(3, 4, qosh));