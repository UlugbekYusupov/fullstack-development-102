
//task 1
console.log("5" + 5); 
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);


//Task 2
    console.log(Number("200") + 50);
    console.log(String(25) + " years old"); 
    console.log(Boolean("false")); 
    console.log("10" - true);


//Task 3
    const temp = 30
    let conventioner = (temp * 9/5) + 32
    console.log(conventioner) 



//task 4
    let totalBudget = prompt("Enter your total budget (e.g. 500.00):");
    totalBudget = Number(totalBudget);
    const expense1 = Number(prompt("Enter expense 1:"));
    const expense2 = Number(prompt("Enter expense 2:"));
    const expense3 = Number(prompt("Enter expense 3:"));
    const totalExpenses = expense1 + expense2 + expense3;
    const remaining = totalBudget - totalExpenses;
    console.log("Total budget :",totalBudget)
    console.log("you spent",expense1 , "first time")
    console.log("you spent",expense2 , "second time")
    console.log("you spent",expense3 , "third time")
    console.log("after spending you have : ",remaining)
    if (remaining < 0) {
        console.warn(`Overspent! You are over budget`);
    } 
    else {
        console.log("You're within budget.");
    }
