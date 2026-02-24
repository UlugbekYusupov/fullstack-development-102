// Challange 1 
console.log("5" + 5);
console.log("5" - 5); 
console.log("5" * 2); 
console.log("10" / 5);
console.log(5 + true) 
console.log("10" - true)
console.log("5" + true)
console.log(5 + null)
console.log(5 + undefined)

// Challange 2
console.log(Number("200") + 50);
console.log(String(25) + " years old"); 
console.log(Boolean("false")); 
console.log("10" - true); 

// Challange 3
const c = 1;
const f = (c * 9 / 5) + 32;
console.log(c);
console.log(f);

const m = Number(prompt("Gradusni kiriting:"));
const n = (m * 9 / 5) + 32;
console.log(m);
console.log(n);

// Challange 4 
let budget = Number(prompt("Budjet:"));

const x1 = Number(prompt("1-xarajat:"));
const x2 = Number(prompt("2-xarajat:"));
const x3 = Number(prompt("3-xarajat:"));

const remaining = budget - (x1 + x2 + x3);

if (remaining < 0) {
  console.log("Overspent!");
} else {
  console.log(remaining.toFixed(2));
}

// Challange 5 
console.log(!!"false" == !!"true");        
console.log(0 || "JavaScript");            
console.log("" && 100);                    
console.log(null ?? "Fallback");           
console.log(undefined ?? "Default Value"); 

// Challange 6 
let a = "42";
let b = "3.14";
let v = "hello";
let d = false;
let e = null;

let sum = Number(a) + Number(b) + Number(d) + Number(e);
console.log(sum); 