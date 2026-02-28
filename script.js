// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
  es: {
    'meta.title':      'Cristian Dávila - Proyectos',
    'meta.desc':       'Proyectos de Cristian Dávila, Test Automation Engineer y Backend Developer con más de 11 años de experiencia.',
    // Nav
    'nav.about':       'Acerca de',
    'nav.skills':      'Habilidades',
    'nav.experience':  'Experiencia',
    'nav.education':   'Educación',
    'nav.projects':    'Proyectos',
    'nav.contact':     'Contacto',
    // Hero
    'hero.desc':  'Más de 11 años de experiencia en el ciclo de vida del desarrollo de software. Mi carrera une la Automatización de Pruebas de alta precisión con el Desarrollo Backend robusto, con foco actual en IA Generativa y el diseño de soluciones autónomas con AI Agents.',
    'hero.cta1':  'Ver Proyectos de Automatización',
    'hero.cta2':  'Ver Proyectos de Desarrollo',
    // About
    'about.title':   'Acerca de Mí',
    'about.lead':    'Con más de 11 años de experiencia integral en el SDLC, mi carrera une la Automatización de Pruebas de alta precisión con el Desarrollo Backend robusto, en la intersección de la ingeniería tradicional y la Inteligencia Artificial Generativa.',
    'about.p1.title': 'Quality Engineering (SDET):',
    'about.p1.desc':  '5+ años liderando estrategias de automatización con Playwright, Selenium WebDriver, SerenityBDD, TestNG y Cucumber, en entornos Jira y Azure DevOps.',
    'about.p2.title': 'Arquitectura Backend:',
    'about.p2.desc':  '6+ años construyendo sistemas escalables. Especialista en Java (Spring Boot) y Python (Django REST Framework) para servicios REST API de alto rendimiento.',
    'about.p3.title': 'Innovación con IA:',
    'about.p3.desc':  'Early adopter de Cursor AI y GitHub Copilot para acelerar ciclos de desarrollo. Actualmente especializándome en el desarrollo de AI Agents con Python.',
    'about.p4.title': 'Idiomas:',
    'about.p4.desc':  'Español (nativo - C2) y Inglés (avanzado - B2).',
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.cat1':  'IA & Automatización Inteligente',
    'skills.cat3':  'Desarrollo Backend',
    'skills.cat4':  'DevOps & Gestión',
    // Experience
    'exp.title':     'Experiencia Profesional',
    'exp.g1.date':   'Jun. 2025 – Presente',
    'exp.g1.client': 'Cliente: Empower',
    'exp.g1.li1':    'Automatización de casos de prueba de UI y API para los flujos de apertura de cuentas.',
    'exp.g1.li2':    'Automatización de casos de prueba para el dashboard de Net Worth.',
    'exp.g1.li3':    'Creación de casos de prueba, reporte de errores y aseguramiento de calidad con Jira.',
    'exp.im.date':   'Ago. 2023 – Jun. 2025',
    'exp.im.li1':    'Automatización de casos de prueba para el proyecto E2E Sales de una compañía de salud y seguros.',
    'exp.im.li2':    'Diseño de casos de prueba, reporte de bugs y aseguramiento de calidad bajo metodologías ágiles.',
    'exp.im.li3':    'Gestión de tareas, bugs y actividades de testing en Azure DevOps.',
    'exp.im.li4':    'Revisiones semanales de reportes generados por proyectos de automatización.',
    'exp.g2.client': 'Cliente: Disney',
    'exp.g2.li1':    'Automatización de casos de prueba para la plataforma Salesforce (C&W Communications), Media Search, M360 y Media service – Transform Project.',
    'exp.g2.li2':    'Automatización y testing de casos de API con Robot Framework y Postman.',
    'exp.g2.li3':    'Creación de pipelines de CI/CD en GitLab/Jenkins e integración con Report Portal.',
    'exp.in.date':   'Ene. 2019 – Feb. 2020',
    'exp.in.li1':    'Desarrollo de servicios REST API para Poste Italiane (software de venta y mantenimiento de POS).',
    'exp.in.li2':    'Desarrollo para SAVA (portal de turismo español para gestión y venta de productos turísticos).',
    'exp.in.li3':    'Construcción de queries SQL en Postgres.',
    'exp.sena.date': 'Feb. 2016 – Dic. 2018',
    'exp.sena.li1':  'Diseño, implementación y mantenimiento de Objetos Virtuales de Aprendizaje (VLO).',
    'exp.sena.li2':  'Creación y mantenimiento del documento de estándares front-end.',
    'exp.sena.li3':  'Gestión de contenido web en Blackboard LMS y construcción de servicios SCORM.',
    'exp.utp.date':  'Feb. 2015 – Dic. 2015',
    'exp.utp.li1':   'Mejoras y mantenimiento del sistema financiero web (ExtJS, Java, Spring, PL/SQL, Oracle).',
    'exp.utp.li2':   'Diseño e implementación del subsistema de "compras y suministros" en Java.',
    'exp.utp.li3':   'Diseño e implementación del subsistema de "contratación".',
    'exp.oc.date':   'Abr. 2011 – Nov. 2013',
    'exp.oc.li1':    'Desarrollo y mantenimiento de aplicaciones financieras, contables y de punto de venta.',
    'exp.oc.li2':    'Construcción de reportes y queries de base de datos para clientes.',
    // Education
    'edu.title':  'Educación',
    'edu.date':   'Ago. 2002 – Dic. 2008',
    'edu.degree': 'Ingeniería de Sistemas',
    // Projects
    'proj.title':        'Proyectos',
    'proj.filter.all':   'Todos',
    'proj.filter.auto':  'Automatización',
    'cat.auto':          'Automatización',
    'badge.current':     'Actual',
    'proj1.title': 'Empower – Apertura de Cuentas',
    'proj1.role':  'Test Automation Engineer · Globant (2025 – Presente)',
    'proj1.desc':  'Automatización de flujos críticos de UI y API para la apertura de cuentas y el dashboard de Net Worth de una plataforma fintech de gestión de patrimonio.',
    'proj2.title': 'E2E Sales – Salud & Seguros',
    'proj2.role':  'QA Automation Engineer · Imagemaker (2023 – 2025)',
    'proj2.desc':  'Framework de automatización end-to-end para el proceso de ventas de una empresa del sector de salud y seguros, con gestión completa del ciclo de bugs y pipelines de CI en Azure DevOps.',
    'proj3.title': 'Salesforce CRM – C&W Communications',
    'proj3.role':  'Test Automation Engineer · Globant / Disney (2020 – 2023)',
    'proj3.desc':  'Automatización de pruebas sobre la plataforma Salesforce para C&W Communications y el proyecto M360, cubriendo flujos CRM complejos con casos de prueba de regresión e integración.',
    'proj4.title': 'Media Search & Transform – Plataforma Streaming',
    'proj4.role':  'Test Automation Engineer · Globant / Disney (2020 – 2023)',
    'proj4.desc':  'Automatización de pruebas de API y UI para plataformas de búsqueda y transformación de medios. Integración de reportes con Report Portal y configuración de pipelines CI/CD en GitLab y Jenkins.',
    'proj5.title': 'Poste Italiane – REST API para POS',
    'proj5.role':  'Python Developer · Indra (2019 – 2020)',
    'proj5.desc':  'Desarrollo de servicios REST API para el sistema de venta y mantenimiento de terminales POS de Poste Italiane. Diseño de endpoints, integración con base de datos y construcción de queries optimizados en PostgreSQL.',
    'proj6.title': 'SAVA – Portal Turístico',
    'proj6.role':  'Python Developer · Indra (2019 – 2020)',
    'proj6.desc':  'Desarrollo backend para un portal de turismo español orientado a la gestión y venta de productos turísticos. API RESTful construida con Django para la integración con el front-end y servicios externos.',
    'proj7.title': 'Sistema Financiero UTP',
    'proj7.role':  'Software Engineer · U. Tecnológica de Pereira (2015)',
    'proj7.desc':  'Mejoras y mantenimiento de un sistema financiero web institucional. Diseño e implementación de los subsistemas de "compras y suministros" y "contratación" sobre una arquitectura Java con Oracle.',
    'proj8.title': 'Objetos Virtuales de Aprendizaje – SENA',
    'proj8.role':  'Web Developer · SENA (2013 – 2014 / 2016 – 2018)',
    'proj8.desc':  'Diseño e implementación de Objetos Virtuales de Aprendizaje (VLO) interactivos integrados en Blackboard LMS. Construcción de servicios SCORM y definición del estándar de desarrollo front-end de la institución.',
    // Contact
    'contact.title':    'Contacto',
    'contact.subtitle': '¿Interesado en colaborar? ¡Hablemos!',
    'contact.name':     'Tu Nombre',
    'contact.email':    'Tu Email',
    'contact.message':  'Tu Mensaje',
    'contact.send':     'Enviar Mensaje',
    'contact.cv':       'Descargar CV Completo',
    // Footer
    'footer.copy': '© 2025 Cristian Dávila. Todos los derechos reservados.',
  },

  en: {
    'meta.title':      'Cristian Dávila - Projects',
    'meta.desc':       'Projects by Cristian Dávila, Test Automation Engineer & Backend Developer with 11+ years of experience.',
    // Nav
    'nav.about':       'About',
    'nav.skills':      'Skills',
    'nav.experience':  'Experience',
    'nav.education':   'Education',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',
    // Hero
    'hero.desc':  'Over 11 years of comprehensive experience across the software development lifecycle. My career bridges high-precision Test Automation with robust Backend Development, with a current focus on Generative AI and the design of autonomous solutions with AI Agents.',
    'hero.cta1':  'View Automation Projects',
    'hero.cta2':  'View Development Projects',
    // About
    'about.title':   'About Me',
    'about.lead':    'With over 11 years of comprehensive experience in the SDLC, my career bridges high-precision Test Automation with robust Backend Development, at the intersection of traditional engineering and Generative Artificial Intelligence.',
    'about.p1.title': 'Quality Engineering (SDET):',
    'about.p1.desc':  '5+ years leading automation strategies with Playwright, Selenium WebDriver, SerenityBDD, TestNG and Cucumber, in Jira and Azure DevOps environments.',
    'about.p2.title': 'Backend Architecture:',
    'about.p2.desc':  '6+ years building scalable systems. Specialist in Java (Spring Boot) and Python (Django REST Framework) for high-performance REST API services.',
    'about.p3.title': 'AI Innovation:',
    'about.p3.desc':  'Early adopter of Cursor AI and GitHub Copilot to accelerate development cycles. Currently specializing in the development of AI Agents with Python.',
    'about.p4.title': 'Languages:',
    'about.p4.desc':  'Spanish (native - C2) and English (advanced - B2).',
    // Skills
    'skills.title': 'Technical Skills',
    'skills.cat1':  'AI & Intelligent Automation',
    'skills.cat3':  'Backend Development',
    'skills.cat4':  'DevOps & Management',
    // Experience
    'exp.title':     'Professional Experience',
    'exp.g1.date':   'Jun. 2025 – Present',
    'exp.g1.client': 'Client: Empower',
    'exp.g1.li1':    'Automated UI and API test cases for the account opening flows.',
    'exp.g1.li2':    'Automated test cases for the Net Worth dashboard.',
    'exp.g1.li3':    'Created test cases, reported errors, and ensured project quality using Jira.',
    'exp.im.date':   'Aug. 2023 – Jun. 2025',
    'exp.im.li1':    'Automated test cases for the E2E Sales project of a health and insurance company.',
    'exp.im.li2':    'Designed test cases, reported bugs, and ensured quality following agile methodologies.',
    'exp.im.li3':    'Managed tasks, bugs, and testing activities in Azure DevOps.',
    'exp.im.li4':    'Conducted weekly reviews of reports generated by automation projects.',
    'exp.g2.client': 'Client: Disney',
    'exp.g2.li1':    'Automated test cases for the Salesforce platform (C&W Communications), Media Search, M360, and Media service – Transform Project.',
    'exp.g2.li2':    'Automated and tested API cases using Robot Framework and Postman.',
    'exp.g2.li3':    'Created CI/CD pipelines in GitLab/Jenkins and integrated reports with Report Portal.',
    'exp.in.date':   'Jan. 2019 – Feb. 2020',
    'exp.in.li1':    'Developed REST API services for Poste Italiane (POS system sales and maintenance software).',
    'exp.in.li2':    'Developed for SAVA (a Spanish tourism portal to manage and sell tourist products).',
    'exp.in.li3':    'Built SQL queries in PostgreSQL.',
    'exp.sena.date': 'Feb. 2016 – Dec. 2018',
    'exp.sena.li1':  'Designed, implemented, and maintained Virtual Learning Objects (VLO).',
    'exp.sena.li2':  'Created and maintained the front-end standards document.',
    'exp.sena.li3':  'Managed Blackboard LMS web content and built SCORM services.',
    'exp.utp.date':  'Feb. 2015 – Dec. 2015',
    'exp.utp.li1':   'Enhancements and maintenance of the financial web system (ExtJS, Java, Spring, PL/SQL, Oracle).',
    'exp.utp.li2':   'Detailed design and implementation of the "purchasing and supply" subsystem in Java.',
    'exp.utp.li3':   'Detailed design and implementation of the "hiring" subsystem.',
    'exp.oc.date':   'Apr. 2011 – Nov. 2013',
    'exp.oc.li1':    'Developed and maintained financial, accounting, and point-of-sale applications.',
    'exp.oc.li2':    'Built database reports and queries for clients.',
    // Education
    'edu.title':  'Education',
    'edu.date':   'Aug. 2002 – Dec. 2008',
    'edu.degree': 'Systems Engineering',
    // Projects
    'proj.title':        'Projects',
    'proj.filter.all':   'All',
    'proj.filter.auto':  'Automation',
    'cat.auto':          'Automation',
    'badge.current':     'Current',
    'proj1.title': 'Empower – Account Opening',
    'proj1.role':  'Test Automation Engineer · Globant (2025 – Present)',
    'proj1.desc':  'Automation of critical UI and API flows for account opening and the Net Worth dashboard of a fintech wealth management platform.',
    'proj2.title': 'E2E Sales – Health & Insurance',
    'proj2.role':  'QA Automation Engineer · Imagemaker (2023 – 2025)',
    'proj2.desc':  'End-to-end automation framework for the sales process of a health and insurance company, with full bug lifecycle management and CI pipelines in Azure DevOps.',
    'proj3.title': 'Salesforce CRM – C&W Communications',
    'proj3.role':  'Test Automation Engineer · Globant / Disney (2020 – 2023)',
    'proj3.desc':  'Test automation for the Salesforce platform for C&W Communications and the M360 project, covering complex CRM flows with regression and integration test cases.',
    'proj4.title': 'Media Search & Transform – Streaming Platform',
    'proj4.role':  'Test Automation Engineer · Globant / Disney (2020 – 2023)',
    'proj4.desc':  'API and UI test automation for media search and transformation platforms. Report integration with Report Portal and CI/CD pipeline setup in GitLab and Jenkins.',
    'proj5.title': 'Poste Italiane – REST API for POS',
    'proj5.role':  'Python Developer · Indra (2019 – 2020)',
    'proj5.desc':  'Developed REST API services for the Poste Italiane POS system sales and maintenance platform. Endpoint design, database integration, and optimized PostgreSQL queries.',
    'proj6.title': 'SAVA – Tourism Portal',
    'proj6.role':  'Python Developer · Indra (2019 – 2020)',
    'proj6.desc':  'Backend development for a Spanish tourism portal focused on managing and selling tourist products. RESTful API built with Django for front-end and external service integration.',
    'proj7.title': 'UTP Financial System',
    'proj7.role':  'Software Engineer · U. Tecnológica de Pereira (2015)',
    'proj7.desc':  'Enhancements and maintenance of an institutional financial web system. Design and implementation of the "purchasing & supply" and "hiring" subsystems on a Java/Oracle architecture.',
    'proj8.title': 'Virtual Learning Objects – SENA',
    'proj8.role':  'Web Developer · SENA (2013 – 2014 / 2016 – 2018)',
    'proj8.desc':  'Design and implementation of interactive Virtual Learning Objects (VLO) integrated into Blackboard LMS. Built SCORM services and defined the institution\'s front-end development standard.',
    // Contact
    'contact.title':    'Contact',
    'contact.subtitle': 'Interested in collaborating? Let\'s talk!',
    'contact.name':     'Your Name',
    'contact.email':    'Your Email',
    'contact.message':  'Your Message',
    'contact.send':     'Send Message',
    'contact.cv':       'Download Full CV',
    // Footer
    'footer.copy': '© 2025 Cristian Dávila. All rights reserved.',
  }
};

// ─── Language switcher ────────────────────────────────────────────────────────

let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];

  // Text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // <title> and <meta description>
  if (t['meta.title'])  document.title = t['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t['meta.desc']) metaDesc.setAttribute('content', t['meta.desc']);

  // Toggle button label (shows the OTHER language)
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

// ─── DOM ready ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language on load
  setLanguage(currentLang);

  // Language toggle click
  document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(15, 23, 42, 0.98)';
        navLinks.style.padding = '20px 0';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 10px rgba(0,0,0,0.3)' : 'none';
  });

  // Scroll animation (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-title, .skill-card, .project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  // Portfolio filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        }
      });
    });
  });
});
