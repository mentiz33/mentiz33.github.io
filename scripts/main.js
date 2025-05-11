const translations = {
    ru: {
        title: "Программист",
        greeting: "Приветствую! Я разработчик с фокусом на создание эффективных и надежных решений. Специализируюсь на desktop-приложениях и веб-технологиях, уделяя внимание деталям и качеству кода.",
        skillsTitle: "Технологии",
        contactTitle: "Контакты",
        contactText: "Для сотрудничества и вопросов:"
    },
    en: {
        title: "Software Developer",
        greeting: "Hello! I'm a developer focused on creating efficient and reliable solutions. I specialize in desktop applications and web technologies, paying attention to details and code quality.",
        skillsTitle: "Technologies",
        contactTitle: "Contact",
        contactText: "For collaboration and inquiries:"
    },
    es: {
        title: "Desarrollador de Software",
        greeting: "¡Hola! Soy un desarrollador enfocado en crear soluciones eficientes y confiables. Me especializo en aplicaciones de escritorio y tecnologías web, prestando atención a los detalles y la calidad del código.",
        skillsTitle: "Tecnologías",
        contactTitle: "Contacto",
        contactText: "Para colaboraciones y consultas:"
    }
};

const languageBtns = document.querySelectorAll('.language-btn');

languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);

        languageBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

function changeLanguage(lang) {
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('greeting').textContent = translations[lang].greeting;
    document.getElementById('skills-title').textContent = translations[lang].skillsTitle;
    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-text').textContent = translations[lang].contactText;
}

// Плавное появление карточки при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
});