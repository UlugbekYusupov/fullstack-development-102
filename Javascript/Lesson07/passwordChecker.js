let passwordInput = document.getElementById("password");
let strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", function() {
    let password = passwordInput.value;
    let strength = "";

    if (password.length === 0) {
        strength = "";
        strengthText.className = "strength";
    } 
    else if (password.length < 6) {
        strength = "Weak";
        strengthText.className = "strength weak";
    } 
    else if (password.length < 10) {
        strength = "Medium";
        strengthText.className = "strength medium";
    } 
    else {
        strength = "Strong";
        strengthText.className = "strength strong";
    }

    strengthText.textContent = strength;
});