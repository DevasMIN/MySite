// Модуль для создания компонентов сайта

const Components = {
    // Создание навигационного меню
    createNavigation(config) {
        const nav = document.createElement('nav');
        nav.className = 'navbar';
        
        const container = document.createElement('div');
        container.className = 'container';
        
        const brand = document.createElement('div');
        brand.className = 'nav-brand';
        brand.textContent = config.site.name;
        
        const menu = document.createElement('ul');
        menu.className = 'nav-menu';
        
        // Определяем текущую страницу
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        config.navigation.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            // Если это ссылка на сервисы и мы не на главной странице, ведем на index.html#services
            if (item.href === '#services' && currentPage !== 'index.html') {
                a.href = 'index.html#services';
            } else {
                a.href = item.href;
            }
            
            a.textContent = item.name;
            if (item.id) {
                a.setAttribute('data-nav-id', item.id);
            }
            li.appendChild(a);
            menu.appendChild(li);
        });
        
        container.appendChild(brand);
        container.appendChild(menu);
        nav.appendChild(container);
        
        return nav;
    },

    // Создание Hero секции
    createHero(config) {
        const section = document.createElement('section');
        section.id = 'home';
        section.className = 'hero';
        
        const container = document.createElement('div');
        container.className = 'container';
        
        const title = document.createElement('h1');
        title.className = 'hero-title';
        title.textContent = config.hero.title;
        
        const subtitle = document.createElement('p');
        subtitle.className = 'hero-subtitle';
        subtitle.textContent = config.hero.subtitle;
        
        const button = document.createElement('a');
        button.href = config.hero.buttonLink;
        button.className = 'btn btn-primary';
        button.textContent = config.hero.buttonText;
        
        container.appendChild(title);
        container.appendChild(subtitle);
        container.appendChild(button);
        section.appendChild(container);
        
        return section;
    },

    // Создание карточки сервиса
    createServiceCard(service, domain) {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-service', service.id);
        
        const icon = document.createElement('div');
        icon.className = 'service-icon';
        icon.textContent = service.icon;
        
        const title = document.createElement('h3');
        title.textContent = service.name;
        
        const description = document.createElement('p');
        description.textContent = service.description;
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'btn btn-secondary service-link';
        if (service.url) {
            link.setAttribute('data-url', service.url);
        } else if (service.subdomain) {
            link.setAttribute('data-subdomain', service.subdomain);
        }
        link.setAttribute('target', '_blank');
        link.textContent = 'Перейти';
        
        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);
        
        return card;
    },

    // Создание секции сервисов
    createServicesSection(config) {
        const section = document.createElement('section');
        section.id = 'services';
        section.className = 'services';
        
        const container = document.createElement('div');
        container.className = 'container';
        
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.textContent = 'Мои сервисы';
        
        const grid = document.createElement('div');
        grid.className = 'services-grid';
        
        config.services.forEach(service => {
            const card = this.createServiceCard(service, config.site.domain);
            grid.appendChild(card);
        });
        
        container.appendChild(title);
        container.appendChild(grid);
        section.appendChild(container);
        
        return section;
    },

    // Создание футера
    createFooter(config) {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        
        const container = document.createElement('div');
        container.className = 'container';
        
        const copyright = document.createElement('p');
        copyright.textContent = `© ${config.site.copyright}`;
        
        container.appendChild(copyright);
        footer.appendChild(container);
        
        return footer;
    },

    // Создание секции "О себе"
    createAboutSection(config) {
        const section = document.createElement('section');
        section.className = 'about';
        
        const container = document.createElement('div');
        container.className = 'container';
        
        const title = document.createElement('h1');
        title.className = 'section-title';
        title.textContent = config.about.title;
        
        const content = document.createElement('div');
        content.className = 'about-content';
        
        const text = document.createElement('div');
        text.className = 'about-text';
        
        config.about.paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            text.appendChild(p);
        });
        
        const actions = document.createElement('div');
        actions.className = 'about-actions';
        
        const backButton = document.createElement('a');
        backButton.href = 'index.html';
        backButton.className = 'btn btn-primary';
        backButton.textContent = 'Вернуться на главную';
        
        const githubButton = document.createElement('a');
        githubButton.href = 'https://github.com/DevasMIN/Spring-cloud-microservices';
        githubButton.className = 'btn btn-secondary';
        githubButton.textContent = 'Мой GitHub';
        githubButton.setAttribute('target', '_blank');
        
        actions.appendChild(backButton);
        actions.appendChild(githubButton);
        
        content.appendChild(text);
        content.appendChild(actions);
        container.appendChild(title);
        container.appendChild(content);
        section.appendChild(container);
        
        return section;
    }
};

