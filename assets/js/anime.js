/* ============================================================
   ANIME SHADOW - Anime Favorites System
   ============================================================ */

// ذخیره انیمه در علاقه‌مندی‌ها
function toggleFavorite(animeId, animeTitle, animePoster) {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) {
        showMessage('برای ذخیره علاقه‌مندی‌ها ابتدا وارد شوید.', 'error');
        return;
    }

    const favoritesKey = `favorites_${user.username}`;
    let favorites = JSON.parse(localStorage.getItem(favoritesKey) || '[]');
    
    const existingIndex = favorites.findIndex(f => f.id === animeId);
    
    if (existingIndex > -1) {
        favorites.splice(existingIndex, 1);
        showMessage('از علاقه‌مندی‌ها حذف شد.', 'success');
    } else {
        favorites.push({ id: animeId, title: animeTitle, poster: animePoster });
        showMessage('به علاقه‌مندی‌ها اضافه شد.', 'success');
    }
    
    localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    updateFavoriteButtons();
}

// بررسی اینکه آیا انیمه در علاقه‌مندی‌ها هست یا نه
function isFavorite(animeId) {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) return false;
    
    const favoritesKey = `favorites_${user.username}`;
    const favorites = JSON.parse(localStorage.getItem(favoritesKey) || '[]');
    return favorites.some(f => f.id === animeId);
}

// به‌روزرسانی ظاهر دکمه‌های علاقه‌مندی
function updateFavoriteButtons() {
    document.querySelectorAll('[data-favorite-id]').forEach(btn => {
        const animeId = btn.dataset.favoriteId;
        if (isFavorite(animeId)) {
            btn.textContent = '❤️';
            btn.title = 'حذف از علاقه‌مندی‌ها';
        } else {
            btn.textContent = '🤍';
            btn.title = 'افزودن به علاقه‌مندی‌ها';
        }
    });
}

// بارگذاری اولیه
document.addEventListener('DOMContentLoaded', updateFavoriteButtons);