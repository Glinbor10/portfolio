export type Lang = "es" | "en";

export interface Bilingual {
  es: string;
  en: string;
}

export interface NowItem {
  emoji: string;
  text: Bilingual;
}

export interface ExperienceJob {
  role: Bilingual;
  date: Bilingual;
  org: string;
  current: boolean;
  bullets: Bilingual[];
}

export interface Project {
  name: string;
  date: Bilingual;
  tech: string[];
  problem: Bilingual;
  action: Bilingual;
  result: Bilingual;
  link: string;
  featured: boolean;
}

export interface SkillGroup {
  title: Bilingual;
  tags: string[];
}

export interface BeyondCard {
  emoji: string;
  title: Bilingual;
  text: Bilingual;
}

export const nav = {
  about: { es: "Sobre mí", en: "About me" },
  projects: { es: "Proyectos", en: "Projects" },
  now: { es: "Ahora", en: "Now" },
  experience: { es: "Experiencia", en: "Experience" },
  skills: { es: "Aptitudes", en: "Skills" },
  beyond: { es: "Fuera del código", en: "Beyond code" },
  contact: { es: "Contacto", en: "Contact" },
} satisfies Record<string, Bilingual>;

export const hero = {
  eyebrow: { es: "Ingeniero de Software · Sevilla, España", en: "Software Engineer · Seville, Spain" },
  tagline: {
    es: "Construyo software backend seguro y en la nube, y aprendo rápido lo que haga falta para conseguirlo.",
    en: "I build secure backend and cloud software, and learn fast whatever it takes to get there.",
  },
  badge1: { es: "Ing. Informática · US", en: "Computer Engineering · Univ. of Seville" },
  badge2: { es: "Software Engineer @ Viafirma", en: "Software Engineer @ Viafirma" },
};

export const about = {
  title: nav.about,
  p1: {
    es: "Soy Ingeniero de Software en Viafirma (Sevilla), especializado en backend, seguridad aplicada e infraestructura cloud.",
    en: "I'm a Software Engineer at Viafirma (Seville), focused on backend, applied security and cloud infrastructure.",
  },
  p2: {
    es: "Empecé como becario de Ingeniería de Software en enero de 2026. Las prácticas estaban planificadas para 10 meses, pero en solo 4 pasé a formar parte del equipo como ingeniero a tiempo completo: adelanté 6 meses el final previsto gracias a la rapidez de adaptación al equipo.",
    en: "I started as a Software Engineering intern in January 2026. The internship was planned for 10 months, but in just 4 I joined the team as a full-time engineer: 6 months ahead of schedule, thanks to how quickly I adapted to the team.",
  },
  stat1: { es: "meses de becario a ingeniero", en: "months from intern to engineer" },
  stat2: { es: "nota del TFG", en: "final project grade" },
  stat3: { es: "proyectos personales publicados", en: "personal projects published" },
};

export const now = {
  title: { es: "Ahora mismo", en: "Right now" },
  lead: { es: "Esto es lo que tengo entre manos estos días:", en: "Here's what I'm working on these days:" },
  items: [
    {
      emoji: "🚀",
      text: {
        es: "Modernizando infraestructura: migrando decenas de servicios a una nube basada en Docker y Kubernetes.",
        en: "Modernizing infrastructure: migrating dozens of services to a Docker and Kubernetes powered cloud.",
      },
    },
    {
      emoji: "🔐",
      text: {
        es: "Aplicando ciberseguridad en cada capa de lo que construyo, para proteger datos y usuarios reales.",
        en: "Applying cybersecurity at every layer of what I build, to protect real data and real users.",
      },
    },
    {
      emoji: "🧠",
      text: {
        es: "Llevando la IA generativa a mi día a día de desarrollo, con Claude Code como copiloto para programar más rápido y mejor.",
        en: "Bringing generative AI into my daily development flow, with Claude Code as a copilot to code faster and better.",
      },
    },
    {
      emoji: "☕",
      text: {
        es: "Construyendo backend sólido con Java y Spring, sin perder de vista Python para proyectos de inteligencia artificial.",
        en: "Building solid backend systems with Java and Spring, while keeping an eye on Python for AI projects.",
      },
    },
  ] satisfies NowItem[],
};

