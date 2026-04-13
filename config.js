// Конфигурация сайта
const SiteConfig = {
    // Основные настройки
    site: {
        name: 'Мой Сайт',
        domain: 'devasmin.site',
        copyright: '2025 Все права защищены'
    },

    // Навигационное меню
    navigation: [
        { name: 'Главная', href: 'index.html', id: 'home' },
        { name: 'Обо мне', href: 'about.html', id: 'about' },
        { name: 'Сервисы', href: '#services', id: 'services' }
    ],

    // Hero секция (главная страница)
    hero: {
        title: 'Добро пожаловать!',
        subtitle: 'Рад видеть вас на моем сайте',
        buttonText: 'Узнать больше',
        buttonLink: 'about.html'
    },

    // Сервисы/поддомены
    services: [
        {
            id: 'portainer',
            name: 'Portainer',
            description: 'Управление контейнерами Docker',
            icon: '🐳',
            subdomain: 'portainer'
        },
        {
            id: 'uptime',
            name: 'Uptime',
            description: 'Мониторинг доступности сервисов',
            icon: '📊',
            subdomain: 'uptime'
        },
        {
            id: 'vpnpanel',
            name: 'VPN Panel',
            description: 'Панель управления VPN',
            icon: '🔒',
            subdomain: 'vpnpanel'
        },
        {
            id: 'nginx',
            name: 'Nginx Admin Panel',
            description: 'Панель админа Nginx',
            icon: '⚙️',
            url: 'https://nginx.devasmin.site'
        },
        {
            id: 'netdata',
            name: 'Netdata',
            description: 'Мониторинг сервера в реальном времени',
            icon: '📈',
            url: 'https://netdata.devasmin.site'
        }
    ],

    // Информация о себе
    about: {
        title: 'Обо мне',
        paragraphs: [
            'Привет! Меня зовут Слава, и я рад приветствовать вас на моем сайте. Здесь вы найдете информацию обо мне и моих проектах.',
            'Я увлекаюсь разработкой, технологиями и созданием интересных решений. Этот сайт - моя визитная карточка в цифровом мире.',
            'В свободное время я изучаю новые технологии, экспериментирую с различными инструментами и создаю полезные проекты.'
        ]
    }
};

