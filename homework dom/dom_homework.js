const passwordInput = document.getElementById('password_input');
const strengthBadge = document.getElementById('strength_badge');

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    

    if (value.length === 0) {
        strengthBadge.className = 'badge hidden';
        strengthBadge.textContent = '';
        return;
    }


    strengthBadge.className = 'badge';

    if (value.length < 6) {
        strengthBadge.textContent = 'Weak';
        strengthBadge.classList.add('weak');
    } else if (value.length >= 6 && value.length < 8) {
        strengthBadge.textContent = 'Medium';
        strengthBadge.classList.add('medium');
    } else {
        strengthBadge.textContent = 'Strong';
        strengthBadge.classList.add('strong');
    }
});
