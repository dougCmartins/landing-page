import { companyLinks, experienceStacks } from '~/utils/portfolio'

export const portfolioLocales = ['pt-BR', 'en', 'es'] as const

export type PortfolioLocale = typeof portfolioLocales[number]

export const portfolioLocaleLabels: Record<PortfolioLocale, string> = {
  'pt-BR': 'PT-BR',
  en: 'EN',
  es: 'ES',
}

const openGraphLocales: Record<PortfolioLocale, string> = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
}

type JobCopy = {
  id: string
  company: string
  domain: string
  role: string
  period: string
  stack: readonly string[]
  linkedin: string
  linkedinLabel: string
  achievements: readonly string[]
}

type StudyCopy = {
  id: string
  title: string
  lines: readonly string[]
}

export type PortfolioCopy = {
  meta: {
    title: string
    description: string
    shareImageAlt: string
    openGraphLocale: string
  }
  nav: {
    about: string
    projects: string
    contact: string
    backToTop: string
    language: string
    main: string
  }
  hero: {
    availability: string
    location: string
    name: string
    role: string
    summary: string
    viewProjects: string
    downloadCv: string
    contact: string
    portraitAlt: string
    linkedin: string
    gmail: string
    github: string
  }
  about: {
    label: string
    title: readonly string[]
    paragraphs: readonly string[]
    focus: readonly string[]
  }
  experience: {
    label: string
    title: string
    intro: readonly string[]
    jobs: readonly JobCopy[]
  }
  stack: {
    label: string
    title: string
    intro: readonly string[]
    groups: readonly string[]
  }
  education: {
    label: string
    title: string
    academicLabel: string
    continuingLabel: string
    academic: readonly StudyCopy[]
    continuing: readonly StudyCopy[]
  }
  contactSection: {
    label: string
    title: readonly string[]
    summary: string
    action: string
  }
  footer: {
    rights: string
    backToTop: string
  }
}

const sharedJobs = {
  greenn: { id: 'greenn', company: 'Greenn', stack: experienceStacks.greenn, linkedin: companyLinks.greenn },
  tray: { id: 'tray', company: 'Tray', stack: experienceStacks.tray, linkedin: companyLinks.tray },
  desk360: { id: 'desk360', company: 'Desk360', stack: experienceStacks.desk360, linkedin: companyLinks.desk360 },
  cuca: { id: 'cuca', company: 'Cuca Fresca Informática', stack: experienceStacks.cuca, linkedin: companyLinks.cuca },
} as const

function buildCopy(locale: PortfolioLocale, copy: Omit<PortfolioCopy, 'meta'> & { meta: Omit<PortfolioCopy['meta'], 'openGraphLocale'> }): PortfolioCopy {
  return {
    ...copy,
    meta: {
      ...copy.meta,
      openGraphLocale: openGraphLocales[locale],
    },
  }
}

