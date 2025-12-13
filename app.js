// Главный модуль приложения

// Инициализация навигации
function initNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder && typeof SiteConfig !== 'undefined') {
        const nav = Components.createNavigation(SiteConfig);
        navPlaceholder.replaceWith(nav);
    }
}

// Инициализация Hero секции
function initHero() {
    const heroPlaceholder = document.getElementById('hero-placeholder');
    if (heroPlaceholder && typeof SiteConfig !== 'undefined') {
        const hero = Components.createHero(SiteConfig);
        heroPlaceholder.replaceWith(hero);
    }
}

// Инициализация секции сервисов
function initServices() {
    const servicesPlaceholder = document.getElementById('services-placeholder');
    if (servicesPlaceholder && typeof SiteConfig !== 'undefined') {
        const services = Components.createServicesSection(SiteConfig);
        servicesPlaceholder.replaceWith(services);
        // Инициализируем ссылки после создания секции
        initServiceLinks();
    }
}

// Инициализация футера
function initFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder && typeof SiteConfig !== 'undefined') {
        const footer = Components.createFooter(SiteConfig);
        footerPlaceholder.replaceWith(footer);
    }
}

// Инициализация секции "О себе"
function initAbout() {
    const aboutPlaceholder = document.getElementById('about-placeholder');
    if (aboutPlaceholder && typeof SiteConfig !== 'undefined') {
        const about = Components.createAboutSection(SiteConfig);
        aboutPlaceholder.replaceWith(about);
    }
}

// Установка ссылок на поддомены и прямые URL
function initServiceLinks() {
    if (typeof SiteConfig === 'undefined') return;
    const protocol = 'https:';
    const baseDomain = SiteConfig.site.domain;
    
    document.querySelectorAll('.service-link').forEach(link => {
        const url = link.getAttribute('data-url');
        const subdomain = link.getAttribute('data-subdomain');
        
        if (url) {
            link.href = url;
        } else if (subdomain) {
            link.href = `${protocol}//${subdomain}.${baseDomain}`;
        }
    });
}

// Инициализация всех компонентов
function initApp() {
    // Проверяем наличие необходимых модулей
    if (typeof SiteConfig === 'undefined') {
        console.error('SiteConfig не загружен! Убедитесь, что config.js подключен.');
        return;
    }
    
    if (typeof Components === 'undefined') {
        console.error('Components не загружен! Убедитесь, что components.js подключен.');
        return;
    }
    
    try {
        initNavigation();
        initHero();
        initServices();
        initFooter();
        initAbout();
        
        // Переинициализируем плавную прокрутку после создания компонентов
        setTimeout(() => {
            if (typeof initSmoothScroll === 'function') {
                initSmoothScroll();
            }
        }, 100);
    } catch (error) {
        console.error('Ошибка при инициализации приложения:', error);
    }
}

// Запуск приложения после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

