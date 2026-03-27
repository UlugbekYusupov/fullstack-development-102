const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
    const password = passwordInput.value;

    let strength = 0;

    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;

    // Reset classes
    strengthText.className = "strength";

    if (password.length === 0) {
        strengthText.textContent = "";
        return;
    }

    if (strength <= 1) {
        strengthText.textContent = "Weak";
        strengthText.classList.add("weak");
    } 
    else if (strength === 2 || strength === 3) {
        strengthText.textContent = "Medium";
        strengthText.classList.add("medium");
    } 
    else {
        strengthText.textContent = "Strong";
        strengthText.classList.add("strong");
    }
}