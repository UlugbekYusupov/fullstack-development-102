// var a = undefined;

// console.log(a);
// let a = 20;

// greet();

// function greet() {
//   console.log("hello");
// }

// console.log(Array())

// Array.prototype.greet = function () {
//   console.log("Arrayy prototypedan keyapdi");
// };

// Array().greet();


function challenge2(n) {
  let reversed = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  console.log("\nChallenge 2:");
  console.log("Reversed number:", reversed);
}

challenge2(1234);


function challenge3(n) {
  let largest = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    if (lastDigit > largest) {
      largest = lastDigit;
    }
    n = Math.floor(n / 10);
  }

  console.log("\nChallenge 3:");
  console.log("Largest digit:", largest);
}

challenge3(3947);


function challenge4(n) {
  let sum = 0;

  while (n > 0) {
    let lastDigit = n % 10;
    sum = sum + lastDigit;
    n = Math.floor(n / 10);
  }

  console.log("\nChallenge 4:");
  console.log("Sum of digits:", sum);
}

challenge4(1234);


function challenge5(n) {
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  console.log("\nChallenge 5:");
  console.log("Number of digits:", count);
}

challenge5(98765);
