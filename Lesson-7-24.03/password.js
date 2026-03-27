const passwordInput = document.getElementById("password");
const result = document.getElementById("result");

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;

  let strength = "";
  let score = 0;

  if (password.length >= 6) score++;
  if (password.length >= 10) score++;

  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;

  if (/[0-9]/.test(password)) score++;

  
  if (/[@$!%*?&]/.test(password)) score++;

  if (score <= 2) {
    strength = "Weak";
    result.className = "weak";
  } else if (score <= 4) {
    strength = "Medium";
    result.className = "medium";
  } else {
    strength = "Strong";
    result.className = "strong";
  }

  result.textContent = strength;
});