export const experience = {
  title: nav.experience,
  jobs: [
    {
      role: { es: "Ingeniero de Software", en: "Software Engineer" },
      date: { es: "jun. 2026 – actualidad", en: "Jun 2026 – present" },
      org: "Viafirma · Tomares, Sevilla",
      current: true,
      bullets: [
        {
          es: "Diseñé e implementé un sistema de notificaciones en tiempo real (WebSocket, webhooks configurables, email) sobre el estado de evidencias electrónicas.",
          en: "Designed and implemented a real-time notification system (WebSocket, configurable webhooks, email) for electronic evidence status.",
        },
        {
          es: "Desarrollé un módulo de librería compartida (arquitectura SPI) para gestión cifrada de configuración, adoptado en varios microservicios.",
          en: "Built a shared library module (SPI-based) for encrypted configuration management, adopted across several microservices.",
        },
        {
          es: "Lideré la adopción de cabeceras de seguridad web (CSP, HSTS, Permissions-Policy) en frontales de producción.",
          en: "Led the rollout of web security headers (CSP, HSTS, Permissions-Policy) across production front-ends.",
        },
        {
          es: "Lideré la migración de decenas de servicios de infraestructura legacy a una nueva plataforma Docker/Kubernetes/Helm.",
          en: "Led the migration of dozens of legacy infrastructure services to a new Docker/Kubernetes/Helm platform.",
        },
      ],
    },
    {
      role: { es: "Becario de Ingeniería de Software", en: "Software Engineering Intern" },
      date: { es: "ene. 2026 – may. 2026", en: "Jan 2026 – May 2026" },
      org: "Viafirma · Tomares, Sevilla",
      current: false,
      bullets: [
        {
          es: "Migré el stack de un microservicio backend a Spring Boot y Java 21.",
          en: "Migrated a backend microservice's stack to Spring Boot and Java 21.",
        },
        {
          es: "Desarrollé funcionalidades del motor de comunicaciones certificadas: evidencias forenses en XML, adjuntos en Amazon S3.",
          en: "Built features for the certified-communications engine: forensic evidence in XML, attachments on Amazon S3.",
        },
        {
          es: "Trabajé con Docker en el empaquetado de servicios y diseñé infraestructura como código (Helm/Kubernetes).",
          en: "Worked with Docker to package services and designed infrastructure as code (Helm/Kubernetes).",
        },
      ],
    },
    {
      role: { es: "Web Developer / Machine Learning", en: "Web Developer / Machine Learning" },
      date: { es: "jul. 2024 – sept. 2024", en: "Jul 2024 – Sep 2024" },
      org: "Vitamina Tech · Sevilla",
      current: false,
      bullets: [],
    },
  ] satisfies ExperienceJob[],
};

export const projects = {
  title: nav.projects,
  lead: {
    es: "Distintos stacks, mismo interés: construir cosas que funcionen de verdad.",
    en: "Different stacks, same interest: building things that actually work.",
  },
  items: [
    {
      name: "SectorMindAI",
      date: { es: "nov. 2025 – jun. 2026 · TFG, nota 9,4", en: "Nov 2025 – Jun 2026 · Final project, grade 9.4" },
      tech: ["Python", "Flask", "Rasa", "PostgreSQL", "Docker"],
      problem: {
        es: "Los pequeños negocios de servicios (peluquerías, clínicas) pierden citas por no tener un sistema de reservas accesible, y muchos clientes no se manejan bien con formularios tradicionales.",
        en: "Small service businesses (salons, clinics) lose bookings for lacking an accessible reservation system, and many customers struggle with traditional forms.",
      },
      action: {
        es: "Diseñé una plataforma full-stack con API REST en Flask y un asistente conversacional de IA (Rasa) que permite reservar por texto o voz, con geolocalización en tiempo real sobre PostgreSQL.",
        en: "I designed a full-stack platform with a Flask REST API and a conversational AI assistant (Rasa) that lets people book by text or voice, with real-time geolocation over PostgreSQL.",
      },
      result: {
        es: "Trabajo de Fin de Grado con nota 9,4 y más de 150 tests automatizados.",
        en: "Final degree project graded 9.4/10, backed by 150+ automated tests.",
      },
      link: "https://github.com/Glinbor10/SectorMindAI",
      featured: true,
    },
    {
      name: "StreetAsk",
      date: { es: "feb. 2026 – may. 2026 · Scrum Master", en: "Feb 2026 – May 2026 · Scrum Master" },
      tech: ["Java", "Spring Boot", "MySQL", "Flyway", "GitHub Actions"],
      problem: {
        es: "Un equipo de 20 personas necesitaba mantener estable el despliegue de una plataforma de Q&A geolocalizada bajo entregas semanales auditadas por profesores.",
        en: "A 20-person team needed to keep deployment stable for a geolocated Q&A platform, under weekly deliveries audited by professors.",
      },
      action: {
        es: "Como Scrum Master, lideré la infraestructura y el despliegue: migración a MySQL con Flyway, entornos de pre-producción y pipelines de CI/CD.",
        en: "As Scrum Master, I led infrastructure and deployment: migration to MySQL with Flyway, pre-production environments and CI/CD pipelines.",
      },
      result: {
        es: "Entregas semanales sin bloqueos por infraestructura; el proyecto ganó dos premios académicos entre los mejores de la asignatura.",
        en: "Weekly deliveries with no infrastructure blockers; the project won two academic awards among the course's best.",
      },
      link: "https://github.com/StreetAsk-ISPP/ISPP-G10",
      featured: true,
    },
    {
      name: "Análisis de Posiciones en Fútbol (IA)",
      date: { es: "may. 2025 – jun. 2025", en: "May 2025 – Jun 2025" },
      tech: ["Python", "scikit-learn", "XGBoost", "NetworkX"],
      problem: {
        es: "Clasificar la posición táctica de un jugador solo a partir de sus pases, sin datos de posición explícitos, es un problema de aprendizaje relacional no trivial.",
        en: "Classifying a player's tactical position from passing data alone, with no explicit position labels, is a non-trivial relational learning problem.",
      },
      action: {
        es: "Construí redes de pases por partido de Champions League (2000-2019), calculé métricas de centralidad y entrené 5 modelos de ML (Random Forest, SVM, XGBoost, KNN, MLP).",
        en: "I built passing networks per Champions League match (2000-2019), computed centrality metrics and trained 5 ML models (Random Forest, SVM, XGBoost, KNN, MLP).",
      },
      result: {
        es: "Comparativa documentada de los 5 modelos, identificando cuál generalizaba mejor entre posiciones tácticas.",
        en: "Documented comparison of all 5 models, identifying which generalized best across tactical positions.",
      },
      link: "https://github.com/Glinbor10/IA-Analisis-pases-posiciones-futbol",
      featured: false,
    },
    {
      name: "FastAPI · API REST con JWT",
      date: { es: "may. 2024 – jun. 2024", en: "May 2024 – Jun 2024" },
      tech: ["Python", "FastAPI", "JWT", "SQLite"],
      problem: {
        es: "Practicar un patrón de autenticación stateless real en una API REST, más allá de un CRUD básico.",
        en: "Practice a real stateless authentication pattern in a REST API, beyond a basic CRUD.",
      },
      action: {
        es: "Implementé autenticación JWT con middlewares propios, validación de datos con Pydantic y persistencia con SQLAlchemy.",
        en: "I implemented JWT authentication with custom middlewares, Pydantic data validation and SQLAlchemy persistence.",
      },
      result: {
        es: "API funcional con rutas protegidas por rol y documentación interactiva automática (OpenAPI).",
        en: "Working API with role-protected routes and automatic interactive documentation (OpenAPI).",
      },
      link: "https://github.com/Glinbor10/CURSO-FastAPI",
      featured: false,
    },
  ] satisfies Project[],
};

