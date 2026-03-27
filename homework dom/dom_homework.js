const passwordInput = document.getElementById('password_input');
const strengthBadge = document.getElementById('strength_badge');

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    
    // Agar input bo'sh bo'lsa, badgeni yashiramiz
    if (value.length === 0) {
        strengthBadge.className = 'badge hidden';
        strengthBadge.textContent = '';
        return;
    }

    // Default holatga qaytaramiz o'zgarishdan oldin
    strengthBadge.className = 'badge';

    // Parol uzunligiga qarab kuchini aniqlash:
    // < 6: Weak (Kuchsiz)
    // 6 dan 7 gacha: Medium (O'rtacha)
    // 8 dan yuqori: Strong (Kuchli)
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
