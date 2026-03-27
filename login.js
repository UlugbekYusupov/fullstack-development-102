const switcherBtn = document.getElementById("switcherBtn");
const signBtn = document.getElementById("signBtn");
const heading = document.querySelector("h2");

const usernameLabel = document.getElementById("usernameLabel");
const usernameInput = document.getElementById("username");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

switcherBtn.addEventListener("click", function () {
  if (heading.textContent === "Sign up") {
    usernameLabel.classList.add("hidden");
    usernameInput.classList.add("hidden");

    heading.textContent = "Login";
    switcherBtn.value = "Don't have an account? Sign up";
    signBtn.value = "Login";
  } else {
    usernameLabel.classList.remove("hidden");
    usernameInput.classList.remove("hidden");

    heading.textContent = "Sign up";
    switcherBtn.value = "Already have an account? Login";
    signBtn.value = "Sign up";
  }
});

const users = [
  {
    id: Math.random(),
    username: "Kimdir",
    email: "kimdir@gmail.com",
    password: "Password123",
  },
];

signBtn.addEventListener("click", function () {
  if (heading.textContent === "Sign up") {
    const user = {
      id: Math.random(),
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    users.push(user);
    alert("User created");
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  } else {
    users.forEach(function (user) {
      if (
        emailInput.value === user.email &&
        passwordInput.value === user.password
      ) {
        alert("Log in successfull");
        return;
      } else {
        alert("Credentials incorrect");
      }
    });
  }
});