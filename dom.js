const passwordInput = document.getElementById('password');
const strength = document.getElementById('strength');

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;

    let strengthValue = 'Weak';
    let strengthColor = 'red';

    if (value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value) && /[!@#$%^&*]/.test(value)) {
        strengthValue = 'Strong';
        strengthColor = 'green';

    } else if (value.length >= 6) {
        strengthValue = 'Medium';
        strengthColor = 'orange';
    }   
    else if (value.length == 0) {
        strengthValue = '';
        strengthColor = 'white';
    }
    strength.textContent = strengthValue;
    strength.style.backgroundColor = strengthColor;

});
