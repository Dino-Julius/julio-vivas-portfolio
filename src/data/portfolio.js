export const languages = {
  es: {
    label: "ES",
    name: "Español",
    alternate: "en",
  },
  en: {
    label: "EN",
    name: "English",
    alternate: "es",
  },
};

export const sections = [
  { id: "about", path: "about" },
  { id: "experience", path: "experience" },
  { id: "projects", path: "projects" },
  { id: "education", path: "education" },
  { id: "skills", path: "skills" },
  { id: "achievements", path: "achievements" },
  { id: "additional", path: "certifications" },
];

export const portfolio = {
  es: {
    meta: {
      title: "Julio Vivas | Portafolio",
      description:
        "Estudiante de ingeniería de software enfocado en desarrollo full-stack, cloud, observabilidad y herramientas internas.",
    },
    nav: {
      about: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      skills: "Habilidades",
      achievements: "Logros",
      additional: "Certificados",
    },
    actions: {
      theme: "Cambiar tema",
      menu: "Abrir navegación",
      language: "Ver en English",
      resume: "Ver CV",
      contact: "Contacto",
      live: "Ver proyecto",
      code: "Código",
    },
    about: {
      kicker: "Software Developer",
      title: "Julio Cesar Vivas Medina",
      subtitle: "Software Engineering | Full-Stack & Cloud Development",
      location: "Estado de México, México",
      resumeUrl:
        "https://github.com/Dino-Julius/Dino-Julius/blob/main/resume_juliovivas.pdf",
      summary: [
        "Soy estudiante de Ingeniería en Tecnologías Computacionales con experiencia en desarrollo full-stack, servicios cloud, plataformas de observabilidad y programación competitiva.",
        "Actualmente soy Software Development Student Intern en Oracle, contribuyendo a herramientas internas para operaciones de Oracle Database Cloud Services con React, TypeScript, Python, Java y OCI.",
        "Me interesa construir software útil y mantenible: dashboards, APIs, PWAs, automatizaciones, pipelines de datos y herramientas que mejoran flujos de trabajo reales.",
      ],
      contact: {
        email: "jcvmlego@gmail.com",
        phone: "+52 55 2431 7282",
        github: "GitHub",
        linkedin: "LinkedIn",
        linkedinUrl: "https://linkedin.com/in/juliovivas1407",
      },
    },
    education: {
      title: "Educación",
      main: {
        degree: "Ingeniería en Tecnologías Computacionales",
        institution: "Tecnológico de Monterrey, Campus Estado de México",
        period: "Graduación esperada: junio 2026",
        status: "B.S. in Computer Science and Technology",
        gpa: "GPA: 3.7/4.0 (92/100 equivalente)",
        detailsTitle: "Cursos relevantes",
        details: [
          "Estructuras de datos y algoritmos",
          "Programación orientada a objetos",
          "Ingeniería de software",
          "IoT",
          "Machine Learning y ciencia de datos",
          "Redes y seguridad CCNA",
          "Desarrollo web, móvil y de videojuegos",
        ],
      },
      additionalTitle: "Formación adicional",
      additional: [],
    },
    experience: {
      title: "Experiencia",
      usedTechnologies: "Tecnologías",
      items: [
        {
          title: "Software Development Student Intern",
          company:
            "Oracle | Database Cloud Services Operations | DBaaS OneView",
          period: "Julio 2025 - Junio 2026",
          type: "Híbrido",
          achievements: [
            "Desarrollo y mantengo funcionalidades frontend con React, TypeScript y Ant Design para mejorar visualización de datos y flujos internos.",
            "Integro REST APIs y apoyo servicios backend en Python y Java para herramientas de operaciones cloud.",
            "Contribuyo a herramientas internas con IA para recolección de feedback, analítica y automatización de workflows.",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Ant Design",
            "Python",
            "Java",
            "REST APIs",
            "OCI",
          ],
        },
        {
          title: "Mobile Software Developer",
          company: "Fundación Todas Brillamos & Toallas Zazil",
          period: "Octubre 2024 - Enero 2025",
          type: "Híbrido",
          achievements: [
            "Construí una aplicación Android en Kotlin para apoyar ventas de Toallas ZAZIL.",
            "Entregué backend en Node.js con PostgreSQL y REST APIs, además de una web administrativa en React con Nginx.",
            "Desplegué el sistema con Docker Compose e integré un chatbot con LLaMA 3.1 para FAQs e información.",
          ],
          technologies: [
            "Android Studio",
            "Kotlin",
            "Node.js",
            "React",
            "PostgreSQL",
            "Docker",
            "Nginx",
            "LLaMA 3.1",
          ],
        },
        {
          title: "Software Junior Developer",
          company: "Soltis",
          period: "Marzo 2022 - Junio 2024",
          type: "Híbrido",
          achievements: [
            "Construí y mantuve aplicaciones web y servicios en frontend y backend.",
            "Configuré redes y hardware de seguridad, incluyendo cámaras, LAN y soporte en sitio.",
            "Apoyé la entrega de proyectos de TI para mejorar flujos internos y confiabilidad operativa.",
          ],
          technologies: [
            "Web Development",
            "IT Infrastructure",
            "Security Systems",
            "Networking",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      featureTitle: "Enfoque",
      metricsTitle: "Métricas",
      items: [
        {
          title: "FWC 2026 Sticker Album Tracker",
          period: "Mayo 2026",
          description:
            "Mobile-first PWA para controlar estampas faltantes, repetidas e intercambiables del álbum Panini/FIFA World Cup 2026.",
          features: [
            "Frontend: PWA mobile-first con React, TypeScript y Vite para seguimiento de colección",
            "Persistencia: catálogo de 994 stickers con progreso local en localStorage",
            "Backend: autenticación opcional y sincronización en Supabase para progreso e intercambios",
            "CI/CD: despliegue en GitHub Pages con GitHub Actions y routing de producción en Vite",
          ],
          technologies: [
            "React",
            "Vite",
            "TypeScript",
            "Supabase",
            "PWA",
            "GitHub Pages",
          ],
          category: "Mobile PWA",
          featured: true,
          links: {
            live: "https://dino-julius.github.io/my-sticker-album-tracker-fwc-2026/",
            code: "https://github.com/Dino-Julius/my-sticker-album-tracker-fwc-2026",
          },
        },
        {
          title: "WhisperTrend Market Intelligence Platform",
          period: "Enero 2025 - Junio 2025",
          description:
            "Plataforma que correlaciona movimientos de mercado con noticias y sentimiento social.",
          features: [
            "Web: dashboards en React y TypeScript para visualización de datos de mercado",
            "Backend: APIs en Rust y workflows de datos para integración y automatización",
            "Data pipeline: recolección y agregación desde múltiples fuentes para correlacionar tendencias con noticias y sentimiento",
            "Infraestructura: servicios containerizados con Docker Compose para simplificar setup",
            "Impacto: habilitó insights accionables y apoyó toma de decisiones estratégicas en una plataforma end-to-end",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Rust",
            "Data Pipelines",
            "Docker Compose",
          ],
          category: "Market Intelligence",
          featured: true,
          links: {
            code: "https://github.com/TecMrDocs/Cropopoly3-WhisperTrend",
          },
        },
        {
          title: "Smart Traffic Multi-Agent System",
          period: "Agosto 2024 - Diciembre 2024",
          description:
            "Simulación de tráfico en Python que optimiza flujo mediante agentes inteligentes.",
          features: [
            "Modelado: agentes de vehículos, peatones y semáforos usando PEAS y AUML",
            "Coordinación: protocolos de mensajes y reglas para coordinación en tiempo real",
            "Arquitectura: diagramas AUML/UML de organización e interacción entre agentes",
            "Simulación: entorno en Python con Mesa y comportamiento adaptativo basado en densidad de tráfico",
            "Impacto: mejoró el flujo simulado con coordinación inteligente de semáforos y mecanismos de seguridad peatonal",
          ],
          technologies: [
            "Python",
            "Mesa",
            "Multi-Agent Systems",
            "PEAS",
            "AUML",
            "UML",
          ],
          category: "AI Simulation",
          links: {
            code: "https://github.com/Dino-Julius/Reto-TC2008B.301.E6-SMA",
          },
        },
        {
          title: "Graphical Voyage with MATLAB",
          period: "Febrero 2023 - Junio 2024",
          description:
            "Simulaciones visuales interactivas para mejorar la comprensión de principios físicos y matemáticos.",
          features: [
            "Tiro parabólico y caída libre con rebote",
            "Oscilador armónico con visualización de energía",
            "Integración rectangular, trapezoidal y Simpson",
            "Gram-Schmidt en tres dimensiones",
          ],
          technologies: [
            "MATLAB",
            "Physics Simulation",
            "Mathematical Modeling",
          ],
          category: "Scientific Computing",
        },
        {
          title: "Spell Checker in C++",
          period: "Agosto 2023 - Diciembre 2023",
          description:
            "Corrector ortográfico de alto rendimiento creado para la clase de estructuras de datos y algoritmos.",
          features: [
            "Verifica más de 70,000 palabras en inglés",
            "Genera sugerencias basadas en errores tipográficos",
            "Usa tablas hash para complejidad lineal",
            "Procesa hasta 2x10^8 palabras por segundo",
          ],
          technologies: ["C++", "Data Structures", "Algorithms", "Hash Tables"],
          category: "Algorithm Development",
        },
        {
          title: "BASIC Lexicographic Highlighter",
          period: "Febrero 2024 - Mayo 2024",
          description:
            "Resaltador lexicográfico para programas BASIC implementado en Clojure.",
          features: [
            "Reconocimiento de números, cadenas, variables y comentarios",
            "Validación de sintaxis y categorización de palabras reservadas",
          ],
          technologies: ["Clojure", "Regular Expressions", "Lexical Analysis"],
          category: "Language Processing",
        },
      ],
    },
    achievements: {
      title: "Logros",
      competenciesTitle: "Competencias profesionales",
      rolesTitle: "Roles",
      achievementsTitle: "Logros",
      items: [
        {
          title: "ICPC México Finalist 2025",
          description: "Lugar 94/140 en la final ICPC México.",
          period: "Noviembre 2025",
          category: "Competitive Programming",
        },
        {
          title: "ICPC México Finalist 2024",
          description:
            "Lugar 88/120 en la final México y 305/475 en los concursos regionales de Latinoamérica.",
          period: "Noviembre 2024",
          category: "Competitive Programming",
        },
        {
          title: "Exjugador profesional de fútbol",
          description:
            "Exjugador de tercera división profesional, experiencia que fortaleció disciplina, comunicación y trabajo en equipo.",
          period: "Liga TDP",
          category: "Sports",
          link: "https://www.ligamx.net/cancha/jugador/136413",
          achievements: [
            "Disciplina deportiva de alto rendimiento",
            "Liderazgo y trabajo en equipo",
            "Experiencia en ambientes competitivos",
          ],
        },
      ],
      competencies: [
        {
          category: "Liderazgo y trabajo en equipo",
          skills: [
            "Liderazgo de proyectos",
            "Trabajo en equipo",
            "Comunicación efectiva",
            "Resolución de conflictos",
          ],
        },
        {
          category: "Metodologías y prácticas",
          skills: [
            "Metodologías ágiles",
            "SCRUM",
            "Pensamiento analítico",
            "Atención al detalle",
          ],
        },
        {
          category: "Habilidades personales",
          skills: [
            "Autoaprendizaje",
            "Adaptabilidad",
            "Proactividad",
            "Empatía",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades técnicas e intereses",
      groups: [
        {
          title: "Lenguajes",
          featured: ["C++", "Python", "TypeScript"],
          skills: ["Java", "JavaScript", "Rust", "Kotlin"],
        },
        {
          title: "Full-stack",
          skills: [
            "React/TypeScript front ends",
            "Java back ends",
            "Python back ends",
            "Node.js back ends",
            "REST APIs",
            "PWAs",
          ],
        },
        {
          title: "Cloud, data y tools",
          skills: [
            "OCI",
            "Docker",
            "DevOps",
            "SQL databases",
            "Cloud databases",
            "Git",
            "GitHub",
            "Bitbucket",
            "JIRA",
          ],
        },
        {
          title: "Intereses",
          skills: [
            "Competitive programming",
            "LEGO",
            "Soccer",
            "Videogames",
            "Anime",
          ],
        },
      ],
    },
    additional: {
      title: "Certificados",
      skillsTitle: "Habilidades",
      continuousTitle: "Desarrollo continuo",
      continuousText:
        "Busco oportunidades para expandir mis conocimientos y mantenerme actualizado con tecnologías, metodologías y prácticas de ingeniería.",
      items: [
        {
          title:
            "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
          organization: "Oracle",
          period: "Octubre 2025",
          description:
            "Certificación enfocada en fundamentos de Oracle Cloud Infrastructure.",
          skills: ["OCI", "Cloud foundations", "Cloud services"],
          type: "Certificación cloud",
          link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3B46272AA279D3618D4B40C5678116671FF52840121CA4997B2B38F3BCA57768",
        },
        {
          title:
            "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
          organization: "Oracle",
          period: "Octubre 2025",
          description:
            "Certificación enfocada en fundamentos de IA dentro del ecosistema OCI.",
          skills: ["OCI", "AI foundations", "Cloud AI"],
          type: "Certificación AI",
          link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=092D8AE57607F180D61739C007D94C7AACDD2EFD0367318E32696A155FDC3D28",
        },
      ],
    },
    footer: {
      tagline: "Software Engineering | Full-Stack & Cloud Development",
      social: "Redes",
      rights: "Todos los derechos reservados.",
      built: "Desarrollado con React y Vite.",
    },
  },
  en: {
    meta: {
      title: "Julio Vivas | Portfolio",
      description:
        "Software Engineering focused on full-stack development, cloud services, observability, and internal tools.",
    },
    nav: {
      about: "Home",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      achievements: "Achievements",
      additional: "Certifications",
    },
    actions: {
      theme: "Toggle theme",
      menu: "Open navigation",
      language: "Ver en Español",
      resume: "View resume",
      contact: "Contact",
      live: "View project",
      code: "Code",
    },
    about: {
      kicker: "Software Developer",
      title: "Julio Cesar Vivas Medina",
      subtitle: "Software Engineering | Full-Stack & Cloud Development",
      location: "State of Mexico, Mexico",
      resumeUrl:
        "https://github.com/Dino-Julius/Dino-Julius/blob/main/resume_juliovivas.pdf",
      summary: [
        "I am a Computer Science and Technology student with experience in full-stack development, cloud services, observability platforms, and competitive programming.",
        "I am currently a Software Development Student Intern at Oracle, contributing to internal tools for Oracle Database Cloud Services operations with React, TypeScript, Python, Java, and OCI.",
        "I like building useful, maintainable software: dashboards, APIs, PWAs, automations, data pipelines, and tools that improve real workflows.",
      ],
      contact: {
        email: "jcvmlego@gmail.com",
        phone: "+52 55 2431 7282",
        github: "GitHub",
        linkedin: "LinkedIn",
        linkedinUrl: "https://linkedin.com/in/juliovivas1407",
      },
    },
    education: {
      title: "Education",
      main: {
        degree: "B.S. in Computer Science and Technology",
        institution: "Tecnológico de Monterrey, Campus Estado de México",
        period: "Expected graduation: June 2026",
        status: "Software Engineering Student",
        gpa: "GPA: 3.7/4.0 (92/100 equivalent)",
        detailsTitle: "Relevant coursework",
        details: [
          "Data structures and algorithms",
          "Object-oriented programming",
          "Software engineering",
          "IoT",
          "Machine learning and data science",
          "CCNA networking and security",
          "Web, mobile, and game development",
        ],
      },
      additionalTitle: "Additional education",
      additional: [],
    },
    experience: {
      title: "Experience",
      usedTechnologies: "Technologies",
      items: [
        {
          title: "Software Development Student Intern",
          company:
            "Oracle | Database Cloud Services Operations | DBaaS OneView",
          period: "July 2025 - June 2026",
          type: "Hybrid",
          achievements: [
            "Developed and maintained front-end features using React, TypeScript, and Ant Design to improve data visualization and internal workflows.",
            "Integrated REST APIs and supported backend services in Python and Java for cloud operations tooling.",
            "Contributed to AI-powered internal tools for feedback collection, analytics, and workflow automation.",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Ant Design",
            "Python",
            "Java",
            "REST APIs",
            "OCI",
          ],
        },
        {
          title: "Mobile Software Developer",
          company: "Fundación Todas Brillamos & Toallas Zazil",
          period: "October 2024 - January 2025",
          type: "Hybrid",
          achievements: [
            "Built a Kotlin Android app for Fundación Todas Brillamos to support Toallas ZAZIL sales.",
            "Delivered a Node.js and PostgreSQL REST backend plus a React and Nginx admin web app.",
            "Deployed with Docker Compose and added a LLaMA 3.1 AI chatbot for FAQs and information.",
          ],
          technologies: [
            "Android Studio",
            "Kotlin",
            "Node.js",
            "React",
            "PostgreSQL",
            "Docker",
            "Nginx",
            "LLaMA 3.1",
          ],
        },
        {
          title: "Software Junior Developer",
          company: "Soltis",
          period: "March 2022 - June 2024",
          type: "Hybrid",
          achievements: [
            "Built and maintained web apps and services across frontend and backend.",
            "Set up networks and security hardware, including cameras, LAN, and on-site troubleshooting.",
            "Supported IT project delivery, improving internal workflows and operational reliability.",
          ],
          technologies: [
            "Web Development",
            "IT Infrastructure",
            "Security Systems",
            "Networking",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      featureTitle: "Focus",
      metricsTitle: "Metrics",
      items: [
        {
          title: "FWC 2026 Sticker Album Tracker",
          period: "May 2026",
          description:
            "Mobile-first PWA for tracking missing, duplicate, and tradeable stickers for the Panini/FIFA World Cup 2026 album.",
          features: [
            "Frontend: mobile-first PWA built with React, TypeScript, and Vite for sticker collection tracking",
            "State persistence: 994-sticker catalog with local progress tracking through localStorage",
            "Backend integration: optional Supabase authentication and cloud synchronization for progress and trades",
            "CI/CD deployment: GitHub Pages deployment with GitHub Actions and Vite production routing",
          ],
          technologies: [
            "React",
            "Vite",
            "TypeScript",
            "Supabase",
            "PWA",
            "GitHub Pages",
          ],
          category: "Mobile PWA",
          featured: true,
          links: {
            live: "https://dino-julius.github.io/my-sticker-album-tracker-fwc-2026/",
            code: "https://github.com/Dino-Julius/my-sticker-album-tracker-fwc-2026",
          },
        },
        {
          title: "WhisperTrend Market Intelligence Platform",
          period: "January 2025 - June 2025",
          description:
            "Platform that correlates market moves with news and social sentiment.",
          features: [
            "Web development: React and TypeScript dashboards for market data visualization",
            "Backend engineering: Rust APIs and data workflows for platform integration and automation",
            "Data pipeline: automated collection and aggregation from multiple sources to correlate trends with news and sentiment",
            "Infrastructure: containerized services deployed with Docker Compose to streamline setup",
            "Impact: enabled actionable insights and supported strategic decision-making through a robust end-to-end platform",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Rust",
            "Data Pipelines",
            "Docker Compose",
          ],
          category: "Market Intelligence",
          featured: true,
          links: {
            code: "https://github.com/TecMrDocs/Cropopoly3-WhisperTrend",
          },
        },
        {
          title: "Smart Traffic Multi-Agent System",
          period: "August 2024 - December 2024",
          description:
            "Python-based traffic simulation optimizing flow via smart agents.",
          features: [
            "Agent modeling: vehicle, pedestrian, and traffic-light agents using PEAS and AUML frameworks",
            "Coordination logic: message protocols and rules for real-time coordination between agents",
            "Architecture: AUML/UML organization and interaction diagrams for inter-agent behavior",
            "Simulation: Python Mesa environment with adaptive behavior based on traffic density",
            "Impact: improved simulated traffic flow through smart light coordination and pedestrian safety mechanisms",
          ],
          technologies: [
            "Python",
            "Mesa",
            "Multi-Agent Systems",
            "PEAS",
            "AUML",
            "UML",
          ],
          category: "AI Simulation",
          links: {
            code: "https://github.com/Dino-Julius/Reto-TC2008B.301.E6-SMA",
          },
        },
        {
          title: "Graphical Voyage with MATLAB",
          period: "February 2023 - June 2024",
          description:
            "Interactive visual simulations for understanding physics and mathematical principles.",
          features: [
            "Projectile motion and bouncing free fall",
            "Harmonic oscillator with energy visualization",
            "Rectangular, trapezoidal, and Simpson integration",
            "Three-dimensional Gram-Schmidt process",
          ],
          technologies: [
            "MATLAB",
            "Physics Simulation",
            "Mathematical Modeling",
          ],
          category: "Scientific Computing",
        },
        {
          title: "Spell Checker in C++",
          period: "August 2023 - December 2023",
          description:
            "High-performance spell checker created for a data structures and algorithms course.",
          features: [
            "Checks more than 70,000 English words",
            "Generates suggestions based on typing errors",
            "Uses hash tables to achieve linear complexity",
            "Processes up to 2x10^8 words per second",
          ],
          technologies: ["C++", "Data Structures", "Algorithms", "Hash Tables"],
          category: "Algorithm Development",
        },
        {
          title: "BASIC Lexicographic Highlighter",
          period: "February 2024 - May 2024",
          description:
            "Lexicographic highlighter for BASIC programs implemented in Clojure.",
          features: [
            "Recognizes numbers, strings, variables, and comments",
            "Validates syntax and categorizes reserved words",
          ],
          technologies: ["Clojure", "Regular Expressions", "Lexical Analysis"],
          category: "Language Processing",
        },
      ],
    },
    achievements: {
      title: "Achievements",
      competenciesTitle: "Professional competencies",
      rolesTitle: "Roles",
      achievementsTitle: "Achievements",
      items: [
        {
          title: "ICPC Mexico Finalist 2025",
          description: "Ranked 94/140 in the ICPC Mexico Finals.",
          period: "November 2025",
          category: "Competitive Programming",
        },
        {
          title: "ICPC Mexico Finalist 2024",
          description:
            "Ranked 88/120 in the Mexico finals and 305/475 in Latin American regional contests.",
          period: "November 2024",
          category: "Competitive Programming",
        },
        {
          title: "Former professional soccer player",
          description:
            "Former third-division professional soccer player, strengthening discipline, communication, and teamwork.",
          period: "Liga TDP",
          category: "Sports",
          link: "https://www.ligamx.net/cancha/jugador/136413",
          achievements: [
            "High-performance sports discipline",
            "Leadership and teamwork",
            "Competitive environment experience",
          ],
        },
      ],
      competencies: [
        {
          category: "Leadership and teamwork",
          skills: [
            "Project leadership",
            "Teamwork",
            "Effective communication",
            "Conflict resolution",
          ],
        },
        {
          category: "Methods and practices",
          skills: [
            "Agile methodologies",
            "SCRUM",
            "Analytical thinking",
            "Attention to detail",
          ],
        },
        {
          category: "Personal skills",
          skills: ["Self-learning", "Adaptability", "Proactivity", "Empathy"],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "Languages",
          featured: ["C++", "Python", "TypeScript"],
          skills: ["Java", "JavaScript", "Rust", "Kotlin"],
        },
        {
          title: "Full-stack",
          skills: [
            "React/TypeScript front ends",
            "Java back ends",
            "Python back ends",
            "Node.js back ends",
            "REST APIs",
            "PWAs",
          ],
        },
        {
          title: "Cloud, data, and tools",
          skills: [
            "OCI",
            "Docker",
            "DevOps",
            "SQL databases",
            "Cloud databases",
            "Git",
            "GitHub",
            "Bitbucket",
            "JIRA",
          ],
        },
        {
          title: "Interests",
          skills: [
            "Competitive programming",
            "LEGO",
            "Soccer",
            "Videogames",
            "Anime",
          ],
        },
      ],
    },
    additional: {
      title: "Certifications",
      skillsTitle: "Skills",
      continuousTitle: "Continuous learning",
      continuousText:
        "I keep looking for opportunities to expand my knowledge and stay current with engineering technologies, methods, and practices.",
      items: [
        {
          title:
            "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
          organization: "Oracle",
          period: "October 2025",
          description:
            "Certification focused on Oracle Cloud Infrastructure foundations.",
          skills: ["OCI", "Cloud foundations", "Cloud services"],
          type: "Cloud certification",
          link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3B46272AA279D3618D4B40C5678116671FF52840121CA4997B2B38F3BCA57768",
        },
        {
          title:
            "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
          organization: "Oracle",
          period: "October 2025",
          description:
            "Certification focused on AI foundations within the OCI ecosystem.",
          skills: ["OCI", "AI foundations", "Cloud AI"],
          type: "AI certification",
          link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=092D8AE57607F180D61739C007D94C7AACDD2EFD0367318E32696A155FDC3D28",
        },
      ],
    },
    footer: {
      tagline: "Software Engineering | Full-Stack & Cloud Development",
      social: "Social",
      rights: "All rights reserved.",
      built: "Built with React and Vite.",
    },
  },
};