export const portfolioCopy: Record<PortfolioLocale, PortfolioCopy> = {
  'pt-BR': buildCopy('pt-BR', {
    meta: {
      title: 'Douglas C Martins | Desenvolvedor Full Stack — DCMARTINS.CO',
      description: 'Douglas C Martins — Desenvolvedor Full Stack que constrói produtos digitais escaláveis com Laravel, PHP e Vue.js. Experiência em pagamentos, e-commerce, APIs e arquitetura de software.',
      shareImageAlt: 'Fundo abstrato do portfólio de Douglas C Martins',
    },
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
      backToTop: 'DCMARTINS.CO — Voltar ao topo',
      language: 'Idioma',
      main: 'Navegação principal',
    },
    hero: {
      availability: 'Disponível para freelance e tempo integral',
      location: 'Pedra Azul, MG · Remoto',
      name: 'Douglas C Martins',
      role: 'Desenvolvedor Backend/Full Stack | PHP, Laravel, MySQL, JavaScript, Vue.js, Angular, Node.js',
      summary: 'Mais de 6 anos desenvolvendo e evoluindo aplicações web com PHP, Laravel, MySQL, JavaScript, Vue.js, Angular e Node.js, em e-commerce, pagamentos e produtos digitais, com IA no fluxo de desenvolvimento: prompts, MCP e skills.',
      viewProjects: 'Ver projetos',
      downloadCv: 'Baixar CV',
      contact: 'Contato',
      portraitAlt: 'Douglas C Martins',
      linkedin: 'LinkedIn',
      gmail: 'Gmail',
      github: 'GitHub',
    },
    about: {
      label: 'Sobre mim',
      title: ['Código cuidadoso.', 'Impacto real.'],
      paragraphs: [
        'Desenvolvedor Backend/Full Stack com mais de 6 anos de experiência no desenvolvimento e evolução de aplicações web, com foco em PHP, Laravel, JavaScript, Vue.js e MySQL.',
        'Atuação em plataformas de e-commerce, pagamentos e produtos digitais, incluindo modernização de sistemas legados, otimização de consultas, mensageria, controle de acesso e segurança de aplicações.',
        'Experiência no desenvolvimento de APIs, na integração de funcionalidades e no uso de IA no dia a dia: prompts, MCP e skills para análise, implementação e revisão de código.',
        'Perfil orientado à resolução de problemas técnicos e à evolução de sistemas existentes, buscando aliar qualidade de código, confiabilidade e necessidades do negócio.',
      ],
      focus: ['Arquitetura de software', 'Performance', 'Segurança'],
    },
    experience: {
      label: 'Experiência',
      title: 'Onde fiz a diferença.',
      intro: ['Plataformas digitais, desafios complexos', 'e a engenharia por trás deles.'],
      jobs: [
        {
          ...sharedJobs.greenn,
          domain: 'Ecossistema de vendas digitais',
          role: 'Desenvolvedor Back-end (autônomo)',
          period: 'fev. 2025 — set. 2026',
          linkedinLabel: 'LinkedIn da Greenn',
          achievements: [
            'Refatorei filas críticas do sistema legado, que retinham mensagens para reprocessamento, com micro-jobs em PHP e Laravel, e eliminei o requeue de 12 mil mensagens.',
            'Otimizei consultas do ERP, cujo processamento repetia leituras no banco, usando cursores em MySQL.',
            'Integrei a Panda IA ao fluxo de cursos com arquitetura de filas e orquestrador de status, sem webhooks.',
            'Desenvolvi componentes em JavaScript e Vue.js e APIs de conversão de moedas para a internacionalização da plataforma.',
            'Corrigi vulnerabilidades da aplicação seguindo OWASP e implementei 2FA e ACL.',
            'Refatorei o fluxo de saques, que trata GMV e chargeback, no sistema de pagamentos.',
            'Desenvolvi Skills no Cursor e Commands MCP, com DDD e Clean Code como contexto, para análise, implementação e revisão de código.',
          ],
        },
        {
          ...sharedJobs.tray,
          domain: 'Plataforma de e-commerce',
          role: 'Desenvolvedor Full Stack pleno',
          period: 'out. 2021 — nov. 2024',
          linkedinLabel: 'LinkedIn da Tray',
          achievements: [
            'Projetei um serviço de geolocalização no back-end, em PHP, para o cálculo e o roteamento de fretes do Multi-CD.',
            'Desenvolvi um motor de ACL para clientes Enterprise e Top Sellers, com controle de acesso por IP, horário e perfil.',
            'Conduzi a migração de fluxos do Backoffice, escritos em PHP legado, para Laravel e Vue.js.',
            'Liderei o desenho técnico de um fluxo de configuração guiada para a ativação de clientes.',
          ],
        },
        {
          ...sharedJobs.desk360,
          domain: 'Startup do Grupo Locaweb',
          role: 'Desenvolvedor Full Stack júnior',
          period: 'set. 2018 — set. 2021',
          linkedinLabel: 'LinkedIn da Locaweb',
          achievements: [
            'Participei da evolução da plataforma omnichannel de atendimento, desde a fase inicial, até 400+ clientes reais.',
            'Desenvolvi APIs REST em PHP e Laravel com JSON:API, modelando relacionamentos de dados em MySQL.',
            'Desenvolvi interfaces em JavaScript e Vue.js.',
            'Desenvolvi funcionalidades de atendimento, base de conhecimento e chat interno.',
          ],
        },
        {
          ...sharedJobs.cuca,
          domain: 'Desenvolvimento de software e web',
          role: 'Programador júnior',
          period: 'mar. 2017 — ago. 2018',
          linkedinLabel: 'LinkedIn da Cuca Fresca Informática',
          achievements: [
            'Migrei uma ferramenta de atendimento desktop, feita em Clarion, para web com Angular 4, Node.js e PostgreSQL.',
            'Desenvolvi funcionalidades e correções em PHP nos sistemas web da empresa.',
            'Participei da refatoração do site institucional em HTML5, CSS e Bootstrap.',
          ],
        },
      ],
    },
    stack: {
      label: 'Minhas ferramentas',
      title: 'As ferramentas certas para o trabalho.',
      intro: ['Uma base full stack.', 'Sempre aprendendo, sempre refinando.'],
      groups: ['Linguagens e frameworks', 'Dados e infraestrutura', 'Práticas e ferramentas'],
    },
    education: {
      label: 'Formação',
      title: 'Estudo, rigor e dedicação.',
      academicLabel: 'Formação acadêmica',
      continuingLabel: 'Formação contínua',
      academic: [
        {
          id: 'systems-analysis',
          title: 'Análise e Desenvolvimento de Sistemas',
          lines: ['Cruzeiro do Sul Virtual · Tecnólogo', 'ago. 2022 — abr. 2026'],
        },
        {
          id: 'internet-computing',
          title: 'Informática para Internet',
          lines: ['ETEC · Qualificação técnica', 'jan. 2015 — dez. 2017'],
        },
      ],
      continuing: [
        {
          id: 'modern-ai',
          title: 'Fundamentos da IA Moderna',
          lines: ['Machine Learning, LLMs, IA Generativa e Agentes', 'DIO · 2026'],
        },
        {
          id: 'software-architecture',
          title: 'Fundamentos da Arquitetura de Software Moderna',
          lines: ['Alura', 'Emitida em out. de 2026'],
        },
        {
          id: 'english',
          title: 'Inglês',
          lines: ['Proficiência intermediária'],
        },
      ],
    },
    contactSection: {
      label: 'Vamos conversar',
      title: ['Vamos construir algo', 'que faça a diferença.'],
      summary: 'Disponível para freelance, tempo integral e oportunidades remotas.',
      action: 'Vamos conversar',
    },
    footer: {
      rights: '© 2026 Douglas C Martins. Todos os direitos reservados.',
      backToTop: 'Voltar ao topo',
    },
  }),
  en: buildCopy('en', {
    meta: {
      title: 'Douglas C Martins | Full-Stack Developer — DCMARTINS.CO',
      description: 'Douglas C Martins — Full-Stack Developer building scalable digital products with Laravel, PHP and Vue.js. Experience in payments, e-commerce, APIs and software architecture.',
      shareImageAlt: 'Abstract background of the Douglas C Martins portfolio',
    },
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      backToTop: 'DCMARTINS.CO — Back to top',
      language: 'Language',
      main: 'Main navigation',
    },
    hero: {
      availability: 'Available for freelance and full-time',
      location: 'Pedra Azul, MG · Remote',
      name: 'Douglas C Martins',
      role: 'Backend/Full Stack Developer | PHP, Laravel, MySQL, JavaScript, Vue.js, Angular, Node.js',
      summary: 'More than 6 years developing and evolving web applications with PHP, Laravel, MySQL, JavaScript, Vue.js, Angular, and Node.js, across e-commerce, payments, and digital products, with AI in the development workflow: prompts, MCP, and skills.',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      contact: 'Contact',
      portraitAlt: 'Douglas C Martins',
      linkedin: 'LinkedIn',
      gmail: 'Gmail',
      github: 'GitHub',
    },
    about: {
      label: 'About me',
      title: ['Thoughtful code.', 'Real-world impact.'],
      paragraphs: [
        'Backend/Full Stack Developer with more than 6 years of experience developing and evolving web applications, focused on PHP, Laravel, JavaScript, Vue.js, and MySQL.',
        'Work across e-commerce, payments, and digital products, including legacy modernization, query optimization, messaging, access control, and application security.',
        'Experience building APIs, integrating features, and using AI day to day: prompts, MCP, and skills for analysis, implementation, and code review.',
        'Oriented toward solving technical problems and evolving existing systems, aligning code quality, reliability, and business needs.',
      ],
      focus: ['Software architecture', 'Performance', 'Security'],
    },
    experience: {
      label: 'Experience',
      title: 'Where I’ve made a difference.',
      intro: ['Digital platforms, complex challenges,', 'and the engineering behind them.'],
      jobs: [
        {
          ...sharedJobs.greenn,
          domain: 'Digital sales ecosystem',
          role: 'Back-end Developer',
          period: 'Feb 2025 — Sep 2026',
          linkedinLabel: 'Greenn on LinkedIn',
          achievements: [
            'Refactored critical queues in the legacy system, which held messages for reprocessing, with PHP and Laravel micro-jobs, and eliminated the requeue of 12,000 messages.',
            'Optimized ERP queries, whose processing repeated database reads, using MySQL cursors.',
            'Integrated Panda AI into the course workflow with a queue architecture and a status orchestrator, without webhooks.',
            'Built JavaScript and Vue.js components and currency conversion APIs for the platform internationalization.',
            'Remediated application vulnerabilities following OWASP and implemented 2FA and ACL.',
            'Refactored the withdrawal flow, which handles GMV and chargeback, in the payments system.',
            'Developed Cursor Skills and MCP Commands, with DDD and Clean Code as context, for analysis, implementation, and code review.',
          ],
        },
        {
          ...sharedJobs.tray,
          domain: 'E-commerce platform',
          role: 'Mid-level Full-Stack Developer',
          period: 'Oct 2021 — Nov 2024',
          linkedinLabel: 'Tray on LinkedIn',
          achievements: [
            'Designed a back-end geolocation service, in PHP, for Multi-CD shipping calculation and routing.',
            'Built an ACL engine for Enterprise customers and Top Sellers, with access control by IP, schedule, and profile.',
            'Led the migration of Backoffice workflows, written in legacy PHP, to Laravel and Vue.js.',
            'Led the technical design of a guided configuration flow for customer activation.',
          ],
        },
        {
          ...sharedJobs.desk360,
          domain: 'Locaweb Group startup',
          role: 'Junior Full-Stack Developer',
          period: 'Sep 2018 — Sep 2021',
          linkedinLabel: 'Locaweb on LinkedIn',
          achievements: [
            'Helped evolve the omnichannel customer service platform, from its initial stage, to 400+ real customers.',
            'Developed REST APIs in PHP and Laravel with JSON:API, modeling data relationships in MySQL.',
            'Built JavaScript and Vue.js interfaces.',
            'Developed customer service, knowledge base, and internal chat features.',
          ],
        },
        {
          ...sharedJobs.cuca,
          domain: 'Software & web development',
          role: 'Junior Programmer',
          period: 'Mar 2017 — Aug 2018',
          linkedinLabel: 'Cuca Fresca Informática on LinkedIn',
          achievements: [
            'Migrated a desktop customer service tool, built in Clarion, to the web with Angular 4, Node.js, and PostgreSQL.',
            'Developed PHP features and fixes for the company web systems.',
            'Contributed to an institutional website refactor using HTML5, CSS, and Bootstrap.',
          ],
        },
      ],
    },
    stack: {
      label: 'My toolkit',
      title: 'The right tools for the job.',
      intro: ['A full-stack foundation.', 'Always learning, always refining.'],
      groups: ['Languages & frameworks', 'Data & infrastructure', 'Practices & tools'],
    },
    education: {
      label: 'Education',
      title: 'Study, rigor, and dedication.',
      academicLabel: 'Academic background',
      continuingLabel: 'Continuing education',
      academic: [
        {
          id: 'systems-analysis',
          title: 'Systems Analysis & Development',
          lines: ['Cruzeiro do Sul Virtual · Technology degree', 'Aug 2022 — Apr 2026'],
        },
        {
          id: 'internet-computing',
          title: 'Internet Computing',
          lines: ['ETEC · Technical qualification', 'Jan 2015 — Dec 2017'],
        },
      ],
      continuing: [
        {
          id: 'modern-ai',
          title: 'Modern AI Fundamentals',
          lines: ['Machine Learning, LLMs, Generative AI & Agents', 'DIO · 2026'],
        },
        {
          id: 'software-architecture',
          title: 'Fundamentals of Modern Software Architecture',
          lines: ['Alura', 'Issued Oct 2026'],
        },
        {
          id: 'english',
          title: 'English',
          lines: ['Intermediate proficiency'],
        },
      ],
    },
    contactSection: {
      label: 'Let’s connect',
      title: ['Let’s build something', 'that makes a difference.'],
      summary: 'Available for freelance, full-time and remote opportunities.',
      action: 'Let’s talk',
    },
    footer: {
      rights: '© 2026 Douglas C Martins. All rights reserved.',
      backToTop: 'Back to top',
    },
  }),
  es: buildCopy('es', {
    meta: {
      title: 'Douglas C Martins | Desarrollador Full Stack — DCMARTINS.CO',
      description: 'Douglas C Martins — Desarrollador Full Stack que construye productos digitales escalables con Laravel, PHP y Vue.js. Experiencia en pagos, e-commerce, APIs y arquitectura de software.',
      shareImageAlt: 'Fondo abstracto del portafolio de Douglas C Martins',
    },
    nav: {
      about: 'Sobre',
      projects: 'Proyectos',
      contact: 'Contacto',
      backToTop: 'DCMARTINS.CO — Volver arriba',
      language: 'Idioma',
      main: 'Navegación principal',
    },
    hero: {
      availability: 'Disponible para freelance y tiempo completo',
      location: 'Pedra Azul, MG · Remoto',
      name: 'Douglas C Martins',
      role: 'Desarrollador Backend/Full Stack | PHP, Laravel, MySQL, JavaScript, Vue.js, Angular, Node.js',
      summary: 'Más de 6 años desarrollando y evolucionando aplicaciones web con PHP, Laravel, MySQL, JavaScript, Vue.js, Angular y Node.js, en e-commerce, pagos y productos digitales, con IA en el flujo de desarrollo: prompts, MCP y skills.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      contact: 'Contacto',
      portraitAlt: 'Douglas C Martins',
      linkedin: 'LinkedIn',
      gmail: 'Gmail',
      github: 'GitHub',
    },
    about: {
      label: 'Sobre mí',
      title: ['Código cuidadoso.', 'Impacto real.'],
      paragraphs: [
        'Desarrollador Backend/Full Stack con más de 6 años de experiencia en el desarrollo y la evolución de aplicaciones web, con foco en PHP, Laravel, JavaScript, Vue.js y MySQL.',
        'Actuación en plataformas de e-commerce, pagos y productos digitales, incluida la modernización de sistemas legados, la optimización de consultas, la mensajería, el control de acceso y la seguridad de aplicaciones.',
        'Experiencia en el desarrollo de APIs, la integración de funcionalidades y el uso de IA en el día a día: prompts, MCP y skills para análisis, implementación y revisión de código.',
        'Perfil orientado a resolver problemas técnicos y a evolucionar sistemas existentes, aliando calidad de código, confiabilidad y necesidades del negocio.',
      ],
      focus: ['Arquitectura de software', 'Rendimiento', 'Seguridad'],
    },
    experience: {
      label: 'Experiencia',
      title: 'Donde marqué la diferencia.',
      intro: ['Plataformas digitales, desafíos complejos', 'y la ingeniería detrás de ellos.'],
      jobs: [
        {
          ...sharedJobs.greenn,
          domain: 'Ecosistema de ventas digitales',
          role: 'Desarrollador Back-end',
          period: 'feb. 2025 — sep. 2026',
          linkedinLabel: 'LinkedIn de Greenn',
          achievements: [
            'Refactoricé colas críticas del sistema legado, que retenían mensajes para reprocesamiento, con micro-jobs en PHP y Laravel, y eliminé el requeue de 12 mil mensajes.',
            'Optimicé consultas del ERP, cuyo procesamiento repetía lecturas en la base, usando cursores en MySQL.',
            'Integré Panda IA al flujo de cursos con arquitectura de colas y orquestador de estado, sin webhooks.',
            'Desarrollé componentes en JavaScript y Vue.js y APIs de conversión de moneda para la internacionalización de la plataforma.',
            'Corregí vulnerabilidades de la aplicación siguiendo OWASP e implementé 2FA y ACL.',
            'Refactoricé el flujo de retiros, que trata GMV y chargeback, en el sistema de pagos.',
            'Desarrollé Skills en Cursor y Commands MCP, con DDD y Clean Code como contexto, para análisis, implementación y revisión de código.',
          ],
        },
        {
          ...sharedJobs.tray,
          domain: 'Plataforma de e-commerce',
          role: 'Desarrollador Full Stack semi-senior',
          period: 'oct. 2021 — nov. 2024',
          linkedinLabel: 'LinkedIn de Tray',
          achievements: [
            'Diseñé un servicio de geolocalización en el back-end, en PHP, para el cálculo y el enrutamiento de envíos del Multi-CD.',
            'Desarrollé un motor de ACL para clientes Enterprise y Top Sellers, con control de acceso por IP, horario y perfil.',
            'Conduje la migración de flujos del Backoffice, escritos en PHP legado, a Laravel y Vue.js.',
            'Lideré el diseño técnico de un flujo de configuración guiada para la activación de clientes.',
          ],
        },
        {
          ...sharedJobs.desk360,
          domain: 'Startup del Grupo Locaweb',
          role: 'Desarrollador Full Stack júnior',
          period: 'sep. 2018 — sep. 2021',
          linkedinLabel: 'LinkedIn de Locaweb',
          achievements: [
            'Participé en la evolución de la plataforma omnicanal de atención, desde la etapa inicial, hasta 400+ clientes reales.',
            'Desarrollé APIs REST en PHP y Laravel con JSON:API, modelando relacionamientos de datos en MySQL.',
            'Desarrollé interfaces en JavaScript y Vue.js.',
            'Desarrollé funcionalidades de atención, base de conocimiento y chat interno.',
          ],
        },
        {
          ...sharedJobs.cuca,
          domain: 'Desarrollo de software y web',
          role: 'Programador júnior',
          period: 'mar. 2017 — ago. 2018',
          linkedinLabel: 'LinkedIn de Cuca Fresca Informática',
          achievements: [
            'Migré una herramienta de atención de escritorio, hecha en Clarion, a la web con Angular 4, Node.js y PostgreSQL.',
            'Desarrollé funcionalidades y correcciones en PHP en los sistemas web de la empresa.',
            'Participé en la refactorización del sitio institucional en HTML5, CSS y Bootstrap.',
          ],
        },
      ],
    },
    stack: {
      label: 'Mis herramientas',
      title: 'Las herramientas adecuadas para el trabajo.',
      intro: ['Una base full stack.', 'Siempre aprendiendo, siempre refinando.'],
      groups: ['Lenguajes y frameworks', 'Datos e infraestructura', 'Prácticas y herramientas'],
    },
    education: {
      label: 'Formación',
      title: 'Estudio, rigor y dedicación.',
      academicLabel: 'Formación académica',
      continuingLabel: 'Formación continua',
      academic: [
        {
          id: 'systems-analysis',
          title: 'Análisis y Desarrollo de Sistemas',
          lines: ['Cruzeiro do Sul Virtual · Tecnólogo', 'ago. 2022 — abr. 2026'],
        },
        {
          id: 'internet-computing',
          title: 'Informática para Internet',
          lines: ['ETEC · Cualificación técnica', 'ene. 2015 — dic. 2017'],
        },
      ],
      continuing: [
        {
          id: 'modern-ai',
          title: 'Fundamentos de la IA Moderna',
          lines: ['Machine Learning, LLMs, IA Generativa y Agentes', 'DIO · 2026'],
        },
        {
          id: 'software-architecture',
          title: 'Fundamentos de la Arquitectura de Software Moderna',
          lines: ['Alura', 'Emitido en oct. de 2026'],
        },
        {
          id: 'english',
          title: 'Inglés',
          lines: ['Competencia intermedia'],
        },
      ],
    },
    contactSection: {
      label: 'Conectemos',
      title: ['Construyamos algo', 'que marque la diferencia.'],
      summary: 'Disponible para freelance, tiempo completo y oportunidades remotas.',
      action: 'Hablemos',
    },
    footer: {
      rights: '© 2026 Douglas C Martins. Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
  }),
}
