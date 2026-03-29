const passwordInput = document.getElementById("password");
const button = document.getElementById("button");

passwordInput.addEventListener("input", function () {
  let points = 0;
  let hasLetter = false;
  let hasNumber = false;

  let value = passwordInput.value;

  for (let char of value) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      hasLetter = true;
    }
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  if (/[!@#$%^&*(),.?":{}_|<>\-]/.test(value)) {
    points++;
  }
  if (hasLetter) {
    points++;
  }
  if (hasNumber) {
    points++;
  }

  if (points === 1 || value.length <= 5) {
    button.style.backgroundColor= "red";
    button.style.color= "white";
    button.innerText = "Weak!";
  } else if (points === 2 || value.length <= 7) {
    button.style.backgroundColor= "yellow";
    button.style.color= "blue";
    button.innerText = "Medium!";
  } else {
    button.style.backgroundColor= "green";
    button.style.color= "white";
    button.innerText = "Strong!";
  }
});