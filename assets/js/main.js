/* ============================================================
   ANIME SHADOW - Main JavaScript
   ============================================================ */

// ============================================================
// ۱. منوی موبایل
// ============================================================
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    mobileNav.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('mobileOverlay');
    mobileNav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================================
// ۲. مودال ورود / ثبت‌نام
// ============================================================
let authMode = 'login'; // 'login' یا 'register'

function openAuthModal(mode) {
    authMode = mode;
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    const submitBtn = document.getElementById('authSubmitBtn');
    const switchText = document.getElementById('authSwitch');

    if (mode === 'login') {
        title.textContent = 'ورود';
        submitBtn.textContent = 'ورود';
        switchText.innerHTML = 'حساب ندارید؟ <a onclick="switchAuthMode()">ثبت‌نام کنید</a>';
    } else {
        title.textContent = 'ثبت‌نام';
        submitBtn.textContent = 'ثبت‌نام';
        switchText.innerHTML = 'حساب دارید؟ <a onclick="switchAuthMode()">وارد شوید</a>';
    }

    document.getElementById('authForm').reset();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthMode() {
    if (authMode === 'login') {
        openAuthModal('register');
    } else {
        openAuthModal('login');
    }
}

// بستن مودال با کلیک بیرون
window.addEventListener('click', function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeAuthModal();
    }
});

// بستن با Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAuthModal();
        closeMobileMenu();
    }
});

// ============================================================
// ۳. سیستم اشتراکی (ثبت‌نام، ورود، خروج)
// ============================================================
// ساختار داده در localStorage:
// users: [{ username, password }]
// currentUser: { username }

function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

function setCurrentUser(user) {
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        localStorage.removeItem('currentUser');
    }
    updateUIForUser();
}

function handleAuth(event) {
    event.preventDefault();
    const username = document.getElementById('authUsername').value.trim();
    const password = document.getElementById('authPassword').value.trim();

    if (!username || !password) {
        showMessage('لطفاً نام کاربری و رمز عبور را وارد کنید.', 'error');
        return;
    }

    if (username.length < 3) {
        showMessage('نام کاربری باید حداقل ۳ کاراکتر باشد.', 'error');
        return;
    }

    if (password.length < 4) {
        showMessage('رمز عبور باید حداقل ۴ کاراکتر باشد.', 'error');
        return;
    }

    const users = getUsers();

    if (authMode === 'register') {
        // بررسی وجود کاربر
        if (users.find(u => u.username === username)) {
            showMessage('این نام کاربری قبلاً ثبت شده است.', 'error');
            return;
        }
        users.push({ username, password });
        saveUsers(users);
        setCurrentUser({ username });
        showMessage('ثبت‌نام با موفقیت انجام شد! خوش آمدید.', 'success');
        closeAuthModal();
    } else {
        // ورود
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            showMessage('نام کاربری یا رمز عبور اشتباه است.', 'error');
            return;
        }
        setCurrentUser({ username: user.username });
        showMessage('با موفقیت وارد شدید!', 'success');
        closeAuthModal();
    }
}

function logout() {
    setCurrentUser(null);
    showMessage('با موفقیت خارج شدید.', 'success');
}

function updateUIForUser() {
    const user = getCurrentUser();
    const authButtons = document.getElementById('authButtons');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');

    if (user) {
        authButtons.style.display = 'none';
        userInfo.classList.add('visible');
        userName.textContent = user.username;
    } else {
        authButtons.style.display = 'flex';
        userInfo.classList.remove('visible');
        userName.textContent = '';
    }
}

// ============================================================
// ۴. نمایش پیام (اختیاری - به جای alert)
// ============================================================
function showMessage(message, type = 'success') {
    // ساخت یک باکس پیام موقت
    const msgBox = document.createElement('div');
    msgBox.textContent = message;
    msgBox.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#ff4a4a' : 'linear-gradient(135deg, #4a6fa5, #6a4a8a)'};
        color: white;
        padding: 12px 25px;
        border-radius: 8px;
        font-family: 'Vazirmatn', sans-serif;
        font-size: 14px;
        z-index: 2000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        animation: slideDown 0.3s ease;
    `;
    document.body.appendChild(msgBox);

    setTimeout(() => {
        msgBox.style.opacity = '0';
        msgBox.style.transition = 'opacity 0.3s';
        setTimeout(() => msgBox.remove(), 300);
    }, 3000);
}

// ============================================================
// ۵. راه‌اندازی اولیه
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    updateUIForUser();
});