export const skills = {
  title: nav.skills,
  groups: [
    { title: { es: "Backend", en: "Backend" }, tags: ["Java", "Spring Boot", "Spring Security", "Python", "Flask", "FastAPI"] },
    { title: { es: "DevOps y Cloud", en: "DevOps & Cloud" }, tags: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "CI/CD"] },
    { title: { es: "Seguridad", en: "Security" }, tags: ["Seguridad de aplicaciones web", "JWT", "Gestión de CVEs", "Firma electrónica"] },
    { title: { es: "Datos", en: "Data" }, tags: ["MySQL", "PostgreSQL", "SQLite"] },
    { title: { es: "IA y otros", en: "AI & others" }, tags: ["Claude Code", "Rasa", "scikit-learn", "WebSockets", "React"] },
  ] satisfies SkillGroup[],
};

export const beyond = {
  title: nav.beyond,
  cards: [
    {
      emoji: "🤾",
      title: { es: "Balonmano federado", en: "Competitive handball" },
      text: {
        es: "Jugué federado a buen nivel desde alevín (11 años) hasta los 18, disputando torneos nacionales: siete años de disciplina y trabajo en equipo.",
        en: "I played competitively at a strong level from age 11 to 18, competing in national tournaments: seven years of discipline and teamwork.",
      },
    },
    {
      emoji: "🍽️",
      title: { es: "Hostelería", en: "Hospitality" },
      text: {
        es: "Trabajé en un catering hasta llegar a maître, liderando equipos y tomando decisiones bajo presión, antes de dedicarme por completo a la ingeniería de software.",
        en: "I worked at a catering company up to head waiter, leading teams and making decisions under pressure, before fully committing to software engineering.",
      },
    },
  ] satisfies BeyondCard[],
  note: {
    es: "Dos etapas que me enseñaron a ganarme la confianza de un equipo rápido: el mismo patrón que se repite en mi paso de becario a ingeniero.",
    en: "Two chapters that taught me how to earn a team's trust fast: the same pattern behind my jump from intern to engineer.",
  },
};

export const contact = {
  title: { es: "Hablemos", en: "Let's talk" },
  lead: {
    es: "¿Buscas a alguien para tu equipo? Estoy abierto a nuevas oportunidades.",
    en: "Looking for someone for your team? I'm open to new opportunities.",
  },
};

export const footer = {
  loc: { es: "Sevilla, España", en: "Seville, Spain" },
};

export const links = {
  linkedin: "https://www.linkedin.com/in/guillermo-linares-borrego",
  github: "https://github.com/Glinbor10",
  email: "mailto:guillelinares11@gmail.com",
  emailDisplay: "guillelinares11@gmail.com",
};
