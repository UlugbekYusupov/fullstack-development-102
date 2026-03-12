// task2
function checkPasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        return "Weak";
    } else if (score === 3) {
        return "Medium";
    } else {
        return "Strong";
    }
}

console.log(checkPasswordStrength("hello"));
console.log(checkPasswordStrength("helloWorld1"));
console.log(checkPasswordStrength("Hello@123"));


// task4
function trafficLight() {

    console.log("Red");

    setTimeout(function () {

        console.log("Green");

        setTimeout(function () {

            console.log("Yellow");

            setTimeout(trafficLight, 2000);

        }, 3000);

    }, 5000);
}

trafficLight();


// task5
let account = {
    balance: 100
};

account.balance += 50;
console.log("Deposit → Balance:", account.balance);

if (30 <= account.balance) {
    account.balance -= 30;
    console.log("Withdraw → Balance:", account.balance);
}

console.log("Current balance:", account.balance);


// task6
let role = "editor";
let action = "edit";

if (role === "admin") {

    if (action === "add" || action === "edit" || action === "delete") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }

}

else if (role === "editor") {

    if (action === "edit" || action === "view") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }

}

else if (role === "viewer") {

    if (action === "view") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }

}

else {
    console.log("Invalid role");
}


// task7
let income = 20000;
let tax;

if (income < 10000) {
    tax = 0;
}
else if (income < 50000) {
    tax = income * 0.10;
}
else {
    tax = income * 0.20;
}

console.log("Income:", income);
console.log("Tax:", tax);
