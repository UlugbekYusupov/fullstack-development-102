// 1. Elementlarni o'zgaruvchiga olamiz
const signupCard = document.getElementById('signup-card');
const loginCard = document.getElementById('login-card');

const btnToLogin = document.getElementById('go-to-login');
const btnToSignup = document.getElementById('go-to-signup');

// 2. "Already have an account? Login" bosilganda
btnToLogin.addEventListener('click', () => {
    signupCard.classList.add('hidden');    // Sign upni yashirish
    loginCard.classList.remove('hidden'); // Loginni ko'rsatish
});

// 3. "Don't have an account? Sign Up" bosilganda
btnToSignup.addEventListener('click', () => {
    loginCard.classList.add('hidden');     // Loginni yashirish
    signupCard.classList.remove('hidden'); // Sign upni ko'rsatish
});