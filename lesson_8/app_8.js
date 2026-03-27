const passwordInput = document.getElementById('password');
const strengthBadge = document.getElementById('strength-badge');

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    
    // Agar input bo'sh bo'lsa, badgeni yashiramiz
    if (value.length === 0) {
        strengthBadge.style.display = 'none';
        return;
    } else {
        strengthBadge.style.display = 'inline-block';
    }

    let strength = '';
    let className = '';

    // Parol kuchini tekshirish algoritmi
    if (value.length <= 6) {
        strength = 'Weak';
        className = 'weak';
    } else if (value.length > 6 && value.length < 10) {
        strength = 'Medium';
        className = 'medium';
    } else {
        strength = 'Strong';
        className = 'strong';
    }

    // DOM ni yangilash
    strengthBadge.textContent = strength;
    strengthBadge.className = className; // Oldingi klassni o'chirib yangisini qo'shadi
});