
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
});

const translations = {
    en: {
        intro: "HELLO, I'M AISHA.",
        heading: 'Building<br>ideas into<br><span>reality<span class="lime-dot">.</span></span>',
        description: "Software Development · Artificial Intelligence · Robotics",
        explore: 'EXPLORE MY WORK <span>↗</span>',
        linkedin: 'LINKEDIN PROFILE ↗',
        contact: 'VIEW FULL PROFILE ON LINKEDIN <span>↗</span>',
        note: 'For opportunities, collaborations and meaningful connections.'
    },
    ru: {
        intro: "ПРИВЕТ, Я АИША.",
        heading: 'Превращаю<br>идеи в<br><span>реальность<span class="lime-dot">.</span></span>',
        description: "Разработка ПО · Искусственный интеллект · Робототехника",
        explore: 'МОИ ПРОЕКТЫ <span>↗</span>',
        linkedin: 'МОЙ LINKEDIN ↗',
        contact: 'ПОЛНЫЙ ПРОФИЛЬ В LINKEDIN <span>↗</span>',
        note: 'Открыта к сотрудничеству и новым возможностям.'
    },
    kz: {
        intro: "СӘЛЕМ, МЕН АИШАМЫН.",
        heading: 'Идеяларды<br>жүзеге<br><span>асырамын<span class="lime-dot">.</span></span>',
        description: "Бағдарламалау · Жасанды интеллект · Робототехника",
        explore: 'ЖОБАЛАРЫМ <span>↗</span>',
        linkedin: 'LINKEDIN ПАРАҚШАМ ↗',
        contact: 'LINKEDIN ТОЛЫҚ ПРОФИЛІМ <span>↗</span>',
        note: 'Жаңа мүмкіндіктер мен ынтымақтастыққа ашықпын.'
    }
};

function setLanguage(lang) {
    const content = translations[lang];
    if (!content) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (content[key]) element.textContent = content[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.dataset.i18nHtml;
        if (content[key]) element.innerHTML = content[key];
    });

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    localStorage.setItem('aisha-language', lang);
}

document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.lang);
    });
});

setLanguage(localStorage.getItem('aisha-language') || 'en');

