document.addEventListener('DOMContentLoaded', () => {
    console.log('UISocial Loaded');

    const authForm = document.querySelector('.auth-form');

    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            console.log('Attempting login with:', email);

            // Simulating a loading state
            const btn = authForm.querySelector('.btn-primary');
            const originalText = btn.textContent;

            btn.textContent = 'Logging in...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.opacity = '1';
                alert('Login functionality would happen here!');
            }, 1000);
        });
    }

    // Interactive Language Selector (Mock)
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', () => {
            alert('Language selection clicked');
        });
    }
});
