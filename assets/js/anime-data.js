/* ============================================================
   ANIME SHADOW - Anime Database
   ============================================================ */

   const animeDatabase = {
    'blackclover': {
        title: 'بلک کلاور فصل ۲',
        poster: 'assets/images/posters/blackclover.webp',
        description: 'داستان از جایی شروع می‌شود که شوالیه‌های جادویی به پادشاهی اسپید نفوذ می‌کنند تا فرمانده یامی و ویلیام را که اسیر شده‌اند نجات دهند. شوالیه‌ها به سه گروه تقسیم می‌شوند و هر گروه با یکی از اعضای «مثلث سیاه» روبرو می‌شود.',
        genre: ['اکشن', 'فانتزی', 'ماجراجویی'],
        year: '۲۰۲۵',
        status: 'در حال پخش',
        episodes: [
            { title: 'قسمت ۱: شروع ماجرا', link: '#' },
            { title: 'قسمت ۲: نبرد در تاریکی', link: '#' },
            { title: 'قسمت ۳: راز مثلث سیاه', link: '#' }
        ]
    },
    'otar': {
        title: 'خاطرات یک عطار فصل سوم',
        poster: 'assets/images/posters/otar.webp',
        description: 'پس از شورش خاندان شی، اوضاع سرانجام آرام می‌شود و مائومائو به زندگی قبلی‌اش به‌عنوان داروساز در محلهٔ تفریحات بازمی‌گردد. اما یک روز، صبحانه‌ای که در خانهٔ وردیگریس سرو می‌شود، توجه مائومائو را به خود جلب می‌کند و او شروع به تحقیق دربارهٔ حقیقت ماجرا می‌کند.',
        genre: ['فانتزی', 'ماجراجویی'],
        year: '۲۰۲۵',
        status: 'در حال پخش',
        episodes: [
            { title: 'قسمت ۱: بازگشت', link: '#' },
            { title: 'قسمت ۲: صبحانه مرموز', link: '#' }
        ]
    },
    'avatar': {
        title: 'آواتار هفت پناهگاه',
        poster: 'assets/images/posters/avatar.webp',
        description: 'داستان این سری از آواتار درباره دو خواهر دوقلو است که آواتاران بعد از کورا هستند و باید تعادل دنیا را حفظ کنند.',
        genre: ['اکشن', 'ماجراجویی'],
        year: '۲۰۲۴',
        status: 'پایان‌یافته',
        episodes: [
            { title: 'قسمت ۱: تولد قهرمان', link: '#' },
            { title: 'قسمت ۲: سفر آغاز می‌شود', link: '#' }
        ]
    },
    'jujutsu': {
        title: 'جوجیتسو کایزن',
        poster: 'assets/images/posters/jujutsu.webp',
        description: 'داستان نوجوانی که برای نجات دوستانش به دنیای جادوگران می‌پیوندد و با نفرین‌ها مبارزه می‌کند.',
        genre: ['اکشن', 'فانتزی'],
        year: '۲۰۲۵',
        status: 'در حال پخش',
        episodes: [
            { title: 'قسمت ۱: نفرین', link: '#' },
            { title: 'قسمت ۲: مدرسه جادو', link: '#' }
        ]
    },
    'fireforce': {
        title: 'نیروی آتش نشانی',
        poster: 'assets/images/posters/fireforce.webp',
        description: 'داستان آتش‌نشانانی که با موجودات آتشین مبارزه می‌کنند.',
        genre: ['اکشن', 'فانتزی'],
        year: '۲۰۲۴',
        status: 'پایان‌یافته',
        episodes: [
            { title: 'قسمت ۱: شعله‌های جهنم', link: '#' },
            { title: 'قسمت ۲: نبرد آتش', link: '#' }
        ]
    },
    'trigun': {
        title: 'تریگان استارگیز',
        poster: 'assets/images/posters/trigun.webp',
        description: 'داستان یک تفنگدار افسانه‌ای در سیاره‌ای خشک و بیابانی.',
        genre: ['اکشن', 'علمی-تخیلی'],
        year: '۲۰۲۳',
        status: 'پایان‌یافته',
        episodes: [
            { title: 'قسمت ۱: تفنگدار', link: '#' },
            { title: 'قسمت ۲: شکارچی', link: '#' }
        ]
    },
    'hells': {
        title: 'بهشت جهنمیان',
        poster: 'assets/images/posters/hells.webp',
        description: 'داستان شمشیرزنان و شیاطین در دنیایی تاریک.',
        genre: ['اکشن', 'فانتزی'],
        year: '۲۰۲۴',
        status: 'در حال پخش',
        episodes: [
            { title: 'قسمت ۱: شمشیر سرنوشت', link: '#' },
            { title: 'قسمت ۲: شیطان درون', link: '#' }
        ]
    },
    'mha': {
        title: 'آکادمی قهرمان من',
        poster: 'assets/images/posters/mha.webp',
        description: 'داستان نوجوانی که در دنیایی پر از ابرقهرمانان، بدون قدرت متولد می‌شود اما آرزوی قهرمان شدن دارد.',
        genre: ['اکشن', 'ماجراجویی'],
        year: '۲۰۲۵',
        status: 'در حال پخش',
        episodes: [
            { title: 'قسمت ۱: رویای قهرمانی', link: '#' },
            { title: 'قسمت ۲: قدرت یک برای همه', link: '#' }
        ]
    },
    'account': {
        title: 'حساب کاربری از کار افتاده',
        poster: 'assets/images/posters/account.webp',
        description: 'داستان گیمری که پس از مرگ در دنیای بازی به دنیا می‌آید.',
        genre: ['فانتزی', 'ماجراجویی'],
        year: '۲۰۲۵',
        status: 'در حال پخش',
        episodes: [
            { title: 'قسمت ۱: شروع دوباره', link: '#' },
            { title: 'قسمت ۲: دنیای جدید', link: '#' }
        ]
    }
};