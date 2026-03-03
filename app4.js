// let a=3
// let b=4
// if (a>b) {console.log(b);
// }
// else{
//     console.log(a);
// }

// let a = 3;
// let b = -7;
// let c = 2;

// let result = a * b * c;

// if (result > 0) {
//     console.log("The sign is +");
// } else {
//     console.log("The sign is -");
// }

// const a = Number(prompt("enter number"))
// const b = Number(prompt("enter number"))
// const c = Number(prompt("enter number"))
 
// if(a>b && b>c){
//     console.log(a,b,c);
// }
// if(b>a && a>c){
//     console.log(b,a,c);
// }
// if(a>c && c>b){
//     console.log(a,c,b);
// }
// if(b>c && c>a){
//     console.log(b,c,a);
// }
// if(c>a &&a>b){
//     console.log(c,a,b);
// }
// if(c>b && b>a){
//     console.log(c,b,a);
// }


// for (let i=0; i<16;i++){
//     if (i%2==0){
//         console.log(i, "is even");
//     }
//     else {
//         console.log(i, "is odd");
//     }
// }

// for(let i=0; i<101;i++){
//     if(i%3==0 && i%5==0){
//         console.log("fizbuz");
//     }
//     else if(i%3==0){
//         console.log("fiz");
//     }
//     else if(i%5==0){
//         console.log("buz");
//     }
//     console.log(i);
// }

// let a= 371
// let a1 = a%10
// let b = (a / 10 | 0) % 10
// let c = (a / 100) | 0
// a1 **= 3
// b **= 3
// c **= 3
// if (a1 + b + c != a) {
//     console.log("armstrong false");
// } else {
//     console.log("armstrong true");
// }

const david = 80
const vintoth = 77
const divya = 88
const ishitha = 95
const thomas = 68

const medium = (david + vintoth + divya + ishitha + thomas)/5
let grade;
if (medium<60){
    grade = "F"
}
else if (medium<70){
    grade = "D"
}
else if (medium<80){
    grade = "C"
}
else if (medium<90){
    grade = "B"
}
else if (medium<100){
    grade = "A"
}
console.log("Average: ", medium);
console.log("Average grade: " + grade);

