/* ============================================================
   ANIME SHADOW - Advanced Search
   ============================================================ */

// داده‌های انیمه‌ها (می‌توانید به فایل JSON منتقل کنید)
const animeList = [
    { id: 'blackclover', title: 'بلک کلاور فصل ۲', genre: ['action', 'fantasy'], poster: 'blackclover.webp' },
    { id: 'otar', title: 'خاطرات یک عطار فصل سوم', genre: ['fantasy', 'adventure'], poster: 'otar.webp' },
    { id: 'avatar', title: 'آواتار هفت پناهگاه', genre: ['action', 'adventure'], poster: 'avatar.webp' },
    { id: 'jujutsu', title: 'جوجیتسو کایزن', genre: ['action', 'fantasy'], poster: 'jujutsu.webp' },
    { id: 'fireforce', title: 'نیروی آتش نشانی', genre: ['action'], poster: 'fireforce.webp' },
    { id: 'trigun', title: 'تریگان استارگیز', genre: ['action', 'sci-fi'], poster: 'trigun.webp' },
    { id: 'hells', title: 'بهشت جهنمیان', genre: ['action', 'fantasy'], poster: 'hells.webp' },
    { id: 'mha', title: 'آکادمی قهرمان من', genre: ['action'], poster: 'mha.webp' },
    { id: 'account', title: 'حساب کاربری از کار افتاده', genre: ['fantasy'], poster: 'account.webp' }
];

// جستجو و فیلتر
function searchAnime(query, genre, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filtered = animeList.filter(anime => {
        const matchQuery = anime.title.toLowerCase().includes(query.toLowerCase());
        const matchGenre = !genre || genre === 'all' || anime.genre.includes(genre);
        return matchQuery && matchGenre;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;padding:40px;">انیمه‌ای یافت نشد.</p>';
        return;
    }

    container.innerHTML = filtered.map(anime => `
        <article class="anime-card">
            <div class="anime-poster">
                <img src="assets/images/posters/${anime.poster}" alt="${anime.title}" loading="lazy">
            </div>
            <div class="anime-info">
                <h2>${anime.title}</h2>
                <p>ژانر: ${anime.genre.join('، ')}</p>
                <a href="pages/anime-single.html" class="btn-watch">مشاهده</a>
            </div>
        </article>
    `).join('');
}