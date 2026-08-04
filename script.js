document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const switcherButtons = document.querySelectorAll(".section-switcher-btn");
  const panels = document.querySelectorAll(".content-panel");
  const stickyHeader = document.querySelector(".notebook-sticky-header");
  const notebookTopbar = document.querySelector(".notebook-topbar");
  const sectionSwitcherWrap = document.querySelector(".section-switcher-wrap");

  const projectCards = document.querySelectorAll(".project-card-button");
  const filterButtons = document.querySelectorAll(".project-filter-btn");
  const skillsFilterButtons = document.querySelectorAll(".skills-filter-btn");
  const skillsPanels = document.querySelectorAll("[data-skills-panel]");

  const modal = document.getElementById("project-modal");
  const modalCloseButtons = document.querySelectorAll("[data-close-project-modal]");
  const modalImage = document.getElementById("project-modal-image");
  const modalKicker = document.getElementById("project-modal-kicker");
  const modalTitle = document.getElementById("project-modal-title");
  const modalDescription = document.getElementById("project-modal-description");
  const modalTags = document.getElementById("project-modal-tags");
  const modalResultsList = document.getElementById("project-modal-results-list");
  const modalRepo = document.getElementById("project-modal-repo");
  const modalPrev = document.querySelector(".project-modal-arrow.prev");
  const modalNext = document.querySelector(".project-modal-arrow.next");
  const cvModal = document.getElementById("cv-modal");
  const openCvModalButtons = document.querySelectorAll("[data-open-cv-modal]");
  const closeCvModalButtons = document.querySelectorAll("[data-close-cv-modal]");
  const cvTabButtons = document.querySelectorAll("[data-cv-tab]");
  const cvTabPanels = document.querySelectorAll("[data-cv-panel]");
  const cvExperienceBadges = document.querySelectorAll(".cv-experience-badge");
  const cvPhoneToggle = document.querySelector("[data-cv-phone-toggle]");

  const atlasSearchInput = document.querySelector("[data-atlas-search]");
  const atlasClearSearch = document.querySelector("[data-atlas-clear-search]");
  const atlasMemoryList = document.querySelector("[data-atlas-memory-list]");
  const atlasMemorySummary = document.querySelector("[data-atlas-memory-summary]");
  const atlasComplexityList = document.querySelector("[data-atlas-complexity-list]");
  const atlasClearFilters = document.querySelector("[data-atlas-clear-filters]");
  const atlasResultsCount = document.querySelector("[data-atlas-results-count]");
  const atlasCurrentCategory = document.querySelector("[data-atlas-current-category]");
  const atlasSortSelect = document.querySelector("[data-atlas-sort]");
  const atlasGrid = document.querySelector("[data-atlas-grid]");
  const atlasPagination = document.querySelector("[data-atlas-pagination]");
  const atlasActiveFilters = document.querySelector("[data-atlas-active-filters]");
  const atlasEmptyState = document.querySelector("[data-atlas-empty-state]");
  const atlasFiltersToggle = document.querySelector("[data-atlas-filters-toggle]");
  const atlasSidebar = document.getElementById("atlas-sidebar");
  const atlasNoteModal = document.getElementById("atlas-note-modal");
  const atlasNoteCloseButtons = document.querySelectorAll("[data-close-atlas-note]");
  const atlasNoteKicker = document.getElementById("atlas-note-kicker");
  const atlasNoteTitle = document.getElementById("atlas-note-title");
  const atlasNoteSummary = document.getElementById("atlas-note-summary");
  const atlasNoteLevelBadge = document.getElementById("atlas-note-level-badge");
  const atlasNoteReadingTime = document.getElementById("atlas-note-reading-time");
  const atlasNoteUpdatedAt = document.getElementById("atlas-note-updated-at");
  const atlasNoteTags = document.getElementById("atlas-note-tags");
  const atlasNoteSections = document.getElementById("atlas-note-sections");
  const atlasRelatedGrid = document.getElementById("atlas-related-grid");

  if (!mainContent || !panels.length) {
    return;
  }

  const projects = [
    {
      id: "credit-risk",
      title: "An\u00E1lisis de riesgo crediticio",
      kicker: "Data analysis + riesgo",
      description:
        "Caso orientado a ordenar la evaluaci\u00F3n de solicitudes de pr\u00E9stamo, integrando perfil del cliente, finalidad del cr\u00E9dito, historial y se\u00F1ales de incumplimiento en una lectura visual m\u00E1s clara para apoyar decisiones.",
      image: "project-images/project-fraud-monitoring.png",
      repo: "https://github.com/FredyGR-98/credit-risk-analysis-system",
      filters: ["sql", "python", "viz"],
      tags: ["SQL", "Python", "Visualizaci\u00F3n"],
      results: [
        "Mejor organizaci\u00F3n para revisar riesgo, tipo de hogar y prop\u00F3sito del pr\u00E9stamo.",
        "Segmentaci\u00F3n m\u00E1s clara de solicitudes con mayor probabilidad de incumplimiento.",
        "Dashboard interactivo para monitorear cartera y apoyar seguimiento anal\u00EDtico."
      ]
    },
    {
      id: "breast-cancer",
      title: "Modelo predictivo de tumores mamarios",
      kicker: "Machine learning + salud",
      description:
        "Caso orientado a estructurar mejor la interpretaci\u00F3n de hallazgos cl\u00EDnicos, utilizando machine learning para clasificar diagn\u00F3sticos y un dashboard visual para comunicar patrones, distribuci\u00F3n de casos y se\u00F1ales relevantes.",
      image: "project-images/project-breast-cancer.png",
      repo: "https://github.com/FredyGR-98/detector-cancer-mama-mlops",
      filters: ["sql", "python", "ml", "viz"],
      tags: ["SQL", "Python", "Machine Learning", "Visualizaci\u00F3n"],
      results: [
        "Clasificaci\u00F3n visual de diagn\u00F3sticos benignos y malignos con soporte anal\u00EDtico.",
        "Lectura m\u00E1s clara de distribuci\u00F3n etaria, concentraci\u00F3n de casos y evoluci\u00F3n cl\u00EDnica.",
        "Presentaci\u00F3n t\u00E9cnica m\u00E1s comprensible para comunicar patrones del dataset."
      ]
    }
  ];

  const atlasTopics = [
    "Fundamentos",
    "Hojas de c\u00E1lculo",
    "SQL",
    "Programación",
    "Código",
    "Machine Learning",
    "Visualizaciones"
  ];

  const atlasMlSubcategories = [
    "Fundamentos ML",
    "Modelos supervisados",
    "Clustering y reducción de dimensionalidad",
    "Deep Learning",
    "NLP",
    "MLOps e interpretabilidad"
  ];

  const atlasCategoryMeta = {
    Fundamentos: {
      iconClass: "fa-solid fa-book-bookmark",
      label: "Fundamentos"
    },
    "Hojas de c\u00E1lculo": {
      iconClass: "fa-solid fa-file-excel",
      label: "Hojas de c\u00E1lculo"
    },
    SQL: {
      iconClass: "fa-solid fa-database",
      label: "SQL"
    },
    Código: {
      iconClass: "fa-brands fa-python",
      label: "Código"
    },
    Programación: {
      iconClass: "fa-solid fa-code",
      label: "Programación"
    },
    "Machine Learning": {
      iconClass: "fa-solid fa-brain",
      label: "Machine Learning"
    },
    Visualizaciones: {
      iconClass: "fa-solid fa-chart-column",
      label: "Visualizaciones"
    }
  };

  const complexityLevels = {
    initial: {
      label: "B\u00E1sico",
      character: "Chikorita",
      icon: "img/complexity/level-chikorita.png",
      description: "Ideal para comenzar y refrescar fundamentos"
    },
    basic: {
      label: "Intermedio",
      character: "Bayleef",
      icon: "img/complexity/level-bayleef.png",
      description: "Requiere conceptos base y algo de pr\u00E1ctica"
    },
    intermediate: {
      label: "Avanzado",
      character: "Meganium",
      icon: "img/complexity/level-meganium.png",
      description: "Combina conceptos y aplicaci\u00F3n pr\u00E1ctica"
    },
    advanced: {
      label: "Experto",
      character: "Mega Meganium",
      icon: "img/complexity/level-mega-meganium.png",
      description: "Contenido t\u00E9cnico y de mayor profundidad"
    }
  };

  const atlasNotes = [
    {
      id: "structured-problem-solving",
      slug: "estructurar-problema-antes-de-analizar",
      title: "C\u00F3mo estructurar un problema antes de investigar",
      summary: "Antes de buscar respuestas, conviene ordenar el problema, definir la pregunta y trazar un proceso. Eso evita trabajar de forma emp\u00EDrica y mejora la calidad del an\u00E1lisis.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "initial",
      readingTime: "6 min",
      updatedAt: "2026-08-02",
      tags: ["Proceso", "Pensamiento anal\u00EDtico", "Fundamentos"],
      featured: true,
      contentSections: [
        {
          title: "Idea central",
          body: "Si empiezo a investigar sin ordenar primero el problema, termino probando cosas al azar y gasto tiempo en an\u00E1lisis que no responden lo que realmente importa. Lo que mejor funciona es frenar un momento, aclarar qu\u00E9 quiero resolver, qu\u00E9 necesito entender y qu\u00E9 tipo de respuesta ser\u00EDa \u00FAtil al final."
        },
        {
          title: "Marco que mejor organiza el trabajo",
          body: "Para no trabajar de forma emp\u00EDrica, me sirve pensar el an\u00E1lisis como una secuencia: preguntar, preparar, procesar, analizar, compartir y actuar. No porque haya que seguirla de forma r\u00EDgida, sino porque me obliga a no saltarme pasos clave antes de llegar a una conclusi\u00F3n.",
          example: "Pregunta bien definida \u2192 datos correctos \u2192 limpieza \u2192 an\u00E1lisis \u2192 conclusiones \u2192 recomendaci\u00F3n aplicable"
        },
        {
          title: "Qu\u00E9 conviene definir antes de investigar",
          body: "Antes de abrir Excel, SQL o Python, conviene dejar amarradas algunas cosas b\u00E1sicas: qu\u00E9 decisi\u00F3n quiero apoyar, para qui\u00E9n estoy analizando, qu\u00E9 se ver\u00EDa como un buen resultado y de d\u00F3nde saldr\u00E1 la informaci\u00F3n m\u00E1s confiable. Ese orden previo hace que la investigaci\u00F3n tenga direcci\u00F3n.",
          bestPractices: [
            "Traducir el problema a una pregunta concreta.",
            "Definir qu\u00E9 resultado ser\u00EDa \u00FAtil para negocio o estudio.",
            "Identificar datos confiables antes de analizar.",
            "No saltarse la limpieza ni la validaci\u00F3n del contexto."
          ]
        },
        {
          title: "Por qu\u00E9 no conviene trabajar por intuici\u00F3n",
          body: "Cuando uno se apura por responder, es f\u00E1cil elegir mal las fuentes, limpiar datos sin criterio o ver patrones donde todav\u00EDa no hay evidencia suficiente. El proceso no siempre es lineal, pero igual conviene volver atr\u00E1s cuando algo no cuadra y corregir antes de seguir avanzando."
        },
        {
          title: "Caso que refuerza esta idea",
          body: "El curso muestra un ejemplo bien claro con un equipo que quer\u00EDa entender c\u00F3mo mejorar la retenci\u00F3n de nuevos trabajadores. No partieron improvisando soluciones: primero delimitaron la pregunta, luego ordenaron la informaci\u00F3n, revisaron los datos y solo despu\u00E9s plantearon acciones. Esa misma idea tambi\u00E9n aparece en ejemplos de anal\u00EDtica de negocio: cuando el problema se formula bien desde el inicio, las decisiones finales suelen ser bastante m\u00E1s s\u00F3lidas."
        },
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        },
        {
          citation:
            "Harvard Business School Online. (s. f.). <em>Business analytics examples</em>. https://online.hbs.edu/blog/post/business-analytics-examples",
          url: "https://online.hbs.edu/blog/post/business-analytics-examples"
        }
      ],
      relatedIds: ["data-analysis-phases-and-tools"]
    },
    {
      id: "data-analysis-phases-and-tools",
      slug: "fases-del-proceso-y-herramientas-clave",
      title: "Fases del proceso de an\u00E1lisis y herramientas clave",
      summary: "El an\u00E1lisis no parte directamente en Excel o SQL: primero sigue un proceso. Las 6 fases ayudan a ordenar el trabajo y las herramientas cambian seg\u00FAn lo que se necesita en cada etapa.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "8 min",
      updatedAt: "2026-08-02",
      tags: ["Proceso", "Herramientas", "Fundamentos"],
      featured: true,
      contentSections: [
        {
          title: "Primero: son 6 fases, no 5",
          body: "Algo importante para no confundirme es recordar que el proceso se entiende mejor como 6 fases: preguntar, preparar, procesar, analizar, compartir y actuar. Lo relevante no es repetirlas de memoria, sino entender que cada una resuelve una parte distinta del trabajo.",
          example: "Preguntar \u2192 Preparar \u2192 Procesar \u2192 Analizar \u2192 Compartir \u2192 Actuar"
        },
        {
          title: "Las 6 fases del proceso",
          body: "Cuando las veo como un flujo completo, estas etapas me ayudan a no saltar directo a la herramienta. Primero entiendo el problema, luego trabajo los datos y al final convierto el an\u00E1lisis en algo que realmente se pueda usar.",
          highlights: [
            {
              icon: "fa-solid fa-circle-question",
              title: "Preguntar",
              text: "Definir el problema, entender a las partes interesadas y transformar la necesidad en preguntas claras."
            },
            {
              icon: "fa-solid fa-database",
              title: "Preparar",
              text: "Buscar, reunir e identificar qu\u00E9 datos sirven realmente para responder la pregunta."
            },
            {
              icon: "fa-solid fa-filter-circle-xmark",
              title: "Procesar",
              text: "Limpiar, transformar, unir y revisar datos para dejarlos listos para el an\u00E1lisis."
            },
            {
              icon: "fa-solid fa-magnifying-glass-chart",
              title: "Analizar",
              text: "Explorar patrones, relaciones, promedios, diferencias y se\u00F1ales relevantes."
            },
            {
              icon: "fa-solid fa-chart-column",
              title: "Compartir",
              text: "Comunicar los hallazgos de forma comprensible con visualizaciones, reportes o presentaciones."
            },
            {
              icon: "fa-solid fa-bullseye",
              title: "Actuar",
              text: "Usar los hallazgos para tomar decisiones, ejecutar cambios o impulsar una recomendaci\u00F3n concreta."
            }
          ]
        },
        {
          title: "Qu\u00E9 herramientas aparecen en este flujo",
          body: "Las herramientas son apoyo, no el punto de partida. Elegir bien depende de qu\u00E9 etapa estoy trabajando, cu\u00E1ntos datos tengo y qu\u00E9 tipo de respuesta necesito construir.",
          highlights: [
            {
              icon: "fa-solid fa-table",
              title: "Hojas de c\u00E1lculo",
              text: "Excel y Google Sheets sirven para recopilar, ordenar, clasificar, revisar y visualizar datos r\u00E1pidamente."
            },
            {
              icon: "fa-solid fa-server",
              title: "Bases de datos y SQL",
              text: "Permiten aislar informaci\u00F3n, consultar grandes vol\u00FAmenes y extraer datos espec\u00EDficos para analizar."
            },
            {
              icon: "fa-solid fa-chart-pie",
              title: "Visualizaci\u00F3n",
              text: "Herramientas como Tableau o Looker convierten n\u00FAmeros complejos en historias comprensibles para otros."
            },
            {
              icon: "fa-solid fa-code",
              title: "Programaci\u00F3n",
              text: "Python ayuda a preparar, procesar y analizar datos con m\u00E1s flexibilidad cuando el problema crece."
            }
          ]
        },
        {
          title: "C\u00F3mo combinarlas sin perder el orden",
          body: "Una secuencia razonable ser\u00EDa partir con una pregunta clara, reunir los datos correctos, limpiarlos con hoja de c\u00E1lculo o SQL, profundizar con SQL o Python si hace falta y cerrar con una visualizaci\u00F3n que ayude a explicar el hallazgo. Las herramientas pueden cambiar, pero la l\u00F3gica del proceso deber\u00EDa mantenerse."
        },
        {
          title: "Para recordar",
          body: "La idea que quiero dejar fija aqu\u00ED es simple: no conviene enamorarse de una herramienta antes de entender el problema. Primero identifico la fase del an\u00E1lisis en la que estoy y reci\u00E9n ah\u00ED elijo lo que m\u00E1s me ayuda.",
          bestPractices: [
            "No empezar por la herramienta: empezar por la pregunta.",
            "Usar hojas de c\u00E1lculo para ordenar y revisar r\u00E1pido.",
            "Usar SQL cuando necesitas aislar o extraer datos con precisi\u00F3n.",
            "Usar visualizaci\u00F3n para explicar, no solo para decorar."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        }
      ],
      relatedIds: ["structured-problem-solving"]
    },
    {
      id: "choose-the-right-tool",
      slug: "como-elegir-la-herramienta-según-el-caso",
      title: "C\u00F3mo elegir la herramienta seg\u00FAn el caso y el tama\u00F1o de los datos",
      summary: "No siempre conviene abrir la misma herramienta. Elegir bien entre Excel, Google Sheets, bases de datos o programaci\u00F3n depende del tipo de tarea, la colaboraci\u00F3n y el volumen de informaci\u00F3n.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "7 min",
      updatedAt: "2026-08-02",
      tags: ["Excel", "Google Sheets", "Selecci\u00F3n de herramienta"],
      featured: true,
      contentSections: [
        {
          title: "Idea principal",
          body: "Una de las decisiones m\u00E1s importantes al analizar datos es no forzar siempre la misma herramienta. Lo primero es reconocer qu\u00E9 quiero hacer, cu\u00E1ntos datos tengo, cu\u00E1ntas personas trabajar\u00E1n sobre el archivo y cu\u00E1nta estructura necesita ese caso. Reci\u00E9n despu\u00E9s conviene elegir la opci\u00F3n m\u00E1s \u00FAtil."
        },
        {
          title: "Cu\u00E1ndo una hoja de c\u00E1lculo suele ser suficiente",
          body: "Excel o Google Sheets funcionan muy bien cuando necesito ordenar, limpiar, revisar y analizar conjuntos peque\u00F1os o medianos sin levantar una estructura demasiado compleja. Tambi\u00E9n son \u00FAtiles cuando quiero explorar r\u00E1pido, construir tablas din\u00E1micas, revisar formatos o dejar un documento f\u00E1cil de mover.",
          bestPractices: [
            "Usarlas para limpiezas iniciales, revisiones y an\u00E1lisis exploratorio.",
            "Aprovecharlas cuando el archivo debe ser simple de leer y compartir.",
            "No exigirles m\u00E1s de lo que soportan si el volumen empieza a crecer demasiado."
          ]
        },
        {
          title: "Comparativa r\u00E1pida: hojas de c\u00E1lculo vs bases de datos",
          body: "Cuando tengo dudas entre seguir en una hoja de c\u00E1lculo o pasar a una base de datos, esta comparaci\u00F3n me ayuda a mirar el caso con m\u00E1s criterio y elegir la opci\u00F3n que mejor calza con el volumen, la estructura y la forma de trabajo.",
          comparisonTable: {
            columns: ["Hojas de c\u00E1lculo", "Bases de datos"],
            rows: [
              ["Se accede desde una aplicaci\u00F3n como Excel o Sheets", "Se accede mediante consultas y un sistema de gesti\u00F3n de datos"],
              ["Trabajan con filas, columnas y celdas visibles", "Organizan la informaci\u00F3n con reglas, relaciones y tablas conectadas"],
              ["Funcionan bien para vol\u00FAmenes peque\u00F1os o medianos", "Responden mejor cuando el volumen ya es grande o crece mucho"],
              ["Permiten carga y revisi\u00F3n manual con bastante flexibilidad", "Exigen una estructura m\u00E1s consistente para consultar y mantener datos"],
              ["Suelen servir muy bien para trabajo individual o revisiones r\u00E1pidas", "Son m\u00E1s adecuadas cuando hay m\u00FAltiples usuarios o consultas repetidas"],
              ["Ayudan a explorar, limpiar y analizar de forma visual", "Ayudan a almacenar, controlar y extraer datos con mayor robustez"]
            ]
          }
        },
        {
          title: "Excel y Google Sheets: qu\u00E9 mirar antes de elegir",
          body: "Si me quedo dentro del mundo de las hojas de c\u00E1lculo, la diferencia importante suele estar en el contexto de uso. Excel destaca cuando necesito una experiencia m\u00E1s de escritorio o manejo avanzado dentro del ecosistema Microsoft. Google Sheets gana fuerza cuando la prioridad es colaborar en tiempo real, compartir con facilidad y trabajar desde Drive sin tanta fricci\u00F3n.",
          highlights: [
            {
              icon: "fa-solid fa-file-excel",
              title: "Excel",
              text: "Suele ser fuerte para trabajo local, flujos avanzados y continuidad dentro de entornos Microsoft."
            },
            {
              icon: "fa-solid fa-table-cells",
              title: "Google Sheets",
              text: "Suele destacar cuando varias personas editan a la vez, se necesita compartir r\u00E1pido y mantener todo sincronizado en la nube."
            }
          ]
        },
        {
          title: "Para recordar",
          body: "La elecci\u00F3n m\u00E1s \u00F3ptima no parte desde la costumbre, sino desde el caso. Si el problema es simple y acotado, una hoja de c\u00E1lculo puede resolverlo muy bien. Si el volumen, la complejidad o la colaboraci\u00F3n crecen, conviene apoyarse en bases de datos, consultas o programaci\u00F3n.",
          bestPractices: [
            "Definir primero la tarea y el tama\u00F1o de los datos.",
            "Pensar si el trabajo ser\u00E1 individual o colaborativo.",
            "Elegir la herramienta por utilidad, no solo por costumbre.",
            "Dejar enlaces de apoyo para profundizar cuando se necesite."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        },
        {
          citation:
            "Google Workspace Learning Center. (s. f.). <em>Google Sheets training and help</em>. https://support.google.com/a/users/answer/9282959",
          url: "https://support.google.com/a/users/answer/9282959"
        },
        {
          citation:
            "Google Docs Editors Help. (s. f.). <em>Differences between Excel and Sheets</em>. https://support.google.com/docs/answer/9331278",
          url: "https://support.google.com/docs/answer/9331278"
        }
      ],
      relatedIds: ["data-analysis-phases-and-tools", "structured-problem-solving"]
    },
    {
      id: "sql-introduction-basics",
      slug: "introduccion-a-sql-y-partes-de-una-consulta",
      title: "Introducci\u00F3n a SQL y partes de una consulta",
      summary: "SQL sirve para hablar con bases de datos. Esta nota deja el concepto base, la estructura de una consulta y un ejemplo simple para recordar c\u00F3mo empezar.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "initial",
      readingTime: "7 min",
      updatedAt: "2026-08-02",
      tags: ["SQL", "SELECT", "FROM", "WHERE"],
      featured: true,
      contentSections: [
        {
          title: "Qu\u00E9 es SQL",
          body: "SQL es el lenguaje que me permite consultar y trabajar con bases de datos. Si una hoja de c\u00E1lculo me sirve para revisar datos de forma visual, SQL me ayuda a pedir exactamente la informaci\u00F3n que necesito cuando los datos ya est\u00E1n guardados en tablas m\u00E1s grandes o estructuradas."
        },
        {
          title: "Qu\u00E9 es una consulta",
          body: "Una consulta es, b\u00E1sicamente, una petici\u00F3n de informaci\u00F3n a una base de datos. Lo importante es escribirla con una sintaxis ordenada, para que la base entienda qu\u00E9 columnas quiero ver, de qu\u00E9 tabla saldr\u00E1n y bajo qu\u00E9 condici\u00F3n deben devolverse."
        },
        {
          title: "Las partes m\u00E1s importantes",
          body: "Para empezar, lo que quiero dejar grabado es la estructura base de casi toda consulta inicial.",
          highlights: [
            {
              icon: "fa-solid fa-list-check",
              title: "SELECT",
              text: "Indica qu\u00E9 columnas quiero recuperar."
            },
            {
              icon: "fa-solid fa-table",
              title: "FROM",
              text: "Indica desde qu\u00E9 tabla saldr\u00E1n esos datos."
            },
            {
              icon: "fa-solid fa-filter",
              title: "WHERE",
              text: "Indica qu\u00E9 condici\u00F3n deben cumplir las filas para aparecer en el resultado."
            }
          ],
          code: "SELECT columna\nFROM tabla\nWHERE condicion;"
        },
        {
          title: "Ejemplo simple para recordar",
          body: "Si quiero buscar a los clientes cuyo nombre es Tony, puedo armar una consulta sencilla siguiendo ese mismo orden.",
          code: "SELECT\n  first_name\nFROM\n  customer_data.customer_name\nWHERE\n  first_name = 'Tony';",
          example: "Primero elijo la columna, luego la tabla y al final filtro solo los registros que cumplen la condici\u00F3n."
        },
        {
          title: "Cuando necesito m\u00E1s de una columna o m\u00E1s de una condici\u00F3n",
          body: "Si quiero traer m\u00E1s informaci\u00F3n, simplemente agrego columnas en SELECT separadas por comas. Si necesito filtrar con varios criterios, puedo usar AND para exigir que se cumplan al mismo tiempo.",
          code: "SELECT\n  customer_id,\n  first_name,\n  last_name\nFROM\n  customer_data.customer_name\nWHERE\n  customer_id > 0\n  AND first_name = 'Tony'\n  AND last_name = 'Magnolia';"
        },
        {
          title: "Detalles pr\u00E1cticos que ayudan",
          body: "Aunque SQL puede funcionar incluso si lo escribo todo seguido, me conviene usar may\u00FAsculas en las palabras clave, sangr\u00EDa y saltos de l\u00EDnea para leer mejor la consulta. Tambi\u00E9n conviene evitar `SELECT *` cuando no necesito todas las columnas, porque trae m\u00E1s datos de los necesarios.",
          bestPractices: [
            "Escribir SELECT, FROM y WHERE en l\u00EDneas separadas.",
            "Pedir solo las columnas que realmente voy a usar.",
            "Usar comentarios si la consulta empieza a ponerse larga.",
            "Apoyarme en alias m\u00E1s adelante cuando los nombres sean poco claros."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        }
      ],
      relatedIds: ["data-analysis-phases-and-tools", "choose-the-right-tool"]
    },
    {
      id: "sql-boolean-logic-basics",
      slug: "logica-booleana-para-filtrar-mejor-en-sql",
      title: "L\u00F3gica booleana para filtrar mejor en SQL",
      summary: "La l\u00F3gica booleana permite combinar condiciones para filtrar resultados con m\u00E1s criterio. Esta nota deja la nomenclatura base, las tablas de verdad y ejemplos claros con `AND`, `OR` y `NOT`.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "initial",
      readingTime: "8 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "L\u00F3gica booleana", "Filtros"],
      featured: true,
      contentSections: [
        {
          title: "Idea central",
          body: "La l\u00F3gica booleana sirve para transformar condiciones en resultados que solo pueden ser verdaderos o falsos. En la pr\u00E1ctica, esto me ayuda mucho cuando quiero filtrar datos en SQL, porque puedo exigir que varias reglas se cumplan al mismo tiempo, que baste con una de ellas o que una condici\u00F3n quede excluida."
        },
        {
          title: "Nomenclatura que conviene recordar",
          body: "Antes de pasar a las tablas de verdad, conviene dejar a mano los operadores que aparecen m\u00E1s seguido al construir filtros. Aqu\u00ED mezcl\u00E9 operadores l\u00F3gicos y comparadores porque normalmente trabajan juntos dentro del `WHERE`.",
          comparisonTable: {
            columns: ["Operador", "Nomenclatura", "Para qu\u00E9 sirve", "Ejemplo r\u00E1pido"],
            rows: [
              ["Igual", "=", "Compara si dos valores son iguales", "estado = 'Activo'"],
              ["Distinto", "<> o !=", "Compara si dos valores no son iguales", "pais <> 'Chile'"],
              ["Mayor que", ">", "Eval\u00FAa si un valor supera a otro", "ventas > 1000"],
              ["Menor que", "<", "Eval\u00FAa si un valor es menor que otro", "edad < 30"],
              ["Mayor o igual", ">=", "Incluye el l\u00EDmite superior", "score >= 80"],
              ["Menor o igual", "<=", "Incluye el l\u00EDmite inferior", "precio <= 50"],
              ["Y l\u00F3gico", "AND", "Exige que ambas condiciones sean verdaderas", "region = 'Norte' AND canal = 'Retail'"],
              ["O l\u00F3gico", "OR", "Basta con que una condici\u00F3n sea verdadera", "cargo = 'Analista' OR cargo = 'BI'"],
              ["Negaci\u00F3n", "NOT", "Invierte una condici\u00F3n", "NOT estado = 'Inactivo'"],
              ["En lista", "IN", "Busca coincidencia dentro de varias opciones", "mes IN ('Ene','Feb','Mar')"],
              ["Entre dos valores", "BETWEEN", "Eval\u00FAa si un valor cae dentro de un rango", "edad BETWEEN 25 AND 40"],
              ["Patr\u00F3n de texto", "LIKE", "Busca coincidencias parciales", "nombre LIKE 'Mar%'"]
            ]
          }
        },
        {
          title: "C\u00F3mo pensar `AND`",
          body: "`AND` me obliga a cumplir dos condiciones al mismo tiempo. Si una falla, el resultado completo cae a falso. Es el operador que m\u00E1s uso cuando quiero dejar un grupo muy espec\u00EDfico de registros.",
          code: "SELECT *\nFROM productos\nWHERE color = 'Gris'\n  AND color_secundario = 'Rosa';",
          comparisonTable: {
            columns: ["Color es gris", "Color es rosa", "Si Gris Y Rosa, entonces Comprar", "L\u00F3gica booleana"],
            rows: [
              ["Gris / V", "Rosa / V", "V / Comprar", "V AND V = V"],
              ["Gris / V", "Negro / F", "F / No comprar", "V AND F = F"],
              ["Rojo / F", "Rosa / V", "F / No comprar", "F AND V = F"],
              ["Rojo / F", "Verde / F", "F / No comprar", "F AND F = F"]
            ]
          }
        },
        {
          title: "C\u00F3mo pensar `OR`",
          body: "`OR` me deja avanzar cuando al menos una condici\u00F3n se cumple. Es \u00FAtil cuando quiero mantener abiertas varias posibilidades dentro del mismo filtro.",
          code: "SELECT *\nFROM productos\nWHERE color = 'Gris'\n   OR color = 'Rosa';",
          comparisonTable: {
            columns: ["Color es gris", "Color es rosa", "Si Gris O Rosa, entonces Comprar", "L\u00F3gica booleana"],
            rows: [
              ["Rojo / F", "Negro / F", "F / No comprar", "F OR F = F"],
              ["Negro / F", "Rosa / V", "V / Comprar", "F OR V = V"],
              ["Gris / V", "Verde / F", "V / Comprar", "V OR F = V"],
              ["Gris / V", "Rosa / V", "V / Comprar", "V OR V = V"]
            ]
          }
        },
        {
          title: "C\u00F3mo pensar `NOT`",
          body: "`NOT` invierte el valor l\u00F3gico de una condici\u00F3n. En SQL me sirve mucho para excluir resultados que no quiero ver, en vez de definir solo lo que s\u00ED quiero.",
          code: "SELECT *\nFROM productos\nWHERE color = 'Gris'\n  AND NOT color_secundario = 'Rosa';",
          comparisonTable: {
            columns: ["Color es gris", "Color es rosa", "L\u00F3gica para NOT rosa", "Si Gris Y (NOT Rosa), entonces Comprar", "L\u00F3gica booleana"],
            rows: [
              ["Gris / V", "Rojo / F", "NOT F = V", "V / Comprar", "V AND V = V"],
              ["Gris / V", "Negro / F", "NOT F = V", "V / Comprar", "V AND V = V"],
              ["Gris / V", "Verde / F", "NOT F = V", "V / Comprar", "V AND V = V"],
              ["Gris / V", "Rosa / V", "NOT V = F", "F / No comprar", "V AND F = F"]
            ]
          }
        },
        {
          title: "El poder real: combinar condiciones",
          body: "La parte potente de la l\u00F3gica booleana no est\u00E1 en usar un solo operador, sino en combinarlos bien. Cuando agrupo condiciones con par\u00E9ntesis, SQL entiende mejor la prioridad del filtro y yo tambi\u00E9n reduzco errores de lectura.",
          code: "SELECT *\nFROM productos\nWHERE (color = 'Gris' OR color = 'Rosa')\n  AND impermeable = TRUE;",
          example: "Primero dejo pasar productos grises o rosas; despu\u00E9s, dentro de ese grupo, exijo adem\u00E1s que sean impermeables."
        },
        {
          title: "Para recordar",
          body: "Si quiero ser m\u00E1s estricto, pienso en `AND`. Si quiero abrir alternativas, uso `OR`. Si quiero excluir algo, uso `NOT`. Y si la expresi\u00F3n empieza a crecer, los par\u00E9ntesis dejan mucho m\u00E1s clara la intenci\u00F3n del filtro.",
          bestPractices: [
            "Pensar cada condici\u00F3n por separado antes de combinarlas.",
            "Usar `AND` cuando todas las reglas deben cumplirse.",
            "Usar `OR` cuando basta con una de varias opciones.",
            "Usar par\u00E9ntesis para dejar clara la prioridad del filtro."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Utilizar la l\u00F3gica booleana</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: ["sql-introduction-basics", "sql-command-guide", "choose-the-right-tool"]
    },
    {
      id: "relational-databases-and-sql-structure",
      slug: "bases-de-datos-relacionales-y-estructura-en-sql",
      title: "Bases de datos relacionales y estructura en SQL",
      summary: "Antes de consultar bien en SQL, conviene entender c\u00F3mo se organiza la informaci\u00F3n dentro de una base de datos relacional: tablas, claves, relaciones y normalizaci\u00F3n.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "Bases de datos", "Claves", "Relacional"],
      featured: true,
      contentSections: [
        {
          title: "Por qu\u00E9 esta base importa",
          body: "SQL no vive en el aire: vive sobre una estructura. Si no entiendo c\u00F3mo se guardan y conectan los datos, termino escribiendo consultas mec\u00E1nicas sin comprender bien por qu\u00E9 existen tablas separadas, claves y joins. Esta nota me sirve justamente para unir esas dos partes: estructura y consulta."
        },
        {
          title: "Qu\u00E9 es una base de datos relacional",
          body: "Una base de datos relacional organiza la informaci\u00F3n en varias tablas que pueden conectarse entre s\u00ED por campos en com\u00FAn. Eso hace mucho m\u00E1s f\u00E1cil ordenar, buscar y reutilizar datos que si todo estuviera mezclado en una sola tabla gigante con demasiadas columnas y repeticiones."
        },
        {
          title: "Por qu\u00E9 no conviene guardar todo en una sola tabla",
          body: "Cuando todo queda amontonado en una estructura no relacional o mal dise\u00F1ada, aparecen repeticiones, errores y mucha dificultad para mantener consistencia. En cambio, separar clientes, productos, fechas, ventas o sucursales en tablas relacionadas simplifica el an\u00E1lisis y mejora la integridad de la informaci\u00F3n.",
          comparisonTable: {
            columns: ["Estructura poco organizada", "Estructura relacional"],
            rows: [
              ["Mucha repetici\u00F3n de datos en una sola tabla", "Datos distribuidos en tablas seg\u00FAn su funci\u00F3n"],
              ["M\u00E1s riesgo de errores al actualizar campos repetidos", "Menos redundancia y m\u00E1s control sobre cambios"],
              ["Dif\u00EDcil de escalar cuando crece el volumen", "M\u00E1s simple de mantener y consultar"],
              ["Cruzar informaci\u00F3n se vuelve confuso", "Las relaciones permiten conectar datos con l\u00F3gica clara"]
            ]
          }
        },
        {
          title: "Normalizaci\u00F3n: el orden que evita redundancia",
          body: "La normalizaci\u00F3n es el proceso de organizar una base relacional para reducir repeticiones, mejorar integridad y disminuir complejidad. En simple: intento que cada tabla guarde lo que realmente le corresponde y que las relaciones hagan el resto.",
          bestPractices: [
            "Separar entidades distintas en tablas distintas.",
            "Evitar copiar la misma informaci\u00F3n en m\u00FAltiples filas sin necesidad.",
            "Definir claves claras para conectar tablas.",
            "Pensar en la estructura antes de llenar la base con datos."
          ]
        },
        {
          title: "Las claves que conectan la base",
          body: "Las relaciones no aparecen por magia: se sostienen en las claves. Esta es la parte que m\u00E1s conviene tener bien grabada.",
          comparisonTable: {
            columns: ["Tipo de clave", "Qu\u00E9 hace", "Ejemplo pr\u00E1ctico"],
            rows: [
              ["Clave primaria", "Identifica de forma \u00FAnica cada registro dentro de su tabla.", "`customer_id` \u00FAnico para cada cliente."],
              ["Clave for\u00E1nea", "Referencia una clave primaria de otra tabla y crea la relaci\u00F3n.", "`customer_id` dentro de una tabla de ventas."],
              ["Clave compuesta", "Usa dos o m\u00E1s columnas para identificar de forma \u00FAnica un registro.", "`customer_id` + `location_id` como combinaci\u00F3n \u00FAnica."]
            ]
          }
        },
        {
          title: "C\u00F3mo imaginar una estructura relacional simple",
          body: "Un caso t\u00EDpico podr\u00EDa tener una tabla de clientes, otra de productos, otra de fechas y otra de ingresos o ventas. La tabla de ventas suele actuar como punto de encuentro: guarda varias claves for\u00E1neas para conectar a cada cliente, producto, sucursal o fecha con una transacci\u00F3n concreta."
        },
        {
          title: "De la estructura a la consulta",
          body: "Entender la estructura me ayuda a entender por qu\u00E9 existen los `JOIN`. Si los datos est\u00E1n separados en tablas distintas, SQL me permite reconstruir la historia al momento de consultar.",
          commandGroups: [
            {
              title: "Consultar desde una sola tabla",
              description: "Sirve cuando el dato que necesito vive completo en una tabla.",
              code: "SELECT customer_id, customer_name\nFROM customers;"
            },
            {
              title: "Unir tablas relacionadas",
              description: "Sirve cuando necesito cruzar informaci\u00F3n distribuida en varias tablas.",
              code: "SELECT c.customer_name, s.amount\nFROM customers c\nINNER JOIN sales s ON c.customer_id = s.customer_id;"
            },
            {
              title: "Agregar y resumir",
              description: "Sirve cuando quiero resumir resultados una vez hecha la relaci\u00F3n.",
              code: "SELECT c.customer_name, SUM(s.amount) AS total_sales\nFROM customers c\nINNER JOIN sales s ON c.customer_id = s.customer_id\nGROUP BY c.customer_name;"
            }
          ]
        },
        {
          title: "Tipos de consultas que cobran m\u00E1s sentido aqu\u00ED",
          body: "Cuando ya entiendo la estructura, ciertos tipos de consulta dejan de parecer comandos sueltos y empiezan a tener una l\u00F3gica clara.",
          highlights: [
            {
              icon: "fa-solid fa-table",
              title: "SELECT + WHERE",
              text: "Sirven para leer y filtrar informaci\u00F3n dentro de una tabla o un conjunto ya relacionado."
            },
            {
              icon: "fa-solid fa-link",
              title: "JOIN",
              text: "Sirve para conectar tablas a trav\u00E9s de sus claves y reconstruir contexto."
            },
            {
              icon: "fa-solid fa-chart-simple",
              title: "GROUP BY + SUM/COUNT",
              text: "Sirven para resumir datos una vez que las relaciones ya est\u00E1n bien resueltas."
            },
            {
              icon: "fa-solid fa-pen-ruler",
              title: "INSERT / UPDATE",
              text: "Cobran m\u00E1s sentido cuando entiendo qu\u00E9 tabla toca modificar y qu\u00E9 relaci\u00F3n podr\u00EDa afectar."
            }
          ]
        },
        {
          title: "Para recordar",
          body: "SQL no es solo escribir consultas: tambi\u00E9n es entender c\u00F3mo est\u00E1 guardada la informaci\u00F3n. Si la base est\u00E1 bien estructurada, consultar se vuelve mucho m\u00E1s natural. Y si entiendo claves, relaciones y normalizaci\u00F3n, los joins dejan de sentirse como algo memorizado y empiezan a tener sentido.",
          resourceLinks: [
            {
              label: "Gu\u00EDa r\u00E1pida de comandos SQL del Atlas",
              url: "#"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Maximizar las bases de datos en la anal\u00EDtica de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Gu\u00EDa en profundidad: Las mejores pr\u00E1cticas de SQL</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: ["sql-introduction-basics", "sql-command-guide", "sql-boolean-logic-basics"]
    },
    {
      id: "sql-command-guide",
      slug: "guia-rapida-de-comandos-sql",
      title: "Gu\u00EDa r\u00E1pida de comandos SQL",
      summary: "Una nota visual para recordar los comandos SQL m\u00E1s importantes: consultar, filtrar, ordenar, agrupar, unir tablas y modificar datos sin perderse en la sintaxis.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "8 min",
      updatedAt: "2026-08-02",
      tags: ["SQL", "Cheat sheet", "Consultas"],
      featured: true,
      contentSections: [
        {
          title: "Idea de esta gu\u00EDa",
          body: "Esta nota la quiero usar como machete visual para recordar r\u00E1pido los comandos m\u00E1s comunes de SQL. No busca cubrir todo, sino dejar a mano las estructuras que m\u00E1s se repiten cuando consulto, filtro, agrupo o modifico datos."
        },
        {
          title: "Comandos base para consultar datos",
          body: "Estos son los que m\u00E1s se repiten cuando empiezo a explorar una tabla o construir una consulta sencilla.",
          commandGroups: [
            {
              title: "Consultar columnas espec\u00EDficas",
              description: "Sirve para traer solo los campos que realmente necesito.",
              code: "SELECT column1, column2\nFROM table_name;"
            },
            {
              title: "Consultar todo",
              description: "Devuelve todas las columnas. \u00DAtil para una revisi\u00F3n r\u00E1pida, pero no conviene abusar de esto.",
              code: "SELECT *\nFROM table_name;"
            },
            {
              title: "Filtrar filas",
              description: "Devuelve solo los registros que cumplen una condici\u00F3n.",
              code: "SELECT column1, column2\nFROM table_name\nWHERE condition;"
            },
            {
              title: "Evitar duplicados",
              description: "Sirve para ver valores distintos en una o m\u00E1s columnas.",
              code: "SELECT DISTINCT column1, column2\nFROM table_name;"
            }
          ]
        },
        {
          title: "Orden, paginaci\u00F3n y agrupaci\u00F3n",
          body: "Despu\u00E9s de consultar, lo normal es ordenar resultados, limitar filas o resumir por grupos.",
          commandGroups: [
            {
              title: "Ordenar resultados",
              description: "Ordena en ascendente o descendente seg\u00FAn la columna indicada.",
              code: "SELECT column1, column2\nFROM table_name\nORDER BY column1 ASC;"
            },
            {
              title: "Limitar resultados",
              description: "Ayuda a revisar una parte de la tabla sin traer todo el universo.",
              code: "SELECT column1, column2\nFROM table_name\nORDER BY column1\nLIMIT n OFFSET m;"
            },
            {
              title: "Agrupar",
              description: "Resume filas por categor\u00EDa y aplica una funci\u00F3n agregada.",
              code: "SELECT column1, aggregate_fn(column2)\nFROM table_name\nGROUP BY column1;"
            },
            {
              title: "Filtrar grupos",
              description: "Permite filtrar despu\u00E9s de agrupar.",
              code: "SELECT column1, aggregate_fn(column2)\nFROM table_name\nGROUP BY column1\nHAVING condition;"
            }
          ]
        },
        {
          title: "Operadores y filtros muy usados",
          body: "Cuando necesito refinar una b\u00FAsqueda, estos patrones aparecen una y otra vez.",
          commandGroups: [
            {
              title: "Coincidencias con LIKE",
              description: "Busca patrones dentro de texto.",
              code: "SELECT column1, column2\nFROM table_name\nWHERE column1 LIKE 'Ch%';"
            },
            {
              title: "Valores dentro de una lista",
              description: "Sirve para preguntar si un valor est\u00E1 dentro de varias opciones posibles.",
              code: "SELECT column1, column2\nFROM table_name\nWHERE column1 IN (v1, v2, v3);"
            },
            {
              title: "Rangos",
              description: "Eval\u00FAa si un valor cae entre un m\u00EDnimo y un m\u00E1ximo.",
              code: "SELECT column1, column2\nFROM table_name\nWHERE column1 BETWEEN low AND high;"
            },
            {
              title: "Valores nulos",
              description: "Permite detectar si faltan datos en una columna.",
              code: "SELECT column1, column2\nFROM table_name\nWHERE column1 IS NULL;"
            }
          ]
        },
        {
          title: "Joins para trabajar con varias tablas",
          body: "Cuando el dato que necesito no vive en una sola tabla, empiezan a aparecer los joins.",
          commandGroups: [
            {
              title: "INNER JOIN",
              description: "Trae solo las coincidencias entre ambas tablas.",
              code: "SELECT column1, column2\nFROM table1\nINNER JOIN table2 ON condition;"
            },
            {
              title: "LEFT JOIN",
              description: "Mantiene todas las filas de la tabla izquierda y suma coincidencias de la derecha.",
              code: "SELECT column1, column2\nFROM table1\nLEFT JOIN table2 ON condition;"
            },
            {
              title: "RIGHT JOIN",
              description: "Mantiene todas las filas de la tabla derecha y suma coincidencias de la izquierda.",
              code: "SELECT column1, column2\nFROM table1\nRIGHT JOIN table2 ON condition;"
            },
            {
              title: "FULL OUTER JOIN",
              description: "Intenta mostrar coincidencias y tambi\u00E9n lo que queda hu\u00E9rfano en ambos lados.",
              code: "SELECT column1, column2\nFROM table1\nFULL OUTER JOIN table2 ON condition;"
            }
          ]
        },
        {
          title: "Cambios de datos que conviene recordar",
          body: "No todo en SQL es consultar: tambi\u00E9n puedo insertar, actualizar o eliminar datos. Justamente por eso, esta parte conviene usarla con m\u00E1s cuidado.",
          commandGroups: [
            {
              title: "Insertar",
              description: "Agrega nuevos registros.",
              code: "INSERT INTO table_name(column_list)\nVALUES(value_list);"
            },
            {
              title: "Actualizar",
              description: "Modifica valores existentes. Ojo con olvidar el WHERE.",
              code: "UPDATE table_name\nSET column1 = new_value\nWHERE condition;"
            },
            {
              title: "Eliminar filas",
              description: "Borra registros que cumplan una condici\u00F3n.",
              code: "DELETE FROM table_name\nWHERE condition;"
            }
          ],
          bestPractices: [
            "Antes de usar UPDATE o DELETE, revisar bien la condici\u00F3n.",
            "Si algo toca datos reales, probar primero con un SELECT equivalente.",
            "Guardar esta nota como referencia r\u00E1pida, no como reemplazo de pr\u00E1ctica."
          ]
        },
        {
          title: "Para seguir mirando",
          body: "Si quiero una versi\u00F3n m\u00E1s amplia y todav\u00EDa m\u00E1s completa, esta cheat sheet me sirve como apoyo externo para repasar sintaxis, joins, operadores, restricciones y otros comandos menos frecuentes.",
          resourceLinks: [
            {
              label: "SQL Cheat Sheet - SQLTutorial.org",
              url: "https://www.sqltutorial.org/sql-cheat-sheet/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "SQLTutorial.org. (s. f.). <em>SQL cheat sheet</em>. https://www.sqltutorial.org/sql-cheat-sheet/",
          url: "https://www.sqltutorial.org/sql-cheat-sheet/"
        }
      ],
      relatedIds: ["sql-introduction-basics", "choose-the-right-tool"]
    },
    {
      id: "sql-for-cleaning-and-validating-data",
      slug: "sql-para-limpiar-y-validar-datos",
      title: "SQL para limpiar y validar datos",
      summary: "Cuando los datos viven en una base de datos, SQL suele ser la herramienta más directa para limpiar, corregir, transformar y verificar información sin depender de hojas de cálculo.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "Limpieza", "CASE", "Validaci\u00F3n"],
      featured: true,
      contentSections: [
        {
          title: "Cuándo conviene usar SQL para limpiar",
          body: "Si los datos ya están guardados en una base de datos, lo más natural es trabajar con SQL. Llevarlos a una hoja de cálculo solo para limpiar puede agregar pasos, copias innecesarias y más riesgo de inconsistencia. En cambio, SQL me deja revisar grandes volúmenes, filtrar rápido y crear salidas limpias de forma mucho más controlada."
        },
        {
          title: "Hojas de cálculo vs SQL para esta tarea",
          body: "Ambas herramientas sirven, pero cada una brilla en un contexto distinto. La diferencia clave suele estar en dónde viven los datos y cuánta escala necesito manejar.",
          comparisonTable: {
            columns: ["Hojas de cálculo", "Bases de datos con SQL"],
            rows: [
              ["Funcionan mejor con conjuntos más pequeños o revisiones manuales.", "Funcionan mejor con conjuntos grandes y estructuras relacionales."],
              ["Permiten corregir visualmente, usar filtros y armar gráficos en el mismo lugar.", "Permiten consultar, transformar y preparar datos directamente desde la base."],
              ["Son cómodas para trabajo individual y revisión rápida.", "Son más potentes para colaboración, trazabilidad y consistencia sobre tablas compartidas."],
              ["Dependen más de fórmulas, menú y manipulación visible.", "Dependen de consultas reproducibles que se pueden guardar, revisar y volver a ejecutar."]
            ]
          }
        },
        {
          title: "Qué tipos de tareas resuelve bien SQL",
          body: "SQL es especialmente útil cuando quiero filtrar, renombrar, recodificar o dejar listas columnas limpias sin tocar directamente la tabla original.",
          highlights: [
            {
              icon: "fa-solid fa-filter",
              title: "Filtrar y seleccionar",
              text: "Puedo aislar exactamente los registros que sí me sirven para el análisis."
            },
            {
              icon: "fa-solid fa-pen-to-square",
              title: "Recodificar valores",
              text: "Puedo corregir nombres, categorías o estados mediante lógica condicional."
            },
            {
              icon: "fa-solid fa-table-columns",
              title: "Crear columnas limpias",
              text: "Puedo generar nuevas columnas sin sobrescribir el dato original."
            },
            {
              icon: "fa-solid fa-list-check",
              title: "Verificar consistencia",
              text: "Puedo contar anomalías, detectar nulos, duplicados o categorías raras de forma reproducible."
            }
          ]
        },
        {
          title: "CASE: una de las funciones más útiles para limpiar",
          body: "La sentencia `CASE` sirve muchísimo para corregir errores visibles, estandarizar categorías o generar una versión limpia de un campo sin modificar todavía la tabla original.",
          code: "SELECT\n  customer_id,\n  CASE\n    WHEN first_name = 'Tnoy' THEN 'Tony'\n    ELSE first_name\n  END AS cleaned_name\nFROM project_id.customer_data.customer_name;",
          example: "En este caso, si aparece el nombre mal escrito `Tnoy`, SQL lo devuelve como `Tony` en una columna nueva llamada `cleaned_name`."
        },
        {
          title: "Ventaja clave: limpiar sin destruir el dato original",
          body: "Algo que me gusta mucho de SQL es que puedo empezar creando vistas limpias o columnas derivadas antes de actualizar nada. Eso me deja validar el resultado primero y recién después decidir si conviene aplicar cambios permanentes."
        },
        {
          title: "Consultas útiles para validar limpieza",
          body: "Antes de corregir, conviene medir el problema. Estas consultas ayudan mucho a revisar calidad antes y después de limpiar.",
          commandGroups: [
            {
              title: "Contar nulos",
              description: "Sirve para detectar campos faltantes en una columna crítica.",
              code: "SELECT COUNT(*) AS null_count\nFROM table_name\nWHERE email IS NULL;"
            },
            {
              title: "Detectar duplicados",
              description: "Sirve para revisar si un identificador se repite más de lo esperado.",
              code: "SELECT customer_id, COUNT(*) AS duplicates\nFROM table_name\nGROUP BY customer_id\nHAVING COUNT(*) > 1;"
            },
            {
              title: "Ver valores únicos con DISTINCT",
              description: "Sirve para revisar categorías, nombres o estados sin repeticiones y detectar si hay variantes raras.",
              code: "SELECT DISTINCT status\nFROM table_name\nORDER BY status;"
            },
            {
              title: "Ver categorías raras",
              description: "Sirve para listar valores escritos de más de una manera.",
              code: "SELECT first_name, COUNT(*)\nFROM table_name\nGROUP BY first_name\nORDER BY COUNT(*) DESC;"
            },
            {
              title: "Comparar antes y después",
              description: "Sirve para revisar cómo quedó una columna limpia sin tocar la original.",
              code: "SELECT\n  first_name,\n  CASE WHEN first_name = 'Tnoy' THEN 'Tony' ELSE first_name END AS cleaned_name\nFROM table_name;"
            }
          ]
        },
        {
          title: "Más operaciones útiles para gestionar mejor la información",
          body: "Además de limpiar valores, SQL también me permite reorganizar mejor la estructura con comandos que ayudan a mantener orden y claridad.",
          comparisonTable: {
            columns: ["Acción", "Ejemplo SQL", "Para qué sirve"],
            rows: [
              ["Renombrar una columna", "ALTER TABLE table_name RENAME COLUMN old_name TO new_name;", "Dejar encabezados más claros o estandarizados."],
              ["Renombrar una tabla", "ALTER TABLE old_table_name RENAME TO new_table_name;", "Alinear el nombre con la convención del proyecto."],
              ["Crear una tabla nueva", "CREATE TABLE cleaned_table AS SELECT ... FROM raw_table;", "Guardar una versión limpia separada del dato crudo."],
              ["Crear una vista", "CREATE VIEW cleaned_view AS SELECT ... ;", "Exponer una capa limpia sin duplicar físicamente toda la base."],
              ["Actualizar valores", "UPDATE table_name SET status = 'Activo' WHERE status = 'activo';", "Estandarizar categorías o corregir errores puntuales."]
            ]
          }
        },
        {
          title: "Dialectos SQL: por qué importa saberlo",
          body: "No todo SQL se escribe exactamente igual en todos los motores. MySQL, PostgreSQL, SQL Server, SQLite o BigQuery comparten la base, pero cambian en ciertas funciones, tipos de dato o sintaxis. Por eso conviene aprender bien SQL estándar y luego adaptarlo al dialecto de la empresa o herramienta con la que esté trabajando."
        },
        {
          title: "Un flujo simple de limpieza con SQL",
          body: "Cuando la base está en SQL, me sirve pensar la limpieza como una secuencia lógica y no como consultas sueltas.",
          commandGroups: [
            {
              title: "1. Explorar la tabla",
              description: "Revisar columnas, nulos, categorías y posibles duplicados.",
              code: "SELECT *\nFROM table_name\nLIMIT 100;"
            },
            {
              title: "2. Medir anomalías",
              description: "Contar cuántos errores o excepciones hay antes de tocar nada.",
              code: "COUNT + GROUP BY + HAVING + filtros por nulos"
            },
            {
              title: "3. Crear una versión limpia",
              description: "Usar `CASE`, filtros o columnas derivadas para generar una salida más consistente.",
              code: "SELECT ..., CASE ... END AS cleaned_field\nFROM table_name;"
            },
            {
              title: "4. Verificar la limpieza",
              description: "Comparar conteos, categorías y estructura para confirmar que el cambio hizo sentido.",
              code: "Repetir conteos y validaciones después de la transformación"
            }
          ]
        },
        {
          title: "Checklist rápida de verificación en SQL",
          body: "Después de limpiar, me conviene hacer una revisión corta para confirmar que no dejé errores silenciosos antes de seguir con el análisis.",
          bestPractices: [
            "Verificar nulos en columnas críticas.",
            "Revisar duplicados con `GROUP BY` y `HAVING`.",
            "Usar `DISTINCT` para inspeccionar valores únicos y detectar categorías raras.",
            "Confirmar que fechas, números y textos están bien tipados.",
            "Revisar si la lógica de negocio sigue teniendo sentido después de limpiar.",
            "Volver a mirar el objetivo del proyecto para comprobar que la base limpia todavía responde la pregunta correcta."
          ]
        },
        {
          title: "Para recordar",
          body: "SQL no solo sirve para consultar: también sirve para limpiar con control. Si los datos viven en una base, SQL suele ser la mejor ruta para corregir errores, crear versiones limpias, validar cambios y dejar el proceso documentado de forma reproducible.",
          resourceLinks: [
            {
              label: "LearnSQL - What SQL dialect should you learn?",
              url: "https://learnsql.com/blog/what-sql-dialect-to-learn/"
            },
            {
              label: "Software Testing Help - SQL vs MySQL vs SQL Server",
              url: "https://www.softwaretestinghelp.com/sql-vs-mysql-vs-sql-server/"
            },
            {
              label: "SQL Tutorial - What is SQL?",
              url: "https://www.sqltutorial.org/what-is-sql/"
            },
            {
              label: "SQLite Window Functions",
              url: "https://sqlite.org/windowfunctions.html"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Cómo utiliza SQL un analista de datos junior</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Dialectos SQL y sus usos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Verificación de la limpieza de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "sql-command-guide",
        "relational-databases-and-sql-structure",
        "data-cleaning-workflow-in-spreadsheets"
      ]
    },
    {
      id: "sql-data-transformation-and-imports",
      slug: "transformacion-de-datos-con-sql-e-importacion",
      title: "Transformación de datos con SQL e importación",
      summary: "Una guía para convertir tipos de dato en SQL, crear tablas transformadas y mover información desde hojas de cálculo o tablas fuente hacia una base lista para análisis.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "CAST", "SAFE_CAST", "Importación"],
      featured: true,
      contentSections: [
        {
          title: "Por qué transformar con SQL importa tanto",
          body: "Si los datos viven en una base, transformarlos directamente con SQL ahorra pasos y hace el flujo más reproducible. No necesito esperar a que otra persona cambie formatos por mí ni sacar la base a una hoja de cálculo solo para convertir tipos o preparar columnas."
        },
        {
          title: "Qué significa transformar datos en SQL",
          body: "Transformar en SQL puede implicar convertir tipos, recodificar campos, cambiar el formato de fechas, concatenar texto, crear tablas derivadas o dejar una salida más limpia para análisis posterior. La lógica es la misma que en hojas de cálculo, pero aplicada sobre tablas y consultas."
        },
        {
          title: "CAST y SAFE_CAST: las funciones clave",
          body: "`CAST` es de las funciones más importantes para transformación en SQL porque permite convertir una expresión desde un tipo a otro. En motores como BigQuery, `SAFE_CAST` hace lo mismo, pero devuelve `NULL` si la conversión falla en vez de romper la consulta completa.",
          comparisonTable: {
            columns: ["Función", "Qué hace", "Cuándo me sirve más"],
            rows: [
              ["CAST", "Convierte un valor al tipo que le indico.", "Cuando confío en que la conversión debería funcionar."],
              ["SAFE_CAST", "Intenta convertir, pero devuelve `NULL` si falla.", "Cuando la calidad del dato es irregular y no quiero que la consulta se caiga."]
            ]
          }
        },
        {
          title: "Conversiones comunes que conviene recordar",
          body: "Las más típicas suelen aparecer al pasar números a texto, texto a número o fechas a otros formatos que faciliten análisis y comparación.",
          comparisonTable: {
            columns: ["Tipo de origen", "Se puede convertir a", "Ejemplo"],
            rows: [
              ["Numérico", "INT, NUMERIC, FLOAT, STRING", "Pasar un conteo a texto para etiquetar una salida."],
              ["Cadena", "BOOLEAN, INT, NUMERIC, FLOAT, DATE, DATETIME, TIMESTAMP", "Convertir `'2026-08-03'` en fecha real."],
              ["Fecha", "STRING, DATETIME, TIMESTAMP", "Pasar una fecha a datetime para conservar lógica temporal más amplia."]
            ]
          }
        },
        {
          title: "Ejemplos básicos con CAST",
          body: "Estas transformaciones son chicas, pero salen mucho al preparar datos para un análisis más serio.",
          commandGroups: [
            {
              title: "Número a texto",
              description: "Útil cuando necesito etiquetar o concatenar resultados.",
              code: "SELECT CAST(MyCount AS STRING)\nFROM MyTable;"
            },
            {
              title: "Texto a entero",
              description: "Sirve cuando un número llegó guardado como cadena.",
              code: "SELECT CAST(MyVarcharCol AS INT)\nFROM MyTable;"
            },
            {
              title: "Fecha a cadena",
              description: "Sirve cuando necesito mostrar la fecha como texto o exportarla en formato visible.",
              code: "SELECT CAST(MyDate AS STRING)\nFROM MyTable;"
            },
            {
              title: "Fecha a datetime",
              description: "Sirve para ampliar manejo temporal cuando una fecha necesita convivir con hora.",
              code: "SELECT CAST(MyDate AS DATETIME)\nFROM MyTable;"
            }
          ]
        },
        {
          title: "Cuando conviene usar SAFE_CAST",
          body: "Si sospecho que hay valores sucios o mal tipados, `SAFE_CAST` me deja seguir avanzando sin que la consulta falle completa. Después puedo revisar qué filas quedaron nulas y decidir cómo tratarlas.",
          code: "SELECT SAFE_CAST(MyDate AS STRING)\nFROM MyTable;",
          example: "Si una columna debería ser numérica, pero trae algunos textos raros, `SAFE_CAST` me deja identificar los casos problemáticos sin detener toda la consulta."
        },
        {
          title: "Importar datos desde una hoja o tabla fuente",
          body: "A diferencia de Google Sheets, SQL no suele traer una función tipo `IMPORTRANGE`. En cambio, una forma muy común de mover datos entre tablas es usar `INSERT INTO` junto con `SELECT` y filtros específicos.",
          code: "INSERT INTO destination_table\nSELECT *\nFROM source_table\nWHERE condition;",
          comparisonTable: {
            columns: ["Entorno", "Forma de importar o traer datos", "Idea principal"],
            rows: [
              ["Google Sheets", "IMPORTRANGE", "Trae un rango desde otra hoja manteniendo sincronización con la fuente."],
              ["SQL", "INSERT INTO + SELECT + WHERE", "Inserta filas desde una tabla origen hacia una tabla destino bajo ciertas condiciones."]
            ]
          }
        },
        {
          title: "Ejemplo de importación hacia una tabla nueva",
          body: "Si necesito construir una tabla operativa para otro equipo, puedo seleccionar solo el subconjunto que importa y cargarlo en una tabla destino.",
          code: "INSERT INTO customer_promotion\nSELECT *\nFROM customers\nWHERE total_sales = 0 AND postal_code = '12345';",
          example: "Así puedo dejar lista una tabla de clientes para promoción sin tocar toda la tabla de clientes original."
        },
        {
          title: "Combinar texto dentro de SQL",
          body: "Además de transformar tipos, muchas veces necesito unir columnas para mejorar legibilidad o crear un identificador más claro. Ahí entra `CONCAT`.",
          code: "SELECT CONCAT(first_name, \" \", last_name) AS customer_name\nFROM table_name;",
          bestPractices: [
            "Usar alias con `AS` para que la salida tenga encabezados legibles.",
            "Agregar espacios o separadores explícitos cuando uno campos de texto.",
            "Pensar si conviene concatenar solo para visualización o para crear un campo derivado reusable."
          ]
        },
        {
          title: "Cómo lo conecto con hojas de cálculo",
          body: "En la práctica, muchas veces el flujo se reparte entre ambos mundos: una hoja puede servir para revisión rápida, mientras la base SQL hace la transformación pesada. También puede pasar al revés: primero preparo una exportación desde SQL y luego la llevo a Sheets para revisión o seguimiento."
        },
        {
          title: "Para recordar",
          body: "Transformar con SQL significa preparar la base sin salir de la base. Si manejo bien `CAST`, `SAFE_CAST`, `CONCAT` y los movimientos entre tablas, puedo dejar datos mucho más listos para analizar, compartir o combinar con otras fuentes.",
          resourceLinks: [
            {
              label: "SQL Server - CAST y CONVERT",
              url: "https://learn.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql"
            },
            {
              label: "MySQL - CAST Functions and Operators",
              url: "https://dev.mysql.com/doc/refman/8.0/en/cast-functions.html"
            },
            {
              label: "Google Sheets - IMPORTRANGE",
              url: "https://support.google.com/docs/answer/3093340?hl=en"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Transformar datos con SQL</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Importe y combine datos en hojas de cálculo y bases de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "sql-for-cleaning-and-validating-data",
        "data-transformation-in-spreadsheets",
        "importing-data-into-sheets-and-excel"
      ]
    },
    {
      id: "sql-string-manipulation",
      slug: "manipulacion-de-cadenas-con-sql",
      title: "Manipulaci\u00F3n de cadenas con SQL",
      summary: "Una gu\u00EDa para unir texto en SQL usando `CONCAT`, `CONCAT_WS`, `||` y otras variantes seg\u00FAn el motor, con ejemplos pensados para an\u00E1lisis y reportes.",
      category: "SQL",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "7 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "CONCAT", "Texto", "Transformaci\u00F3n"],
      featured: false,
      contentSections: [
        {
          title: "Por qu\u00E9 conviene saber manipular cadenas",
          body: "Una parte muy com\u00FAn del trabajo anal\u00EDtico es dejar los datos m\u00E1s legibles. A veces eso significa unir nombre y apellido, armar una URL, crear una etiqueta para un reporte o dejar un identificador m\u00E1s claro para otra persona del equipo."
        },
        {
          title: "Qu\u00E9 significa concatenar en SQL",
          body: "Concatenar es unir dos o m\u00E1s cadenas de texto para formar una nueva. Esto sirve para crear variables derivadas, mejorar la lectura de resultados o preparar campos que luego se usar\u00E1n en informes, filtros o visualizaciones."
        },
        {
          title: "Funciones y operadores que m\u00E1s conviene recordar",
          body: "La idea es la misma en todos los motores, pero la sintaxis cambia un poco seg\u00FAn la base de datos. Por eso conviene recordar la l\u00F3gica y luego adaptar el detalle al dialecto que se est\u00E9 usando.",
          comparisonTable: {
            columns: ["Funci\u00F3n / operador", "Uso", "Ejemplo", "Resultado"],
            rows: [
              ["CONCAT", "Une cadenas para crear una nueva salida de texto.", "CONCAT('Google', '.com')", "Google.com"],
              ["CONCAT_WS", "Une cadenas agregando un separador entre cada parte.", "CONCAT_WS('.', 'www', 'google', 'com')", "www.google.com"],
              ["||", "Concatena cadenas con un operador, com\u00FAn en BigQuery y otros motores.", "'Google' || '.com'", "Google.com"],
              ["+", "En SQL Server puede usarse para unir cadenas.", "'Google' + '.com'", "Google.com"]
            ]
          }
        },
        {
          title: "CONCAT para crear nombres completos",
          body: "Si estoy trabajando con marketing, CRM o bases de clientes, una necesidad muy t\u00EDpica es unir nombre y apellido en una sola columna.",
          code: "SELECT \n    CONCAT(first_name, ' ', last_name) AS full_name \nFROM \n    customers;",
          example: "El espacio entre comillas simples evita que el nombre completo quede pegado y mejora la legibilidad del resultado."
        },
        {
          title: "CONCAT_WS cuando tambi\u00E9n necesito separadores",
          body: "`CONCAT_WS` significa CONCAT With Separator. Me ahorra repetir el separador a mano entre cada fragmento, algo muy \u00FAtil al armar direcciones, URLs o rutas.",
          code: "SELECT CONCAT_WS('.', 'www', 'your_company', 'com') AS website\nFROM web_data;",
          example: "Ac\u00E1 el punto se inserta autom\u00E1ticamente entre cada parte, dejando la URL lista para lectura o documentaci\u00F3n."
        },
        {
          title: "El operador || en motores compatibles",
          body: "En motores como BigQuery, `||` es una forma muy c\u00F3moda de unir texto y suele leerse r\u00E1pido cuando la transformaci\u00F3n es corta.",
          code: "SELECT book_name || ' - ' || edition AS full_book_title\nFROM library;",
          example: "Este formato sirve mucho para combinar un nombre base con una versi\u00F3n, edici\u00F3n o categor\u00EDa."
        },
        {
          title: "La variante con + en SQL Server",
          body: "No todos los motores aceptan `||`. En SQL Server, por ejemplo, la concatenaci\u00F3n suele hacerse con `+`, as\u00ED que siempre conviene validar el dialecto antes de copiar una consulta.",
          code: "SELECT 'Google' + '.com' AS website;",
          bestPractices: [
            "Confirmar el dialecto SQL antes de reutilizar ejemplos de internet o de otro proyecto.",
            "Usar alias claros con `AS` para que la columna resultante sea entendible.",
            "Agregar separadores expl\u00EDcitos para evitar textos pegados o ambiguos."
          ]
        },
        {
          title: "Cu\u00E1ndo me sirve esto en an\u00E1lisis real",
          body: "La manipulaci\u00F3n de cadenas no es solo est\u00E9tica. Tambi\u00E9n ayuda a preparar dimensiones legibles, construir claves de apoyo, generar campos listos para exportaci\u00F3n y dejar salidas m\u00E1s profesionales para dashboards o reportes."
        },
        {
          title: "Para recordar",
          body: "Si necesito unir texto en SQL, primero pienso en el motor que estoy usando. Despu\u00E9s elijo entre `CONCAT`, `CONCAT_WS`, `||` o `+`. La idea siempre es la misma: transformar texto de forma clara, reutilizable y legible para el an\u00E1lisis.",
          resourceLinks: [
            {
              label: "MySQL - String Functions",
              url: "https://dev.mysql.com/doc/refman/8.0/en/string-functions.html"
            },
            {
              label: "BigQuery - Operators",
              url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/operators"
            },
            {
              label: "SQL Server - String concatenation",
              url: "https://learn.microsoft.com/en-us/sql/t-sql/language-elements/string-concatenation-transact-sql"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Manipular cadenas con SQL</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Combinar cadenas de texto para obtener estad\u00EDsticas</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "sql-data-transformation-and-imports",
        "sql-introduction-basics",
        "sql-command-guide"
      ]
    },
    {
      id: "sql-joins-and-aliases",
      slug: "joins-y-alias-en-sql",
      title: "JOINs y alias en SQL",
      summary: "Una guía para entender cómo combinar tablas con `INNER`, `LEFT`, `RIGHT` y `FULL OUTER JOIN`, además de usar alias para que las consultas sean más limpias, legibles y manejables.",
      category: "SQL",
      type: "Guía",
      level: "intermediate",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "JOIN", "INNER JOIN", "LEFT JOIN", "Alias"],
      featured: true,
      contentSections: [
        {
          title: "Por qué los JOIN son tan importantes",
          body: "En bases de datos relacionales, la información rara vez vive toda junta en una sola tabla. Los `JOIN` existen para reconstruir esa historia uniendo tablas que comparten una clave, como un `customer_id`, `department_id` o `product_id`."
        },
        {
          title: "Qué hace realmente un JOIN",
          body: "Un `JOIN` combina filas de dos o más tablas basándose en una columna relacionada. Lo normal es unirlas con una clave primaria y una clave foránea, para que el cruce tenga sentido y no mezcle información equivocada.",
          code: "SELECT \n   table_name1.column_name,\n   table_name2.column_name\nFROM table_name1\nJOIN table_name2\n  ON table_name1.column_name = table_name2.column_name;"
        },
        {
          title: "Los cuatro JOIN que más conviene dominar",
          body: "Aunque existen más variantes, estos cuatro explican casi toda la lógica que se usa en análisis diario.",
          comparisonTable: {
            columns: ["JOIN", "Qué devuelve", "Cuándo lo usaría"],
            rows: [
              ["INNER JOIN", "Solo registros que existen en ambas tablas.", "Cuando me interesan solo coincidencias válidas."],
              ["LEFT JOIN", "Todos los registros de la tabla izquierda y coincidencias de la derecha.", "Cuando la tabla base no se puede perder."],
              ["RIGHT JOIN", "Todos los registros de la tabla derecha y coincidencias de la izquierda.", "Poco frecuente; casi siempre prefiero reordenar y usar LEFT JOIN."],
              ["FULL OUTER JOIN", "Todos los registros de ambas tablas, coincidan o no.", "Cuando quiero auditar cobertura, faltantes o cruces incompletos."]
            ]
          }
        },
        {
          title: "INNER JOIN: quedarme solo con lo que coincide",
          body: "Es el join más común. Devuelve únicamente filas que tienen coincidencia en ambas tablas. Si una llave existe en una tabla pero no en la otra, esa fila no aparece en el resultado.",
          code: "SELECT\n  customers.customer_name,\n  orders.product_id,\n  orders.ship_date\nFROM customers\nINNER JOIN orders\n  ON customers.customer_id = orders.customer_id;",
          example: "Sirve mucho para unir clientes con pedidos, empleados con departamentos o ventas con productos cuando me interesan solo casos bien relacionados."
        },
        {
          title: "LEFT JOIN: mantener mi tabla base completa",
          body: "Cuando necesito conservar todos los registros de la tabla principal, `LEFT JOIN` suele ser la mejor opción. Si no hay coincidencia en la tabla derecha, igual se devuelve la fila de la izquierda y el valor faltante aparece como `NULL`.",
          code: "SELECT\n  customers.customer_name,\n  sales.sales_rep\nFROM customers\nLEFT JOIN sales\n  ON customers.customer_id = sales.customer_id;",
          example: "Es muy útil para detectar clientes sin ventas, productos sin categoría o empleados sin asignación todavía."
        },
        {
          title: "RIGHT JOIN: la misma lógica, pero desde el otro lado",
          body: "`RIGHT JOIN` hace lo mismo que `LEFT JOIN`, solo que prioriza la tabla derecha. En la práctica se usa poco, porque normalmente es más legible invertir el orden de las tablas y quedarse con `LEFT JOIN`.",
          code: "SELECT\n  sales.sales_rep,\n  customers.customer_name\nFROM sales\nRIGHT JOIN customers\n  ON sales.customer_id = customers.customer_id;",
          bestPractices: [
            "Usarlo solo si realmente mejora la lectura de la consulta.",
            "Si confunde la lógica, cambiar el orden de tablas y reescribirlo como `LEFT JOIN`.",
            "Pensar siempre cuál es la tabla que no quiero perder en el resultado."
          ]
        },
        {
          title: "FULL OUTER JOIN: ver todo, incluso lo que no calza",
          body: "Este join devuelve todos los registros de ambas tablas, incluso si no tienen coincidencia. Por eso es muy bueno para auditorías, conciliaciones o revisiones de calidad de datos, aunque también puede inflar mucho el resultado.",
          code: "SELECT\n  customers.customer_name,\n  orders.ship_date\nFROM customers\nFULL OUTER JOIN orders\n  ON customers.customer_id = orders.customer_id;",
          example: "Si veo `NULL` en un lado, sé que hubo una llave que existe solo en una de las tablas."
        },
        {
          title: "La importancia de los alias",
          body: "Los alias crean nombres temporales para tablas o columnas. Sirven muchísimo cuando los nombres originales son largos, cuando hay varias tablas en la misma consulta o cuando quiero que la salida quede más legible.",
          comparisonTable: {
            columns: ["Uso", "Sintaxis recomendada", "Qué aporta"],
            rows: [
              ["Alias de tabla", "FROM employees AS e", "Hace la consulta más corta y fácil de leer."],
              ["Alias de columna", "SELECT employees.name AS employee_name", "Deja encabezados más claros en el resultado."],
              ["Alias sin AS", "FROM employees e", "Puede funcionar, pero con `AS` suele verse más limpio."]
            ]
          }
        },
        {
          title: "JOIN con alias en una consulta real",
          body: "Cuando empiezo a unir tablas, usar alias deja de ser un lujo y pasa a ser una ayuda real para no perderse.",
          code: "SELECT\n  e.name AS employee_name,\n  e.role AS employee_role,\n  d.name AS department_name\nFROM employee_data.employees AS e\nINNER JOIN employee_data.departments AS d\n  ON e.department_id = d.department_id;",
          example: "En vez de repetir nombres largos una y otra vez, uso `e` y `d` para concentrarme en la lógica del cruce."
        },
        {
          title: "Casos prácticos donde un JOIN sí marca diferencia",
          body: "Los `JOIN` no son solo teoría de bases de datos: son la forma real de cruzar información dispersa.",
          highlights: [
            {
              icon: "fa-solid fa-users",
              title: "Clientes y pedidos",
              text: "Cruzar una tabla de clientes con una de órdenes para ver qué compró cada cliente."
            },
            {
              icon: "fa-solid fa-building",
              title: "Empleados y departamentos",
              text: "Asignar el nombre del área a cada empleado usando `department_id`."
            },
            {
              icon: "fa-solid fa-triangle-exclamation",
              title: "Detectar faltantes",
              text: "Usar `LEFT JOIN` para encontrar registros que no tienen relación cargada."
            },
            {
              icon: "fa-solid fa-scale-balanced",
              title: "Auditar coberturas",
              text: "Usar `FULL OUTER JOIN` para revisar qué llaves están solo en un lado del cruce."
            }
          ]
        },
        {
          title: "Errores comunes al usar JOIN",
          body: "Muchas consultas fallan no por la sintaxis, sino por pequeños detalles de lógica.",
          comparisonTable: {
            columns: ["Error", "Qué lo causa", "Cómo lo evitaría"],
            rows: [
              ["Duplicados inesperados", "La llave no era única en una o ambas tablas.", "Revisar cardinalidad antes del cruce."],
              ["Demasiadas filas", "Se hizo un join sobre una columna incorrecta o muy repetida.", "Validar la columna del `ON` antes de ejecutar."],
              ["Muchos NULL", "No había coincidencia suficiente entre tablas.", "Revisar calidad de llaves y si el join elegido era el correcto."],
              ["Consulta difícil de leer", "No se usaron alias o nombres claros.", "Aplicar alias consistentes y encabezados descriptivos."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Si necesito solo coincidencias, pienso en `INNER JOIN`. Si quiero conservar mi tabla base, voy con `LEFT JOIN`. Si quiero auditar faltantes, `FULL OUTER JOIN` puede ayudar. Y si la consulta empieza a crecer, los alias dejan de ser opcionales y pasan a ser parte del orden.",
          resourceLinks: [
            {
              label: "SQL Tutorial - SQL INNER JOIN",
              url: "https://www.sqltutorial.org/sql-inner-join/"
            },
            {
              label: "SQL Tutorial - SQL LEFT JOIN",
              url: "https://www.sqltutorial.org/sql-left-join/"
            },
            {
              label: "SQL Tutorial - SQL Alias",
              url: "https://www.sqltutorial.org/sql-alias/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Explore cómo funcionan los JOIN</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Utilice los JOIN de forma eficaz</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Identidades secretas: La importancia de los alias</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "relational-databases-and-sql-structure",
        "sql-data-transformation-and-imports",
        "sql-string-manipulation"
      ]
    },
    {
      id: "sql-subqueries-and-functions",
      slug: "subconsultas-y-funciones-en-sql",
      title: "Subconsultas y funciones en SQL",
      summary: "Una guía para entender qué son las subconsultas, cómo combinarlas con funciones como `COUNT`, `AVG`, `CASE` o `HAVING`, y cómo usarlas de forma clara y útil dentro de un análisis.",
      category: "SQL",
      type: "Guía",
      level: "intermediate",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["SQL", "Subconsultas", "HAVING", "CASE", "COUNT"],
      featured: true,
      contentSections: [
        {
          title: "Por qué las subconsultas importan tanto",
          body: "Las subconsultas permiten responder preguntas más complejas sin tener que partir el análisis en muchas consultas separadas. Cuando están bien usadas, ayudan a resumir, comparar y filtrar datos de manera mucho más elegante dentro de una sola lógica."
        },
        {
          title: "Qué es una subconsulta",
          body: "Una subconsulta es una consulta SQL anidada dentro de otra consulta mayor. También se le llama consulta interna o consulta anidada. Su función es producir un resultado intermedio que luego la consulta principal usa para filtrar, calcular o construir una salida final."
        },
        {
          title: "Por qué se llevan tan bien con las funciones SQL",
          body: "Las funciones como `AVG()`, `COUNT()`, `SUM()`, `CASE` o la cláusula `HAVING` sirven para resumir y transformar información. Las subconsultas entran justo cuando necesito usar ese resumen dentro de otra decisión analítica.",
          comparisonTable: {
            columns: ["Función o cláusula", "Para qué sirve", "Cómo se combina con subconsultas"],
            rows: [
              ["AVG()", "Calcular promedios.", "Comparar filas contra un promedio general."],
              ["COUNT()", "Contar registros.", "Detectar grupos, duplicados o volumen por segmento."],
              ["CASE", "Aplicar lógica condicional.", "Clasificar resultados derivados de una subconsulta."],
              ["HAVING", "Filtrar después de agrupar.", "Quedarme solo con grupos que cumplan una condición agregada."],
              ["IF()", "Resolver decisiones simples en motores compatibles.", "Etiquetar resultados según una regla puntual."]
            ]
          }
        },
        {
          title: "La estructura base de una subconsulta",
          body: "No existe una sola sintaxis universal, pero casi siempre la lógica parte con una consulta interna entre paréntesis que luego es usada por la consulta principal.",
          code: "SELECT account_table.*\nFROM (\n  SELECT *\n  FROM transaction.sf_model_feature_2014_01\n  WHERE day_of_week = 'Friday'\n) account_table\nWHERE account_table.availability = 'YES';"
        },
        {
          title: "Dónde suelen aparecer",
          body: "Las subconsultas suelen aparecer dentro de `SELECT`, `FROM` o `WHERE`. Cada ubicación responde a una necesidad distinta dentro del análisis.",
          comparisonTable: {
            columns: ["Ubicación", "Qué resuelve", "Ejemplo típico"],
            rows: [
              ["WHERE", "Filtrar según un valor calculado aparte.", "Traer empleados con sueldo mayor al promedio."],
              ["FROM", "Crear una tabla intermedia antes del análisis final.", "Resumir una base y luego filtrarla."],
              ["SELECT", "Agregar un cálculo derivado dentro del resultado.", "Mostrar el total de pedidos por fila o referencia."]
            ]
          }
        },
        {
          title: "Subconsulta en WHERE",
          body: "Este es uno de los usos más intuitivos. La subconsulta calcula un valor y la consulta principal lo usa como criterio de filtrado.",
          code: "SELECT employee_name, salary\nFROM employees\nWHERE salary > (\n  SELECT AVG(salary)\n  FROM employees\n);",
          example: "Así puedo identificar fácilmente qué empleados están por sobre el sueldo promedio del equipo."
        },
        {
          title: "Subconsulta en FROM",
          body: "Cuando necesito preparar una tabla resumida antes de seguir analizando, poner la subconsulta en `FROM` suele ser una solución muy clara.",
          code: "SELECT department_summary.department_id,\n       department_summary.total_people\nFROM (\n  SELECT department_id,\n         COUNT(*) AS total_people\n  FROM employees\n  GROUP BY department_id\n) AS department_summary\nWHERE department_summary.total_people >= 5;",
          example: "Primero resumo cuántas personas hay por departamento y después me quedo solo con áreas que tengan cierto tamaño mínimo."
        },
        {
          title: "Cálculos incrustados directamente en SQL",
          body: "No todo cálculo necesita una subconsulta, pero este tema conversa muy bien con ellas. Muchas veces conviene incrustar cálculos simples directamente en `SELECT` para validar métricas o crear columnas derivadas antes de resumir, filtrar o comparar.",
          code: "SELECT\n  Date,\n  Region,\n  Small_Bags,\n  Large_Bags,\n  XLarge_Bags,\n  Total_Bags,\n  Small_Bags + Large_Bags + XLarge_Bags AS Total_Bags_Calc\nFROM your_project.avocado_data.avocado_prices;",
          example: "Este tipo de cálculo ayuda a verificar si una columna total efectivamente coincide con la suma de sus componentes."
        },
        {
          title: "Porcentajes y filtros preventivos",
          body: "Otro uso muy común es incrustar cálculos porcentuales dentro de la consulta. Ahí conviene combinar el cálculo con filtros que eviten errores, por ejemplo divisiones por cero.",
          code: "SELECT\n  Date,\n  Region,\n  Total_Bags,\n  Small_Bags,\n  (Small_Bags / Total_Bags) * 100 AS Small_Bags_Percent\nFROM your_project.avocado_data.avocado_prices\nWHERE Total_Bags <> 0;",
          bestPractices: [
            "Poner alias claros con `AS` para que la columna calculada sea legible.",
            "Filtrar divisiones por cero antes de ejecutar el cálculo.",
            "Usar estas columnas derivadas como base para una subconsulta o tabla temporal si luego las voy a reutilizar."
          ]
        },
        {
          title: "Subconsulta con IN para múltiples valores",
          body: "Si la subconsulta devuelve más de una fila, normalmente conviene usarla con operadores de múltiples valores como `IN`.",
          code: "SELECT customer_name\nFROM customers\nWHERE customer_id IN (\n  SELECT customer_id\n  FROM orders\n  WHERE ship_date >= '2026-01-01'\n);",
          bestPractices: [
            "Usar `IN` cuando la subconsulta puede devolver varios registros.",
            "Recordar que una subconsulta de varias filas no funciona bien con comparaciones que esperan un solo valor.",
            "Pensar si un `JOIN` podría ser más claro si el cruce va a reutilizarse varias veces."
          ]
        },
        {
          title: "HAVING y subconsultas",
          body: "`HAVING` filtra después de agrupar, así que se vuelve muy útil cuando quiero quedarme solo con grupos que superan una métrica calculada.",
          code: "SELECT department_id, COUNT(*) AS total_people\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 10;",
          example: "Esto no necesita una subconsulta todavía, pero muchas veces sirve como base para crear una tabla intermedia y luego cruzarla con otra consulta más amplia."
        },
        {
          title: "CASE para interpretar mejor el resultado",
          body: "Una subconsulta puede calcular una referencia y `CASE` puede traducir eso a algo más entendible para el negocio.",
          code: "SELECT employee_name,\n       salary,\n       CASE\n         WHEN salary > (\n           SELECT AVG(salary)\n           FROM employees\n         ) THEN 'Sobre promedio'\n         ELSE 'Bajo o igual al promedio'\n       END AS salary_level\nFROM employees;",
          example: "Aquí no solo comparo con el promedio: además convierto esa comparación en una etiqueta fácil de leer."
        },
        {
          title: "Métodos correctos para construir buenas subconsultas",
          body: "La gracia no es escribir la consulta más larga, sino la más clara posible sin perder control analítico.",
          bestPractices: [
            "Partir probando primero la subconsulta por separado para verificar que devuelve lo esperado.",
            "Poner alias claros cuando la subconsulta se use como tabla derivada.",
            "Evitar anidar demasiados niveles si un `JOIN` o una CTE haría la lógica más legible.",
            "Separar bien el objetivo: qué calcula la subconsulta y qué decide la consulta principal.",
            "Validar si la subconsulta devuelve una fila, varias o una tabla resumida, porque eso cambia cómo debe usarse."
          ]
        },
        {
          title: "Cuándo me conviene pasar a una tabla temporal",
          body: "Si una lógica derivada la voy a reutilizar varias veces, o si el cálculo ya dejó de ser pequeño, a veces conviene pasar desde una subconsulta a una tabla temporal. En BigQuery eso suele resolverse muy bien con `WITH`, que crea una tabla intermedia para seguir trabajando sin repetir filtros o agregaciones.",
          comparisonTable: {
            columns: ["Opción", "Cuándo conviene más", "Ventaja principal"],
            rows: [
              ["Subconsulta", "Cuando el cálculo o filtro se usa una sola vez dentro de la consulta.", "Mantiene todo en una sola sentencia."],
              ["WITH / tabla temporal lógica", "Cuando necesito reutilizar un subconjunto o una agregación dentro del mismo análisis.", "Hace la consulta más legible y evita repetir pasos."],
              ["CREATE TEMP TABLE", "Cuando quiero una tabla temporal gestionada explícitamente por la sesión.", "Sirve como staging para varias consultas o transformaciones consecutivas."]
            ]
          }
        },
        {
          title: "WITH como puente entre subconsulta y tabla temporal",
          body: "La cláusula `WITH` es muy útil porque permite declarar una tabla temporal lógica al inicio de la consulta. Técnicamente no siempre se piensa como subconsulta clásica, pero cumple una función muy parecida: separar una capa de preparación antes del análisis principal.",
          code: "WITH new_table_data AS (\n  SELECT *\n  FROM Existing_table\n  WHERE Tripduration >= 60\n)\nSELECT *\nFROM new_table_data;",
          example: "Así puedo filtrar una base una sola vez y luego seguir consultando ese subconjunto sin repetir el `WHERE` completo."
        },
        {
          title: "Tablas temporales gestionadas por el usuario",
          body: "Si el análisis ya requiere varias etapas o diferentes consultas sobre el mismo subconjunto, una tabla temporal explícita puede ser más cómoda. En BigQuery suele usarse `CREATE TEMP TABLE`; en otros motores también aparecen variantes con `SELECT INTO` o `CREATE TABLE` temporal.",
          code: "CREATE TEMP TABLE table_name AS\nSELECT *\nFROM source_table\nWHERE condition;",
          example: "Esto sirve mucho para staging, preprocesamiento o conciliaciones donde voy a consultar varias veces el mismo bloque transformado."
        },
        {
          title: "Impacto que pueden tener en un análisis",
          body: "Bien usadas, las subconsultas permiten comparar contra referencias internas, detectar excepciones, resumir antes de profundizar y dejar consultas mucho más expresivas. Si además combino cálculos incrustados y tablas temporales cuando corresponde, el análisis gana orden, trazabilidad y reutilización. Mal usadas, en cambio, pueden volver la consulta más lenta o difícil de mantener."
        },
        {
          title: "Para recordar",
          body: "Las subconsultas son una forma de pensar el análisis en capas. Primero calculo algo importante; después lo reutilizo para filtrar, clasificar o resumir mejor. Si el cálculo es simple, puedo incrustarlo directo en `SELECT`. Si la lógica crece o se reutiliza, `WITH` o una tabla temporal pueden dar más orden. Y si además combino todo eso con `AVG`, `COUNT`, `CASE` o `HAVING`, puedo responder preguntas bastante más potentes sin perder claridad.",
          resourceLinks: [
            {
              label: "W3Resource - SQL Subqueries",
              url: "https://www.w3resource.com/sql/subqueries/understanding-sql-subqueries.php"
            },
            {
              label: "Mode - SQL Subqueries",
              url: "https://mode.com/sql-tutorial/sql-sub-queries/"
            },
            {
              label: "W3Schools - SQL HAVING",
              url: "https://www.w3schools.com/sql/sql_having.asp"
            },
            {
              label: "BigQuery - WITH clause",
              url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax#with_clause"
            },
            {
              label: "BigQuery - Temporary tables",
              url: "https://cloud.google.com/bigquery/docs/writing-results#temporary_and_permanent_tables"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Funciones y subconsultas SQL: Una amistad funcional</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a Paso: Utilice subconsultas para agregar Datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Incrustar cálculos sencillos con SQL</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Trabajar con tablas temporales</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "sql-joins-and-aliases",
        "sql-for-cleaning-and-validating-data",
        "relational-databases-and-sql-structure"
      ]
    },
    {
      id: "python-introduction-and-comparison",
      slug: "introduccion-a-python-y-comparacion-con-otros-lenguajes",
      title: "Introducción a Python y comparación con otros lenguajes",
      summary: "Una guía inicial para entender por qué Python se usa tanto en análisis de datos, cómo se compara con R, Java y C++, y qué ruta seguir para aprenderlo con más criterio.",
      category: "Programación",
      type: "Guía",
      level: "initial",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Programación", "R", "Aprendizaje"],
      featured: true,
      contentSections: [
        {
          title: "Por qué Python suele ser el punto de partida",
          body: "Python es uno de los lenguajes más usados por profesionales de datos porque logra un equilibrio muy útil entre claridad, flexibilidad y potencia. Su sintaxis se parece bastante al lenguaje natural, así que para empezar a programar suele ser mucho menos intimidante que otras alternativas."
        },
        {
          title: "Qué lo hace tan valioso en análisis de datos",
          body: "Python no se queda solo en automatizar tareas pequeñas. También sirve para limpiar datos, transformarlos, analizarlos, crear visualizaciones, entrenar modelos y conectar distintos pasos dentro de un mismo flujo. Eso lo vuelve muy cómodo cuando quiero pasar desde una exploración simple hacia algo más automatizado o reproducible."
        },
        {
          title: "Cinco criterios para compararlo con otros lenguajes",
          body: "Cuando comparo lenguajes de programación para datos, me conviene mirar al menos estas cinco dimensiones.",
          comparisonTable: {
            columns: ["Criterio", "Qué evalúa", "Por qué importa"],
            rows: [
              ["Velocidad", "Qué tan rápido suele ejecutarse un programa.", "Afecta rendimiento, sobre todo en procesos pesados."],
              ["Accesibilidad", "Qué tan fácil es comenzar a aprenderlo.", "Hace más suave o más dura la curva inicial."],
              ["Variables", "Cómo maneja tipos y valores en memoria.", "Impacta flexibilidad, control y lectura del código."],
              ["Enfoque para datos", "Qué tareas resuelve mejor dentro del análisis.", "Ayuda a elegir la herramienta según el problema."],
              ["Paradigma", "La lógica general con la que se programa.", "Influye en cómo se estructura el pensamiento al escribir código."]
            ]
          }
        },
        {
          title: "Python frente a R, Java y C++",
          body: "La idea no es buscar un ganador universal, sino entender para qué destaca cada uno.",
          comparisonTable: {
            columns: ["Característica", "Python", "R", "Java", "C++"],
            rows: [
              ["Velocidad", "Más lento en general, pero muy suficiente para muchísimos análisis.", "Depende bastante de la configuración y los paquetes.", "Más rápido que Python en muchos contextos.", "Muy rápido y potente para rendimiento."],
              ["Accesibilidad", "Fácil de aprender para principiantes.", "Más especializado y menos amigable al inicio.", "Tiene lógica clara, pero suele sentirse más estructurado.", "Más complejo por sintaxis y manejo técnico."],
              ["Variables", "Dinámicas y flexibles.", "Dinámicas.", "Tipado más estático.", "Más control de bajo nivel y estructura más técnica."],
              ["Enfoque en datos", "Muy fuerte en automatización, análisis y machine learning.", "Muy fuerte en estadística, investigación y exploración.", "Útil cuando el análisis se integra con sistemas más grandes.", "Menos habitual en analítica diaria, pero potente en implementaciones exigentes."],
              ["Paradigma", "Principalmente orientado a objetos, pero bastante versátil.", "Muy ligado al enfoque funcional y estadístico.", "Orientado a objetos.", "Multiparadigma, con mucha flexibilidad técnica."]
            ]
          }
        },
        {
          title: "Entonces, ¿cuándo elegiría Python?",
          body: "Si necesito una herramienta transversal para análisis, automatización, limpieza de datos, notebooks, visualización y machine learning, Python suele ser una apuesta muy sólida. No siempre será el más rápido, pero sí uno de los más prácticos para construir un flujo completo sin cambiar de lenguaje a cada rato."
        },
        {
          title: "Dónde entra R y por qué conviene conocerlo",
          body: "R no reemplaza a Python, pero lo complementa muy bien. Suele destacar más en contextos estadísticos, académicos o de investigación, y tiene un ecosistema excelente para análisis exploratorio, visualización y modelado con enfoque más estadístico.",
          comparisonTable: {
            columns: ["Aspecto", "Python", "R"],
            rows: [
              ["Punto fuerte", "Automatización, flexibilidad y machine learning.", "Estadística, visualización y análisis exploratorio."],
              ["Perfil típico", "Analistas, científicos de datos, desarrolladores y perfiles híbridos.", "Investigadores, estadísticos y científicos de datos con foco analítico."],
              ["Curva de entrada", "Más amistosa para empezar.", "Más especializada, pero muy potente cuando ya se domina."]
            ]
          }
        },
        {
          title: "Qué aprender de Python sí se transfiere después",
          body: "Lo valioso de partir con Python es que varios conceptos después se reciclan en otros lenguajes: variables, condicionales, bucles, funciones, estructuras de datos y lógica de resolución de problemas. Por eso, aprender bien Python también facilita más adelante dar el salto a R u otras herramientas."
        },
        {
          title: "Cómo lo aprendería sin frustrarme",
          body: "La forma más sana de aprender programación no suele ser memorizar sintaxis suelta, sino practicar con un proyecto pequeño que obligue a usar lo aprendido con sentido.",
          bestPractices: [
            "Partir con ejercicios simples, pero conectarlos rápido con un caso real.",
            "Guardar apuntes propios y pequeñas hojas de referencia.",
            "Repetir patrones de código hasta que la lógica se vuelva natural.",
            "Aceptar que buscar documentación también es parte de programar.",
            "Aprender por bloques: sintaxis, estructuras, funciones y luego librerías."
          ]
        },
        {
          title: "Ruta breve para seguir profundizando",
          body: "Si ya entendí por qué Python importa, el siguiente paso es ordenar el aprendizaje para no saltar directo a librerías sin una base clara.",
          comparisonTable: {
            columns: ["Etapa", "Qué conviene reforzar", "Ejemplo de foco"],
            rows: [
              ["Base", "Sintaxis, variables, listas, condicionales y bucles.", "Entender cómo piensa el lenguaje."],
              ["Intermedia", "Funciones, diccionarios, manejo de archivos y errores.", "Resolver tareas reales sin tanto copiar y pegar."],
              ["Datos", "Pandas, NumPy y lectura de datasets.", "Limpiar y transformar información."],
              ["Aplicación", "Visualización, automatización y notebooks.", "Comunicar resultados y dejar procesos repetibles."],
              ["Especialización", "Machine learning, APIs o despliegue.", "Elegir una línea según el tipo de proyecto."]
            ]
          }
        },
        {
          title: "Recursos que sí complementan bien",
          body: "Más que acumular cursos, prefiero dejar a mano recursos confiables para practicar, consultar y seguir avanzando según necesidad.",
          resourceLinks: [
            {
              label: "Python Software Foundation",
              url: "https://www.python.org/"
            },
            {
              label: "Python Tutorial oficial",
              url: "https://docs.python.org/3/tutorial/"
            },
            {
              label: "Kaggle Learn",
              url: "https://www.kaggle.com/learn"
            },
            {
              label: "R for Data Science",
              url: "https://r4ds.hadley.nz/"
            },
            {
              label: "CRAN",
              url: "https://cran.r-project.org/"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Python no es la única opción para análisis de datos, pero sí una de las más completas para empezar y crecer. Si lo entiendo como una herramienta para pensar, automatizar y construir análisis reproducibles, entonces deja de ser solo un lenguaje y se vuelve una base real para el resto del trabajo con datos."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Python frente a otros lenguajes de programación</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Introducción a R</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Formas de aprender a programar</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "working-approach-before-analysis",
        "analysis-process-phases-and-tools",
        "data-visualization-foundations"
      ]
    },
    {
      id: "html-css-basics-for-better-webs",
      slug: "html-y-css-para-construir-mejores-webs",
      title: "HTML y CSS para construir mejores webs",
      summary: "Una guía base para entender cómo HTML arma la estructura de una web y cómo CSS define su formato, colores y estilo visual, con ejemplos simples para aterrizar ambos roles.",
      category: "Programación",
      type: "Guía",
      level: "initial",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["HTML", "CSS", "Web", "Frontend"],
      featured: true,
      contentSections: [
        {
          title: "Qué resuelve cada uno",
          body: "HTML y CSS suelen aprenderse juntos porque se complementan todo el tiempo. HTML define la estructura del contenido: títulos, párrafos, botones, imágenes, secciones y enlaces. CSS, en cambio, toma esa estructura y decide cómo se verá: colores, tamaños, márgenes, tipografía, alineación y distribución visual."
        },
        {
          title: "La forma más simple de recordarlo",
          body: "Si pienso en una casa, HTML serían los muros, puertas, ventanas y habitaciones; CSS sería la pintura, la iluminación, el orden visual y la decoración. Uno organiza lo que existe. El otro define cómo se presenta."
        },
        {
          title: "Qué elementos de HTML conviene dominar primero",
          body: "No hace falta memorizar todas las etiquetas para empezar. Con algunas bien entendidas ya se puede construir una página bastante clara.",
          comparisonTable: {
            columns: ["Etiqueta", "Para qué sirve", "Ejemplo rápido"],
            rows: [
              ["`<h1>` a `<h6>`", "Crear títulos y jerarquía.", "Nombre principal de una página o subtítulos de sección."],
              ["`<p>`", "Escribir párrafos.", "Descripción de un proyecto o presentación personal."],
              ["`<a>`", "Agregar enlaces.", "Link a GitHub, LinkedIn o un recurso externo."],
              ["`<img>`", "Mostrar imágenes.", "Foto, ícono o ilustración dentro de una sección."],
              ["`<section>`, `<article>`, `<div>`", "Agrupar contenido.", "Separar bloques como sobre mí, proyectos o contacto."],
              ["`<button>`", "Disparar acciones.", "Abrir un modal, descargar CV o navegar."],
              ["`<ul>` y `<li>`", "Crear listas.", "Habilidades, tareas o beneficios."],
              ["`<header>`, `<main>`, `<footer>`", "Dar estructura semántica.", "Encabezado, contenido principal y pie de página."]
            ]
          }
        },
        {
          title: "Ejemplo mínimo de estructura en HTML",
          body: "Con muy poco código ya se puede levantar una tarjeta simple con contenido legible.",
          code: "<section class=\"card\">\n  <h1>Fredy Geraldo Rivera</h1>\n  <p>Analista de datos con foco en SQL, Python y visualización.</p>\n  <a href=\"https://github.com/FredyGR-98\">Ver GitHub</a>\n</section>",
          example: "Aquí HTML ya define qué existe: una sección, un título, un párrafo y un enlace. Todavía no decide si se ve bonito o no: solo arma la estructura."
        },
        {
          title: "Dónde entra CSS",
          body: "CSS se encarga de tomar esos bloques y darles forma visual. Es lo que permite que algo pase de verse como texto plano a sentirse como una interfaz con intención.",
          comparisonTable: {
            columns: ["Propiedad CSS", "Qué modifica", "Ejemplo"],
            rows: [
              ["`color`", "Color del texto.", "Cambiar un título a verde o rosado."],
              ["`background`", "Fondo del elemento.", "Dar un fondo blanco o un gradiente suave a una card."],
              ["`font-size`", "Tamaño de texto.", "Hacer que un título destaque más."],
              ["`padding`", "Espacio interno.", "Dar aire dentro de una tarjeta."],
              ["`margin`", "Separación externa.", "Separar secciones entre sí."],
              ["`border-radius`", "Redondez de bordes.", "Crear cards o botones más suaves visualmente."],
              ["`display`", "Forma en que se ordenan los bloques.", "Usar `flex` o `grid` para alinear contenido."],
              ["`box-shadow`", "Sombra.", "Dar profundidad ligera a una caja."]
            ]
          }
        },
        {
          title: "Ejemplo del mismo bloque con CSS",
          body: "Este sería un ejemplo simple de cómo el estilo cambia por completo la percepción del mismo HTML.",
          code: ".card {\n  background: #fffafc;\n  border: 1px solid #f3c9d6;\n  border-radius: 24px;\n  padding: 24px;\n  max-width: 420px;\n  box-shadow: 0 18px 45px rgba(164, 108, 128, 0.12);\n}\n\n.card h1 {\n  color: #6b4f3f;\n  margin-bottom: 12px;\n}\n\n.card a {\n  color: #d84f7a;\n  font-weight: 700;\n  text-decoration: none;\n}",
          example: "El contenido sigue siendo el mismo, pero ahora la tarjeta tiene fondo, borde, separación, color y jerarquía visual. Eso ya empieza a sentirse como una interfaz real."
        },
        {
          title: "Cómo HTML y CSS juntos muestran una ilustración simple",
          body: "Incluso algo muy básico, como una tarjeta con ícono, texto y botón, depende de ambos trabajando juntos.",
          code: "<article class=\"feature-card\">\n  <img src=\"img/icon-chart.svg\" alt=\"Icono de gráfico\" />\n  <h2>Visualización clara</h2>\n  <p>Convertir datos en una historia más fácil de leer.</p>\n  <button>Ver ejemplo</button>\n</article>",
          example: "HTML deja lista la ilustración con su imagen, título, texto y botón. Después CSS decide si esa card va en columna, con colores suaves, centrada y con un botón destacado."
        },
        {
          title: "Qué hace que una web se vea mejor de verdad",
          body: "No todo depende de meter más código. Muchas veces una web mejora porque la estructura está clara y el estilo visual es coherente.",
          bestPractices: [
            "Usar jerarquía visual clara entre títulos, subtítulos y texto normal.",
            "Dar suficiente espacio entre secciones para que respire el contenido.",
            "Elegir pocos colores base y repetirlos con intención.",
            "Pensar desde el inicio cómo se verá en desktop y en celular.",
            "Evitar mezclar demasiados tamaños, sombras o bordes distintos."
          ]
        },
        {
          title: "Qué aprendería primero si quisiera mejorar rápido",
          body: "Si quisiera progresar sin perderme, ordenaría el aprendizaje así.",
          comparisonTable: {
            columns: ["Etapa", "HTML", "CSS"],
            rows: [
              ["Base", "Etiquetas semánticas, enlaces, imágenes, listas y formularios simples.", "Colores, tipografía, márgenes, padding y bordes."],
              ["Intermedia", "Estructura por secciones y componentes reutilizables.", "`flex`, `grid`, estados hover y responsive básico."],
              ["Aplicación", "Maquetar landing pages, portafolios o dashboards simples.", "Sistemas visuales, variables CSS y ajustes para móvil."]
            ]
          }
        },
        {
          title: "Recursos que sí sirven para seguir practicando",
          body: "Acá conviene dejar recursos concretos para consultar estructura, ejemplos y referencias rápidas.",
          resourceLinks: [
            {
              label: "MDN Web Docs - HTML",
              url: "https://developer.mozilla.org/es/docs/Web/HTML"
            },
            {
              label: "MDN Web Docs - CSS",
              url: "https://developer.mozilla.org/es/docs/Web/CSS"
            },
            {
              label: "W3C - Introducción a HTML5 y CSS",
              url: "https://www.edx.org/learn/css/the-world-wide-web-consortium-w3c-html5-and-css-fundamentals"
            },
            {
              label: "HTML5 Cheat Sheet",
              url: "https://htmlcheatsheet.com/"
            },
            {
              label: "CSS Cheat Sheet",
              url: "https://htmlcheatsheet.com/css/"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "HTML construye la base de la página y CSS le da forma visual. Si entiendo bien esa separación, se vuelve mucho más fácil leer código, organizar componentes y mejorar una web con intención en vez de tocar estilos al azar."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Formas de aprender a programar</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-introduction-and-comparison",
        "data-visualization-foundations"
      ]
    },
    {
      id: "jupyter-colab-vscode-for-data-work",
      slug: "jupyter-colab-y-vscode-para-trabajo-con-datos",
      title: "Jupyter, Google Colab y VS Code para trabajo con datos",
      summary: "Una guía práctica para entender cuándo conviene usar Jupyter Notebook online, Google Colab o VS Code, según si quiero estudiar, experimentar o levantar entornos más robustos.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Jupyter", "Google Colab", "VS Code", "Python"],
      featured: true,
      contentSections: [
        {
          title: "Por qué este tema importa tanto",
          body: "Aprender Python no pasa solo por la sintaxis: también pasa por elegir bien dónde lo voy a ejecutar. No es lo mismo practicar una idea rápida, resolver un laboratorio de estudio o construir algo más sólido como una API o un flujo de trabajo completo."
        },
        {
          title: "Qué es un Jupyter Notebook",
          body: "Jupyter Notebook es una aplicación pensada para trabajar con bloques de código, texto, fórmulas y visualizaciones dentro de un mismo documento interactivo. Eso lo vuelve muy cómodo para estudiar, explorar datos, documentar el razonamiento y compartir resultados paso a paso."
        },
        {
          title: "Qué lo hace tan útil para aprender y analizar",
          body: "La gran gracia de Jupyter está en que trabaja por celdas. Puedo ejecutar una parte del código sin tener que correr todo el archivo, retroceder si algo falló, comentar el proceso en Markdown y combinar análisis con explicación escrita.",
          bestPractices: [
            "Usar celdas cortas para probar ideas sin romper todo el flujo.",
            "Acompañar el código con texto en Markdown para dejar trazabilidad.",
            "Separar carga de datos, limpieza, análisis y gráficos en bloques distintos.",
            "Reiniciar y ejecutar todo de vez en cuando para validar que el notebook sigue consistente."
          ]
        },
        {
          title: "Jupyter online y Google Colab: por qué sirven tanto para estudiar",
          body: "Tanto Jupyter online como Google Colab funcionan muy bien cuando quiero abrir un entorno rápido desde el navegador y concentrarme en un caso práctico puntual. Son ideales para ejercicios, pruebas, laboratorios y demostraciones, porque reducen mucho la fricción inicial.",
          comparisonTable: {
            columns: ["Entorno", "Qué lo vuelve útil", "Caso ideal"],
            rows: [
              ["Jupyter online", "Permite abrir notebooks sin instalar demasiado y practicar desde el navegador.", "Laboratorios, estudio guiado o exploración simple."],
              ["Google Colab", "Da acceso rápido a notebooks compartibles y muy cómodos para colaborar o practicar.", "Ejercicios, clases, pruebas rápidas y demos compartidas."],
              ["VS Code", "Entrega más control del proyecto, archivos, terminal y entorno local.", "Proyectos reales, APIs, automatizaciones y soluciones más robustas."]
            ]
          }
        },
        {
          title: "Google Colab: cuándo me parece especialmente conveniente",
          body: "Colab destaca mucho cuando quiero moverme rápido, compartir notebooks con otra persona o simular un caso práctico de estudio sin perder tiempo configurando todo desde cero. Para clases, portafolio, pruebas exploratorias o ejemplos reproducibles, suele ser una muy buena puerta de entrada."
        },
        {
          title: "VS Code: dónde empieza a ganar de verdad",
          body: "Cuando el trabajo deja de ser un experimento aislado y empieza a transformarse en un proyecto con varias carpetas, dependencias, scripts, APIs o automatizaciones, VS Code ofrece bastante más libertad. Ahí ya puedo ordenar archivos, usar terminal, manejar git, crear entornos virtuales y dejar una estructura más profesional.",
          comparisonTable: {
            columns: ["Capacidad", "Jupyter / Colab", "VS Code"],
            rows: [
              ["Estudio guiado", "Muy cómodo y natural.", "También se puede, pero no es su punto más fuerte."],
              ["Pruebas rápidas", "Excelente para iterar por celdas.", "Funciona, pero suele pedir más estructura."],
              ["Documentar razonamiento", "Muy fuerte gracias a Markdown.", "Más orientado a archivos y proyecto completo."],
              ["Entorno de trabajo robusto", "Más limitado.", "Mucho mejor para escalar el proyecto."],
              ["APIs y apps", "Posible, pero menos natural.", "Mucho más cómodo para backend, endpoints y despliegue local."],
              ["Control de dependencias", "Más acotado o indirecto.", "Mucho mejor con entornos virtuales y terminal integrada."]
            ]
          }
        },
        {
          title: "Qué aprendería primero dentro de un notebook",
          body: "Antes de pensar en proyectos gigantes, usaría notebook para dominar el flujo base: escribir una celda, ejecutarla, corregir errores, agregar texto explicativo y mezclar análisis con visualización."
        },
        {
          title: "Acciones básicas que conviene recordar en Jupyter",
          body: "El uso del notebook se vuelve mucho más cómodo cuando se entienden unas pocas acciones repetidas.",
          comparisonTable: {
            columns: ["Acción", "Para qué sirve", "Atajo útil"],
            rows: [
              ["Agregar celda arriba", "Insertar una nueva idea antes de la actual.", "`A` en modo comando"],
              ["Agregar celda abajo", "Seguir desarrollando el flujo.", "`B` en modo comando"],
              ["Ejecutar celda", "Correr el bloque actual.", "`Ctrl + Enter` o `Shift + Enter`"],
              ["Borrar celda", "Eliminar un bloque innecesario.", "`DD` en modo comando"],
              ["Cambiar a Markdown", "Explicar lo que está haciendo el código.", "Cambiar tipo de celda desde el menú"]
            ]
          }
        },
        {
          title: "Cómo lo pensaría en la práctica",
          body: "Si estoy estudiando un caso, probando una librería o armando un análisis exploratorio, me iría feliz con Jupyter o Colab. Si ya quiero construir una API con Flask o FastAPI, conectar archivos del proyecto, usar git con más orden y preparar un entorno replicable, preferiría claramente VS Code."
        },
        {
          title: "Ruta breve para elegir bien",
          body: "No se trata de cuál es mejor en abstracto, sino de cuál encaja mejor con la etapa del trabajo.",
          comparisonTable: {
            columns: ["Si necesito...", "Me conviene más...", "Por qué"],
            rows: [
              ["Aprender paso a paso", "Jupyter Notebook", "Permite pensar por celdas y documentar el proceso."],
              ["Compartir una práctica o demo", "Google Colab", "Se abre fácil y se comparte rápido."],
              ["Levantar un proyecto serio", "VS Code", "Da mejor estructura, control y potencia de desarrollo."],
              ["Explorar datos y probar ideas", "Jupyter o Colab", "Reducen fricción para experimentar."],
              ["Backend, APIs o automatización", "VS Code", "Se integra mucho mejor con entornos y archivos reales."]
            ]
          }
        },
        {
          title: "Recursos para seguir practicando",
          body: "Conviene dejar a mano tanto documentación oficial como opciones para probar sin instalar demasiado.",
          resourceLinks: [
            {
              label: "Jupyter Notebook Docs",
              url: "https://jupyter-notebook.readthedocs.io/en/stable/"
            },
            {
              label: "JupyterLab",
              url: "https://jupyterlab.readthedocs.io/en/latest/"
            },
            {
              label: "Try Jupyter Online",
              url: "https://jupyter.org/try-jupyter/notebooks/"
            },
            {
              label: "Google Colab",
              url: "https://colab.research.google.com/"
            },
            {
              label: "VS Code Python",
              url: "https://code.visualstudio.com/docs/languages/python"
            },
            {
              label: "Markdown Guide",
              url: "https://www.markdownguide.org/basic-syntax/"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Jupyter y Colab son tremendamente útiles para estudiar, experimentar y mostrar razonamiento paso a paso. VS Code, en cambio, empieza a destacar cuando el trabajo necesita estructura, entorno propio y más potencia para construir cosas robustas. Cada uno tiene su momento, y saber elegirlo ahorra mucho tiempo."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Cómo utilizar Jupyter Notebooks</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-introduction-and-comparison",
        "html-css-basics-for-better-webs"
      ]
    },
    {
      id: "object-oriented-programming-basics",
      slug: "programacion-orientada-a-objetos-como-base-de-orden",
      title: "Programación orientada a objetos como base de orden",
      summary: "Una introducción práctica a la POO para entender cómo ayuda a organizar mejor el código, qué diferencia hay entre atributos y métodos, y cómo se conecta con la sintaxis base de Python, funciones, listas y ciclos.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["POO", "Python", "Sintaxis", "Funciones", "Ciclos"],
      featured: true,
      contentSections: [
        {
          title: "Por qué la POO ayuda tanto a ordenar",
          body: "La programación orientada a objetos sirve mucho cuando el código empieza a crecer y ya no basta con dejar todo suelto en variables o bloques aislados. Su gracia está en que permite agrupar datos y comportamiento dentro de una misma estructura, lo que hace más fácil entender, reutilizar y mantener un proyecto."
        },
        {
          title: "Qué es realmente un objeto",
          body: "Un objeto es una entidad que junta información y acciones relacionadas. En vez de tener datos por un lado y operaciones por otro, la POO propone tratarlos como algo que vive dentro de una misma unidad con sentido."
        },
        {
          title: "Antes de la POO: la sintaxis base igual manda",
          body: "Aunque la programación orientada a objetos ayuda a ordenar mejor el código, sigue descansando sobre la sintaxis general de Python. Si no entiendo cómo se nombran variables, cómo funcionan operadores, qué hace una condición o cómo se escribe una función, después la POO se siente mucho más pesada de lo que realmente es."
        },
        {
          title: "Sintaxis y semántica: la diferencia breve",
          body: "La sintaxis es la forma en que se escribe el lenguaje: palabras clave, símbolos, sangría y puntuación. La semántica es el significado de eso que escribí. En otras palabras: una cosa es que el código esté bien armado y otra es que además exprese correctamente lo que quiero hacer."
        },
        {
          title: "Elementos básicos de sintaxis que conviene reconocer",
          body: "Antes de subir a clases y objetos, estos son los bloques que aparecen una y otra vez en Python.",
          comparisonTable: {
            columns: ["Elemento", "Qué hace", "Ejemplo simple"],
            rows: [
              ["Variables", "Guardan datos en memoria.", "`student_name = \"Fredy\"`"],
              ["Palabras clave", "Tienen un uso reservado dentro del lenguaje.", "`if`, `for`, `while`, `return`, `in`"],
              ["Operadores", "Permiten calcular o comparar.", "`+`, `-`, `*`, `/`, `==`, `>`"],
              ["Funciones", "Agrupan instrucciones para resolver una tarea.", "`def saludar(): ...`"],
              ["Condicionales", "Desvían la ejecución según una regla.", "`if`, `elif`, `else`"],
              ["Ciclos", "Repiten acciones.", "`for` y `while`"]
            ]
          }
        },
        {
          title: "Variables, operadores y expresiones",
          body: "Una variable es básicamente un nombre asociado a un valor. Después, con operadores, puedo combinar esos valores para producir expresiones y resultados.",
          code: "precio = 12000\ndescuento = 0.15\nprecio_final = precio - (precio * descuento)\nprint(precio_final)",
          example: "Acá cada nombre guarda un valor, y la expresión usa operadores para calcular un resultado nuevo."
        },
        {
          title: "Condicionales: cómo toma decisiones el código",
          body: "Las sentencias `if`, `elif` y `else` permiten que el programa reaccione de forma distinta según una condición. Esto es clave tanto en scripts simples como en métodos dentro de clases.",
          code: "numero = -4\n\nif numero > 0:\n    print(\"El número es positivo\")\nelif numero == 0:\n    print(\"El número es cero\")\nelse:\n    print(\"El número es negativo\")"
        },
        {
          title: "Reglas de nombres que sí conviene respetar",
          body: "Nombrar bien no es un detalle estético: ayuda mucho a leer, mantener y reutilizar el código con menos confusión.",
          bestPractices: [
            "No usar espacios en nombres de variables o funciones.",
            "No empezar un nombre con números.",
            "Usar `snake_case` para variables y funciones.",
            "Preferir nombres descriptivos antes que abreviaturas crípticas.",
            "Mantener consistencia en el estilo dentro del mismo archivo."
          ]
        },
        {
          title: "La sintaxis también explica por qué la POO ordena mejor",
          body: "Cuando entiendo la base de Python, se nota mucho más la ventaja de la POO. En vez de dejar funciones, listas y estados sueltos por todas partes, las clases me permiten reunir esa sintaxis dentro de una estructura más clara y más fácil de seguir."
        },
        {
          title: "Clase, objeto e instancia sin tanto enredo",
          body: "La forma más simple de pensarlo es esta.",
          comparisonTable: {
            columns: ["Concepto", "Qué significa", "Ejemplo mental"],
            rows: [
              ["Clase", "Es el molde o plano general.", "La idea de una `NaveEspacial` o un `Cliente`."],
              ["Objeto", "Es un elemento creado a partir de ese molde.", "Una nave específica o un cliente específico."],
              ["Instancia", "Es otra forma de decir que ese objeto fue creado desde la clase.", "El cliente `Fredy` como instancia de `Cliente`."]
            ]
          }
        },
        {
          title: "Atributos y métodos: la diferencia que más conviene recordar",
          body: "En POO, los atributos son características del objeto y los métodos son acciones que ese objeto puede ejecutar.",
          comparisonTable: {
            columns: ["Elemento", "Qué representa", "Ejemplo"],
            rows: [
              ["Atributo", "Dato o característica.", "`nombre`, `tipo`, `velocidad`, `estado`."],
              ["Método", "Acción u operación.", "`acelerar()`, `encender()`, `guardar()`."]
            ]
          },
          bestPractices: [
            "Si no lleva paréntesis, normalmente estoy leyendo una característica.",
            "Si lleva paréntesis, normalmente estoy ejecutando una acción.",
            "Pensar atributo = lo que el objeto tiene, método = lo que el objeto hace."
          ]
        },
        {
          title: "Un ejemplo simple para aterrizar la idea",
          body: "No hace falta dominar toda la sintaxis de clases para captar la lógica básica.",
          code: "class Cliente:\n    def __init__(self, nombre, segmento):\n        self.nombre = nombre\n        self.segmento = segmento\n        self.activo = True\n\n    def desactivar(self):\n        self.activo = False",
          example: "Acá `nombre`, `segmento` y `activo` son atributos. `desactivar()` es un método. La clase ayuda a que toda esa lógica quede reunida en un solo lugar."
        },
        {
          title: "Dónde entran las funciones dentro de este mundo",
          body: "Las funciones siguen siendo fundamentales incluso si uso POO. La diferencia es que, cuando una función pertenece a una clase y opera sobre ese objeto, normalmente la llamo método. O sea: la POO no elimina las funciones; más bien las organiza mejor cuando están ligadas a una entidad concreta."
        },
        {
          title: "Por qué funciones, listas y ciclos merecen notas aparte",
          body: "La POO conversa mucho con varios conceptos base de Python, pero no conviene mezclarlo todo como si fuera lo mismo.",
          comparisonTable: {
            columns: ["Tema", "Qué aporta", "Por qué conviene profundizarlo aparte"],
            rows: [
              ["Funciones", "Modularizan tareas.", "Son la base para escribir lógica reutilizable, con o sin clases."],
              ["Listas", "Guardan colecciones de elementos.", "Aparecen en casi cualquier análisis y tienen muchas operaciones propias."],
              ["Ciclos", "Repiten acciones sobre datos.", "Se conectan con listas, validaciones, automatización y limpieza de datos."],
              ["POO", "Agrupa datos y comportamiento con más orden.", "Conviene verla como un enfoque de diseño, no solo como sintaxis."]
            ]
          }
        },
        {
          title: "Las listas: por qué importan tanto en Python",
          body: "Las listas son de las estructuras más usadas porque permiten almacenar varios valores dentro de una misma variable y recorrerlos con facilidad. En análisis de datos aparecen todo el tiempo, ya sea para guardar columnas, resultados, etiquetas o pasos intermedios.",
          code: "clientes = [\"Fredy\", \"Ana\", \"Luis\"]",
          example: "La lista agrupa varios elementos del mismo conjunto. Después puedo leerlos, modificarlos o iterarlos."
        },
        {
          title: "Ciclos: la idea resumida",
          body: "Los ciclos sirven para repetir instrucciones sin tener que escribirlas una y otra vez. En Python, los dos tipos que más conviene recordar al inicio son `for` y `while`.",
          comparisonTable: {
            columns: ["Ciclo", "Cuándo suele usarse", "Ejemplo mental"],
            rows: [
              ["`for`", "Cuando quiero recorrer elementos de una lista, texto o rango.", "Leer varios nombres, columnas o archivos."],
              ["`while`", "Cuando quiero repetir algo mientras se cumpla una condición.", "Seguir ejecutando hasta que un estado cambie."]
            ]
          },
          code: "for cliente in clientes:\n    print(cliente)"
        },
        {
          title: "Cómo se conecta todo esto",
          body: "En la práctica, un proyecto en Python suele mezclar estos conceptos todo el tiempo: uso listas para almacenar datos, ciclos para recorrerlos, funciones para encapsular tareas y, cuando el problema lo amerita, clases para mantener todo más ordenado y entendible."
        },
        {
          title: "Cuándo me preocuparía de verdad por usar POO",
          body: "Si estoy haciendo ejercicios pequeños, tal vez no necesito clases todavía. Pero cuando empiezo a tener varias entidades, reglas repetidas, estados que cambian o lógica que debería quedar agrupada, la POO empieza a aportar mucho valor."
        },
        {
          title: "Para recordar",
          body: "La POO no está para complicar el código, sino para ordenarlo mejor cuando el proyecto crece. La idea central es simple: agrupar datos y acciones relacionadas. Y aunque funciones, listas y ciclos se conectan mucho con este enfoque, tiene todo el sentido tratarlos después en notas separadas para desarrollarlos con más calma."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Más información sobre la programación orientada a objetos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Explorar la sintaxis de Python</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-introduction-and-comparison",
        "jupyter-colab-vscode-for-data-work",
        "html-css-basics-for-better-webs"
      ]
    },
    {
      id: "matrix-and-vector-foundations-for-machine-learning",
      slug: "matrices-y-vectores-como-base-del-machine-learning",
      title: "Matrices y vectores como base del Machine Learning",
      summary: "Una guía base para entender por qué vectores y matrices son tan importantes en datos y Machine Learning, cómo se relacionan con la representación de observaciones, distancias, transformaciones y modelos como regresión lineal, PCA y redes neuronales.",
      category: "Machine Learning",
      type: "Guía",
      level: "basic",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Álgebra lineal", "Matrices", "NumPy"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte no es solo teoría",
          body: "Cuando entro a Machine Learning, los datos casi nunca se procesan como valores sueltos. Se organizan como vectores y matrices para poder compararlos, transformarlos, normalizarlos y combinarlos de manera eficiente. Por eso el álgebra lineal no está de adorno: es una de las bases reales del trabajo con datos."
        },
        {
          title: "Vector y matriz en una sola mirada",
          body: "La forma más práctica de recordarlo es pensar que un vector suele representar una observación, un conjunto de características o incluso pesos de un modelo, mientras que una matriz organiza muchas observaciones o una transformación aplicada sobre ellas.",
          comparisonTable: {
            columns: ["Concepto", "Qué representa", "Ejemplo mental"],
            rows: [
              ["Vector", "Una fila o columna de valores relacionados.", "Una observación con varias features."],
              ["Matriz", "Conjunto bidimensional de datos.", "Un dataset completo con filas y columnas."],
              ["Escalar", "Un solo valor numérico.", "Un factor que cambia la escala de una matriz."]
            ]
          }
        },
        {
          title: "Qué aportan a la gestión de datos",
          body: "Entender matrices y vectores ayuda a ordenar cómo pienso los datos: cada fila puede ser una observación, cada columna una variable, y cada transformación una operación matemática con sentido. Esa lógica vuelve más fácil interpretar preprocesamiento, escalado, reducción de dimensionalidad y entrenamiento de modelos.",
          bestPractices: [
            "Pensar un dataset como una matriz de observaciones por variables.",
            "Pensar una fila como un vector de características.",
            "Recordar que muchas transformaciones del pipeline son operaciones matriciales disfrazadas de funciones."
          ]
        },
        {
          title: "Operaciones básicas que sí conviene recordar",
          body: "Las operaciones elementales son las que luego reaparecen en casi todos los modelos numéricos.",
          comparisonTable: {
            columns: ["Operación", "Qué hace", "Por qué importa en ML"],
            rows: [
              ["Suma y resta", "Combina matrices o vectores elemento a elemento.", "Ajustes, diferencias y acumulación de valores."],
              ["Multiplicación escalar", "Cambia la escala de todos los elementos.", "Escalado y ponderación de datos."],
              ["Multiplicación matricial", "Combina filas por columnas.", "Base de modelos lineales y redes neuronales."],
              ["Transpuesta", "Intercambia filas por columnas.", "Reorganiza estructuras para cálculos y fórmulas analíticas."],
              ["Norma", "Mide magnitud o longitud.", "Distancias, similitudes y normalización."],
              ["Inversa", "Revierte una transformación lineal cuando existe.", "Resolución analítica de sistemas y regresiones."],
              ["Valores propios y vectores propios", "Detectan direcciones invariantes y su escala.", "PCA y compresión de información."]
            ]
          }
        },
        {
          title: "La regla más importante en multiplicación matricial",
          body: "Para multiplicar matrices, las columnas de la primera deben coincidir con las filas de la segunda. Si eso no se cumple, el cálculo no tiene sentido y NumPy devolverá un error.",
          example: "Si `A` es de tamaño `2x3` y `B` es de tamaño `3x2`, entonces `A @ B` sí existe y da una matriz `2x2`."
        },
        {
          title: "NumPy vuelve esto usable de verdad",
          body: "En Python, `NumPy` permite crear vectores y matrices con poco código y ejecutar operaciones optimizadas mucho más rápido que con listas puras.",
          code: "import numpy as np\n\nv = np.array([1, 2, 3])\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\n\nsuma = A + B\nproducto = A @ B\ntranspuesta = A.T"
        },
        {
          title: "Regresión lineal: aquí ya aparece el álgebra matricial",
          body: "Una regresión lineal no se entiende solo como una línea ajustada: también puede verse como una estimación matricial de parámetros. Por eso esta clase conecta tan bien con Machine Learning.",
          code: "import numpy as np\n\nx = np.linspace(0, 10, 20)\ny = 4 + 3 * x + np.random.randn(20)\nX = np.column_stack((np.ones_like(x), x))\n\nbeta = np.linalg.inv(X.T @ X) @ X.T @ y"
        },
        {
          title: "Dónde aparece esto en Machine Learning",
          body: "Aunque al principio parezca contenido matemático aislado, la verdad es que reaparece una y otra vez.",
          comparisonTable: {
            columns: ["Tema", "Rol del álgebra matricial"],
            rows: [
              ["Regresión lineal", "Estimación de parámetros mediante ecuaciones matriciales."],
              ["Redes neuronales", "Cálculo de activaciones con productos tipo `W @ X + b`."],
              ["PCA", "Uso de vectores y valores propios para reducir dimensionalidad."],
              ["KNN y clustering", "Cálculo de distancias entre vectores."],
              ["Normalización", "Reescalado de datos para volver comparables las variables."]
            ]
          }
        },
        {
          title: "Vectores: mucho más que una lista de números",
          body: "En ML, un vector puede representar una observación, una embedding, los pesos de una neurona o incluso una dirección dominante dentro de un espacio de datos. Por eso entender su norma, su dirección y el producto punto ayuda mucho más de lo que parece al principio."
        },
        {
          title: "Producto punto y ortogonalidad",
          body: "El producto punto ayuda a medir similitud direccional. Si el resultado entre dos vectores es cero, son ortogonales. Esa idea reaparece bastante en reducción de dimensionalidad y representación de información.",
          example: "En PCA, varias direcciones relevantes del espacio se interpretan buscando componentes que aporten información sin repetir la misma dirección dominante."
        },
        {
          title: "Transformaciones matriciales: cambiar el espacio de los datos",
          body: "Las matrices no solo guardan datos: también pueden transformarlos. Rotar, escalar o deformar un espacio es una forma útil de pensar lo que ocurre cuando reexpreso variables o proyecto datos en nuevas dimensiones."
        },
        {
          title: "Para recordar",
          body: "Si domino vectores, matrices, multiplicación matricial, transpuesta, norma e idea de valores propios, ya tengo una base mucho más sólida para entender por qué los modelos de Machine Learning pueden representar, transformar y aprender desde datos numéricos."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Apuntes de repaso – Módulo 3 / Clase 1: Álgebra matricial y vectores para Machine Learning</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S1 – Lección: Álgebra matricial y vectores para Machine Learning</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "python-libraries-modules-and-numpy",
        "algorithm-efficiency-and-big-o-for-ml",
        "pythonic-optimization-and-jit-for-ml"
      ]
    },
    {
      id: "linear-systems-and-transformations-for-machine-learning",
      slug: "sistemas-de-ecuaciones-y-transformaciones-en-machine-learning",
      title: "Sistemas de ecuaciones y transformaciones en Machine Learning",
      summary: "Una guía base para entender por qué los sistemas de ecuaciones lineales y las transformaciones matriciales ayudan a comprender mejor cómo se estiman parámetros, se reorganizan datos y se construyen varias ideas centrales de programación numérica y Machine Learning.",
      category: "Machine Learning",
      type: "Guía",
      level: "basic",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Álgebra lineal", "Transformaciones", "NumPy"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte sigue siendo fundamento",
          body: "Igual que con matrices y vectores, aquí la idea no es aprender teoría aislada, sino entender cómo se representan y resuelven problemas dentro del Machine Learning. Saber de sistemas de ecuaciones y transformaciones ayuda a comprender mejor lo que luego aparece en programación numérica, regresión, optimización y reducción de dimensionalidad."
        },
        {
          title: "Qué es un sistema de ecuaciones en este contexto",
          body: "Un sistema de ecuaciones lineales organiza varias relaciones entre variables al mismo tiempo. En forma matricial suele escribirse como `Ax = b`, donde `A` reúne coeficientes, `x` representa incógnitas o parámetros y `b` contiene los valores observados o deseados.",
          comparisonTable: {
            columns: ["Parte", "Qué representa", "Cómo lo pienso en datos o ML"],
            rows: [
              ["`A`", "Matriz de coeficientes.", "Relación entre variables o features."],
              ["`x`", "Vector de incógnitas.", "Parámetros que quiero estimar."],
              ["`b`", "Vector de resultados.", "Valores objetivo o restricciones del sistema."]
            ]
          }
        },
        {
          title: "Por qué esto importa en programación y ML",
          body: "Cuando un modelo lineal busca parámetros, en el fondo está intentando resolver relaciones estructuradas entre datos y resultados. Entender esta lógica vuelve mucho más clara la transición desde la matemática a funciones reales de Python como `np.linalg.solve()` o `np.linalg.lstsq()`."
        },
        {
          title: "La conexión más directa: regresión lineal",
          body: "Una de las aplicaciones más claras aparece en regresión lineal. La matriz `X` contiene las características, el vector `β` contiene los parámetros y `y` representa el objetivo. Por eso una parte importante del problema puede leerse como una resolución matricial.",
          code: "import numpy as np\n\nA = np.array([[3, 2, -1], [2, -2, 4], [-1, 0.5, -1]])\nb = np.array([1, -2, 0])\n\nx = np.linalg.solve(A, b)\nprint(x)"
        },
        {
          title: "solve vs lstsq",
          body: "No todos los problemas tienen exactamente la misma forma, por eso NumPy ofrece más de una ruta.",
          comparisonTable: {
            columns: ["Función", "Cuándo usarla", "Qué resuelve"],
            rows: [
              ["`np.linalg.solve(A, b)`", "Cuando el sistema es cuadrado y la matriz es invertible.", "Una solución exacta."],
              ["`np.linalg.lstsq(X, y, rcond=None)`", "Cuando hay más ecuaciones que incógnitas o el sistema no cierra exacto.", "La mejor aproximación en mínimos cuadrados."]
            ]
          }
        },
        {
          title: "Mínimos cuadrados: la idea clave",
          body: "En análisis real, muchas veces los datos no permiten una solución perfecta. Ahí aparece mínimos cuadrados, que no busca acertar cada punto exactamente, sino minimizar el error total entre lo observado y lo predicho. Esa idea es central en regresión y en muchísimos flujos posteriores de ML."
        },
        {
          title: "Valores y vectores propios vuelven a aparecer",
          body: "Esta clase también profundiza en `Av = λv`, que describe una dirección que se mantiene al aplicar una transformación y cuánto se estira o comprime esa dirección. En Machine Learning esto importa mucho porque aparece de lleno en PCA y en la lectura geométrica de los datos.",
          code: "import numpy as np\n\nA = np.array([[2, 0], [0, 3]])\nvals, vecs = np.linalg.eig(A)\n\nprint(vals)\nprint(vecs)"
        },
        {
          title: "Qué me dice un valor propio alto en PCA",
          body: "Un valor propio alto indica una dirección donde hay más varianza útil. En simple, significa que esa componente explica una parte más importante de la estructura del dataset, por eso PCA la considera más informativa al reducir dimensiones."
        },
        {
          title: "Transformaciones matriciales: cambiar el espacio de los datos",
          body: "Las matrices no solo sirven para guardar o resolver sistemas: también transforman. Pueden rotar, escalar, reflejar o cambiar la base desde la que observo los datos. Esa idea es muy útil para entender preprocesamiento, proyecciones y representación geométrica.",
          comparisonTable: {
            columns: ["Transformación", "Qué hace", "Por qué me sirve"],
            rows: [
              ["Rotación", "Gira los datos sin cambiar su longitud.", "Cambiar orientación o interpretar mejor el espacio."],
              ["Escalado", "Aumenta o reduce magnitudes.", "Normalización y ponderación de variables."],
              ["Cambio de base", "Reexpresa los datos en otra base.", "PCA y proyecciones en nuevas dimensiones."],
              ["Reflexión o deformación", "Modifica la geometría del espacio.", "Entender efectos de ciertas transformaciones lineales."]
            ]
          }
        },
        {
          title: "Ejemplo visual de transformación",
          body: "Una rotación 2D es un buen ejemplo porque deja ver que una matriz puede cambiar la dirección de los puntos sin necesariamente alterar su estructura global.",
          code: "import numpy as np\n\nX = np.array([[1, 2, 3], [1, 2, 3]])\ntheta = np.pi / 4\nR = np.array([\n    [np.cos(theta), -np.sin(theta)],\n    [np.sin(theta),  np.cos(theta)]\n])\n\nY = R @ X"
        },
        {
          title: "Dónde vuelve a aparecer esto después",
          body: "Si entiendo esta parte ahora, después me costará menos leer varias técnicas numéricas y de modelado.",
          comparisonTable: {
            columns: ["Tema posterior", "Cómo se conecta"],
            rows: [
              ["Regresión lineal", "Estimación de parámetros mediante sistemas o mínimos cuadrados."],
              ["PCA", "Uso de vectores y valores propios para reducir dimensión."],
              ["Optimización", "Interpretación del problema como ajuste de parámetros bajo error."],
              ["Programación con NumPy", "Operaciones matriciales directas y eficientes."],
              ["Redes neuronales", "Transformaciones lineales repetidas sobre entradas y pesos."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Saber de sistemas de ecuaciones y transformaciones no me convierte solo en alguien más fuerte en teoría: me ayuda a leer mejor el código numérico, entender por qué existe `lstsq`, captar la lógica de PCA y ver que muchos modelos de ML no hacen magia, sino operaciones lineales bien organizadas."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Apuntes de repaso – Módulo 3 / Clase 2: Sistemas de ecuaciones y transformaciones matriciales en Machine Learning</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S2 – Lectura: Sistemas de ecuaciones y transformaciones matriciales</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "matrix-and-vector-foundations-for-machine-learning",
        "python-libraries-modules-and-numpy",
        "algorithm-efficiency-and-big-o-for-ml"
      ]
    },
    {
      id: "derivatives-and-optimization-foundations-for-machine-learning",
      slug: "derivadas-y-optimizacion-como-base-del-machine-learning",
      title: "Derivadas y optimización como base del Machine Learning",
      summary: "Una guía fundamental para entender qué mide una derivada, cómo ayuda a leer y graficar funciones, y por qué esta idea es tan importante cuando un modelo de Machine Learning necesita minimizar error y ajustar parámetros.",
      category: "Machine Learning",
      type: "Guía",
      level: "basic",
      readingTime: "13 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Derivadas", "Optimización", "Funciones"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esto sigue siendo fundamento",
          body: "Las derivadas pueden sonar matemáticas, pero en Machine Learning aparecen en una de las tareas más importantes de todas: ajustar parámetros para reducir error. Si entiendo cómo cambia una función, me resulta mucho más fácil comprender después por qué existen el descenso de gradiente, la retropropagación y varias técnicas de optimización."
        },
        {
          title: "Primero: pensar en funciones",
          body: "Antes de derivar, conviene recordar que una función representa una relación entre entrada y salida. En análisis y ML, muchas de esas funciones modelan pérdida, costo, activación o comportamiento de una variable frente a otra.",
          example: "Si `f(x) = x^2`, la función me dice qué salida obtengo para cada valor de `x`. Si esa función fuera una pérdida, entonces me interesaría saber dónde crece, dónde baja y dónde alcanza un mínimo."
        },
        {
          title: "Qué mide realmente una derivada",
          body: "La derivada mide la tasa de cambio instantánea de una función en un punto. En términos visuales, también puede pensarse como la pendiente de la recta tangente en ese punto. Esa idea es muy útil para leer gráficas y entender hacia dónde se mueve una función.",
          comparisonTable: {
            columns: ["Valor de la derivada", "Qué indica", "Lectura visual"],
            rows: [
              ["Positiva", "La función está creciendo.", "La curva sube hacia la derecha."],
              ["Negativa", "La función está bajando.", "La curva desciende hacia la derecha."],
              ["Cercana a cero", "La función se aplana o cambia de comportamiento.", "Puede haber máximo, mínimo o meseta."]
            ]
          }
        },
        {
          title: "Por qué sirve para graficar funciones",
          body: "Cuando grafico una función, la derivada me ayuda a interpretar su forma: en qué tramos sube, en cuáles baja y dónde aparecen puntos críticos. Por eso no solo sirve para resolver ejercicios; también mejora la lectura visual de curvas y resultados."
        },
        {
          title: "Puntos críticos, máximos y mínimos",
          body: "Un punto crítico suele aparecer cuando la derivada vale cero o no está definida. Es una pista de que algo importante ocurre ahí: puede tratarse de un máximo local, un mínimo local o un punto donde la función cambia su forma.",
          bestPractices: [
            "Primero calcular la derivada `f'(x)`.",
            "Luego resolver `f'(x) = 0` o revisar dónde no existe.",
            "Después interpretar si se trata de un máximo, un mínimo o un cambio de comportamiento."
          ]
        },
        {
          title: "La segunda derivada como apoyo",
          body: "La segunda derivada ayuda a interpretar la curvatura de la función. En muchos casos, si `f''(x) > 0` en un punto crítico, hay un mínimo local; si `f''(x) < 0`, hay un máximo local. No reemplaza todo el análisis, pero sirve como guía rápida."
        },
        {
          title: "Reglas de derivación que más conviene recordar",
          body: "No hace falta memorizar un libro entero, pero sí conviene tener claras las reglas que más reaparecen.",
          comparisonTable: {
            columns: ["Regla", "Idea central", "Ejemplo breve"],
            rows: [
              ["Suma", "La derivada se reparte entre términos.", "`(f + g)' = f' + g'`"],
              ["Producto", "Se derivan ambas partes con combinación cruzada.", "`(fg)' = f'g + fg'`"],
              ["Cociente", "Compara cambio del numerador y denominador.", "`(f/g)' = (f'g - fg') / g^2`"],
              ["Cadena", "Deriva una función compuesta por capas.", "`f(g(x))' = f'(g(x)) * g'(x)`"]
            ]
          }
        },
        {
          title: "La regla de la cadena: la más importante para ML",
          body: "Si tuviera que destacar una sola, sería la regla de la cadena. En Machine Learning importa muchísimo porque muchos modelos están construidos como funciones compuestas: una salida depende de una activación, que depende de una combinación lineal, que depende de pesos y entradas. La regla de la cadena permite desarmar ese proceso paso a paso."
        },
        {
          title: "Backpropagation nace de esta idea",
          body: "En redes neuronales, la retropropagación usa derivadas para medir cómo cambia el error respecto a cada peso y sesgo. Como la red está formada por varias capas conectadas, la regla de la cadena permite propagar esos gradientes desde la salida hacia atrás de forma ordenada.",
          comparisonTable: {
            columns: ["Etapa", "Qué ocurre"],
            rows: [
              ["Forward pass", "La red produce una salida y se calcula la pérdida."],
              ["Backward pass", "Se usa la regla de la cadena para propagar el error."],
              ["Gradientes", "Se obtiene cuánto aporta cada parámetro al error."],
              ["Actualización", "Se ajustan pesos y sesgos para mejorar el modelo."]
            ]
          }
        },
        {
          title: "Derivadas y descenso de gradiente",
          body: "El descenso de gradiente usa derivadas para decidir en qué dirección conviene mover los parámetros. Si la derivada dice que la función sube, el algoritmo se mueve en la dirección contraria para buscar un valor menor de la pérdida.",
          example: "Si una función de costo tiene pendiente positiva en un punto, el descenso de gradiente ajusta el parámetro hacia la izquierda; si la pendiente es negativa, se mueve hacia la derecha."
        },
        {
          title: "Ejemplo simple de mínimo",
          body: "En una función cuadrática, las derivadas permiten localizar el punto óptimo de manera clara.",
          code: "f(x) = x^2 - 4x + 5\nf'(x) = 2x - 4\n\n# Igualando a cero:\n2x - 4 = 0\nx = 2"
        },
        {
          title: "Python también ayuda a verlo",
          body: "La clase conecta esta base matemática con herramientas prácticas. `SymPy` sirve para derivación simbólica, `Matplotlib` para graficar funciones y derivadas, y `SciPy` para buscar mínimos de forma numérica.",
          comparisonTable: {
            columns: ["Herramienta", "Para qué sirve", "Cuándo me ayuda"],
            rows: [
              ["`SymPy`", "Calcular derivadas simbólicas.", "Cuando quiero confirmar una derivada o enseñar el proceso."],
              ["`Matplotlib`", "Graficar función y derivada.", "Cuando quiero ver crecimiento, mínimos o cambios de pendiente."],
              ["`SciPy`", "Optimización numérica.", "Cuando quiero encontrar mínimos de forma programática."]
            ]
          }
        },
        {
          title: "Dónde vuelve a aparecer esto en otras ramas",
          body: "Aunque aquí lo vemos como fundamento, las derivadas aparecen más adelante en varias áreas: entrenamiento de modelos, redes neuronales, ajuste de parámetros, análisis de funciones de costo e incluso optimización fuera de ML."
        },
        {
          title: "Para recordar",
          body: "Si entiendo que una derivada mide cambio y pendiente, ya tengo una base muy fuerte para graficar funciones, detectar máximos y mínimos y comprender por qué los modelos de Machine Learning necesitan gradientes para aprender."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S3 – Lectura: Cálculo diferencial en una variable</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S3 – Lección: Cálculo diferencial en una variable</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "matrix-and-vector-foundations-for-machine-learning",
        "linear-systems-and-transformations-for-machine-learning",
        "pythonic-optimization-and-jit-for-ml"
      ]
    },
    {
      id: "python-multivariable-calculus-for-machine-learning",
      slug: "calculo-multivariable-con-python-para-machine-learning",
      title: "Cálculo multivariable con Python para Machine Learning",
      summary: "Una guía para entender cómo se usan derivadas parciales, gradiente y matriz Hessiana dentro de Python para analizar funciones de costo, visualizar superficies y comprender mejor cómo optimiza un modelo de Machine Learning.",
      category: "Machine Learning",
      type: "Guía",
      level: "basic",
      readingTime: "13 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Python", "Gradiente", "Hessiana"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta clase ya entra al uso de Python en ML",
          body: "Aquí ya no estoy viendo solo matemática abstracta. Estoy viendo cómo usar Python para calcular, visualizar e interpretar funciones de varias variables, justo como pasa cuando un modelo tiene muchos parámetros y necesito entender cómo bajar el error de forma ordenada."
        },
        {
          title: "Qué cambia cuando la función tiene varias variables",
          body: "En Machine Learning casi nunca trabajo con una sola variable. Las funciones de costo suelen depender de muchos parámetros al mismo tiempo, así que el análisis también cambia: en vez de una sola derivada, aparecen derivadas parciales, gradiente y curvatura multivariable."
        },
        {
          title: "Derivadas parciales: mirar una variable a la vez",
          body: "Una derivada parcial mide cómo cambia la función cuando modifico solo una variable y dejo las demás constantes. Esto sirve para entender cuánto afecta cada parámetro individual al error del modelo.",
          code: "import sympy as sp\n\nx, y = sp.symbols('x y')\nf = x**2 + x*y + y**2\n\ndf_dx = sp.diff(f, x)\ndf_dy = sp.diff(f, y)\n\nprint(df_dx)\nprint(df_dy)"
        },
        {
          title: "Cómo leer esto en Machine Learning",
          body: "Si una función representa error o pérdida, entonces cada derivada parcial me dice qué tanto cambia ese error cuando toco solo uno de los parámetros. Esa idea es clave para ajustar modelos, porque me deja ver qué dirección conviene corregir."
        },
        {
          title: "El gradiente: el resumen de todas las derivadas parciales",
          body: "El gradiente es el vector que junta todas las derivadas parciales. Indica la dirección de mayor incremento de la función, y por eso en optimización normalmente se usa su dirección contraria para bajar la pérdida.",
          comparisonTable: {
            columns: ["Concepto", "Qué aporta", "Uso en ML"],
            rows: [
              ["Derivada parcial", "Cambio respecto a una variable.", "Impacto individual de un parámetro."],
              ["Gradiente", "Cambio conjunto en todas las variables.", "Base del descenso de gradiente."],
              ["Norma del gradiente", "Tamaño del cambio.", "Ayuda a entender si sigo lejos o cerca de estabilizarme."]
            ]
          }
        },
        {
          title: "Descenso de gradiente, explicado corto",
          body: "Si el gradiente apunta hacia donde la función sube más rápido, entonces el descenso de gradiente se mueve en el sentido opuesto para intentar minimizar la función de costo.",
          code: "theta_next = theta_current - eta * gradiente"
        },
        {
          title: "Entonces, ¿qué hace la Hessiana?",
          body: "La matriz Hessiana reúne las segundas derivadas parciales. Mientras el gradiente me dice hacia dónde sube más la función, la Hessiana me dice cómo se curva esa superficie. En simple: ayuda a saber si el terreno se parece a un valle, una cima o una silla de montar.",
          comparisonTable: {
            columns: ["Señal de la Hessiana", "Qué sugiere", "Lectura práctica"],
            rows: [
              ["Definida positiva", "Mínimo local.", "La función se curva hacia arriba."],
              ["Definida negativa", "Máximo local.", "La función se curva hacia abajo."],
              ["Valores propios mixtos", "Punto de silla.", "Sube en una dirección y baja en otra."]
            ]
          }
        },
        {
          title: "Por qué la Hessiana importa en ML",
          body: "La Hessiana sirve para entender la curvatura de la función de costo. Eso ayuda a clasificar puntos críticos y también explica por qué algunos métodos de segundo orden, como Newton, pueden converger más rápido que los métodos que usan solo gradiente. El problema es que calcularla puede ser costoso cuando el modelo tiene muchísimos parámetros."
        },
        {
          title: "Cálculo simbólico con Python",
          body: "Python permite practicar estos conceptos de forma mucho más tangible. `SymPy` sirve para derivar simbólicamente, calcular gradientes y construir la Hessiana sin hacer todo a mano.",
          code: "import sympy as sp\n\nx, y = sp.symbols('x y')\ng = x**2 + 2*x*y + 2*y**2\n\ngrad = sp.Matrix([sp.diff(g, x), sp.diff(g, y)])\nH = sp.hessian(g, (x, y))\ncrit = sp.solve([sp.diff(g, x), sp.diff(g, y)], (x, y))\n\nprint(grad)\nprint(H)\nprint(crit)"
        },
        {
          title: "Visualizar superficies también ayuda",
          body: "Cuando puedo graficar una función de dos variables, el gradiente y la curvatura dejan de sentirse tan abstractos. `Matplotlib` o `Plotly` ayudan a ver superficies, pendientes y puntos críticos de forma mucho más intuitiva."
        },
        {
          title: "Herramientas de Python que más conviene recordar",
          body: "Esta clase también sirve para ubicar qué herramienta usar según el objetivo.",
          comparisonTable: {
            columns: ["Librería", "Para qué la usaría", "Valor dentro del aprendizaje"],
            rows: [
              ["`SymPy`", "Derivación simbólica, gradiente y Hessiana.", "Entender la matemática sin hacer todo a mano."],
              ["`NumPy`", "Cálculo numérico y operaciones vectorizadas.", "Mover esto a datos reales y arreglos grandes."],
              ["`Matplotlib` / `Plotly`", "Graficar funciones y superficies.", "Visualizar mejor mínimos, pendientes y curvatura."],
              ["`SciPy`", "Optimización numérica con `minimize()`.", "Encontrar mínimos en problemas multivariables."]
            ]
          }
        },
        {
          title: "Caso típico: función de costo de regresión",
          body: "En regresión lineal con parámetros como `w` y `b`, las derivadas parciales muestran cómo cambia el error al mover cada uno. El gradiente resume ese ajuste, y la Hessiana ayuda a entender la curvatura de la función de costo para analizar mejor la estabilidad del punto encontrado."
        },
        {
          title: "Qué ventajas trae esto y qué dificultades aparecen",
          body: "Lo bueno del cálculo multivariable es que mejora mucho la comprensión del entrenamiento y la optimización. Lo complejo es que en modelos grandes el cálculo de gradientes y, sobre todo, de Hessianas puede costar mucha memoria, tiempo de cómputo y estabilidad numérica."
        },
        {
          title: "Para recordar",
          body: "Si las derivadas parciales me muestran el efecto de cada parámetro, el gradiente me marca la dirección de ajuste y la Hessiana me cuenta cómo se curva la función. Entender esas tres piezas es acercarse bastante a entender cómo optimiza un modelo de Machine Learning dentro de Python."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Apuntes de repaso – Módulo 3 / Clase 4: Gradiente y matriz Hessiana en Machine Learning</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S4 – Lectura: Cálculo diferencial multivariable</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "derivatives-and-optimization-foundations-for-machine-learning",
        "linear-systems-and-transformations-for-machine-learning",
        "python-libraries-modules-and-numpy"
      ]
    },
    {
      id: "optimization-methods-for-machine-learning",
      slug: "metodos-de-optimizacion-para-machine-learning",
      title: "Métodos de optimización para Machine Learning",
      summary: "Una guía para comparar descenso de gradiente, SGD, Adam, Newton, BFGS y Levenberg-Marquardt, entendiendo cuándo conviene cada método y cómo cambia su trayectoria al optimizar una función de costo.",
      category: "Machine Learning",
      type: "Guía",
      level: "intermediate",
      readingTime: "15 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Optimización", "Gradiente", "Adam"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte sí importa en Machine Learning",
          body: "Cuando entreno un modelo, no basta con tener una función de costo bonita en teoría. Necesito un método que realmente encuentre buenos parámetros sin gastar tiempo de más ni volver inestable el entrenamiento. Por eso los métodos de optimización son parte central del aprendizaje automático."
        },
        {
          title: "La idea base: minimizar una función de costo",
          body: "Todos estos métodos buscan lo mismo: mover los parámetros del modelo hasta reducir la pérdida. Lo que cambia entre uno y otro es cómo usan el gradiente, cuánta información adicional aprovechan, cuánto cuestan computacionalmente y qué tan estables son cuando la superficie de error se vuelve compleja."
        },
        {
          title: "Primer orden vs segundo orden",
          body: "La gran diferencia está en cuánta información matemática usan para decidir el siguiente paso.",
          comparisonTable: {
            columns: ["Familia", "Qué utiliza", "Ventajas", "Limitaciones"],
            rows: [
              ["Primer orden", "Gradiente o aproximaciones basadas en gradiente.", "Escala bien, es más barato y domina en deep learning.", "Puede converger más lento y depende mucho de la tasa de aprendizaje."],
              ["Segundo orden", "Gradiente más curvatura mediante Hessiana o aproximaciones.", "Converge más rápido y suele ser más preciso cerca del mínimo.", "Cuesta más memoria y tiempo, sobre todo con muchos parámetros."]
            ]
          }
        },
        {
          title: "Descenso de gradiente clásico (GD)",
          body: "El descenso de gradiente completo calcula el gradiente usando todos los datos antes de actualizar parámetros. Es ordenado y estable, pero en datasets grandes puede volverse lento.",
          illustrations: [
            {
              src: "img/atlas/optimization-gd-trajectory.png",
              alt: "Evolución del costo y trayectoria del descenso de gradiente sobre una función cuadrática.",
              caption: "Aquí se ve bien la lógica de GD: el costo cae de forma suave y la trayectoria baja paso a paso hacia el mínimo."
            }
          ]
        },
        {
          title: "SGD y mini-batch: velocidad a cambio de ruido",
          body: "El descenso estocástico usa una observación por vez, y mini-batch usa pequeños grupos. Ambos aceleran el entrenamiento en problemas grandes y permiten aprender de forma más escalable, pero introducen más variación en las actualizaciones.",
          illustrations: [
            {
              src: "img/atlas/optimization-gd-vs-sgd.png",
              alt: "Comparación entre descenso de gradiente y descenso estocástico mostrando evolución del costo y parámetros.",
              caption: "GD suele verse más suave; SGD llega más rápido a zonas útiles, pero con oscilaciones más marcadas."
            }
          ],
          comparisonTable: {
            columns: ["Método", "Cómo actualiza", "Cuándo conviene"],
            rows: [
              ["GD", "Usa todo el dataset por iteración.", "Problemas pequeños o cuando priorizo estabilidad."],
              ["SGD", "Usa un dato por actualización.", "Escenarios grandes, entrenamiento rápido y aprendizaje online."],
              ["Mini-batch", "Usa pequeños bloques de datos.", "El equilibrio más usado entre estabilidad y eficiencia."]
            ]
          }
        },
        {
          title: "Adam: el favorito práctico en redes neuronales",
          body: "Adam combina la intuición de Momentum con una adaptación automática del paso por parámetro. Por eso suele funcionar muy bien cuando entreno redes neuronales, especialmente si el problema tiene muchas variables y gradientes ruidosos.",
          illustrations: [
            {
              src: "img/atlas/optimization-adam-convergence.png",
              alt: "Convergencia del entrenamiento con Adam y ajuste del modelo en datos con ruido.",
              caption: "Adam destaca porque reduce la pérdida mientras mantiene un ajuste práctico incluso cuando los datos no son perfectos."
            }
          ]
        },
        {
          title: "Momentum, NAG, Adagrad y RMSprop en una sola idea",
          body: "Estas variantes intentan mejorar el descenso de gradiente clásico. Momentum acumula dirección, NAG mira un poco hacia adelante, Adagrad ajusta el paso según historial y RMSprop evita que ese ajuste se vuelva demasiado agresivo. Adam, en el fondo, nace de combinar varias de estas intuiciones."
        },
        {
          title: "Método de Newton: usar también la curvatura",
          body: "Newton no se queda solo con el gradiente: también usa la Hessiana para entender la curvatura de la función. Eso le permite dar saltos mucho más directos al mínimo, aunque calcular esa información puede ser caro.",
          illustrations: [
            {
              src: "img/atlas/optimization-newton-method.png",
              alt: "Trayectoria del método de Newton sobre una función cuadrática.",
              caption: "Newton suele necesitar menos pasos porque aprovecha la forma de la curva, no solo la pendiente local."
            }
          ]
        },
        {
          title: "BFGS y L-BFGS: aproximar la Hessiana sin pagar todo el costo",
          body: "BFGS es una estrategia cuasi-Newton: no calcula la Hessiana exacta, sino una aproximación útil para avanzar más rápido que un método de primer orden. Su variante L-BFGS reduce memoria y por eso suele ser más viable en problemas grandes.",
          illustrations: [
            {
              src: "img/atlas/optimization-bfgs-contours.png",
              alt: "Optimización con BFGS sobre curvas de nivel, convergiendo al mínimo.",
              caption: "La gran gracia de BFGS es que entiende mejor la geometría del problema sin construir toda la Hessiana exacta."
            }
          ]
        },
        {
          title: "Levenberg-Marquardt: muy útil para ajuste de curvas",
          body: "Levenberg-Marquardt mezcla ideas de Gauss-Newton y descenso de gradiente. En la práctica se usa mucho en problemas de mínimos cuadrados no lineales, como ajustes de modelos y calibraciones donde el objetivo es seguir bien una trayectoria observada.",
          illustrations: [
            {
              src: "img/atlas/optimization-levenberg-marquardt-fit.png",
              alt: "Ajuste lineal estimado mediante Levenberg-Marquardt sobre datos con ruido.",
              caption: "Este método brilla cuando la tarea es ajustar parámetros para seguir datos observados con buena precisión."
            }
          ]
        },
        {
          title: "Comparación rápida de los métodos más conocidos",
          body: "No existe un optimizador perfecto para todos los escenarios. Lo útil es reconocer el tipo de problema y saber por qué elegir uno por sobre otro.",
          comparisonTable: {
            columns: ["Método", "Familia", "Fortaleza principal", "Costo relativo"],
            rows: [
              ["GD", "Primer orden", "Estabilidad conceptual y lectura clara.", "Bajo a medio."],
              ["SGD", "Primer orden", "Escalabilidad y rapidez inicial.", "Bajo."],
              ["Adam", "Primer orden adaptativo", "Buen desempeño práctico en deep learning.", "Medio."],
              ["Newton", "Segundo orden", "Convergencia muy rápida cerca del mínimo.", "Alto."],
              ["BFGS / L-BFGS", "Cuasi-Newton", "Buen equilibrio entre curvatura y costo.", "Medio a alto."],
              ["Levenberg-Marquardt", "Segundo orden híbrido", "Excelente para ajuste de curvas y mínimos cuadrados.", "Alto."]
            ]
          }
        },
        {
          title: "Entonces, ¿cuál usaría yo?",
          body: "Si estoy en deep learning o en un problema con muchos parámetros, normalmente pensaría primero en mini-batch con Adam. Si el problema es pequeño, bien condicionado o muy enfocado en ajuste fino, métodos como Newton, BFGS o Levenberg-Marquardt pueden ser mejores. La decisión depende del tamaño del problema, el costo computacional y la forma de la función de pérdida."
        },
        {
          title: "Para recordar",
          body: "Los métodos de primer orden suelen ser más baratos y escalables; los de segundo orden suelen converger mejor, pero cuestan más. La clave no es memorizar nombres por separado, sino entender qué información usa cada método para decidir el siguiente paso y cómo eso cambia su trayectoria al aprender."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S5 – Lectura: Optimización para Machine Learning</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM3S5 – Lección: Métodos de optimización para Machine Learning</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "python-multivariable-calculus-for-machine-learning",
        "derivatives-and-optimization-foundations-for-machine-learning",
        "pythonic-optimization-and-jit-for-ml"
      ]
    },
    {
      id: "hyperparameter-search-strategies-for-machine-learning",
      slug: "busqueda-de-hiperparametros-para-machine-learning",
      title: "Búsqueda de hiperparámetros para Machine Learning",
      summary: "Una comparativa práctica entre `Grid Search`, `Random Search`, `Optimización Bayesiana` y `Algoritmos Genéticos`, explicando cuándo cada búsqueda conviene más y cómo pensarla como si estuviera criando y armando un equipo Pokémon competitivo.",
      category: "Machine Learning",
      type: "Comparativa",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Hiperparámetros", "Grid Search", "Optimización"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: buscar la mejor combinación",
          body: "Ajustar hiperparámetros se parece mucho a confeccionar un equipo Pokémon competitivo. No basta con elegir un Pokémon fuerte por separado: también importan sus stats, el tipo, la habilidad, el rol que cumple y la sinergia con el resto del team. En Machine Learning pasa lo mismo: un modelo no mejora solo por existir, mejora cuando encuentro una combinación útil de decisiones externas como profundidad, regularización, vecinos, `C`, `gamma` o tasa de aprendizaje."
        },
        {
          title: "Qué es un hiperparámetro y por qué no se aprende solo",
          body: "Los hiperparámetros son decisiones que defino antes o durante el entrenamiento, pero que no salen directamente del ajuste interno del modelo. Son como las decisiones de armado antes de entrar a una batalla Pokémon: yo decido qué stats priorizar, qué cobertura de tipos me conviene, qué habilidad me aporta más valor y qué combinación tiene mejor sinergia general."
        },
        {
          title: "La analogía Pokémon para no olvidarlo",
          body: "Si quisiera encontrar el mejor equipo para una batalla, no me fijaría solo en quién pega más fuerte. También revisaría stats base, tipos para cubrir debilidades, habilidades para activar ventajas, roles como atacante o soporte, y la sinergia entre todos los integrantes. Con los hiperparámetros pasa igual: no busco un valor aislado 'bonito', busco una combinación que funcione bien como conjunto. Luego puedo revisar todas las opciones, escoger algunas al azar, usar experiencia previa para predecir mejores combinaciones o hacer evolucionar soluciones generación tras generación."
        },
        {
          title: "Cómo se traduce la analogía al modelo",
          body: "Pensarlo así ayuda a recordar qué estoy ajustando realmente cuando hago tuning.",
          comparisonTable: {
            columns: ["En un equipo Pokémon", "En Machine Learning", "Qué representa"],
            rows: [
              ["Stats", "Magnitud de parámetros como `max_depth`, `n_neighbors` o regularización.", "Qué tan agresivo, preciso o flexible puede volverse el modelo."],
              ["Tipos", "Familia de configuración o enfoque del modelo.", "Qué tan bien cubre distintos patrones del problema y qué debilidades arrastra."],
              ["Habilidades", "Funciones especiales como `early_stopping`, `class_weight` o kernels.", "Ventajas específicas que cambian el comportamiento del entrenamiento."],
              ["Sinergia del team", "Compatibilidad entre varios hiperparámetros.", "Que una buena elección aislada no siempre funciona bien combinada con otras."],
              ["Rol de cada Pokémon", "Objetivo del modelo dentro del problema.", "No se ajusta igual un clasificador interpretable que uno enfocado en máximo rendimiento."]
            ]
          }
        },
        {
          title: "Las cuatro estrategias principales del curso",
          body: "Cada método busca buenos hiperparámetros, pero no todos exploran igual ni cuestan lo mismo.",
          comparisonTable: {
            columns: ["Método", "Cómo busca", "Fortaleza principal", "Costo típico"],
            rows: [
              ["Grid Search", "Prueba sistemáticamente todas las combinaciones definidas.", "Cobertura ordenada y fácil de explicar.", "Alto cuando el espacio crece."],
              ["Random Search", "Prueba combinaciones al azar dentro de rangos establecidos.", "Explora más rápido espacios amplios.", "Medio."],
              ["Optimización Bayesiana", "Usa resultados previos para decidir qué probar después.", "Ahorra intentos en modelos caros.", "Medio a alto, pero eficiente."],
              ["Algoritmos Genéticos", "Evoluciona poblaciones de soluciones mediante selección, cruce y mutación.", "Flexible para espacios complejos o multiobjetivo.", "Variable, a veces alto."]
            ]
          }
        },
        {
          title: "Grid Search: revisar cada combinación posible",
          body: "Grid Search es como hacer una tabla completa con todas las naturalezas, roles, objetos y spreads que quiero probar para mi equipo Pokémon, y evaluarlas una por una sin saltarme ninguna. Es muy claro, muy ordenado y muy defendible, pero se vuelve caro cuando el espacio de búsqueda crece demasiado.",
          comparisonTable: {
            columns: ["Cuándo lo usaría", "Ventaja", "Desventaja"],
            rows: [
              ["Pocos hiperparámetros y rangos acotados.", "No deja huecos dentro de la grilla definida.", "Escala mal si agrego muchas variables o muchos valores por variable."],
              ["Cuando necesito trazabilidad total.", "Es fácil comparar combinaciones entre sí.", "Puede desperdiciar mucho tiempo en zonas poco prometedoras."],
              ["Modelos rápidos de entrenar.", "Funciona muy bien con validación cruzada clásica.", "No es ideal para redes o modelos caros."]
            ]
          }
        },
        {
          title: "Random Search: cubrir más espacio con menos pruebas",
          body: "Random Search es como decir: no voy a probar todas las combinaciones posibles del equipo, pero sí voy a tomar muchas muestras variadas y medir cuáles rinden mejor. Cuando el espacio es amplio, esto suele ser más eficiente que recorrerlo completo, porque algunos hiperparámetros pesan mucho más que otros.",
          comparisonTable: {
            columns: ["Cuándo conviene", "Qué aporta", "Qué debo cuidar"],
            rows: [
              ["Cuando el espacio de búsqueda es muy grande.", "Explora más diversidad con menos intentos.", "Puede no tocar una combinación muy buena por simple azar."],
              ["Cuando no sé qué parámetros importan más.", "Permite descubrir zonas interesantes rápido.", "Conviene fijar semilla para reproducibilidad."],
              ["Cuando necesito balancear tiempo y cobertura.", "Es más práctico que Grid Search en muchos casos reales.", "El número de iteraciones (`n_iter`) afecta mucho el resultado."]
            ]
          }
        },
        {
          title: "Optimización Bayesiana: aprender de lo ya probado",
          body: "La Optimización Bayesiana se parece a un entrenador competitivo que ya vio varios combates y empieza a intuir qué combinaciones de Pokémon tienen más potencial antes de probarlas todas. En vez de lanzar intentos ciegos, construye una idea probabilística del espacio y usa esa experiencia para elegir las próximas pruebas con más inteligencia.",
          comparisonTable: {
            columns: ["Herramienta del curso", "Qué aporta", "Uso típico"],
            rows: [
              ["`scikit-optimize`", "Integra una búsqueda bayesiana simple y compatible con scikit-learn.", "Comparar rápido con Grid Search en pipelines clásicos."],
              ["`Hyperopt`", "Usa TPE y maneja bien espacios categóricos, continuos y condicionales.", "Modelos con hiperparámetros variados y espacios más flexibles."],
              ["`Optuna`", "Tiene una API muy cómoda y podado de pruebas poco prometedoras.", "Tuning moderno en modelos más caros o experimentos iterativos."]
            ]
          }
        },
        {
          title: "Cuándo elegir Bayesiana",
          body: "La usaría cuando entrenar el modelo es costoso, cuando el espacio de búsqueda ya no cabe en una grilla razonable o cuando quiero exprimir mejor cada intento. Si cada prueba equivale a jugar una batalla completa muy cara, tiene mucho sentido usar lo aprendido de las batallas anteriores para no malgastar recursos."
        },
        {
          title: "Algoritmos Genéticos: dejar que las combinaciones evolucionen",
          body: "Esta estrategia es casi la analogía Pokémon perfecta. Empiezo con varios equipos candidatos, mido su rendimiento, selecciono a los mejores, mezclo partes útiles y aplico mutaciones para generar nuevas versiones. Con el tiempo, la población debería acercarse a soluciones mejores sin necesidad de revisar todas las combinaciones posibles.",
          comparisonTable: {
            columns: ["Componente", "En la búsqueda", "Analogía Pokémon"],
            rows: [
              ["Población", "Conjunto inicial de soluciones.", "Varios equipos o sets candidatos."],
              ["Fitness", "Medida de calidad de cada solución.", "Qué tan bien rinde el equipo en batalla."],
              ["Cruce", "Combinar soluciones buenas.", "Tomar lo mejor de dos equipos y mezclarlo."],
              ["Mutación", "Introducir cambios aleatorios controlados.", "Cambiar un movimiento, objeto o spread para salir de un estancamiento."]
            ]
          }
        },
        {
          title: "Dónde brillan los algoritmos genéticos",
          body: "Son especialmente útiles cuando el problema es raro, cuando hay muchas combinaciones complejas o cuando quiero optimizar varios objetivos a la vez, como maximizar precisión y a la vez minimizar tiempo de entrenamiento. En el material del curso aparece `DEAP`, que encaja bien para este tipo de búsquedas evolutivas."
        },
        {
          title: "Qué método es más eficiente según la situación",
          body: "No existe un campeón universal; depende del tamaño del espacio, del costo del entrenamiento y del tipo de variables.",
          comparisonTable: {
            columns: ["Situación", "Método más razonable", "Por qué"],
            rows: [
              ["Pocos hiperparámetros y pocas combinaciones.", "Grid Search", "La cobertura completa sigue siendo manejable."],
              ["Espacio amplio pero entrenamiento moderado.", "Random Search", "Da buena cobertura sin explotar el costo."],
              ["Entrenamiento caro o tiempo limitado.", "Optimización Bayesiana", "Cada prueba se aprovecha mejor."],
              ["Problema muy flexible, raro o multiobjetivo.", "Algoritmos Genéticos", "La evolución permite explorar sin exigir una grilla rígida."],
              ["Necesidad de explicar fácilmente el proceso.", "Grid Search o Random Search", "Son más intuitivos para documentar."],
              ["Necesidad de máxima adaptabilidad.", "Bayesiana o Genéticos", "Aprenden o evolucionan según resultados previos."]
            ]
          }
        },
        {
          title: "Errores comunes al hacer tuning",
          body: "A veces el problema no es el método, sino cómo lo uso. Querer ajustar demasiados hiperparámetros a la vez, usar métricas poco alineadas con el problema, ignorar validación cruzada o no fijar semillas puede volver engañoso todo el proceso."
        },
        {
          title: "Cómo lo pensaría yo en la práctica",
          body: "Si el modelo es rápido y el espacio pequeño, partiría con Grid Search. Si el espacio se amplía, saltaría a Random Search. Si cada prueba ya cuesta bastante, usaría Bayesiana con `Optuna`, `Hyperopt` o `skopt`. Y si el problema mezcla varios objetivos o reglas poco cómodas, evaluaría un enfoque genético con `DEAP`."
        },
        {
          title: "Para recordar",
          body: "Grid Search revisa todo lo definido, Random Search cubre más con menos estructura, la Optimización Bayesiana aprende de lo ya probado y los Algoritmos Genéticos evolucionan soluciones prometedoras. Si lo llevo a Pokémon: una estrategia recorre toda la tabla, otra prueba candidatos variados, otra aprende de cada combate y la última va criando equipos cada vez mejores."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M4-S2 – Lectura: Grid Search y Random Search para ajuste de hiperparámetros</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M4-S3 – Lectura: Optimización Bayesiana con scikit-optimize, Hyperopt y Optuna</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M4-S4 – Lectura: Algoritmos Genéticos para búsqueda de hiperparámetros con DEAP</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "optimization-methods-for-machine-learning",
        "algorithm-efficiency-and-big-o-for-ml",
        "python-multivariable-calculus-for-machine-learning"
      ]
    },
    {
      id: "ray-tune-for-distributed-hyperparameter-optimization",
      slug: "ray-tune-para-optimizacion-distribuida",
      title: "Ray Tune para optimización distribuida",
      summary: "Una guía para entender por qué `Ray Tune` destaca cuando el ajuste de hiperparámetros ya no cabe en un solo notebook: permite paralelizar ensayos, usar schedulers como `ASHA` o `HyperBand`, descartar modelos débiles antes de tiempo y coordinar búsquedas más grandes en CPU, GPU o clúster.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Ray Tune", "Hiperparámetros", "Distribuido"],
      featured: true,
      contentSections: [
        {
          title: "La duda más común: qué hace Ray Tune que otros no hagan",
          body: "La gracia de `Ray Tune` no está en inventar una búsqueda completamente nueva, sino en coordinar búsquedas de hiperparámetros a mayor escala. Si `Grid Search`, `Random Search` u `Optuna` me ayudan a decidir qué probar, `Ray Tune` me ayuda mucho cuando además necesito lanzar muchos ensayos en paralelo, repartirlos entre CPU o GPU y cortar rápido los que ya muestran poco potencial."
        },
        {
          title: "La ventaja real en una frase",
          body: "`Ray Tune` sirve cuando el tuning deja de ser una prueba cómoda en un notebook y pasa a convertirse en una operación distribuida, repetitiva y costosa que conviene administrar con más inteligencia."
        },
        {
          title: "Qué problema resuelve en la práctica",
          body: "Cuando entrenar un modelo cuesta tiempo, memoria o GPU, no basta con elegir buenos hiperparámetros: también importa cómo organizo los ensayos. `Ray Tune` aparece justo ahí. Su fortaleza es tomar muchas pruebas, repartirlas bien, monitorearlas y detener temprano las que no valen la pena.",
          comparisonTable: {
            columns: ["Necesidad", "Cómo responde Ray Tune"],
            rows: [
              ["Muchos ensayos", "Ejecuta múltiples `trials` en paralelo."],
              ["Entrenamientos caros", "Usa descarte temprano para no gastar de más."],
              ["Clúster o varias GPUs", "Distribuye carga entre nodos o recursos disponibles."],
              ["Experimentos grandes", "Centraliza logging, métricas, estado y resultados."],
              ["Espacios de búsqueda complejos", "Permite definir configuraciones dinámicas y flexibles."]
            ]
          }
        },
        {
          title: "Por qué no se siente igual que Optuna",
          body: "`Optuna` brilla mucho en notebooks, investigación aplicada y tuning bayesiano elegante. `Ray Tune` también puede usar algoritmos inteligentes de búsqueda, pero su gran salto está en la orquestación. Dicho simple: Optuna suele sentirse muy fuerte para decidir bien qué probar; Ray Tune se vuelve especialmente poderoso cuando además necesito ejecutar y administrar muchas pruebas a escala."
        },
        {
          title: "Las piezas que hacen fuerte a Ray Tune",
          body: "Su ventaja nace de varias capas trabajando juntas.",
          comparisonTable: {
            columns: ["Componente", "Qué hace", "Por qué importa"],
            rows: [
              ["Search space", "Define parámetros continuos, discretos, categóricos o condicionales.", "Permite tuning flexible sin una grilla rígida."],
              ["Search algorithm", "Puede usar búsquedas aleatorias, bayesianas u otras estrategias.", "No me obliga a un solo estilo de exploración."],
              ["Scheduler", "Decide qué ensayos continúan, pausan o se detienen.", "Ahorra recursos eliminando opciones débiles."],
              ["Parallel trials", "Corre múltiples pruebas al mismo tiempo.", "Reduce el tiempo total del tuning."],
              ["Checkpointing", "Guarda progreso y permite retomar sesiones.", "Evita perder trabajo en procesos largos."]
            ]
          }
        },
        {
          title: "Qué aportan ASHA, HyperBand y PBT",
          body: "Aquí suele aparecer la verdadera magia. `ASHA` y `HyperBand` son schedulers pensados para asignar recursos de forma progresiva: si un ensayo parte mal, no sigo malgastando tiempo en él. `Population Based Training (PBT)` va más allá y deja que distintas configuraciones evolucionen mientras entrenan. En vez de esperar al final para decidir, Ray Tune puede ir tomando decisiones durante el proceso."
        },
        {
          title: "Cómo lo leería sin tanto tecnicismo",
          body: "Imagina que estoy probando muchos equipos Pokémon para un torneo. Una cosa es definir varias combinaciones y otra muy distinta es tener un sistema que las ponga a pelear en paralelo, descarte temprano a los equipos que pierden feo, copie ideas de los que van mejor y me deje seguir desde donde quedé si se corta la sesión. Eso último se parece mucho más a `Ray Tune`."
        },
        {
          title: "Cuándo sí conviene usarlo",
          body: "No siempre necesito `Ray Tune`, pero hay casos donde empieza a tener mucho sentido.",
          comparisonTable: {
            columns: ["Situación", "Recomendación"],
            rows: [
              ["Pocos parámetros y pruebas simples", "`GridSearchCV` o `RandomizedSearchCV` siguen bastando."],
              ["Notebook de clase o laboratorio pequeño", "`Optuna` suele sentirse más liviano y directo."],
              ["Proyecto productivo sobre varias CPU o GPU", "`Ray Tune` gana mucho valor."],
              ["NLP, Deep Learning o RL con muchos ensayos", "`Ray Tune` destaca por paralelización y scheduling."],
              ["Entrenamientos largos con riesgo de interrupción", "`Ray Tune` ayuda con checkpoints y reanudación."]
            ]
          }
        },
        {
          title: "Ventajas concretas que sí se notan",
          body: "La principal ventaja es el ahorro de tiempo total cuando el tuning es grande. La segunda es el mejor uso de recursos, porque no sigo alimentando modelos que ya muestran bajo potencial. La tercera es la escalabilidad: puedo pasar de pruebas locales a escenarios más distribuidos sin rediseñar toda la lógica del experimento."
        },
        {
          title: "Limitaciones o costo de entrada",
          body: "También hay que decirlo claro: `Ray Tune` no siempre es la opción más simple. Si el problema es pequeño, puede sentirse como una infraestructura más pesada de lo necesario. Requiere entender mejor recursos, schedulers, integración con frameworks y estructura del experimento. O sea, entrega más poder, pero también pide más orden técnico."
        },
        {
          title: "Para recordarlo fácil",
          body: "Si solo quiero probar hiperparámetros, muchas veces basta con Optuna o con búsquedas clásicas. Si quiero además repartir ensayos, cortar malos resultados temprano, usar varias máquinas o GPUs y administrar el tuning como un proceso serio de entrenamiento, ahí `Ray Tune` empieza a mostrar su ventaja real."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M4-S5 – Lectura: Librerías de tuning automatizado y casos de uso de Ray Tune, Optuna y búsquedas distribuidas</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM4S5 – Cuestionario Clase 5: características, ventajas y recomendaciones de uso para Ray Tune</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "hyperparameter-search-strategies-for-machine-learning",
        "optimization-methods-for-machine-learning",
        "pythonic-optimization-and-jit-for-machine-learning"
      ]
    },
    {
      id: "regularization-overfitting-and-linear-penalties",
      slug: "regularizacion-overfitting-y-penalizaciones-lineales",
      title: "Regularización, overfitting y penalizaciones lineales",
      summary: "Una guía para entender por qué aparecen el overfitting y el underfitting, cómo actúan las penalizaciones dentro de un modelo y cuándo conviene elegir `Ridge`, `Lasso` o `Elastic Net`.",
      category: "Machine Learning",
      type: "Comparativa",
      level: "advanced",
      readingTime: "14 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Regularización", "Overfitting", "Ridge"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: mejorar sin memorizar de más",
          body: "Un modelo puede verse muy inteligente dentro del conjunto de entrenamiento y aun así fallar cuando recibe datos nuevos. Ese es el corazón del `overfitting`: el modelo aprende demasiado bien los detalles, el ruido o las rarezas del entrenamiento, pero generaliza mal. La regularización aparece justo para frenar ese exceso de libertad."
        },
        {
          title: "El equilibrio sesgo-varianza es la idea de fondo",
          body: "El corazón de la regularización está en balancear sesgo y varianza. Cuando un modelo se vuelve muy complejo, suele tener bajo sesgo pero alta varianza: aprende demasiado del entrenamiento y se vuelve inestable frente a datos nuevos. Cuando simplifico demasiado, sube el sesgo y aparece underfitting. Regularizar no significa 'hacer el modelo peor', sino moverlo hacia una zona donde generalice mejor."
        },
        {
          title: "Qué es overfitting y qué es underfitting",
          body: "Si el modelo es demasiado flexible, puede capturar patrones reales y también ruido, y ahí se sobreajusta. Si en cambio lo dejo demasiado rígido, no logra aprender ni siquiera la señal importante, y aparece el `underfitting`. En la práctica, casi todo el juego consiste en encontrar un punto medio entre sesgo y varianza.",
          comparisonTable: {
            columns: ["Situación", "Qué suele pasar", "Señal típica"],
            rows: [
              ["Overfitting", "Aprende demasiado del entrenamiento.", "Error bajo en train y claramente peor en validación o test."],
              ["Buen equilibrio", "Captura señal útil sin memorizar ruido.", "Rendimiento parecido entre train y validación."],
              ["Underfitting", "El modelo queda demasiado simple o castigado.", "Mal desempeño incluso en entrenamiento."]
            ]
          }
        },
        {
          title: "Dónde entra la regularización",
          body: "Regularizar significa agregar un castigo al tamaño o complejidad de los coeficientes. En vez de dejar que el modelo use pesos enormes para perseguir cualquier oscilación del dataset, le pongo una presión extra para que prefiera soluciones más sobrias. No elimina la pérdida original: la complementa con una penalización."
        },
        {
          title: "La función de costo cambia de forma explícita",
          body: "En modelos lineales, la regularización se entiende muy bien viendo cómo cambia la función de costo. Ya no optimizo solo el error del ajuste, sino el error más un castigo por complejidad. Esa es la razón de fondo por la que los coeficientes se encogen y el modelo se vuelve más controlado.",
          comparisonTable: {
            columns: ["Método", "Forma simplificada de la función de costo", "Qué castiga"],
            rows: [
              ["Ridge", "`RSS + λ Σβ²`", "Coeficientes grandes en magnitud, pero sin llevarlos normalmente a cero."],
              ["Lasso", "`RSS + λ Σ|β|`", "Coeficientes grandes y favorece que algunos desaparezcan por completo."],
              ["Elastic Net", "`RSS + λ(α Σ|β| + (1-α) Σβ²)`", "Combina castigo de selección y estabilización en una sola expresión."]
            ]
          }
        },
        {
          title: "La intuición de la penalización",
          body: "Si un coeficiente crece demasiado, la regularización lo castiga. Eso obliga al modelo a pensar mejor qué variables realmente necesita y cuánto debe confiar en cada una. En términos simples: mientras más alto sea `λ` o la fuerza de regularización, más caro se vuelve usar pesos grandes.",
          comparisonTable: {
            columns: ["Fuerza del castigo", "Qué ocurre con el modelo", "Riesgo principal"],
            rows: [
              ["Muy baja", "El modelo queda casi libre.", "Puede sobreajustarse."],
              ["Intermedia", "Se moderan coeficientes y mejora la generalización.", "Suele ser la zona más útil."],
              ["Muy alta", "Los coeficientes se encogen demasiado.", "Puede aparecer underfitting."]
            ]
          }
        },
        {
          title: "Ridge (L2): encoger sin eliminar",
          body: "`Ridge` usa penalización `L2`, es decir, castiga la suma de coeficientes al cuadrado. Su efecto principal es reducirlos de tamaño, pero normalmente sin llevarlos exactamente a cero. Eso lo vuelve muy útil cuando muchas variables sí aportan algo, aunque no quiera que ninguna domine demasiado.",
          comparisonTable: {
            columns: ["Qué hace bien", "Qué debo recordar"],
            rows: [
              ["Estabiliza modelos con variables correlacionadas.", "No suele hacer selección dura de variables."],
              ["Reduce varianza y ayuda a generalizar.", "Todos los predictores suelen seguir vivos, pero más controlados."],
              ["Funciona bien cuando muchas features tienen aporte pequeño.", "Conviene escalar variables antes de aplicarlo."]
            ]
          }
        },
        {
          title: "Lasso (L1): castigar y seleccionar",
          body: "`Lasso` usa penalización `L1`, basada en la suma de valores absolutos de los coeficientes. La gran diferencia es que sí puede empujar algunos coeficientes exactamente a cero. Por eso se vuelve muy atractivo cuando quiero simplificar el modelo y quedarme con un subconjunto más reducido de variables.",
          comparisonTable: {
            columns: ["Ventaja fuerte", "Costo o cuidado"],
            rows: [
              ["Hace selección automática de variables.", "Puede volverse inestable si hay muchas variables muy correlacionadas."],
              ["Ayuda a interpretar mejor qué quedó activo.", "Si la penalización es muy agresiva, puede borrar señal útil."],
              ["Sirve cuando sospecho que no todas las features aportan.", "La solución puede cambiar más entre muestras que con Ridge."]
            ]
          }
        },
        {
          title: "Elastic Net: mezclar control y selección",
          body: "`Elastic Net` combina `L1` y `L2`. En la práctica es una solución muy útil cuando tengo bastantes variables y varias de ellas están correlacionadas. Toma la capacidad de selección de `Lasso`, pero añade la estabilidad de `Ridge`.",
          comparisonTable: {
            columns: ["Qué combina", "Cuándo luce más", "Qué ajusto"],
            rows: [
              ["Selección de variables + encogimiento estable.", "Datasets con muchas features y grupos correlacionados.", "La fuerza total de regularización y la mezcla entre `L1` y `L2`."],
              ["Menos rigidez que usar solo Lasso.", "Escenarios donde no quiero eliminar variables demasiado fácil.", "Parámetros como `alpha` y `l1_ratio`."],
              ["Más flexible para tuning.", "Problemas donde quiero balancear interpretación y robustez.", "Necesita mejor validación para elegir la mezcla adecuada."]
            ]
          }
        },
        {
          title: "Cuándo se vuelve especialmente útil Elastic Net",
          body: "Elastic Net luce mucho cuando tengo muchas variables, bastante correlación entre ellas o incluso escenarios donde el número de variables se acerca o supera al número de observaciones. Ahí Lasso puede volverse demasiado agresivo o inestable, mientras Ridge mantiene todo vivo pero sin seleccionar. Elastic Net aparece justo como punto medio útil."
        },
        {
          title: "Tabla resumen: Ridge vs Lasso vs Elastic Net",
          body: "Si tuviera que recordarlo rápido, lo resumiría así.",
          comparisonTable: {
            columns: ["Método", "Tipo de penalización", "Qué hace con coeficientes", "Cuándo conviene más"],
            rows: [
              ["Ridge", "L2", "Los encoge, pero rara vez los deja en cero.", "Cuando muchas variables aportan y quiero estabilidad."],
              ["Lasso", "L1", "Puede llevar algunos coeficientes exactamente a cero.", "Cuando también quiero selección de variables."],
              ["Elastic Net", "L1 + L2", "Encoge y puede seleccionar, pero con más equilibrio.", "Cuando hay muchas variables correlacionadas y quiero flexibilidad."]
            ]
          }
        },
        {
          title: "Cómo lo conecto con overfitting",
          body: "La regularización no 'cura mágicamente' el overfitting, pero sí reduce una de sus causas más comunes: permitir que el modelo se vuelva demasiado sensible al entrenamiento. Si el problema es sobreajuste, añadir penalización puede mejorar la generalización. Si el problema ya era underfitting, castigar todavía más puede empeorarlo."
        },
        {
          title: "Qué hiperparámetros vigilaría",
          body: "Aquí el tuning importa mucho. En `Ridge` y `Lasso`, el parámetro principal suele ser la fuerza del castigo (`alpha` o `lambda`, según librería). En `Elastic Net`, además debo decidir cuánto peso doy a `L1` frente a `L2`. Esa mezcla es parte del valor del método, pero también parte de su complejidad."
        },
        {
          title: "Cómo evaluaría el impacto real de la regularización",
          body: "La gracia no es solo decir 'apliqué Ridge' o 'apliqué Lasso', sino ver qué cambió después. Lo esperable es mirar si bajó el sobreajuste, si mejoró la generalización en test o validación cruzada, si los coeficientes se hicieron más estables y si el modelo sigue siendo suficientemente expresivo.",
          comparisonTable: {
            columns: ["Qué observar", "Qué esperaría ver"],
            rows: [
              ["Complejidad del modelo", "Coeficientes más pequeños o algunos coeficientes exactamente en cero."],
              ["Generalización", "Mejor comportamiento en validación o prueba respecto a un modelo demasiado libre."],
              ["Overfitting", "Menor brecha entre entrenamiento y validación."],
              ["Riesgo de underfitting", "Puede aparecer si `lambda` o `alpha` es demasiado alto."],
              ["Interpretabilidad", "Lasso y Elastic Net suelen facilitar más lectura de variables relevantes."]
            ]
          }
        },
        {
          title: "Cómo cambian los coeficientes según el método",
          body: "Si comparo resultados, lo típico es esto: Ridge deja coeficientes más pequeños pero casi nunca en cero; Lasso sí puede eliminar variables completas; Elastic Net suele dejar algunos coeficientes casi nulos y otros encogidos, combinando selección con estabilidad. Esa lectura es muy útil porque conecta directamente la teoría con lo que efectivamente veré en un modelo entrenado."
        },
        {
          title: "Errores comunes al usar regularización",
          body: "Uno de los errores más comunes es pensar que más regularización siempre es mejor. Otro es aplicar estos métodos sin escalar variables, lo que vuelve injusta la penalización entre features. También es fácil confundirse y creer que si Lasso deja coeficientes en cero entonces siempre será la mejor opción; no necesariamente, porque Ridge o Elastic Net pueden generalizar mejor dependiendo del problema."
        },
        {
          title: "Cómo lo pensaría yo en un flujo real",
          body: "Si mi prioridad es estabilidad y sé que varias variables sí aportan, pensaría primero en `Ridge`. Si necesito simplificar el modelo o hacer selección automática, probaría `Lasso`. Si hay muchas features correlacionadas o quiero equilibrio entre selección y robustez, me iría a `Elastic Net` y lo ajustaría con validación cruzada."
        },
        {
          title: "Para recordar",
          body: "Overfitting es aprender demasiado del entrenamiento; underfitting es no aprender suficiente. `Ridge` encoge, `Lasso` selecciona y `Elastic Net` mezcla ambas ideas. La gracia no está solo en memorizar la fórmula, sino en entender qué tipo de problema tengo y cuánta libertad conviene quitarle al modelo para que generalice mejor."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M5-S1 – Lectura: regularización, penalizaciones y prevención del overfitting en modelos lineales</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM5S1 – Cuestionario Clase 1: Ridge, Lasso, Elastic Net y señales de sobreajuste</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M5-S5 – Lectura: el concepto de regularización, sesgo-varianza e impacto de Ridge, Lasso y Elastic Net</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM5S5 – Cuestionario Clase 5: regularización, coeficientes y generalización</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "hyperparameter-search-strategies-for-machine-learning",
        "optimization-methods-for-machine-learning",
        "ray-tune-for-distributed-hyperparameter-optimization"
      ]
    },
    {
      id: "quantile-regression-for-risk-and-scenarios",
      slug: "regresion-cuantilica-para-riesgo-y-escenarios",
      title: "Regresión cuantílica para riesgo y escenarios",
      summary: "Una guía para entender por qué la regresión cuantílica no busca solo el promedio, sino distintos percentiles de la variable objetivo, y por qué resulta tan útil en contextos con riesgo, asimetría y variabilidad no constante.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "13 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Regresión", "Cuantiles", "Riesgo"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: no todo se resume en el promedio",
          body: "La regresión cuantílica extiende la lógica de la regresión tradicional, pero en vez de estimar solo el valor medio esperado de `y` dado `X`, permite modelar distintos cuantiles o percentiles de la variable objetivo. Eso significa que puedo mirar el centro de la distribución, pero también escenarios más conservadores o más extremos."
        },
        {
          title: "No confundirla con regresión lineal o múltiple",
          body: "Aunque el nombre se parece, la regresión cuantílica no es simplemente otra forma de decir regresión lineal o regresión múltiple. La regresión lineal clásica busca estimar la media condicional, y la regresión múltiple solo indica que uso varias variables explicativas. La regresión cuantílica, en cambio, cambia el objetivo mismo del ajuste: en lugar de perseguir el promedio, busca un cuantil específico como la mediana (`q = 0.5`) o un percentil alto o bajo."
        },
        {
          title: "La comparación rápida para no volver a mezclarlas",
          body: "Si lo quiero separar mentalmente de forma simple, lo dejaría así.",
          comparisonTable: {
            columns: ["Modelo", "Qué estima", "Para qué suele usarse"],
            rows: [
              ["Regresión lineal", "La media condicional de `y`.", "Ver tendencia promedio y relación lineal general."],
              ["Regresión múltiple", "La media condicional usando varias variables.", "Explicar una respuesta con varios predictores."],
              ["Regresión cuantílica", "Un cuantil específico de `y`.", "Analizar riesgo, asimetría y distintos escenarios posibles."]
            ]
          }
        },
        {
          title: "Por qué sí aporta algo distinto",
          body: "En muchos problemas la media no cuenta toda la historia. Si la distribución está sesgada, si hay colas pesadas o si me interesa un escenario conservador, trabajar solo con el promedio puede ocultar comportamientos importantes. La regresión cuantílica me deja mirar, por ejemplo, el percentil 90 de tiempos de entrega, el percentil 95 de riesgo de default o la mediana de ingresos cuando el promedio está distorsionado por outliers."
        },
        {
          title: "La función de pérdida cambia el juego",
          body: "Aquí no se minimiza el mismo error cuadrático que en regresión lineal tradicional. La regresión cuantílica usa una pérdida asimétrica que castiga de forma diferente los errores por encima y por debajo del cuantil elegido. Por eso logra adaptar el ajuste al escenario que realmente me interesa modelar."
        },
        {
          title: "Cuándo conviene usarla",
          body: "Brilla cuando quiero analizar más de un escenario y cuando la variabilidad no se comporta igual en toda la muestra.",
          comparisonTable: {
            columns: ["Situación", "Por qué la cuantílica ayuda"],
            rows: [
              ["Distribuciones asimétricas", "La media puede ser poco representativa."],
              ["Heterocedasticidad", "Permite leer mejor cómo cambia la dispersión según el nivel de `y`."],
              ["Análisis de riesgo", "Sirve para percentiles altos o bajos, no solo para el centro."],
              ["Planificación conservadora", "Ayuda a trabajar con escenarios más seguros o más agresivos."],
              ["Outliers relevantes", "La mediana o cuantiles intermedios pueden ser más robustos que la media."]
            ]
          }
        },
        {
          title: "Ejemplos donde tiene mucho sentido",
          body: "En créditos puedo estimar percentiles altos del riesgo para diseñar políticas más conservadoras. En logística puedo predecir el percentil 90 del tiempo de entrega para prometer plazos más seguros. En recursos humanos puedo revisar cuantiles salariales y no solo el ingreso medio. En retail puedo usar percentiles altos de demanda para dimensionar mejor inventario."
        },
        {
          title: "Cómo leer sus cuantiles en la práctica",
          body: "Si entreno un modelo con `q = 0.5`, estoy modelando la mediana. Si uso `q = 0.9`, me enfoco en un escenario alto o conservador. Si uso `q = 0.1`, miro una cola baja. La gracia es que puedo entrenar varios cuantiles y obtener una lectura mucho más completa de la distribución de resultados."
        },
        {
          title: "Qué no hace por sí sola",
          body: "No reemplaza automáticamente a la regresión lineal clásica. Si solo necesito una tendencia promedio simple, una regresión tradicional puede bastar perfectamente. La cuantílica vale la pena cuando la pregunta del negocio o del análisis realmente necesita mirar dispersión, percentiles o escenarios de riesgo."
        },
        {
          title: "Errores comunes al interpretarla",
          body: "Uno de los errores más comunes es creer que por llamarse 'regresión' debe significar lo mismo que la lineal. Otro es interpretar un cuantil como si fuera probabilidad directa de que ocurra un evento. También pasa que a veces se usa `q = 0.5` y se olvida que eso es mediana, no media."
        },
        {
          title: "Para recordar",
          body: "La regresión lineal y múltiple siguen siendo muy útiles, pero apuntan al promedio. La regresión cuantílica cambia el foco: permite modelar distintos percentiles de la respuesta. Si quiero entender centro, extremos o escenarios conservadores dentro de un problema, ahí la cuantílica empieza a mostrar su valor real."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M5-S2 – Lectura: técnicas de regresión y uso de regresión cuantílica en escenarios de riesgo</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM5S2 – Cuestionario Clase 2: regresión cuantílica y casos de uso</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "regularization-overfitting-and-linear-penalties",
        "hyperparameter-search-strategies-for-machine-learning",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "boosting-and-classification-metrics",
      slug: "boosting-y-metricas-de-clasificacion",
      title: "Boosting y métricas de clasificación",
      summary: "Una guía para entender cómo funciona `Boosting`, por qué reduce sesgo combinando modelos débiles de forma secuencial y cómo leer sus resultados con matriz de confusión, sensibilidad, especificidad, precisión y valor predictivo.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Boosting", "Clasificación", "Métricas"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: convertir varios modelos débiles en uno fuerte",
          body: "Boosting es una técnica de ensamble que entrena modelos de forma secuencial. Cada nuevo modelo intenta corregir los errores del anterior, de modo que el sistema completo va mejorando iteración tras iteración. La lógica no es promediar a ciegas, sino poner cada vez más atención donde el modelo viene fallando."
        },
        {
          title: "Qué problema intenta resolver",
          body: "Mientras `Bagging` suele enfocarse en reducir varianza, `Boosting` se concentra más en reducir sesgo. Por eso suele rendir muy bien en datos tabulares y en problemas donde un modelo simple por sí solo se queda corto. La mejora viene de ir construyendo una secuencia de correcciones parciales."
        },
        {
          title: "Cómo funciona en pasos simples",
          body: "Primero entreno un modelo base. Después identifico sus errores o residuos y entreno otro modelo que se concentre en esa parte mal resuelta. Luego repito la lógica varias veces y combino las salidas ponderadamente. En clasificación esto equivale a reforzar los casos difíciles; en regresión, a corregir residuos de forma aditiva."
        },
        {
          title: "Los nombres que más aparecen",
          body: "Dentro del ecosistema de Boosting, estos son los algoritmos más comunes.",
          comparisonTable: {
            columns: ["Algoritmo", "Qué destaca", "Cuándo suele lucir"],
            rows: [
              ["AdaBoost", "Repondera observaciones mal clasificadas en cada ronda.", "Ejercicios conceptuales o problemas relativamente limpios."],
              ["Gradient Boosting", "Optimiza secuencialmente una función de pérdida.", "Problemas donde quiero control fino del ajuste."],
              ["XGBoost", "Añade regularización, manejo fuerte de tabulares y mucha precisión.", "Competencias y flujos productivos con datos estructurados."],
              ["LightGBM", "Entrena rápido y escala muy bien.", "Datasets grandes y tiempos de entrenamiento apretados."],
              ["CatBoost", "Maneja muy bien variables categóricas.", "Problemas con muchas categorías y menos preprocesamiento manual."]
            ]
          }
        },
        {
          title: "Ventajas reales de Boosting",
          body: "Su gran fortaleza es la precisión. También puede capturar relaciones no lineales sin exigir demasiada ingeniería manual. Además, muchos algoritmos modernos de boosting permiten trabajar con funciones de pérdida distintas, regularización, early stopping y ajuste fino de hiperparámetros."
        },
        {
          title: "Sus riesgos también importan",
          body: "Como entrena secuencialmente y aprende corrigiendo errores, puede sobreajustarse si lo dejo crecer demasiado o si el dataset tiene mucho ruido. También suele costar más explicarlo que una regresión o un árbol simple, y el entrenamiento puede ser más caro en tiempo y recursos."
        },
        {
          title: "Por qué aquí aparecen VP, FP, FN y VN",
          body: "Cuando uso Boosting para clasificación binaria, no me basta con saber si la exactitud general salió alta. Necesito entender qué tipos de aciertos y errores está cometiendo el modelo. Ahí entra la matriz de confusión: separa verdaderos positivos, falsos positivos, falsos negativos y verdaderos negativos para interpretar mejor el rendimiento."
        },
        {
          title: "La matriz de confusión para recordarlo visualmente",
          body: "Esta card sirve como recordatorio rápido de la estructura y de las fórmulas más comunes.",
          illustrations: [
            {
              src: "img/atlas/confusion-matrix-metrics.svg",
              alt: "Matriz de confusión con VP, FP, FN y VN, más fórmulas de sensibilidad, especificidad, precisión y VPN.",
              caption: "Si recuerdo bien esta tabla, después las métricas salen casi solas."
            }
          ]
        },
        {
          title: "Qué significa cada componente",
          body: "Los `VP` son positivos reales que el modelo detectó como positivos. Los `FP` son casos que el modelo marcó como positivos, pero en realidad no lo eran. Los `FN` son positivos reales que el modelo dejó escapar. Y los `VN` son negativos reales bien clasificados como negativos."
        },
        {
          title: "Las fórmulas que más conviene memorizar",
          body: "En clase, normalmente estas son las primeras cuatro métricas que más aparecen.",
          comparisonTable: {
            columns: ["Métrica", "Fórmula", "Qué responde"],
            rows: [
              ["Sensibilidad / Recall", "VP / (VP + FN)", "¿Qué proporción de los positivos reales logré detectar?"],
              ["Especificidad", "VN / (VN + FP)", "¿Qué tan bien reconozco a los negativos reales?"],
              ["Precisión / VPP", "VP / (VP + FP)", "De todo lo que marqué como positivo, ¿cuánto era realmente positivo?"],
              ["Valor Predictivo Negativo", "VN / (VN + FN)", "De todo lo que marqué como negativo, ¿cuánto era realmente negativo?"]
            ]
          }
        },
        {
          title: "Cómo leerlas sin enredarme",
          body: "Si me preocupa detectar enfermedad, fraude o default, probablemente miraré mucho la sensibilidad. Si me cuesta mucho acusar falsamente un positivo, la precisión gana peso. Si me interesa descartar bien casos sanos o normales, la especificidad se vuelve más crítica. La métrica importante depende del costo del error."
        },
        {
          title: "Qué relación tiene esto con Boosting",
          body: "Boosting puede entregar muy buenos resultados, pero también puede esconder errores importantes si solo miro una métrica global. Un modelo puede verse potente en accuracy y aun así tener demasiados falsos negativos o demasiados falsos positivos. Por eso estas métricas no son un adorno: son parte de la evaluación real."
        },
        {
          title: "Métricas y decisiones de negocio",
          body: "En crédito, un falso negativo puede significar no detectar un cliente riesgoso. En salud, puede significar no detectar una enfermedad. En marketing, un falso positivo puede implicar contactar a personas que no eran objetivo real. La misma matriz de confusión se interpreta distinto según el costo del error."
        },
        {
          title: "Qué hiperparámetros suelen mover más el resultado",
          body: "En boosting aparecen muy seguido `learning_rate`, `n_estimators`, `max_depth`, subsampling y regularización. Si los exagero, el modelo puede memorizar demasiado; si los dejo muy conservadores, puede quedarse corto. Por eso conviene conectar siempre boosting con validación cruzada, early stopping y control de overfitting."
        },
        {
          title: "Para recordar",
          body: "Boosting mejora secuencialmente modelos débiles para construir uno más fuerte, y suele dar gran precisión en clasificación tabular. Pero no basta con mirar accuracy: conviene revisar matriz de confusión, sensibilidad, especificidad, precisión y VPN para entender realmente qué está acertando y qué está dejando pasar."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M5-S3 – Lectura: técnicas de clasificación, métodos de ensamble y boosting</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM5S3 – Cuestionario Clase 3: boosting, clasificación binaria y métricas de evaluación</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "regularization-overfitting-and-linear-penalties",
        "hyperparameter-search-strategies-for-machine-learning",
        "ray-tune-for-distributed-hyperparameter-optimization"
      ]
    },
    {
      id: "cross-validation-and-model-evaluation-metrics",
      slug: "validacion-cruzada-y-metricas-de-evaluacion",
      title: "Validación cruzada y métricas de evaluación",
      summary: "Una guía para entender cómo se evalúan realmente los modelos con `Cross-Validation`, cuándo usar `K-Fold`, `Stratified K-Fold`, `LOOCV` o `Time Series Split`, y cómo interpretar métricas como `accuracy`, `precision`, `recall`, `F1` y su relación con VP, FP, FN y VN.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "17 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Cross Validation", "Métricas", "F1"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: evaluar bien importa tanto como entrenar bien",
          body: "Un modelo no se juzga solo por cómo rinde una vez sobre una partición cualquiera. Si quiero saber si realmente generaliza, necesito validarlo de una forma más robusta. Ahí entra la validación cruzada: me permite estimar cómo se comportará el modelo en datos nuevos sin depender tanto de una sola división train-test."
        },
        {
          title: "Qué es validación cruzada",
          body: "La validación cruzada divide los datos en múltiples particiones o `folds`. En cada ronda entreno con una parte y valido con otra, repitiendo el proceso varias veces. Al final no me quedo con un único resultado aislado, sino con una mirada más estable del comportamiento del modelo."
        },
        {
          title: "Por qué sí mejora la evaluación",
          body: "Su mayor valor está en que reduce la dependencia de una sola partición. Eso ayuda a detectar sobreajuste, subajuste y sensibilidad del modelo a distintos subconjuntos del dataset. También me obliga a mirar media y dispersión, no solo un numerito bonito."
        },
        {
          title: "Los métodos principales de validación cruzada",
          body: "No existe un solo tipo de `Cross-Validation`; el mejor depende del problema y de la estructura de los datos.",
          comparisonTable: {
            columns: ["Método", "Ideal para", "Ventaja principal", "Cuidado"],
            rows: [
              ["K-Fold", "Modelos generales con datos tabulares comunes.", "Entrega una estimación más estable que una sola partición.", "Puede desbalancear clases si no cuido la distribución."],
              ["LOOCV", "Datasets muy pequeños.", "Aprovecha casi toda la muestra para entrenar en cada ronda.", "Es costoso y puede tener alta varianza."],
              ["Stratified K-Fold", "Clasificación con clases desbalanceadas.", "Mantiene la proporción de clases en cada fold.", "Sigue sin resolver por sí solo otros problemas del dataset."],
              ["Time Series Split", "Series temporales.", "Respeta el orden del tiempo y evita fuga de información.", "No sirve como si los datos fueran aleatorios."]
            ]
          }
        },
        {
          title: "K-Fold: la base más conocida",
          body: "En `K-Fold`, divido el dataset en `K` bloques similares. Entreno con `K-1` y valido con el restante, repitiendo hasta usar todos los folds como validación. Luego promediar los resultados me da una estimación más robusta del rendimiento general."
        },
        {
          title: "Stratified K-Fold: clave en clasificación",
          body: "Cuando trabajo con clases desbalanceadas, no me conviene que un fold tenga demasiados positivos y otro casi ninguno. `Stratified K-Fold` corrige eso manteniendo proporciones similares de clase en cada partición. Para clasificación real, muchas veces esta es la opción más sana por defecto."
        },
        {
          title: "LOOCV: exhaustivo, pero caro",
          body: "`Leave-One-Out Cross-Validation` usa cada observación como validación una vez y entrena con todas las demás. Es muy exhaustivo y útil en datasets pequeños, pero se vuelve costoso rápidamente y a veces entrega resultados muy variables."
        },
        {
          title: "Time Series Split: no viajar en el tiempo",
          body: "En series temporales, validar como si las filas fueran intercambiables rompe la lógica del problema. Aquí la regla clave es simple: nunca uso el futuro para entrenar el pasado. Por eso `Time Series Split` avanza con ventanas deslizantes o acumulativas y respeta la estructura temporal."
        },
        {
          title: "Qué mirar después de hacer Cross-Validation",
          body: "No basta con promediar los folds y seguir de largo. Conviene mirar al menos dos cosas: la media del desempeño y su desviación estándar. Si el promedio se ve alto pero la dispersión es grande, el modelo puede estar siendo poco estable."
        },
        {
          title: "Media y desviación estándar sí importan",
          body: "La media resume rendimiento promedio entre folds. La desviación estándar muestra cuánto varía ese rendimiento. Un modelo más estable suele tener dispersión baja. Si veo scores que cambian demasiado de un fold a otro, eso puede ser una señal de mala generalización o sensibilidad al muestreo."
        },
        {
          title: "Señales de sobreajuste detectables en validación",
          body: "Hay varias pistas típicas: rendimiento casi perfecto en entrenamiento pero moderado en validación, gran diferencia entre folds o una precisión media alta con desviación estándar muy grande. La validación cruzada no elimina el sobreajuste, pero sí ayuda mucho a detectarlo antes."
        },
        {
          title: "Accuracy no siempre alcanza",
          body: "`Accuracy` puede ser útil, pero engaña fácilmente cuando las clases están desbalanceadas. Si casi todos los casos son negativos, un modelo puede acertar mucho solo por predecir siempre negativo. Por eso en clasificación necesito revisar métricas más enfocadas en positivos, errores y equilibrio."
        },
        {
          title: "La relación directa con VP, FP, FN y VN",
          body: "Muchas de las métricas más importantes salen directamente de la matriz de confusión. Si entiendo `VP`, `FP`, `FN` y `VN`, después puedo reconstruir casi todo lo demás con bastante facilidad.",
          illustrations: [
            {
              src: "img/atlas/confusion-matrix-metrics.svg",
              alt: "Matriz de confusión con VP, FP, FN y VN, más fórmulas de métricas básicas.",
              caption: "La matriz de confusión es la base para leer casi todas las métricas importantes de clasificación."
            }
          ]
        },
        {
          title: "Tabla resumen de métricas clave",
          body: "Aquí conviene recordar no solo la fórmula, sino también qué pregunta responde cada métrica.",
          comparisonTable: {
            columns: ["Métrica", "Fórmula", "Qué responde", "Cuándo gana importancia"],
            rows: [
              ["Accuracy", "(VP + VN) / Total", "¿Qué proporción total clasifiqué bien?", "Cuando las clases están equilibradas y el costo del error es similar."],
              ["Precision", "VP / (VP + FP)", "De todo lo que marqué como positivo, ¿cuánto era realmente positivo?", "Cuando los falsos positivos son costosos."],
              ["Recall / Sensibilidad", "VP / (VP + FN)", "¿Qué parte de los positivos reales logré detectar?", "Cuando perder un positivo real es grave."],
              ["Especificidad", "VN / (VN + FP)", "¿Qué tan bien detecto los negativos reales?", "Cuando también importa descartar bien casos sanos o normales."],
              ["F1-Score", "2 · (Precision · Recall) / (Precision + Recall)", "¿Qué tan equilibrado está el modelo entre precisión y recall?", "Cuando necesito balance entre falsos positivos y falsos negativos."],
              ["VPN", "VN / (VN + FN)", "De todo lo que marqué como negativo, ¿cuánto era realmente negativo?", "Cuando me importa confiar en los negativos predichos."]
            ]
          }
        },
        {
          title: "El punto clave sobre F1",
          body: "`F1` no sale de la nada ni es una métrica separada del resto: nace directamente de `Precision` y `Recall`, y esas dos a su vez nacen de `VP`, `FP` y `FN`. O sea, aunque la fórmula final de `F1` use precisión y recall, en el fondo sigue dependiendo completamente de la matriz de confusión."
        },
        {
          title: "Cómo elegir la métrica correcta",
          body: "La métrica correcta depende del costo del error. En fraude o medicina, suele importar mucho no dejar pasar positivos reales, así que `Recall` pesa más. Si acusar falsamente a alguien es caro, entonces `Precision` gana protagonismo. Si quiero equilibrio, `F1` se vuelve muy útil. Y si las clases están equilibradas, `Accuracy` puede seguir siendo razonable."
        },
        {
          title: "Cómo conecto esto con modelos reales",
          body: "Cuando comparo algoritmos como Random Forest, XGBoost o Logistic Regression, no me conviene mirar solo el score promedio. Lo más sano es revisar qué métrica refleja mejor el problema, aplicar validación cruzada y luego comparar media, dispersión y tipo de error. Ahí recién la evaluación se vuelve seria."
        },
        {
          title: "Para recordar",
          body: "La validación cruzada me ayuda a evaluar si el modelo generaliza; la media y la desviación estándar me hablan de estabilidad; y métricas como `Precision`, `Recall`, `Especificidad`, `F1` y `VPN` se entienden mucho mejor si primero tengo clara la matriz de confusión. En clasificación, evaluar bien casi siempre significa mirar más de una métrica al mismo tiempo."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M5-S4 – Lección: técnicas de validación cruzada y análisis de métricas de evaluación</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM5S4 – Cuestionario Clase 4: Cross-Validation, métricas y matriz de confusión</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "boosting-and-classification-metrics",
        "regularization-overfitting-and-linear-penalties",
        "hyperparameter-search-strategies-for-machine-learning"
      ]
    },
    {
      id: "feature-selection-methods-for-machine-learning",
      slug: "seleccion-de-caracteristicas-para-machine-learning",
      title: "Selección de características para Machine Learning",
      summary: "Una guía para entender por qué conviene seleccionar variables antes de modelar, cómo se diferencian filtros, wrappers y métodos embebidos, y cuándo usar técnicas como `Lasso`, `RFE`, `SelectKBest` o importancia de variables.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Feature Selection", "Lasso", "RFE"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: no todas las variables ayudan",
          body: "Tener más columnas no siempre significa tener un mejor modelo. Muchas veces algunas variables aportan señal útil, pero otras solo agregan ruido, redundancia, costo computacional o interpretaciones engañosas. La selección de características aparece justo para quedarme con las variables que realmente sostienen el aprendizaje."
        },
        {
          title: "Qué es selección de características",
          body: "La selección de características es el proceso de identificar y conservar solo las variables más relevantes del dataset original. Su objetivo es mejorar eficiencia, interpretabilidad y generalización, eliminando variables irrelevantes o redundantes antes o durante el entrenamiento."
        },
        {
          title: "No confundirla con extracción de características",
          body: "Aquí no estoy creando variables nuevas, sino eligiendo mejor entre las que ya existen. La extracción de características transforma o sintetiza información, como pasa con `PCA` o autoencoders. La selección, en cambio, mantiene el universo original pero lo depura."
        },
        {
          title: "Por qué conviene hacerla",
          body: "Seleccionar mejor puede reducir overfitting, acelerar entrenamiento e inferencia, facilitar la interpretación del modelo y ayudar a controlar la maldición de la dimensionalidad. En producción, además, menos variables suele significar menos costo y menor dependencia de fuentes poco valiosas."
        },
        {
          title: "Las tres familias principales",
          body: "La clase 6 ordena muy bien este tema: casi todas las técnicas caen dentro de filtros, wrappers o métodos embebidos.",
          comparisonTable: {
            columns: ["Familia", "Cómo decide", "Ventaja principal", "Costo típico"],
            rows: [
              ["Filtro", "Usa criterios estadísticos antes de entrenar el modelo.", "Rápido y simple para depurar mucho ruido inicial.", "Bajo."],
              ["Wrapper", "Prueba subconjuntos entrenando modelos repetidamente.", "Puede capturar mejor interacciones entre variables.", "Medio a alto."],
              ["Embebido", "Selecciona durante el propio entrenamiento del modelo.", "Combina automatización, eficiencia y rendimiento.", "Medio."]
            ]
          }
        },
        {
          title: "Filtros: partir limpiando antes de modelar",
          body: "Los métodos de filtro no dependen del modelo final para seleccionar variables. Usan señales estadísticas como correlación, ANOVA, `chi²`, información mutua o herramientas como `SelectKBest`. Son muy útiles cuando tengo muchísimas columnas y quiero hacer una primera poda rápida antes de experimentar más en serio."
        },
        {
          title: "Wrappers: evaluar subconjuntos con el modelo puesto",
          body: "Los wrappers sí involucran entrenamiento repetido. La idea es probar subconjuntos de variables y medir qué combinación rinde mejor con un modelo específico. Eso los vuelve más costosos, pero también más cercanos al desempeño real que me interesa optimizar."
        },
        {
          title: "Forward y backward selection",
          body: "En `Forward Selection` parto sin variables y voy agregando la que más mejora el modelo en cada paso. En `Backward Elimination` parto con todas y voy quitando la que menos aporta. Ambas técnicas son wrappers y sirven bien cuando el conjunto de variables todavía es manejable y quiero una lógica gradual de selección."
        },
        {
          title: "RFE: una versión más estructurada del descarte",
          body: "`Recursive Feature Elimination (RFE)` entrena un modelo base, mide importancia o coeficientes y elimina de forma recursiva la variable menos relevante hasta llegar a un número deseado. La gracia es que evita revisar todas las combinaciones posibles y aun así entrega una búsqueda bastante útil del subconjunto óptimo."
        },
        {
          title: "Métodos embebidos: seleccionar mientras el modelo aprende",
          body: "Los métodos embebidos integran la selección dentro del entrenamiento. Ahí entran `Lasso`, árboles con `feature_importances_`, Random Forest, Gradient Boosting, XGBoost y otros modelos que ya generan una medida de aporte por variable."
        },
        {
          title: "Dónde se conecta esto con Lasso y Elastic Net",
          body: "Aquí sí vale la pena conectarlo con el post de regularización. `Lasso` no solo regulariza: también hace selección automática porque puede llevar coeficientes exactamente a cero. `Elastic Net` puede servir como selector más estable cuando hay variables muy correlacionadas, porque mezcla la lógica de `Lasso` con la robustez de `Ridge`."
        },
        {
          title: "Tabla rápida de técnicas útiles",
          body: "Si tuviera que resumir las que más aparecen en práctica, lo dejaría así.",
          comparisonTable: {
            columns: ["Técnica", "Familia", "Qué hace mejor", "Cuándo la usaría"],
            rows: [
              ["SelectKBest", "Filtro", "Elimina rápido variables poco asociadas al objetivo.", "EDA o datasets muy anchos con muchas columnas."],
              ["Forward / Backward Selection", "Wrapper", "Construye subconjuntos paso a paso.", "Modelos pequeños donde el tiempo no es crítico."],
              ["RFE", "Wrapper", "Elimina recursivamente variables poco importantes.", "Cuando tengo un modelo base con `.coef_` o `.feature_importances_`."],
              ["Lasso", "Embebido", "Regulariza y elimina variables directamente.", "Cuando quiero selección automática e interpretación."],
              ["Random Forest / XGBoost importance", "Embebido", "Entrega ranking de importancia en modelos no lineales.", "Cuando trabajo con árboles y quiero priorización de variables."],
              ["Elastic Net", "Embebido", "Selecciona con más estabilidad bajo correlación.", "Cuando Lasso solo se vuelve demasiado agresivo o inestable."]
            ]
          }
        },
        {
          title: "Cómo evaluaría si la selección realmente ayudó",
          body: "No basta con eliminar columnas y asumir que el modelo mejoró. Lo correcto es comparar antes y después usando métricas, validación cruzada, estabilidad, tiempo de entrenamiento y capacidad de generalización. A veces menos variables mejora el modelo; otras veces elimina señal importante y lo empeora."
        },
        {
          title: "Qué observaría en la práctica",
          body: "Yo revisaría al menos estas cuatro cosas: si mejora la métrica principal, si baja el overfitting, si el modelo se entrena más rápido y si la interpretación se vuelve más clara. El punto óptimo no siempre es usar menos variables, sino usar las correctas."
        },
        {
          title: "Errores comunes al seleccionar variables",
          body: "Uno de los errores más comunes es elegir variables solo porque 'suena lógico' sin validar su impacto real. Otro es quedarse con una técnica rápida de filtro y no comprobar si eso ayuda de verdad al modelo. También es fácil confiar demasiado en una importancia aislada sin considerar correlación, sesgo del modelo base o contexto del problema."
        },
        {
          title: "Para recordar",
          body: "La selección de características no es una moda: es una forma de quedarme con variables más útiles, reducir ruido y mejorar generalización. Los filtros podan rápido, los wrappers prueban subconjuntos con más detalle y los métodos embebidos seleccionan mientras entrenan. `Lasso` y `Elastic Net` entran aquí no solo por regularizar, sino también porque ayudan a decidir qué variables vale la pena conservar."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M5-S6 – Lectura: selección de características, filtros, wrappers y métodos embebidos</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM5S6 – Cuestionario Clase 6: feature selection, RFE, Lasso e importancia de variables</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "regularization-overfitting-and-linear-penalties",
        "cross-validation-and-model-evaluation-metrics",
        "boosting-and-classification-metrics"
      ]
    },
    {
      id: "clustering-and-dimensionality-reduction-foundations",
      slug: "clustering-y-reduccion-de-dimensionalidad",
      title: "Clustering y reducción de dimensionalidad",
      summary: "Una guía base para entender cómo explorar datos sin etiquetas con `clustering`, por qué el clustering jerárquico organiza grupos en forma de árbol y cómo técnicas como `PCA`, `T-SNE` y `UMAP` ayudan a reducir complejidad y visualizar patrones ocultos.",
      category: "Machine Learning",
      type: "Guía",
      level: "intermediate",
      readingTime: "18 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Clustering", "PCA", "No supervisado"],
      featured: true,
      contentSections: [
        {
          title: "La idea base: explorar cuando no hay etiquetas",
          body: "En muchos problemas reales no tengo una columna objetivo clara que me diga qué predecir o cómo separar los casos. Ahí entran las técnicas no supervisadas: ayudan a descubrir estructura, patrones o segmentos sin depender de etiquetas previas. En este bloque, la base es entender cómo agrupar observaciones y cómo simplificar datasets muy anchos para poder leerlos mejor."
        },
        {
          title: "Qué significa que sea no supervisado",
          body: "Cuando digo que una técnica es no supervisada, significa que el algoritmo no recibe una respuesta correcta esperada. No sabe de antemano qué grupo debería existir ni cómo se llaman los segmentos. Su trabajo es detectar similitudes, distancias y estructuras latentes dentro del conjunto de datos."
        },
        {
          title: "Para qué sirve clustering en la práctica",
          body: "Clustering sirve para encontrar agrupaciones naturales, descubrir perfiles, detectar comportamientos atípicos y preparar etapas posteriores de análisis. También puede apoyar tareas de segmentación de clientes, perfiles de pacientes, patrones industriales o agrupación de genes sin tener que etiquetar manualmente miles de observaciones."
        },
        {
          title: "Dónde entra la reducción de dimensionalidad",
          body: "La reducción de dimensionalidad complementa muy bien al clustering porque muchos datasets tienen demasiadas variables para ser leídos directamente. Reducir dimensiones ayuda a compactar la información relevante, disminuir redundancia y visualizar mejor el espacio de datos antes o después de agrupar."
        },
        {
          title: "No hacen exactamente lo mismo",
          body: "Aunque clustering y reducción de dimensionalidad suelen aparecer juntos, no son equivalentes. Uno busca grupos; el otro busca representar mejor la información con menos dimensiones.",
          comparisonTable: {
            columns: ["Técnica", "Objetivo principal", "Resultado típico"],
            rows: [
              ["Clustering jerárquico", "Descubrir grupos naturales.", "Árbol de clústeres o dendrograma."],
              ["K-Means", "Agrupar en K grupos planos.", "Asignación de cada observación a un clúster."],
              ["PCA", "Reducir variables conservando varianza.", "Componentes principales no correlacionados."],
              ["T-SNE", "Visualizar estructura local en pocas dimensiones.", "Mapa 2D/3D para exploración visual."],
              ["UMAP", "Reducir dimensión preservando relaciones locales y parte de la global.", "Representación compacta y rápida para exploración."]
            ]
          }
        },
        {
          title: "Clustering jerárquico: la idea del árbol",
          body: "El clustering jerárquico organiza las observaciones como si construyera un árbol invertido. Los elementos más parecidos se unen primero, y luego esos grupos se siguen fusionando en niveles más amplios. Eso lo vuelve muy útil cuando no solo quiero una segmentación final, sino también entender cómo se van formando los grupos."
        },
        {
          title: "Aglomerativo vs divisivo",
          body: "Hay dos grandes enfoques para construir esa jerarquía.",
          comparisonTable: {
            columns: ["Enfoque", "Cómo parte", "Cómo avanza", "Cuándo ayuda a entenderlo mejor"],
            rows: [
              ["Aglomerativo (bottom-up)", "Cada dato comienza como clúster individual.", "Fusiona progresivamente los clústeres más cercanos.", "Es el enfoque más común y el más fácil de visualizar con dendrogramas."],
              ["Divisivo (top-down)", "Todos los datos parten en un solo gran clúster.", "Se va dividiendo recursivamente en subgrupos.", "Sirve para pensar segmentaciones de arriba hacia abajo."]
            ]
          }
        },
        {
          title: "Cómo leer un dendrograma sin perderse",
          body: "El dendrograma muestra la historia de fusiones del clustering jerárquico. La altura a la que dos ramas se unen representa su distancia o disimilitud. Si veo una unión muy alta, eso sugiere grupos bastante distintos; si las ramas se juntan muy abajo, eran observaciones o clústeres muy parecidos."
        },
        {
          title: "La analogía más simple para recordarlo",
          body: "Si tuviera muchas fotos familiares mezcladas, podría empezar agrupándolas por persona, luego por evento y después por año. Cada nivel agrega una capa de organización. El clustering jerárquico hace algo parecido: construye una jerarquía de grupos desde decisiones pequeñas hasta estructuras más grandes."
        },
        {
          title: "PCA: compactar sin perder lo más importante",
          body: "`PCA` busca combinaciones lineales de variables que expliquen la mayor cantidad posible de varianza. No agrupa, pero sí ayuda a resumir el dataset con nuevas dimensiones que contienen gran parte de la información útil. Suele ser una gran puerta de entrada para visualizar y preprocesar."
        },
        {
          title: "T-SNE y UMAP: cuando quiero ver mejor la forma del espacio",
          body: "`T-SNE` y `UMAP` son técnicas no lineales muy usadas para visualización. `T-SNE` destaca preservando relaciones locales y suele usarse mucho para ver subgrupos en 2D. `UMAP` también preserva estructura local, pero además suele ser más rápido y en varios casos mantiene mejor parte de la estructura global."
        },
        {
          title: "Tabla rápida: PCA vs T-SNE vs UMAP",
          body: "Esta comparación sirve mucho para no mezclarlas.",
          comparisonTable: {
            columns: ["Método", "Tipo", "Qué prioriza", "Uso típico"],
            rows: [
              ["PCA", "Lineal", "Máxima varianza explicada.", "Preprocesamiento, compresión y visualización inicial."],
              ["T-SNE", "No lineal", "Vecindades locales.", "Visualización exploratoria de subgrupos complejos."],
              ["UMAP", "No lineal", "Relaciones locales y parte de la estructura global.", "Visualización rápida y reducción previa a clustering o inspección."]
            ]
          }
        },
        {
          title: "Flujo real de trabajo",
          body: "Una forma muy natural de usar estas técnicas en proyectos reales es: limpiar y estandarizar datos, reducir dimensionalidad si el espacio es muy grande, aplicar clustering para encontrar segmentos y luego visualizar e interpretar esos grupos con ayuda del negocio o del dominio."
        },
        {
          title: "Sectores donde esto brilla",
          body: "En salud puede servir para perfilar pacientes. En e-commerce, para segmentar compradores según navegación o compra. En bioinformática, para agrupar genes o muestras. En manufactura, para detectar patrones normales o anómalos en sensores. En finanzas, para segmentar riesgo cuando no tengo etiquetas previas."
        },
        {
          title: "Qué problemas ayuda a resolver",
          body: "Este bloque es especialmente útil cuando tengo datos sin etiquetas, demasiadas variables, dificultad para visualizar patrones o necesidad de detectar grupos ocultos sin una hipótesis rígida previa."
        },
        {
          title: "Errores comunes al empezar con clustering",
          body: "Uno de los errores más comunes es tratar clustering como si entregara 'la verdad' del dataset. Otro es olvidar estandarizar variables antes de medir distancias. También pasa mucho que se interpreta una visualización reducida en 2D como si fuera una foto exacta del espacio original, cuando en realidad es una representación útil, pero simplificada."
        },
        {
          title: "Para recordar",
          body: "Clustering ayuda a descubrir grupos cuando no tengo etiquetas. La reducción de dimensionalidad ayuda a simplificar y visualizar espacios complejos. El clustering jerárquico construye un árbol de agrupaciones; `PCA`, `T-SNE` y `UMAP` ayudan a leer mejor la forma del dataset. En conjunto, estas técnicas sirven como mapa inicial antes de entrenar modelos supervisados o incluso para encontrar hallazgos que todavía no sabía que estaban ahí."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M6-S1 – Lectura: clustering jerárquico e introducción a la reducción de dimensionalidad</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM6S1 – Cuestionario Clase 1: técnicas no supervisadas, clustering y reducción de dimensionalidad</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "feature-selection-methods-for-machine-learning",
        "cross-validation-and-model-evaluation-metrics",
        "pandas-dataframes-masking-and-grouping"
      ]
    },
    {
      id: "advanced-grouping-techniques-for-clustering",
      slug: "tecnicas-de-agrupamiento-avanzadas-para-clustering",
      title: "Técnicas de agrupamiento avanzadas para clustering",
      summary: "Una guía para entender cuándo conviene pasar de métodos clásicos a enfoques basados en densidad como `DBSCAN` y `HDBSCAN`, cómo detectan ruido y grupos irregulares, y de qué forma evaluar la calidad de un agrupamiento sin etiquetas previas.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Clustering", "DBSCAN", "HDBSCAN"],
      featured: false,
      contentSections: [
        {
          title: "Por qué aparecen técnicas más avanzadas",
          body: "Cuando los datos reales dejan de verse ordenados, balanceados o esféricos, los métodos clásicos como `K-Means` o incluso el clustering jerárquico empiezan a quedarse cortos. En imágenes, sensores, tráfico web, finanzas o series temporales, los grupos pueden tener formas irregulares, densidades distintas y bastante ruido. Ahí es donde entran técnicas más adaptativas."
        },
        {
          title: "La idea central: agrupar por densidad",
          body: "En lugar de asumir que todos los grupos tienen una forma simple, los métodos basados en densidad buscan zonas donde los puntos están muy concentrados y las separan de regiones donde la densidad cae. Esa lógica les permite descubrir clústeres más realistas y, al mismo tiempo, marcar observaciones aisladas como ruido u outliers."
        },
        {
          title: "Qué resuelven mejor que los métodos clásicos",
          body: "Estas técnicas brillan cuando no sé cuántos grupos hay, cuando hay valores atípicos, cuando los clústeres tienen formas curvas o irregulares, y cuando la densidad de las observaciones no es homogénea en todo el espacio."
        },
        {
          title: "DBSCAN: el punto de partida más conocido",
          body: "`DBSCAN` significa `Density-Based Spatial Clustering of Applications with Noise`. Su lógica es simple pero potente: si un punto tiene suficientes vecinos dentro de un radio dado, se considera parte de una región densa. Desde ahí, el algoritmo expande el grupo conectando zonas densamente enlazadas."
        },
        {
          title: "Conceptos clave de DBSCAN",
          body: "Para recordar DBSCAN conviene grabarse cuatro piezas: `eps` define el radio de vecindad; `MinPts` indica cuántos puntos mínimos se necesitan para considerar una zona como densa; un `core point` cumple esa densidad mínima; un `border point` queda cerca de una zona densa, pero no alcanza el mínimo por sí solo; y un `outlier` termina etiquetado como ruido."
        },
        {
          title: "La analogía más fácil para recordar DBSCAN",
          body: "Piensa en una plaza vista desde un dron. Si varias personas están juntas conversando, forman un grupo denso. Si alguien está caminando solo lejos del resto, el algoritmo lo verá como ruido. DBSCAN no necesita saber cuántos grupos hay: solo necesita una regla razonable para decidir cuándo hay suficiente gente junta como para decir 'acá hay un grupo'."
        },
        {
          title: "Dónde suele fallar DBSCAN",
          body: "Su principal limitación aparece cuando distintos grupos tienen densidades muy diferentes. Un `eps` que funciona bien para un grupo puede ser demasiado pequeño para otro o demasiado grande para mezclar varios. Además, si elijo mal `eps`, puedo terminar con muchos puntos marcados como ruido o con todo fusionado en un solo clúster."
        },
        {
          title: "HDBSCAN: la versión más robusta",
          body: "`HDBSCAN` es una extensión jerárquica de DBSCAN pensada para resolver justamente esas limitaciones. Su gran ventaja es que no obliga a fijar un `eps` único de antemano. En cambio, construye una jerarquía basada en densidad y selecciona los agrupamientos más estables, lo que le permite adaptarse mejor a datasets heterogéneos."
        },
        {
          title: "Qué hace especial a HDBSCAN",
          body: "`HDBSCAN` permite detectar clústeres con diferentes densidades, genera una interpretación jerárquica y, además, puede entregar una probabilidad de pertenencia para cada observación. Por eso suele sentirse como una evolución más moderna y flexible cuando el problema es ruidoso o desigual."
        },
        {
          title: "DBSCAN vs HDBSCAN vs K-Means",
          body: "La comparación rápida ayuda mucho para elegir.",
          comparisonTable: {
            columns: ["Criterio", "K-Means", "DBSCAN", "HDBSCAN"],
            rows: [
              ["Necesita definir cantidad de clústeres", "Sí", "No", "No"],
              ["Tolera ruido y outliers", "No", "Sí", "Sí"],
              ["Detecta formas arbitrarias", "No, prioriza formas esféricas", "Sí", "Sí"],
              ["Maneja densidades diferentes", "No", "Difícil", "Sí"],
              ["Entrega jerarquía de agrupamientos", "No", "No", "Sí"],
              ["Puede dar probabilidad de pertenencia", "No", "No", "Sí"]
            ]
          }
        },
        {
          title: "Cuándo usar cada algoritmo",
          body: "Si busco rapidez, grupos relativamente simples y ya tengo una noción de cuántos segmentos espero, `K-Means` sigue siendo útil. Si no conozco la cantidad de clústeres y necesito detectar ruido o formas irregulares, `DBSCAN` suele ser una buena primera opción. Si además sospecho que los grupos tienen densidades distintas o el espacio es más complejo, `HDBSCAN` normalmente ofrece mejores resultados."
        },
        {
          title: "Cómo validar clustering si no tengo etiquetas",
          body: "Como no existe una respuesta correcta predefinida, toca usar métricas internas y validación visual. Dos métricas muy útiles en este bloque son el coeficiente de silueta y el índice de Davies-Bouldin."
        },
        {
          title: "Coeficiente de silueta e índice Davies-Bouldin",
          body: "El coeficiente de silueta mide qué tan bien ubicado está cada punto dentro de su grupo frente a los demás clústeres: mientras más alto, mejor separación suele haber. El índice de Davies-Bouldin compara compacidad interna con separación entre grupos: mientras más bajo, mejor."
        },
        {
          title: "Flujo recomendado de trabajo",
          body: "En la práctica conviene limpiar datos, estandarizar escalas, reducir dimensiones cuando el espacio es muy grande y luego aplicar clustering. Para visualización, `PCA` y `UMAP` suelen ser aliados más seguros que `T-SNE` si después quiero analizar agrupamientos. Finalmente, el resultado se revisa con métricas, gráficos y criterio de negocio."
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "Los errores más típicos son elegir `eps` al azar, no estandarizar variables antes de medir distancias, usar `T-SNE` como si fuera una base exacta para clustering y asumir que los puntos etiquetados como `-1` son basura. Muchas veces esos outliers son justo los casos más valiosos: fraudes, fallas, anomalías o eventos raros."
        },
        {
          title: "Aplicaciones donde realmente destaca",
          body: "En bioinformática puede ayudar a encontrar grupos de genes coexpresados; en monitoreo industrial, a detectar comportamientos normales y anomalías de sensores; en e-commerce, a segmentar usuarios sin etiquetas; en seguridad urbana, a marcar trayectorias poco comunes; y en finanzas, a detectar transacciones sospechosas sin reglas rígidas previas."
        },
        {
          title: "Para recordar",
          body: "Si los grupos son raros, desbalanceados o ruidosos, conviene pensar en clustering basado en densidad. `DBSCAN` sirve muy bien para descubrir grupos sin definir `k` y detectar ruido. `HDBSCAN` va un paso más allá cuando las densidades cambian entre zonas. Y como no hay etiquetas verdaderas, la evaluación debe apoyarse en métricas, visualización y contexto del problema."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M6-S2 – Lectura: técnicas avanzadas de clustering, DBSCAN, HDBSCAN y evaluación de agrupamientos</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM6S2 – Cuestionario Clase 2: clustering basado en densidad, evaluación y aplicaciones</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "clustering-and-dimensionality-reduction-foundations",
        "cross-validation-and-model-evaluation-metrics",
        "boosting-and-classification-metrics"
      ]
    },
    {
      id: "impact-of-pca-on-clustering",
      slug: "impacto-del-pca-en-clustering",
      title: "Impacto del PCA en clustering",
      summary: "Una guía para entender por qué `PCA` ayuda tanto antes de agrupar datos, cómo combina variables originales para crear componentes principales, qué gana el clustering al trabajar en un espacio más compacto y qué errores conviene evitar al aplicar esta técnica.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "15 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "PCA", "Clustering", "Reducción de dimensionalidad"],
      featured: false,
      contentSections: [
        {
          title: "Qué problema intenta resolver PCA",
          body: "Cuando un dataset tiene muchas variables, aparecen redundancias, correlaciones fuertes, ruido y dificultades para visualizar patrones. `PCA` aparece como una forma de reorganizar ese espacio para conservar lo más importante en menos dimensiones, sin depender de etiquetas previas."
        },
        {
          title: "La aclaración más importante",
          body: "`PCA` no busca explicar una variable objetivo como lo hace una regresión. Su meta es distinta: encontrar nuevas direcciones del espacio que concentren la mayor varianza posible del dataset. Por eso se usa tan bien en exploración, preprocesamiento y clustering no supervisado."
        },
        {
          title: "Cómo combina las variables originales",
          body: "Cada componente principal es una combinación lineal de las variables originales. En vez de quedarme con columnas sueltas como edad, ingreso o deuda por separado, `PCA` crea nuevos ejes que mezclan esas variables de forma ordenada según cuánta variabilidad logran capturar."
        },
        {
          title: "La analogía más fácil para recordarlo",
          body: "Imagina una nube de puntos en 3D. `PCA` rota el sistema de coordenadas para alinear el primer eje con la dirección donde más se dispersan los datos, el segundo con la siguiente dirección más informativa y así sucesivamente. Luego proyecta los datos en esos nuevos ejes para quedarse con una versión más compacta del problema."
        },
        {
          title: "Qué significa cada componente principal",
          body: "El primer componente principal (`PC1`) captura la mayor cantidad de varianza posible. El segundo (`PC2`) captura la mayor varianza restante, pero sin repetir lo ya explicado por `PC1`. Eso hace que los componentes queden no correlacionados entre sí y resulten muy útiles para resumir la estructura del dataset."
        },
        {
          title: "Fundamento técnico simplificado",
          body: "`PCA` analiza la matriz de covarianza de las variables, calcula autovalores y autovectores, y usa esa información para definir nuevas direcciones del espacio. Los autovectores marcan hacia dónde apuntan los componentes, y los autovalores indican cuánta varianza explica cada uno."
        },
        {
          title: "Por qué ayuda al clustering",
          body: "Cuando agrupo datos en un espacio con muchas variables correlacionadas, el algoritmo puede confundirse con ruido, escalas redundantes o dimensiones que no aportan. `PCA` simplifica ese espacio, reduce colinealidad y deja una representación más limpia, lo que puede mejorar separación visual, velocidad y estabilidad del clustering."
        },
        {
          title: "Impacto concreto en el agrupamiento",
          body: "El efecto práctico suele sentirse en cuatro frentes: menos ruido, menor complejidad computacional, mejor visualización en 2D o 3D y mayor facilidad para detectar grupos ocultos. En muchos casos, agrupar después de `PCA` permite que algoritmos como `K-Means` o `DBSCAN` trabajen sobre una estructura más legible."
        },
        {
          title: "Dónde encaja dentro del flujo de trabajo",
          body: "Una secuencia muy común es: limpiar datos, escalar variables, aplicar `PCA`, revisar la varianza explicada, visualizar componentes y recién después agrupar. También puede servir como paso previo antes de `UMAP` o `T-SNE` si quiero explorar visualmente un espacio muy complejo."
        },
        {
          title: "PCA frente a otras herramientas",
          body: "Esta comparación ayuda a ubicar bien su rol.",
          comparisonTable: {
            columns: ["Técnica", "Qué hace", "Qué devuelve", "Cuándo conviene"],
            rows: [
              ["PCA", "Reduce dimensión preservando varianza.", "Nuevos componentes lineales.", "Preprocesamiento, compresión y apoyo al clustering."],
              ["T-SNE / UMAP", "Proyectan datos complejos para visualización.", "Mapa 2D o 3D.", "Exploración visual avanzada."],
              ["Selección de variables", "Elimina columnas menos útiles.", "Subset de variables originales.", "Cuando necesito mayor interpretabilidad."]
            ]
          }
        },
        {
          title: "Cuántos componentes conservar",
          body: "No conviene elegir el número de componentes al azar. Lo habitual es revisar la varianza acumulada explicada y conservar suficientes componentes para cubrir cerca del 90–95 % de la información. Así gano compresión sin perder patrones importantes."
        },
        {
          title: "Ejemplo mental simple",
          body: "Si tengo variables como edad, altura y peso, `PCA` puede crear un `PC1` que mezcle parte de las tres porque juntas describen una dirección dominante del dataset. Después puede crear un `PC2` con otra combinación que explique una segunda estructura importante. El clustering trabajaría sobre esos nuevos ejes en vez de hacerlo sobre todas las columnas originales."
        },
        {
          title: "Sectores donde esto aporta mucho",
          body: "En bioinformática permite comprimir miles de genes antes de segmentar pacientes. En finanzas ayuda a tratar variables muy correlacionadas en riesgo crediticio. En manufactura resume señales de sensores para detectar fallas. En e-commerce mejora la segmentación por comportamiento y en retail puede acelerar modelos con muchas variables de contexto."
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "Los errores más habituales son aplicar `PCA` sin escalar datos, interpretar los componentes como si fueran variables originales, usarlo como reemplazo automático de selección de variables, conservar demasiados o muy pocos componentes y aplicarlo sobre variables categóricas sin una codificación previa adecuada."
        },
        {
          title: "Malentendidos típicos",
          body: "No, `PCA` no selecciona 'las mejores columnas'; crea nuevas variables. No, no siempre mejora cualquier modelo; depende del problema. No, el primer componente no es 'la variable más importante'; es la dirección de mayor varianza. Y no, no sirve de forma directa para cualquier tipo de dato."
        },
        {
          title: "Buenas prácticas resumidas",
          body: "Estandarizar antes de aplicar `PCA`, revisar la varianza explicada, interpretar la matriz de cargas, comparar resultados con y sin reducción y validar si realmente mejora el clustering o el modelo posterior. `PCA` es útil, pero rinde mejor cuando se usa con criterio y no por costumbre."
        },
        {
          title: "Para recordar",
          body: "`PCA` combina variables originales para construir componentes más compactos y no correlacionados. No explica una variable objetivo, sino la estructura del dataset. Su gran valor en clustering está en reducir ruido, colinealidad y complejidad para que los grupos se vean y se detecten mejor."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M6-S3 – Lectura: técnicas avanzadas de reducción de dimensionalidad y PCA</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM6S3 – Cuestionario Clase 3: PCA, varianza explicada y aplicaciones en clustering</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "clustering-and-dimensionality-reduction-foundations",
        "advanced-grouping-techniques-for-clustering",
        "matrices-libraries-and-numpy-for-eda"
      ]
    },
    {
      id: "tsne-and-umap-for-complex-structure-visualization",
      slug: "tsne-y-umap-para-visualizar-estructuras-complejas",
      title: "T-SNE y UMAP para visualizar estructuras complejas",
      summary: "Una guía para entender cuándo `PCA` ya no basta, cómo `T-SNE` y `UMAP` reducen dimensionalidad de forma no lineal, qué preserva cada técnica y por qué son tan útiles para explorar embeddings, patrones ocultos y agrupamientos difíciles de ver.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "T-SNE", "UMAP", "Visualización"],
      featured: false,
      contentSections: [
        {
          title: "Cuando PCA se empieza a quedar corto",
          body: "`PCA` funciona muy bien cuando la estructura del dataset puede resumirse de forma lineal. Pero en problemas reales muchas veces los datos siguen formas curvas, ramificadas, espirales o relaciones no euclidianas que una proyección lineal no captura del todo bien. Ahí es donde `T-SNE` y `UMAP` ganan mucho valor."
        },
        {
          title: "La idea general de estas técnicas",
          body: "`T-SNE` y `UMAP` son métodos no lineales de reducción de dimensionalidad pensados sobre todo para visualizar datos complejos en 2D o 3D. Su trabajo no es crear variables fáciles de interpretar como en PCA, sino construir una representación visual donde las relaciones relevantes del espacio original se puedan apreciar mejor."
        },
        {
          title: "Qué tipo de problemas ayudan a resolver",
          body: "Sirven mucho cuando quiero explorar embeddings de texto, imágenes o redes neuronales, visualizar grupos ocultos, detectar outliers, revisar espacios latentes o comunicar hallazgos complejos a personas que no van a leer una matriz de cientos de variables."
        },
        {
          title: "T-SNE: cercanía local por sobre todo",
          body: "`T-SNE` busca que los puntos que están cerca en alta dimensión se mantengan cerca en la proyección final. Su fortaleza principal está en preservar vecindades locales, por eso suele mostrar clústeres muy marcados y visualmente atractivos. El costo es que puede distorsionar bastante la estructura global."
        },
        {
          title: "UMAP: equilibrio entre detalle y contexto",
          body: "`UMAP` también es no lineal, pero intenta conservar mejor tanto relaciones locales como parte de la estructura global. Suele ser más rápido que `T-SNE`, escala mejor con muchos datos y en varios casos resulta más práctico cuando luego quiero usar esa proyección como apoyo a otras etapas exploratorias."
        },
        {
          title: "La analogía del metro",
          body: "Si imaginamos un mapa de metro, `PCA` intentaría respetar las distancias lineales del sistema. `T-SNE` se enfoca en mostrar qué estaciones están cerca entre sí, aunque el mapa total quede algo deformado. `UMAP`, en cambio, intenta que sigan viéndose las cercanías locales sin perder del todo la forma general de la red."
        },
        {
          title: "Qué preserva cada una",
          body: "Esa diferencia es clave para no confundirlas.",
          comparisonTable: {
            columns: ["Técnica", "Qué prioriza", "Fortaleza principal", "Limitación principal"],
            rows: [
              ["PCA", "Varianza global lineal.", "Preprocesamiento e interpretación inicial.", "No capta bien estructuras no lineales."],
              ["T-SNE", "Relaciones locales muy cercanas.", "Separa clústeres visualmente de forma excelente.", "No preserva bien la estructura global y es más lenta."],
              ["UMAP", "Relaciones locales y parte de la global.", "Rápida, escalable y útil para exploración visual robusta.", "Su interpretación geométrica sigue siendo limitada."]
            ]
          }
        },
        {
          title: "Cuándo usar cada una",
          body: "Si necesito preprocesamiento o una base más interpretable, `PCA` sigue siendo una excelente opción. Si quiero ver clústeres locales con mucha claridad, `T-SNE` suele lucirse. Si tengo muchos datos, quiero velocidad y además una representación más balanceada entre lo local y lo global, `UMAP` normalmente tiene ventaja."
        },
        {
          title: "Parámetros que sí importan",
          body: "En `T-SNE`, `perplexity`, `learning_rate` y `n_iter` afectan mucho la forma final del mapa. En `UMAP`, `n_neighbors`, `min_dist` y la métrica de distancia pueden cambiar bastante el resultado. Estas técnicas no conviene correrlas solo con valores por defecto y confiar ciegamente en lo que salga."
        },
        {
          title: "Relación con clustering",
          body: "Ambas pueden ayudar a ver grupos antes de agrupar formalmente. `UMAP` suele ser más razonable como apoyo previo al clustering exploratorio, mientras que `T-SNE` debe usarse con más cuidado porque puede separar visualmente clústeres que no están tan claramente separados en el espacio original."
        },
        {
          title: "El matiz más importante con T-SNE",
          body: "`T-SNE` no debería tratarse como base automática para clustering formal o como input directo para modelos supervisados. Su fuerte es la visualización. Si lo uso como si fuera una representación geométrica exacta del dataset, puedo terminar viendo separaciones artificiales que no existen de verdad."
        },
        {
          title: "Ejemplos donde brillan",
          body: "En bioinformática ayudan a ver subgrupos de pacientes a partir de miles de genes. En visión por computadora permiten inspeccionar embeddings extraídos de CNNs. En NLP ayudan a comparar relaciones semánticas entre palabras o documentos. En e-commerce apoyan la segmentación de usuarios, y en ciberseguridad pueden hacer visibles eventos anómalos dentro de grandes volúmenes de logs."
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "Los errores más típicos son no estandarizar antes de proyectar, interpretar literalmente la posición de los grupos, usar `T-SNE` más allá de visualización, dejar hiperparámetros arbitrarios sin probar alternativas y olvidar comparar contra una base lineal como `PCA`."
        },
        {
          title: "Malentendidos frecuentes",
          body: "No, `UMAP` no es solo una versión rápida de `T-SNE`; también cambia qué tipo de estructura preserva. No, los clústeres que se ven separados en una figura no siempre son grupos reales del problema. Y no, estas proyecciones no reemplazan por sí solas una validación seria del análisis."
        },
        {
          title: "Buenas prácticas resumidas",
          body: "Estandarizar antes de proyectar, fijar `random_state` para reproducibilidad, usar `T-SNE` principalmente como visualización, ajustar parámetros según el dataset y comparar resultados con `PCA` para tener un punto de referencia más estable e interpretable."
        },
        {
          title: "Para recordar",
          body: "Mientras `PCA` simplifica de forma lineal, `T-SNE` y `UMAP` ayudan a revelar estructuras que no se ven fácilmente en espacios complejos. `T-SNE` destaca en separación visual local; `UMAP` ofrece un equilibrio más útil entre detalle local, estructura global y velocidad. Las dos son herramientas muy potentes, pero deben leerse con criterio y no como una foto exacta del mundo real."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M6-S4 – Lectura: técnicas avanzadas de reducción de dimensionalidad, T-SNE y UMAP</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM6S4 – Cuestionario Clase 4: reducción no lineal, visualización y comparación entre T-SNE y UMAP</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "clustering-and-dimensionality-reduction-foundations",
        "impact-of-pca-on-clustering",
        "advanced-grouping-techniques-for-clustering"
      ]
    },
    {
      id: "anomaly-detection-find-the-rare-and-learn-from-it",
      slug: "deteccion-de-anomalias-encontrar-lo-raro-y-aprender-de-ello",
      title: "Detección de anomalías: encontrar lo raro y aprender de ello",
      summary: "Una guía para entender cómo detectar casos atípicos con `Isolation Forest` y `One-Class SVM`, por qué las anomalías no siempre son errores y cómo esos casos raros pueden revelar fraudes, fallas, sesgos o patrones nuevos que vale la pena estudiar.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "17 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Anomalías", "Isolation Forest", "One-Class SVM"],
      featured: false,
      contentSections: [
        {
          title: "Por qué esta técnica importa tanto",
          body: "En muchos proyectos, lo más valioso no está en lo común, sino en lo raro. Una anomalía puede representar fraude, un fallo incipiente, un comportamiento clínico inusual, un error de datos o incluso una oportunidad de descubrimiento. Por eso detectar outliers no solo ayuda a limpiar información: también ayuda a aprender qué casos se salen del patrón y por qué.",
          highlights: [
            {
              icon: "fa-solid fa-triangle-exclamation",
              title: "Lo raro puede ser crítico",
              text: "Una anomalía puede advertir un fraude, una falla de sensor o una condición clínica poco común antes de que el daño sea mayor."
            },
            {
              icon: "fa-solid fa-magnifying-glass-chart",
              title: "No todo outlier es basura",
              text: "Algunos casos anómalos son errores, pero otros son señales nuevas que conviene estudiar y no descartar automáticamente."
            }
          ]
        },
        {
          title: "Qué se considera una anomalía",
          body: "Una anomalía es una observación que se desvía de forma importante del comportamiento general del dataset. Puede ser un evento raro pero válido, un error de registro o una señal temprana de un problema más grande. La clave no es solo detectarla, sino interpretarla con contexto."
        },
        {
          title: "Tres tipos de anomalías que conviene recordar",
          body: "No todas las anomalías se ven igual.",
          comparisonTable: {
            columns: ["Tipo", "Qué significa", "Ejemplo simple"],
            rows: [
              ["Puntual", "Un solo dato muy distinto al resto.", "Una transacción extremadamente alta frente al patrón normal."],
              ["Contextual", "Solo se vuelve extraña bajo cierto contexto.", "Una temperatura alta durante la madrugada, pero no al mediodía."],
              ["Colectiva", "Un grupo de casos que juntos se ve raro.", "Una secuencia inusual de accesos en una red corporativa."]
            ]
          }
        },
        {
          title: "La lógica detrás del problema",
          body: "A diferencia de la clasificación tradicional, en anomalías muchas veces no tengo una etiqueta clara de qué estoy buscando. Lo anómalo puede ser muy poco frecuente, cambiante y difícil de capturar con reglas fijas. Por eso estos métodos suelen modelar primero lo normal y luego detectar desviaciones."
        },
        {
          title: "Isolation Forest: aislar lo raro rápido",
          body: "`Isolation Forest` detecta anomalías usando árboles aleatorios. La idea es que un punto raro suele aislarse con pocas divisiones, mientras que un punto normal necesita más cortes para quedar separado del resto. Esa lógica lo vuelve eficiente, escalable y muy útil cuando tengo bastantes datos."
        },
        {
          title: "One-Class SVM: dibujar la frontera de lo normal",
          body: "`One-Class SVM` aprende una frontera que encierra la región donde vive el comportamiento normal. Todo lo que queda fuera se trata como anómalo. Es especialmente útil cuando tengo ejemplos de datos normales, pero muy pocos o ningún ejemplo confiable de casos extraños."
        },
        {
          title: "Comparación rápida entre ambos enfoques",
          body: "Los dos sirven para detectar rarezas, pero no brillan igual en todos los escenarios.",
          comparisonTable: {
            columns: ["Criterio", "Isolation Forest", "One-Class SVM"],
            rows: [
              ["Base del método", "Árboles de aislamiento aleatorios.", "Frontera de soporte alrededor de lo normal."],
              ["Escalabilidad", "Alta, funciona bien con muchos datos.", "Más limitada en datasets grandes."],
              ["Necesita kernel", "No.", "Sí, y requiere tuning."],
              ["Interpretabilidad", "Media: se entiende por aislamiento.", "Más compleja: depende del espacio transformado."],
              ["Cuándo suele convenir", "Detección rápida en grandes volúmenes.", "Cuando el espacio normal es complejo y quiero modelarlo mejor."]
            ]
          }
        },
        {
          title: "La analogía más simple para recordar ambos",
          body: "`Isolation Forest` es como cortar un bosque al azar: si un árbol está solo, cae con pocos hachazos. `One-Class SVM` es como dibujar una burbuja alrededor de todo lo que considero normal: lo que cae fuera, llama la atención."
        },
        {
          title: "No solo detecto fallos: también aprendo de ellos",
          body: "Este es el punto más interesante. Una anomalía no debería verse solo como algo a eliminar. Puede enseñarme qué comportamientos no estaba midiendo bien, qué sesgo existe en el sistema, qué cliente se está comportando distinto, qué sensor está fallando o qué proceso cambió sin que nadie lo notara."
        },
        {
          title: "Qué preguntas conviene hacer cuando aparece una anomalía",
          body: "Detectar el caso es solo el primer paso.",
          bestPractices: [
            "Preguntar si el caso raro es un error de dato o un evento legítimo.",
            "Revisar si la anomalía anticipa un riesgo real, como fraude, fuga, falla o deterioro.",
            "Mirar qué variables explican que ese punto se vea distinto al patrón general.",
            "Comparar si el mismo caso también luce extraño con otras técnicas o reglas de negocio.",
            "Conversar con expertos del dominio antes de eliminar o corregir automáticamente."
          ]
        },
        {
          title: "Dónde conecta con otras áreas",
          body: "La detección de anomalías conversa muy bien con preprocesamiento, clustering, reducción de dimensionalidad, visualización y explicabilidad. Muchas veces el punto raro aparece lejos de cualquier grupo, otras veces resalta mejor después de `PCA` o `UMAP`, y casi siempre pide una segunda lectura con criterio de negocio."
        },
        {
          title: "Métricas para evaluar sin confiar a ciegas",
          body: "Cuando sí tengo etiquetas de referencia para probar el método, conviene medir cosas como `ROC-AUC` y `F1-score`. `ROC-AUC` me ayuda a ver capacidad general de separación; `F1` balancea precisión y recall cuando las anomalías son escasas. Aun así, ninguna métrica reemplaza la interpretación contextual.",
          comparisonTable: {
            columns: ["Métrica", "Qué resume", "Cuándo ayuda más"],
            rows: [
              ["ROC-AUC", "Qué tan bien separa normales y anómalos en distintos umbrales.", "Cuando quiero comparar capacidad discriminante general."],
              ["F1-score", "Equilibrio entre precisión y recall.", "Cuando me importa no llenarme de falsas alarmas ni dejar pasar casos raros."],
              ["Matriz de confusión", "Cuántos TP, FP, FN y TN obtengo.", "Cuando necesito entender el tipo exacto de error del detector."]
            ]
          },
          illustrations: [
            {
              src: "img/atlas/confusion-matrix-metrics.svg",
              alt: "Ilustración de matriz de confusión y métricas asociadas.",
              caption: "Si tengo etiquetas para validar, esta base ayuda a entender qué tan bien detecto anomalías sin disparar falsas alarmas de más."
            }
          ]
        },
        {
          title: "Sectores donde esto realmente genera valor",
          body: "En finanzas ayuda a detectar fraude sin reglas rígidas. En salud puede revelar combinaciones clínicas inusuales. En manufactura sirve para mantenimiento predictivo. En data engineering mejora la calidad de los pipelines. Y en productos digitales permite reconocer comportamientos raros de usuarios antes de que se vuelvan un problema."
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "Los errores más típicos son asumir que toda anomalía debe eliminarse, usar proporciones de contaminación arbitrarias, entrenar con demasiados casos anómalos mezclados en el supuesto conjunto normal, interpretar las salidas del modelo como verdad absoluta y olvidar escalar variables antes de aplicar `One-Class SVM`."
        },
        {
          title: "Malentendidos frecuentes",
          body: "No, un outlier no siempre es un error. No, `Isolation Forest` no necesita etiquetas. No, `One-Class SVM` no siempre supera a `Isolation Forest`; depende mucho del dataset. Y no, la detección automática no debería reemplazar por completo el criterio humano ni las reglas de negocio."
        },
        {
          title: "Flujo recomendado de análisis",
          body: "Una secuencia bastante sana es: preparar y escalar datos, entrenar el detector, revisar scores de anomalía, contrastar resultados con visualizaciones y luego inspeccionar manualmente algunos casos antes de tomar decisiones automáticas fuertes. Eso permite pasar de 'marqué lo raro' a 'entendí por qué era raro'."
        },
        {
          title: "Para recordar",
          body: "La detección de anomalías sirve para encontrar lo que no encaja con el patrón normal, pero su valor real está en interpretar esos casos. A veces el dato raro es un error; otras veces es la pista más importante de todo el análisis. `Isolation Forest` destaca por velocidad y escalabilidad, `One-Class SVM` por modelar fronteras complejas de normalidad, y ambos funcionan mejor cuando se acompañan con contexto, visualización y criterio de negocio."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>M6-S5 – Lectura: técnicas de detección de anomalías, Isolation Forest y One-Class SVM</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2025). <em>MLM6S5 – Cuestionario Clase 5: detección de anomalías, métricas y aplicaciones</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "advanced-grouping-techniques-for-clustering",
        "tsne-and-umap-for-complex-structure-visualization",
        "cross-validation-and-model-evaluation-metrics"
      ]
    },
    {
      id: "deep-neural-network-fundamentals-and-learning-flow",
      slug: "fundamentos-de-redes-neuronales-profundas-y-como-aprenden",
      title: "Fundamentos de redes neuronales profundas y cómo aprenden",
      summary: "Una guía base para entender cómo se compone una red neuronal profunda, qué papel cumplen sus capas, activaciones, pérdidas y optimizadores, y cómo aprende paso a paso a partir de un dataset hasta mejorar sus predicciones.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Redes neuronales", "Deep Learning", "DNN"],
      featured: true,
      contentSections: [
        {
          title: "Por qué las redes neuronales se volvieron tan importantes",
          body: "Las redes neuronales profundas despegaron de verdad cuando coincidieron tres cosas: más datos, más poder computacional y mejores algoritmos de entrenamiento. Su gran ventaja es que pueden aprender representaciones complejas directamente desde los datos, sin depender tanto de una ingeniería manual de variables como ocurre en varios modelos clásicos.",
          highlights: [
            {
              icon: "fa-solid fa-microchip",
              title: "Aprenden representaciones",
              text: "No solo ajustan una fórmula: transforman progresivamente la información para descubrir patrones útiles por sí mismas."
            },
            {
              icon: "fa-solid fa-layer-group",
              title: "Funcionan en capas",
              text: "Cada nivel procesa una versión más refinada del dato hasta llegar a una decisión final o una predicción."
            }
          ]
        },
        {
          title: "Qué es una red neuronal en términos simples",
          body: "Una red neuronal artificial es una estructura computacional formada por neuronas organizadas en capas. Cada neurona recibe entradas, las pondera con pesos, suma un sesgo, aplica una transformación y entrega una salida. Esa salida luego sirve como entrada para otras neuronas en la siguiente capa."
        },
        {
          title: "Cómo se compone una red neuronal",
          body: "La estructura base conviene fijarla bien desde el principio.",
          comparisonTable: {
            columns: ["Componente", "Qué hace", "Idea rápida para recordarlo"],
            rows: [
              ["Capa de entrada", "Recibe los datos originales.", "Es la puerta de entrada del vector o matriz de features."],
              ["Capas ocultas", "Transforman y refinan la información.", "Aquí la red empieza a aprender patrones."],
              ["Capa de salida", "Entrega la predicción final.", "Puede devolver una clase, una probabilidad o un valor continuo."],
              ["Pesos", "Indican cuánto importa cada conexión.", "Son el conocimiento ajustable del modelo."],
              ["Sesgos", "Desplazan la activación.", "Le dan flexibilidad adicional a la neurona."],
              ["Función de activación", "Introduce no linealidad.", "Permite aprender relaciones más complejas que una suma lineal."]
            ]
          }
        },
        {
          title: "La neurona artificial como fórmula",
          body: "Matemáticamente, una neurona suele resumirse como una combinación lineal seguida de una activación: `z = W·x + b` y luego `a = f(z)`. Esa secuencia se repite una y otra vez a lo largo de la red. Por eso lo que aprendiste antes de vectores, matrices, derivadas y gradientes sí importa aquí de verdad."
        },
        {
          title: "Qué significa que una red sea profunda",
          body: "Una red se considera profunda cuando tiene dos o más capas ocultas. La gracia no está solo en tener más capas, sino en que cada una puede aprender un nivel distinto de abstracción. En una imagen, por ejemplo, una capa puede detectar bordes, otra formas simples y otra patrones más complejos como ojos, letras o expresiones."
        },
        {
          title: "La analogía más amigable: una cocina automatizada",
          body: "Si lo pienso como cocina, los datos son ingredientes crudos. Cada estación hace una transformación: cortar, mezclar, hornear o emplatar. Al final no tengo los ingredientes originales, sino una salida lista: pizza, diagnóstico, clasificación o recomendación. Esa lógica ayuda mucho a recordar que cada capa transforma, no solo reenvía datos."
        },
        {
          title: "DNN vs modelos clásicos",
          body: "Las redes neuronales no reemplazan mágicamente a todos los modelos, pero sí tienen diferencias claras frente a regresión, árboles o SVM.",
          comparisonTable: {
            columns: ["Criterio", "Redes neuronales profundas", "Modelos clásicos"],
            rows: [
              ["Ingeniería manual de variables", "Menos dependencia, aprenden representaciones.", "Más dependencia de features bien diseñadas."],
              ["No linealidades complejas", "Muy buena capacidad.", "Más limitada o dependiente de configuraciones extra."],
              ["Escalabilidad con grandes datos", "Muy buena cuando hay infraestructura.", "Más variable según el modelo."],
              ["Interpretabilidad", "Menor.", "Suele ser mayor."],
              ["Entrenamiento distribuido", "Muy común con GPU y aceleradores.", "Menos habitual."]
            ]
          }
        },
        {
          title: "Funciones de activación: la parte que evita que todo sea lineal",
          body: "Si una red solo hiciera sumas lineales una tras otra, no ganaría casi nada frente a un modelo lineal más grande. Las activaciones rompen esa limitación.",
          comparisonTable: {
            columns: ["Activación", "Qué devuelve", "Cuándo suele aparecer"],
            rows: [
              ["ReLU", "Activa si el valor es positivo.", "Capas ocultas por eficiencia y simplicidad."],
              ["Sigmoid", "Valores entre 0 y 1.", "Salidas probabilísticas o clasificación binaria."],
              ["Tanh", "Valores entre -1 y 1.", "Alternativa cuando quiero una salida centrada en cero."],
              ["Softmax", "Probabilidades que suman 1.", "Capa de salida en clasificación multiclase."]
            ]
          }
        },
        {
          title: "Cómo aprende realmente una red neuronal",
          body: "El aprendizaje ocurre ajustando pesos y sesgos para reducir el error del modelo. La red hace una predicción, compara esa salida con la respuesta real, calcula cuánto se equivocó usando una función de pérdida y luego actualiza sus parámetros con un optimizador. Ese ciclo se repite muchísimas veces hasta que el error baja o deja de mejorar."
        },
        {
          title: "El flujo de aprendizaje paso a paso",
          body: "Si quisiera recordarlo como pipeline mental, sería este.",
          bestPractices: [
            "Entro con un dataset ya preprocesado y normalizado.",
            "La red hace una propagación hacia adelante y genera una predicción.",
            "La función de pérdida mide qué tan lejos quedó de la respuesta correcta.",
            "La retropropagación calcula cómo influyó cada peso en ese error.",
            "El optimizador corrige pesos y sesgos para reducir la pérdida.",
            "Repito el proceso por épocas hasta estabilizar el aprendizaje."
          ]
        },
        {
          title: "Qué medidas usa para funcionar y evaluarse",
          body: "Aquí aparecen varias medidas importantes, y conviene no mezclarlas entre sí.",
          comparisonTable: {
            columns: ["Medida", "Para qué sirve", "Ejemplo de uso"],
            rows: [
              ["Función de pérdida", "Mide el error durante el entrenamiento.", "`MSE` en regresión, `cross-entropy` en clasificación."],
              ["Accuracy", "Mide cuántas predicciones acierta.", "Clasificación balanceada o problemas simples de reconocimiento."],
              ["Precision / Recall / F1", "Evalúan calidad más allá del acierto bruto.", "Problemas desbalanceados o clases sensibles."],
              ["ROC-AUC", "Mide capacidad de separar clases.", "Clasificación binaria con enfoque en discriminación."],
              ["Batch size", "Cuántas muestras procesa antes de actualizar pesos.", "Afecta memoria, estabilidad y velocidad."],
              ["Epochs", "Cantidad de pasadas completas por el dataset.", "Afecta cuánto tiempo aprende la red."]
            ]
          }
        },
        {
          title: "Pérdida y optimizador: no son lo mismo",
          body: "La función de pérdida responde 'qué tan mal lo estoy haciendo'; el optimizador responde 'cómo corrijo mis pesos para hacerlo mejor'. Esa diferencia es clave.",
          comparisonTable: {
            columns: ["Elemento", "Rol", "Ejemplos comunes"],
            rows: [
              ["Función de pérdida", "Cuantifica el error.", "`MSE`, `binary_crossentropy`, `categorical_crossentropy`."],
              ["Optimizador", "Actualiza parámetros para reducir el error.", "`SGD`, `Adam`, `RMSProp`."]
            ]
          }
        },
        {
          title: "Optimizadores que conviene recordar",
          body: "No todos corrigen igual los pesos.",
          comparisonTable: {
            columns: ["Optimizador", "Idea principal", "Dónde suele brillar"],
            rows: [
              ["SGD", "Actualiza con pasos simples y robustos.", "Líneas base, control fino o configuraciones más manuales."],
              ["Adam", "Combina momentum y ajuste adaptativo del paso.", "Muy usado en deep learning por practicidad."],
              ["RMSProp", "Ajusta el paso según la historia reciente del gradiente.", "Frecuente en secuencias o escenarios dinámicos."]
            ]
          }
        },
        {
          title: "Qué necesita el dataset para que la red aprenda bien",
          body: "Las redes neuronales suelen ser muy sensibles a la calidad y escala de los datos. Normalizar, codificar correctamente etiquetas, evitar ruido innecesario y separar bien entrenamiento, validación y test no es un detalle opcional: es parte del aprendizaje exitoso."
        },
        {
          title: "Una solución de deep learning no parte desde el modelo",
          body: "Uno de los errores más comunes es enamorarse primero de la arquitectura y después buscarle problema. En la práctica debería ser al revés: parto del problema de negocio o del caso real, reviso qué datos existen, qué tipo de salida necesito, qué costo tolero y recién ahí defino si una red neuronal profunda tiene sentido."
        },
        {
          title: "Qué piezas componen una solución real",
          body: "Cuando paso de la teoría al mundo real, una red deja de ser solo capas y pesos.",
          comparisonTable: {
            columns: ["Componente", "Qué hace", "Por qué importa"],
            rows: [
              ["Datos y etiquetado", "Define con qué aprende el modelo.", "Si esta base falla, todo lo demás se contamina."],
              ["Preprocesamiento", "Normaliza, transforma y ordena entradas.", "Asegura coherencia entre entrenamiento e inferencia."],
              ["Modelo", "Aprende representaciones y genera predicciones.", "Es el núcleo técnico, pero no trabaja solo."],
              ["Métricas", "Evalúan el comportamiento.", "Permiten decidir si el modelo realmente sirve."],
              ["Interpretabilidad", "Explica por qué predijo eso.", "Clave en salud, finanzas o contextos sensibles."],
              ["Despliegue y monitoreo", "Lleva el modelo a uso real y lo vigila.", "Sin esto, no hay solución mantenible."]
            ]
          }
        },
        {
          title: "Cómo detectar si la red está aprendiendo bien o mal",
          body: "Mirar solo un número final suele ser insuficiente.",
          comparisonTable: {
            columns: ["Señal", "Qué podría significar"],
            rows: [
              ["La pérdida baja de forma estable", "La red está aprendiendo sin demasiada inestabilidad."],
              ["Accuracy de train sube, validación no mejora", "Posible overfitting."],
              ["Train y validación muy bajas", "Arquitectura pobre, poco aprendizaje o mal preprocesamiento."],
              ["Oscilaciones bruscas en pérdida", "Tasa de aprendizaje, batch o datos pueden estar afectando la convergencia."],
              ["Validación estable y test alto", "Buen equilibrio general del modelo."]
            ]
          }
        },
        {
          title: "Interpretabilidad: no siempre basta con acertar",
          body: "En muchos casos no alcanza con que la red clasifique bien; también necesito entender qué regiones, señales o variables influyeron más. Herramientas como `Grad-CAM` ayudan justamente a eso en visión computacional, porque permiten visualizar qué partes de una imagen activaron con más fuerza la decisión del modelo."
        },
        {
          title: "Qué revisar antes de llevar la red al mundo real",
          body: "Una red bien entrenada todavía puede fallar como solución si no se prueba en condiciones realistas.",
          comparisonTable: {
            columns: ["Chequeo", "Qué valida", "Riesgo si lo ignoro"],
            rows: [
              ["Datos parecidos al uso real", "Que el modelo vea escenarios creíbles.", "Desempeño inflado en laboratorio y pobre en producción."],
              ["Costo computacional", "Si el modelo cabe en el entorno objetivo.", "Latencia alta o despliegue inviable."],
              ["Interpretabilidad", "Si puedo justificar decisiones.", "Pérdida de confianza o rechazo del sistema."],
              ["Robustez", "Si soporta ruido, casos raros o cambios pequeños.", "Errores inesperados con entradas reales."],
              ["Mantenimiento", "Si puedo actualizar, monitorear y recalibrar.", "El modelo envejece y deja de servir."]
            ]
          }
        },
        {
          title: "Errores comunes en redes neuronales",
          body: "La clase también deja varias alertas que conviene fijar desde ya.",
          bestPractices: [
            "No asumir que más capas o más neuronas siempre mejoran el modelo.",
            "No entrenar sin normalizar o estandarizar entradas.",
            "No elegir activaciones sin pensar en el contexto del problema.",
            "No usar una función de pérdida incorrecta para la tarea.",
            "No evaluar solo con accuracy si los datos están desbalanceados.",
            "No ignorar señales de overfitting durante el entrenamiento.",
            "No diseñar la solución desde la arquitectura y olvidar el problema real.",
            "No omitir interpretabilidad, validación realista o monitoreo posterior."
          ]
        },
        {
          title: "Dónde se usan hoy en la práctica",
          body: "Las DNN aparecen en visión por computadora, NLP, series de tiempo, recomendadores, generación de contenido, mantenimiento predictivo, ciberseguridad y herramientas inteligentes de desarrollo. No son solo una teoría de laboratorio: ya viven dentro de productos diarios como traductores, asistentes, motores de recomendación y copilotos de código."
        },
        {
          title: "Para recordar",
          body: "Una red neuronal profunda aprende ajustando pesos y sesgos en capas sucesivas para reducir una función de pérdida. Su fuerza está en construir representaciones cada vez más complejas a partir del dataset, usando activaciones para introducir no linealidad y optimizadores para corregirse. Pero una solución real de deep learning también exige datos bien alineados, validación realista, interpretación de resultados, costo computacional razonable y capacidad de mantenimiento una vez desplegada."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S1 – Lectura: fundamentos de redes neuronales profundas, componentes y entrenamiento base</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S1 – Cuestionario Clase 1: introducción a DNNs, activaciones, pérdidas y aprendizaje con datos</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S7 – Lectura: soluciones basadas en deep learning, interpretabilidad, despliegue y validación aplicada</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S7 – Cuestionario Clase 7: diseño de soluciones, Grad-CAM, validación realista y mantenimiento</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "matrix-and-vector-foundations-for-data-and-ml",
        "gradients-hessians-and-their-role-in-machine-learning",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "sequential-neural-networks-memory-and-lstm-basics",
      slug: "redes-neuronales-secuenciales-memoria-y-fundamentos-de-lstm",
      title: "Redes neuronales secuenciales, memoria y fundamentos de LSTM",
      summary: "Una guía para entender por qué una red tradicional se queda corta cuando el orden importa, cómo una `RNN` aprende de secuencias usando memoria interna y por qué `LSTM` aparece para recordar información útil durante más tiempo.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "17 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "RNN", "LSTM", "Secuencias"],
      featured: true,
      contentSections: [
        {
          title: "Por qué una red normal no basta cuando hay secuencia",
          body: "Una red densa tradicional trata cada entrada como si fuera un caso aislado. Eso funciona bien en muchos problemas tabulares, pero se queda corta cuando necesito entender frases, melodías, logs, sensores o series de tiempo. Ahí el orden sí importa, y lo que ocurrió antes cambia la interpretación de lo que viene después.",
          highlights: [
            {
              icon: "fa-solid fa-timeline",
              title: "El contexto cambia el significado",
              text: "Una palabra, una nota o un valor numérico no significan lo mismo si los miro fuera de la secuencia completa."
            },
            {
              icon: "fa-solid fa-memory",
              title: "La red necesita recordar",
              text: "Para trabajar bien con secuencias, el modelo debe conservar parte de lo que ya vio y usarlo al decidir el siguiente paso."
            }
          ]
        },
        {
          title: "Qué es una red neuronal recurrente",
          body: "Una `RNN` es una arquitectura diseñada para procesar datos secuenciales. Su diferencia clave frente a una red feedforward es que mantiene un estado interno u oculto que se actualiza paso a paso. Ese estado actúa como memoria de corto plazo y permite que la salida actual dependa no solo de la entrada del momento, sino también del historial procesado."
        },
        {
          title: "Cómo se compone una RNN en lo esencial",
          body: "La estructura base es simple, pero potente.",
          comparisonTable: {
            columns: ["Pieza", "Qué hace", "Cómo recordarla"],
            rows: [
              ["Entrada en el tiempo `t`", "Entrega el dato actual de la secuencia.", "La palabra, nota, sensor o evento del momento."],
              ["Estado oculto", "Guarda contexto del pasado reciente.", "La memoria interna de la red."],
              ["Pesos compartidos", "Se reutilizan en cada paso temporal.", "La misma lógica se aplica a toda la secuencia."],
              ["Salida", "Genera predicción o representación del paso.", "Lo que la red concluye en ese instante."],
              ["BPTT", "Ajusta pesos a través del tiempo.", "La retropropagación adaptada a secuencias."]
            ]
          }
        },
        {
          title: "La idea matemática sin complicarla de más",
          body: "En una `RNN`, el estado oculto del tiempo `t` se calcula usando la entrada actual y el estado anterior. Eso significa que la red se va actualizando como una especie de cuaderno vivo: cada paso agrega información nueva, pero sin borrar por completo lo anterior. Esa es la base de que pueda aprender contexto."
        },
        {
          title: "La analogía de una conversación",
          body: "Si digo `Estoy feliz porque...`, una red tradicional podría mirar cada palabra por separado. Una `RNN`, en cambio, entiende que `porque` viene después de una emoción y anticipa que se dará una explicación. Su fortaleza está justamente en ir construyendo significado a medida que avanza la secuencia."
        },
        {
          title: "Qué aprende realmente una red secuencial",
          body: "No aprende solo valores sueltos. Aprende dependencias entre pasos: patrones gramaticales, relaciones temporales, continuidad melódica, cambios de tendencia, evolución de signos vitales o comportamiento de usuarios en el tiempo. En otras palabras, aprende cómo el pasado influye en el presente y condiciona el siguiente paso probable."
        },
        {
          title: "Feedforward vs RNN vs GAN",
          body: "La clase mezcla varias familias, así que conviene separarlas mentalmente.",
          comparisonTable: {
            columns: ["Característica", "Feedforward", "RNN", "GAN"],
            rows: [
              ["¿Procesa secuencias?", "No.", "Sí.", "No de forma base, aunque puede adaptarse."],
              ["¿Tiene memoria interna?", "No.", "Sí.", "No, son dos redes en competencia."],
              ["¿Genera datos nuevos?", "No.", "A veces con arquitecturas decodificadoras.", "Sí, ese es su foco principal."],
              ["¿Para qué brilla?", "Clasificación o regresión general.", "Texto, series, audio, eventos secuenciales.", "Generación de imágenes, audio o datos sintéticos."]
            ]
          }
        },
        {
          title: "Cómo aprende una RNN paso a paso",
          body: "El aprendizaje sigue una lógica parecida a otras redes, pero extendida en el tiempo.",
          bestPractices: [
            "La red recibe una secuencia ordenada y procesa un paso a la vez.",
            "En cada paso actualiza su estado oculto usando el estado anterior más la entrada actual.",
            "Genera una salida o representación para ese instante.",
            "Compara la predicción con la respuesta real mediante una función de pérdida.",
            "Usa `Backpropagation Through Time (BPTT)` para repartir el error hacia pasos anteriores.",
            "Actualiza los mismos pesos compartidos para mejorar el comportamiento en toda la secuencia."
          ]
        },
        {
          title: "BPTT: la retropropagación cuando hay tiempo de por medio",
          body: "`Backpropagation Through Time` desenrolla la red como si cada paso temporal fuera una copia conectada de la misma arquitectura. Luego acumula gradientes a lo largo de toda la secuencia y actualiza pesos compartidos. Ese mecanismo es el que permite que la red aprenda qué partes del pasado ayudan de verdad a minimizar el error."
        },
        {
          title: "El gran problema de las RNN puras",
          body: "Las `RNN` clásicas sufren mucho cuando la secuencia es larga. Los gradientes pueden hacerse tan pequeños que la red olvida lo importante del pasado, o tan grandes que el entrenamiento se vuelve inestable. Por eso, aunque conceptualmente son bellas, en la práctica muchas veces se reemplazan por variantes más robustas."
        },
        {
          title: "Desvanecimiento y explosión del gradiente",
          body: "Estos dos conceptos conviene fijarlos bien porque aparecen una y otra vez en deep learning.",
          comparisonTable: {
            columns: ["Problema", "Qué ocurre", "Consecuencia práctica", "Respuesta común"],
            rows: [
              ["Desvanecimiento del gradiente", "Los gradientes se vuelven muy pequeños.", "La red deja de aprender dependencias largas.", "Usar `LSTM`, `GRU` o ventanas más cortas."],
              ["Explosión del gradiente", "Los gradientes crecen demasiado.", "El entrenamiento se vuelve inestable.", "Aplicar `gradient clipping` y mejor control del entrenamiento."]
            ]
          }
        },
        {
          title: "Por qué aparece LSTM",
          body: "`LSTM` nace justamente para resolver la dificultad de recordar información útil durante secuencias largas. En vez de confiar en una sola memoria simple, incorpora mecanismos que deciden qué olvidar, qué guardar y qué mostrar como salida. Por eso se convirtió en el estándar clásico para muchos problemas secuenciales antes del auge de los Transformers."
        },
        {
          title: "Las compuertas de LSTM sin volverlo un infierno",
          body: "Lo más importante de `LSTM` no es memorizar todas las fórmulas, sino entender el rol de sus compuertas.",
          comparisonTable: {
            columns: ["Componente", "Qué decide", "Idea práctica"],
            rows: [
              ["Forget gate", "Qué parte de la memoria anterior conviene olvidar.", "Limpia ruido o contexto que ya no sirve."],
              ["Input gate", "Qué información nueva merece entrar.", "Filtra qué vale la pena aprender ahora."],
              ["Output gate", "Qué parte de la memoria mostrar en la salida.", "Decide qué contexto usar para responder en este paso."]
            ]
          }
        },
        {
          title: "Qué gana LSTM frente a una RNN simple",
          body: "Gana control. En vez de arrastrar memoria de forma demasiado frágil, la administra de forma explícita. Eso la vuelve mucho mejor para lenguaje, música, series temporales clínicas, logs y otras secuencias donde una pista importante puede haber aparecido varios pasos antes."
        },
        {
          title: "Y GRU dónde entra",
          body: "`GRU` suele verse como una alternativa intermedia: menos compleja que `LSTM`, pero más robusta que una `RNN` básica. No siempre `LSTM` gana; en secuencias cortas o cuando quiero menos costo computacional, `GRU` puede rendir muy bien sin tanta complejidad."
        },
        {
          title: "Qué medidas y señales conviene mirar aquí",
          body: "En redes secuenciales sigo mirando varias de las métricas base del deep learning, pero con algunas alertas extra.",
          comparisonTable: {
            columns: ["Elemento", "Qué me dice", "Por qué importa"],
            rows: [
              ["Loss", "Qué tan lejos está el modelo del objetivo.", "Sigue guiando el aprendizaje paso a paso."],
              ["Accuracy / F1 / Recall", "Qué tan bien resuelve la tarea final.", "Depende del problema: clasificación, intención, sentimiento, etc."],
              ["Longitud de secuencia", "Cuánto contexto estoy dejando entrar.", "Afecta memoria, costo y dificultad del entrenamiento."],
              ["Padding", "Si igualé secuencias de distinto tamaño.", "Evita errores y hace entrenable el batch."],
              ["Validación vs entrenamiento", "Si generaliza o memoriza.", "Permite detectar sobreajuste también aquí."]
            ]
          }
        },
        {
          title: "Dónde brillan las redes secuenciales",
          body: "Se usan mucho en traducción, análisis de sentimiento, reconocimiento de intenciones, resumen automático, predicción de demanda energética, precios financieros, monitoreo de signos vitales, música generativa y modelado de conversaciones. Siempre que el orden importe y el pasado afecte el presente, vale la pena pensar en ellas."
        },
        {
          title: "Errores comunes con RNN y LSTM",
          body: "Hay varios tropiezos muy repetidos que esta clase remarca bien.",
          bestPractices: [
            "No usar `RNN` para datos que en realidad no tienen estructura secuencial.",
            "No ignorar el desvanecimiento del gradiente en secuencias largas.",
            "No entrenar texto o secuencias sin padding o sin control del vocabulario.",
            "No asumir que `LSTM` siempre será mejor que una `RNN` o `GRU`.",
            "No olvidar regularización, `dropout`, `early stopping` o `gradient clipping`."
          ]
        },
        {
          title: "Para recordar",
          body: "Las redes secuenciales existen porque el orden importa. Una `RNN` aprende usando memoria interna y contexto acumulado, pero puede sufrir con dependencias largas. `LSTM` aparece para administrar mejor esa memoria mediante compuertas, permitiendo recordar lo relevante durante más tiempo. Si quiero entender cómo aprenden por dentro, la clave es pensar en estado oculto, contexto, BPTT y control del gradiente."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S2 – Lectura: redes neuronales secuenciales y generativas, fundamentos de RNN, LSTM y aplicaciones</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S2 – Cuestionario Clase 2: memoria en secuencias, BPTT, LSTM y uso práctico de arquitecturas recurrentes</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "deep-neural-network-fundamentals-and-learning-flow",
        "gradients-hessians-and-their-role-in-machine-learning",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "autoencoders-latent-space-and-controlled-reconstruction",
      slug: "autoencoders-espacio-latente-y-reconstruccion-controlada",
      title: "Autoencoders, espacio latente y reconstrucción controlada",
      summary: "Una guía para entender cómo un autoencoder comprime y reconstruye datos, qué papel cumplen el `encoder`, el `decoder` y el espacio latente, y cuándo conviene usar variantes como `denoising autoencoders` o `VAE` para limpieza, detección de anomalías y generación de nuevas muestras.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Autoencoder", "Decoder", "VAE"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta arquitectura importa tanto",
          body: "Uno de los grandes retos del aprendizaje automático es reducir complejidad sin perder lo esencial. Los autoencoders atacan justo ese problema: aprenden una representación comprimida de los datos y luego intentan reconstruir la entrada original. Esa idea abre puertas para compresión, limpieza, detección de anomalías, visualización y generación controlada de nuevas muestras.",
          highlights: [
            {
              icon: "fa-solid fa-minimize",
              title: "Comprimir sin tirar lo importante",
              text: "El modelo aprende qué partes del dato son esenciales para reconstruirlo después con el menor error posible."
            },
            {
              icon: "fa-solid fa-wand-magic-sparkles",
              title: "También sirve para crear variantes",
              text: "Cuando el espacio latente queda bien aprendido, variantes como `VAE` permiten muestrear y decodificar nuevas muestras similares."
            }
          ]
        },
        {
          title: "Qué es un autoencoder en términos simples",
          body: "Un autoencoder es una red neuronal no supervisada que aprende a copiar su entrada en su salida, pero obligándose a pasar por una representación comprimida llamada espacio latente. Como no puede simplemente memorizar la entrada completa sin costo, termina aprendiendo una versión más compacta y significativa del dato."
        },
        {
          title: "Cómo se compone la arquitectura",
          body: "La estructura base es bastante limpia y conviene fijarla bien.",
          comparisonTable: {
            columns: ["Componente", "Qué hace", "Cómo recordarlo"],
            rows: [
              ["Encoder", "Comprime la entrada a una representación más pequeña.", "Es el traductor que resume el dato."],
              ["Espacio latente", "Guarda la codificación compacta.", "Es la esencia comprimida del patrón."],
              ["Decoder", "Reconstruye la entrada desde la codificación.", "Es el intérprete que expande el resumen."],
              ["Reconstrucción", "Salida final comparada con la entrada.", "Es la versión que el modelo intenta imitar."],
              ["Pérdida de reconstrucción", "Mide qué tan distinta quedó la salida.", "Es la brújula del aprendizaje."]
            ]
          }
        },
        {
          title: "Encoder y decoder: el corazón del proceso",
          body: "El `encoder` recibe los datos originales y los reduce paso a paso hasta llegar a un vector más compacto. El `decoder` toma esa codificación y la expande nuevamente para reconstruir una aproximación de la entrada original. La gracia está en que el decoder no hace una copia trivial: aprende a interpretar ese resumen abstracto y convertirlo otra vez en un patrón útil."
        },
        {
          title: "La analogía del compresor inteligente",
          body: "Piensa en una imagen pesada. El encoder sería como un compresor que guarda solo estructura, colores dominantes y patrones esenciales. Luego el decoder actúa como un descompresor inteligente que intenta recuperar una imagen lo más parecida posible a la original. Si la reconstrucción sale bien, significa que la red sí entendió qué era importante conservar."
        },
        {
          title: "Qué es el espacio latente y por qué vale oro",
          body: "El espacio latente es el núcleo conceptual del autoencoder. Cada punto ahí resume características relevantes del dato original. Si dos imágenes, señales o clientes son parecidos, sus representaciones latentes también deberían parecerse. Por eso ese espacio sirve para visualizar, clusterizar, detectar rarezas o incluso generar variaciones nuevas en arquitecturas generativas."
        },
        {
          title: "Cómo aprende el modelo paso a paso",
          body: "El entrenamiento sigue una lógica bastante clara.",
          bestPractices: [
            "Entro con un dato original `x`.",
            "El encoder lo transforma en una codificación latente `z`.",
            "El decoder toma `z` y produce una reconstrucción `x^`.",
            "Comparo `x` con `x^` usando una pérdida de reconstrucción.",
            "La red ajusta pesos para que la reconstrucción se acerque más al original.",
            "Repito el ciclo hasta bajar el error y mejorar la calidad de la reconstrucción."
          ]
        },
        {
          title: "Qué pérdida suele usarse aquí",
          body: "La función de pérdida depende del tipo de dato que quiero reconstruir.",
          comparisonTable: {
            columns: ["Loss", "Cuándo se usa", "Qué evalúa"],
            rows: [
              ["`MSE`", "Datos continuos.", "Qué tan lejos quedó la reconstrucción respecto al valor real."],
              ["`binary_crossentropy`", "Datos binarios o valores normalizados entre 0 y 1.", "Qué tan bien la salida reproduce activaciones tipo probabilidad o píxeles normalizados."]
            ]
          }
        },
        {
          title: "Autoencoder vs PCA vs GAN",
          body: "Aquí está una de las diferencias que querías dejar clara.",
          comparisonTable: {
            columns: ["Técnica", "¿Supervisado?", "¿Aprende representaciones?", "¿Reconstruye o genera?", "¿Necesita etiquetas?"],
            rows: [
              ["Autoencoder clásico", "No.", "Sí.", "Reconstruye la entrada.", "No."],
              ["PCA", "No.", "Sí, pero de forma lineal.", "No reconstruye como objetivo principal del modelo aplicado aquí.", "No."],
              ["GAN", "No.", "Sí de forma implícita.", "Genera datos nuevos desde ruido o condiciones.", "No."]
            ]
          }
        },
        {
          title: "Entonces, ¿dónde entran las GAN?",
          body: "Las `GANs` sí entran en esta conversación, pero no hacen exactamente lo mismo. Un autoencoder clásico aprende a reconstruir lo que ya existe. Una `GAN` aprende a generar ejemplos nuevos y realistas a partir de ruido, mediante la competencia entre generador y discriminador. Donde se tocan es en la idea de crear datos sintéticos o poner a prueba sistemas con ejemplos nuevos, pero el camino técnico es distinto."
        },
        {
          title: "Cuándo sí puedo generar datos nuevos con esta familia",
          body: "Si quiero generación más controlada dentro del mundo autoencoder, la variante importante es `VAE` (`Variational Autoencoder`). A diferencia del autoencoder clásico, no solo codifica puntos aislados: modela una distribución en el espacio latente, lo que permite muestrear e interpolar para generar nuevos datos parecidos a los originales."
        },
        {
          title: "Variantes que conviene recordar",
          body: "Cada variante empuja la idea base hacia un objetivo distinto.",
          comparisonTable: {
            columns: ["Variante", "Propósito", "Qué la hace útil"],
            rows: [
              ["Denoising Autoencoder", "Quitar ruido.", "Aprende a reconstruir datos limpios desde entradas corruptas."],
              ["Sparse Autoencoder", "Forzar representaciones más selectivas.", "Activa pocas neuronas y ayuda a resaltar patrones claros."],
              ["VAE", "Generar datos nuevos.", "Permite muestrear e interpolar en el espacio latente."],
              ["Convolutional Autoencoder", "Trabajar mejor con imágenes.", "Usa convoluciones para respetar estructura espacial."]
            ]
          }
        },
        {
          title: "Cuándo usar autoencoders y cuándo no",
          body: "No todo problema necesita esta arquitectura.",
          comparisonTable: {
            columns: ["Escenario", "¿Conviene?", "Por qué"],
            rows: [
              ["Reducción de dimensionalidad no lineal", "Sí.", "Captura relaciones más complejas que PCA."],
              ["Limpieza de ruido", "Sí.", "Los denoising autoencoders destacan aquí."],
              ["Detección de anomalías", "Sí.", "El error de reconstrucción sirve como señal de rareza."],
              ["Clustering o visualización sin etiquetas", "Sí.", "El espacio latente puede organizar mejor los datos."],
              ["Clasificación supervisada directa", "No como primera opción.", "Suele convenir usar modelos diseñados para clasificación."]
            ]
          }
        },
        {
          title: "Detección de anomalías con error de reconstrucción",
          body: "Si entreno el autoencoder con datos normales, aprenderá a reconstruir bien ese patrón. Cuando le entrego un caso raro, su reconstrucción empeora y el error sube. Esa lógica lo vuelve muy útil para fraude, ciberseguridad, monitoreo de señales médicas o fallas industriales, porque no solo marca el caso raro: también muestra que ese caso no encaja con lo que la red aprendió como normal."
        },
        {
          title: "Limpieza de datos y eliminación de ruido",
          body: "Los `denoising autoencoders` reciben una versión dañada o ruidosa de la entrada y aprenden a devolver una versión limpia. Esto tiene mucho valor en imágenes médicas, documentos antiguos, audio, telecomunicaciones o señales con interferencia, porque el modelo aprende a distinguir mejor entre señal útil y ruido accidental."
        },
        {
          title: "Reducción de dimensionalidad y clustering",
          body: "Otra utilidad muy fuerte está en comprimir cientos o miles de variables a un espacio latente más pequeño para luego visualizar, clusterizar o entrenar otros modelos. Ahí el autoencoder puede actuar como una alternativa no lineal a `PCA`, preservando relaciones más complejas y dejando una base más compacta para análisis posteriores."
        },
        {
          title: "Impacto real en testing y generación de casos",
          body: "En software e IA esto es especialmente interesante porque un decoder o un `VAE` pueden ayudar a simular entradas válidas, variantes de prueba y datos sintéticos que desafíen a otros modelos. No reemplaza una `GAN` en generación fotorealista, pero sí puede servir para construir casos consistentes, explorar variaciones del espacio latente y poner a prueba robustez, cobertura y auditoría de sistemas inteligentes."
        },
        {
          title: "Qué señales conviene mirar al entrenarlo",
          body: "No basta con ver una pérdida final bonita.",
          comparisonTable: {
            columns: ["Señal", "Qué debería pasar"],
            rows: [
              ["`loss` y `val_loss`", "Deberían bajar de forma estable y parecida."],
              ["Reconstrucción visual", "La salida debería mantener rasgos esenciales del original."],
              ["Espacio latente", "Casos similares deberían quedar cerca o formar estructuras coherentes."],
              ["Tamaño latente", "Muy pequeño puede perder información; muy grande puede memorizar demasiado."]
            ]
          }
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "Esta clase deja varias alertas bien concretas.",
          bestPractices: [
            "No elegir el tamaño latente o la arquitectura de forma arbitraria.",
            "No olvidar normalizar correctamente los datos.",
            "No evaluar solo con métricas numéricas si hay reconstrucción visual disponible.",
            "No usar autoencoders para tareas que en realidad piden otro tipo de modelo.",
            "No asumir que por comprimir más, el modelo automáticamente aprenderá mejor."
          ]
        },
        {
          title: "Para recordar",
          body: "El autoencoder aprende a comprimir y reconstruir. El `encoder` resume, el espacio latente conserva la esencia y el `decoder` reconstruye. Sirve muchísimo para reducción no lineal, limpieza de ruido, detección de anomalías y extracción de representaciones. Si quiero generar datos nuevos de forma más natural dentro de esta familia, la variante importante es `VAE`; si quiero generación más agresiva o realista desde ruido, ahí ya entro al terreno de las `GANs`."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S3 – Lectura: autoencoders, decoders, espacio latente y aplicaciones en compresión, anomalías y generación</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S3 – Cuestionario Clase 3: autoencoders, reconstrucción, variantes y usos reales</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "deep-neural-network-fundamentals-and-learning-flow",
        "sequential-neural-networks-memory-and-lstm-basics",
        "anomaly-detection-find-the-rare-and-learn-from-it"
      ]
    },
    {
      id: "modern-neural-networks-resnet-vs-efficientnet",
      slug: "redes-neuronales-modernas-resnet-vs-efficientnet",
      title: "Redes neuronales modernas: ResNet vs EfficientNet",
      summary: "Una guía para entender por qué arquitecturas modernas como `ResNet` y `EfficientNet` marcan diferencia frente a redes más tradicionales, cómo se evalúan en la práctica y qué criterios conviene mirar al elegir entre profundidad, interpretabilidad, eficiencia y despliegue.",
      category: "Machine Learning",
      type: "Comparativa",
      level: "advanced",
      readingTime: "15 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "ResNet", "EfficientNet", "Deep Learning"],
      featured: true,
      contentSections: [
        {
          title: "Por qué aparecen estas arquitecturas modernas",
          body: "A medida que las redes neuronales se hicieron más profundas, empezaron a aparecer problemas técnicos importantes: gradientes que se desvanecen o explotan, redes cada vez más difíciles de entrenar, degradación del rendimiento y modelos que consumen demasiados recursos. `ResNet` y `EfficientNet` nacen justamente para responder a esos límites.",
          highlights: [
            {
              icon: "fa-solid fa-building-columns",
              title: "No todo se arregla agregando capas",
              text: "Hacer una red más profunda no siempre mejora el desempeño: a veces empeora el entrenamiento y la generalización."
            },
            {
              icon: "fa-solid fa-gauge-high",
              title: "Rendimiento y eficiencia importan juntos",
              text: "Hoy no basta con acertar: también importa cuánto cuesta entrenar, inferir y desplegar el modelo."
            }
          ]
        },
        {
          title: "Qué las hace modernas frente a una red tradicional",
          body: "Las redes tradicionales profundas suelen crecer de forma más directa: más capas, más filtros o más parámetros. Las arquitecturas modernas, en cambio, incorporan principios de diseño más inteligentes. `ResNet` mejora el flujo de información con conexiones residuales. `EfficientNet` mejora la forma de escalar la red para no sobredimensionarla sin necesidad."
        },
        {
          title: "La comparación más simple para recordarlas",
          body: "Si lo pienso en una sola línea, lo recordaría así.",
          comparisonTable: {
            columns: ["Arquitectura", "Idea central", "Problema que resuelve mejor"],
            rows: [
              ["ResNet", "Agregar atajos para que la información y el gradiente fluyan mejor.", "Entrenar redes muy profundas sin degradación tan fuerte."],
              ["EfficientNet", "Escalar profundidad, anchura y resolución de forma equilibrada.", "Lograr más eficiencia con mejor uso de recursos."]
            ]
          }
        },
        {
          title: "Qué es ResNet",
          body: "`ResNet` (`Residual Network`) fue introducida en 2015 y su gran innovación fueron los bloques residuales con `skip connections`. En vez de obligar a cada grupo de capas a aprender toda la transformación desde cero, la red aprende el residuo o diferencia respecto a la entrada. Eso facilita el entrenamiento y mejora la propagación del gradiente."
        },
        {
          title: "Cómo funciona un bloque residual",
          body: "En un bloque residual, la entrada original se suma con la salida transformada del bloque. Esa suma permite que la información tome un atajo y no dependa completamente de pasar por todas las operaciones intermedias. La idea parece simple, pero fue una de las claves para entrenar redes de muchas más capas sin que el rendimiento colapsara."
        },
        {
          title: "Qué es EfficientNet",
          body: "`EfficientNet`, propuesta en 2019, replantea cómo hacer crecer una red de forma inteligente. En lugar de aumentar solo profundidad o solo tamaño de entrada, usa `compound scaling`: ajusta al mismo tiempo profundidad (`depth`), anchura (`width`) y resolución (`resolution`) para mantener un mejor equilibrio entre precisión y costo computacional."
        },
        {
          title: "Qué tiene por dentro EfficientNet",
          body: "Su diseño se apoya en bloques `MBConv`, activación `Swish` y mecanismos `squeeze-and-excitation`. Todo eso busca aprovechar mejor los parámetros disponibles. Por eso variantes como `EfficientNetB0` a `B7` permiten moverse desde modelos livianos hasta opciones mucho más potentes, pero sin perder la lógica de eficiencia como criterio de diseño."
        },
        {
          title: "Diferencias clave entre ResNet y EfficientNet",
          body: "Esta es probablemente la tabla que más conviene guardar mentalmente.",
          comparisonTable: {
            columns: ["Criterio", "ResNet", "EfficientNet"],
            rows: [
              ["Año", "2015", "2019"],
              ["Innovación central", "Conexiones residuales o skip connections.", "Compound scaling equilibrado."],
              ["Arquitectura base", "Bloques residuales.", "Bloques MBConv con atención."],
              ["Fortaleza principal", "Entrenamiento profundo y robusto.", "Mejor relación rendimiento/eficiencia."],
              ["Transfer learning", "Muy usada, por ejemplo `ResNet50` o `ResNet101`.", "Muy usada, por ejemplo `EfficientNetB0` a `B7`."],
              ["Cuándo suele convenir", "Problemas donde la robustez y la profundidad pesan más.", "Sistemas móviles, edge o escenarios con recursos más limitados."]
            ]
          }
        },
        {
          title: "ResNet y EfficientNet frente a redes tradicionales",
          body: "Las dos siguen siendo redes convolucionales profundas dentro del gran mundo del deep learning visual, pero se diferencian de enfoques más tradicionales por su diseño interno. Las redes clásicas crecían de forma más arbitraria; estas redes modernas fueron pensadas para resolver limitaciones concretas del entrenamiento y el despliegue."
        },
        {
          title: "Cómo se miden en la práctica",
          body: "Aquí es muy importante no mirar solo una métrica.",
          comparisonTable: {
            columns: ["Medida", "Qué me dice", "Por qué importa aquí"],
            rows: [
              ["Accuracy o precisión de validación", "Qué tan bien clasifica.", "Es la base para comparar desempeño general."],
              ["Loss / val_loss", "Cómo evoluciona el error durante el entrenamiento.", "Permite ver convergencia y señales de sobreajuste."],
              ["Tiempo de entrenamiento", "Cuánto tarda en aprender.", "Importa mucho en producción o experimentación rápida."],
              ["Tiempo de inferencia", "Qué tan rápido responde una vez entrenado.", "Clave en móviles, edge o tiempo real."],
              ["Tamaño del modelo", "Cuánto pesa en memoria o almacenamiento.", "Impacta portabilidad y despliegue."],
              ["Compatibilidad de despliegue", "Qué tan fácil es llevarlo a producción.", "Importa para TensorFlow Lite, ONNX o hardware limitado."]
            ]
          }
        },
        {
          title: "Qué señales buscaría durante el entrenamiento",
          body: "La clase sugiere una lógica muy sana para revisar checkpoints.",
          bestPractices: [
            "Verificar que el modelo compile sin errores.",
            "Revisar si desde las primeras épocas ya logra una validación razonable.",
            "Comparar curvas de entrenamiento y validación para detectar sobreajuste.",
            "Mirar si la velocidad de entrenamiento e inferencia es coherente con el tamaño del modelo.",
            "Revisar si la arquitectura elegida tiene sentido para el dispositivo donde terminará corriendo."
          ]
        },
        {
          title: "Transfer learning: donde más suelen lucirse",
          body: "Tanto `ResNet` como `EfficientNet` son bases muy usadas en `transfer learning`. Eso significa que parto de una red ya preentrenada en datasets grandes como `ImageNet`, congelo parte de su conocimiento y luego adapto solo la cabeza final a mi problema real. Esto reduce costo de entrenamiento y permite trabajar bien incluso cuando no tengo millones de imágenes propias."
        },
        {
          title: "Ejemplos reales donde sí cambia la decisión",
          body: "`ResNet` suele verse muy fuerte en diagnóstico por imagen, análisis satelital y escenarios donde también me interesa cierta explicabilidad con técnicas como `Grad-CAM`. `EfficientNet` suele destacar en clasificación de imágenes en móviles, control de calidad industrial y despliegues edge, donde cada megabyte y cada milisegundo importan más."
        },
        {
          title: "Qué errores comunes conviene evitar",
          body: "La clase deja varias alertas bien prácticas.",
          comparisonTable: {
            columns: ["Error", "Por qué daña el resultado"],
            rows: [
              ["No ajustar el tamaño de entrada", "La arquitectura espera formatos específicos y puede fallar o rendir mal."],
              ["No usar `preprocess_input()` oficial", "Los datos dejan de ser compatibles con los pesos preentrenados."],
              ["Descongelar todo desde el inicio", "Se puede destruir el conocimiento aprendido en el preentrenamiento."],
              ["Elegir un modelo enorme para una tarea pequeña", "Se pierde eficiencia sin una mejora real equivalente."],
              ["Mirar solo accuracy", "Oculta problemas de sobreajuste, costo o mala calibración."]
            ]
          }
        },
        {
          title: "Malentendidos que conviene borrar",
          body: "No, `EfficientNet` no siempre es mejor que `ResNet`; depende del contexto, del dataset y de los recursos disponibles. No, más profundidad no garantiza mejores resultados. No, la arquitectura base no se puede usar tal cual sin adaptar la cabeza del modelo. Y no, el despliegue no es un detalle menor: un modelo excelente pero inviable de correr puede dejar de servir en la práctica."
        },
        {
          title: "Cómo elegiría entre ambas",
          body: "Si mi prioridad es robustez, profundidad, prototipado fuerte y una integración cómoda con explicabilidad visual, pensaría primero en `ResNet`. Si necesito mejor balance entre precisión, tamaño, velocidad y despliegue en producción o edge, `EfficientNet` suele volverse una opción más natural. La clave no es cuál es 'más famosa', sino cuál se alinea mejor con el problema real."
        },
        {
          title: "Para recordar",
          body: "`ResNet` resolvió gran parte del problema de entrenar redes muy profundas gracias a sus bloques residuales. `EfficientNet` llevó el foco hacia una pregunta más moderna: cómo escalar una red sin desperdiciar recursos. Las dos se evalúan no solo por accuracy, sino también por pérdida, eficiencia, tiempo, tamaño y viabilidad de despliegue. Ahí está la verdadera diferencia frente a redes tradicionales: no solo aprenden, sino que están diseñadas para aprender mejor bajo restricciones reales."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S4 – Lectura: redes neuronales modernas y escalables, ResNet y EfficientNet</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S4 – Cuestionario Clase 4: arquitectura moderna, transfer learning, métricas y despliegue</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "deep-neural-network-fundamentals-and-learning-flow",
        "autoencoders-latent-space-and-controlled-reconstruction",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "deep-neural-network-optimization-and-regularization",
      slug: "optimizacion-y-regularizacion-en-redes-neuronales-profundas",
      title: "Optimización y regularización en redes neuronales profundas",
      summary: "Una guía para entender cómo se optimizan de verdad las redes neuronales profundas, qué diferencia hay entre regularizar y optimizar, y cuándo conviene usar técnicas como `Dropout`, `L1/L2`, `EarlyStopping`, `learning rate scheduling`, `Lookahead` o `Ranger`.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "17 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Optimización", "Regularización", "Dropout"],
      featured: true,
      contentSections: [
        {
          title: "Por qué optimizar bien una red cambia todo",
          body: "En deep learning no basta con tener una buena arquitectura. Una red puede ser potente y aun así fallar por sobreajuste, convergencia inestable, mala generalización o simplemente por entrenar de forma ineficiente. Por eso optimización y regularización no son detalles extra: son parte del núcleo del entrenamiento real.",
          highlights: [
            {
              icon: "fa-solid fa-shield-heart",
              title: "Regularizar evita memorizar ruido",
              text: "Ayuda a que la red no aprenda de memoria el entrenamiento ni se aferre a patrones espurios."
            },
            {
              icon: "fa-solid fa-route",
              title: "Optimizar mejora la ruta de aprendizaje",
              text: "Busca que el ajuste de pesos sea más estable, rápido y útil para llegar a una buena solución."
            }
          ]
        },
        {
          title: "Regularización y optimización no son lo mismo",
          body: "Las dos se tocan todo el tiempo, pero cumplen roles distintos.",
          comparisonTable: {
            columns: ["Concepto", "Qué busca", "Ejemplos típicos"],
            rows: [
              ["Regularización", "Controlar la complejidad del modelo para generalizar mejor.", "`Dropout`, `L1`, `L2`, reducción de capacidad."],
              ["Optimización", "Ajustar pesos de forma más estable y eficiente.", "`Adam`, `SGD`, `Lookahead`, `Ranger`, scheduling del learning rate."],
              ["Callbacks de control", "Detener o ajustar el entrenamiento según señales.", "`EarlyStopping`, `ReduceLROnPlateau`, `ModelCheckpoint`."]
            ]
          }
        },
        {
          title: "Qué pasa si no regulamos ni optimizamos bien",
          body: "Lo típico es ver precisión engañosa en entrenamiento, curvas que no convergen, modelos que aprenden correlaciones irrelevantes, desperdicio de recursos computacionales y sistemas que fallan apenas salen del notebook y enfrentan datos del mundo real."
        },
        {
          title: "Dropout: apagar para obligar a aprender mejor",
          body: "`Dropout` desactiva aleatoriamente una parte de las neuronas durante el entrenamiento. Eso evita que la red dependa demasiado de conexiones específicas y la obliga a aprender representaciones más distribuidas y robustas.",
          comparisonTable: {
            columns: ["Qué aporta", "Cuándo ayuda", "Cuidado importante"],
            rows: [
              ["Reduce sobreajuste", "Cuando el modelo empieza a memorizar demasiado.", "Si lo exagero, puedo subentrenar la red."],
              ["Introduce aleatoriedad útil", "Cuando necesito robustez interna.", "No conviene ponerlo sin criterio en cualquier capa."],
              ["Es fácil de aplicar", "En capas densas o algunas arquitecturas específicas.", "Evitar usarlo justo antes de la capa de salida."]
            ]
          }
        },
        {
          title: "L1 y L2 en redes profundas",
          body: "Las penalizaciones `L1` y `L2` siguen siendo muy útiles dentro de deep learning, sobre todo en capas densas o escenarios con alto riesgo de sobreajuste.",
          comparisonTable: {
            columns: ["Regularización", "Qué hace sobre los pesos", "Cuándo suele lucir más"],
            rows: [
              ["L1", "Empuja algunos pesos a cero.", "Cuando quiero más sparsity o cierta selección implícita."],
              ["L2", "Suaviza los pesos grandes y estabiliza la solución.", "Es la más común en redes densas y convolucionales."],
              ["Elastic Net", "Combina sparsity y suavizado.", "Cuando quiero una mezcla entre control y selección."]
            ]
          }
        },
        {
          title: "Learning rate: el ritmo al que aprende la red",
          body: "La tasa de aprendizaje es uno de los hiperparámetros más sensibles del entrenamiento. Si es demasiado alta, el modelo puede oscilar o divergir; si es demasiado baja, aprende lento o se queda atrapado perdiendo tiempo. Por eso en redes modernas conviene tratarla como algo dinámico y no como un número fijo para siempre."
        },
        {
          title: "Learning rate scheduling: ajustar el paso a medida que avanza",
          body: "El `learning rate scheduling` cambia la tasa de aprendizaje durante el entrenamiento para adaptarse a distintas etapas del proceso.",
          comparisonTable: {
            columns: ["Estrategia", "Qué hace", "Cuándo ayuda"],
            rows: [
              ["`ReduceLROnPlateau`", "Baja el learning rate si la validación deja de mejorar.", "Cuando el modelo se estanca tarde en el entrenamiento."],
              ["`ExponentialDecay`", "Reduce el paso de forma gradual según las épocas.", "Cuando quiero un descenso suave y programado."],
              ["`Cyclical Learning Rates`", "Hace subir y bajar el learning rate en ciclos.", "Cuando quiero explorar mejor la superficie de pérdida."]
            ]
          }
        },
        {
          title: "Early Stopping: parar antes de arruinarlo",
          body: "`EarlyStopping` detiene el entrenamiento cuando la validación deja de mejorar. Su valor no es solo ahorrar tiempo: también protege contra el sobreajuste y permite conservar la mejor versión del modelo si uso `restore_best_weights=True`."
        },
        {
          title: "Lookahead: aprender con pasos rápidos y controlados",
          body: "`Lookahead` combina dos ritmos: un optimizador base da pasos rápidos y una versión más lenta de los pesos avanza de forma más estable hacia él. Esa mezcla tiende a suavizar la convergencia y reducir oscilaciones, especialmente en arquitecturas profundas o entrenamientos más nerviosos."
        },
        {
          title: "Ranger: combinación pensada para estabilidad práctica",
          body: "`Ranger` une `RAdam` con `Lookahead`. `RAdam` mejora la fase inicial del entrenamiento y `Lookahead` ayuda a suavizar la trayectoria general. Por eso suele verse como una opción interesante cuando quiero rapidez, robustez y cierta tolerancia a entrenamientos complejos o ruidosos."
        },
        {
          title: "Resumen comparativo de técnicas",
          body: "Si quisiera verlas todas en una sola foto mental, sería esta.",
          comparisonTable: {
            columns: ["Técnica", "Categoría", "Objetivo principal", "Ventaja destacada"],
            rows: [
              ["Dropout", "Regularización", "Evitar sobreajuste.", "Simple y efectiva para mejorar generalización."],
              ["L1 / L2", "Regularización", "Controlar pesos grandes o sparsity.", "Da estabilidad o selección implícita."],
              ["Learning rate scheduling", "Optimización", "Ajustar el ritmo de aprendizaje.", "Mejora convergencia y precisión."],
              ["Early Stopping", "Control del entrenamiento", "Detener antes del sobreajuste.", "Ahorra recursos y conserva la mejor época."],
              ["Lookahead", "Optimización", "Suavizar trayectoria de entrenamiento.", "Reduce oscilaciones."],
              ["Ranger", "Optimización", "Combinar rapidez y robustez.", "Muy útil en arquitecturas profundas o inestables."]
            ]
          }
        },
        {
          title: "Cómo se optimiza una red en la práctica",
          body: "Más que una técnica aislada, suele funcionar una combinación ordenada.",
          bestPractices: [
            "Partir con un optimizador base razonable como `Adam` o `SGD` bien configurado.",
            "Agregar `L2` o `Dropout` si aparecen señales de sobreajuste.",
            "Monitorear `loss` y `val_loss` desde las primeras épocas.",
            "Usar `EarlyStopping` para cortar cuando la validación deja de mejorar.",
            "Aplicar `ReduceLROnPlateau` o algún scheduler si el aprendizaje se estanca.",
            "Explorar optimizadores como `Lookahead` o `Ranger` cuando la convergencia se vuelve inestable."
          ]
        },
        {
          title: "Cómo saber si la red está bien optimizada",
          body: "No basta con ver una accuracy linda.",
          comparisonTable: {
            columns: ["Señal", "Qué indicaría"],
            rows: [
              ["`loss` baja y `val_loss` acompaña", "El modelo aprende y generaliza de forma razonable."],
              ["Train mejora mucho, validación no", "Sobreajuste probable."],
              ["Curvas muy erráticas", "Learning rate, batch o optimizador pueden estar mal calibrados."],
              ["Entrenamiento se frena sin mejorar", "Conviene scheduler, ajuste de arquitectura o revisión de datos."],
              ["Demasiadas épocas para poca mejora", "Falta eficiencia o control de entrenamiento."]
            ]
          }
        },
        {
          title: "Casos donde estas técnicas marcan diferencia",
          body: "En salud ayudan mucho cuando hay pocas muestras y necesito evitar sobreajuste. En manufactura mejoran generalización en clasificación visual con clases desbalanceadas. En finanzas aportan estabilidad frente a series ruidosas. En bioinformática ayudan a controlar redes con miles de variables. En NLP o educación digital permiten ajustar modelos sin que se vuelvan innecesariamente pesados."
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "La clase deja varios que aparecen mucho en la práctica.",
          comparisonTable: {
            columns: ["Error", "Consecuencia", "Corrección sugerida"],
            rows: [
              ["Usar Dropout sin criterio", "Modelo subentrenado o pérdida de capacidad.", "Moverse normalmente en rangos de 0.2 a 0.5 y revisar la arquitectura."],
              ["Ignorar EarlyStopping", "Sobreajuste y pérdida de tiempo.", "Usarlo con `restore_best_weights=True` y paciencia razonable."],
              ["Elegir mal la regularización", "Pesos inestables, overfitting o underfitting.", "Usar `L2` como base habitual y `L1` si realmente busco sparsity."],
              ["Pensar que entrenar más siempre ayuda", "Peor generalización en test.", "Monitorear validación y callbacks."],
              ["Confiar solo en una métrica", "Conclusiones incompletas.", "Cruzar accuracy, loss y señales de validación."]
            ]
          }
        },
        {
          title: "Cómo lo conectaría con producción real",
          body: "Optimizar una red no es solo hacerla llegar a una precisión alta. También es hacer que aprenda en tiempos razonables, que no desperdicie GPU o CPU, que no colapse con ruido, que generalice fuera del dataset inicial y que pueda mantenerse estable cuando se despliegue en un entorno real."
        },
        {
          title: "Para recordar",
          body: "Regularización y optimización son dos lados del mismo problema: uno controla qué tanto puede memorizar la red y el otro guía cómo debe aprender. `Dropout`, `L1/L2`, `EarlyStopping`, `learning rate scheduling`, `Lookahead` y `Ranger` no son adornos; son herramientas clave para que una red profunda deje de ser solo un prototipo bonito y se convierta en un modelo útil y estable."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S5 – Lectura: optimización y regularización en redes neuronales profundas</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S5 – Cuestionario Clase 5: Dropout, L1/L2, EarlyStopping, scheduling y optimizadores avanzados</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "deep-neural-network-fundamentals-and-learning-flow",
        "regularization-overfitting-and-linear-penalties",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "transfer-learning-freezing-fine-tuning-and-real-adaptation",
      slug: "transfer-learning-congelar-ajustar-y-adaptar-modelos-preentrenados",
      title: "Transfer Learning: congelar, ajustar y adaptar modelos preentrenados",
      summary: "Una guía para entender qué es `Transfer Learning`, cuándo conviene congelar capas, cuándo hacer `fine-tuning` y por qué reutilizar un modelo preentrenado puede ahorrar tiempo, datos y costo sin partir desde cero.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "14 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Transfer Learning", "Fine-Tuning", "Deep Learning"],
      featured: true,
      contentSections: [
        {
          title: "Qué es transfer learning y por qué hoy importa tanto",
          body: "`Transfer Learning` consiste en tomar un modelo ya entrenado en una tarea grande y reutilizar parte de ese conocimiento en un problema nuevo. En vez de enseñar desde cero a una red a reconocer patrones básicos, aprovecho filtros, representaciones o estructuras que ya aprendieron con datasets enormes y luego adapto solo lo necesario a mi caso real."
        },
        {
          title: "La idea más simple para recordarlo",
          body: "Si entrenar desde cero fuera como formar a alguien desde primero básico, `Transfer Learning` sería contratar a alguien que ya domina la base y solo necesita aprender el contexto específico del nuevo trabajo."
        },
        {
          title: "Por qué suele ganar frente al entrenamiento desde cero",
          body: "La gran ventaja práctica es que parte con una base ya útil.",
          comparisonTable: {
            columns: ["Criterio", "Transfer Learning", "Entrenar desde cero"],
            rows: [
              ["Tiempo de entrenamiento", "Menor.", "Mucho mayor."],
              ["Cantidad de datos requerida", "Puede funcionar bien con menos datos.", "Suele necesitar datasets grandes."],
              ["Costo computacional", "Más controlado.", "Más alto."],
              ["Riesgo inicial de mal desempeño", "Menor si el modelo base se parece a la tarea.", "Más alto hasta que la red aprende patrones básicos."],
              ["Flexibilidad total", "Media: parte de una base ya hecha.", "Alta: todo se aprende desde cero."]
            ]
          }
        },
        {
          title: "Las dos formas principales de aplicarlo",
          body: "No todo transfer learning se usa igual. En la práctica suelo moverme entre extracción de características y fine-tuning.",
          comparisonTable: {
            columns: ["Estrategia", "Qué hago", "Cuándo conviene más"],
            rows: [
              ["Extracción de características", "Congelo el modelo base y entreno solo la cabeza final.", "Cuando tengo pocos datos o quiero una solución rápida y estable."],
              ["Fine-tuning", "Descongelo parte de las capas superiores y ajusto el modelo con learning rate bajo.", "Cuando necesito adaptar mejor el modelo a mi dominio real."]
            ]
          }
        },
        {
          title: "Qué significa congelar capas",
          body: "Congelar capas significa impedir que ciertos pesos cambien durante el entrenamiento. Normalmente se congelan las capas iniciales porque ya aprendieron bordes, texturas, contrastes y patrones generales. Así evito destruir conocimiento útil y reduzco el costo de entrenamiento."
        },
        {
          title: "Qué significa hacer fine-tuning",
          body: "El `fine-tuning` consiste en descongelar una parte del modelo preentrenado, normalmente las capas más altas, para adaptarlo mejor a mi problema. La clave aquí es usar una tasa de aprendizaje más baja, porque no quiero reescribir brutalmente lo aprendido, sino refinarlo."
        },
        {
          title: "Qué capas suele convenir adaptar",
          body: "No hay una receta única, pero la lógica general suele ser esta.",
          comparisonTable: {
            columns: ["Zona del modelo", "Qué suele aprender", "Qué hago normalmente"],
            rows: [
              ["Capas iniciales", "Patrones muy generales.", "Las dejo congeladas."],
              ["Capas intermedias", "Combinaciones más complejas de patrones.", "Las evalúo según tamaño y similitud del dataset."],
              ["Capas finales", "Rasgos más cercanos a la tarea original.", "Aquí suele tener sentido ajustar o reemplazar."]
            ]
          }
        },
        {
          title: "Por qué funciona tan bien",
          body: "Funciona porque muchas tareas comparten estructura. Un modelo entrenado con millones de imágenes ya aprendió conceptos visuales que también sirven para salud, industria, agricultura o retail. Lo mismo pasa en texto, audio y otras modalidades: el modelo base no parte ciego, parte con intuición."
        },
        {
          title: "Cómo se evalúa un modelo transferido",
          body: "No basta con ver si la accuracy sube.",
          comparisonTable: {
            columns: ["Medida", "Qué reviso", "Señal útil"],
            rows: [
              ["Accuracy / precisión", "Desempeño general en validación o test.", "Sirve como referencia inicial."],
              ["Loss y val_loss", "Estabilidad del aprendizaje.", "Ayuda a detectar sobreajuste o mala convergencia."],
              ["Tiempo de entrenamiento", "Costo real de adaptar el modelo.", "Permite justificar si valió la pena reutilizarlo."],
              ["Métricas específicas", "F1, recall, AUC u otras.", "Dependen del problema real y del costo del error."],
              ["Comparación contra baseline", "Si mejora de verdad frente a entrenar simple o desde cero.", "Evita enamorarse del nombre del modelo."]
            ]
          }
        },
        {
          title: "Errores comunes que sí conviene evitar",
          body: "La clase deja varias malas prácticas muy repetidas.",
          comparisonTable: {
            columns: ["Error", "Qué problema provoca"],
            rows: [
              ["Descongelar todo desde el inicio", "Puede destruir el conocimiento base y volver inestable el entrenamiento."],
              ["Usar learning rate alto en fine-tuning", "Hace que el modelo olvide demasiado rápido lo útil."],
              ["No adaptar la cabeza final", "La salida no queda alineada con la nueva tarea."],
              ["No respetar el preprocesamiento oficial", "Los datos dejan de parecerse a lo que el modelo espera."],
              ["Elegir un modelo enorme para un caso pequeño", "Se consume más recurso del necesario sin una mejora proporcional."]
            ]
          }
        },
        {
          title: "Casos donde más se nota su valor",
          body: "`Transfer Learning` se usa mucho en visión computacional, análisis médico, clasificación de defectos industriales, reconocimiento de especies, NLP, audio, biometría y sistemas donde no tengo millones de datos propios. También es clave cuando necesito prototipos funcionales más rápido para iterar negocio, no solo investigación."
        },
        {
          title: "Cuándo sí podría no bastar",
          body: "Si mi dominio es demasiado distinto al dataset original, si necesito aprender señales muy especializadas o si tengo suficientes datos y recursos para construir algo desde cero, entonces el beneficio puede reducirse. Transfer learning ayuda mucho, pero no reemplaza el juicio técnico sobre similitud de dominio y objetivo final."
        },
        {
          title: "Para recordar",
          body: "`Transfer Learning` no es magia: es reutilización inteligente de conocimiento. Congelar capas sirve para conservar lo general. Hacer `fine-tuning` sirve para adaptar lo específico. Su mayor valor está en ahorrar tiempo, datos y costo computacional, siempre que el modelo base tenga relación real con la tarea nueva."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M7-S6 – Lectura: fundamentos, estrategias, evaluación y errores frecuentes en transfer learning</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM7S6 – Cuestionario Clase 6: congelamiento de capas, fine-tuning y adaptación de modelos preentrenados</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "modern-neural-networks-resnet-vs-efficientnet",
        "deep-neural-network-optimization-and-regularization",
        "deep-neural-network-fundamentals-and-learning-flow"
      ]
    },
    {
      id: "nlp-fundamentals-from-text-to-meaning",
      slug: "fundamentos-de-nlp-del-texto-al-significado",
      title: "Fundamentos de NLP: del texto al significado",
      summary: "Una guía base para entender qué es el `Procesamiento de Lenguaje Natural`, cómo una máquina transforma texto en números, por qué importa distinguir sintaxis y semántica, y qué papel cumplen técnicas como `Bag of Words`, `TF-IDF` y la similaridad textual.",
      category: "Machine Learning",
      type: "Guía",
      level: "basic",
      readingTime: "15 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "NLP", "TF-IDF", "Texto"],
      featured: true,
      contentSections: [
        {
          title: "Qué es NLP y por qué se siente tan cercano",
          body: "El `Procesamiento de Lenguaje Natural` (`NLP`) busca que una máquina pueda trabajar con lenguaje humano: leerlo, interpretarlo, resumirlo, clasificarlo o responder a partir de él. Por eso se siente tan cercano a cómo nos comunicamos en el día a día: correos, chats, buscadores, asistentes virtuales, traducción, análisis de opiniones y mucho más."
        },
        {
          title: "La idea más simple para recordarlo",
          body: "Si una persona escucha palabras y trata de entender intención, contexto y significado, `NLP` intenta enseñar algo parecido a una máquina, pero partiendo desde texto, patrones, estadísticas y representaciones numéricas."
        },
        {
          title: "Por qué hoy es tan relevante",
          body: "NLP no vive solo en laboratorios.",
          highlights: [
            {
              icon: "fa-solid fa-comments",
              title: "Convierte texto en información útil",
              text: "Permite clasificar mensajes, detectar temas, resumir contenido y automatizar respuestas."
            },
            {
              icon: "fa-solid fa-brain",
              title: "Conecta con muchas otras áreas de IA",
              text: "Se mezcla con machine learning, deep learning, recomendadores, motores de búsqueda y asistentes inteligentes."
            }
          ]
        },
        {
          title: "Cómo entiende una máquina el lenguaje humano",
          body: "La máquina no entiende una oración como lo hace una persona. Primero necesita convertir texto en una forma estructurada y numérica. Ese puente entre palabras y números es una de las bases más importantes de NLP, porque sin representación numérica no puede comparar, clasificar ni aprender patrones."
        },
        {
          title: "Etapas clásicas del NLP tradicional",
          body: "Antes de llegar a modelos más modernos, conviene recordar el flujo tradicional.",
          bestPractices: [
            "Limpiar el texto y normalizarlo para reducir ruido.",
            "Separar el contenido en unidades más pequeñas como palabras o tokens.",
            "Representar el texto numéricamente.",
            "Analizar frecuencia, estructura, sintaxis o relaciones semánticas.",
            "Comparar textos o entrenar modelos sobre esas representaciones."
          ]
        },
        {
          title: "Representar texto: convertir palabras en números",
          body: "Una de las primeras barreras de NLP es que las palabras no son números. Por eso necesito técnicas que traduzcan documentos, frases o términos a vectores que una máquina sí pueda procesar. Aquí aparecen enfoques como `Bag of Words`, `TF-IDF` y luego métodos más avanzados como embeddings."
        },
        {
          title: "BoW, TF-IDF y embeddings: cómo pensarlos",
          body: "No todas las representaciones capturan el texto con la misma profundidad.",
          comparisonTable: {
            columns: ["Técnica", "Qué hace", "Qué limitación tiene"],
            rows: [
              ["Bag of Words", "Cuenta apariciones de palabras en un documento.", "Pierde orden y contexto."],
              ["TF-IDF", "Pondera palabras según frecuencia local y rareza global.", "Sigue siendo una representación bastante superficial."],
              ["Embeddings", "Aprenden relaciones semánticas y cercanía entre términos.", "Requieren modelos más avanzados y más contexto técnico."]
            ]
          }
        },
        {
          title: "Sintaxis y semántica no son lo mismo",
          body: "La sintaxis mira cómo está construida la oración: orden, estructura y relaciones gramaticales. La semántica intenta acercarse al significado. Esa diferencia es muy importante porque un texto puede estar bien escrito sintácticamente y aun así ser ambiguo o cambiar de sentido según el contexto."
        },
        {
          title: "El caso clásico de palabras ambiguas",
          body: "Palabras como `banco` muestran por qué NLP no puede quedarse solo en frecuencia. Según el contexto, `banco` puede referirse a una institución financiera o a un asiento. Ahí se vuelve evidente que entender lenguaje no es solo contar palabras, sino aproximarse a intención y contexto."
        },
        {
          title: "Términos frecuentes y análisis exploratorio de texto",
          body: "Una de las formas más simples de empezar un análisis textual es revisar qué términos aparecen más veces, qué combinaciones se repiten o cómo cambian por grupo. Esto sirve para tener una primera fotografía del corpus, detectar ruido, palabras dominantes o posibles temas antes de pasar a modelos más complejos."
        },
        {
          title: "Similaridad textual: medir qué tan parecidos son dos textos",
          body: "Cuando transformo textos a vectores, ya puedo medir cercanía entre documentos. La `similaridad de coseno` es una de las métricas más comunes porque compara dirección entre vectores más que longitud. Eso ayuda a detectar textos parecidos aunque no tengan exactamente el mismo tamaño."
        },
        {
          title: "Qué técnica usaría en cada caso",
          body: "La elección depende de lo que necesito resolver.",
          comparisonTable: {
            columns: ["Necesidad", "Técnica útil", "Por qué"],
            rows: [
              ["Clasificación simple de textos", "`BoW` o `TF-IDF`", "Son rápidos, interpretables y buenos como base."],
              ["Buscar documentos parecidos", "Similaridad de coseno sobre `TF-IDF` o embeddings", "Permite comparar cercanía textual."],
              ["Capturar significado más profundo", "Embeddings y modelos más modernos", "Aprovechan mejor contexto y semántica."],
              ["EDA de comentarios o corpus", "Frecuencia de términos y n-gramas", "Dan una lectura inicial muy útil."]
            ]
          }
        },
        {
          title: "Casos de uso en la industria",
          body: "La clase aterriza muy bien que NLP no se limita a chatbots.",
          comparisonTable: {
            columns: ["Industria", "Aplicación típica", "Valor que aporta"],
            rows: [
              ["Salud", "Análisis de notas clínicas o informes.", "Ordena información textual sensible y agiliza revisión."],
              ["Finanzas", "Clasificación de riesgo o análisis documental.", "Acelera decisiones y reduce revisión manual."],
              ["E-commerce y marketing", "Análisis de reseñas y sentimiento.", "Ayuda a entender clientes y productos."],
              ["Educación", "Clasificación de respuestas abiertas.", "Escala revisión y apoyo personalizado."],
              ["Medios y redes sociales", "Detección de temas, tendencias o toxicidad.", "Permite monitoreo masivo en tiempo real."]
            ]
          }
        },
        {
          title: "Qué errores comunes conviene evitar desde el inicio",
          body: "NLP se puede complicar rápido si olvido lo básico.",
          bestPractices: [
            "No pensar que la máquina entiende palabras como una persona.",
            "No elegir el modelo antes de revisar la calidad y cantidad del texto disponible.",
            "No confundir frecuencia de términos con comprensión semántica real.",
            "No evaluar solo por exactitud si el problema tiene clases sensibles o desbalanceadas.",
            "No olvidar que lenguaje, contexto y dominio cambian mucho entre industrias."
          ]
        },
        {
          title: "Para recordar",
          body: "`NLP` busca transformar lenguaje humano en una forma que una máquina pueda analizar. El paso clave es representar el texto numéricamente. `Bag of Words` y `TF-IDF` son bases muy útiles para comenzar; la sintaxis ayuda a entender estructura y la semántica intenta acercarse al significado. Desde ahí ya puedo medir similaridad, clasificar textos, detectar temas y construir soluciones más avanzadas."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M8-S1 – Lectura: fundamentos del procesamiento de lenguaje natural, representación textual y casos de uso</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM8S1 – Cuestionario Clase 1: conceptos base de NLP, TF-IDF, similaridad y aplicaciones</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "python-vs-other-languages-for-data-work",
        "pandas-dataframes-masking-and-grouped-analysis",
        "deep-neural-network-fundamentals-and-learning-flow"
      ]
    },
    {
      id: "nlp-preprocessing-embeddings-and-transformer-based-models",
      slug: "preprocesamiento-embeddings-y-modelos-avanzados-de-nlp",
      title: "Preprocesamiento, embeddings y modelos avanzados de NLP",
      summary: "Una guía para conectar el `NLP` clásico con el moderno: cómo limpiar y normalizar texto, cuándo usar `Bag of Words`, `TF-IDF` o `word embeddings`, y por qué modelos como `BERT` y `Transformers` marcan una diferencia tan grande frente a enfoques más tradicionales.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "18 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "NLP", "BERT", "Transformers"],
      featured: true,
      contentSections: [
        {
          title: "Por qué estas dos clases conviene pensarlas juntas",
          body: "La primera enseña a preparar bien el texto y la segunda muestra qué pasa cuando ese texto llega a modelos más potentes. Juntas forman una sola historia: primero dejo el lenguaje en una forma más limpia y útil; después elijo qué nivel de representación y qué modelo necesito para extraer significado real."
        },
        {
          title: "Preprocesar no es adornar: es preparar el terreno",
          body: "En NLP, el preprocesamiento reduce ruido, homologa formatos y hace que el texto sea más consistente para el análisis. Si esta etapa está mal hecha, incluso un modelo muy potente puede aprender patrones pobres, ambiguos o directamente engañosos."
        },
        {
          title: "Técnicas básicas de limpieza y normalización",
          body: "Las decisiones cambian según el caso, pero estas son las bases más comunes.",
          comparisonTable: {
            columns: ["Técnica", "Qué hace", "Cuándo ayuda más"],
            rows: [
              ["Lowercasing", "Pasa todo a minúsculas.", "Cuando mayúsculas no aportan significado útil."],
              ["Eliminar signos o ruido", "Quita caracteres irrelevantes.", "En textos sucios, reseñas o logs textuales."],
              ["Tokenización", "Divide el texto en unidades.", "Es base para casi cualquier pipeline de NLP."],
              ["Eliminar stopwords", "Quita palabras muy frecuentes con poco contenido.", "En análisis temático o frecuencia de términos."],
              ["Lematización / stemming", "Reduce variantes de una palabra a una forma más estable.", "Cuando quiero agrupar significados parecidos."]
            ]
          }
        },
        {
          title: "Cuándo el preprocesamiento puede jugar en contra",
          body: "No toda limpieza mejora el modelo. A veces eliminar tildes, signos, emojis o palabras muy frecuentes destruye información valiosa. En análisis legal, clínico o emocional, detalles que parecen ruido pueden cambiar totalmente el sentido. Por eso preprocesar sin contexto también puede ser una mala práctica."
        },
        {
          title: "Del texto limpio a la representación vectorial",
          body: "Una vez limpio el texto, todavía necesito convertirlo a números. Ahí entran tres niveles bien recordables: conteo simple, ponderación estadística y representaciones semánticas aprendidas."
        },
        {
          title: "BoW, TF-IDF y embeddings: la escalera natural",
          body: "Si lo quisiera ordenar de más simple a más expresivo, sería así.",
          comparisonTable: {
            columns: ["Representación", "Qué captura", "Límite principal"],
            rows: [
              ["Bag of Words", "Frecuencia de palabras.", "Ignora orden y contexto."],
              ["TF-IDF", "Importancia relativa de las palabras.", "Sigue siendo poco contextual."],
              ["Word Embeddings", "Cercanía semántica entre palabras.", "Aún puede quedarse corto en polisemia contextual."],
              ["Transformers / BERT", "Contexto dinámico según la oración completa.", "Requiere más cómputo y ajuste técnico."]
            ]
          }
        },
        {
          title: "Word embeddings: cuando el significado empieza a importar más",
          body: "Los `word embeddings` representan palabras como vectores donde cercanía geométrica sugiere similitud semántica. Eso permite que la máquina deje de ver solo frecuencia y empiece a relacionar conceptos. Así, palabras como `doctor` y `médico` terminan más cerca que `doctor` y `árbol`, aunque las tres sean solo texto para un conteo básico."
        },
        {
          title: "El gran salto: autoatención",
          body: "La `self-attention` permite que una palabra mire a las demás dentro de la misma secuencia para decidir qué tan relevantes son en su interpretación. Eso cambia mucho el juego, porque el significado de una palabra ya no depende solo de verla aislada, sino de qué otras la rodean y cómo se relacionan."
        },
        {
          title: "Qué vuelve especial a BERT",
          body: "`BERT` (`Bidirectional Encoder Representations from Transformers`) procesa el contexto mirando a ambos lados de la palabra dentro de la oración. Eso le permite capturar significados más finos y resolver mejor ambigüedades que los modelos tradicionales o embeddings estáticos. En simple: ya no solo representa palabras, sino palabras dentro de su contexto."
        },
        {
          title: "Diferencia frente al NLP más tradicional",
          body: "Esta comparación ayuda mucho a no mezclar enfoques.",
          comparisonTable: {
            columns: ["Aspecto", "NLP tradicional", "Modelos avanzados como BERT"],
            rows: [
              ["Contexto", "Muy limitado o indirecto.", "Se modela explícitamente dentro de la secuencia."],
              ["Representación", "BoW, TF-IDF o embeddings estáticos.", "Representaciones contextuales profundas."],
              ["Interpretación de ambigüedad", "Más difícil.", "Mejor manejo del sentido según la oración."],
              ["Costo computacional", "Más bajo.", "Más alto."],
              ["Potencia en tareas complejas", "Buena como base.", "Mucho mejor en comprensión fina del texto."]
            ]
          }
        },
        {
          title: "Hugging Face: el puente práctico hacia estos modelos",
          body: "`Hugging Face Transformers` se volvió una de las puertas más cómodas para usar modelos avanzados de NLP. Facilita cargar tokenizadores, modelos preentrenados y pipelines de tareas como clasificación, embeddings, análisis de sentimiento, resumen o extracción de información sin tener que construir todo desde cero."
        },
        {
          title: "Cuándo usaría cada nivel de solución",
          body: "No todos los problemas necesitan un transformer gigante.",
          comparisonTable: {
            columns: ["Escenario", "Qué usaría primero", "Por qué"],
            rows: [
              ["Clasificación simple con pocos recursos", "`TF-IDF` + modelo clásico", "Es rápido, interpretable y barato."],
              ["Detección de similitud textual", "Embeddings o coseno sobre buenas representaciones", "Aporta noción de cercanía semántica."],
              ["Análisis multilingüe o contexto fino", "`BERT` o transformer similar", "Entiende mejor contexto y matices."],
              ["Prototipado rápido con modelos preentrenados", "`Hugging Face`", "Acelera pruebas reales sin partir de cero."]
            ]
          }
        },
        {
          title: "Sectores donde esto se nota mucho",
          body: "Las clases aterrizan bien cómo cambia según el dominio.",
          comparisonTable: {
            columns: ["Sector", "Qué aporta el preprocesamiento", "Qué aportan los modelos avanzados"],
            rows: [
              ["Salud", "Estandarizar términos clínicos.", "Entender mejor contexto médico y entidades sensibles."],
              ["LegalTech", "Ordenar cláusulas y formatos repetitivos.", "Extraer relaciones más complejas entre secciones."],
              ["E-commerce", "Limpiar reseñas y comentarios.", "Captar sentimiento, matices y lenguaje informal."],
              ["Educación", "Normalizar respuestas abiertas.", "Evaluar contenido con mejor comprensión contextual."],
              ["Redes sociales", "Reducir ruido extremo y abreviaturas.", "Manejar ironía parcial, temas y clasificación más robusta."]
            ]
          }
        },
        {
          title: "Errores comunes y mitos que conviene borrar",
          body: "Aquí hay varias trampas típicas.",
          bestPractices: [
            "No creer que un modelo preentrenado arregla texto mal preparado por arte de magia.",
            "No aplicar limpieza agresiva sin pensar si destruye significado.",
            "No asumir que `BERT` siempre es la mejor opción si el problema era resoluble con algo más simple.",
            "No olvidar costo computacional, latencia y mantenimiento al elegir transformers.",
            "No evaluar una técnica solo porque suena moderna: primero hay que mirar el problema real."
          ]
        },
        {
          title: "Para recordar",
          body: "El NLP moderno no reemplaza por completo al tradicional: lo extiende. Primero preparo bien el texto con limpieza y normalización. Luego lo represento con el nivel de profundidad que el caso exige: `BoW`, `TF-IDF`, embeddings o modelos contextuales como `BERT`. La gran diferencia de los transformers está en que ya no leen palabras aisladas, sino relaciones dentro de toda la secuencia."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M8-S2 – Lectura: técnicas de preprocesamiento de texto, normalización, embeddings y librerías en NLP</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM8S2 – Cuestionario Clase 2: limpieza, tokenización, embeddings y buenas prácticas en NLP</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Sesión 3 – Modelos avanzados de NLP: autoatención, BERT, Hugging Face y aplicaciones reales</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM8S3 – Cuestionario Clase 3: modelos avanzados de NLP, transformers y usos aplicados</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "nlp-fundamentals-from-text-to-meaning",
        "transfer-learning-freezing-fine-tuning-and-real-adaptation",
        "deep-neural-network-fundamentals-and-learning-flow"
      ]
    },
    {
      id: "nlp-model-evaluation-metrics-and-good-practices",
      slug: "evaluacion-de-modelos-nlp-metricas-y-buenas-practicas",
      title: "Evaluación de modelos NLP: métricas y buenas prácticas",
      summary: "Una guía para entender cómo se evalúan de verdad los modelos de `NLP`, qué métricas conviene usar según la tarea, por qué `accuracy` no siempre basta y cómo leer resultados de clasificación, generación de texto y similaridad semántica sin caer en conclusiones engañosas.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "NLP", "Métricas", "Evaluación"],
      featured: true,
      contentSections: [
        {
          title: "Por qué evaluar en NLP no es solo mirar accuracy",
          body: "En NLP una métrica alta no siempre significa que el modelo realmente entienda, generalice o sirva para el negocio. Todo depende de la tarea: clasificar textos, generar contenido, medir similaridad o detectar intención no se evalúa igual. Por eso esta parte es tan importante: define cómo interpreto si el modelo aporta valor real o solo se ve bonito en una tabla."
        },
        {
          title: "Qué es una métrica de evaluación",
          body: "Una métrica es una forma concreta de medir el rendimiento del modelo frente al objetivo que quiero resolver. No es lo mismo medir cuántas veces acierta una clase que medir qué tan bien redacta un resumen, qué tan parecidos considera dos textos o si está dejando pasar clases críticas."
        },
        {
          title: "Primera regla de oro: la métrica depende de la tarea",
          body: "No existe una única métrica reina para todo NLP.",
          comparisonTable: {
            columns: ["Tipo de tarea", "Qué quiero medir", "Métricas más útiles"],
            rows: [
              ["Clasificación de texto", "Acierto por clase y balance general.", "`Accuracy`, `Precision`, `Recall`, `F1`."],
              ["Generación de texto", "Calidad, cercanía y cobertura respecto al texto esperado.", "`BLEU`, `ROUGE`, `METEOR`."],
              ["Similaridad o embeddings", "Qué tan cerca están dos textos en significado.", "Coseno, distancia euclidiana, correlaciones."],
              ["Tareas específicas", "Fenómenos puntuales del dominio.", "Métricas personalizadas según el caso."]
            ]
          }
        },
        {
          title: "Clasificación de texto: las métricas que sí debo recordar",
          body: "Cuando un modelo etiqueta textos, opiniones, intenciones o categorías, las métricas más comunes siguen siendo las derivadas de la matriz de confusión.",
          comparisonTable: {
            columns: ["Métrica", "Qué responde", "Cuándo pesa más"],
            rows: [
              ["Accuracy", "¿Cuántos casos acerté en total?", "Cuando las clases están relativamente balanceadas."],
              ["Precision", "De lo que predije como positivo, ¿cuánto era correcto?", "Cuando me importa no llenarme de falsos positivos."],
              ["Recall", "De los positivos reales, ¿cuántos encontré?", "Cuando me importa no dejar pasar casos importantes."],
              ["F1-score", "¿Cómo balanceo precision y recall?", "Cuando necesito una visión más justa en clases desbalanceadas."]
            ]
          }
        },
        {
          title: "Por qué accuracy puede engañar",
          body: "Si tengo una clase muy dominante, el modelo puede acertar mucho solo repitiendo la clase mayoritaria. En un clasificador de spam, fraude, intención crítica o riesgo, eso puede dejar una accuracy alta pero un rendimiento malísimo justo donde más importa. Ahí `F1`, `precision` y `recall` suelen dar una lectura mucho más honesta."
        },
        {
          title: "Generación de texto: no se mide igual que clasificación",
          body: "Cuando el modelo genera texto, no basta con preguntar si 'acertó' una etiqueta. Aquí necesito comparar calidad de salida respecto a referencias humanas o esperadas.",
          comparisonTable: {
            columns: ["Métrica", "Qué observa", "Uso típico"],
            rows: [
              ["BLEU", "Coincidencia de n-gramas con texto de referencia.", "Traducción automática y generación controlada."],
              ["ROUGE", "Cobertura de contenido relevante frente a una referencia.", "Resumen automático."],
              ["METEOR", "Coincidencia flexible considerando variantes y alineación.", "Evaluación más semántica que BLEU en algunos contextos."]
            ]
          }
        },
        {
          title: "Embeddings y similaridad semántica",
          body: "Cuando comparo representaciones vectoriales de texto, las métricas cambian otra vez. Ya no estoy evaluando etiquetas o frases generadas, sino la cercanía semántica entre textos, preguntas, respuestas o documentos."
        },
        {
          title: "Métricas útiles para similaridad textual",
          body: "Estas son las más recordables para esa línea.",
          comparisonTable: {
            columns: ["Métrica", "Qué mira", "Cuándo conviene"],
            rows: [
              ["Similaridad de coseno", "Dirección entre vectores.", "Cuando me importa la cercanía semántica relativa."],
              ["Distancia euclidiana", "Separación geométrica absoluta.", "Cuando la escala también tiene sentido."],
              ["Correlación", "Alineación entre patrones de valores.", "Cuando comparo rankings o consistencia entre embeddings."]
            ]
          }
        },
        {
          title: "Qué sectores muestran mejor esta diferencia",
          body: "La clase aterriza muy bien que el contexto cambia la evaluación.",
          comparisonTable: {
            columns: ["Sector", "Tarea común", "Métrica que suele pesar más"],
            rows: [
              ["Salud", "Clasificación de notas clínicas.", "`Recall` y `F1`, porque perder casos sensibles puede ser grave."],
              ["Legal", "Detección o clasificación de cláusulas.", "`Precision` y `F1`, para no mezclar categorías críticas."],
              ["E-commerce", "Análisis de sentimiento.", "`F1` y revisión por clase, porque suele haber desbalance."],
              ["Asistentes virtuales", "Clasificación de intención.", "`Accuracy` + `F1`, según diversidad de intenciones."],
              ["Educación", "Clasificación o evaluación de respuestas.", "Combinación de métricas y validación cualitativa."]
            ]
          }
        },
        {
          title: "Buenas prácticas que sí conviene fijar",
          body: "No se trata solo de calcular métricas, sino de interpretarlas bien.",
          bestPractices: [
            "Elegir la métrica en función del problema y no de costumbre.",
            "Usar más de una métrica cuando el problema lo exige.",
            "Mirar el desempeño por clase y no solo el promedio global.",
            "Complementar la evaluación numérica con ejemplos reales de errores.",
            "Alinear la métrica con el costo real del error para el negocio."
          ]
        },
        {
          title: "Errores comunes y mitos",
          body: "La sesión remarca varias trampas muy típicas.",
          comparisonTable: {
            columns: ["Error o mito", "Por qué es problemático"],
            rows: [
              ["Confiar solo en accuracy", "Puede ocultar fallos graves en clases minoritarias."],
              ["Pensar que una métrica alta basta", "No siempre refleja utilidad real ni generalización."],
              ["No adaptar la métrica a la tarea", "Comparo mal el desempeño y saco conclusiones pobres."],
              ["Creer que modelos grandes siempre ganan", "A veces cuestan más y no mejoran lo que de verdad importa."],
              ["Usar una sola métrica para todo", "Reduce demasiado la lectura del modelo."]
            ]
          }
        },
        {
          title: "Cómo leería una evaluación de NLP de forma madura",
          body: "Primero preguntaría qué tarea resolvía el modelo. Después revisaría si la métrica elegida tiene sentido para ese objetivo. Luego miraría resultados globales, resultados por clase, errores reales y posibles sesgos. Recién ahí concluiría si el modelo es bueno. Esa secuencia evita caer en el clásico autoengaño de confundir un número alto con una solución útil."
        },
        {
          title: "Para recordar",
          body: "Evaluar un modelo de NLP significa medirlo con la métrica correcta para la tarea correcta. `Accuracy` puede servir, pero muchas veces se queda corta. En clasificación suelen pesar `Precision`, `Recall` y `F1`; en generación aparecen `BLEU`, `ROUGE` o `METEOR`; y en embeddings importan métricas de similaridad. La mejor evaluación no es la que da el número más lindo, sino la que describe con más honestidad cómo se comporta el modelo en el problema real."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M8-S4 – Lectura: evaluación de modelos NLP, métricas por tarea, errores comunes y buenas prácticas</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM8S4 – Cuestionario Clase 4: métricas de clasificación, generación y similaridad en NLP</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "nlp-fundamentals-from-text-to-meaning",
        "nlp-preprocessing-embeddings-and-transformer-based-models",
        "cross-validation-and-model-evaluation-in-practice"
      ]
    },
    {
      id: "ethical-nlp-bias-transparency-and-human-review",
      slug: "nlp-etico-sesgos-transparencia-y-revision-humana",
      title: "NLP ético: sesgos, transparencia y revisión humana",
      summary: "Una guía para entender por qué un modelo de `NLP` no se vuelve justo solo por tener buena métrica, cómo detectar sesgos, qué principios éticos conviene aplicar y por qué fenómenos como ironía o sarcasmo también pueden distorsionar resultados si no se consideran en la evaluación.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "15 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "NLP", "Ética", "Sesgos"],
      featured: true,
      contentSections: [
        {
          title: "Por qué la ética en NLP no es un detalle extra",
          body: "Cuando un modelo trabaja con lenguaje humano, no solo clasifica texto: también puede amplificar prejuicios, interpretar mal grupos sociales, invisibilizar contextos o tomar decisiones injustas si fue entrenado o desplegado sin cuidado. Por eso en NLP la ética no va después del modelo; va metida dentro de cómo recolecto datos, entreno, evalúo y monitoreo."
        },
        {
          title: "Qué es un sesgo en NLP",
          body: "Un sesgo aparece cuando el modelo favorece, castiga o representa de forma desigual a ciertos grupos, expresiones, idiomas o contextos. A veces viene del dataset, a veces del etiquetado, a veces del modelo y muchas veces del sistema completo en que se usa."
        },
        {
          title: "Tipos de sesgo que más conviene recordar",
          body: "No todos los sesgos nacen del mismo lugar.",
          comparisonTable: {
            columns: ["Tipo de sesgo", "Dónde aparece", "Qué problema causa"],
            rows: [
              ["Sesgo en datos", "Corpus, recolección o muestreo.", "El modelo aprende una realidad incompleta o distorsionada."],
              ["Sesgo de etiquetado", "Anotación humana o criterios poco consistentes.", "La verdad de referencia ya viene torcida."],
              ["Sesgo del modelo", "Arquitectura, embeddings o entrenamiento.", "Reproduce asociaciones injustas o atajos pobres."],
              ["Sesgo de despliegue", "Uso real fuera del entorno de entrenamiento.", "El modelo falla distinto según contexto, grupo o idioma."]
            ]
          }
        },
        {
          title: "Buena accuracy no significa que el modelo sea justo",
          body: "Ese es uno de los mitos más peligrosos. Un modelo puede verse muy bien en métricas globales y aun así tratar peor a ciertos grupos, dialectos, géneros, regiones o estilos de escritura. La ética exige revisar desempeño por subgrupos y no solo un promedio general bonito."
        },
        {
          title: "Cómo se detectan los sesgos",
          body: "La detección no es solo técnica ni solo estadística; también es contextual.",
          bestPractices: [
            "Comparar desempeño del modelo por subgrupos relevantes.",
            "Revisar matrices de confusión separadas por grupo o contexto.",
            "Inspeccionar ejemplos reales donde el modelo falla de forma repetitiva.",
            "Evaluar si el dataset representa bien acentos, registros, géneros o idiomas.",
            "Incluir revisión humana cuando el impacto del error es sensible."
          ]
        },
        {
          title: "Principios éticos que sí conviene fijar",
          body: "La clase empuja una idea bien sana: no basta con optimizar, también hay que responder por el efecto del sistema.",
          comparisonTable: {
            columns: ["Principio", "Qué propone", "Cómo se aterriza en NLP"],
            rows: [
              ["Justicia", "Reducir tratamientos desiguales injustificados.", "Revisar sesgos por grupo o contexto lingüístico."],
              ["Transparencia", "Explicar límites, datos y comportamiento.", "Documentar corpus, métricas y riesgos del modelo."],
              ["Responsabilidad", "Asumir consecuencias del uso.", "No desplegar a ciegas ni esconder errores críticos."],
              ["Supervisión humana", "No delegar todo en la máquina.", "Mantener revisión humana en casos sensibles o ambiguos."]
            ]
          }
        },
        {
          title: "Mitigar sesgos: qué sí se puede hacer",
          body: "No existe un botón mágico, pero sí varias palancas útiles.",
          comparisonTable: {
            columns: ["Etapa", "Acción de mitigación", "Valor que aporta"],
            rows: [
              ["Recolección", "Construir datasets más diversos y balanceados.", "Reduce representación incompleta."],
              ["Etiquetado", "Definir criterios claros y auditar consistencia.", "Baja ruido humano y ambigüedad."],
              ["Entrenamiento", "Monitorear sesgo por subgrupos.", "Evita confiar solo en la métrica global."],
              ["Despliegue", "Seguir auditando resultados en producción.", "Detecta degradación o nuevos sesgos contextuales."],
              ["Operación", "Comunicar límites del modelo.", "Aumenta transparencia y uso responsable."]
            ]
          }
        },
        {
          title: "El sarcasmo también importa",
          body: "Tu observación acá suma muchísimo: fenómenos como ironía, sarcasmo, dobles sentidos o humor pueden alterar por completo el significado de una frase. Un comentario como 'sí, excelente servicio, me dejaron esperando tres horas' puede parecer positivo si el modelo solo mira palabras aisladas. Si no considero estos casos en testeo y evaluación, puedo inflar métricas o interpretar mal el sentimiento real."
        },
        {
          title: "Dónde el sarcasmo y la ambigüedad pegan más fuerte",
          body: "No afecta todas las tareas por igual.",
          comparisonTable: {
            columns: ["Tarea NLP", "Riesgo con sarcasmo o ironía", "Qué haría para cuidarlo"],
            rows: [
              ["Análisis de sentimiento", "Puede invertir completamente la polaridad.", "Agregar ejemplos irónicos al test y revisar errores manualmente."],
              ["Moderación de contenido", "Puede esconder agresión o burla indirecta.", "Combinar reglas, contexto y validación humana."],
              ["Asistentes conversacionales", "Puede responder fuera de tono.", "Agregar contexto conversacional y fallback seguro."],
              ["Análisis de reseñas", "Puede subestimar frustración real del cliente.", "Auditar ejemplos ambiguos y no depender solo de keywords."]
            ]
          }
        },
        {
          title: "Sectores donde un NLP ético pesa más",
          body: "La clase lo aterriza muy bien por industria.",
          comparisonTable: {
            columns: ["Sector", "Riesgo ético principal", "Qué conviene cuidar más"],
            rows: [
              ["Salud", "Clasificar mal información sensible.", "Sesgos por población y revisión humana."],
              ["Legal", "Interpretar mal cláusulas o lenguaje jurídico.", "Transparencia y validación fuerte por expertos."],
              ["E-commerce", "Leer mal reseñas o reclamos.", "Sarcasmo, lenguaje informal y desbalance."],
              ["Multilingüismo", "Tratar peor ciertos idiomas o variantes.", "Representación diversa y evaluación por idioma."]
            ]
          }
        },
        {
          title: "Errores comunes y mitos",
          body: "La sesión enumera varias ideas peligrosas que conviene borrar rápido.",
          comparisonTable: {
            columns: ["Mito o error", "Por qué es problemático"],
            rows: [
              ["Si la accuracy es alta, el modelo es ético", "Puede ocultar sesgos por subgrupo."],
              ["Los sesgos viven solo en los datos", "También aparecen en el modelo, el uso y el despliegue."],
              ["Si el dataset es grande, ya no hay sesgo", "Escala no garantiza diversidad ni justicia."],
              ["Detectar sesgos es solo una tarea técnica", "También requiere contexto, dominio y criterio humano."],
              ["Solo importa mitigar sesgos en entrenamiento", "El despliegue también cambia el comportamiento real."]
            ]
          }
        },
        {
          title: "Qué evitar sí o sí antes de desplegar",
          body: "Si quisiera resumir la clase en una alerta práctica, sería esta.",
          bestPractices: [
            "No ignorar sesgos desde la recolección de datos.",
            "No entrenar sin revisar desempeño por subgrupos.",
            "No desplegar modelos sin monitoreo continuo.",
            "No ocultar límites, supuestos ni errores conocidos.",
            "No reemplazar toda evaluación humana en tareas sensibles."
          ]
        },
        {
          title: "Para recordar",
          body: "Un modelo de NLP ético no es el que solo acierta mucho, sino el que también reduce sesgos, comunica sus límites, incorpora revisión humana cuando hace falta y se monitorea después del despliegue. Además, si quiero una evaluación más fiel, debo considerar fenómenos difíciles como sarcasmo, ironía, ambigüedad y contexto cultural, porque también afectan cómo el lenguaje expresa intención real."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>M8-S5 – Lectura: ética en NLP, sesgos, mitigación, transparencia y monitoreo</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM8S5 – Cuestionario Clase 5: sesgos, principios éticos y despliegue responsable en NLP</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "nlp-model-evaluation-metrics-and-good-practices",
        "nlp-preprocessing-embeddings-and-transformer-based-models",
        "open-data-privacy-and-ethics"
      ]
    },
    {
      id: "xai-with-lime-and-shap-for-model-interpretation",
      slug: "xai-con-lime-y-shap-para-interpretar-modelos",
      title: "XAI con LIME y SHAP: cómo interpretar modelos de IA",
      summary: "Una guía para entender por qué la explicabilidad importa en IA, qué diferencias reales hay entre `LIME` y `SHAP`, cuándo conviene usar cada enfoque y qué cuidados éticos y legales debo considerar antes de confiar en una explicación automática.",
      category: "Machine Learning",
      type: "Comparativa",
      level: "advanced",
      readingTime: "17 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "XAI", "LIME", "SHAP"],
      featured: true,
      contentSections: [
        {
          title: "Por qué ya no basta con que el modelo acierte",
          body: "A medida que los modelos se vuelven más complejos, también se vuelven más opacos. En salud, finanzas, justicia, educación o riesgo crediticio no basta con decir 'el modelo predijo esto'; también necesito entender por qué lo hizo. Ahí entra la `IA explicable` o `XAI`, que busca traducir parte del comportamiento del modelo a una lógica más interpretable para humanos."
        },
        {
          title: "Interpretabilidad y explicabilidad no son exactamente lo mismo",
          body: "La interpretabilidad suele apuntar a modelos que ya son comprensibles por diseño, como una regresión lineal o un árbol pequeño. La explicabilidad aparece cuando el modelo es más complejo y necesito herramientas externas para aproximarme a sus decisiones. `LIME` y `SHAP` viven justamente en ese segundo mundo."
        },
        {
          title: "Qué hacen LIME y SHAP en simple",
          body: "Las dos técnicas intentan responder la misma gran pregunta: qué variables empujaron una predicción. Pero no llegan ahí del mismo modo.",
          comparisonTable: {
            columns: ["Método", "Idea central", "Qué entrega mejor"],
            rows: [
              ["LIME", "Aproxima localmente el comportamiento del modelo cerca de un caso específico.", "Explicaciones locales rápidas e intuitivas."],
              ["SHAP", "Usa valores inspirados en teoría de juegos para repartir contribuciones entre variables.", "Explicaciones locales y globales más consistentes."]
            ]
          }
        },
        {
          title: "Qué es LIME",
          body: "`LIME` (`Local Interpretable Model-agnostic Explanations`) crea pequeñas perturbaciones alrededor de un caso y ajusta un modelo interpretable local para ver qué variables parecen mover más la predicción. Su foco está en explicar un caso puntual, no necesariamente el comportamiento total del modelo."
        },
        {
          title: "Qué es SHAP",
          body: "`SHAP` (`Shapley Additive Explanations`) reparte la contribución de cada variable usando una lógica inspirada en los valores de Shapley de teoría de juegos. Eso permite estimar cuánto aporta cada variable a una predicción y también construir lecturas globales del modelo con más estabilidad conceptual."
        },
        {
          title: "La diferencia clave entre ambos",
          body: "Si quisiera recordarlo rápido: `LIME` explica por aproximación local y `SHAP` por contribución aditiva más estructurada. `LIME` suele ser más liviano para revisar casos puntuales; `SHAP` suele dar una base más sólida cuando quiero comparar importancias, consistencia y visión más global."
        },
        {
          title: "LIME vs SHAP en una tabla útil",
          body: "Esta es probablemente la comparación que más conviene tener a mano.",
          comparisonTable: {
            columns: ["Criterio", "LIME", "SHAP"],
            rows: [
              ["Enfoque", "Explicación local aproximada.", "Explicación basada en contribuciones Shapley."],
              ["Cobertura", "Principalmente local.", "Local y global."],
              ["Velocidad", "Suele ser más rápido en ejemplos simples.", "Puede ser más costoso computacionalmente."],
              ["Consistencia", "Puede variar más según perturbaciones.", "Tiende a ser más estable conceptualmente."],
              ["Interpretación visual", "Muy útil para casos puntuales.", "Muy fuerte en summary plots y análisis global."],
              ["Cuándo suele lucir más", "Auditar una predicción concreta.", "Entender patrones del modelo y comparar variables."]
            ]
          }
        },
        {
          title: "Cuándo usaría cada uno",
          body: "No es una competencia absoluta; depende del objetivo.",
          comparisonTable: {
            columns: ["Escenario", "Qué usaría primero", "Por qué"],
            rows: [
              ["Quiero explicar un caso individual a alguien no técnico", "LIME", "Suele ser más directo para explicaciones locales simples."],
              ["Quiero ver impacto de variables en muchas predicciones", "SHAP", "Da una lectura más rica del comportamiento general."],
              ["Necesito comparar contribuciones entre variables con más base teórica", "SHAP", "La lógica aditiva ayuda más."],
              ["Necesito una herramienta rápida para prototipar explicaciones", "LIME", "Permite comenzar con menos carga conceptual."]
            ]
          }
        },
        {
          title: "Dónde se usan de verdad",
          body: "Las clases aterrizan muy bien varios sectores.",
          comparisonTable: {
            columns: ["Sector", "Uso típico", "Por qué la explicación importa"],
            rows: [
              ["Salud", "Diagnóstico o triage asistido.", "No basta con predecir; hay que justificar señales relevantes."],
              ["Finanzas", "Aprobación o rechazo de crédito.", "La persona afectada necesita criterios más transparentes."],
              ["Justicia / legal", "Modelos de riesgo o clasificación documental.", "Una mala explicación puede legitimar decisiones injustas."],
              ["Opiniones médicas o sentimiento", "Revisar qué palabras empujan una clasificación.", "Ayuda a detectar atajos, ruido o sesgos."]
            ]
          }
        },
        {
          title: "Qué beneficios sí aportan",
          body: "Usadas con criterio, estas herramientas ayudan bastante.",
          bestPractices: [
            "Aumentan confianza y transparencia frente a usuarios o stakeholders.",
            "Permiten detectar variables dominantes o sospechosas.",
            "Ayudan a descubrir sesgos o atajos del modelo.",
            "Facilitan depuración cuando una predicción parece absurda.",
            "Abren una conversación más responsable sobre despliegue de IA."
          ]
        },
        {
          title: "Qué límites no debo olvidar",
          body: "Una explicación no es la verdad absoluta del modelo.",
          comparisonTable: {
            columns: ["Límite", "Por qué importa"],
            rows: [
              ["La explicación es una aproximación", "No reemplaza comprender el pipeline completo."],
              ["Puede depender del contexto de entrada", "Una misma variable no pesa igual en todos los casos."],
              ["Puede inducir falsa confianza", "Ver un gráfico bonito no significa que el modelo sea justo o correcto."],
              ["Tiene costo computacional o sensibilidad técnica", "Especialmente en `SHAP`, según el modelo y tamaño de datos."]
            ]
          }
        },
        {
          title: "Buenas prácticas al usar LIME y SHAP",
          body: "La clase deja varias ideas sanas para no usarlos a ciegas.",
          bestPractices: [
            "No usar explicaciones sin revisar primero calidad del modelo base.",
            "Comparar varias predicciones y no quedarse con un solo ejemplo llamativo.",
            "Cruzar explicación local con métricas globales y revisión de errores.",
            "Verificar que las variables influyentes tengan sentido de negocio o dominio.",
            "Usar evaluación humana en contextos sensibles."
          ]
        },
        {
          title: "Ética y legalidad: la explicación también tiene responsabilidad",
          body: "Acá está la parte más delicada: explicar un modelo no lo vuelve automáticamente ético ni legalmente seguro. En decisiones de alto impacto, la organización debe poder justificar por qué usa el modelo, qué datos procesó, qué límites tiene y cómo evita daño injustificado. La explicabilidad ayuda, pero no reemplaza gobernanza, documentación, consentimiento, monitoreo ni revisión humana."
        },
        {
          title: "Qué riesgos éticos y legales tendría presentes",
          body: "Esta es la tabla que más conviene guardar cuando el modelo toca personas reales.",
          comparisonTable: {
            columns: ["Riesgo", "Qué puede pasar", "Qué haría para mitigarlo"],
            rows: [
              ["Falsa sensación de transparencia", "Creer que por tener explicación el modelo ya es confiable.", "Combinar explicabilidad con auditoría, métricas y revisión humana."],
              ["Sesgos ocultos", "La explicación puede mostrar variables influyentes injustas o proxies sensibles.", "Revisar subgrupos y fairness de forma explícita."],
              ["Uso indebido de datos", "Explicar decisiones sobre datos sensibles puede exponer información delicada.", "Aplicar minimización, anonimización y control de acceso."],
              ["Incumplimiento regulatorio", "En sectores regulados puede no bastar con una caja negra sin justificación.", "Documentar modelo, datos, límites y criterios de uso."],
              ["Sobredependencia operativa", "El equipo puede delegar decisiones humanas críticas al modelo.", "Mantener supervisión humana y protocolos de excepción."]
            ]
          }
        },
        {
          title: "Mitos que conviene borrar",
          body: "Estas clases también derriban varias ideas tramposas.",
          comparisonTable: {
            columns: ["Mito", "Realidad"],
            rows: [
              ["Si puedo explicarlo, entonces es justo", "No: una explicación puede revelar justamente que es injusto."],
              ["Un modelo grande siempre explica mejor", "No necesariamente; a veces solo complica más la lectura."],
              ["LIME y SHAP reemplazan la evaluación del modelo", "No: complementan, no sustituyen."],
              ["La explicabilidad es solo un tema técnico", "También es un tema ético, legal y de negocio."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "`LIME` y `SHAP` no son IAs que evalúan todo por sí solas, sino herramientas de `XAI` para interpretar cómo un modelo llega a una predicción. `LIME` brilla más en explicaciones locales rápidas; `SHAP` suele dar una visión más consistente y también global. Pero ninguna explicación sirve sola: debe ir acompañada de métricas, auditoría de sesgos, contexto de negocio, revisión humana y cuidado ético-legal."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM9S1 – Presentación: fundamentos de interpretabilidad y explicabilidad, comparación entre LIME y SHAP</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM9S1 – Cuestionario Clase 1: interpretabilidad, explicabilidad y casos de uso</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM9S2 – Presentación: LIME, fundamentos técnicos, implementación y consideraciones éticas</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM9S2 – Cuestionario Clase 2: LIME, ventajas, límites y análisis de coherencia</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM9S3 – Presentación: SHAP, explicaciones globales, buenas prácticas y aplicación por sector</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM9S3 – Cuestionario Clase 3: SHAP, interpretabilidad y uso responsable</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "ethical-nlp-bias-transparency-and-human-review",
        "cross-validation-and-model-evaluation-in-practice",
        "deep-neural-network-fundamentals-and-learning-flow"
      ]
    },
    {
      id: "how-to-share-and-deploy-machine-learning-models",
      slug: "como-compartir-y-desplegar-modelos-de-machine-learning",
      title: "Cómo compartir y desplegar modelos de Machine Learning",
      summary: "Una guía resumen para entender cómo un modelo pasa del notebook al uso real: `API REST`, serialización, `Docker`, `Kubernetes`, `CI/CD`, `MLOps` y plataformas cloud, con foco en qué hace cada capa y por qué no basta con solo entrenar el modelo.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "18 min",
      updatedAt: "2026-08-04",
      tags: ["Machine Learning", "Despliegue", "Docker", "MLOps"],
      featured: true,
      contentSections: [
        {
          title: "La idea central: entrenar no es lo mismo que compartir",
          body: "Un modelo puede funcionar perfecto dentro de un notebook y aun así no servirle a nadie si no logro exponerlo, empaquetarlo, escalarlo, monitorearlo y mantenerlo. Este bloque completo trata justamente de eso: cómo convertir un modelo en un servicio usable por otras personas, sistemas o productos."
        },
        {
          title: "La ruta más simple para recordarlo",
          body: "Si quisiera guardarlo como pipeline mental, lo resumiría así.",
          bestPractices: [
            "Entreno y valido el modelo.",
            "Lo serializo para poder reutilizarlo.",
            "Lo expongo mediante una API.",
            "Lo empaqueto en un contenedor para que funcione igual en distintos entornos.",
            "Si necesito escala, lo orquesto con Kubernetes.",
            "Si quiero automatizar todo el ciclo, entro a CI/CD, MLOps y nube."
          ]
        },
        {
          title: "Paso 1: serializar el modelo",
          body: "Serializar significa guardar el modelo entrenado en un formato reutilizable para poder cargarlo después sin volver a entrenar. Es el primer paso real para compartirlo, porque transforma un objeto de memoria en un artefacto portable."
        },
        {
          title: "Paso 2: exponerlo con una API REST",
          body: "Una `API REST` permite que otras aplicaciones envíen datos al modelo y reciban predicciones como respuesta. En términos simples, actúa como la puerta de entrada al modelo. `Flask` aparece mucho aquí porque permite construir endpoints predictivos rápidos, especialmente para prototipos y servicios livianos."
        },
        {
          title: "Qué hace cada parte en una API de modelo",
          body: "Esta tabla resume bien el primer bloque.",
          comparisonTable: {
            columns: ["Parte", "Qué hace", "Por qué importa"],
            rows: [
              ["Modelo serializado", "Guarda el conocimiento entrenado.", "Permite recargarlo sin reentrenar."],
              ["Framework como Flask", "Crea la app web o API.", "Expone el modelo a otros sistemas."],
              ["Endpoint predictivo", "Recibe datos y devuelve predicciones.", "Es la interfaz de uso real."],
              ["Herramientas de prueba", "Postman, curl u otros clientes.", "Sirven para validar que el servicio responde bien."]
            ]
          }
        },
        {
          title: "Paso 3: empaquetarlo con Docker",
          body: "`Docker` mete el modelo, la API, las dependencias y la configuración en un contenedor reproducible. Eso evita el clásico problema de 'en mi máquina sí funciona'. Para ML esto ayuda muchísimo porque fija librerías, versiones y entorno de ejecución."
        },
        {
          title: "Docker vs máquina virtual",
          body: "La diferencia más recordable es esta.",
          comparisonTable: {
            columns: ["Criterio", "Contenedor Docker", "Máquina virtual"],
            rows: [
              ["Peso", "Más liviano.", "Más pesado."],
              ["Arranque", "Rápido.", "Más lento."],
              ["Aislamiento", "Bueno para apps y servicios.", "Más completo a nivel de sistema."],
              ["Uso típico en ML", "Empaquetar APIs y servicios de modelo.", "Infraestructura más pesada o entornos completos."]
            ]
          }
        },
        {
          title: "Qué aporta Docker en Machine Learning",
          body: "Su mayor valor práctico es que hace repetible el despliegue. Si un modelo corre bien con sus dependencias dentro del contenedor, otro integrante del equipo o un servidor deberían poder correrlo igual. Eso mejora colaboración, reduce errores de entorno y acelera el paso a producción."
        },
        {
          title: "Paso 4: orquestarlo con Kubernetes",
          body: "`Kubernetes` entra cuando un solo contenedor ya no basta. Su rol es administrar muchos contenedores, escalar réplicas, reiniciar servicios que fallan, exponerlos de forma ordenada y sostener sistemas más robustos. Si Docker empaqueta, Kubernetes coordina."
        },
        {
          title: "Las piezas más importantes de Kubernetes",
          body: "Acá es donde más conviene simplificar nombres.",
          comparisonTable: {
            columns: ["Componente", "Qué hace", "Cómo lo pensaría"],
            rows: [
              ["Pod", "Unidad mínima que ejecuta contenedores.", "La cajita donde vive la app."],
              ["ReplicaSet", "Mantiene varias copias activas.", "Evita quedarme con una sola instancia."],
              ["Deployment", "Define y actualiza el estado deseado.", "Cómo administro versiones y cantidad de pods."],
              ["Service", "Expone el acceso a los pods.", "La puerta estable hacia el conjunto desplegado."]
            ]
          }
        },
        {
          title: "Cuándo tiene sentido pasar a Kubernetes",
          body: "No todo proyecto lo necesita. Si tengo un prototipo simple o un uso pequeño, `Flask` con `Docker` puede bastar. Kubernetes empieza a hacer más sentido cuando necesito alta disponibilidad, varias réplicas, despliegues más ordenados o escalado automático."
        },
        {
          title: "Paso 5: automatizar con CI/CD",
          body: "`CI/CD` busca que cambios en código, configuración o modelo se prueben e integren de forma automática, y que el despliegue sea más repetible. En ML esto ayuda a evitar errores manuales y a conectar entrenamiento, testeo, empaquetado y publicación de forma más sana."
        },
        {
          title: "Qué es MLOps y por qué va más allá de DevOps",
          body: "`MLOps` toma ideas de `DevOps`, pero añade lo que ML necesita: manejo de datos, versionado de modelos, seguimiento de experimentos, validación, monitoreo de drift y gobierno del ciclo completo. No solo gestiona software; gestiona sistemas que aprenden y cambian con datos."
        },
        {
          title: "DevOps vs MLOps",
          body: "Se parecen, pero no cubren exactamente lo mismo.",
          comparisonTable: {
            columns: ["Enfoque", "DevOps", "MLOps"],
            rows: [
              ["Centro principal", "Código y despliegue de software.", "Código, datos, modelos y despliegue."],
              ["Versionado", "Código e infraestructura.", "Código, datasets, features y modelos."],
              ["Monitoreo", "Disponibilidad y rendimiento del servicio.", "También drift, degradación y calidad predictiva."],
              ["Objetivo", "Entrega continua de software.", "Entrega y operación continua de sistemas de ML."]
            ]
          }
        },
        {
          title: "Paso 6: usar plataformas cloud",
          body: "Servicios como `AWS SageMaker`, `Google Vertex AI` o `Azure Machine Learning` facilitan entrenar, desplegar, versionar y monitorear modelos sin armar toda la infraestructura desde cero. Su gracia es acelerar trabajo productivo, aunque también implican costo, dependencia de proveedor y necesidad de buen criterio arquitectónico."
        },
        {
          title: "Qué hace cada capa en el camino completo",
          body: "Si quisiera resumir todo el módulo en una sola tabla, sería esta.",
          comparisonTable: {
            columns: ["Capa", "Se encarga de", "Función principal"],
            rows: [
              ["API REST", "Exponer el modelo.", "Permitir que otros sistemas hagan predicciones."],
              ["Docker", "Empaquetar el entorno.", "Garantizar reproducibilidad y portabilidad."],
              ["Kubernetes", "Orquestar múltiples contenedores.", "Escalar, reiniciar y administrar despliegues."],
              ["CI/CD", "Automatizar integración y entrega.", "Reducir errores manuales y acelerar cambios."],
              ["MLOps", "Gestionar el ciclo de vida del ML.", "Conectar datos, modelos, monitoreo y operación."],
              ["Cloud", "Proveer infraestructura y servicios administrados.", "Facilitar despliegue y operación a escala."]
            ]
          }
        },
        {
          title: "Errores comunes que el módulo repite harto",
          body: "Hay varias alertas que conviene fijar desde ya.",
          bestPractices: [
            "Pensar que con entrenar el modelo ya está listo el proyecto.",
            "No separar entrenamiento y despliegue como etapas distintas.",
            "Empaquetar mal dependencias o dejar entornos frágiles.",
            "Exponer mal el servicio o no probar el endpoint antes de publicar.",
            "Creer que Kubernetes o la nube son necesarios en cualquier escenario pequeño.",
            "Olvidar monitoreo, actualización y mantenimiento posterior."
          ]
        },
        {
          title: "Cómo decidir hasta dónde llegar",
          body: "No todos los proyectos necesitan todo el stack. Un prototipo puede vivir feliz con modelo serializado + `Flask`. Un proyecto un poco más serio puede sumar `Docker`. Un servicio empresarial con escala y actualización continua puede necesitar `Kubernetes`, `CI/CD`, `MLOps` y cloud. La clave es no sobredimensionar antes de tiempo, pero tampoco olvidar que compartir un modelo de verdad exige más que una notebook bonita."
        },
        {
          title: "Para recordar",
          body: "Compartir un modelo de Machine Learning significa volverlo utilizable fuera del entorno de entrenamiento. Para eso lo serializo, lo expongo con una `API`, lo empaqueto con `Docker`, lo orquesto con `Kubernetes` si necesito escala y automatizo su ciclo con `CI/CD` y `MLOps`, idealmente apoyado por la nube cuando el contexto lo justifica. Cada capa cumple un rol distinto, y juntas convierten un modelo en un servicio real."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S1 – Presentación: despliegue de modelos ML con APIs REST, serialización y Flask</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S1 – Cuestionario Clase 1: despliegue, endpoints y buenas prácticas de exposición</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S2 – Presentación: contenedores, Docker y contenerización de modelos</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S2 – Cuestionario Clase 2: Docker, arquitectura y colaboración reproducible</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S3 – Presentación: Kubernetes, pods, deployments, services y orquestación</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S3 – Cuestionario Clase 3: orquestación de contenedores y despliegue escalable</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S4 – Presentación: CI/CD, MLOps, nube y operación continua de modelos</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>MLM10S4 – Cuestionario Clase 4: DevOps, MLOps y plataformas cloud para ML</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "xai-with-lime-and-shap-for-model-interpretation",
        "transfer-learning-freezing-fine-tuning-and-real-adaptation",
        "oop-principles-for-machine-learning-projects"
      ]
    },
    {
      id: "oop-principles-for-machine-learning-projects",
      slug: "poo-y-principios-de-diseno-para-proyectos-de-machine-learning",
      title: "POO y principios de diseño para proyectos de Machine Learning",
      summary: "Una guía para llevar la programación orientada a objetos hacia proyectos de Machine Learning más ordenados, aplicando modularidad, reutilización y principios como `SOLID`, `DRY` y `KISS` para construir soluciones más mantenibles y escalables.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "11 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "POO", "SOLID", "Diseño"],
      featured: true,
      contentSections: [
        {
          title: "Por qué la POO cambia de nivel cuando entro a ML",
          body: "En ejercicios pequeños, la POO ayuda a ordenar. Pero en Machine Learning su valor crece mucho más, porque los proyectos dejan de ser una sola función y pasan a integrar carga de datos, preprocesamiento, entrenamiento, validación, métricas, serialización y despliegue. Ahí la orientación a objetos deja de ser solo teoría y se vuelve estructura."
        },
        {
          title: "Del script suelto al sistema modular",
          body: "La programación procedimental funciona bien para probar ideas rápidas. El problema aparece cuando el proyecto crece y empiezo a repetir lógica, mezclar responsabilidades o depender de variables dispersas. La POO permite convertir ese caos potencial en componentes con roles más claros."
        },
        {
          title: "Qué gana un proyecto de ML con este enfoque",
          body: "Cuando organizo mejor las piezas, también mejoro el flujo de trabajo técnico.",
          comparisonTable: {
            columns: ["Necesidad en ML", "Cómo ayuda la POO"],
            rows: [
              ["Modularidad", "Separar cargadores de datos, transformadores, modelos y evaluadores."],
              ["Reutilización", "Reusar clases o métodos en distintos experimentos."],
              ["Escalabilidad", "Agregar nuevos modelos sin reescribir todo el pipeline."],
              ["Mantenibilidad", "Detectar y corregir errores en módulos específicos."],
              ["Pruebas", "Validar componentes por separado con mayor facilidad."]
            ]
          }
        },
        {
          title: "Los cuatro pilares siguen importando, pero ahora con foco práctico",
          body: "En ML, abstracción, encapsulación, herencia y polimorfismo no son solo definiciones: sirven para construir componentes que puedan crecer sin romper todo alrededor.",
          comparisonTable: {
            columns: ["Pilar", "Idea breve", "Aplicación en ML"],
            rows: [
              ["Abstracción", "Mostrar solo lo esencial.", "Definir interfaces claras para entrenar o predecir."],
              ["Encapsulación", "Proteger el estado interno.", "Guardar parámetros, transformaciones y resultados dentro de objetos."],
              ["Herencia", "Reutilizar y extender comportamiento.", "Crear variantes de modelos o procesadores desde una clase base."],
              ["Polimorfismo", "Mismo método, distintas respuestas.", "Usar `train()` o `predict()` en clases distintas con comportamientos propios."]
            ]
          }
        },
        {
          title: "Pensar en clases como piezas del pipeline",
          body: "Una forma útil de aterrizar la POO en ML es imaginar que cada parte importante del flujo puede vivir en su propia clase: un lector de datos, un limpiador, un generador de features, un modelo o un evaluador.",
          code: "class CargadorDatos:\n    def cargar(self, ruta):\n        ...\n\nclass Preprocesador:\n    def transformar(self, df):\n        ...\n\nclass ModeloClasificacion:\n    def entrenar(self, X, y):\n        ...\n\n    def predecir(self, X):\n        ..."
        },
        {
          title: "SOLID: reglas para no desordenar un proyecto grande",
          body: "Los principios SOLID ayudan mucho cuando el código empieza a vivir más tiempo del esperado. En ML eso pasa seguido, porque un experimento chico puede terminar convertido en una solución que crece, cambia y se reentrena. Por eso conviene recordarlos con su nombre completo y no solo como siglas.",
          comparisonTable: {
            columns: ["Abreviatura", "Principio", "Qué propone", "Ejemplo aplicado a ML"],
            rows: [
              ["SRP", "Single Responsibility Principle (Principio de Responsabilidad Única)", "Una clase, una responsabilidad.", "Separar la carga de datos del entrenamiento del modelo."],
              ["OCP", "Open/Closed Principle (Principio Abierto/Cerrado)", "Extender sin modificar demasiado.", "Agregar un nuevo clasificador sin romper la estructura existente."],
              ["LSP", "Liskov Substitution Principle (Principio de Sustitución de Liskov)", "Una subclase debe reemplazar a su base sin problemas.", "Cambiar `ModeloBase` por `RandomForestModel` sin alterar el flujo general."],
              ["ISP", "Interface Segregation Principle (Principio de Segregación de Interfaces)", "Interfaces pequeñas y útiles.", "No obligar a todas las clases a implementar métodos que no necesitan."],
              ["DIP", "Dependency Inversion Principle (Principio de Inversión de Dependencias)", "Depender de abstracciones, no de detalles rígidos.", "Diseñar pipelines que trabajen contra interfaces de modelo, no contra un algoritmo único."]
            ]
          }
        },
        {
          title: "DRY y KISS también entran aquí",
          body: "Además de SOLID, dos reglas prácticas ordenan muchísimo el trabajo. `DRY` significa `Don't Repeat Yourself`, o sea, no repetir la misma lógica una y otra vez. `KISS` significa `Keep It Simple, Stupid`, y recuerda que, si una solución simple ya funciona bien, no conviene complejizarla sin necesidad.",
          bestPractices: [
            "Si repito la misma limpieza en varios scripts, conviene encapsularla.",
            "Si dos modelos usan la misma validación, puedo centralizar esa lógica.",
            "Si una clase hace demasiadas cosas, probablemente hay que separarla.",
            "Si la solución se volvió difícil de explicar, tal vez perdió claridad."
          ]
        },
        {
          title: "Métodos de instancia, clase y estáticos: por qué sí importan",
          body: "En proyectos más estructurados, no todos los métodos cumplen el mismo rol. Entender esa diferencia ayuda a no meter todo en el mismo saco.",
          comparisonTable: {
            columns: ["Tipo de método", "Cuándo usarlo", "Ejemplo mental"],
            rows: [
              ["Instancia", "Cuando trabaja con datos del objeto.", "Un modelo que usa sus propios parámetros entrenados."],
              ["`@classmethod`", "Cuando necesito construir o configurar desde la clase.", "Crear un modelo con configuración por defecto."],
              ["`@staticmethod`", "Cuando la función está relacionada con la clase, pero no depende ni de `self` ni de `cls`.", "Validar formato de una entrada antes del entrenamiento."]
            ]
          }
        },
        {
          title: "Encapsular ayuda también a probar y depurar",
          body: "Cuando cada componente tiene una responsabilidad clara, es mucho más fácil probarlo por separado. Puedo validar si el problema está en la lectura, en el preprocesamiento o en la predicción, en vez de revisar un bloque inmenso donde todo está mezclado."
        },
        {
          title: "Cuándo lo usaría de verdad en Machine Learning",
          body: "Si el trabajo es un notebook breve para explorar una idea, quizás no necesito demasiada estructura. Pero si el proyecto ya incluye varias etapas, múltiples modelos, validaciones, retraining o colaboración con otras personas, la POO pasa a ser una base muy útil para que el código no se desordene."
        },
        {
          title: "Para recordar",
          body: "En Machine Learning, la POO no sirve solo para definir clases bonitas: sirve para diseñar mejor. Modularidad, encapsulación, reutilización y principios como `Single Responsibility Principle`, `Open/Closed Principle`, `Don't Repeat Yourself` y `Keep It Simple, Stupid` ayudan a que un proyecto pase de ser un experimento aislado a una solución más clara, mantenible y escalable."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Lectura sesión 3: Programación orientada a objetos en Python</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Apuntes de repaso – Módulo 2 / Clase 3: Programación orientada a objetos en Python</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "object-oriented-programming-basics",
        "advanced-data-structures-for-ml",
        "python-exception-handling-for-data-workflows"
      ]
    },
    {
      id: "python-functions-conditionals-and-operators",
      slug: "funciones-condicionales-y-operadores-en-python",
      title: "Funciones, condicionales y operadores en Python",
      summary: "Una guía práctica para entender cómo se definen funciones en Python, cómo se combinan con sentencias condicionales y qué operadores conviene recordar para escribir lógica más clara.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Funciones", "Condicionales", "Operadores"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte sí merece su propia nota",
          body: "Las funciones son de las herramientas más importantes para dejar de escribir código repetido y empezar a construir lógica reutilizable. Y en la práctica casi nunca trabajan solas: muy seguido se combinan con condicionales y operadores para decidir qué hacer, con qué datos y en qué momento."
        },
        {
          title: "Qué es una función en términos simples",
          body: "Una función es un bloque de código reutilizable que resuelve una tarea específica. La idea no es solo ahorrar líneas: también ayuda a dividir mejor el problema, reutilizar lógica y hacer que el código se lea con más orden."
        },
        {
          title: "La sintaxis base de una función",
          body: "La estructura típica en Python sigue una forma bastante clara: nombre, parámetros, bloque de código y retorno.",
          code: "def mi_funcion(parametros):\n    \"\"\"Describe lo que hace la función.\"\"\"\n    bloque_de_codigo\n    return valor",
          bestPractices: [
            "Usar `def` para iniciar la función.",
            "Nombrarla en `snake_case`.",
            "Agregar docstring si la función hace algo relevante o poco obvio.",
            "Mantener una sangría limpia de cuatro espacios.",
            "Cerrar con `return` si necesito reutilizar el resultado."
          ]
        },
        {
          title: "return vs print: la diferencia que más conviene fijar",
          body: "Una de las confusiones más comunes al empezar es creer que `print()` y `return` hacen lo mismo. No es así.",
          comparisonTable: {
            columns: ["Instrucción", "Qué hace", "Cuándo conviene"],
            rows: [
              ["`return`", "Devuelve un resultado para usarlo después.", "Cuando quiero guardar, comparar o reutilizar el valor."],
              ["`print()`", "Solo muestra algo en consola.", "Cuando quiero revisar visualmente una salida o depurar."]
            ]
          },
          code: "def sumar(a, b):\n    return a + b\n\nresultado = sumar(4, 6)\nprint(resultado)"
        },
        {
          title: "Un ejemplo útil de función",
          body: "Este tipo de función es simple, pero muestra muy bien el patrón base.",
          code: "def to_celsius(x):\n    \"\"\"Convierte Fahrenheit a Celsius.\"\"\"\n    return (x - 32) * 5 / 9\n\nprint(to_celsius(75))",
          example: "La función recibe un valor, aplica una fórmula y devuelve un resultado que después puedo reutilizar o mostrar."
        },
        {
          title: "Funciones y métodos: se parecen, pero no son lo mismo",
          body: "Una función común puede usarse de forma general. Un método, en cambio, es una función que pertenece a una clase y normalmente se usa con notación de punto.",
          comparisonTable: {
            columns: ["Concepto", "Cómo se usa", "Ejemplo"],
            rows: [
              ["Función", "De forma independiente.", "`sum([6, 3])`"],
              ["Método", "Ligado a un objeto o clase.", "`mi_texto.split()`"]
            ]
          }
        },
        {
          title: "Condicionales: cómo el código empieza a decidir",
          body: "Las sentencias `if`, `elif` y `else` permiten controlar el flujo del programa según ciertas reglas. Son esenciales porque convierten comparaciones en decisiones concretas.",
          code: "numero = -4\n\nif numero > 0:\n    print(\"Número positivo\")\nelif numero == 0:\n    print(\"Número cero\")\nelse:\n    print(\"Número negativo\")"
        },
        {
          title: "La lógica de if, elif y else en corto",
          body: "La lectura más simple sería esta.",
          comparisonTable: {
            columns: ["Bloque", "Qué revisa", "Qué pasa si se cumple"],
            rows: [
              ["`if`", "La primera condición principal.", "Ejecuta su bloque y sigue el flujo."],
              ["`elif`", "Una alternativa si la anterior fue falsa.", "Ejecuta su bloque si ahora sí se cumple."],
              ["`else`", "El caso restante.", "Se ejecuta cuando ninguna condición previa fue verdadera."]
            ]
          }
        },
        {
          title: "A veces el else puede sobrar",
          body: "En algunos casos, usar `else` es correcto pero no estrictamente necesario. Cuando la función ya retorna dentro del `if`, se puede simplificar el resto del flujo.",
          code: "def greater_than_ten(x):\n    if x > 10:\n        return True\n    return False",
          example: "La función primero prueba la condición. Si no se cumple, simplemente cae a la siguiente línea y devuelve `False`."
        },
        {
          title: "Operadores: la caja de herramientas que sostiene toda esta lógica",
          body: "Los operadores son símbolos o palabras que permiten calcular, comparar o combinar condiciones. Son parte muy básica de Python, pero aparecen en casi cualquier función o condicional."
        },
        {
          title: "Operadores de comparación que conviene recordar",
          body: "Cada comparación en Python devuelve `True` o `False`.",
          comparisonTable: {
            columns: ["Operación", "Operador", "Ejemplo"],
            rows: [
              ["Mayor que", "`>`", "`x > 5`"],
              ["Mayor o igual que", "`>=`", "`x >= 5`"],
              ["Menor que", "`<`", "`x < 5`"],
              ["Menor o igual que", "`<=`", "`x <= 5`"],
              ["Igual a", "`==`", "`x == 5`"],
              ["Distinto de", "`!=`", "`x != 5`"]
            ]
          }
        },
        {
          title: "Operadores lógicos",
          body: "Sirven para combinar comparaciones y construir condiciones más expresivas.",
          comparisonTable: {
            columns: ["Operador", "Qué hace", "Ejemplo mental"],
            rows: [
              ["`and`", "Solo da `True` si ambas condiciones son verdaderas.", "Debe cumplirse todo."],
              ["`or`", "Da `True` si al menos una condición es verdadera.", "Basta con una."],
              ["`not`", "Invierte el resultado lógico.", "Lo que era verdadero pasa a falso."]
            ]
          },
          code: "x = 3\nmi_lista = [3, 4, 6, 10]\n\nprint(x < 3 and x != 0)\nprint(x >= len(mi_lista) or x == min(mi_lista))\nprint(x not in mi_lista)"
        },
        {
          title: "Operadores aritméticos básicos",
          body: "Además de las comparaciones, Python usa operadores matemáticos muy comunes.",
          comparisonTable: {
            columns: ["Operación", "Operador", "Ejemplo"],
            rows: [
              ["Suma", "`+`", "`5 + 2`"],
              ["Resta", "`-`", "`5 - 2`"],
              ["Multiplicación", "`*`", "`5 * 2`"],
              ["División", "`/`", "`5 / 2`"],
              ["Módulo", "`%`", "`5 % 2`"],
              ["Exponenciación", "`**`", "`5 ** 2`"],
              ["División de piso", "`//`", "`5 // 2`"]
            ]
          }
        },
        {
          title: "Errores comunes que conviene evitar",
          body: "Al empezar, varios errores se repiten bastante y conviene tenerlos presentes.",
          bestPractices: [
            "No usar `=` para comparar; para eso está `==`.",
            "No mezclar tipos incompatibles en comparaciones sin revisar.",
            "Cuidar la sangría dentro de funciones y condicionales.",
            "No abusar de `print()` cuando en realidad necesito `return`.",
            "Nombrar funciones y variables con claridad."
          ]
        },
        {
          title: "Cómo se conecta todo en una sola pieza",
          body: "En la práctica, una función suele recibir datos, usar operadores para evaluarlos, aplicar un `if` o `elif` para decidir y devolver un resultado con `return`. Esa combinación es una de las bases más importantes de Python.",
          code: "def clasificar_edad(edad):\n    if edad < 18:\n        return \"menor de edad\"\n    elif edad >= 18 and edad < 60:\n        return \"adulto\"\n    return \"adulto mayor\""
        },
        {
          title: "Para recordar",
          body: "Si entiendo bien funciones, condicionales y operadores, ya tengo una base muy seria para empezar a escribir lógica útil en Python. Después vendrán listas, ciclos, archivos, librerías y clases, pero este bloque es de los que más se reutiliza una y otra vez."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Funciones</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Sentencias condicionales</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Operadores de Python</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "object-oriented-programming-basics",
        "python-introduction-and-comparison",
        "jupyter-colab-vscode-for-data-work"
      ]
    },
    {
      id: "python-loops-break-and-continue",
      slug: "ciclos-bucles-break-y-continue-en-python",
      title: "Ciclos, bucles, break y continue en Python",
      summary: "Una guía para entender cuándo conviene usar `for` o `while`, cómo funcionan `break` y `continue`, y por qué `match/case` no reemplaza a los bucles aunque también controle el flujo.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Bucles", "For", "While"],
      featured: false,
      contentSections: [
        {
          title: "Por qué los bucles importan tanto",
          body: "Los bucles permiten repetir acciones sin copiar el mismo bloque de código una y otra vez. En análisis de datos aparecen todo el tiempo: recorrer listas, procesar filas, validar registros, transformar texto o automatizar pequeñas tareas repetitivas."
        },
        {
          title: "Dos caminos principales: for y while",
          body: "En Python los dos ciclos más comunes son `for` y `while`. Ambos repiten instrucciones, pero no se usan con la misma lógica.",
          comparisonTable: {
            columns: ["Bucle", "Cuándo conviene", "Idea principal"],
            rows: [
              ["`for`", "Cuando ya tengo una secuencia o un número definido de iteraciones.", "Recorre elemento por elemento."],
              ["`while`", "Cuando quiero repetir algo mientras una condición siga siendo verdadera.", "Sigue hasta que cambie la condición."]
            ]
          }
        },
        {
          title: "Bucle for: el más cómodo para recorrer",
          body: "El `for` es ideal cuando trabajo con listas, tuplas, cadenas, diccionarios, conjuntos o rangos. Va tomando cada elemento y ejecuta el bloque una vez por cada valor.",
          code: "nombres = [\"Ana\", \"Luis\", \"Camila\"]\n\nfor nombre in nombres:\n    print(nombre)"
        },
        {
          title: "La variable del for no es mágica",
          body: "La variable que aparece en `for item in secuencia` la eliges tú. Conviene nombrarla de forma que refleje qué estás recorriendo: `name`, `row`, `value`, `student`, etc. Eso hace que el código se entienda mucho mejor."
        },
        {
          title: "range(): cuando quiero repetir una cantidad exacta de veces",
          body: "La función `range()` genera una secuencia numérica muy útil para iterar un número definido de veces o construir pasos regulares.",
          code: "for i in range(3):\n    print(i)\n\nfor n in range(2, 5):\n    print(n)\n\nfor par in range(2, 11, 2):\n    print(par)",
          bestPractices: [
            "`range(stop)` parte en 0 y llega hasta `stop - 1`.",
            "`range(start, stop)` permite elegir inicio y fin.",
            "`range(start, stop, step)` suma control sobre el salto."
          ]
        },
        {
          title: "Bucle while: repetir mientras una condición siga viva",
          body: "El `while` sirve cuando no quiero recorrer una colección sino mantener una acción activa hasta que ocurra algo específico.",
          code: "x = 1\nwhile x < 100:\n    print(x)\n    x = x * 2"
        },
        {
          title: "El riesgo clásico del while: el bucle infinito",
          body: "Si la condición nunca cambia, el ciclo puede quedarse corriendo para siempre. Ese es el error más común con `while`, por eso casi siempre conviene revisar que dentro del bloque exista algo que modifique el estado.",
          example: "Si `x` nunca aumenta en un `while x < 100`, la condición seguirá siendo verdadera y el programa no avanzará."
        },
        {
          title: "break: salir antes de tiempo",
          body: "La sentencia `break` corta el ciclo por completo aunque la condición siga siendo verdadera. Es útil cuando ya encontré lo que buscaba o cuando quiero frenar una iteración por una regla de negocio.",
          code: "x = 1\ni = 0\n\nwhile x < 100:\n    if i == 5:\n        break\n    print(i, x)\n    x = x * 2\n    i += 1"
        },
        {
          title: "continue: saltar solo esta vuelta",
          body: "A diferencia de `break`, `continue` no termina el ciclo. Solo omite el resto del bloque en la iteración actual y pasa a la siguiente vuelta.",
          code: "i = 0\nwhile i < 10:\n    if i % 3 != 0:\n        print(i)\n        i += 1\n        continue\n    i += 1",
          example: "Sirve mucho cuando quiero ignorar casos específicos sin destruir el flujo completo."
        },
        {
          title: "Bucles anidados: un ciclo dentro de otro",
          body: "Un bucle anidado aparece cuando necesito recorrer estructuras más profundas, como listas de listas o combinaciones de categorías.",
          code: "students = [[\"Igor\", \"Sokolov\"], [\"Riko\", \"Miyazaki\"], [\"Tuva\", \"Johansen\"]]\n\nfor student in students:\n    for name in student:\n        print(name)\n    print()",
          bestPractices: [
            "Usarlos cuando realmente hay estructuras anidadas.",
            "Evitar anidar demasiado si el código empieza a costar leerlo.",
            "Nombrar bien las variables internas y externas."
          ]
        },
        {
          title: "for vs while: cuál usar en casos reales",
          body: "La elección correcta suele depender de si ya conozco el conjunto a recorrer o si dependo de una condición cambiante. Y como recordatorio aparte: en Python no existe un `switch` clásico como bucle; para evaluar casos, lo más cercano hoy es `match/case`, pero eso pertenece al control de flujo, no a los ciclos.",
          comparisonTable: {
            columns: ["Situación", "Conviene más", "Motivo"],
            rows: [
              ["Recorrer una lista de clientes", "`for`", "Ya existe una secuencia iterable."],
              ["Intentar login hasta acertar o agotar intentos", "`while`", "Depende de una condición y un contador."],
              ["Aplicar una fórmula a cada fila", "`for`", "Se repite una acción sobre cada elemento."],
              ["Esperar hasta que una variable cumpla una regla", "`while`", "El flujo depende del estado."]
            ]
          }
        },
        {
          title: "Errores comunes al trabajar con ciclos",
          body: "Hay varios errores que se repiten muchísimo cuando uno recién empieza.",
          bestPractices: [
            "Olvidar actualizar la variable de control dentro de un `while`.",
            "Confundir `break` con `continue`.",
            "Anidar demasiados ciclos sin necesidad.",
            "Usar nombres de variables poco claros como `x`, `y`, `z` para todo.",
            "Recorrer algo con `while` cuando un `for` sería más simple y legible."
          ]
        },
        {
          title: "Para recordar",
          body: "Si ya entiendo funciones, condicionales y ahora también ciclos, ya tengo una base bastante sólida para resolver lógica real en Python. Los bucles son parte de ese punto donde el código deja de ser solo ejemplo y empieza a sentirse útil."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Bucles, sentencias break y continue</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Para bucles</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-functions-conditionals-and-operators",
        "object-oriented-programming-basics",
        "python-introduction-and-comparison"
      ]
    },
    {
      id: "python-string-indexing-slicing-and-formatting",
      slug: "indexacion-slicing-y-formateo-de-cadenas-en-python",
      title: "Indexación, slicing y formateo de cadenas en Python",
      summary: "Una guía práctica para manipular texto en Python usando índices, cortes, métodos de cadena y formateo, con una mención breve a regex como siguiente nivel.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "11 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Strings", "Indexación", "Texto"],
      featured: false,
      contentSections: [
        {
          title: "Por qué esta parte importa tanto",
          body: "En análisis de datos el texto aparece en nombres, correos, descripciones, rutas, códigos, categorías y comentarios. Saber cortar, buscar y rearmar cadenas ayuda muchísimo a limpiar datos, etiquetar salidas y automatizar tareas sin depender siempre de trabajo manual."
        },
        {
          title: "Qué significa indexar una cadena",
          body: "Indexar es acceder a un elemento específico según su posición. En Python la indexación parte en cero, así que el primer carácter de una cadena vive en el índice `0`.",
          code: "my_string = 'Mississippi half-step'\nprint(my_string[0])\n\nmy_list = [1, 'unladen', 'swallow']\nprint(my_list[1])\nprint(my_list[-1])",
          bestPractices: [
            "Recordar que el primer elemento está en `0`.",
            "Usar índices negativos cuando quiero partir desde el final.",
            "Pensar la indexación como acceso a un solo valor."
          ]
        },
        {
          title: "Indexación positiva y negativa",
          body: "Los índices positivos avanzan desde el inicio. Los negativos parten desde el final. Eso vuelve muy práctico acceder al último carácter o al último elemento sin calcular la longitud completa.",
          comparisonTable: {
            columns: ["Tipo", "Qué hace", "Ejemplo"],
            rows: [
              ["Índice positivo", "Cuenta desde el inicio.", "`texto[0]`"],
              ["Índice negativo", "Cuenta desde el final.", "`texto[-1]`"]
            ]
          }
        },
        {
          title: "Qué pasa si el índice no existe",
          body: "Si intentas pedir un índice fuera del rango real, Python lanza `IndexError`. Eso sí: esto aplica a indexación puntual, no al slicing.",
          code: "my_list = [1, 'unladen', 'swallow']\nmy_list[3]  # IndexError"
        },
        {
          title: "Slicing: cortar una parte de la secuencia",
          body: "El slicing sirve para extraer un rango de valores. Se escribe con corchetes y dos puntos. El índice inicial es inclusivo y el final es exclusivo.",
          code: "new_string = 'pining for the fjords'\nprint(new_string[0:3])\nprint(new_string[:3])",
          example: "Ambos ejemplos devuelven lo mismo porque si omito el índice inicial, Python asume que empiezo desde `0`."
        },
        {
          title: "Cuando omito el final del slicing",
          body: "Si dejo vacío el índice final, Python entiende que quiero llegar hasta el último elemento disponible.",
          code: "new_string = 'pining for the fjords'\nprint(new_string[6:21])\nprint(new_string[6:])\nprint(len(new_string))"
        },
        {
          title: "Diferencia clave entre indexación y slicing",
          body: "La indexación fuera de rango rompe con error. El slicing fuera de rango no: simplemente devuelve hasta donde alcanza la secuencia.",
          comparisonTable: {
            columns: ["Caso", "Resultado"],
            rows: [
              ["`texto[100]`", "`IndexError`"],
              ["`texto[6:100]`", "Devuelve la subcadena hasta el final disponible."]
            ]
          },
          code: "new_string = 'pining for the fjords'\nprint(new_string[6:100])"
        },
        {
          title: "Por qué esto se conecta con el formateo",
          body: "Una vez que sé extraer partes del texto, ya puedo reordenarlas, limpiarlas o insertarlas dentro de mensajes más claros. Por eso la indexación y el slicing suelen sentirse mucho más útiles cuando se combinan con el formateo de cadenas."
        },
        {
          title: "Formateo con format()",
          body: "El método `format()` permite insertar valores dentro de una plantilla de texto. Es muy útil cuando quiero construir etiquetas, títulos, resúmenes o mensajes reutilizables.",
          code: "x = 'values'\ny = 100\n\nprint('''String formatting lets you insert {} into strings.\nThey can even be numbers, like {}.'''.format(x, y))"
        },
        {
          title: "Format con nombres o posiciones",
          body: "También puedo insertar valores usando nombres explícitos o índices, lo que da más control cuando quiero reordenar la salida.",
          code: "var_a = 'A'\nvar_b = 'B'\n\nprint('{a}, {b}'.format(b=var_b, a=var_a))\nprint('{1}, {0}'.format(var_a, var_b))\nprint('{0}{1}{0}'.format('abra', 'cad'))"
        },
        {
          title: "f-strings: la forma más cómoda en Python moderno",
          body: "Las f-strings suelen ser la opción más directa y legible. Permiten incrustar variables e incluso expresiones dentro de llaves.",
          code: "var_a = 1\nvar_b = 2\n\nprint(f'{var_a} + {var_b}')\nprint(f'{var_a + var_b}')\nprint(f'var_a = {var_a}\\nvar_b = {var_b}')",
          bestPractices: [
            "Preferir f-strings cuando trabajo con Python moderno.",
            "Usarlas para reportes, mensajes y etiquetas dinámicas.",
            "Aprovechar que pueden evaluar expresiones simples."
          ]
        },
        {
          title: "Formatear números dentro de cadenas",
          body: "El formateo no solo inserta valores: también controla cómo se ven. Esto es muy útil para porcentajes, decimales o notación científica en reportes analíticos.",
          comparisonTable: {
            columns: ["Formato", "Para qué sirve", "Ejemplo"],
            rows: [
              ["`.2f`", "Fijar decimales.", "`f'{num:.2f}'`"],
              ["`.3e`", "Notación científica.", "`f'{num:.3e}'`"],
              ["`.4%`", "Mostrar porcentaje.", "`f'{decimal:.4%}'`"]
            ]
          },
          code: "num = 1000.987123\nprint(f'{num:.3e}')\n\ndecimal = 0.2497856\nprint(f'{decimal:.4%}')"
        },
        {
          title: "Métodos de cadena que sí conviene recordar",
          body: "Además de indexar o formatear, Python trae métodos muy útiles para trabajar texto sin demasiada fricción.",
          comparisonTable: {
            columns: ["Método", "Qué hace", "Ejemplo rápido"],
            rows: [
              ["`count()`", "Cuenta ocurrencias.", "`texto.count('a')`"],
              ["`find()`", "Busca la primera aparición.", "`texto.find('mail')`"],
              ["`join()`", "Une una secuencia de textos.", "`' '.join(lista)`"],
              ["`partition()`", "Divide en tres partes según un separador.", "`url.partition('.')`"],
              ["`replace()`", "Sustituye fragmentos.", "`texto.replace('x', 'y')`"],
              ["`split()`", "Divide según delimitador.", "`texto.split()`"]
            ]
          }
        },
        {
          title: "Un ejemplo sencillo de flujo real",
          body: "Este tipo de secuencia es muy común en datos: tomo una parte del texto, la limpio y la muestro con una estructura más clara.",
          code: "correo = 'fredy.rivera@correo.cl'\nusuario = correo[:correo.find('@')]\ndominio = correo[correo.find('@') + 1:]\n\nprint(f'Usuario: {usuario}')\nprint(f'Dominio: {dominio}')"
        },
        {
          title: "Regex: el siguiente nivel, pero no obligatorio todavía",
          body: "Las expresiones regulares sirven para buscar patrones de texto más complejos. Son muy útiles en limpieza, scraping y validación, pero para una base inicial alcanza con entender que existen y que se usan desde el módulo `re`.",
          code: "import re\n\nmy_string = 'Three sad tigers swallowed wheat in a wheat field'\nre.search('wall', my_string)\nre.search('[bms]ad', my_string)",
          example: "Regex empieza a tomar fuerza cuando ya me manejo bien con cadenas, métodos básicos y estructuras de limpieza más simples."
        },
        {
          title: "Para recordar",
          body: "Si entiendo indexación, slicing y formateo, ya puedo manipular texto con mucha más intención. Esa base después se conecta muy bien con limpieza de datos, normalización de columnas, validación de cadenas y automatización de salidas."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Indexación y corte de cadenas</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Formateo de cadenas y expresiones regulares</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-loops-break-and-continue",
        "python-functions-conditionals-and-operators",
        "object-oriented-programming-basics"
      ]
    },
    {
      id: "python-lists-tuples-and-mutability",
      slug: "listas-tuplas-y-mutabilidad-en-python",
      title: "Listas, tuplas y mutabilidad en Python",
      summary: "Una guía comparativa para entender cuándo conviene usar listas o tuplas, qué implica la mutabilidad y cómo aprovechar herramientas como `zip()`, `enumerate()` y comprensión de listas.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Listas", "Tuplas", "Mutabilidad"],
      featured: false,
      contentSections: [
        {
          title: "Por qué esta decisión sí importa",
          body: "Cuando uno empieza en Python, listas y tuplas pueden parecer casi iguales porque ambas guardan colecciones ordenadas. Pero en la práctica sirven para cosas distintas, y entender esa diferencia ayuda a escribir código más claro, más seguro y más fácil de mantener."
        },
        {
          title: "Qué es una lista",
          body: "Una lista es una estructura de datos ordenada, iterable y mutable. Puede guardar casi cualquier tipo de valor: números, texto, otras listas, tuplas o mezclas de todo eso.",
          code: "list_a = ['olive', 'palm', 'coconut']\nlist_b = [8, 6, 7, 5, 3, 0, 8]\nlist_c = ['Abidjan', 14.2, [1, 2, None], 'Zagreb']\n\nempty_list_1 = []\nempty_list_2 = list()"
        },
        {
          title: "Qué es una tupla",
          body: "Una tupla también es una secuencia ordenada e iterable, pero a diferencia de la lista, es inmutable. Eso significa que su contenido no debería cambiar una vez creada.",
          code: "empty_tuple = ()\nmy_tuple = (1, 'z')\n\nsingle_value = (2,)\notra_tupla = tuple([1, 'z'])",
          bestPractices: [
            "Recordar la coma final cuando la tupla tiene un solo elemento.",
            "Usar tuplas cuando quiero proteger la estructura de cambios accidentales.",
            "Pensar la tupla como un paquete de datos más estable."
          ]
        },
        {
          title: "La diferencia que más importa: mutabilidad",
          body: "La mutabilidad responde a una pregunta clave: ¿puedo cambiar este objeto después de crearlo?",
          comparisonTable: {
            columns: ["Estructura", "¿Mutable?", "Qué implica"],
            rows: [
              ["Lista", "Sí", "Puedo editar, agregar, quitar o reordenar elementos."],
              ["Tupla", "No", "La estructura queda fija después de crearla."],
              ["Cadena", "No", "El texto no se modifica carácter por carácter; se crea una nueva cadena."]
            ]
          }
        },
        {
          title: "Modificar una lista sí es normal",
          body: "Justamente porque la lista es mutable, se usa mucho cuando espero cambios durante el flujo del programa.",
          code: "my_list = ['Macduff', 'Malcolm', 'Duncan', 'Banquo']\nmy_list[2] = 'Macbeth'\nprint(my_list)\n\nmy_list[1:3] = [1, 2, 3, 4]\nprint(my_list)"
        },
        {
          title: "Pero una tupla protege mejor la integridad",
          body: "Las tuplas son útiles cuando quiero devolver varios valores, fijar coordenadas, representar configuraciones o dejar claro que un conjunto de datos no debe alterarse.",
          comparisonTable: {
            columns: ["Caso", "Conviene más", "Por qué"],
            rows: [
              ["Guardar una colección que cambiará", "Lista", "Permite edición posterior."],
              ["Devolver varios valores desde una función", "Tupla", "Es compacta y estable."],
              ["Usar una estructura como clave de diccionario", "Tupla", "Al ser inmutable, puede funcionar como clave."],
              ["Acumular resultados paso a paso", "Lista", "Se puede ampliar y modificar sin problema."]
            ]
          }
        },
        {
          title: "Listas y tuplas comparten varias cosas",
          body: "Ambas son secuencias ordenadas, se pueden indexar, recorrer y cortar con slicing. Ahí se parecen bastante.",
          code: "phrase = ['Astra', 'inclinant', 'sed', 'non', 'obligant']\nprint(phrase[1])\nprint(phrase[-1])\nprint(phrase[1:4])\nprint(phrase[:3])\nprint(phrase[3:])"
        },
        {
          title: "Operaciones comunes en listas",
          body: "Las listas soportan varias operaciones muy usadas en Python.",
          comparisonTable: {
            columns: ["Operación", "Ejemplo", "Uso típico"],
            rows: [
              ["Concatenar", "`lista1 + lista2`", "Unir colecciones."],
              ["Repetir", "`lista * 2`", "Duplicar patrones."],
              ["Pertenencia", "`x in lista`", "Validar si un valor existe."],
              ["Slicing", "`lista[1:4]`", "Extraer sublistas."]
            ]
          }
        },
        {
          title: "Métodos de lista que sí conviene recordar",
          body: "Las listas traen varios métodos incorporados que aparecen mucho al trabajar con datos.",
          comparisonTable: {
            columns: ["Método", "Qué hace", "Ejemplo"],
            rows: [
              ["`append()`", "Agrega al final.", "`lista.append(valor)`"],
              ["`insert()`", "Inserta en posición específica.", "`lista.insert(2, 'c')`"],
              ["`remove()`", "Elimina la primera coincidencia.", "`lista.remove('a')`"],
              ["`pop()`", "Quita y devuelve un elemento.", "`lista.pop()`"],
              ["`clear()`", "Vacía la lista.", "`lista.clear()`"],
              ["`index()`", "Busca la posición de un valor.", "`lista.index('a')`"],
              ["`count()`", "Cuenta ocurrencias.", "`lista.count('a')`"],
              ["`sort()`", "Ordena la lista.", "`lista.sort()`"]
            ]
          }
        },
        {
          title: "zip(): unir secuencias relacionadas",
          body: "La función `zip()` combina elementos de dos o más iterables y devuelve pares o grupos como tuplas. Es muy útil para relacionar columnas o listas paralelas.",
          code: "cities = ['Paris', 'Lagos', 'Mumbai']\ncountries = ['France', 'Nigeria', 'India']\nplaces = zip(cities, countries)\n\nprint(list(places))",
          example: "Esto sirve mucho cuando tengo nombres y países, IDs y categorías, o fechas y valores que deben viajar juntos."
        },
        {
          title: "enumerate(): recorrer sin perder el índice",
          body: "Cuando necesito saber en qué posición voy mientras recorro una secuencia, `enumerate()` evita andar creando contadores manuales.",
          code: "letters = ['a', 'b', 'c']\nfor index, letter in enumerate(letters):\n    print(index, letter)\n\nfor index, letter in enumerate(letters, 2):\n    print(index, letter)"
        },
        {
          title: "Comprensión de listas: escribir menos y expresar más",
          body: "La comprensión de listas es una forma compacta de construir una lista nueva a partir de otra secuencia iterable.",
          code: "numbers = [1, 2, 3, 4, 5]\nnew_list = [x + 10 for x in numbers]\nprint(new_list)\n\nwords = ['Emotan', 'Amina', 'Ibeno', 'Sankwala']\nnew_pairs = [(word[0], word[-1]) for word in words if len(word) > 5]\nprint(new_pairs)",
          bestPractices: [
            "Usarla cuando la transformación sea clara y legible.",
            "No abusar si la lógica empieza a verse demasiado compleja.",
            "Aprovecharla para filtrar y transformar al mismo tiempo."
          ]
        },
        {
          title: "Listas vs tuplas en una tabla rápida",
          body: "Si quiero una referencia mental rápida, esta comparación suele bastar.",
          comparisonTable: {
            columns: ["Criterio", "Lista", "Tupla"],
            rows: [
              ["Sintaxis común", "`[]`", "`()`"],
              ["Mutabilidad", "Mutable", "Inmutable"],
              ["Métodos disponibles", "Muchos", "Muy pocos (`count`, `index`)"],
              ["Uso típico", "Colección editable", "Paquete estable de valores"],
              ["Como clave de diccionario", "No", "Sí, si su contenido también es hashable"]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Si voy a modificar la colección, casi siempre pensaré en una lista. Si quiero dejar claro que ese conjunto de valores no debería cambiar, una tupla suele ser mejor. Y si además aprendo a usar `zip()`, `enumerate()` y comprensión de listas, ya empiezo a trabajar con iterables de forma mucho más natural."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Listas</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Comparar listas, cadenas y tuplas</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>zip(), enumerate() y comprensión de listas</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-string-indexing-slicing-and-formatting",
        "python-loops-break-and-continue",
        "python-functions-conditionals-and-operators"
      ]
    },
    {
      id: "python-dictionaries-and-sets",
      slug: "diccionarios-y-conjuntos-en-python",
      title: "Diccionarios y conjuntos en Python",
      summary: "Una guía práctica para entender cómo funcionan los diccionarios como pares clave-valor y por qué los conjuntos son tan útiles para limpiar, comparar e identificar datos únicos.",
      category: "Programación",
      type: "Guía",
      level: "basic",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Diccionarios", "Sets", "Estructuras"],
      featured: false,
      contentSections: [
        {
          title: "Por qué esta parte es tan útil",
          body: "Cuando ya manejas listas y tuplas, el siguiente salto natural es aprender a organizar información por clave y a trabajar con valores únicos. Ahí es donde los diccionarios y los conjuntos empiezan a ahorrar mucho tiempo en tareas de análisis, limpieza y validación."
        },
        {
          title: "Qué es un diccionario",
          body: "Un diccionario almacena información en pares clave-valor. En vez de acceder a un dato por posición, como en una lista, aquí accedes por una clave significativa.",
          code: "smallest_countries = {\n    'Africa': 'Seychelles',\n    'Asia': 'Maldives',\n    'Europe': 'Vatican City',\n    'Oceania': 'Nauru',\n    'North America': 'St. Kitts and Nevis',\n    'South America': 'Suriname'\n}\n\nempty_dict_1 = {}\nempty_dict_2 = dict()"
        },
        {
          title: "Otra forma de crear diccionarios",
          body: "También puedes usar `dict()` cuando las claves funcionan bien como argumentos de palabra clave.",
          code: "smallest_countries = dict(\n    africa='Seychelles',\n    asia='Maldives',\n    europe='Vatican City',\n    oceania='Nauru',\n    north_america='St. Kitts and Nevis',\n    south_america='Suriname'\n)"
        },
        {
          title: "Claves y valores: qué sí y qué no",
          body: "Las claves deben ser de tipo inmutable, como cadenas, números o tuplas. Los valores pueden ser prácticamente cualquier tipo de dato.",
          comparisonTable: {
            columns: ["Parte", "Qué admite", "Ejemplo"],
            rows: [
              ["Clave", "Tipos inmutables.", "`'pais'`, `10`, `(1, 2)`"],
              ["Valor", "Casi cualquier tipo.", "`'Chile'`, `[1, 2, 3]`, otro diccionario"]
            ]
          },
          code: "valid_dict = {'numbers': [1, 2, 3]}"
        },
        {
          title: "Acceder a datos en un diccionario",
          body: "La gracia del diccionario es que el acceso por clave suele ser más expresivo que andar recordando posiciones numéricas.",
          code: "my_dict = {\n    'nums': [1, 2, 3],\n    'abc': ['a', 'b', 'c']\n}\n\nprint(my_dict['nums'])\nprint(my_dict.values())"
        },
        {
          title: "Los diccionarios son mutables",
          body: "Puedes agregar, modificar o eliminar pares clave-valor. Eso los vuelve muy prácticos cuando una estructura va creciendo durante el flujo del programa.",
          code: "my_dict = {\n    'nums': [1, 2, 3],\n    'abc': ['a', 'b', 'c']\n}\n\nmy_dict['floats'] = [1.0, 2.0, 3.0]\nprint(my_dict)\n\ndel my_dict['abc']\nprint(my_dict)"
        },
        {
          title: "Métodos de diccionario que sí conviene recordar",
          body: "Hay varios métodos que aparecen muchísimo en Python cuando trabajas con estructuras de este tipo.",
          comparisonTable: {
            columns: ["Método", "Qué devuelve", "Para qué sirve"],
            rows: [
              ["`keys()`", "Vista de claves.", "Ver las llaves disponibles."],
              ["`values()`", "Vista de valores.", "Explorar el contenido."],
              ["`items()`", "Vista de pares clave-valor.", "Recorrer todo con más contexto."]
            ]
          },
          code: "my_dict = {\n    'nums': [1, 2, 3],\n    'abc': ['a', 'b', 'c']\n}\n\nprint(my_dict.keys())\nprint(my_dict.values())\nprint(my_dict.items())"
        },
        {
          title: "Cuándo conviene un diccionario",
          body: "Los diccionarios brillan cuando necesito representar entidades con atributos, agrupar resultados por categoría o asociar nombres claros a ciertos valores.",
          comparisonTable: {
            columns: ["Situación", "Por qué un diccionario ayuda"],
            rows: [
              ["Perfil de cliente", "Permite guardar `nombre`, `edad`, `riesgo`, `ingresos` con etiquetas claras."],
              ["Resultados agrupados", "Facilita organizar métricas por categoría o región."],
              ["Configuraciones", "Sirve para centralizar parámetros con nombres entendibles."]
            ]
          }
        },
        {
          title: "Qué es un conjunto o set",
          body: "Un conjunto es una colección de elementos únicos, sin orden y sin indexación posicional. Sirve muchísimo para eliminar duplicados y comparar qué aparece o no entre grupos de datos.",
          code: "my_set = {5, 10, 10, 20}\nprint(my_set)\n\nempty_set = set()"
        },
        {
          title: "Set vs frozenset",
          body: "En Python existen dos clases relacionadas con conjuntos: `set()` y `frozenset()`. La diferencia principal vuelve a ser la mutabilidad.",
          comparisonTable: {
            columns: ["Clase", "¿Mutable?", "Uso típico"],
            rows: [
              ["`set()`", "Sí", "Trabajar, limpiar o comparar valores únicos."],
              ["`frozenset()`", "No", "Necesito una versión fija que pueda vivir dentro de otros sets o como clave."]
            ]
          }
        },
        {
          title: "Qué hace valioso a un set en análisis de datos",
          body: "Los conjuntos son ideales para detectar valores únicos y comparar colecciones sin distraerte con el orden ni con repetidos.",
          example: "Si quiero saber qué clientes aparecen en dos bases distintas, o qué categorías están en un archivo pero faltan en otro, un set suele resolverlo de forma súper limpia."
        },
        {
          title: "Operaciones de conjuntos que más se usan",
          body: "Aquí está el verdadero poder de los sets.",
          comparisonTable: {
            columns: ["Operación", "Método / Operador", "Qué devuelve"],
            rows: [
              ["Unión", "`union()` o `|`", "Todos los elementos de ambos conjuntos."],
              ["Intersección", "`intersection()` o `&`", "Solo los elementos en común."],
              ["Diferencia", "`difference()` o `-`", "Elementos de uno que no están en el otro."],
              ["Diferencia simétrica", "`symmetric_difference()` o `^`", "Elementos que están en uno u otro, pero no en ambos."]
            ]
          },
          code: "set_1 = {'a', 'b', 'c'}\nset_2 = {'b', 'c', 'd'}\n\nprint(set_1 | set_2)\nprint(set_1 & set_2)\nprint(set_1 - set_2)\nprint(set_1 ^ set_2)"
        },
        {
          title: "Un ejemplo bien realista",
          body: "Esto se parece mucho a lo que pasa al comparar fuentes de datos.",
          code: "clientes_crm = {'Ana', 'Luis', 'Camila', 'Pedro'}\nclientes_ventas = {'Luis', 'Camila', 'Tomás'}\n\nprint('En ambos:', clientes_crm & clientes_ventas)\nprint('Solo en CRM:', clientes_crm - clientes_ventas)\nprint('Solo en ventas:', clientes_ventas - clientes_crm)"
        },
        {
          title: "Diccionarios vs conjuntos: no compiten, se complementan",
          body: "Un diccionario organiza información por clave. Un conjunto se enfoca en valores únicos. Muchas veces se usan juntos dentro del mismo análisis.",
          comparisonTable: {
            columns: ["Estructura", "Mejor para", "Ejemplo mental"],
            rows: [
              ["Diccionario", "Relacionar nombre + dato.", "`cliente -> score`"],
              ["Conjunto", "Quedarme con valores únicos.", "IDs únicos o categorías presentes"]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Si necesito acceder por nombre o contexto, normalmente pensaré en un diccionario. Si necesito deduplicar o comparar presencia entre grupos, pensaré en un set. Dominar esas dos estructuras acelera mucho la limpieza y la organización de datos."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Diccionarios</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Conjuntos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-lists-tuples-and-mutability",
        "python-string-indexing-slicing-and-formatting",
        "python-functions-conditionals-and-operators"
      ]
    },
    {
      id: "advanced-data-structures-for-ml",
      slug: "estructuras-de-datos-avanzadas-para-machine-learning",
      title: "Estructuras de datos avanzadas para Machine Learning",
      summary: "Una nota puente para repasar listas, tuplas y diccionarios, y luego subir a pilas, colas, árboles y grafos con foco en cuándo conviene usar cada estructura dentro de flujos analíticos y de ML.",
      category: "Machine Learning",
      type: "Guía",
      level: "intermediate",
      readingTime: "13 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Estructuras", "Machine Learning", "Algoritmos"],
      featured: false,
      contentSections: [
        {
          title: "Por qué esta clase sí merece una nota aparte",
          body: "Las estructuras básicas sirven para empezar, pero cuando los problemas crecen en tamaño o complejidad ya no basta con guardar datos: también importa muchísimo cómo se organizan, cómo se recorren y qué operaciones deben ser rápidas. Por eso esta clase funciona bien como puente entre Python base y Machine Learning."
        },
        {
          title: "Recordatorio rápido de estructuras básicas",
          body: "Antes de subir a lo avanzado, conviene fijar qué aporta cada estructura que ya vimos.",
          comparisonTable: {
            columns: ["Estructura", "Idea central", "Fortaleza principal"],
            rows: [
              ["Lista", "Colección ordenada y mutable.", "Modificar, recorrer y hacer slicing."],
              ["Tupla", "Colección ordenada e inmutable.", "Guardar configuraciones o grupos estables."],
              ["Diccionario", "Pares clave-valor.", "Acceso rápido por clave."],
              ["Conjunto", "Valores únicos sin duplicados.", "Limpiar y comparar presencia de elementos."]
            ]
          }
        },
        {
          title: "Lo avanzado no reemplaza lo básico",
          body: "Las pilas, colas, árboles y grafos no vienen a reemplazar listas o diccionarios. Más bien aparecen cuando necesito modelar flujos, jerarquías o relaciones complejas con mayor claridad y eficiencia."
        },
        {
          title: "Pilas: estructura LIFO",
          body: "Una pila o stack sigue la lógica Last In, First Out: el último en entrar es el primero en salir. Sirve muy bien cuando el proceso necesita deshacer o retroceder por pasos recientes.",
          code: "stack = []\nstack.append('paso_1')\nstack.append('paso_2')\nstack.append('paso_3')\n\nultimo = stack.pop()\nprint(ultimo)\nprint(stack)",
          bestPractices: [
            "Pensarla como una pila de platos.",
            "Usar `append()` para empujar y `pop()` para retirar el último.",
            "Es útil en backtracking, historial y evaluación por pasos."
          ]
        },
        {
          title: "Cuándo una pila sí aporta valor en análisis o ML",
          body: "Las pilas aparecen cuando quiero deshacer procesos, recorrer decisiones recientes o mantener un orden de trabajo donde lo último cargado es lo primero que conviene revisar. También ayudan a modelar ciertos recorridos de estructuras más complejas."
        },
        {
          title: "Colas: estructura FIFO",
          body: "Una cola o queue sigue la lógica First In, First Out: el primero en entrar es el primero en salir. Esto la vuelve muy útil cuando el orden de llegada importa.",
          code: "from collections import deque\n\nqueue = deque()\nqueue.append('cliente_1')\nqueue.append('cliente_2')\nqueue.append('cliente_3')\n\nprimero = queue.popleft()\nprint(primero)\nprint(queue)",
          bestPractices: [
            "Para colas reales, preferir `collections.deque` sobre listas.",
            "Usar `append()` para agregar y `popleft()` para extraer desde el inicio.",
            "Sirve mucho en procesamiento por turnos o pipelines."
          ]
        },
        {
          title: "Pila vs cola en una sola mirada",
          body: "Se parecen porque ambas ordenan el flujo, pero no resuelven el mismo problema.",
          comparisonTable: {
            columns: ["Estructura", "Regla", "Imagen mental"],
            rows: [
              ["Pila", "LIFO", "Lo último que dejas arriba es lo primero que retiras."],
              ["Cola", "FIFO", "La primera persona que llega es la primera que avanza."]
            ]
          }
        },
        {
          title: "Árboles: relaciones jerárquicas",
          body: "Los árboles modelan relaciones padre-hijo. Son ideales cuando la información tiene una estructura jerárquica, con un nodo raíz y distintos niveles que se van ramificando.",
          example: "Una carpeta con subcarpetas, una estructura de decisión o una taxonomía de categorías son ejemplos muy intuitivos de árbol."
        },
        {
          title: "Por qué los árboles importan tanto en ML",
          body: "En Machine Learning aparecen mucho en árboles de decisión, Random Forest y otros enfoques donde las reglas se van separando por ramas. Entender la lógica jerárquica del árbol ayuda mucho a interpretar cómo un modelo divide el espacio de decisiones."
        },
        {
          title: "Árbol de búsqueda binaria como referencia mental",
          body: "Una versión clásica es el árbol de búsqueda binaria: cada nodo tiene a lo más dos hijos, y se cumple que los valores menores van a la izquierda y los mayores a la derecha. Eso permite búsquedas más ordenadas.",
          comparisonTable: {
            columns: ["Concepto", "Idea"],
            rows: [
              ["Raíz", "Nodo inicial del árbol."],
              ["Nodo hijo", "Elemento que depende de otro nodo."],
              ["Hoja", "Nodo sin hijos."],
              ["ABB", "Izquierda < nodo < derecha."]
            ]
          }
        },
        {
          title: "Grafos: relaciones entre entidades",
          body: "Los grafos representan conexiones entre nodos. A diferencia del árbol, no están pensados solo para jerarquías: sirven para modelar redes, rutas, recomendaciones, dependencias o relaciones sociales.",
          example: "Usuarios conectados entre sí, ciudades unidas por rutas o productos relacionados por comportamiento de compra pueden pensarse como grafos."
        },
        {
          title: "Tipos de grafos que conviene reconocer",
          body: "No hace falta dominar teoría de grafos completa desde el día uno, pero sí vale la pena ubicar estas diferencias.",
          comparisonTable: {
            columns: ["Tipo", "Qué significa", "Ejemplo"],
            rows: [
              ["Dirigido", "La conexión tiene dirección.", "Seguir a alguien en una red social."],
              ["No dirigido", "La conexión vale en ambos sentidos.", "Dos personas que son amigas."],
              ["Ponderado", "La conexión tiene peso o costo.", "Distancia entre ciudades."],
              ["No ponderado", "Solo importa si existe o no la conexión.", "Relación sí/no."]
            ]
          }
        },
        {
          title: "Por qué los grafos se conectan tan bien con ML",
          body: "Los grafos aparecen mucho en recomendación, detección de comunidades, análisis de redes y sistemas donde las relaciones entre entidades importan tanto como los atributos individuales."
        },
        {
          title: "Elegir la estructura adecuada también es eficiencia",
          body: "La gracia no es usar lo más complejo porque sí, sino elegir lo que mejor representa el problema y hace más natural la operación que necesito.",
          comparisonTable: {
            columns: ["Si necesito...", "Conviene pensar en..."],
            rows: [
              ["Modificar una colección y recorrerla fácil", "Lista"],
              ["Guardar una configuración estable", "Tupla"],
              ["Acceder rápido por nombre o clave", "Diccionario"],
              ["Quitar duplicados o comparar pertenencia", "Conjunto"],
              ["Deshacer o retroceder por pasos", "Pila"],
              ["Respetar el orden de llegada", "Cola"],
              ["Modelar jerarquías", "Árbol"],
              ["Modelar redes o conexiones", "Grafo"]
            ]
          }
        },
        {
          title: "Aplicaciones concretas en Machine Learning",
          body: "El material de clase conecta estas estructuras con tareas reales de ML y análisis.",
          comparisonTable: {
            columns: ["Estructura", "Aplicación posible"],
            rows: [
              ["Árboles", "Árboles de decisión y Random Forest."],
              ["Grafos", "Sistemas de recomendación y análisis de redes."],
              ["Diccionarios y listas", "Guardar hiperparámetros, métricas y resultados."],
              ["Colas y pilas", "Ordenar pipelines, recorridos o procesos de backtracking."]
            ]
          }
        },
        {
          title: "Herramientas de Python que ayudan",
          body: "Python ya trae varias ayudas para este mundo: listas para pilas, `collections.deque` para colas y librerías como `networkx` cuando los grafos empiezan a crecer de verdad. Esa mezcla entre estructuras nativas y ecosistema externo es una de las razones por las que Python funciona tan bien en ML."
        },
        {
          title: "Para recordar",
          body: "Esta clase no solo amplía el repertorio de estructuras: también cambia la forma de pensar problemas. Elegir bien entre lista, pila, cola, árbol o grafo puede impactar directamente en la claridad del código, la complejidad de las operaciones y la calidad del flujo analítico o del modelo."
        }
      ],
      references: [
        {
          citation:
            "Kibernum - Talento Digital. (2026). <em>Apuntes de Repaso - Modulo 2 / Clase 1: Estructuras de Datos Avanzadas en Python</em>.",
          url: "https://www.kibernumacademy.com/"
        },
        {
          citation:
            "Kibernum - Talento Digital. (2026). <em>MLM2S1-Lectura: Estructuras de Datos Avanzadas</em>.",
          url: "https://www.kibernumacademy.com/"
        },
        {
          citation:
            "Kibernum - Talento Digital. (2026). <em>MLM2S1-Leccion</em>.",
          url: "https://www.kibernumacademy.com/"
        }
      ],
      relatedIds: [
        "python-lists-tuples-and-mutability",
        "python-dictionaries-and-sets",
        "python-loops-break-and-continue"
      ]
    },
    {
      id: "algorithm-efficiency-and-big-o-for-ml",
      slug: "optimizacion-y-eficiencia-algoritmica-para-machine-learning",
      title: "Optimización y eficiencia algorítmica para Machine Learning",
      summary: "Una guía para entender por qué el análisis de algoritmos importa tanto en Machine Learning, cómo leer las notaciones `Big O`, cuándo preocuparse por tiempo vs memoria y qué herramientas usar en Python para detectar cuellos de botella reales.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Big O", "Algoritmos", "Optimización"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte sí importa en ML",
          body: "Cuando un dataset es pequeño, muchas veces cualquier solución parece suficiente. El problema aparece cuando el volumen crece, el pipeline se repite o el entrenamiento empieza a consumir demasiado tiempo o memoria. Ahí el análisis de algoritmos deja de ser teoría y pasa a ser una herramienta para decidir mejor."
        },
        {
          title: "Eficiencia no es solo velocidad",
          body: "Analizar un algoritmo implica mirar al menos dos dimensiones: cuánto tarda y cuánta memoria adicional necesita. En Machine Learning ambas importan, porque un flujo puede ser rápido pero gastar demasiados recursos, o usar poca memoria pero volverse muy lento.",
          comparisonTable: {
            columns: ["Tipo de eficiencia", "Qué mide", "Por qué importa en ML"],
            rows: [
              ["Temporal", "Tiempo de ejecución.", "Afecta entrenamiento, predicción y tiempos de espera."],
              ["Espacial", "Memoria adicional usada.", "Afecta escalabilidad, costos y estabilidad del sistema."]
            ]
          }
        },
        {
          title: "Qué representa realmente Big O",
          body: "La notación `Big O` no busca decir exactamente cuántos segundos tardará un algoritmo, sino cómo crece su costo cuando aumenta el tamaño de entrada `n`. Eso permite comparar soluciones sin depender tanto de un computador específico o de una medición puntual."
        },
        {
          title: "Curvas de crecimiento para entenderlo visualmente",
          body: "Esta gráfica ayuda mucho a ver por qué algunas complejidades escalan de forma amable y otras se disparan muy rápido cuando `n` empieza a crecer.",
          illustrations: [
            {
              src: "img/atlas/big-o-growth-curves.png",
              alt: "Curvas de crecimiento de las notaciones Big O mostrando O(1), O(log n), O(n), O(n log n) y O(n^2).",
              caption: "Mientras más rápido sube la curva, más costoso se vuelve el algoritmo al crecer la entrada. En proyectos grandes, esta diferencia deja de ser detalle y pasa a ser un factor de diseño."
            }
          ]
        },
        {
          title: "Complejidades que más conviene reconocer",
          body: "No hace falta obsesionarse con todas las notaciones desde el día uno, pero sí conviene reconocer cuáles suelen ser aceptables y cuáles se vuelven pesadas al escalar.",
          comparisonTable: {
            columns: ["Notación", "Cómo crece", "Lectura rápida"],
            rows: [
              ["`O(1)`", "Constante", "Muy eficiente: no depende de `n`."],
              ["`O(log n)`", "Logarítmica", "Excelente cuando la entrada puede dividirse por mitades."],
              ["`O(n)`", "Lineal", "Aceptable en muchos recorridos simples."],
              ["`O(n log n)`", "Lineal-logarítmica", "Muy buena en ordenamientos eficientes."],
              ["`O(n^2)`", "Cuadrática", "Se vuelve costosa rápido con volúmenes grandes."],
              ["`O(2^n)`", "Exponencial", "Escala muy mal; se evita salvo casos muy específicos."]
            ]
          }
        },
        {
          title: "Tiempo vs memoria: el trade-off clásico",
          body: "Muchas optimizaciones no son gratis. A veces conviene usar memoria extra para ahorrar tiempo, como cuando guardo resultados intermedios. Otras veces me conviene evitar estructuras muy pesadas aunque el código tarde un poco más. El criterio depende del contexto."
        },
        {
          title: "Casos de análisis: mejor, promedio y peor caso",
          body: "Un algoritmo no siempre se comporta igual. Por eso conviene diferenciar varios escenarios de análisis.",
          comparisonTable: {
            columns: ["Caso", "Qué describe", "Ejemplo con búsqueda lineal"],
            rows: [
              ["Mejor caso", "El escenario más favorable.", "El valor está en la primera posición: `O(1)`."],
              ["Caso promedio", "Lo esperable en condiciones normales.", "En promedio recorro parte importante de la lista: `O(n)`."],
              ["Peor caso", "El escenario más desfavorable.", "El valor está al final o no existe: `O(n)`."]
            ]
          }
        },
        {
          title: "Búsqueda lineal vs búsqueda binaria",
          body: "Esta comparación es de las más útiles para fijar el concepto. La búsqueda lineal recorre elemento por elemento; la binaria divide el problema por mitades, pero exige que la lista esté ordenada.",
          comparisonTable: {
            columns: ["Algoritmo", "Complejidad", "Condición clave", "Cuándo conviene"],
            rows: [
              ["Búsqueda lineal", "`O(n)`", "No exige orden previo.", "Útil cuando la lista es pequeña o no está ordenada."],
              ["Búsqueda binaria", "`O(log n)`", "La lista debe estar ordenada.", "Muy eficiente cuando trabajo con datos ordenados y búsquedas frecuentes."]
            ]
          },
          code: "def busqueda_lineal(lista, objetivo):\n    for i, valor in enumerate(lista):\n        if valor == objetivo:\n            return i\n    return -1\n\n\ndef busqueda_binaria(lista, objetivo):\n    izquierda, derecha = 0, len(lista) - 1\n    while izquierda <= derecha:\n        medio = (izquierda + derecha) // 2\n        if lista[medio] == objetivo:\n            return medio\n        if lista[medio] < objetivo:\n            izquierda = medio + 1\n        else:\n            derecha = medio - 1\n    return -1"
        },
        {
          title: "La estructura de datos también cambia la eficiencia",
          body: "A veces el problema no es solo el algoritmo, sino la estructura que elegí para resolverlo. Un `dict` puede ofrecer búsquedas casi constantes, mientras que una lista obliga a recorrer más.",
          comparisonTable: {
            columns: ["Estructura", "Operación fuerte", "Lectura práctica"],
            rows: [
              ["Lista", "Recorrido secuencial", "Flexible, pero las búsquedas pueden ser más lentas."],
              ["Diccionario", "Búsqueda por clave", "Muy útil cuando necesito acceso rápido `O(1)` aproximado."],
              ["Cola o pila", "Inserción/extracción estructurada", "Sirven cuando importa mucho el orden del procesamiento."],
              ["Árbol o grafo", "Relaciones jerárquicas o de conexión", "Aportan mucho cuando la estructura del problema lo exige."]
            ]
          }
        },
        {
          title: "Técnicas que suelen mejorar algoritmos",
          body: "Más allá de medir, también conviene reconocer enfoques clásicos que suelen volver más eficientes ciertas soluciones.",
          comparisonTable: {
            columns: ["Técnica", "Idea central", "Dónde ayuda"],
            rows: [
              ["Divide y vencerás", "Dividir el problema en partes pequeñas y combinar resultados.", "Ordenamientos y búsquedas eficientes."],
              ["Programación dinámica", "Guardar resultados intermedios para no recalcular.", "Problemas con subproblemas repetidos."],
              ["Greedy o voraz", "Tomar decisiones locales rápidas esperando una buena solución global.", "Casos donde esa heurística sí funciona bien."],
              ["Memoización", "Reusar resultados ya calculados.", "Ahorra tiempo cuando hay repetición de llamadas."]
            ]
          }
        },
        {
          title: "No optimizar sin medir",
          body: "Una regla que vale oro: antes de reescribir medio pipeline, conviene medir. Muchas veces la intuición sobre el cuello de botella falla, y las herramientas de profiling muestran otra historia."
        },
        {
          title: "Herramientas útiles en Python",
          body: "Python tiene varias herramientas sencillas para comparar implementaciones y encontrar dónde se va el tiempo.",
          comparisonTable: {
            columns: ["Herramienta", "Para qué sirve", "Cuándo la usaría"],
            rows: [
              ["`time`", "Mediciones básicas.", "Comparaciones rápidas y simples."],
              ["`timeit`", "Medir fragmentos pequeños con más precisión.", "Comparar versiones concretas de una función."],
              ["`cProfile`", "Perfilar funciones y ver dónde se consume más tiempo.", "Cuando el flujo ya es más grande y quiero detectar cuellos de botella."],
              ["`line_profiler`", "Medir por línea.", "Cuando necesito hilar más fino en una función compleja."]
            ]
          },
          code: "import timeit\n\ntiempo = timeit.timeit(\"sum(range(1000))\", number=1000)\nprint(tiempo)"
        },
        {
          title: "Por qué esto pega fuerte en Machine Learning",
          body: "En ML, eficiencia significa poder iterar más, probar más modelos, procesar más datos y gastar mejor los recursos. Un algoritmo ineficiente puede volver inviable una etapa de preprocesamiento, una búsqueda de parámetros o un flujo de inferencia repetido muchas veces."
        },
        {
          title: "Para recordar",
          body: "Big O no predice segundos exactos: muestra cómo escala el costo. `O(1)` y `O(log n)` suelen sentirse ligeros, `O(n)` es manejable, `O(n log n)` sigue siendo razonable, y `O(n^2)` o peor ya obliga a pensar más. En Machine Learning, analizar algoritmos es una forma directa de ahorrar tiempo, memoria y frustración."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Lectura sesión 4: Análisis de algoritmos</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Apuntes de repaso – Módulo 2 / Clase 4: Análisis y optimización de algoritmos en Python</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "advanced-data-structures-for-ml",
        "oop-principles-for-machine-learning-projects",
        "python-libraries-modules-and-numpy"
      ]
    },
    {
      id: "pythonic-optimization-and-jit-for-ml",
      slug: "optimizacion-pythonic-y-jit-para-machine-learning",
      title: "Optimización Pythonic y JIT para Machine Learning",
      summary: "Una guía para optimizar código en Python sin perder claridad, entendiendo cuándo conviene usar estilo `Pythonic`, vectorización, generadores, profiling y compilación `JIT` para consumir mejor CPU y memoria dentro de flujos de Machine Learning.",
      category: "Machine Learning",
      type: "Guía",
      level: "advanced",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Machine Learning", "Pythonic", "Numba", "JIT"],
      featured: true,
      contentSections: [
        {
          title: "Optimizar no es solo hacerlo más rápido",
          body: "Cuando hablo de optimización en Python, no se trata únicamente de bajar milisegundos. También se trata de consumir mejor CPU, usar menos memoria cuando haga falta, mantener el código legible y evitar que un flujo crezca de forma desordenada a medida que sube el volumen de datos."
        },
        {
          title: "Qué significa escribir código Pythonic",
          body: "El estilo `Pythonic` busca escribir código idiomático, claro y coherente con la filosofía del lenguaje. En la práctica, eso suele mejorar legibilidad y muchas veces también rendimiento, porque aprovecha herramientas internas ya optimizadas.",
          comparisonTable: {
            columns: ["Enfoque", "Versión más recomendable"],
            rows: [
              ["Revisar lista vacía", "`if not lista:`"],
              ["Sumar elementos", "`sum(lista)` en vez de un `for` manual cuando aplique"],
              ["Crear listas filtradas", "List comprehensions en vez de varios `append()` dispersos"],
              ["Abrir archivos", "`with open(...) as f:`"]
            ]
          }
        },
        {
          title: "Primera regla sana: medir antes de optimizar",
          body: "Antes de tocar el código, conviene confirmar dónde está el cuello de botella real. Optimizar sin medir suele terminar en micro-ajustes bonitos pero irrelevantes.",
          bestPractices: [
            "Usar `timeit` para comparar fragmentos pequeños.",
            "Usar `cProfile` cuando el flujo ya tiene varias funciones.",
            "Evitar suponer que el problema está donde más me molesta leer el código.",
            "Priorizar cambios con impacto real antes que micro-optimizaciones."
          ]
        },
        {
          title: "Herramientas de profiling que sí conviene recordar",
          body: "Cada herramienta sirve mejor en un nivel distinto del análisis de rendimiento.",
          comparisonTable: {
            columns: ["Herramienta", "Para qué sirve", "Cuándo la usaría"],
            rows: [
              ["`timeit`", "Medir bloques pequeños con más precisión.", "Comparar dos implementaciones de una misma operación."],
              ["`cProfile`", "Ver qué funciones consumen más tiempo.", "Analizar pipelines completos o scripts más largos."],
              ["`line_profiler`", "Revisar costo línea por línea.", "Detectar el punto exacto donde una función pesada se ralentiza."]
            ]
          }
        },
        {
          title: "Funciones integradas: pequeñas decisiones que sí suman",
          body: "Muchas funciones nativas de Python como `sum()`, `min()`, `max()` o `sorted()` ya están optimizadas internamente. Por eso muchas veces conviene usarlas antes que reconstruir la lógica con bucles manuales."
        },
        {
          title: "List comprehensions y generadores",
          body: "Las comprehensions ayudan a escribir código más compacto y normalmente más rápido que un `for` con `append`. Los generadores, en cambio, destacan cuando necesito procesar muchos datos sin cargarlos completos en memoria.",
          comparisonTable: {
            columns: ["Herramienta", "Ventaja principal", "Cuándo aporta más"],
            rows: [
              ["List comprehension", "Más legible y compacta.", "Cuando necesito construir una lista final."],
              ["Generador", "Ahorra memoria al producir bajo demanda.", "Cuando trabajo con grandes volúmenes o streaming."]
            ]
          },
          code: "cuadrados = [x**2 for x in range(10) if x % 2 == 0]\n\npares = (x for x in range(10) if x % 2 == 0)"
        },
        {
          title: "Context managers: también son optimización",
          body: "Optimizar no es solo acelerar cálculos; también es manejar mejor recursos. Un `context manager` ayuda a abrir y cerrar archivos o conexiones de forma segura y automática, evitando fugas o bloqueos innecesarios.",
          code: "with open('datos.txt', encoding='utf-8') as f:\n    datos = f.read()"
        },
        {
          title: "Vectorización con NumPy y Pandas",
          body: "Una de las optimizaciones más importantes en Python para datos es evitar bucles explícitos cuando puedo usar operaciones vectorizadas. NumPy y Pandas delegan muchas operaciones a rutinas optimizadas en C y Fortran, por eso suelen rendir mucho mejor que iterar fila por fila en Python puro.",
          code: "import numpy as np\n\narr = np.array([1, 2, 3, 4])\nresultado = arr * 2"
        },
        {
          title: "Elegir bien los contenedores también optimiza",
          body: "La estructura elegida puede cambiar drásticamente el rendimiento sin tocar demasiado el algoritmo.",
          comparisonTable: {
            columns: ["Estructura", "Fortaleza", "Uso típico"],
            rows: [
              ["Lista", "Orden y recorrido secuencial.", "Colecciones donde importa el orden."],
              ["Set", "Pertenencia rápida.", "Eliminar duplicados o validar existencia."],
              ["Diccionario", "Acceso rápido por clave.", "Mapeos, configuraciones y búsquedas frecuentes."]
            ]
          }
        },
        {
          title: "JIT con Numba: qué hace realmente",
          body: "La compilación `Just-In-Time` traduce ciertas funciones numéricas de Python a código máquina optimizado durante la ejecución. En la práctica, `Numba` sirve sobre todo para acelerar cálculos intensivos en **CPU**, especialmente cuando hay bucles numéricos o trabajo repetitivo que Python puro ejecuta lento.",
          code: "from numba import njit\n\n@njit\ndef suma_rapida(a):\n    total = 0\n    for x in a:\n        total += x\n    return total"
        },
        {
          title: "Entonces, ¿JIT cuida CPU o GPU?",
          body: "Si hablo de `Numba` en este contexto, el foco principal está en usar mejor **CPU** y reducir tiempos de ejecución del código numérico. Eso también puede evitar gasto innecesario de memoria y bajar presión general del sistema. La **GPU** entra más claramente cuando uso herramientas como `CuPy` o flujos diseñados para computación paralela en tarjeta gráfica."
        },
        {
          title: "CuPy, Dask y Ray: cuándo aparecen",
          body: "Estas herramientas apuntan a escenarios más grandes o más específicos de escalado.",
          comparisonTable: {
            columns: ["Herramienta", "Qué hace", "Dónde aporta"],
            rows: [
              ["`CuPy`", "Replica muchas operaciones tipo NumPy pero en GPU.", "Cálculo numérico masivo sobre tarjeta gráfica."],
              ["`Dask`", "Distribuye arrays y dataframes.", "Procesar datasets grandes sin cambiar tanto la lógica."],
              ["`Ray`", "Facilita tareas distribuidas o paralelas.", "Pipelines y cargas que ya escalan más allá de un solo proceso."]
            ]
          }
        },
        {
          title: "Qué sí buscar al optimizar en ML",
          body: "La meta no es exprimir la máquina por deporte. La idea es consumir menos recursos, entrenar con más estabilidad, iterar mejor y no matar tan rápido CPU, memoria o incluso GPU cuando el caso ya usa aceleración. Optimizar bien también hace que el pipeline sea más sostenible y más barato de ejecutar."
        },
        {
          title: "Para recordar",
          body: "Código Pythonic no es solo estilo bonito: también puede ser más eficiente. Primero conviene medir, luego usar funciones integradas, comprehensions, generadores, context managers y vectorización. `Numba` con `JIT` apunta sobre todo a acelerar trabajo numérico en CPU; si el problema ya es de GPU, el paralelo más natural en esta clase va más por `CuPy`."
        }
      ],
      references: [
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Lectura sesión 5: Optimización de código</em>.",
          url: ""
        },
        {
          citation:
            "Kibernum Capacitación S. A. (2026). <em>Apuntes de repaso – Módulo 2 / Clase 5: Optimización y código Pythonic</em>.",
          url: ""
        }
      ],
      relatedIds: [
        "algorithm-efficiency-and-big-o-for-ml",
        "python-libraries-modules-and-numpy",
        "python-exception-handling-for-data-workflows"
      ]
    },
    {
      id: "python-libraries-modules-and-numpy",
      slug: "librerias-modulos-y-numpy-en-python",
      title: "Librerías, módulos y NumPy en Python",
      summary: "Una guía para entender cómo se organizan las librerías en Python, qué bibliotecas aparecen más en análisis de datos y por qué NumPy suele ser una de las primeras piezas clave para ordenar mejor un EDA.",
      category: "Programación",
      type: "Guía",
      level: "intermediate",
      readingTime: "13 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "NumPy", "Librerías", "EDA"],
      featured: false,
      contentSections: [
        {
          title: "Por qué las librerías cambian tanto el juego",
          body: "Python por sí solo ya es útil, pero cuando empiezas a importar librerías aparece gran parte de su poder real para análisis de datos. Ahí es donde dejas de resolver todo manualmente y empiezas a reutilizar herramientas ya probadas para cálculo, tablas, visualización y modelado."
        },
        {
          title: "Biblioteca, paquete y módulo: cómo pensarlo sin enredarse",
          body: "En la práctica los términos a veces se mezclan, pero conviene tener una idea base clara.",
          comparisonTable: {
            columns: ["Concepto", "Idea simple", "Ejemplo"],
            rows: [
              ["Biblioteca", "Conjunto amplio de herramientas reutilizables.", "`NumPy`, `pandas`, `matplotlib`"],
              ["Paquete", "Unidad instalable que agrupa componentes.", "Muchas veces se usa casi como sinónimo de biblioteca."],
              ["Módulo", "Subparte más específica de una biblioteca.", "`matplotlib.pyplot`"]
            ]
          }
        },
        {
          title: "Importar bien también es una buena práctica",
          body: "Importar una librería es traer sus herramientas al entorno de trabajo. La forma en que importas afecta la legibilidad del código.",
          code: "import numpy\nnumpy.array([2, 4, 6])\n\nimport numpy as np\nnp.array([2, 4, 6])",
          bestPractices: [
            "Preferir alias convencionales como `np`, `pd`, `sns` y `plt`.",
            "Evitar `from modulo import *` porque vuelve más difícil entender de dónde viene cada función.",
            "Importar lo necesario de forma clara y consistente."
          ]
        },
        {
          title: "Los alias más comunes en análisis de datos",
          body: "Hay ciertos alias que ya funcionan casi como estándar entre analistas.",
          code: "import numpy as np\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt"
        },
        {
          title: "Librerías que conviene reconocer desde temprano",
          body: "Cada una cumple un rol distinto dentro del flujo analítico.",
          comparisonTable: {
            columns: ["Librería", "Para qué sirve", "Cuándo aparece"],
            rows: [
              ["`NumPy`", "Cálculo numérico, vectores y arrays.", "Base para transformar y operar datos numéricos."],
              ["`pandas`", "Manipular tablas y columnas.", "EDA, limpieza, joins, filtros."],
              ["`matplotlib`", "Visualizaciones base.", "Gráficos y personalización."],
              ["`seaborn`", "Visualizaciones estadísticas más cómodas.", "Distribuciones, correlaciones, comparativas."],
              ["`scikit-learn`", "Modelado y métricas.", "Machine learning y evaluación."]
            ]
          }
        },
        {
          title: "También existen módulos integrados muy útiles",
          body: "No todo requiere instalación externa. Python trae varios módulos estándar que ayudan bastante.",
          comparisonTable: {
            columns: ["Módulo", "Uso típico", "Ejemplo mental"],
            rows: [
              ["`datetime`", "Fechas y tiempos.", "Trabajar con periodos y diferencias de días."],
              ["`math`", "Funciones matemáticas.", "Raíces, logaritmos, factoriales."],
              ["`random`", "Valores pseudoaleatorios.", "Muestras simples o selecciones al azar."]
            ]
          }
        },
        {
          title: "Dónde entra NumPy dentro de un EDA",
          body: "NumPy no reemplaza a `pandas`, pero le da una base numérica muy fuerte al trabajo analítico. Ayuda a representar datos en arrays, aplicar operaciones rápidas sobre bloques completos y ordenar mejor la lógica cuando trabajas con variables numéricas, transformaciones y estructuras matriciales."
        },
        {
          title: "Qué es un array de NumPy",
          body: "El objeto central de NumPy es el `ndarray`, un arreglo n-dimensional. Se parece a una lista, pero está pensado para cálculo numérico más eficiente y estructurado.",
          code: "import numpy as np\n\narray_1d = np.array([1, 2, 3])\narray_2d = np.array([(1, 2, 3), (4, 5, 6)])\narray_3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])"
        },
        {
          title: "Por qué NumPy suele sentirse más ordenado que una lista común",
          body: "Cuando haces EDA, muchas veces no solo quieres guardar datos: quieres operar sobre ellos, resumirlos, transformarlos y mantener una forma consistente. Ahí NumPy ayuda mucho porque fuerza una estructura más regular y vuelve más natural trabajar por filas, columnas o dimensiones."
        },
        {
          title: "Crear arrays con valores base",
          body: "NumPy también facilita crear estructuras vacías o prellenadas para luego poblarlas o transformarlas.",
          code: "np.zeros((3, 2))\nnp.ones((2, 2))\nnp.full((5, 3), 8)",
          example: "Esto sirve cuando quiero preparar una estructura de tamaño conocido antes de cargar o calcular valores."
        },
        {
          title: "Atributos que ayudan a entender la forma de los datos",
          body: "Antes de analizar, conviene leer bien la estructura del array.",
          code: "array_2d = np.array([(1, 2, 3), (4, 5, 6)])\n\nprint(array_2d.shape)\nprint(array_2d.dtype)\nprint(array_2d.size)\nprint(array_2d.T)",
          comparisonTable: {
            columns: ["Atributo", "Qué indica"],
            rows: [
              ["`shape`", "Dimensiones del array."],
              ["`dtype`", "Tipo de dato del contenido."],
              ["`size`", "Cantidad total de elementos."],
              ["`T`", "Transpuesta del array."]
            ]
          }
        },
        {
          title: "Métodos muy útiles en NumPy",
          body: "Hay varios métodos que ayudan a reorganizar o resumir la información con rapidez.",
          comparisonTable: {
            columns: ["Método", "Qué hace", "Ejemplo"],
            rows: [
              ["`flatten()`", "Aplana el array a una dimensión.", "`a.flatten()`"],
              ["`reshape()`", "Reordena la forma sin cambiar los datos.", "`a.reshape(3, 2)`"],
              ["`tolist()`", "Convierte el array a lista.", "`a.tolist()`"],
              ["`mean()`", "Calcula la media.", "`a.mean()`"],
              ["`max()` / `min()`", "Busca extremos.", "`a.max()`"],
              ["`std()`", "Calcula desviación estándar.", "`a.std()`"]
            ]
          }
        },
        {
          title: "Indexación y slicing en arrays",
          body: "NumPy conserva la lógica de indexación, pero al trabajar con más dimensiones gana mucha más potencia.",
          code: "a = np.array([(1, 2, 3), (4, 5, 6)])\n\nprint(a[1])\nprint(a[0, 1])\nprint(a[1, 2])\nprint(a[:, 1:])"
        },
        {
          title: "Operaciones vectorizadas: el gran salto",
          body: "Una de las mayores ventajas de NumPy es que muchas operaciones se aplican a todo el array de forma directa, sin necesidad de recorrer cada elemento manualmente con un `for`.",
          code: "a = np.array([(1, 2, 3), (4, 5, 6)])\nb = np.array([[1, 2, 3], [1, 2, 3]])\n\nprint(a + b)\nprint(a.mean())\nprint(a.std())",
          example: "En EDA esto acelera mucho cálculos, escalados, resúmenes y transformaciones numéricas."
        },
        {
          title: "NumPy y el orden en un EDA",
          body: "En un análisis exploratorio, NumPy ayuda a tener una base más disciplinada para trabajar con datos numéricos: revisar forma, controlar tipos, resumir distribuciones, reestructurar matrices y aplicar operaciones consistentes. No hace el EDA solo, pero sí ordena muy bien la capa numérica del trabajo."
        },
        {
          title: "Versiones y entorno: por qué conviene prestar atención",
          body: "Python y sus librerías cambian con el tiempo. Eso significa que versiones distintas pueden comportarse diferente o marcar funciones como obsoletas.",
          code: "import sys\nprint(sys.version)\n\nimport numpy as np\nimport pandas as pd\nprint(np.__version__)\nprint(pd.__version__)",
          bestPractices: [
            "Revisar versiones cuando algo no se comporta igual entre equipos.",
            "Tener entornos consistentes en trabajos colaborativos.",
            "No ignorar advertencias de deprecación si el proyecto seguirá vivo."
          ]
        },
        {
          title: "Para recordar",
          body: "Las librerías amplían muchísimo lo que puedes hacer con Python, pero para datos hay un trío que aparece muy rápido: `NumPy` para cálculo y estructura numérica, `pandas` para tablas y `matplotlib` o `seaborn` para visualizar. Si entiendes bien cómo entra NumPy en ese flujo, ya estás armando una base mucho más sólida para el EDA."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Comprender las bibliotecas, paquetes y módulos de Python</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Nuevas versiones y funciones de Python</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Matrices</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-dictionaries-and-sets",
        "python-lists-tuples-and-mutability",
        "python-string-indexing-slicing-and-formatting"
      ]
    },
    {
      id: "pandas-dataframes-masks-and-groupby",
      slug: "pandas-dataframes-enmascaramiento-y-agrupacion",
      title: "Pandas, DataFrames, enmascaramiento y agrupación",
      summary: "Una guía para entender por qué `pandas` es tan importante en análisis de datos, cómo funcionan los `DataFrame`, cómo usar máscaras booleanas para filtrar mejor y por qué `groupby()` ayuda tanto a resumir y proyectar hallazgos.",
      category: "Programación",
      type: "Guía",
      level: "intermediate",
      readingTime: "14 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Pandas", "DataFrame", "EDA"],
      featured: false,
      contentSections: [
        {
          title: "Por qué pandas aparece tan rápido en análisis de datos",
          body: "Cuando el trabajo deja de ser solo números sueltos y pasa a ser tablas, columnas, filtros, fechas, nulos y resúmenes, `pandas` se vuelve una de las herramientas más útiles de Python. En la práctica, es una de las librerías más importantes para hacer EDA de forma ordenada."
        },
        {
          title: "Series y DataFrame: las dos estructuras base",
          body: "Pandas trabaja sobre dos estructuras principales. Una `Series` es parecida a una sola columna etiquetada. Un `DataFrame` es una estructura bidimensional, muy similar a una tabla u hoja de cálculo.",
          comparisonTable: {
            columns: ["Estructura", "Cómo pensarla", "Uso típico"],
            rows: [
              ["`Series`", "Una columna etiquetada.", "Trabajar una variable específica."],
              ["`DataFrame`", "Una tabla completa.", "Explorar, filtrar y resumir datos tabulares."]
            ]
          }
        },
        {
          title: "Por qué el DataFrame es tan importante",
          body: "El `DataFrame` ayuda a ordenar la información en filas y columnas con etiquetas claras. Eso hace mucho más natural revisar tipos de datos, filtrar subconjuntos, seleccionar variables, crear métricas y resumir resultados antes de visualizarlos o modelarlos."
        },
        {
          title: "Formas comunes de crear un DataFrame",
          body: "Puedes construir un DataFrame desde distintas fuentes según el caso.",
          code: "import pandas as pd\nimport numpy as np\n\nd = {'col1': [1, 2], 'col2': [3, 4]}\ndf = pd.DataFrame(data=d)\n\ndf2 = pd.DataFrame(\n    np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),\n    columns=['a', 'b', 'c']\n)\n\n# df3 = pd.read_csv('/file_path/file_name.csv')"
        },
        {
          title: "Atributos y métodos que sí conviene reconocer",
          body: "Parte del poder de pandas está en sus atributos y métodos. Los atributos describen el objeto; los métodos hacen cosas con él.",
          comparisonTable: {
            columns: ["Herramienta", "Tipo", "Para qué sirve"],
            rows: [
              ["`columns`", "Atributo", "Ver nombres de columnas."],
              ["`dtypes`", "Atributo", "Revisar tipos de datos."],
              ["`shape`", "Atributo", "Ver filas y columnas."],
              ["`loc` / `iloc`", "Atributo indexador", "Seleccionar por etiqueta o posición."],
              ["`head()`", "Método", "Ver primeras filas."],
              ["`info()`", "Método", "Resumen rápido del DataFrame."],
              ["`describe()`", "Método", "Resumen estadístico."],
              ["`isna()`", "Método", "Detectar nulos."],
              ["`sort_values()`", "Método", "Ordenar datos."],
              ["`groupby()`", "Método", "Agrupar para resumir."]
            ]
          }
        },
        {
          title: "Seleccionar bien también es parte del análisis",
          body: "Antes de resumir o visualizar, casi siempre hay que seleccionar mejor los datos. Pandas permite hacerlo por filas, columnas o ambas dimensiones al mismo tiempo.",
          code: "df['C']\ndf[['A', 'C']]\ndf.loc['row_0':'row_2', ['A', 'C']]\ndf.iloc[[2, 4], 0:3]"
        },
        {
          title: "Enmascaramiento booleano: filtrar con intención",
          body: "El enmascaramiento booleano permite superponer una condición `True`/`False` sobre el DataFrame para quedarte solo con las filas que cumplen una regla específica. Esto es clave para no analizar ruido o mezclar casos que deberían separarse.",
          code: "data = {\n    'planet': ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],\n    'radius_km': [2440, 6052, 6371, 3390, 69911, 58232, 25362, 24622],\n    'moons': [0, 0, 1, 2, 80, 83, 27, 14]\n}\n\ndf = pd.DataFrame(data)\nprint(df[df['moons'] < 20])"
        },
        {
          title: "Por qué las máscaras mejoran tanto un análisis",
          body: "Un buen filtro hace que tus comparaciones sean más justas y más claras. En vez de mirar todo junto, puedes analizar solo un segmento relevante: casos con mora, clientes de cierto rango, productos activos o registros con una condición específica."
        },
        {
          title: "Guardar la máscara también ayuda",
          body: "Cuando la condición importa de verdad, conviene guardarla en una variable para que el código sea más legible y reutilizable.",
          code: "mask = df['moons'] < 20\ndf_filtrado = df[mask]\n\nprint(df.loc[mask, 'planet'])"
        },
        {
          title: "Condiciones múltiples en pandas",
          body: "Cuando el filtro ya no depende de una sola regla, pandas usa operadores lógicos propios para combinar condiciones.",
          comparisonTable: {
            columns: ["Operador", "Significa"],
            rows: [
              ["`&`", "and"],
              ["`|`", "or"],
              ["`~`", "not"]
            ]
          },
          code: "mask = (df['moons'] < 10) | (df['moons'] > 50)\ndf[mask]\n\nmask = (df['moons'] > 20) & (df['moons'] != 80) & (df['radius_km'] >= 50000)\ndf[mask]",
          bestPractices: [
            "Encerrar cada condición entre paréntesis.",
            "Separar reglas complejas para que el filtro siga siendo legible.",
            "Usar máscaras con nombre cuando el criterio importa dentro del análisis."
          ]
        },
        {
          title: "Agrupar datos: cuándo empieza a verse el patrón",
          body: "Filtrar ayuda a enfocarse; agrupar ayuda a resumir. `groupby()` divide los datos en grupos según una o más columnas y luego permite aplicar funciones para entender mejor cada segmento."
        },
        {
          title: "groupby() como herramienta de resumen",
          body: "Una vez agrupados los datos, puedes calcular medias, sumas, mínimos, máximos, tamaños de grupo y otras métricas.",
          code: "clothes = pd.DataFrame({\n    'type': ['pants', 'shirt', 'shirt', 'pants', 'shirt', 'pants'],\n    'color': ['red', 'blue', 'green', 'blue', 'green', 'red'],\n    'price_usd': [20, 35, 50, 40, 100, 75],\n    'mass_g': [125, 440, 680, 200, 395, 485]\n})\n\nclothes.groupby('type').mean()\nclothes.groupby(['type', 'color']).size()"
        },
        {
          title: "Por qué agrupar mejora tanto la proyección de resultados",
          body: "Agrupar permite pasar de observaciones sueltas a patrones interpretables. Ahí es donde empiezas a responder preguntas como qué categoría vende más, qué grupo tiene mayor media, qué segmento presenta más dispersión o dónde conviene profundizar después con una visualización."
        },
        {
          title: "Funciones de agregación que más conviene recordar",
          body: "Varias de estas funciones aparecen una y otra vez en análisis.",
          comparisonTable: {
            columns: ["Función", "Para qué sirve"],
            rows: [
              ["`count()`", "Contar valores no nulos."],
              ["`sum()`", "Sumar valores."],
              ["`mean()`", "Promediar."],
              ["`median()`", "Ver valor central más robusto."],
              ["`min()` / `max()`", "Detectar extremos."],
              ["`std()` / `var()`", "Medir dispersión."],
              ["`size()`", "Contar observaciones del grupo."]
            ]
          }
        },
        {
          title: "agg(): varias métricas al mismo tiempo",
          body: "El método `agg()` permite aplicar múltiples funciones de agregación de forma ordenada, ya sea sobre columnas sueltas o combinándolo con `groupby()`.",
          code: "clothes[['price_usd', 'mass_g']].agg(['sum', 'mean'])\n\nclothes.agg({\n    'price_usd': 'sum',\n    'mass_g': ['mean', 'median']\n})\n\nclothes.groupby('color').agg({\n    'price_usd': ['mean', 'max'],\n    'mass_g': ['mean', 'max']\n})"
        },
        {
          title: "Una idea rápida sobre MultiIndex",
          body: "Cuando agrupas por varias columnas o aplicas varias funciones, pandas puede devolver estructuras jerárquicas llamadas `MultiIndex`. No hace falta dominarlo todo al principio, pero sí conviene reconocer que es normal que aparezca después de ciertos `groupby()` y `agg()`."
        },
        {
          title: "Para recordar",
          body: "Pandas se vuelve potente cuando combinas tres capas: entender el `DataFrame`, filtrar con máscaras booleanas y resumir con `groupby()` y `agg()`. Ese flujo es una de las bases más útiles de un EDA bien ordenado, porque te ayuda a pasar de datos crudos a conclusiones más claras y proyectables."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Los fundamentos de los pandas</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Enmascaramiento booleano en pandas</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Más sobre agrupación y agregación</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-libraries-modules-and-numpy",
        "python-dictionaries-and-sets",
        "python-lists-tuples-and-mutability"
      ]
    },
    {
      id: "analysis-libraries-python-and-r",
      slug: "librerias-para-analisis-en-python-y-su-paralelo-en-r",
      title: "Librerías para análisis en Python y su paralelo en R",
      summary: "Una guía para ubicar las librerías más usadas en análisis de datos, entender para qué sirve cada una y reconocer qué herramientas equivalentes suelen aparecer en R para resolver problemas parecidos.",
      category: "Programación",
      type: "Guía",
      level: "intermediate",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "R", "Librerías", "Análisis"],
      featured: false,
      contentSections: [
        {
          title: "Por qué conviene tener este mapa mental",
          body: "Cuando uno empieza a trabajar análisis más completos, ya no basta con saber Python o R en abstracto: también hay que reconocer qué librería usar según la tarea. Tener claro ese ecosistema acelera mucho el EDA, la limpieza, la visualización y hasta el modelado."
        },
        {
          title: "Aclaración importante: Python y R no comparten siempre las mismas librerías",
          body: "Muchas herramientas cumplen funciones muy parecidas entre ambos lenguajes, pero no siempre son exactamente la misma librería. Lo más correcto es pensar en equivalencias o paralelos: misma idea de trabajo, aunque a veces cambie el nombre, la sintaxis o el enfoque."
        },
        {
          title: "La lógica base suele repetirse entre ecosistemas",
          body: "Aunque cambien los nombres, casi siempre vas a encontrar cuatro grandes capas: trabajo numérico, trabajo tabular, visualización y modelado. Aprender esa estructura ayuda muchísimo a moverse entre Python y R sin sentirse perdido."
        },
        {
          title: "Mapa rápido de librerías y equivalentes",
          body: "Esta tabla sirve como brújula inicial más que como listado absoluto.",
          comparisonTable: {
            columns: ["Objetivo", "Python", "R", "Para qué sirve"],
            rows: [
              ["Cálculo numérico", "`NumPy`", "`base R`, `matrixStats`", "Trabajar vectores, matrices y operaciones numéricas."],
              ["Datos tabulares", "`pandas`", "`dplyr`, `data.table`, `tibble`", "Filtrar, agrupar, unir y transformar tablas."],
              ["Visualización base", "`matplotlib`", "`ggplot2`", "Construir gráficos con control detallado."],
              ["Visualización estadística", "`seaborn`", "`ggplot2` + extensiones", "Explorar distribuciones, correlaciones y comparativas."],
              ["Machine learning", "`scikit-learn`", "`caret`, `tidymodels`", "Preparar, entrenar y evaluar modelos."],
              ["Notebooks / exploración", "`Jupyter`, `Colab`", "`R Markdown`, `Quarto`", "Documentar análisis reproducibles."]
            ]
          }
        },
        {
          title: "NumPy: la base numérica más ordenada en Python",
          body: "Si el análisis empieza a crecer y tienes muchas variables numéricas, NumPy suele ser una de las primeras librerías que ordena el trabajo. Sus arrays obligan a pensar mejor la forma de los datos, aplicar operaciones consistentes y evitar muchos cálculos manuales desordenados."
        },
        {
          title: "Por qué NumPy ayuda tanto en un EDA",
          body: "En un EDA no todo es gráficos: primero hay que revisar estructura, tipos, forma, escalas, valores extremos y resúmenes rápidos. NumPy aporta una base muy útil para esa capa numérica, especialmente cuando trabajas con matrices, cálculos vectorizados o transformaciones repetitivas.",
          bestPractices: [
            "Revisar `shape`, `dtype` y `size` para entender la estructura.",
            "Usar operaciones vectorizadas en vez de demasiados `for`.",
            "Aprovechar `mean()`, `std()`, `min()` y `max()` para explorar distribuciones rápido."
          ]
        },
        {
          title: "Pandas: cuando el dato ya se parece a una hoja de cálculo",
          body: "Si NumPy ordena la parte numérica, pandas ordena la parte tabular. Es probablemente la librería más importante para un EDA cotidiano cuando trabajas con filas, columnas, nulos, filtros, agrupaciones y joins.",
          comparisonTable: {
            columns: ["Necesidad", "Con pandas", "Idea equivalente en R"],
            rows: [
              ["Filtrar filas", "`df[mask]`", "`filter()`"],
              ["Seleccionar columnas", "`df[['col']]`", "`select()`"],
              ["Agrupar y resumir", "`groupby()` + `agg()`", "`group_by()` + `summarise()`"],
              ["Ordenar", "`sort_values()`", "`arrange()`"]
            ]
          }
        },
        {
          title: "Matplotlib y seaborn: ver el patrón",
          body: "Después de limpiar y resumir, toca contar la historia visual. `matplotlib` da control fino; `seaborn` facilita gráficos estadísticos más listos para explorar relaciones y distribuciones. En R, `ggplot2` suele ocupar ese rol central con una lógica gramatical muy potente."
        },
        {
          title: "scikit-learn y sus paralelos en R",
          body: "Cuando el análisis pasa de explorar a modelar, aparece `scikit-learn` en Python. En R suele hablarse más de `caret` o `tidymodels`. Cambia la sintaxis, pero la lógica es parecida: preparar datos, dividir muestras, entrenar, validar y comparar modelos."
        },
        {
          title: "Qué librería conviene priorizar según la tarea",
          body: "Esta decisión depende mucho del momento del análisis.",
          comparisonTable: {
            columns: ["Si necesito...", "Conviene partir por..."],
            rows: [
              ["Trabajar matrices o cálculos numéricos", "`NumPy`"],
              ["Explorar tablas y limpiar columnas", "`pandas`"],
              ["Graficar rápido y entender distribuciones", "`seaborn` o `matplotlib`"],
              ["Entrenar modelos básicos", "`scikit-learn`"],
              ["Moverme en R con lógica equivalente", "`dplyr`, `ggplot2`, `tidymodels`"]
            ]
          }
        },
        {
          title: "No se trata solo de aprender nombres",
          body: "Lo más importante no es memorizar veinte librerías, sino entender qué problema resuelve cada familia de herramientas. Si comprendes esa lógica, después cambiar de Python a R se vuelve mucho más llevadero."
        },
        {
          title: "Para recordar",
          body: "En Python, un flujo muy común para análisis es `NumPy + pandas + seaborn/matplotlib`, y si hay modelado, `scikit-learn`. En R cambian varios nombres, pero el objetivo suele ser el mismo: ordenar, resumir, visualizar y proyectar mejor los datos."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Comprender las bibliotecas, paquetes y módulos de Python</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Los fundamentos de los pandas</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía de referencia: Matrices</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "python-libraries-modules-and-numpy",
        "pandas-dataframes-masks-and-groupby",
        "python-introduction-and-comparison"
      ]
    },
    {
      id: "python-exception-handling-for-data-workflows",
      slug: "manejo-de-excepciones-en-python-para-flujos-de-datos",
      title: "Manejo de excepciones en Python para flujos de datos",
      summary: "Una guía avanzada para usar `try`, `except`, `else`, `finally` y `raise` al leer archivos, validar datos y evitar que un error interrumpa por completo un flujo de análisis o Machine Learning.",
      category: "Código",
      type: "Guía",
      level: "advanced",
      readingTime: "11 min",
      updatedAt: "2026-08-03",
      tags: ["Python", "Excepciones", "Errores", "Machine Learning"],
      featured: false,
      contentSections: [
        {
          title: "Por qué este tema sí importa en análisis y ML",
          body: "Cuando trabajo con datos reales, rara vez todo viene perfecto. Puede faltar un archivo, aparecer un valor inválido, cambiar el tipo de dato de una columna o romperse una conversión. El manejo de excepciones sirve justamente para que esos fallos no boten todo el flujo y para decidir con más criterio cómo responder."
        },
        {
          title: "Excepción no es lo mismo que error de sintaxis",
          body: "Una excepción ocurre en tiempo de ejecución. Es decir, el programa sí parte, pero en algún punto se encuentra con una situación inesperada. Eso es distinto a un error de sintaxis, donde el código ni siquiera puede ejecutarse."
        },
        {
          title: "Qué gano al manejar excepciones bien",
          body: "Un buen control de excepciones mejora la robustez del sistema, evita caídas bruscas, ayuda a entregar mensajes más claros y hace más fácil mantener procesos largos como cargas de datos, limpieza, entrenamiento o validación de modelos.",
          comparisonTable: {
            columns: ["Beneficio", "Aplicación en datos"],
            rows: [
              ["Robustez", "Evitar que una lectura defectuosa detenga todo el pipeline."],
              ["Trazabilidad", "Identificar con claridad qué falló y dónde."],
              ["Mejor experiencia", "Entregar mensajes entendibles en vez de un quiebre abrupto."],
              ["Mantenibilidad", "Separar mejor los casos esperados de error."]
            ]
          }
        },
        {
          title: "La estructura base: try, except, else y finally",
          body: "La lógica general es simple: `try` contiene el bloque riesgoso, `except` captura errores concretos, `else` corre solo si no hubo problema y `finally` se ejecuta siempre, ideal para cerrar archivos o liberar recursos.",
          code: "try:\n    archivo = open('numeros.txt', 'r', encoding='utf-8')\n    datos = [int(linea.strip()) for linea in archivo]\nexcept FileNotFoundError:\n    print('Archivo no encontrado.')\nexcept ValueError:\n    print('Se detectó un dato inválido.')\nelse:\n    print('Lectura exitosa:', datos)\nfinally:\n    try:\n        archivo.close()\n    except NameError:\n        pass\n    print('Fin del proceso.')"
        },
        {
          title: "Errores comunes que sí conviene reconocer",
          body: "Hay excepciones que aparecen una y otra vez cuando uno manipula información en Python.",
          comparisonTable: {
            columns: ["Excepción", "Cuándo aparece", "Ejemplo típico"],
            rows: [
              ["`FileNotFoundError`", "Cuando el archivo no existe.", "Ruta mal escrita o archivo faltante."],
              ["`ValueError`", "Cuando el tipo base es correcto, pero el valor no sirve.", "Intentar convertir `'abc'` a entero."],
              ["`TypeError`", "Cuando la operación no calza con el tipo de dato.", "Sumar texto con números."],
              ["`KeyError`", "Cuando no existe una clave en un diccionario.", "Acceder a una columna mapeada que no está."],
              ["`IndexError`", "Cuando se pide una posición fuera de rango.", "Tomar una fila inexistente de una lista."],
              ["`ZeroDivisionError`", "Cuando se divide por cero.", "Cálculo de ratios sin control previo."]
            ]
          }
        },
        {
          title: "Aplicado a lectura de archivos y datos",
          body: "En flujos de datos, las excepciones ayudan a distinguir si falló la ruta, el formato, la conversión o la estructura del contenido. Eso permite reaccionar distinto según el problema en vez de tratar todo como un error genérico.",
          code: "def cargar_puntajes(ruta):\n    try:\n        with open(ruta, 'r', encoding='utf-8') as archivo:\n            return [float(linea.strip()) for linea in archivo if linea.strip()]\n    except FileNotFoundError:\n        print('No se encontró el archivo de puntajes.')\n        return []\n    except ValueError:\n        print('Hay un valor no numérico dentro del archivo.')\n        return []"
        },
        {
          title: "Else y finally dan más control del flujo",
          body: "Muchas veces `else` se subestima, pero sirve mucho para separar el camino exitoso del manejo de errores. `finally`, en cambio, ayuda a asegurar cierres, limpieza o mensajes finales sin depender de si todo salió bien."
        },
        {
          title: "Raise: provocar un error con intención",
          body: "No siempre basta con esperar a que Python falle solo. A veces conviene lanzar una excepción manualmente cuando una regla de negocio o una validación no se cumple.",
          code: "def validar_edad(edad):\n    if edad < 0:\n        raise ValueError('La edad no puede ser negativa.')\n    return edad"
        },
        {
          title: "Excepciones personalizadas cuando el dominio lo pide",
          body: "Si el proyecto necesita distinguir errores propios del negocio o del pipeline, crear excepciones personalizadas puede dar mucha más claridad que reciclar siempre las mismas clases genéricas.",
          code: "class ErrorDeConexionDatos(Exception):\n    pass\n\n\ndef consultar_fuente(activa):\n    if not activa:\n        raise ErrorDeConexionDatos('La fuente de datos no está disponible.')"
        },
        {
          title: "Buenas prácticas que sí valen la pena",
          body: "Manejar excepciones no significa esconder cualquier error. La idea es capturar solo lo esperable y dejar que el código siga siendo claro.",
          bestPractices: [
            "Capturar excepciones específicas en vez de usar `except:` para todo.",
            "Mantener el bloque `try` pequeño, centrado solo en el código riesgoso.",
            "Usar `finally` o `with` para liberar recursos.",
            "Registrar errores importantes con `logging` cuando el flujo sea productivo.",
            "Crear excepciones personalizadas solo cuando realmente aporten contexto."
          ]
        },
        {
          title: "Qué pasa si un error coincide con varios except",
          body: "Python evalúa los bloques `except` de arriba hacia abajo y ejecuta solo el primero que coincide. Por eso el orden importa: primero conviene atrapar casos específicos y dejar los más generales para después."
        },
        {
          title: "Para recordar",
          body: "En análisis de datos y Machine Learning, las excepciones no son un adorno del código: son una capa de control. `try` protege el bloque riesgoso, `except` decide cómo responder, `else` separa el camino exitoso, `finally` asegura limpieza y `raise` permite validar reglas antes de que el problema escale."
        }
      ],
      relatedIds: [
        "pandas-dataframes-masks-and-groupby",
        "analysis-libraries-python-and-r",
        "advanced-data-structures-for-ml"
      ]
    },
    {
      id: "python-module-2-code-recipes-for-data-workflows",
      slug: "recetario-de-codigo-python-modulo-2-para-flujos-de-datos",
      title: "Manejo de excepciones, control de tiempo y optimización en Python",
      summary: "Una nota práctica con snippets reutilizables para leer datos, validar errores, medir tiempos, perfilar procesos y optimizar código sin perder orden dentro del flujo de trabajo.",
      category: "Código",
      type: "Recetario",
      level: "intermediate",
      readingTime: "16 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "Código", "Excepciones", "Optimización"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí no es volver a explicar toda la teoría del módulo 2, sino dejar bloques de código que sí puedo reutilizar después. En simple: copiar, adaptar y usar según el problema."
        },
        {
          title: "1. Leer un archivo línea por línea y validar números",
          body: "Este patrón sirve cuando tengo archivos de texto con un dato por línea y necesito procesarlos sin que un error rompa todo el flujo.",
          code: "class ValorNegativoError(Exception):\n    def __init__(self, valor):\n        super().__init__(f'Se detectó el valor negativo: {valor}')\n\n\ndef procesar_archivo(ruta_archivo):\n    try:\n        with open(ruta_archivo, 'r', encoding='utf-8') as archivo:\n            for linea in archivo:\n                try:\n                    numero = int(linea.strip())\n                    if numero < 0:\n                        raise ValorNegativoError(numero)\n                    print(f'Número válido: {numero} | cuadrado: {numero ** 2}')\n                except ValueError:\n                    print(f'Valor no numérico ignorado: {linea.strip()}')\n                except ValorNegativoError as e:\n                    print(e)\n    except FileNotFoundError:\n        print('No se encontró el archivo indicado.')"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Abre un archivo, limpia cada línea con `strip()`, intenta convertirla a entero y controla dos casos: valores no numéricos y números negativos. Sirve mucho para lecturas simples de logs, puntajes, IDs o archivos preliminares antes de subir a `pandas`."
        },
        {
          title: "2. Crear excepciones personalizadas para reglas del negocio",
          body: "Esto ayuda cuando quiero diferenciar errores de contenido, no solo errores técnicos genéricos.",
          code: "class TipoPokemonInvalido(Exception):\n    def __init__(self, nombre, tipo):\n        super().__init__(f\"El Pokémon '{nombre}' tiene un tipo inválido: {tipo}\")\n\n\nclass EntrenadorNoExisteError(Exception):\n    def __init__(self, pokemon, entrenador):\n        super().__init__(f\"El Pokémon '{pokemon}' tiene asignado un entrenador inexistente: {entrenador}\")"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "En vez de lanzar siempre `ValueError` para todo, puedo definir errores más claros según el dominio. Eso mejora trazabilidad y hace mucho más entendible el flujo cuando los datos tienen reglas propias."
        },
        {
          title: "3. Cargar registros y validar estructura básica",
          body: "Este patrón sirve cuando leo registros separados por comas y quiero controlar vacíos, cantidad de campos y relaciones válidas antes de guardar.",
          code: "def cargar_pokemon(ruta, tipos_validos, entrenadores_validos, dic_pokemon):\n    try:\n        with open(ruta, 'r', encoding='utf-8') as archivo:\n            for linea in archivo:\n                if linea.strip() == '':\n                    continue\n                datos = linea.strip().split(',')\n                if len(datos) != 4:\n                    raise ValueError('Cantidad incorrecta de campos')\n                if any(campo.strip() == '' for campo in datos):\n                    raise ValueError('Uno o más campos están vacíos')\n\n                nombre, tipo, nivel, entrenador = datos\n                if tipo not in tipos_validos:\n                    raise TipoPokemonInvalido(nombre, tipo)\n                if entrenador not in entrenadores_validos:\n                    raise EntrenadorNoExisteError(nombre, entrenador)\n\n                dic_pokemon[nombre] = {\n                    'tipo': tipo,\n                    'nivel': int(nivel),\n                    'entrenador': entrenador\n                }\n    except FileNotFoundError:\n        print('Archivo no encontrado.')"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Lee un archivo tipo CSV simple, valida estructura y guarda resultados en un diccionario. Es útil para flujos pequeños donde todavía no necesito `pandas`, pero sí quiero control sobre integridad del contenido."
        },
        {
          title: "4. POO base para organizar entidades",
          body: "Cuando el código empieza a crecer, tener clases ayuda a ordenar atributos y comportamientos relacionados.",
          code: "class Vehiculo:\n    def __init__(self, marca, modelo, anio, conductor):\n        self.__marca = marca\n        self.__modelo = modelo\n        self.__anio = anio\n        self.__conductor = conductor\n\n    def acelerar(self):\n        print(f'{self.__conductor} acelera el vehículo.')\n\n    def get_modelo(self):\n        return self.__modelo\n\n\nclass AutoCarrera(Vehiculo):\n    def activar_turbo(self):\n        print('Turbo activado.')"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "La clase base me deja encapsular atributos y reutilizar métodos comunes. La herencia sirve cuando quiero extender comportamiento sin reescribir todo. Esto ayuda mucho cuando paso de scripts sueltos a estructuras más mantenibles."
        },
        {
          title: "5. Comparar búsqueda lineal y búsqueda binaria",
          body: "Este snippet es útil para recordar cómo cambia la eficiencia según la estrategia.",
          code: "def busqueda_lineal(lista, objetivo):\n    for i, valor in enumerate(lista):\n        if valor == objetivo:\n            return i\n    return -1\n\n\ndef busqueda_binaria(lista, objetivo):\n    izquierda, derecha = 0, len(lista) - 1\n    while izquierda <= derecha:\n        medio = (izquierda + derecha) // 2\n        if lista[medio] == objetivo:\n            return medio\n        if lista[medio] < objetivo:\n            izquierda = medio + 1\n        else:\n            derecha = medio - 1\n    return -1"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "La búsqueda lineal revisa uno por uno; la binaria parte el problema a la mitad, pero solo sirve si la lista ya está ordenada. Es una comparación simple, pero ayuda mucho a pensar rendimiento antes de escalar un flujo."
        },
        {
          title: "6. Medir tiempos con timeit",
          body: "Si quiero comparar implementaciones pequeñas, `timeit` es una salida rápida y clara.",
          code: "import timeit\n\ntiempo = timeit.timeit('sum(range(1000))', number=1000)\nprint(tiempo)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Ejecuta el mismo bloque muchas veces y devuelve un tiempo total. Me sirve para comparar funciones simples y no quedarme solo con intuiciones sobre qué código 'se siente más rápido'."
        },
        {
          title: "7. Perfilado básico con cProfile",
          body: "Cuando el script ya creció, necesito ver no solo cuánto tarda, sino dónde se va el tiempo.",
          code: "import cProfile\nimport pstats\nfrom io import StringIO\n\n\ndef compute_sum_squares(n):\n    total = 0\n    for i in range(n):\n        total += i * i\n    return total\n\nprofiler = cProfile.Profile()\nprofiler.enable()\ncompute_sum_squares(100000)\nprofiler.disable()\n\nstream = StringIO()\nstats = pstats.Stats(profiler, stream=stream).sort_stats('cumulative')\nstats.print_stats(10)\nprint(stream.getvalue())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Perfila una función y muestra qué partes consumen más tiempo. Es ideal cuando el cuello de botella ya no es obvio y quiero decidir con datos qué optimizar primero."
        },
        {
          title: "8. Usar vectorización con NumPy",
          body: "Este patrón deja clarísimo por qué a veces conviene dejar el bucle manual y pasar a operaciones vectorizadas.",
          code: "import numpy as np\n\narr = np.array([1, 2, 3, 4])\nresultado = arr * 2\nprint(resultado)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Aplica una operación a todo el arreglo de una vez. Me sirve cuando trabajo con muchos datos numéricos y quiero que el cálculo sea más claro y normalmente también más rápido."
        },
        {
          title: "9. Acelerar una función con JIT",
          body: "Cuando sigo necesitando un bucle, `Numba` puede ayudar bastante en CPU.",
          code: "from numba import njit\n\n@njit\ndef suma_rapida(a):\n    total = 0\n    for x in a:\n        total += x\n    return total"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Compila la función justo en ejecución para acelerar trabajo numérico repetitivo. Sirve cuando tengo lógica de bucle que no reemplacé fácil por vectorización, pero sí quiero bajar costo de CPU."
        },
        {
          title: "10. Un mini flujo práctico para archivos numéricos",
          body: "Si quiero mezclar lectura, validación y limpieza, esta versión compacta es una muy buena base.",
          code: "def cargar_puntajes(ruta):\n    try:\n        with open(ruta, 'r', encoding='utf-8') as archivo:\n            return [float(linea.strip()) for linea in archivo if linea.strip()]\n    except FileNotFoundError:\n        print('No se encontró el archivo de puntajes.')\n        return []\n    except ValueError:\n        print('Hay un valor no numérico dentro del archivo.')\n        return []"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Carga números desde un archivo, ignora líneas vacías y devuelve una lista lista para seguir trabajando. Es uno de esos bloques chicos que aparecen una y otra vez cuando practico lectura de datos sin subir todavía a DataFrames."
        },
      ],
      closingNote:
        "La mejor forma de usar este recetario no es memorizar todo, sino reconocer qué patrón necesito: lectura segura, validación, clase base, búsqueda, perfilado o aceleración. Desde ahí copio el bloque, lo renombro y lo ajusto a mi caso.",
      references: [],
      relatedIds: [
        "python-exception-handling-for-data-workflows",
        "python-functions-conditionals-and-operators",
        "python-loops-break-and-continue",
        "pythonic-optimization-and-jit-for-ml"
      ]
    },
    {
      id: "python-module-3-code-recipes-for-calculus-and-linear-algebra",
      slug: "recetario-de-codigo-python-modulo-3-para-calculo-y-algebra",
      title: "Cálculo, álgebra y optimización base en Python",
      summary: "Una nota práctica con snippets reutilizables para generar datos, armar matrices, resolver sistemas, derivar funciones y ajustar modelos lineales con fórmula cerrada o descenso de gradiente.",
      category: "Código",
      type: "Recetario",
      level: "intermediate",
      readingTime: "18 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "NumPy", "Álgebra", "Optimización"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea de esta nota es dejar a mano los bloques de código más útiles del módulo 3. No para repetir teoría, sino para tener una base concreta al momento de generar datos, trabajar matrices, resolver sistemas o ajustar un modelo simple."
        },
        {
          title: "Generar datos sintéticos y construir la matriz de diseño",
          body: "Este bloque sirve para simular una regresión lineal simple con ruido y dejar lista la matriz `X = [1, x]` que luego se usa en fórmula cerrada o en otros cálculos matriciales.",
          code: "import numpy as np\n\nnp.random.seed(42)\nn = 100\nx = np.random.rand(n, 1)\ny = 4 + 3 * x + np.random.randn(n, 1)\n\nX = np.c_[np.ones((n, 1)), x]\n\nprint(x[:5])\nprint(y[:5])\nprint(X[:5])"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Genera una variable de entrada `x`, una salida `y` con ruido y la matriz de diseño que añade una columna de unos para el intercepto. Me sirve cuando quiero practicar regresión lineal, álgebra matricial o validar un flujo sin depender todavía de un dataset externo."
        },
        {
          title: "Resolver un sistema lineal con solve o lstsq",
          body: "Este patrón es útil para recordar la diferencia entre una solución exacta y una aproximación por mínimos cuadrados.",
          code: "import numpy as np\n\nA = np.array([[3, -1, 2], [1, 2, 1], [2, 1, 3]], dtype=float)\nb = np.array([5, 6, 7], dtype=float)\n\nsolucion_exacta = np.linalg.solve(A, b)\nsolucion_lstsq, residuals, rank, s = np.linalg.lstsq(A, b, rcond=None)\n\nprint(solucion_exacta)\nprint(solucion_lstsq)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "`solve()` resuelve `Ax = b` cuando el sistema tiene solución única. `lstsq()` encuentra la mejor aproximación cuando el sistema es más incómodo o quiero pensar en mínimos cuadrados. Me sirve mucho para conectar la intuición de sistemas lineales con regresión y ajuste numérico."
        },
        {
          title: "Aplicar una transformación matricial 2D",
          body: "Este snippet deja muy clara la idea de que una matriz también puede transformar puntos, no solo guardarlos.",
          code: "import numpy as np\n\nangulo = np.radians(45)\nescala = 1.5\n\nT = np.array([\n    [escala * np.cos(angulo), -escala * np.sin(angulo)],\n    [escala * np.sin(angulo),  escala * np.cos(angulo)]\n])\n\npuntos = np.array([\n    [1, 2],\n    [3, 1],\n    [2, 4],\n    [4, 3],\n    [0, 0],\n    [3, 3]\n], dtype=float)\n\npuntos_transformados = puntos @ T.T\nprint(puntos_transformados)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Define una matriz de transformación que combina rotación y escalado, y luego la aplica sobre un conjunto de puntos. Me sirve para recordar cómo una matriz cambia el espacio de los datos, algo muy útil antes de entrar a PCA, proyecciones o cambios de representación."
        },
        {
          title: "Derivar una función y encontrar su punto crítico",
          body: "Aquí queda una base corta para pasar desde álgebra simbólica a optimización simple.",
          code: "import sympy as sp\n\nx = sp.Symbol('x')\nf = (x - 3) ** 2\nf_prime = sp.diff(f, x)\npunto_critico = sp.solve(f_prime, x)[0]\n\nprint('f(x) =', f)\nprint(\"f'(x) =\", f_prime)\nprint('Punto crítico =', punto_critico)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Construye una función simbólica, calcula su derivada y resuelve dónde esa derivada vale cero. Me sirve para entender por qué después aparecen gradientes, mínimos y optimizadores: antes de bajar error, necesito entender cómo cambia la función."
        },
        {
          title: "Ajustar regresión lineal con fórmula cerrada",
          body: "Este bloque es súper útil para recordar cómo se estiman parámetros directamente con álgebra matricial.",
          code: "import numpy as np\n\ndef calcular_formula_cerrada(X, y):\n    try:\n        theta = np.linalg.inv(X.T @ X) @ X.T @ y\n        metodo = 'inversa'\n    except np.linalg.LinAlgError:\n        theta, _, _, _ = np.linalg.lstsq(X, y, rcond=None)\n        metodo = 'lstsq'\n    return theta, metodo\n\ntheta, metodo = calcular_formula_cerrada(X, y)\nprint(metodo)\nprint(theta)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Usa la fórmula de mínimos cuadrados y, si la matriz no es invertible, cae a `lstsq()` como respaldo. Me sirve cuando quiero una solución directa para regresión lineal y también cuando quiero dejar el código más robusto ante problemas numéricos."
        },
        {
          title: "Ajustar con descenso de gradiente clásico",
          body: "Este patrón deja listo un flujo corto para optimizar `w` y `b` iterativamente en una regresión lineal simple.",
          code: "def funcion_costo(w, b, x, y):\n    pred = w * x + b\n    return np.sum((y - pred) ** 2) / len(x)\n\n\ndef calcular_gradientes(w, b, x, y):\n    error = y - (w * x + b)\n    grad_w = -2 * np.sum(x * error) / len(x)\n    grad_b = -2 * np.sum(error) / len(x)\n    return grad_w, grad_b\n\n\ndef descenso_gradiente(x, y, tasa_aprendizaje=0.1, epocas=100):\n    w, b = 0.0, 0.0\n    historial = []\n    for epoca in range(epocas):\n        grad_w, grad_b = calcular_gradientes(w, b, x, y)\n        w -= tasa_aprendizaje * grad_w\n        b -= tasa_aprendizaje * grad_b\n        historial.append(funcion_costo(w, b, x, y))\n    return w, b, historial\n\nw_final, b_final, historial = descenso_gradiente(x, y)\nprint(w_final, b_final)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula el costo, deriva respecto a `w` y `b`, y actualiza ambos parámetros durante varias épocas. Me sirve para visualizar cómo aprende un modelo paso a paso y para conectar derivadas, gradiente y optimización con algo concreto."
        },
        {
          title: "Encapsular el flujo en una clase reutilizable",
          body: "Cuando quiero más orden, este patrón me deja agrupar generación de datos, validación y métodos de ajuste en una sola estructura.",
          code: "class ErrorParametrosInvalidos(Exception):\n    pass\n\n\nclass RegresionLineal:\n    def __init__(self, n=100, coef=3, inter=4, ruido_std=1, seed=42):\n        if n <= 1:\n            raise ErrorParametrosInvalidos(\"El número de muestras 'n' debe ser mayor a 1.\")\n        if ruido_std < 0:\n            raise ErrorParametrosInvalidos('La desviación estándar del ruido no puede ser negativa.')\n\n        self.n = n\n        self.coef = coef\n        self.inter = inter\n        self.ruido_std = ruido_std\n        self.seed = seed\n        self.x, self.y, self.X = self._generar_datos()\n\n    def _generar_datos(self):\n        np.random.seed(self.seed)\n        x = np.random.rand(self.n, 1)\n        ruido = np.random.randn(self.n, 1) * self.ruido_std\n        y = self.inter + self.coef * x + ruido\n        X = np.c_[np.ones((self.n, 1)), x]\n        return x, y, X"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Agrupa parámetros, validaciones y generación de datos dentro de una clase. Me sirve cuando el notebook ya no será un experimento suelto y quiero una base más ordenada para repetir pruebas, comparar métodos o extender el modelo."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es pensar qué necesito resolver: generar datos, armar una matriz, resolver un sistema, derivar una función o ajustar parámetros. Desde ahí copio el bloque, lo simplifico si hace falta y lo adapto a mi ejercicio.",
      references: [],
      relatedIds: [
        "matrix-and-vector-foundations-for-machine-learning",
        "linear-systems-and-transformations-for-machine-learning",
        "derivatives-and-optimization-foundations-for-machine-learning",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "python-module-4-code-recipes-for-hyperparameter-tuning",
      slug: "recetario-de-codigo-python-modulo-4-para-hiperparametros",
      title: "Hiperparámetros y tuning práctico en Python",
      summary: "Una nota práctica con snippets reutilizables para comparar un modelo base, lanzar búsquedas de hiperparámetros y automatizar tuning con scikit-learn, Optuna, búsquedas bayesianas, algoritmos genéticos y Ray Tune.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "20 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "Hiperparámetros", "Optuna", "Ray Tune"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar una chuleta práctica del módulo 4. No para reexplicar toda la teoría del tuning, sino para tener bloques de código claros que me permitan partir con un modelo base, probar búsquedas distintas y comparar resultados sin perder orden."
        },
        {
          title: "Cargar, escalar y dividir datos antes del tuning",
          body: "Casi todos los flujos del módulo parten por este bloque: cargar un dataset, escalar variables y separar entrenamiento y prueba para no mezclar evaluación con ajuste.",
          code: "from sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n\nX, y = load_breast_cancer(return_X_y=True)\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X_scaled, y, test_size=0.2, random_state=42, stratify=y\n)\n\nprint(X_train.shape, X_test.shape)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Estandariza el dataset y deja separado un conjunto de entrenamiento y otro de prueba. Me sirve como punto de partida sano antes de lanzar cualquier búsqueda, porque evita que compare técnicas sobre datos desordenados o con escalas muy distintas."
        },
        {
          title: "Entrenar un modelo base para tener referencia",
          body: "Antes de optimizar, conviene saber cómo rinde el modelo por defecto. Si no, después no tengo cómo medir si el tuning realmente valió la pena.",
          code: "import time\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\n\ninicio = time.time()\nmodelo_base = RandomForestClassifier(random_state=42)\nf1_base = cross_val_score(modelo_base, X_train, y_train, cv=5, scoring='f1').mean()\ntiempo_base = time.time() - inicio\n\nprint(f'F1 base: {f1_base:.4f}')\nprint(f'Tiempo base: {tiempo_base:.2f}s')"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula una línea base con validación cruzada. Me sirve para no enamorarme del tuning solo porque sí: primero veo el rendimiento normal y recién después comparo si las búsquedas mejoran el F1, la estabilidad o el costo temporal."
        },
        {
          title: "Grid Search para recorrer una grilla fija",
          body: "Este patrón es el más ordenado cuando el espacio de búsqueda es pequeño y quiero revisar combinaciones definidas manualmente.",
          code: "from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\n\nparam_grid = {\n    'n_estimators': [50, 100, 150],\n    'max_depth': [3, 5, 10],\n    'min_samples_split': [2, 5, 10]\n}\n\nmodelo = RandomForestClassifier(random_state=42)\n\ngrid_search = GridSearchCV(\n    estimator=modelo,\n    param_grid=param_grid,\n    cv=5,\n    scoring='f1',\n    n_jobs=-1\n)\n\ngrid_search.fit(X_train, y_train)\nprint(grid_search.best_params_)\nprint(grid_search.best_score_)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Prueba todas las combinaciones de la grilla y devuelve la mejor. Me sirve cuando tengo pocos hiperparámetros y quiero una búsqueda fácil de explicar, sobre todo en modelos tradicionales donde el costo aún es manejable."
        },
        {
          title: "Randomized Search para cubrir más espacio",
          body: "Si el espacio crece, esta variante suele ser más sana que probarlo todo.",
          code: "import numpy as np\nfrom sklearn.model_selection import RandomizedSearchCV\n\nparam_distributions = {\n    'n_estimators': [int(x) for x in np.linspace(50, 200, 10)],\n    'max_depth': [3, 5, 10, None],\n    'min_samples_split': [2, 5, 10]\n}\n\nrandom_search = RandomizedSearchCV(\n    estimator=RandomForestClassifier(random_state=42),\n    param_distributions=param_distributions,\n    n_iter=10,\n    cv=5,\n    scoring='f1',\n    random_state=42,\n    n_jobs=-1\n)\n\nrandom_search.fit(X_train, y_train)\nprint(random_search.best_params_)\nprint(random_search.best_score_)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Explora combinaciones al azar dentro de un rango definido. Me sirve cuando la grilla ya se pone muy grande y quiero ahorrar tiempo sin dejar de cubrir zonas distintas del espacio de búsqueda."
        },
        {
          title: "Optuna para búsqueda inteligente y limpia",
          body: "Este bloque resume el patrón moderno del módulo para optimización bayesiana con una API bastante cómoda.",
          code: "import optuna\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.ensemble import RandomForestClassifier\n\ndef objective_optuna(trial):\n    n_estimators = trial.suggest_int('n_estimators', 50, 200)\n    max_depth = trial.suggest_int('max_depth', 2, 32)\n    min_samples_split = trial.suggest_int('min_samples_split', 2, 10)\n\n    clf = RandomForestClassifier(\n        n_estimators=n_estimators,\n        max_depth=max_depth,\n        min_samples_split=min_samples_split,\n        random_state=42\n    )\n    return cross_val_score(clf, X_train, y_train, cv=3, scoring='f1').mean()\n\nstudy = optuna.create_study(direction='maximize', sampler=optuna.samplers.TPESampler(seed=42))\nstudy.optimize(objective_optuna, n_trials=20)\n\nprint(study.best_params)\nprint(study.best_value)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Define una función objetivo y deja que Optuna aprenda qué combinaciones prometen más. Me sirve cuando entrenar cada intento ya cuesta más y quiero que la búsqueda sea más eficiente que una grilla rígida."
        },
        {
          title: "BayesSearchCV o Hyperopt para búsqueda bayesiana flexible",
          body: "Acá quedan dos patrones bien útiles cuando quiero probar variantes de optimización bayesiana fuera de Optuna.",
          code: "from skopt import BayesSearchCV\n\nsearch_space = {\n    'n_estimators': (50, 200),\n    'max_depth': (3, 20),\n    'min_samples_split': (2, 10)\n}\n\nopt = BayesSearchCV(\n    estimator=RandomForestClassifier(random_state=42),\n    search_spaces=search_space,\n    n_iter=20,\n    cv=5,\n    scoring='f1',\n    n_jobs=-1,\n    random_state=42\n)\n\nopt.fit(X_train, y_train)\nprint(opt.best_params_)\nprint(opt.best_score_)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Usa una búsqueda bayesiana integrada con la lógica de scikit-learn. Me sirve si quiero mantener una interfaz muy parecida a `GridSearchCV`, pero con una exploración más inteligente del espacio."
        },
        {
          title: "Algoritmo genético con DEAP para búsquedas evolutivas",
          body: "Este bloque resume la parte más flexible del módulo 4: crear individuos, evaluarlos y hacer evolucionar configuraciones de hiperparámetros.",
          code: "from deap import base, creator, tools, algorithms\nimport random\nimport numpy as np\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\n\nPARAM_RANGES = {\n    'n_estimators': (50, 300),\n    'max_depth': (2, 20),\n    'min_samples_split': (2, 10)\n}\n\ncreator.create('FitnessMax', base.Fitness, weights=(1.0,))\ncreator.create('Individual', list, fitness=creator.FitnessMax)\n\ntoolbox = base.Toolbox()\ntoolbox.register('attr_n_estimators', random.randint, *PARAM_RANGES['n_estimators'])\ntoolbox.register('attr_max_depth', random.randint, *PARAM_RANGES['max_depth'])\ntoolbox.register('attr_min_samples_split', random.randint, *PARAM_RANGES['min_samples_split'])\ntoolbox.register('individual', tools.initCycle, creator.Individual,\n                 (toolbox.attr_n_estimators, toolbox.attr_max_depth, toolbox.attr_min_samples_split), n=1)\ntoolbox.register('population', tools.initRepeat, list, toolbox.individual)\n\ndef evaluate(individual):\n    model = RandomForestClassifier(\n        n_estimators=max(1, int(individual[0])),\n        max_depth=max(1, int(individual[1])),\n        min_samples_split=max(2, int(individual[2])),\n        random_state=42\n    )\n    scores = cross_val_score(model, X_train, y_train, cv=3, scoring='f1')\n    return (np.mean(scores),)\n\ntoolbox.register('evaluate', evaluate)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Prepara el entorno de DEAP para evolucionar hiperparámetros como si fueran individuos. Me sirve cuando el espacio es más raro, quiero experimentar con lógica evolutiva o necesito una búsqueda menos rígida que las estrategias clásicas."
        },
        {
          title: "Ray Tune para escalar búsquedas",
          body: "Cuando el tuning ya no cabe cómodo en un notebook simple, este patrón deja una base para lanzar pruebas paralelas.",
          code: "import ray\nfrom ray import tune\nfrom ray.tune.schedulers import ASHAScheduler\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import cross_val_score\n\nif ray.is_initialized():\n    ray.shutdown()\nray.init(ignore_reinit_error=True, log_to_driver=False)\n\ndef trainable_function(config):\n    model = RandomForestClassifier(\n        n_estimators=config['n_estimators'],\n        max_depth=config['max_depth'],\n        min_samples_split=config['min_samples_split'],\n        random_state=42,\n        n_jobs=-1\n    )\n    score = cross_val_score(model, X_train, y_train, cv=3, scoring='f1').mean()\n    tune.report(f1=score)\n\nsearch_space = {\n    'n_estimators': tune.randint(50, 201),\n    'max_depth': tune.randint(3, 21),\n    'min_samples_split': tune.randint(2, 11)\n}\n\nscheduler = ASHAScheduler(metric='f1', mode='max')"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Inicializa Ray, define un `trainable` y deja lista una búsqueda distribuida con descarte temprano usando `ASHA`. Me sirve cuando ya necesito orquestar muchos ensayos, paralelizarlos y no gastar recursos en configuraciones que parten mal."
        },
        {
          title: "Comparar resultados en una sola tabla",
          body: "Después del tuning, esta estructura ayuda mucho a ordenar la conversación entre rendimiento, tiempo e iteraciones.",
          code: "import pandas as pd\n\nresumen = pd.DataFrame([\n    {'metodo': 'Base', 'f1': f1_base, 'tiempo_s': tiempo_base, 'iteraciones': 1},\n    {'metodo': 'Grid Search', 'f1': grid_search.best_score_, 'tiempo_s': None, 'iteraciones': len(grid_search.cv_results_['params'])},\n    {'metodo': 'Random Search', 'f1': random_search.best_score_, 'tiempo_s': None, 'iteraciones': len(random_search.cv_results_['params'])},\n    {'metodo': 'Optuna', 'f1': study.best_value, 'tiempo_s': None, 'iteraciones': len(study.trials)}\n])\n\nprint(resumen)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Arma una tabla simple para comparar enfoques. Me sirve para cerrar mejor el análisis y no quedarse solo con “este método encontró algo bueno”, sino medir cuánto tardó y cuántos intentos necesitó."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es partir por un modelo base, elegir una estrategia de búsqueda según el costo del problema y luego comparar resultados con una tabla simple. No siempre gana el método más complejo: gana el que mejora el modelo sin volver absurdo el tiempo de trabajo.",
      references: [],
      relatedIds: [
        "hyperparameter-search-strategies-for-machine-learning",
        "ray-tune-for-distributed-hyperparameter-optimization",
        "optimization-methods-for-machine-learning"
      ]
    },
    {
      id: "python-module-5-code-recipes-for-regularization-boosting-and-evaluation",
      slug: "recetario-de-codigo-python-para-regularizacion-boosting-y-evaluacion",
      title: "Regularización, boosting y evaluación de modelos en Python",
      summary: "Una nota práctica con snippets reutilizables para preprocesar datos, comparar regularizaciones, trabajar regresión cuantílica, entrenar ensambles y validar modelos con métricas más completas.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "22 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "Regularización", "Boosting", "Métricas"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar bloques de código que sí pueda reutilizar cuando quiera comparar modelos lineales regularizados, probar ensambles o validar mejor un clasificador. En simple: menos teoría repetida y más patrones listos para adaptar."
        },
        {
          title: "Cargar, separar y escalar antes de modelar",
          body: "Casi todo el módulo parte desde esta base: cargar datos, separar entrenamiento y prueba, y escalar cuando voy a usar modelos sensibles a magnitudes como Ridge, Lasso, Elastic Net o regresión cuantílica.",
          code: "from sklearn.datasets import fetch_california_housing\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\n\nX, y = fetch_california_housing(return_X_y=True)\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\nprint(X_train_scaled.shape, X_test_scaled.shape)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja una base limpia para entrenar modelos de regresión o clasificación sin mezclar train con test. Me sirve como punto de partida estándar antes de comparar técnicas, métricas y penalizaciones."
        },
        {
          title: "Comparar Ridge, Lasso y Elastic Net en una sola pasada",
          body: "Este patrón resume muy bien la parte de regularización: entreno varios modelos, comparo métricas y dejo una tabla simple para decidir cuál generaliza mejor.",
          code: "import pandas as pd\nfrom sklearn.linear_model import Ridge, Lasso, ElasticNet\nfrom sklearn.metrics import mean_squared_error, r2_score\n\nmodelos = {\n    'Ridge': Ridge(alpha=1.0),\n    'Lasso': Lasso(alpha=0.1),\n    'Elastic Net': ElasticNet(alpha=0.1, l1_ratio=0.5)\n}\n\nresultados = []\nfor nombre, modelo in modelos.items():\n    modelo.fit(X_train_scaled, y_train)\n    pred = modelo.predict(X_test_scaled)\n    resultados.append({\n        'modelo': nombre,\n        'rmse': mean_squared_error(y_test, pred, squared=False),\n        'r2': r2_score(y_test, pred),\n        'coeficientes_cero': int((modelo.coef_ == 0).sum())\n    })\n\nprint(pd.DataFrame(resultados))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrena los tres enfoques clásicos de regularización y compara error, ajuste y cantidad de variables anuladas. Me sirve cuando quiero ver si me conviene solo estabilizar coeficientes o también seleccionar variables."
        },
        {
          title: "Revisar qué variables apaga Lasso o Elastic Net",
          body: "Cuando el foco está en selección de características, este bloque ayuda mucho porque deja claro qué columnas quedaron con coeficiente cero.",
          code: "feature_names = fetch_california_housing().feature_names\nlasso = Lasso(alpha=0.1).fit(X_train_scaled, y_train)\n\ncoef_df = pd.DataFrame({\n    'variable': feature_names,\n    'coeficiente': lasso.coef_\n})\n\nvariables_eliminadas = coef_df[coef_df['coeficiente'] == 0]\nprint(variables_eliminadas)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Muestra directamente qué variables fueron anuladas por la penalización. Me sirve para interpretar mejor el modelo y conectar regularización con selección de variables en vez de dejarlo como algo abstracto."
        },
        {
          title: "Regresión cuantílica para mirar escenarios",
          body: "Este patrón es útil cuando no quiero quedarme solo con el promedio, sino mirar cuantiles como P10, P50 o P90.",
          code: "from sklearn.linear_model import QuantileRegressor\nfrom sklearn.metrics import mean_pinball_loss\n\ncuantiles = [0.1, 0.5, 0.9]\nresultados_cuantiles = []\n\nfor q in cuantiles:\n    modelo_q = QuantileRegressor(quantile=q, alpha=0.1, solver='highs')\n    modelo_q.fit(X_train_scaled, y_train)\n    pred_q = modelo_q.predict(X_test_scaled)\n    resultados_cuantiles.append({\n        'cuantil': q,\n        'pinball_loss': mean_pinball_loss(y_test, pred_q, alpha=q)\n    })\n\nprint(pd.DataFrame(resultados_cuantiles))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrena un modelo distinto para varios cuantiles y mide `pinball loss`. Me sirve cuando quiero analizar riesgo, dispersión o escenarios conservadores sin confundir esto con una regresión promedio clásica."
        },
        {
          title: "Entrenar un Random Forest como baseline de ensamble",
          body: "Antes de meter boosting, conviene dejar un baseline fuerte con Random Forest para tener referencia clara.",
          code: "from sklearn.datasets import fetch_openml\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.preprocessing import OneHotEncoder\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score\n\nadult = fetch_openml(name='adult', version=2, as_frame=True)\nX = adult.data\ny = (adult.target == '>50K').astype(int)\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\nnum_cols = X.select_dtypes(include=['number']).columns\ncat_cols = X.select_dtypes(exclude=['number']).columns\n\npreprocessor = ColumnTransformer([\n    ('num', Pipeline([\n        ('imputer', SimpleImputer(strategy='median'))\n    ]), num_cols),\n    ('cat', Pipeline([\n        ('imputer', SimpleImputer(strategy='most_frequent')),\n        ('onehot', OneHotEncoder(handle_unknown='ignore'))\n    ]), cat_cols)\n])\n\nrf = Pipeline([\n    ('prep', preprocessor),\n    ('model', RandomForestClassifier(random_state=42))\n])\n\nrf.fit(X_train, y_train)\npred_rf = rf.predict(X_test)\n\nprint({\n    'accuracy': accuracy_score(y_test, pred_rf),\n    'precision': precision_score(y_test, pred_rf),\n    'recall': recall_score(y_test, pred_rf),\n    'f1': f1_score(y_test, pred_rf)\n})"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Prepara un flujo más realista con variables numéricas y categóricas, entrena Random Forest y devuelve métricas base. Me sirve como comparación sana antes de pasar a boosting y modelos más agresivos."
        },
        {
          title: "Comparar varios modelos de boosting",
          body: "Este bloque deja una plantilla útil para comparar AdaBoost, Gradient Boosting o XGBoost según las librerías que tenga disponibles.",
          code: "from sklearn.ensemble import AdaBoostClassifier, GradientBoostingClassifier\nfrom xgboost import XGBClassifier\n\nboosting_models = {\n    'AdaBoost': AdaBoostClassifier(random_state=42),\n    'Gradient Boosting': GradientBoostingClassifier(random_state=42),\n    'XGBoost': XGBClassifier(\n        random_state=42,\n        eval_metric='logloss',\n        use_label_encoder=False\n    )\n}\n\nresultados_boosting = []\nfor nombre, modelo in boosting_models.items():\n    pipe = Pipeline([\n        ('prep', preprocessor),\n        ('model', modelo)\n    ])\n    pipe.fit(X_train, y_train)\n    pred = pipe.predict(X_test)\n    resultados_boosting.append({\n        'modelo': nombre,\n        'accuracy': accuracy_score(y_test, pred),\n        'precision': precision_score(y_test, pred),\n        'recall': recall_score(y_test, pred),\n        'f1': f1_score(y_test, pred)\n    })\n\nprint(pd.DataFrame(resultados_boosting))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrena varios ensambles de boosting bajo una misma estructura y compara métricas en una sola tabla. Me sirve cuando quiero ver rápido qué tan bien escalan frente al baseline y si vale la pena el costo extra."
        },
        {
          title: "Sacar matriz de confusión y reporte de clasificación",
          body: "Si voy a hablar de verdaderos positivos, falsos positivos y F1, conviene dejar un bloque simple para calcularlo directo.",
          code: "from sklearn.metrics import confusion_matrix, classification_report\n\ncm = confusion_matrix(y_test, pred_rf)\nreporte = classification_report(y_test, pred_rf)\n\nprint(cm)\nprint(reporte)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrega la matriz de confusión y el resumen con `precision`, `recall` y `f1-score`. Me sirve cuando quiero evaluar más allá del accuracy y explicar mejor el impacto de cada error."
        },
        {
          title: "Validación cruzada con varias métricas a la vez",
          body: "Este patrón resume muy bien la lógica del módulo: no quedarse con una sola partición ni con una sola métrica.",
          code: "from sklearn.model_selection import cross_validate, StratifiedKFold\n\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nscoring = {\n    'accuracy': 'accuracy',\n    'precision': 'precision',\n    'recall': 'recall',\n    'f1': 'f1'\n}\n\ncv_resultados = cross_validate(\n    rf,\n    X,\n    y,\n    cv=cv,\n    scoring=scoring,\n    n_jobs=-1\n)\n\nprint({k: v.mean() for k, v in cv_resultados.items() if k.startswith('test_')})"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Ejecuta validación cruzada estratificada y promedia varias métricas al mismo tiempo. Me sirve para revisar estabilidad, comparar modelos con más justicia y no depender de una sola división train-test."
        },
        {
          title: "Selección de variables con RFE",
          body: "En algunos notebooks del módulo también aparece selección de variables, así que conviene dejar este bloque a mano para complementar regularización.",
          code: "from sklearn.feature_selection import RFE\nfrom sklearn.linear_model import LogisticRegression\n\nselector = RFE(\n    estimator=LogisticRegression(max_iter=2000),\n    n_features_to_select=8\n)\n\nX_prepared = preprocessor.fit_transform(X_train)\nselector.fit(X_prepared, y_train)\n\nprint(selector.support_)\nprint(selector.ranking_)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Aplica eliminación recursiva de variables con un modelo base. Me sirve para contrastar selección por regularización contra una estrategia wrapper más explícita."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es partir por una base simple, luego comparar regularización, ensambles y métricas con la misma lógica de evaluación. Así evito mirar modelos aislados y puedo decidir con más claridad qué técnica realmente aporta valor.",
      references: [],
      relatedIds: [
        "regularization-overfitting-and-linear-penalties",
        "quantile-regression-for-risk-and-scenarios",
        "boosting-and-classification-metrics",
        "cross-validation-and-model-evaluation-metrics",
        "feature-selection-methods-for-machine-learning"
      ]
    },
    {
      id: "python-module-6-code-recipes-for-clustering-and-dimensionality-reduction",
      slug: "recetario-de-codigo-python-para-clustering-y-reduccion-de-dimensionalidad",
      title: "Clustering y reducción de dimensionalidad en Python",
      summary: "Una nota práctica con snippets reutilizables para escalar datos, reducir dimensiones, agrupar observaciones con técnicas jerárquicas y por densidad, y comparar resultados de clustering de forma más visual y ordenada.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "21 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "Clustering", "PCA", "DBSCAN"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar bloques de código listos para explorar datasets sin etiquetas, reducir dimensionalidad y probar distintos métodos de agrupamiento. En simple: una base reutilizable para segmentar, visualizar y detectar estructura sin partir siempre desde cero."
        },
        {
          title: "Cargar y escalar un dataset antes de agrupar",
          body: "En clustering, escalar casi siempre es una decisión sana porque varias técnicas dependen mucho de distancias y densidades. Si dejo una variable mucho más grande que otra, el agrupamiento puede sesgarse sin que me dé cuenta.",
          code: "import pandas as pd\nfrom sklearn.datasets import load_wine\nfrom sklearn.preprocessing import StandardScaler\n\nwine = load_wine()\nX = pd.DataFrame(wine.data, columns=wine.feature_names)\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nprint(X.shape)\nprint(X.head())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Carga un dataset clásico y lo deja estandarizado para PCA, clustering jerárquico, DBSCAN o HDBSCAN. Me sirve como primer bloque base antes de comparar técnicas no supervisadas."
        },
        {
          title: "Aplicar clustering jerárquico y dibujar el dendrograma",
          body: "Este patrón es muy útil cuando quiero ver la jerarquía de agrupamiento antes de decidir cuántos grupos podría tener el dataset.",
          code: "import matplotlib.pyplot as plt\nfrom scipy.cluster.hierarchy import linkage, dendrogram\n\nZ = linkage(X_scaled, method='ward')\n\nplt.figure(figsize=(12, 5))\ndendrogram(Z, truncate_mode='level', p=5)\nplt.title('Dendrograma - Clustering jerárquico')\nplt.xlabel('Observaciones')\nplt.ylabel('Distancia')\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula el agrupamiento jerárquico aglomerativo y muestra el dendrograma. Me sirve cuando quiero entender cómo se van fusionando los grupos y decidir un corte antes de pasar a una partición más concreta."
        },
        {
          title: "Reducir a 2 componentes con PCA",
          body: "PCA aparece mucho en el módulo porque ayuda a comprimir la información y volver más legible el espacio antes de visualizar o agrupar.",
          code: "from sklearn.decomposition import PCA\n\npca = PCA(n_components=2, random_state=42)\nX_pca = pca.fit_transform(X_scaled)\n\nprint('Varianza explicada:', pca.explained_variance_ratio_)\nprint('Varianza acumulada:', pca.explained_variance_ratio_.sum())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Reduce el dataset a dos ejes principales y muestra cuánta varianza se conserva. Me sirve para visualizar clusters de forma rápida y también para simplificar el espacio antes de usar DBSCAN o comparar técnicas."
        },
        {
          title: "Graficar el espacio PCA con colores por grupo",
          body: "Cuando ya tengo etiquetas de un clustering, este bloque ayuda bastante a revisar si la separación visual tiene sentido.",
          code: "from sklearn.cluster import AgglomerativeClustering\n\njerarquico = AgglomerativeClustering(n_clusters=3, linkage='ward')\nlabels_hc = jerarquico.fit_predict(X_scaled)\n\nplt.figure(figsize=(8, 6))\nplt.scatter(X_pca[:, 0], X_pca[:, 1], c=labels_hc, cmap='viridis', s=50)\nplt.title('Clusters sobre proyección PCA')\nplt.xlabel('PC1')\nplt.ylabel('PC2')\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Agrupa con clustering jerárquico y proyecta los resultados sobre PCA. Me sirve para ver si los grupos se separan de forma razonable o si el clustering está generando zonas demasiado mezcladas."
        },
        {
          title: "Comparar PCA y T-SNE para visualizar estructura",
          body: "Este patrón sirve cuando quiero contrastar una reducción lineal como PCA con una no lineal como T-SNE.",
          code: "from sklearn.manifold import TSNE\n\ntsne = TSNE(n_components=2, perplexity=30, random_state=42)\nX_tsne = tsne.fit_transform(X_scaled)\n\nfig, axes = plt.subplots(1, 2, figsize=(14, 5))\naxes[0].scatter(X_pca[:, 0], X_pca[:, 1], c=labels_hc, cmap='viridis', s=40)\naxes[0].set_title('PCA')\naxes[1].scatter(X_tsne[:, 0], X_tsne[:, 1], c=labels_hc, cmap='viridis', s=40)\naxes[1].set_title('T-SNE')\nplt.tight_layout()\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Genera una comparación visual entre PCA y T-SNE. Me sirve cuando sospecho que la estructura del dataset no es tan lineal y quiero una segunda mirada más sensible a vecindades locales."
        },
        {
          title: "Medir la varianza explicada para decidir componentes",
          body: "Si no quiero elegir componentes a ciegas, este bloque ayuda a revisar cuánto estoy reteniendo con PCA.",
          code: "pca_full = PCA().fit(X_scaled)\nvar_exp = pca_full.explained_variance_ratio_\nvar_acum = var_exp.cumsum()\n\nplt.figure(figsize=(8, 5))\nplt.plot(range(1, len(var_exp) + 1), var_acum, marker='o')\nplt.axhline(0.90, color='red', linestyle='--', label='90%')\nplt.title('Varianza acumulada con PCA')\nplt.xlabel('Número de componentes')\nplt.ylabel('Varianza acumulada')\nplt.legend()\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Muestra la varianza acumulada para decidir cuántas componentes conviene conservar. Me sirve cuando quiero reducir dimensión sin perder demasiada información útil."
        },
        {
          title: "Probar DBSCAN con distintos valores de epsilon",
          body: "DBSCAN cambia mucho según `eps`, así que este patrón sirve para comparar rápido varios valores antes de elegir uno.",
          code: "from sklearn.cluster import DBSCAN\nfrom sklearn.metrics import silhouette_score\n\neps_values = [0.3, 0.5, 0.7]\nfor eps in eps_values:\n    dbscan = DBSCAN(eps=eps, min_samples=5)\n    labels = dbscan.fit_predict(X_pca)\n    n_clusters = len(set(labels)) - (1 if -1 in labels else 0)\n    print(f'eps={eps} | clusters={n_clusters}')\n    if n_clusters > 1:\n        print('silhouette=', round(silhouette_score(X_pca, labels), 4))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Lanza DBSCAN con varios `eps` y revisa cantidad de clusters y silhouette. Me sirve para explorar sensibilidad antes de fijar una configuración final."
        },
        {
          title: "Estimar epsilon con vecinos más cercanos",
          body: "Este bloque deja una guía práctica para buscar un epsilon razonable usando la distancia al k-ésimo vecino.",
          code: "import numpy as np\nfrom sklearn.neighbors import NearestNeighbors\n\nneighbors = NearestNeighbors(n_neighbors=4)\nneighbors_fit = neighbors.fit(X_pca)\ndistances, indices = neighbors_fit.kneighbors(X_pca)\n\nk_distances = np.sort(distances[:, -1])\nplt.figure(figsize=(8, 5))\nplt.plot(k_distances)\nplt.title('Curva k-distance para estimar epsilon')\nplt.xlabel('Puntos ordenados')\nplt.ylabel('Distancia al 4° vecino')\nplt.show()\n\nepsilon_recomendado = np.percentile(k_distances, 90)\nprint(epsilon_recomendado)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula la distancia al vecino relevante y la grafica para detectar el codo. Me sirve cuando no quiero elegir `eps` totalmente a ojo y necesito una referencia más defensable."
        },
        {
          title: "Aplicar HDBSCAN sin fijar epsilon",
          body: "Cuando el dataset tiene densidades distintas, HDBSCAN suele ser una salida más flexible que DBSCAN.",
          code: "import hdbscan\n\nhdb = hdbscan.HDBSCAN(min_cluster_size=10)\nlabels_hdb = hdb.fit_predict(X_pca)\n\nn_clusters_hdb = len(set(labels_hdb)) - (1 if -1 in labels_hdb else 0)\nprint('clusters=', n_clusters_hdb)\nprint('ruido=', (labels_hdb == -1).sum())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Agrupa sin obligarme a fijar `eps` de forma manual. Me sirve cuando sospecho que el dataset tiene zonas de densidad desigual o cuando DBSCAN parte bien en unas áreas y mal en otras."
        },
        {
          title: "Aplicar UMAP para reducción no lineal",
          body: "En la evaluación modular aparece bastante UMAP como alternativa para conservar estructura local y global mejor que otras técnicas en ciertos casos.",
          code: "import umap.umap_ as umap\n\nreducer = umap.UMAP(n_components=2, random_state=42)\nX_umap = reducer.fit_transform(X_scaled)\n\nplt.figure(figsize=(8, 6))\nplt.scatter(X_umap[:, 0], X_umap[:, 1], s=40)\nplt.title('Proyección UMAP')\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Genera una proyección 2D no lineal con UMAP. Me sirve para comparar contra PCA o T-SNE y para preparar un espacio más legible antes de clustering por densidad."
        },
        {
          title: "Detectar anomalías con Isolation Forest",
          body: "Aunque el foco del módulo es clustering, esta parte aparece como complemento útil cuando quiero separar comportamientos raros del patrón general.",
          code: "from sklearn.ensemble import IsolationForest\n\niso = IsolationForest(contamination=0.05, random_state=42)\noutliers_if = iso.fit_predict(X_scaled)\n\nprint('anomalías=', (outliers_if == -1).sum())\nprint('normales=', (outliers_if == 1).sum())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Marca observaciones potencialmente anómalas según aislamiento. Me sirve para limpiar puntos raros antes del clustering o para analizar casos especiales fuera del comportamiento general."
        },
        {
          title: "Comparar clustering y anomalías en una misma vista",
          body: "Este bloque ayuda mucho cuando quiero revisar si los puntos raros coinciden con ruido de DBSCAN, HDBSCAN u otro método.",
          code: "fig, axes = plt.subplots(1, 2, figsize=(14, 5))\naxes[0].scatter(X_umap[:, 0], X_umap[:, 1], c=labels_hdb, cmap='tab10', s=35)\naxes[0].set_title('HDBSCAN sobre UMAP')\naxes[1].scatter(X_umap[:, 0], X_umap[:, 1], c=outliers_if, cmap='coolwarm', s=35)\naxes[1].set_title('Isolation Forest sobre UMAP')\nplt.tight_layout()\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja una comparación visual rápida entre agrupamientos y puntos anómalos. Me sirve para ver si el ruido detectado por una técnica coincide con anomalías detectadas por otra."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es partir escalando, luego elegir una reducción de dimensionalidad para explorar el espacio y recién después comparar técnicas de agrupamiento. Así la lectura del clustering se vuelve mucho más clara y menos intuitiva a ciegas.",
      references: [],
      relatedIds: [
        "clustering-and-dimensionality-reduction-foundations",
        "advanced-clustering-techniques",
        "pca-impact-on-clustering",
        "dimensionality-reduction-techniques-beyond-pca",
        "anomaly-detection-with-unsupervised-learning"
      ]
    },
    {
      id: "python-module-7-code-recipes-for-deep-learning-and-neural-networks",
      slug: "recetario-de-codigo-python-para-deep-learning-y-redes-neuronales",
      title: "Deep Learning y redes neuronales en Python",
      summary: "Una nota práctica con snippets reutilizables para preparar datos, construir redes neuronales densas, secuenciales y convolucionales, entrenar autoencoders, aplicar transfer learning y comparar modelos profundos con métricas más completas.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "24 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "Deep Learning", "TensorFlow", "Redes neuronales"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar una base reutilizable para trabajar con redes neuronales en problemas de imágenes, texto y datos tabulares. En simple: menos repetir setup y más tener patrones claros para construir, entrenar, evaluar y comparar modelos profundos."
        },
        {
          title: "Cargar y preparar Fashion-MNIST para una DNN o CNN",
          body: "Este bloque sirve para dejar listas imágenes en escala de grises con una separación sana entre entrenamiento, validación y prueba.",
          code: "import numpy as np\nimport tensorflow as tf\nfrom tensorflow.keras.datasets import fashion_mnist\n\n(x_train, y_train), (x_test, y_test) = fashion_mnist.load_data()\n\nx_train = x_train.astype('float32') / 255.0\nx_test = x_test.astype('float32') / 255.0\n\nx_train = x_train[..., np.newaxis]\nx_test = x_test[..., np.newaxis]\n\nx_val = x_train[:6000]\ny_val = y_train[:6000]\nx_train = x_train[6000:]\ny_train = y_train[6000:]\n\nprint(x_train.shape, x_val.shape, x_test.shape)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Normaliza imágenes a rango `[0,1]`, agrega el canal y separa validación. Me sirve como base rápida para entrenar una red densa simple, una CNN o comparar optimizadores sin partir desordenado."
        },
        {
          title: "Construir una red densa simple para clasificación",
          body: "Cuando quiero una base clara para clasificación de imágenes sin meter convoluciones todavía, esta plantilla funciona súper bien.",
          code: "from tensorflow.keras import Sequential\nfrom tensorflow.keras.layers import Flatten, Dense, Dropout\n\nmodel_dnn = Sequential([\n    Flatten(input_shape=(28, 28, 1)),\n    Dense(256, activation='relu'),\n    Dense(128, activation='tanh'),\n    Dropout(0.3),\n    Dense(10, activation='softmax')\n])\n\nmodel_dnn.compile(\n    optimizer='adam',\n    loss='sparse_categorical_crossentropy',\n    metrics=['accuracy']\n)\n\nmodel_dnn.summary()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Arma una DNN con dos capas ocultas y activaciones distintas. Me sirve para comparar funciones de activación, optimizadores o pérdidas antes de pasar a arquitecturas más complejas."
        },
        {
          title: "Entrenar y graficar curvas de aprendizaje",
          body: "Este patrón resume el entrenamiento básico y además deja listas las curvas para revisar sobreajuste o subajuste.",
          code: "import matplotlib.pyplot as plt\n\nearly_stop = tf.keras.callbacks.EarlyStopping(\n    monitor='val_loss', patience=3, restore_best_weights=True\n)\n\nhistory = model_dnn.fit(\n    x_train, y_train,\n    validation_data=(x_val, y_val),\n    epochs=15,\n    batch_size=64,\n    callbacks=[early_stop],\n    verbose=1\n)\n\nplt.figure(figsize=(12, 4))\nplt.subplot(1, 2, 1)\nplt.plot(history.history['loss'], label='train')\nplt.plot(history.history['val_loss'], label='val')\nplt.legend()\nplt.title('Pérdida')\n\nplt.subplot(1, 2, 2)\nplt.plot(history.history['accuracy'], label='train')\nplt.plot(history.history['val_accuracy'], label='val')\nplt.legend()\nplt.title('Accuracy')\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrena la red y deja visibles las curvas de pérdida y accuracy. Me sirve para revisar si el modelo mejora de forma estable o si empieza a memorizar demasiado rápido."
        },
        {
          title: "Preparar IMDb y entrenar una LSTM",
          body: "Cuando el problema es secuencial o de texto, este bloque deja lista una base bien clara para clasificación binaria con secuencias truncadas.",
          code: "from tensorflow.keras.datasets import imdb\nfrom tensorflow.keras.preprocessing.sequence import pad_sequences\nfrom tensorflow.keras.layers import Embedding, LSTM\n\nmax_features = 10000\nmaxlen = 200\n\n(x_train_seq, y_train_seq), (x_test_seq, y_test_seq) = imdb.load_data(num_words=max_features)\n\nx_train_seq = pad_sequences(x_train_seq, maxlen=maxlen)\nx_test_seq = pad_sequences(x_test_seq, maxlen=maxlen)\n\nmodel_lstm = Sequential([\n    Embedding(max_features, 128, input_length=maxlen),\n    LSTM(64),\n    Dense(1, activation='sigmoid')\n])\n\nmodel_lstm.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\nmodel_lstm.summary()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Carga IMDb, recorta secuencias y arma una LSTM para clasificación binaria. Me sirve cuando quiero una base práctica para sentimiento, secuencias o tareas donde importa el orden del texto."
        },
        {
          title: "Construir una CNN con regularización",
          body: "Para imágenes, esta plantilla ya deja una arquitectura más realista con convoluciones, pooling, dropout y penalización L2.",
          code: "from tensorflow.keras import regularizers\nfrom tensorflow.keras.layers import Conv2D, MaxPooling2D, GlobalAveragePooling2D\n\nmodel_cnn = Sequential([\n    Conv2D(32, (3, 3), activation='relu', kernel_regularizer=regularizers.l2(1e-4), input_shape=(28, 28, 1)),\n    MaxPooling2D((2, 2)),\n    Conv2D(64, (3, 3), activation='relu', kernel_regularizer=regularizers.l2(1e-4)),\n    MaxPooling2D((2, 2)),\n    GlobalAveragePooling2D(),\n    Dropout(0.3),\n    Dense(10, activation='softmax')\n])\n\nmodel_cnn.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Arma una CNN compacta y regularizada para clasificación de imágenes. Me sirve para comparar contra una DNN y para evaluar cómo cambia el aprendizaje al usar capas convolutivas."
        },
        {
          title: "Comparar optimizadores sobre la misma CNN",
          body: "En varios notebooks del módulo aparece esta lógica: misma arquitectura, distinto optimizador, misma evaluación.",
          code: "from tensorflow.keras.models import clone_model\n\nbase_model = model_cnn\noptimizadores = {\n    'Adam': tf.keras.optimizers.Adam(),\n    'RMSprop': tf.keras.optimizers.RMSprop()\n}\n\nresultados_opt = []\nfor nombre, opt in optimizadores.items():\n    model_tmp = clone_model(base_model)\n    model_tmp.build((None, 28, 28, 1))\n    model_tmp.set_weights(base_model.get_weights())\n    model_tmp.compile(optimizer=opt, loss='sparse_categorical_crossentropy', metrics=['accuracy'])\n    hist = model_tmp.fit(x_train, y_train, validation_data=(x_val, y_val), epochs=5, batch_size=64, verbose=0)\n    resultados_opt.append({\n        'optimizador': nombre,\n        'val_accuracy_final': hist.history['val_accuracy'][-1]\n    })\n\nprint(resultados_opt)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Compara optimizadores manteniendo la misma arquitectura y pesos base. Me sirve para revisar si Adam, RMSprop o SGD están convergiendo mejor en un problema concreto sin mezclar cambios de modelo con cambios de optimización."
        },
        {
          title: "Entrenar un autoencoder básico con MNIST",
          body: "Este bloque deja una base simple para compresión y reconstrucción usando imágenes aplanadas.",
          code: "from tensorflow.keras.layers import Input\nfrom tensorflow.keras.models import Model\n\n(x_train_mnist, _), (x_test_mnist, _) = tf.keras.datasets.mnist.load_data()\nx_train_mnist = x_train_mnist.astype('float32') / 255.0\nx_test_mnist = x_test_mnist.astype('float32') / 255.0\n\nx_train_flat = x_train_mnist.reshape((-1, 784))\nx_test_flat = x_test_mnist.reshape((-1, 784))\n\ninput_img = Input(shape=(784,))\nencoded = Dense(128, activation='relu')(input_img)\nlatent = Dense(32, activation='relu')(encoded)\ndecoded = Dense(128, activation='relu')(latent)\noutput_img = Dense(784, activation='sigmoid')(decoded)\n\nautoencoder = Model(input_img, output_img)\nautoencoder.compile(optimizer='adam', loss='mse')"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Prepara MNIST aplanado y crea un autoencoder MLP básico. Me sirve para practicar reconstrucción, compresión y comparación futura con versiones denoising o más profundas."
        },
        {
          title: "Agregar ruido y crear un denoising autoencoder",
          body: "Si quiero que la red aprenda a limpiar ruido además de reconstruir, este patrón es la base más directa.",
          code: "noise_factor = 0.3\nx_train_noisy = x_train_flat + noise_factor * np.random.normal(size=x_train_flat.shape)\nx_test_noisy = x_test_flat + noise_factor * np.random.normal(size=x_test_flat.shape)\n\nx_train_noisy = np.clip(x_train_noisy, 0., 1.)\nx_test_noisy = np.clip(x_test_noisy, 0., 1.)\n\nhistory_ae = autoencoder.fit(\n    x_train_noisy, x_train_flat,\n    validation_data=(x_test_noisy, x_test_flat),\n    epochs=10,\n    batch_size=256,\n    verbose=1\n)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Inyecta ruido gaussiano y entrena el autoencoder para reconstruir la imagen limpia. Me sirve cuando quiero mostrar cómo una red puede aprender señal útil y no solo copiar una entrada tal cual."
        },
        {
          title: "Transfer learning con EfficientNetB0",
          body: "En visión moderna, esta plantilla sirve mucho para no entrenar todo desde cero y aprovechar una base ya preentrenada.",
          code: "from tensorflow.keras.applications import EfficientNetB0\nfrom tensorflow.keras import layers, Model\n\nbase_model = EfficientNetB0(include_top=False, weights='imagenet', input_shape=(224, 224, 3))\nbase_model.trainable = False\n\ninputs = tf.keras.Input(shape=(224, 224, 3))\nx = base_model(inputs, training=False)\nx = layers.GlobalAveragePooling2D()(x)\nx = layers.Dropout(0.3)(x)\noutputs = layers.Dense(5, activation='softmax')(x)\n\ntransfer_model = Model(inputs, outputs)\ntransfer_model.compile(\n    optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),\n    loss='sparse_categorical_crossentropy',\n    metrics=['accuracy']\n)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Carga una EfficientNet preentrenada, congela la base y agrega una cabeza nueva. Me sirve cuando tengo pocas imágenes, poco tiempo o quiero un punto de partida muy fuerte para clasificación visual."
        },
        {
          title: "Evaluar con matriz de confusión y reporte por clase",
          body: "Una vez entrenada la red, este bloque ayuda a salir del accuracy global y mirar mejor dónde falla.",
          code: "from sklearn.metrics import confusion_matrix, classification_report\n\npred_probs = model_dnn.predict(x_test, verbose=0)\npred_classes = pred_probs.argmax(axis=1)\n\ncm = confusion_matrix(y_test, pred_classes)\nreport = classification_report(y_test, pred_classes)\n\nprint(cm)\nprint(report)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula matriz de confusión y métricas por clase. Me sirve para ver si el modelo se desempeña parejo o si está fallando en clases específicas aunque el accuracy total se vea bonito."
        },
        {
          title: "Base para redes profundas en datos tabulares",
          body: "En la evaluación modular aparece este patrón para trabajar con datos tabulares usando DNN y variantes residuales.",
          code: "from tensorflow.keras.layers import BatchNormalization\n\ndef build_tabular_dnn(input_dim):\n    model = Sequential([\n        Dense(128, activation='relu', input_shape=(input_dim,)),\n        BatchNormalization(),\n        Dropout(0.3),\n        Dense(64, activation='relu'),\n        Dropout(0.2),\n        Dense(1, activation='sigmoid')\n    ])\n    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])\n    return model"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja una DNN base para clasificación binaria sobre datos tabulares. Me sirve para comparar contra modelos clásicos o contra arquitecturas más modernas como ResNet tabular o TabNet."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es partir por una arquitectura simple, revisar curvas y métricas, y recién después escalar a modelos más modernos como CNN más profundas, transfer learning o variantes especializadas para texto y tabulares. Así el deep learning se vuelve mucho más ordenado y menos intimidante.",
      references: [],
      relatedIds: [
        "deep-neural-network-fundamentals-and-learning-flow",
        "sequential-neural-networks-memory-and-lstm-basics",
        "autoencoders-latent-space-and-controlled-reconstruction",
        "modern-neural-networks-resnet-vs-efficientnet",
        "deep-neural-network-optimization-and-regularization"
      ]
    },
    {
      id: "python-module-8-code-recipes-for-nlp-and-text-classification",
      slug: "recetario-de-codigo-python-para-nlp-y-clasificacion-de-texto",
      title: "NLP y clasificación de texto en Python",
      summary: "Una nota práctica con snippets reutilizables para limpiar texto, tokenizar, vectorizar con BoW o TF-IDF, medir similitud, clasificar documentos con modelos clásicos y transformers, y explicar resultados de NLP con más orden.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "24 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "NLP", "TF-IDF", "BERT"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar una base práctica para trabajar texto sin partir siempre desde cero. En simple: limpieza, representación, clasificación y explicabilidad, todo con bloques que sí puedo adaptar después a textos clínicos, reseñas o documentos en español."
        },
        {
          title: "Crear un dataset simple y mapear clases con diccionarios",
          body: "Este bloque es importante porque en NLP muchas veces conviene construir diccionarios para clasificar, traducir etiquetas o agrupar salidas del modelo en categorías más legibles.",
          code: "import pandas as pd\n\ndatos = pd.DataFrame({\n    'texto': [\n        'El paciente presenta dolor leve y fiebre moderada.',\n        'La atención fue excelente y el tratamiento resultó efectivo.',\n        'No volvería al centro, me sentí ignorado por el personal.'\n    ],\n    'clase': ['moderado', 'positivo', 'negativo']\n})\n\nmapeo_clases = {\n    'leve': 0,\n    'moderado': 1,\n    'grave': 2,\n    'negativo': 3,\n    'positivo': 4\n}\n\ndatos['clase_id'] = datos['clase'].map(mapeo_clases)\nprint(datos)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Construye un DataFrame base y usa un diccionario para convertir etiquetas a IDs. Me sirve para mantener consistencia entre clases, crear buckets y evitar clasificaciones desordenadas a mano."
        },
        {
          title: "Limpiar texto manteniendo negaciones útiles",
          body: "En varios notebooks aparece limpieza ligera, pero en NLP en español conviene no borrar todo ciegamente porque palabras como `no` o `sin` pueden cambiar por completo el significado.",
          code: "import re\n\ndef limpiar_texto(texto):\n    texto = texto.lower()\n    texto = re.sub(r'http\\S+|www\\S+', ' ', texto)\n    texto = re.sub(r'\\S+@\\S+', ' ', texto)\n    texto = re.sub(r'[^a-záéíóúñü\\s]', ' ', texto)\n    texto = re.sub(r'\\s+', ' ', texto).strip()\n    return texto\n\ndatos['texto_limpio'] = datos['texto'].apply(limpiar_texto)\nprint(datos[['texto', 'texto_limpio']])"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Normaliza a minúsculas, elimina URLs, correos y símbolos raros, pero deja el texto en una forma todavía interpretable. Me sirve como primera capa antes de tokenizar, vectorizar o comparar documentos."
        },
        {
          title: "Tokenizar, lematizar y remover stopwords",
          body: "Este patrón deja una base más seria para texto en español usando spaCy y una lista de stopwords ampliable.",
          code: "import spacy\nfrom nltk.corpus import stopwords\n\nnlp = spacy.load('es_core_news_sm')\nstop_es = set(stopwords.words('spanish'))\nstop_es = stop_es - {'no', 'sin', 'nunca'}\n\ndef preprocesar(texto):\n    doc = nlp(texto)\n    tokens = [\n        tok.lemma_ for tok in doc\n        if tok.is_alpha and tok.lemma_ not in stop_es\n    ]\n    return ' '.join(tokens)\n\ndatos['texto_final'] = datos['texto_limpio'].apply(preprocesar)\nprint(datos[['texto_limpio', 'texto_final']])"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Lematiza, filtra tokens alfabéticos y remueve stopwords dejando vivas negaciones importantes. Me sirve para modelos clásicos donde una buena limpieza cambia mucho la calidad del vector final."
        },
        {
          title: "Vectorizar con Bag of Words y TF-IDF",
          body: "Este bloque resume las dos representaciones más clásicas para transformar texto en números.",
          code: "from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer\n\nbow = CountVectorizer()\nX_bow = bow.fit_transform(datos['texto_final'])\n\ntfidf = TfidfVectorizer(max_features=1000)\nX_tfidf = tfidf.fit_transform(datos['texto_final'])\n\nprint(X_bow.shape)\nprint(X_tfidf.shape)\nprint(tfidf.get_feature_names_out()[:15])"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Convierte textos en matrices numéricas con frecuencia simple o frecuencia ponderada. Me sirve como base para clasificación clásica, similitud, clustering de documentos o exploración de términos."
        },
        {
          title: "Calcular similitud coseno entre documentos",
          body: "Cuando quiero medir qué textos se parecen más entre sí, este patrón es uno de los más útiles y simples.",
          code: "from sklearn.metrics.pairwise import cosine_similarity\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\nsim_matrix = cosine_similarity(X_tfidf)\n\nplt.figure(figsize=(6, 4))\nsns.heatmap(sim_matrix, annot=True, cmap='Blues')\nplt.title('Similitud coseno entre documentos')\nplt.show()"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula una matriz de similitud a partir de TF-IDF. Me sirve para detectar documentos parecidos, revisar duplicados semánticos o justificar agrupaciones rápidas entre textos."
        },
        {
          title: "Sacar top términos por documento",
          body: "Este bloque ayuda mucho a interpretar por qué un texto quedó representado de cierta manera dentro de TF-IDF.",
          code: "import numpy as np\n\nfeature_names = tfidf.get_feature_names_out()\nfor i, fila in enumerate(X_tfidf.toarray()):\n    top_idx = np.argsort(fila)[::-1][:5]\n    top_terms = [(feature_names[j], round(fila[j], 3)) for j in top_idx if fila[j] > 0]\n    print(f'Documento {i}:', top_terms)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Lista los términos más importantes por documento según TF-IDF. Me sirve para inspección rápida, explicaciones preliminares o para revisar si el preprocesamiento está dejando palabras útiles."
        },
        {
          title: "Entrenar un clasificador clásico con Naive Bayes",
          body: "Este patrón deja una base corta y muy útil para clasificación de texto con modelos ligeros.",
          code: "from sklearn.model_selection import train_test_split\nfrom sklearn.naive_bayes import MultinomialNB\nfrom sklearn.metrics import classification_report\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X_tfidf,\n    datos['clase_id'],\n    test_size=0.3,\n    random_state=42,\n    stratify=datos['clase_id']\n)\n\nnb = MultinomialNB()\nnb.fit(X_train, y_train)\npred_nb = nb.predict(X_test)\n\nprint(classification_report(y_test, pred_nb, zero_division=0))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrena un modelo clásico y devuelve métricas por clase. Me sirve como baseline rápido antes de pasar a transformers o cuando necesito una solución interpretable y liviana."
        },
        {
          title: "Usar un diccionario para reagrupar salidas del modelo",
          body: "Acá entra de nuevo la idea de los diccionarios, porque no siempre quiero dejar la salida cruda del modelo tal cual viene.",
          code: "mapeo_sentimiento = {\n    '1 star': 'negativo',\n    '2 stars': 'negativo',\n    '3 stars': 'mixto',\n    '4 stars': 'positivo',\n    '5 stars': 'positivo'\n}\n\nsalidas_crudas = ['5 stars', '1 star', '3 stars']\nsalidas_legibles = [mapeo_sentimiento[x] for x in salidas_crudas]\nprint(salidas_legibles)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Convierte etiquetas crudas en categorías más útiles para el análisis. Me sirve muchísimo cuando trabajo con modelos preentrenados que devuelven estrellas, scores o labels poco naturales para un reporte."
        },
        {
          title: "Clasificar texto con un transformer ya preentrenado",
          body: "Este patrón resume muy bien la parte moderna del módulo 8: usar un pipeline listo para inferencia rápida.",
          code: "from transformers import pipeline\n\nmodel_name = 'nlptown/bert-base-multilingual-uncased-sentiment'\nclasificador = pipeline('sentiment-analysis', model=model_name)\n\ntextos = datos['texto'].tolist()\nresultados = clasificador(textos)\nprint(resultados)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Carga un modelo de Hugging Face y lo aplica directo sobre una lista de textos. Me sirve para prototipos rápidos, clasificación de sentimiento o para contrastar un enfoque moderno contra uno clásico."
        },
        {
          title: "Entrenar BERT con Trainer",
          body: "En la evaluación modular aparece esta estructura más robusta para fine-tuning y evaluación formal.",
          code: "from transformers import AutoTokenizer, AutoModelForSequenceClassification, TrainingArguments, Trainer\n\nmodel_ckpt = 'dccuchile/bert-base-spanish-wwm-cased'\ntokenizer = AutoTokenizer.from_pretrained(model_ckpt)\nmodel = AutoModelForSequenceClassification.from_pretrained(model_ckpt, num_labels=3)\n\nargs = TrainingArguments(\n    output_dir='bert_resultados',\n    evaluation_strategy='epoch',\n    save_strategy='epoch',\n    learning_rate=2e-5,\n    per_device_train_batch_size=8,\n    per_device_eval_batch_size=8,\n    num_train_epochs=2,\n    weight_decay=0.01\n)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja la configuración base para fine-tuning con `Trainer`. Me sirve cuando el pipeline ya no basta y necesito entrenar un transformer sobre mis propias clases con un control más serio."
        },
        {
          title: "Generar texto con GPT-2",
          body: "Como en tus notebooks también aparece generación, vale la pena dejar este bloque como referencia corta.",
          code: "from transformers import AutoTokenizer, AutoModelForCausalLM, set_seed\n\nset_seed(42)\nmodel_name = 'gpt2'\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForCausalLM.from_pretrained(model_name)\n\nprompt = 'El futuro de la inteligencia artificial'\ninputs = tokenizer(prompt, return_tensors='pt')\noutputs = model.generate(**inputs, max_length=60, do_sample=True, temperature=0.8)\n\nprint(tokenizer.decode(outputs[0], skip_special_tokens=True))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Genera texto desde un prompt usando GPT-2. Me sirve para experimentar con generación, comparar temperaturas y dejar una base mínima para tareas más creativas o de completado."
        },
        {
          title: "Explicar predicciones con LIME en texto",
          body: "Este bloque ayuda bastante cuando quiero justificar por qué un texto fue clasificado de cierta manera.",
          code: "from lime.lime_text import LimeTextExplainer\n\nexplicador = LimeTextExplainer(class_names=['leve', 'moderado', 'grave'])\n\ndef predict_proba_textos(textos):\n    X_vec = tfidf.transform([preprocesar(limpiar_texto(t)) for t in textos])\n    return nb.predict_proba(X_vec)\n\nexp = explicador.explain_instance(\n    datos.loc[0, 'texto'],\n    predict_proba_textos,\n    num_features=6\n)\n\nprint(exp.as_list())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Usa LIME para mostrar qué palabras empujan una predicción. Me sirve cuando necesito explicabilidad local y no quiero quedarme solo con el label final del modelo."
        },
        {
          title: "Agregar una nota de cautela con sarcasmo o ironía",
          body: "En tus notebooks aparece esta necesidad: no asumir que el modelo entiende sarcasmo o contraste emocional solo porque acierta algunas etiquetas.",
          code: "cues_ironia = ['claro', 'seguro', 'maravilloso', 'excelente', '\"', 'ja']\n\ndef alerta_ironia(texto):\n    t = texto.lower()\n    return any(cue in t for cue in cues_ironia)\n\ndatos['alerta_ironia'] = datos['texto'].apply(alerta_ironia)\nprint(datos[['texto', 'alerta_ironia']])"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Marca textos donde podría haber ironía, exageración o contraste raro. Me sirve como alerta manual para no confiar ciegamente en el sentimiento predicho cuando el lenguaje tiene matices difíciles."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es partir con limpieza y representación clásica, después levantar un baseline ligero y recién luego comparar con transformers o explicabilidad avanzada. Y sí: los diccionarios ayudan mucho a ordenar clases, agrupar etiquetas y dejar la clasificación mucho más consistente.",
      references: [],
      relatedIds: [
        "nlp-fundamentals-from-text-to-meaning",
        "nlp-preprocessing-embeddings-and-transformer-based-models",
        "nlp-model-evaluation-metrics-and-good-practices",
        "ethical-nlp-bias-transparency-and-human-review"
      ]
    },
    {
      id: "python-module-9-code-recipes-for-lime-and-shap",
      slug: "recetario-de-codigo-python-para-lime-y-shap",
      title: "LIME y SHAP para explicar modelos en Python",
      summary: "Una nota práctica con snippets reutilizables para preparar datos, entrenar modelos interpretables, explicar predicciones individuales con LIME, revisar contribuciones locales y globales con SHAP y comunicar resultados con más claridad.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "20 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "LIME", "SHAP", "XAI"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar una base práctica para interpretar predicciones y no quedarme solo con el score final del modelo. En simple: entrenar, evaluar y después abrir la caja para entender qué variables o palabras están empujando cada decisión."
        },
        {
          title: "Preparar un baseline de texto con TF-IDF y Logistic Regression",
          body: "En las actividades de texto aparece mucho esta estructura: limpiar, vectorizar y entrenar un modelo lineal balanceado antes de explicar casos puntuales.",
          code: "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.linear_model import LogisticRegression\n\nX = df['texto_limpio']\ny = df['label_binaria']\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\n\ntfidf = TfidfVectorizer(ngram_range=(1, 3), max_features=5000)\nX_train_vec = tfidf.fit_transform(X_train)\nX_test_vec = tfidf.transform(X_test)\n\nclf = LogisticRegression(class_weight='balanced', max_iter=2000)\nclf.fit(X_train_vec, y_train)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja un pipeline clásico de NLP listo para explicar. Me sirve porque LIME y varias lecturas de SHAP se entienden mejor si primero tengo un modelo baseline claro y rápido de revisar."
        },
        {
          title: "Barrido simple de umbrales antes de explicar",
          body: "Antes de interpretar, conviene confirmar que el umbral de decisión sí tiene sentido y no estoy explicando una clasificación mal calibrada.",
          code: "import numpy as np\nfrom sklearn.metrics import f1_score\n\nprobs = clf.predict_proba(X_test_vec)[:, 1]\numbrales = np.arange(0.30, 0.71, 0.05)\n\nmejor_umbral = 0.5\nmejor_f1 = 0\nfor t in umbrales:\n    pred_t = (probs >= t).astype(int)\n    f1 = f1_score(y_test, pred_t)\n    if f1 > mejor_f1:\n        mejor_f1 = f1\n        mejor_umbral = t\n\nprint(mejor_umbral, mejor_f1)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Prueba varios umbrales y se queda con el que mejor balancea el F1. Me sirve para que la explicabilidad se apoye sobre una decisión razonable y no sobre un corte arbitrario."
        },
        {
          title: "Explicar una predicción textual con LIME",
          body: "Este es el patrón más útil cuando quiero mostrar por qué una reseña, nota clínica o comentario fue clasificado de cierta forma.",
          code: "from lime.lime_text import LimeTextExplainer\n\nexplainer = LimeTextExplainer(class_names=['negativo', 'positivo'])\n\ndef predict_proba_lime(textos):\n    X_vec = tfidf.transform(textos)\n    return clf.predict_proba(X_vec)\n\ntexto_objetivo = X_test.iloc[0]\nexp = explainer.explain_instance(\n    texto_objetivo,\n    predict_proba_lime,\n    num_features=8\n)\n\nprint(exp.as_list())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrega una explicación local palabra por palabra para un texto específico. Me sirve cuando quiero revisar si el modelo está entendiendo señales reales o si se quedó pegado a palabras engañosas."
        },
        {
          title: "Mostrar varias explicaciones LIME de prueba",
          body: "En tus actividades aparece la idea de revisar varios casos, no solo uno. Este bloque deja una base rápida para eso.",
          code: "indices_muestra = [0, 1, 2]\nfor idx in indices_muestra:\n    texto = X_test.iloc[idx]\n    print('\\nTEXTO:', texto)\n    exp = explainer.explain_instance(texto, predict_proba_lime, num_features=6)\n    print(exp.as_list())"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Explica varias observaciones del test de una sola vez. Me sirve para comparar si el modelo decide con lógica consistente o si cambia mucho entre casos positivos, negativos y ambiguos."
        },
        {
          title: "Explicar un modelo tabular con SHAP",
          body: "En la evaluación modular del módulo 9 aparece muy fuerte el caso tabular, así que conviene dejar este patrón a mano para Random Forest u otros modelos de árbol.",
          code: "import shap\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\nfrom sklearn.impute import SimpleImputer\n\nnum_cols = X_tab.select_dtypes(include=['number']).columns\ncat_cols = X_tab.select_dtypes(exclude=['number']).columns\n\npreprocessor = ColumnTransformer([\n    ('num', Pipeline([\n        ('imputer', SimpleImputer(strategy='median')),\n        ('scaler', StandardScaler())\n    ]), num_cols),\n    ('cat', Pipeline([\n        ('imputer', SimpleImputer(strategy='most_frequent')),\n        ('onehot', OneHotEncoder(handle_unknown='ignore'))\n    ]), cat_cols)\n])\n\nrf = Pipeline([\n    ('prep', preprocessor),\n    ('model', RandomForestClassifier(random_state=42))\n])\n\nrf.fit(X_train_tab, y_train_tab)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja entrenado un modelo tabular robusto y preparado para pasar a explicaciones SHAP. Me sirve cuando quiero interpretar variables clínicas, financieras o categóricas con un modelo más realista que un ejemplo mínimo."
        },
        {
          title: "SHAP local para un caso específico",
          body: "Cuando quiero revisar una sola predicción en profundidad, este bloque es de los más valiosos.",
          code: "X_train_proc = rf.named_steps['prep'].transform(X_train_tab)\nX_test_proc = rf.named_steps['prep'].transform(X_test_tab)\nmodelo_rf = rf.named_steps['model']\n\nexplainer_shap = shap.TreeExplainer(modelo_rf)\nshap_values = explainer_shap.shap_values(X_test_proc)\n\ncaso = 0\nprint('Predicción:', modelo_rf.predict(X_test_proc[caso]))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Prepara el modelo y los datos para obtener valores SHAP locales. Me sirve cuando quiero revisar por qué un caso particular fue marcado como positivo, negativo o riesgoso."
        },
        {
          title: "Resumen global con SHAP",
          body: "Más allá de un caso puntual, este patrón deja una lectura global de qué variables pesan más en el modelo.",
          code: "feature_names = rf.named_steps['prep'].get_feature_names_out()\n\nshap.summary_plot(\n    shap_values[1] if isinstance(shap_values, list) else shap_values,\n    X_test_proc,\n    feature_names=feature_names,\n    show=False\n)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Genera un resumen global de importancia y dirección del efecto de las variables. Me sirve para explicar hallazgos a nivel general y no quedarme solo con ejemplos aislados."
        },
        {
          title: "Promedio de importancia global con SHAP",
          body: "Si quiero una tabla más simple para reportar, este bloque convierte SHAP en un ranking ordenado.",
          code: "import numpy as np\nimport pandas as pd\n\nvalores = shap_values[1] if isinstance(shap_values, list) else shap_values\nimportancia_media = np.abs(valores).mean(axis=0)\n\nranking_shap = pd.DataFrame({\n    'feature': feature_names,\n    'mean_abs_shap': importancia_media\n}).sort_values('mean_abs_shap', ascending=False)\n\nprint(ranking_shap.head(10))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula una importancia global promedio basada en contribuciones absolutas. Me sirve para reportes, tablas ejecutivas o comparaciones entre variables sin depender solo del gráfico."
        },
        {
          title: "Traducir o normalizar textos para interpretar mejor LIME",
          body: "En una de tus actividades aparece esta lógica: si el texto fuente está en inglés u otro idioma, conviene dejar una capa de traducción o apoyo antes de presentar la explicación.",
          code: "from googletrans import Translator\n\ntranslator = Translator()\ntexto_original = X_test.iloc[0]\ntexto_traducido = translator.translate(texto_original, dest='es').text\n\nprint(texto_original)\nprint(texto_traducido)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Entrega una versión traducida o más legible del texto antes de analizarlo. Me sirve cuando necesito presentar explicaciones a alguien que no trabajará directamente con el idioma original del corpus."
        },
        {
          title: "Comparar explicación local de LIME vs SHAP",
          body: "Este bloque no busca hacerlos competir, sino dejar claro que ambos miran una misma predicción desde enfoques distintos.",
          code: "resultado_lime = exp.as_list()\nresultado_shap = ranking_shap.head(5)\n\nprint('LIME local:', resultado_lime)\nprint('SHAP global top 5:')\nprint(resultado_shap)"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Deja lado a lado una explicación local textual y una visión global tabular. Me sirve para mostrar que LIME responde mejor al caso puntual, mientras SHAP suele dar una lectura más estable del modelo completo."
        },
        {
          title: "Revisar sesgos básicos por grupo",
          body: "Como tú querías conectar esto también con ética y legalidad, este bloque ayuda a mirar si el modelo se comporta distinto entre grupos relevantes.",
          code: "from sklearn.metrics import f1_score\n\nfor grupo in df_eval['genero'].dropna().unique():\n    mask = df_eval['genero'] == grupo\n    y_true_g = y_test_tab[mask]\n    y_pred_g = pred_tab[mask]\n    print(grupo, f1_score(y_true_g, y_pred_g))"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Calcula una métrica por subgrupo para revisar si el rendimiento cambia demasiado entre segmentos. Me sirve como alerta rápida de sesgo antes de sacar conclusiones más fuertes."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es primero asegurar un modelo razonable, luego evaluar bien sus métricas y recién después abrir explicaciones con LIME o SHAP. Así la interpretabilidad no se vuelve maquillaje del modelo, sino una capa real de entendimiento y revisión crítica.",
      references: [],
      relatedIds: [
        "xai-with-lime-and-shap-for-model-interpretation",
        "ethical-nlp-bias-transparency-and-human-review",
        "nlp-model-evaluation-metrics-and-good-practices"
      ]
    },
    {
      id: "python-module-10-code-recipes-for-mlops-and-deployment",
      slug: "recetario-de-codigo-python-para-mlops-docker-git-y-cicd",
      title: "Docker, Git y CI/CD para un flujo MLOps en Python",
      summary: "Una nota práctica con snippets reutilizables para estructurar un proyecto de Machine Learning, contenedorizarlo con Docker, versionarlo con Git y automatizar pruebas con un flujo simple de CI/CD.",
      category: "Código",
      type: "Recetario",
      level: "advanced",
      readingTime: "18 min",
      updatedAt: "2026-08-04",
      tags: ["Python", "MLOps", "Docker", "Git", "CI/CD"],
      featured: false,
      showSectionIndex: true,
      contentSections: [
        {
          title: "Para qué sirve este recetario",
          body: "La idea aquí es dejar un mapa práctico para pasar de un modelo suelto a un proyecto más ordenado: con API, frontend, base local, contenedores, pruebas y una automatización mínima que valide que todo sigue funcionando antes de subir cambios."
        },
        {
          title: "1. Estructurar el proyecto antes de desplegar",
          body: "Antes de pensar en Docker o en GitHub Actions, conviene ordenar el repositorio. Este tipo de estructura separa mejor entrenamiento, API, interfaz, scripts, base de datos, artefactos y pruebas.",
          code: "breast-cancer-mlops/\n├── api/\n│   └── api.py\n├── frontend/\n│   └── app.py\n├── model/\n│   └── train_model.py\n├── database/\n│   ├── schema.sql\n│   ├── seed_data.sql\n│   └── db_manager.py\n├── docker/\n│   ├── Dockerfile.api\n│   ├── Dockerfile.frontend\n│   └── docker-compose.yml\n├── requirements/\n│   ├── common.txt\n│   ├── api.txt\n│   ├── frontend.txt\n│   └── dev.txt\n├── scripts/\n│   ├── init_db.py\n│   └── seed_demo_patients.py\n├── tests/\n│   └── test_api.py\n└── .github/\n    └── workflows/\n        └── deploy.yml"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Ordena el proyecto por responsabilidades. Me sirve cuando ya no estoy trabajando solo un notebook, sino un flujo que mezcla entrenamiento, inferencia, persistencia, visualización y validación automática."
        },
        {
          title: "2. Separar dependencias por entorno",
          body: "Una práctica útil en MLOps es no meter todo en un solo `requirements.txt`. Separar dependencias facilita mantenimiento, despliegue y builds más claros.",
          code: "# requirements/common.txt\nnumpy\npandas\nscikit-learn\njoblib\n\n# requirements/api.txt\n-r common.txt\nflask\n\n# requirements/frontend.txt\n-r common.txt\nstreamlit\nrequests\n\n# requirements/dev.txt\n-r api.txt\n-r frontend.txt\npytest"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Permite instalar solo lo necesario según el servicio. Me sirve mucho cuando una API no necesita el mismo peso que el frontend o cuando el pipeline de pruebas requiere paquetes extra que en producción no quiero arrastrar."
        },
        {
          title: "3. Crear una imagen Docker para la API",
          body: "Este patrón toma directamente la lógica de tu proyecto: instalar dependencias, copiar el código, inicializar la base y levantar la API dentro del contenedor.",
          code: "FROM python:3.11-slim\n\nENV PYTHONDONTWRITEBYTECODE=1\nENV PYTHONUNBUFFERED=1\nENV PYTHONPATH=/app\n\nWORKDIR /app\n\nCOPY requirements/ ./requirements\nRUN pip install --no-cache-dir -r requirements/api.txt\n\nCOPY . .\n\nEXPOSE 5000\nCMD [\"sh\", \"-c\", \"python scripts/init_db.py && python api/api.py\"]"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Genera una imagen reproducible de la API. Me sirve cuando quiero dejar de depender de mi entorno local y asegurar que otro equipo o un servidor puedan levantar el mismo servicio bajo las mismas condiciones."
        },
        {
          title: "4. Crear una imagen Docker para el frontend",
          body: "Si el frontend va separado, también conviene contenedorizado aparte para que cada servicio tenga su propio ciclo de vida.",
          code: "FROM python:3.11-slim\n\nENV PYTHONDONTWRITEBYTECODE=1\nENV PYTHONUNBUFFERED=1\n\nWORKDIR /app\n\nCOPY requirements/ ./requirements\nRUN pip install --no-cache-dir -r requirements/frontend.txt\n\nCOPY . .\n\nEXPOSE 8501\nCMD [\"streamlit\", \"run\", \"frontend/app.py\", \"--server.address=0.0.0.0\", \"--server.port=8501\"]"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Levanta la interfaz de manera aislada. Esto sirve cuando quiero probar frontend y API como piezas separadas, o cuando una parte cambia más seguido que la otra."
        },
        {
          title: "5. Orquestar servicios con docker-compose",
          body: "Cuando ya tengo más de un servicio, `docker-compose` simplifica mucho el arranque coordinado y el paso de variables entre contenedores.",
          code: "version: \"3.9\"\n\nservices:\n  api:\n    build:\n      context: ..\n      dockerfile: docker/Dockerfile.api\n    container_name: breast-cancer-api\n    image: breast-cancer-api:latest\n    ports:\n      - \"5000:5000\"\n    volumes:\n      - ../artifacts:/app/artifacts\n      - ../database:/app/database\n    environment:\n      - DEBUG=false\n\n  frontend:\n    build:\n      context: ..\n      dockerfile: docker/Dockerfile.frontend\n    container_name: breast-cancer-frontend\n    ports:\n      - \"8501:8501\"\n    depends_on:\n      - api\n    environment:\n      - API_URL=http://api:5000\n    volumes:\n      - ../artifacts:/app/artifacts"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Arranca API y frontend juntos, compartiendo volúmenes y variables. Me sirve cuando quiero simular un entorno más real, probar integración local o dejar más fácil la puesta en marcha del proyecto."
        },
        {
          title: "6. Flujo local paso a paso para levantar el proyecto",
          body: "Tener un orden claro para levantar el sistema evita errores tontos y deja el flujo más reproducible.",
          code: "git clone https://github.com/FredyGR-98/detector-cancer-mama-mlops.git\ncd breast-cancer-mlops\npy -m venv .venv\n.venv\\Scripts\\activate\npip install -r requirements/dev.txt\npython model/train_model.py\npython scripts/init_db.py\npython scripts/seed_demo_patients.py\npython api/api.py\nstreamlit run frontend/app.py"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Resume el flujo manual para clonar, preparar entorno, entrenar modelo, inicializar base y levantar servicios. Me sirve para pruebas locales, para explicar el proyecto en portafolio y para no olvidar el orden correcto al volver días después."
        },
        {
          title: "7. Versionar bien con Git antes de automatizar",
          body: "Si no tengo un flujo mínimo de Git, CI/CD se vuelve puro caos. Lo importante es dejar commits claros, ramas entendibles y archivos innecesarios fuera del repo.",
          code: "# Inicializar o revisar el repositorio\ngit init\ngit status\n\n# Crear una rama de trabajo\ngit checkout -b feature/docker-cicd\n\n# Agregar cambios importantes\ngit add api/ frontend/ docker/ requirements/ tests/ .github/workflows/deploy.yml README.md\n\n# Crear commit con mensaje claro\ngit commit -m \"Agrega flujo MLOps con Docker y CI\"\n\n# Conectar remoto y subir\ngit remote add origin <URL_DEL_REPO>\ngit push -u origin feature/docker-cicd"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Ordena la subida de cambios para que el historial tenga sentido y el pipeline se active sobre una base limpia. Me sirve muchísimo cuando trabajo por iteraciones y quiero saber qué cambio exacto tocó Docker, tests o despliegue."
        },
        {
          title: "8. Automatizar validación con GitHub Actions",
          body: "Este flujo CI ya es suficiente para validar algo muy útil: que el repo instala dependencias, entrena el modelo, inicializa la base y pasa pruebas antes de aceptar cambios en `main`.",
          code: "name: CI - Breast Cancer API\n\non:\n  push:\n    branches: [\"main\"]\n  pull_request:\n    branches: [\"main\"]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout del repositorio\n        uses: actions/checkout@v4\n\n      - name: Configurar Python\n        uses: actions/setup-python@v5\n        with:\n          python-version: \"3.11\"\n\n      - name: Instalar dependencias\n        run: |\n          python -m pip install --upgrade pip\n          pip install -r requirements/dev.txt\n\n      - name: Entrenar modelo\n        run: python model/train_model.py\n\n      - name: Inicializar base de datos\n        run: python scripts/init_db.py\n\n      - name: Ejecutar pruebas automáticas\n        env:\n          PYTHONPATH: ${{ github.workspace }}\n        run: python -m pytest -v tests/"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Cada `push` o `pull request` hacia `main` dispara una validación automática. Me sirve para detectar roturas antes de fusionar cambios y para dejar evidencia visible de que el proyecto no es solo una demo visual, sino también un flujo validado."
        },
        {
          title: "9. Empaquetar el proyecto cuando necesito compartirlo",
          body: "A veces no quiero compartir todo el repo tal cual, sino entregar una versión comprimida sin entornos virtuales ni carpetas pesadas.",
          code: "import zipfile\nimport os\n\n\ndef empaquetar(nombre_zip=\"EvaluacionModular10.zip\"):\n    excluir = [\n        \"__pycache__\", \".git\", \".github\", \".venv\", \"venv\",\n        \"mlops-env\", \".env\", \".vscode\", nombre_zip\n    ]\n\n    with zipfile.ZipFile(nombre_zip, \"w\", zipfile.ZIP_DEFLATED) as zipf:\n        for root, dirs, files in os.walk(\".\"):\n            dirs[:] = [d for d in dirs if d not in excluir]\n            for file in files:\n                if file in excluir or file == nombre_zip:\n                    continue\n                ruta_completa = os.path.join(root, file)\n                ruta_relativa = os.path.relpath(ruta_completa, \".\")\n                zipf.write(ruta_completa, ruta_relativa)\n                print(f\"Añadido: {ruta_relativa}\")"
        },
        {
          title: "Qué hace y cuándo me sirve",
          body: "Crea un ZIP del proyecto excluyendo basura técnica y carpetas pesadas. Me sirve cuando quiero entregar una evaluación, respaldar una versión limpia o compartir una copia portable sin subir todo el entorno al repositorio."
        },
        {
          title: "10. Buenas prácticas mínimas para que esto no se rompa",
          body: "MLOps no parte en Kubernetes ni en la nube; parte en pequeñas decisiones ordenadas que vuelven el proyecto más reproducible.",
          comparisonTable: {
            columns: ["Práctica", "Por qué ayuda"],
            rows: [
              ["Separar dependencias por entorno", "Reduce ruido y hace builds más claros."],
              ["Tener tests automáticos", "Evita romper API o lógica sin darte cuenta."],
              ["Versionar con ramas y commits claros", "Da trazabilidad sobre qué cambió y por qué."],
              ["Contenerizar servicios", "Hace reproducible el entorno en otras máquinas."],
              ["Automatizar CI antes de pensar en CD", "Primero conviene validar, luego desplegar."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "En un proyecto de ML aplicado, Docker no es solo 'empaquetar', Git no es solo 'guardar cambios' y CI/CD no es solo 'subir a GitHub'. Los tres juntos sirven para que el trabajo sea repetible, entendible, portable y mucho más profesional."
        }
      ],
      closingNote:
        "La mejor forma de usar este recetario es pensar el flujo en capas: primero ordeno el repo, luego separo dependencias, después levanto servicios, pruebo local, versiono cambios y recién ahí automatizo validaciones. Ese orden evita mucho dolor más adelante.",
      references: [],
      relatedIds: [
        "share-ml-projects-and-mlops-collaboration",
        "python-module-7-code-recipes-for-deep-learning-and-neural-networks",
        "python-module-9-code-recipes-for-lime-and-shap"
      ]
    },
    {
      id: "data-visualization-foundations",
      slug: "pilares-de-una-buena-visualizacion-de-datos",
      title: "Pilares de una buena visualización de datos",
      summary: "Una guía base para entender por qué visualizamos, qué hace que una visualización sea efectiva y cómo comunicar hallazgos sin confundir correlación con causalidad.",
      category: "Visualizaciones",
      type: "Guía",
      level: "initial",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Visualización", "Storytelling", "Correlación", "Causalidad"],
      featured: true,
      contentSections: [
        {
          title: "Por qué visualizar importa tanto",
          body: "Visualizar datos no es decorar un análisis: es traducirlo. Muchas veces la audiencia no tiene tiempo ni contexto para leer una tabla grande o interpretar métricas crudas, así que mi trabajo es convertir esa información en una forma que se entienda rápido, se recuerde y ayude a tomar decisiones."
        },
        {
          title: "La visualización como puente con otra persona",
          body: "Una buena visualización crea sinergia entre el análisis y quien lo recibe. No basta con que yo entienda el dato: la idea es que otra persona pueda entrar en la historia, captar el punto central y conversar con los resultados sin perderse en el detalle técnico."
        },
        {
          title: "Los pilares de una visualización efectiva",
          body: "Antes de pensar en el gráfico específico, conviene revisar qué hace que una visualización realmente funcione.",
          comparisonTable: {
            columns: ["Pilar", "Qué significa", "Por qué importa"],
            rows: [
              ["Claridad", "La visual debe dejar claro qué se está mostrando.", "Evita lecturas erróneas o ruido innecesario."],
              ["Relevancia", "El gráfico debe responder a una pregunta real del análisis.", "Ayuda a que el esfuerzo visual tenga sentido."],
              ["Legibilidad", "Texto, colores, escalas y etiquetas deben leerse fácil.", "Si cuesta leerla, la audiencia se desconecta."],
              ["Comparabilidad", "La visual debe permitir contrastar valores o tendencias.", "Hace más simple detectar diferencias o patrones."],
              ["Narrativa", "La visual debe ayudar a contar una historia.", "Conecta el dato con una decisión o insight."]
            ]
          }
        },
        {
          title: "Cómo elegir una visual pensando en la audiencia",
          body: "No siempre el mejor gráfico es el más llamativo. A veces una barra simple explica mucho mejor que una visual más compleja. La elección depende de qué quiero mostrar, cuánto contexto tiene la audiencia y qué decisión debería poder tomar después de verlo.",
          bestPractices: [
            "Usar gráficos simples cuando la idea central debe entenderse muy rápido.",
            "Elegir la visual según la pregunta: comparación, distribución, evolución o relación.",
            "Evitar sobrecargar con demasiados colores, etiquetas o métricas a la vez.",
            "Pensar si la audiencia necesita explorar o solo entender una conclusión principal."
          ]
        },
        {
          title: "Qué hace que una visual conecte mejor",
          body: "Los ojos de las personas se sienten atraídos por colores, formas y patrones. Por eso la visualización sirve tanto para comunicar: permite que el cerebro detecte tendencias, contrastes o anomalías más rápido que leyendo una tabla pura."
        },
        {
          title: "Correlación y causalidad: una advertencia clave",
          body: "En visualización es muy fácil caer en conclusiones demasiado rápidas. Que dos variables se muevan juntas no significa automáticamente que una cause a la otra. Una visual puede mostrar relación, pero no prueba por sí sola causalidad.",
          comparisonTable: {
            columns: ["Concepto", "Qué significa", "Ejemplo"],
            rows: [
              ["Correlación positiva", "Dos variables suben o bajan juntas.", "Aumenta la temperatura y también suben las ventas de helado."],
              ["Correlación negativa", "Cuando una sube, la otra baja.", "Sube el precio y baja la demanda."],
              ["Sin correlación clara", "No se observa un patrón consistente.", "Una variable cambia y la otra se mantiene casi igual."],
              ["Causalidad", "Un evento produce directamente otro resultado.", "El rayo provoca el trueno."]
            ]
          }
        },
        {
          title: "Por qué no conviene confundirlas",
          body: "Si una visual muestra que dos variables se mueven juntas, eso puede ser una pista, no una sentencia final. A veces existe un tercer factor, un contexto oculto o una coincidencia temporal que explica mejor la relación observada."
        },
        {
          title: "Cómo contaría esto en un análisis real",
          body: "Si veo que las personas abandonan más una página web y al mismo tiempo baja la conversión, puedo sospechar una relación. Pero no debería afirmar que una cosa causa la otra sin más evidencia. La visualización me ayuda a detectar el patrón; después debo validar la explicación con más datos, contexto o investigación adicional."
        },
        {
          title: "Qué revisar antes de mostrar una visual",
          body: "Antes de compartir un gráfico, me conviene hacer un pequeño control de calidad narrativo.",
          bestPractices: [
            "Preguntarme qué idea exacta quiero que recuerde la audiencia.",
            "Verificar si el gráfico realmente responde esa idea o si solo se ve bonito.",
            "Revisar si la escala, el orden y las etiquetas ayudan o distorsionan la lectura.",
            "Separar claramente lo que es observación, lo que es interpretación y lo que es hipótesis."
          ]
        },
        {
          title: "Cómo resaltar la información clave sin recargar",
          body: "Una visual efectiva debería poder entenderse en pocos segúndos. Para eso ayudan mucho los encabezados, subtítulos, etiquetas directas y anotaciones. La idea no es llenar el gráfico de texto, sino guiar la mirada hacia lo importante con el contexto justo.",
          comparisonTable: {
            columns: ["Elemento", "Para qué sirve", "Buena práctica"],
            rows: [
              ["Encabezado", "Dice de inmediato qué muestran los datos.", "Que sea breve, claro y ubicado arriba del gráfico."],
              ["Subtítulo", "Añade contexto que el título no alcanza a explicar.", "Usarlo para aclarar periodo, lugar o segmento analizado."],
              ["Etiquetas", "Identifican ejes, series o valores relevantes.", "Preferir etiquetas directas si ayudan a evitar una leyenda confusa."],
              ["Anotaciones", "Enfocan la atención en un punto clave.", "Marcar solo el hallazgo importante, no todos los puntos a la vez."]
            ]
          },
          bestPractices: [
            "Pensar si la audiencia puede entender la idea principal en menos de cinco segúndos.",
            "Usar encabezados descriptivos en vez de nombres genéricos como 'Resultados' o 'Gráfico 1'.",
            "Agregar subtítulo solo cuando realmente aclare contexto importante.",
            "Usar anotaciones para resaltar picos, caídas, outliers o quiebres relevantes."
          ]
        },
        {
          title: "Chequeo visual rápido antes de presentar",
          body: "Antes de mostrar una visual, conviene revisar si la jerarquía de la información está bien resuelta. Si el título no orienta, si las etiquetas obligan a adivinar o si las anotaciones distraen más de lo que ayudan, la historia pierde fuerza.",
          comparisonTable: {
            columns: ["Revisión", "Qué mirar", "Señal de alerta"],
            rows: [
              ["Título", "Que explique la idea principal.", "Suena vago o no dice qué se compara."],
              ["Subtítulo", "Que aporte contexto útil.", "Repite el título o agrega ruido."],
              ["Etiquetas", "Que permitan leer sin esfuerzo.", "Faltan unidades, ejes o nombres de serie."],
              ["Anotaciones", "Que guíen sin estorbar.", "Hay tantas que compiten con los datos."]
            ]
          }
        },
        {
          title: "Fuentes de inspiración que sí sirven",
          body: "Mirar galerías o catálogos de visualización ayuda mucho, no para copiar sin pensar, sino para ampliar repertorio y elegir mejor según el mensaje que quiero transmitir.",
          resourceLinks: [
            {
              label: "Data Viz Catalogue",
              url: "https://datavizcatalogue.com/"
            },
            {
              label: "Las 25 mejores visualizaciones de datos",
              url: "https://visme.co/blog/best-data-visualizations/"
            },
            {
              label: "10 blogs de visualización de datos",
              url: "https://www.tableau.com/learn/articles/best-data-visualization-blogs"
            },
            {
              label: "Information is Beautiful",
              url: "https://informationisbeautiful.net/wdvp/gallery-2019/"
            },
            {
              label: "Google Data Studio Gallery",
              url: "https://datastudio.google.com/gallery?category=visualization"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Una buena visualización no solo muestra datos: ayuda a otra persona a entender algo importante con menos fricción. Si cuido claridad, relevancia y narrativa, la visual suma muchísimo. Y si además no confundo correlación con causalidad, comunico con mucha más responsabilidad.",
          resourceLinks: [
            {
              label: "Correlation is not Causation",
              url: "https://towardsdatascience.com/correlation-is-not-causation-ae05d03c1f53"
            },
            {
              label: "Khan Academy - Correlation and causation",
              url: "https://www.khanacademy.org/test-prep/praxis-math/praxis-math-lessons/gtp--praxis-math--lessons--statistics-and-probability/a/gtp--praxis-math--article--correlation-and-causation--lesson"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>La belleza de visualizar</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Visualizaciones de datos eficaces</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Correlación y causalidad</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "common-problem-types-and-smart-questions",
        "data-qualitative-vs-quantitative-and-big-vs-small",
        "pivot-tables-in-sheets-and-excel"
      ]
    },
    {
      id: "effective-data-storytelling",
      slug: "storytelling-para-presentar-casos-con-datos",
      title: "Storytelling para presentar casos con datos",
      summary: "Una guía para transformar hallazgos en una historia clara, visual y convincente, adaptando el mensaje a la audiencia y conectando contexto, evidencia e insight.",
      category: "Visualizaciones",
      type: "Guía",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Visualización", "Storytelling", "Narrativa", "Presentación"],
      featured: false,
      contentSections: [
        {
          title: "Qué es realmente una historia con datos",
          body: "En analítica, contar una historia con datos no significa adornar resultados. Significa comunicar el sentido de un conjunto de datos usando visualizaciones, narrativa y contexto, de forma que una audiencia concreta entienda qué está pasando, por qué importa y qué debería hacer con esa información."
        },
        {
          title: "Mostrar datos no es lo mismo que presentar un caso",
          body: "Una tabla o un gráfico pueden mostrar información, pero una historia de datos organiza esa información para guiar la lectura. La diferencia está en que no solo enseño resultados: los conecto con una pregunta, una tensión, una comparación o una decisión."
        },
        {
          title: "La estructura que más me sirve para presentar un caso",
          body: "Cuando quiero explicar un hallazgo sin perder a la audiencia, esta secuencia suele funcionar muy bien.",
          comparisonTable: {
            columns: ["Etapa", "Qué responde", "Qué debería mostrar"],
            rows: [
              ["Contexto", "¿De qué caso estamos hablando?", "Problema, periodo, audiencia y variable principal."],
              ["Pregunta", "¿Qué quiero entender o demostrar?", "La duda de negocio o la hipótesis inicial."],
              ["Evidencia", "¿Qué muestran los datos?", "Gráfico, tabla o comparación principal."],
              ["Insight", "¿Qué significa realmente?", "Interpretación clara del patrón observado."],
              ["Acción", "¿Qué haría después?", "Recomendación, decisión o siguiente paso."]
            ]
          }
        },
        {
          title: "Primero: establecer bien el contexto",
          body: "Sin contexto, una visualización puede verse correcta, pero seguir siendo ambigua. Antes de profundizar en una gráfica, conviene dejar claro qué se está midiendo, sobre quién, en qué periodo y por qué debería importarle a la audiencia."
        },
        {
          title: "Después: analizar una variable sin romper la lectura",
          body: "Cuando una historia entra en detalle, el gráfico debe ayudar a seguir el razonamiento, no entorpecerlo. Si la audiencia no puede captar el patrón principal en pocos segundos, la historia pierde fuerza aunque el análisis esté bien hecho.",
          bestPractices: [
            "Elegir una visual que permita ver el patrón principal sin explicación extra.",
            "Hacer coincidir colores, orden y leyendas con la lógica del relato.",
            "Evitar porcentajes, categorías o etiquetas que generen confusión innecesaria.",
            "Usar comparaciones simples antes de pasar a capas más complejas."
          ]
        },
        {
          title: "La regla práctica: que la idea se entienda rápido",
          body: "Si alguien necesita mucho tiempo para descifrar el gráfico, probablemente la visual o la narración todavía no están resueltas. Una buena historia de datos debería permitir captar la idea central rápido y luego invitar a profundizar."
        },
        {
          title: "Cómo una visual ayuda a sacar conclusiones",
          body: "La visualización no solo sirve para explorar; también sirve para demostrar. Un buen mapa, una barra bien ordenada o una anotación puntual pueden reforzar una conclusión específica y hacer que la audiencia vea exactamente lo que quiero resaltar.",
          example: "Ejemplo práctico: si comparo barrios con distinto nivel de ruido, un mapa bien etiquetado puede mostrar de inmediato que una zona muy ruidosa está al lado de una muy tranquila, reforzando mejor ese contraste que una tabla extensa."
        },
        {
          title: "Qué diferencia a una historia efectiva de una presentación plana",
          body: "La historia funciona mejor cuando combina tres capas: datos confiables, contexto suficiente y una narrativa pensada para la audiencia.",
          comparisonTable: {
            columns: ["Elemento", "Qué aporta", "Riesgo si falta"],
            rows: [
              ["Datos", "Sostienen la evidencia.", "La historia se vuelve débil o discutible."],
              ["Contexto", "Ayuda a interpretar lo observado.", "El gráfico se siente aislado o ambiguo."],
              ["Narrativa", "Guía el recorrido de lectura.", "La audiencia ve números, pero no entiende el punto."]
            ]
          }
        },
        {
          title: "Storytelling según la audiencia",
          body: "No presentaría igual un caso a una jefatura, a un cliente o a otro analista. Cambian el nivel de detalle, el vocabulario, la profundidad técnica y la forma de mostrar la evidencia.",
          bestPractices: [
            "Para liderazgo, priorizar impacto, riesgo y decisión.",
            "Para equipos técnicos, mostrar lógica, supuestos y detalle metodológico.",
            "Para clientes o usuarios, usar menos jerga y más claridad visual.",
            "Preguntarme siempre qué necesita entender esa persona para actuar."
          ]
        },
        {
          title: "Errores comunes al contar historias con datos",
          body: "Muchos problemas no vienen del análisis, sino de cómo se presenta.",
          comparisonTable: {
            columns: ["Error", "Qué pasa", "Cómo corregirlo"],
            rows: [
              ["Ir directo al gráfico", "La audiencia no entiende por qué importa.", "Abrir con contexto y pregunta."],
              ["Meter demasiadas visuales", "Se dispersa la atención.", "Elegir solo las que sostienen el argumento."],
              ["No separar hallazgo de opinión", "La interpretación se vuelve confusa.", "Distinguir evidencia, lectura y recomendación."],
              ["Usar una visual difícil de leer", "La historia pierde impacto.", "Simplificar o cambiar el tipo de gráfico."]
            ]
          }
        },
        {
          title: "Plantilla mental para mi próxima presentación",
          body: "Si tuviera que resumirlo en una fórmula simple, sería: qué está pasando, por qué importa, qué lo demuestra y qué conviene hacer. Esa secuencia mantiene la historia enfocada y hace que los datos trabajen a favor del mensaje."
        },
        {
          title: "Para recordar",
          body: "Una historia de datos eficaz no solo muestra un gráfico bonito: hace que otra persona entienda una situación, vea la evidencia y salga con una conclusión más clara. Si junto visualización, narrativa y contexto, el caso se vuelve mucho más persuasivo y útil.",
          resourceLinks: [
            {
              label: "Storytelling with Data",
              url: "https://www.storytellingwithdata.com/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Historias de datos eficaces</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-visualization-foundations",
        "chart-types-and-when-to-use-them",
        "design-thinking-for-visualization",
        "visualization-channels-sheets-tableau-powerbi"
      ]
    },
    {
      id: "chart-types-and-when-to-use-them",
      slug: "tipos-de-visualizacion-y-cuando-usarlos",
      title: "Tipos de visualización y cuándo usarlos",
      summary: "Una guía visual para elegir mejor entre gráficos de líneas, barras, mapas de calor, pie chart, dispersión, histogramas y boxplots, con ejemplos prácticos para cada caso.",
      category: "Visualizaciones",
      type: "Guía",
      level: "basic",
      readingTime: "12 min",
      updatedAt: "2026-08-03",
      tags: ["Visualización", "Gráficos", "Boxplot", "Storytelling"],
      featured: true,
      contentSections: [
        {
          title: "Antes de elegir un gráfico",
          body: "La pregunta no debería ser solo qué gráfico se ve más bonito, sino qué patrón quiero mostrar. En visualización, normalmente estoy tratando de comunicar cambio, comparación, distribución, proporciones o relación entre variables."
        },
        {
          title: "Un árbol de decisión mental que sí ayuda",
          body: "Si quiero mostrar evolución en el tiempo, suelo pensar en líneas o barras. Si quiero comparar categorías, en barras. Si quiero ver relación entre variables, en dispersión. Si quiero ver distribución, en histogramas o boxplots. Y si quiero ver intensidad cruzada entre dos dimensiones, en mapas de calor."
        },
        {
          title: "Resumen rápido: qué gráfico usar según la pregunta",
          body: "Este mapa rápido sirve como atajo mental antes de abrir cualquier herramienta.",
          comparisonTable: {
            columns: ["Pregunta principal", "Gráfico sugerido", "Por qué encaja"],
            rows: [
              ["¿Cómo cambia algo en el tiempo?", "Gráfico de líneas", "Muestra evolución y tendencia con claridad."],
              ["¿Cómo comparo categorías?", "Gráfico de barras o columnas", "Hace muy visible la diferencia entre grupos."],
              ["¿Qué parte representa cada componente?", "Gráfico circular solo en casos simples", "Sirve para proporciones de un todo cuando hay pocas categorías."],
              ["¿Existe relación entre dos variables?", "Diagrama de dispersión", "Permite ver correlación, agrupamientos y anomalías."],
              ["¿Cómo se distribuyen los datos?", "Histograma o boxplot", "Ayuda a entender dispersión, asimetría y extremos."],
              ["¿Dónde hay mayor o menor intensidad?", "Mapa de calor", "Resume mucha información comparativa mediante color."]
            ]
          }
        },
        {
          title: "Gráfico de líneas",
          body: "Es el más natural cuando quiero seguir cambios a lo largo del tiempo. Funciona muy bien con series temporales y también cuando quiero comparar la evolución de dos o más grupos en paralelo.",
          illustrations: [
            {
              src: "img/atlas/line-chart.svg",
              alt: "Ilustración simple de un gráfico de líneas ascendente.",
              caption: "Ideal para mostrar tendencia: por ejemplo, cómo evoluciona una tasa o una venta a lo largo del tiempo."
            },
            {
              src: "img/atlas/multi-line-chart.svg",
              alt: "Ilustración de un gráfico de líneas con dos series.",
              caption: "Útil para comparar grupos en el mismo periodo, como hombres vs mujeres o marca A vs marca B."
            }
          ],
          example: "Ejemplo práctico: mostrar cómo cambia la tasa de graduación entre 2008 y 2012, o comparar la evolución de esa tasa entre hombres y mujeres."
        },
        {
          title: "Gráfico de barras o columnas",
          body: "Lo usaría cuando quiero contrastar categorías o periodos con diferencias visibles. Es excelente para rankings, comparaciones simples y métricas resumidas por grupo.",
          illustrations: [
            {
              src: "img/atlas/bar-chart.svg",
              alt: "Ilustración de un gráfico de barras simple.",
              caption: "Bueno para comparar magnitudes por categoría o por mes."
            },
            {
              src: "img/atlas/grouped-bar-chart.svg",
              alt: "Ilustración de un gráfico de barras agrupadas.",
              caption: "Muy útil cuando necesito comparar dos grupos dentro de cada categoría."
            }
          ],
          example: "Ejemplo práctico: comparar las ventas mensuales de autos entre agosto y diciembre, o contrastar las ventas de dos marcas distintas en esos mismos meses."
        },
        {
          title: "Mapa de calor",
          body: "Un mapa de calor sirve cuando tengo dos dimensiones cruzadas y quiero ver intensidad o concentración sin llenar todo de números. El color actúa como lenguaje principal.",
          illustrations: [
            {
              src: "img/atlas/heatmap.svg",
              alt: "Ilustración de un mapa de calor por filas y columnas.",
              caption: "Sirve mucho para leer patrones densos entre filas y columnas sin tener que revisar celda por celda."
            }
          ],
          example: "Ejemplo práctico: comparar temperaturas por ciudad y mes, o visualizar actividad de usuarios por hora del día y día de la semana."
        },
        {
          title: "Gráfico circular",
          body: "El pie chart funciona mejor cuando tengo pocas categorías y quiero mostrar proporciones de un todo. Si hay muchas categorías o diferencias pequeñas, normalmente prefiero barras porque se comparan mejor.",
          illustrations: [
            {
              src: "img/atlas/pie-chart.svg",
              alt: "Ilustración de un gráfico circular con cinco segmentos.",
              caption: "Conviene usarlo cuando las partes del todo son pocas y fáciles de distinguir."
            }
          ],
          example: "Ejemplo práctico: mostrar la preferencia por categorías de películas cuando solo tengo cinco géneros y quiero destacar qué proporción representa cada uno."
        },
        {
          title: "Diagrama de dispersión",
          body: "Es el gráfico más útil cuando quiero revisar relación entre dos variables numéricas. Ayuda a ver tendencia, agrupamientos, outliers y posibles correlaciones.",
          illustrations: [
            {
              src: "img/atlas/scatter-plot.svg",
              alt: "Ilustración de un diagrama de dispersión con relación positiva.",
              caption: "Muy bueno para mostrar cómo dos variables se mueven juntas."
            }
          ],
          example: "Ejemplo práctico: relacionar temperatura con ventas de helado, o tiempo de estudio con puntaje de evaluación."
        },
        {
          title: "Histograma",
          body: "El histograma muestra cómo se distribuyen los valores de una variable numérica. Sirve para entender dónde se concentra la mayoría de los casos, si hay asimetría o si existen varios grupos dentro de la distribución.",
          illustrations: [
            {
              src: "img/atlas/histogram.svg",
              alt: "Ilustración de un histograma con curva de distribución.",
              caption: "Ideal para ver frecuencia por rango y forma general de la distribución."
            }
          ],
          example: "Ejemplo práctico: analizar cuántas tazas de café se consumen por cliente a la semana, o cómo se distribuyen los tiempos de atención."
        },
        {
          title: "Boxplot",
          body: "El boxplot es muy útil cuando quiero resumir una distribución sin mostrar todos los datos. Me deja ver mediana, cuartiles, dispersión y valores atípicos de forma muy compacta.",
          illustrations: [
            {
              src: "img/atlas/boxplot.svg",
              alt: "Ilustración de un boxplot con caja, bigotes y outliers.",
              caption: "Excelente para comparar distribución entre grupos y detectar valores extremos rápidamente."
            }
          ],
          comparisonTable: {
            columns: ["Elemento del boxplot", "Qué muestra", "Por qué importa"],
            rows: [
              ["Caja", "Rango intercuartílico (Q1 a Q3)", "Resume el bloque central de los datos."],
              ["Línea central", "Mediana", "Muestra el valor típico sin distorsión extrema."],
              ["Bigotes", "Extensión de la variabilidad fuera de la caja", "Ayudan a entender dispersión."],
              ["Puntos aislados", "Outliers", "Muestran casos atípicos o muy extremos."]
            ]
          },
          example: "Ejemplo práctico: comparar distribución de salarios por área, tiempos de respuesta por canal o notas por sección de curso."
        },
        {
          title: "Qué errores evitar al elegir una visual",
          body: "Elegir mal un gráfico puede hacer que una historia simple se vuelva confusa.",
          bestPractices: [
            "No usar pie chart cuando hay demasiadas categorías o diferencias pequeñas.",
            "No usar líneas si el eje X no representa una secuencia lógica o temporal.",
            "No usar mapas de calor solo por estética si una tabla o barras explican mejor.",
            "No asumir causalidad solo porque un scatter plot muestra correlación.",
            "Elegir boxplot o histograma cuando el foco está en la distribución, no en el total."
          ]
        },
        {
          title: "Para recordar",
          body: "Cada gráfico cuenta mejor un tipo distinto de historia. Si quiero cambio, pienso en líneas. Si quiero comparación, en barras. Si quiero proporción, en pie chart solo si el caso es simple. Si quiero relación, en dispersión. Si quiero distribución, en histogramas y boxplots. Y si quiero intensidad cruzada, en mapas de calor.",
          resourceLinks: [
            {
              label: "Data to Viz",
              url: "https://www.data-to-viz.com/"
            },
            {
              label: "Data Viz Catalogue",
              url: "https://datavizcatalogue.com/"
            },
            {
              label: "Seleccionar el mejor gráfico - Parte 1",
              url: "https://www.youtube.com/watch?v=C07k0euBpr8"
            },
            {
              label: "Seleccionar el mejor gráfico - Parte 2",
              url: "https://www.youtube.com/watch?v=qGaIB-bRn-A"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>El maravilloso mundo de las visualizaciones</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Los Datos crecen en Árboles de decisiones</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-visualization-foundations",
        "pivot-tables-in-sheets-and-excel",
        "data-qualitative-vs-quantitative-and-big-vs-small"
      ]
    },
    {
      id: "visualization-channels-sheets-tableau-powerbi",
      slug: "canales-de-visualizacion-sheets-tableau-powerbi",
      title: "Canales de visualización: Sheets, Excel, Tableau y Power BI",
      summary: "Una guía práctica para decidir cuándo conviene graficar rápido en hojas de cálculo y cuándo vale más la pena pasar a Tableau o Power BI para dashboards y análisis más estructurados.",
      category: "Visualizaciones",
      type: "Guía",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Visualización", "Excel", "Google Sheets", "Tableau", "Power BI"],
      featured: false,
      contentSections: [
        {
          title: "No todos los canales de visualización cumplen el mismo rol",
          body: "A veces no necesito un dashboard completo: solo quiero mostrar una tendencia, comparar categorías o llevar un hallazgo a una presentación rápida. En otros casos sí conviene usar una herramienta pensada para explorar relaciones, modelar mejor la información y dejar algo más interactivo para negocio."
        },
        {
          title: "Cuándo me quedaría en Google Sheets o Excel",
          body: "Para mí, los gráficos en Sheets o Excel funcionan muy bien cuando necesito velocidad. Sirven para una revisión rápida, una presentación interna, un informe inicial o una validación previa antes de pasar a una herramienta de BI más robusta.",
          comparisonTable: {
            columns: ["Ventaja", "Por qué ayuda", "Ejemplo claro"],
            rows: [
              ["Rapidez", "Puedo pasar de tabla a gráfico en pocos minutos.", "Armar una lámina para una reunión o clase."],
              ["Barrera baja", "No necesito preparar tanto el modelo antes de graficar.", "Mostrar ventas mensuales o comparar áreas."],
              ["Edición directa", "Puedo corregir datos, etiquetas y formato en el mismo lugar.", "Ajustar nombres, filtros o series antes de presentar."],
              ["Buen puente con la presentación", "Se integra fácil con reportes o diapositivas rápidas.", "Insertar un gráfico de apoyo en PowerPoint o Google Slides."]
            ]
          }
        },
        {
          title: "Qué gráficos cubren bien las hojas de cálculo",
          body: "Sheets y Excel ya resuelven bastante cuando el análisis todavía es liviano o la historia visual no necesita demasiada interactividad.",
          bestPractices: [
            "Columnas o barras para comparaciones rápidas.",
            "Líneas para evolución temporal.",
            "Circulares solo si hay pocas categorías.",
            "Dispersión para una relación simple entre dos variables.",
            "Combinados cuando necesito mezclar volumen y tendencia."
          ]
        },
        {
          title: "Cuándo daría el salto a Tableau o Power BI",
          body: "Cuando el objetivo ya no es solo mostrar un gráfico, sino construir un dashboard, conectar varias fuentes o dejar navegación para negocio, ahí Tableau o Power BI suelen marcar mucha diferencia.",
          comparisonTable: {
            columns: ["Necesidad", "Sheets / Excel", "Tableau o Power BI"],
            rows: [
              ["Exploración rápida", "Muy cómodo", "También posible, pero puede ser más de lo necesario al inicio."],
              ["Dashboard interactivo", "Limitado", "Mucho más fuerte y escalable."],
              ["Cruce entre varias tablas", "Posible, pero menos natural", "Mucho más claro y estructurado."],
              ["Modelo reutilizable", "Más manual", "Más sólido para dejar una solución viva."],
              ["Compartir análisis para negocio", "Funciona en pequeño", "Más potente cuando quiero distribuir, filtrar o actualizar."]
            ]
          }
        },
        {
          title: "Tableau vs Power BI: cómo los diferenciaría",
          body: "Los dos son muy buenos. Para mí no se trata de elegir uno como absoluto mejor, sino de entender qué experiencia de trabajo favorece más cada uno.",
          comparisonTable: {
            columns: ["Criterio", "Power BI", "Tableau"],
            rows: [
              ["Interfaz", "Suele sentirse más amable para empezar y avanzar rápido.", "Puede pedir un poco más de adaptación inicial, pero luego fluye muy bien."],
              ["Trabajo con datos", "Se siente cómodo para modelar, usar Power Query y trabajar lógica tipo DAX.", "Se siente muy natural para explorar visualmente y conectar análisis con diseño del dashboard."],
              ["Relación entre tablas", "Resuelve bien el modelo y permite bastante control.", "Para muchas personas se vuelve más intuitivo ver la conexión entre tablas y la lógica del análisis visual."],
              ["Tipos de gráficos", "Muy sólido en negocio y reporting general.", "Destaca bastante en algunos gráficos y vistas analíticas más visuales."],
              ["Mapas de calor e histogramas", "Se pueden lograr, aunque a veces con más vuelta.", "Suele resultar más directo construir mapas de calor e histogramas."],
              ["Perfil de uso", "Muy bueno para reporting empresarial, seguimiento y tableros operativos.", "Muy fuerte para exploración visual, storytelling y dashboards con lectura muy gráfica."]
            ]
          }
        },
        {
          title: "Cómo lo aterrizaría en una decisión real",
          body: "Si estoy preparando una presentación rápida o una validación inicial, me quedo tranquilo en Excel o Google Sheets. Si ya necesito un dashboard serio para seguimiento, filtros, conexión entre tablas o una lectura más potente para negocio, me inclinaría mucho más por Tableau o Power BI."
        },
        {
          title: "Para recordar",
          body: "Sheets y Excel no compiten necesariamente con Tableau o Power BI: muchas veces se complementan. Uno me sirve para ir rápido y mostrar algo claro; los otros me ayudan a construir una solución visual más robusta, interactiva y sostenible.",
          resourceLinks: [
            {
              label: "Tipos de diagramas y gráficos en Google Sheets",
              url: "https://support.google.com/docs/answer/190718"
            },
            {
              label: "Visualizaciones en hojas de cálculo y Tableau",
              url: "https://www.coursera.org/"
            },
            {
              label: "Tableau",
              url: "https://www.tableau.com/"
            },
            {
              label: "Microsoft Power BI",
              url: "https://www.microsoft.com/power-platform/products/power-bi"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Visualizaciones en hojas de cálculo y Tableau</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "chart-types-and-when-to-use-them",
        "data-visualization-foundations",
        "design-thinking-for-visualization"
      ]
    },
    {
      id: "design-thinking-for-visualization",
      slug: "design-thinking-para-mejorar-visualizaciones",
      title: "Design thinking para mejorar visualizaciones",
      summary: "Una guía para aplicar empatía, definición, ideación, prototipado y prueba al diseño de visualizaciones y dashboards, pensando siempre en las necesidades reales de la audiencia.",
      category: "Visualizaciones",
      type: "Guía",
      level: "intermediate",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Visualización", "Design Thinking", "Dashboard", "UX"],
      featured: false,
      contentSections: [
        {
          title: "Por qué el design thinking sí ayuda en visualización",
          body: "Una visualización no se diseña solo para verse bien: se diseña para que alguien la use, la entienda y tome una mejor decisión. Por eso el design thinking encaja tan bien aquí: obliga a pensar primero en la persona y después en el gráfico."
        },
        {
          title: "Las 5 fases aplicadas a visualización",
          body: "El enfoque es simple: entender al usuario, definir qué necesita, generar opciones, probar versiones y mejorar antes de mostrar el resultado final.",
          comparisonTable: {
            columns: ["Fase", "Qué significa en visualización", "Pregunta útil"],
            rows: [
              ["Empatizar", "Entender necesidades, emociones y contexto de la audiencia.", "¿Qué le cuesta entender hoy a esta persona?"],
              ["Definir", "Aclarar qué información necesita ver realmente.", "¿Qué pregunta o decisión debe resolver esta visual?"],
              ["Idear", "Explorar distintas formas de mostrar la información.", "¿Qué otras visuales o interacciones podrían ayudar?"],
              ["Prototipar", "Crear una versión inicial del gráfico o dashboard.", "¿Cómo se vería una solución simple para probar?"],
              ["Probar", "Validar con usuarios antes de dejar la versión definitiva.", "¿Se entendió el mensaje sin explicación extra?"]
            ]
          }
        },
        {
          title: "Empatizar: pensar en quien va a mirar la visual",
          body: "Esta etapa cambia mucho la calidad del resultado. No es lo mismo diseñar para un gerente, para un usuario final o para otro analista. Cada uno llega con distinto tiempo, paciencia y necesidad de detalle.",
          bestPractices: [
            "Preguntarme qué emoción o necesidad domina el contexto del usuario.",
            "Revisar si las etiquetas, colores y acciones realmente tienen sentido para esa persona.",
            "Evitar asumir que la audiencia ya entiende el negocio o la métrica."
          ]
        },
        {
          title: "Definir: aterrizar la necesidad real",
          body: "Después de empatizar, toca precisar qué necesita lograr esa visualización. A veces la necesidad no es solo ver gasto, sino controlar presupuesto, detectar fugas o priorizar acciones."
        },
        {
          title: "Idear: no quedarse con la primera idea",
          body: "Antes de casarse con una visual, conviene abrir opciones. Tal vez un donut no sea suficiente y haga falta una barra, una línea, una tabla de detalle o una categoría personalizada que el usuario pueda editar.",
          example: "En un dashboard bancario, además de gasto por categoría, podrían hacer falta ingresos, gasto discrecional, deuda acumulada y evolución del presupuesto en el tiempo."
        },
        {
          title: "Prototipar y probar",
          body: "Una buena práctica es no esperar al dashboard final para pedir feedback. Un prototipo simple ya permite detectar si la navegación es clara, si el orden visual funciona o si hay algo que confunde a quien lo usa."
        },
        {
          title: "Los 9 principios de diseño que más conviene mirar",
          body: "Además del proceso, también conviene revisar la forma. Estos principios ayudan a que la visual no solo funcione, sino que se sostenga visualmente.",
          comparisonTable: {
            columns: ["Principio", "Qué cuida", "Cómo se nota"],
            rows: [
              ["Equilibrio", "Distribución visual de pesos.", "Nada compite de forma extraña por atención."],
              ["Énfasis", "Qué debe mirar primero la audiencia.", "Hay un foco claro y priorizado."],
              ["Movimiento", "Cómo recorre la mirada el diseño.", "La lectura fluye con naturalidad."],
              ["Patrón y repetición", "Coherencia entre elementos.", "Los mismos colores y formas significan lo mismo."],
              ["Proporción", "Relación entre tamaños y relevancia.", "Lo importante pesa más visualmente."],
              ["Ritmo", "Sensación de flujo continuo.", "La visual no se siente cortada ni rígida."],
              ["Variedad", "Interés visual sin caos.", "Hay dinamismo, pero sin confundir."],
              ["Unidad", "Cohesión total del resultado.", "Todo parece parte de la misma historia."]
            ]
          }
        },
        {
          title: "Los 4 elementos de una visualización exitosa",
          body: "David McCandless resume muy bien que una visual potente necesita equilibrar datos, historia, objetivo y forma visual. Si falta uno, el resultado puede seguir siendo interesante, pero queda incompleto.",
          comparisonTable: {
            columns: ["Elemento", "Qué aporta"],
            rows: [
              ["Información", "Los datos o hechos que realmente quiero comunicar."],
              ["Historia", "El concepto que da sentido al dato."],
              ["Objetivo", "La función o decisión que quiero activar."],
              ["Forma visual", "La estructura estética que vuelve digerible y memorable el mensaje."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Una visualización mejora mucho cuando se diseña como experiencia y no solo como salida gráfica. Si primero entiendo a la audiencia, después defino el objetivo y recién ahí prototipo y pruebo, el resultado suele ser mucho más claro, útil y persuasivo.",
          resourceLinks: [
            {
              label: "Three critical aspects of design thinking for big data solutions",
              url: "https://dataconomy.com/2019/05/three-critical-aspects-of-design-thinking-for-big-data-solutions/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>[Opcional] Pensamiento de diseño para la mejora de la visualización</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Principios de diseño</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Los datos son bellos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-visualization-foundations",
        "chart-types-and-when-to-use-them"
      ]
    },
    {
      id: "color-theory-for-data-visualization",
      slug: "teoria-del-color-para-visualizacion-de-datos",
      title: "Teoría del color para visualización de datos",
      summary: "Una guía práctica para usar mejor el color en gráficos y dashboards, entendiendo contraste, armonía, colores complementarios y cuándo conviene destacar o suavizar información.",
      category: "Visualizaciones",
      type: "Guía",
      level: "advanced",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Visualización", "Color", "Contraste", "Diseño"],
      featured: false,
      contentSections: [
        {
          title: "Por qué el color importa tanto",
          body: "En visualización, el color no es solo decoración. Sirve para agrupar, diferenciar, enfatizar, ordenar la mirada y hacer más entendible una historia. Bien usado, reduce fricción. Mal usado, confunde o incluso engaña."
        },
        {
          title: "Qué debería lograr el color en una visual",
          body: "Antes de elegir una paleta, conviene preguntarse qué función tendrá el color en el gráfico.",
          comparisonTable: {
            columns: ["Uso del color", "Qué resuelve", "Ejemplo"],
            rows: [
              ["Diferenciar categorías", "Separa grupos entre sí.", "Canales de venta o áreas de negocio."],
              ["Mostrar intensidad", "Expresa más o menos de una variable.", "Mapa de calor con mayor o menor actividad."],
              ["Dar énfasis", "Hace visible el punto más importante.", "Destacar una categoría frente al resto."],
              ["Agrupar visualmente", "Indica pertenencia a una misma familia.", "Tonos de un mismo color para subcategorías relacionadas."]
            ]
          }
        },
        {
          title: "Conceptos básicos de teoría del color",
          body: "No hace falta ser diseñador profesional para aplicar algunas ideas clave. Con una base simple ya se pueden tomar decisiones bastante mejores.",
          comparisonTable: {
            columns: ["Concepto", "Qué significa", "Cómo ayuda"],
            rows: [
              ["Colores complementarios", "Están opuestos en el círculo cromático.", "Generan alto contraste y ayudan a destacar."],
              ["Colores análogos", "Están cerca entre sí en el círculo cromático.", "Dan armonía y suavidad visual."],
              ["Colores cálidos", "Rojos, naranjas, amarillos.", "Transmiten energía, alerta o énfasis."],
              ["Colores fríos", "Azules, verdes, violetas.", "Transmiten calma, continuidad o contexto."],
              ["Saturación", "Intensidad del color.", "Ayuda a decidir qué tan fuerte o suave se verá la visual."],
              ["Valor o luminosidad", "Qué tan claro u oscuro es un color.", "Sirve mucho para jerarquía visual y legibilidad."]
            ]
          }
        },
        {
          title: "Tono, saturacion y brillo también influyen",
          body: "No basta con elegir un color base. También importa cómo se percibe. El tono define la familia del color, la saturacion indica que tan intenso o apagado se ve, y el brillo o luminosidad marca que tan claro u oscuro aparece. Estas tres variables cambian la jerarquía visual, el contraste, la accesibilidad y la forma en que una audiencia interpreta el peso de cada elemento.",
          comparisonTable: {
            columns: ["Propiedad", "Qué cambia", "Impacto en la decisión"],
            rows: [
              ["Tono", "La familia del color: azul, verde, rojo, etc.", "Ayuda a comunicar asociaciones distintas, separar categorías y definir el clima visual."],
              ["Saturación", "Que tan intenso o grisáceo se ve un color.", "Sirve para decidir si algo debe destacar mucho o quedarse como contexto secundario."],
              ["Brillo o luminosidad", "Que tan oscuro o claro se ve el color.", "Mejora la legibilidad, crea jerarquía y facilita separar fondo, texto y foco principal."]
            ]
          },
          illustrations: [
            {
              src: "img/atlas/color-properties.svg",
              alt: "Ejemplo visual de tono, saturacion y brillo o luminosidad dentro de una misma paleta de color.",
              caption: "La misma paleta puede sentirse muy distinta según cambie el tono, la saturacion o la luminosidad de cada color."
            }
          ],
          bestPractices: [
            "Para dashboards, dejar fondos y contexto con menor saturacion suele mejorar bastante la lectura.",
            "Para alertas o hallazgos clave, conviene reservar tonos más saturados y contrastantes.",
            "Antes de publicar, revisar si el texto sigue siendo legible cuando el color es muy claro o muy oscuro."
          ]
        },
        {
          title: "Colores complementarios y contraste",
          body: "Los colores complementarios destacan mucho entre sí porque están enfrentados en el círculo cromático. Son útiles cuando necesito contraste claro, pero si los abuso pueden cansar visualmente.",
          bestPractices: [
            "Usarlos para destacar una categoría clave o un punto crítico.",
            "Evitar poner demasiados colores intensos compitiendo al mismo tiempo.",
            "Combinar contraste con suficiente espacio en blanco para que respire la visual."
          ]
        },
        {
          title: "Qué colores suelen destacar más",
          body: "En general, los colores más saturados y cálidos atraen antes la mirada. Rojos, naranjas o rosas fuertes suelen destacar más que tonos neutros o fríos, por lo que conviene reservarlos para lo realmente importante."
        },
        {
          title: "Cómo lo aplicaría en un dashboard",
          body: "Una lógica simple que suele funcionar es dejar el contexto en tonos suaves o neutros y usar un color acento para la métrica o categoría que quiero resaltar. Así la audiencia entiende rápido qué mirar primero."
        },
        {
          title: "Esquemas de color que sirven mucho",
          body: "No todos los gráficos necesitan la misma lógica cromática. Elegir bien el esquema ayuda bastante a la lectura, y por eso conviene mirar cada combinación por separado según el efecto que genera.",
          comparisonTable: {
            columns: ["Esquema", "Cuándo usarlo", "Ejemplo"],
            rows: [
              ["Secuencial", "Cuando la variable crece de menos a más.", "Ingresos bajos a altos o temperatura fría a caliente."],
              ["Divergente", "Cuando hay un punto medio importante.", "Desviación respecto de una meta o presupuesto."],
              ["Categórico", "Cuando comparo grupos distintos sin orden natural.", "Áreas, marcas o segmentos."]
            ]
          },
          illustrations: [
            {
              src: "img/atlas/scheme-monochromatic.svg",
              alt: "Esquema monocromatico con variaciones de un mismo color.",
              caption: "Monocromático: funciona bien porque mantiene armonía y reduce ruido visual. Sirve cuando quiero una visual sobria, elegante o centrada en intensidad más que en contraste extremo."
            },
            {
              src: "img/atlas/scheme-split-complementary.svg",
              alt: "Esquema split complementario con tres colores equilibrados.",
              caption: "Split-complementario: se ve bien porque ofrece contraste fuerte sin llegar a la tensión total del complementario puro. Es útil para destacar una categoría sin que todo compita tanto."
            },
            {
              src: "img/atlas/scheme-analogous.svg",
              alt: "Esquema analogo formado por colores vecinos en el circulo cromatico.",
              caption: "Análogo: se percibe natural porque usa colores vecinos. Ayuda a transmitir continuidad, cercanía entre categorías y una lectura más suave."
            },
            {
              src: "img/atlas/scheme-triadic.svg",
              alt: "Esquema triadico con tres colores separados de manera uniforme.",
              caption: "Triádico: resalta por su equilibrio entre variedad y estabilidad. Funciona cuando necesito varias categorías bien diferenciadas sin perder orden visual."
            },
            {
              src: "img/atlas/scheme-complementary.svg",
              alt: "Esquema complementario con dos colores opuestos en el circulo cromatico.",
              caption: "Complementario: se ve potente porque enfrenta colores opuestos y genera mucho contraste. Conviene para alertas, comparaciones clave o un foco muy claro."
            },
            {
              src: "img/atlas/scheme-double-complementary.svg",
              alt: "Esquema doble complementario con dos pares de colores opuestos.",
              caption: "Doble complementario: ofrece riqueza visual y variedad, pero exige control. Va bien si necesito varias series con contraste, cuidando no sobrecargar la visual."
            },
            {
              src: "img/atlas/scheme-analogous-accent.svg",
              alt: "Esquema analogo con acento y un color contrastante adicional.",
              caption: "Análogo con acento: mantiene armonía general y suma un punto de contraste para dirigir la mirada. Es muy útil en dashboards con una métrica protagonista."
            }
          ]
        },
        {
          title: "Errores frecuentes con el color",
          body: "Algunos problemas de diseño no vienen del gráfico, sino de una mala elección cromática.",
          bestPractices: [
            "No usar demasiados colores si bastan dos o tres.",
            "No usar rojo y verde como única diferencia si quiero una visual más accesible.",
            "No destacar todo: si todo brilla, nada guía la mirada.",
            "No usar colores muy parecidos cuando la comparación debe ser rápida."
          ]
        },
        {
          title: "Para recordar",
          body: "El color debería ayudar a leer mejor, no a distraer. Si entiendo contraste, complementariedad, jerarquía y función visual, puedo diseñar gráficos mucho más claros y atractivos sin complicar innecesariamente la experiencia.",
          resourceLinks: [
            {
              label: "Information is Beautiful",
              url: "https://informationisbeautiful.net/"
            },
            {
              label: "Data Viz Catalogue",
              url: "https://datavizcatalogue.com/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Principios de diseño</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Los datos son bellos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-visualization-foundations",
        "chart-types-and-when-to-use-them",
        "design-thinking-for-visualization"
      ]
    },
    {
      id: "common-problem-types-and-smart-questions",
      slug: "tipos-de-problemas-y-preguntas-smart",
      title: "Tipos de problemas comunes y preguntas SMART",
      summary: "Antes de analizar datos, conviene reconocer qu\u00E9 tipo de problema tengo enfrente y si la pregunta inicial est\u00E1 bien formulada. Esta nota resume ambos pasos.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "initial",
      readingTime: "8 min",
      updatedAt: "2026-08-02",
      tags: ["Fundamentos", "SMART", "Resoluci\u00F3n de problemas"],
      featured: true,
      contentSections: [
        {
          title: "Por qu\u00E9 esta parte importa",
          body: "La anal\u00EDtica no se trata solo de cargar datos y esperar resultados: se trata de resolver problemas. Si no entiendo bien el tipo de problema o parto con una mala pregunta, el an\u00E1lisis puede salir ordenado, pero seguir apuntando a algo poco \u00FAtil."
        },
        {
          title: "Los 6 tipos de problemas que aparecen m\u00E1s seguido",
          body: "Este esquema me sirve como gu\u00EDa r\u00E1pida para identificar qu\u00E9 clase de an\u00E1lisis estoy empezando y qu\u00E9 tipo de respuesta deber\u00EDa intentar construir.",
          highlights: [
            {
              icon: "fa-solid fa-chart-line",
              title: "Hacer predicciones",
              text: "Sirve cuando quiero estimar qu\u00E9 podr\u00EDa pasar, por ejemplo prever qu\u00E9 canal publicitario podr\u00EDa captar m\u00E1s clientes."
            },
            {
              icon: "fa-solid fa-tags",
              title: "Categorizar cosas",
              text: "Sirve para clasificar elementos seg\u00FAn ciertas reglas, por ejemplo agrupar llamadas de clientes por tema o nivel de satisfacci\u00F3n."
            },
            {
              icon: "fa-solid fa-triangle-exclamation",
              title: "Detectar algo inusual",
              text: "Sirve para reconocer desviaciones o alertas, como comportamientos an\u00F3malos en datos de salud o transacciones."
            },
            {
              icon: "fa-solid fa-layer-group",
              title: "Identificar temas",
              text: "Sirve para agrupar hallazgos m\u00E1s amplios a partir de observaciones o categor\u00EDas, por ejemplo necesidades frecuentes en estudios UX."
            },
            {
              icon: "fa-solid fa-link",
              title: "Descubrir conexiones",
              text: "Sirve para entender relaciones entre procesos o variables, como atrasos log\u00EDsticos y entregas fuera de plazo."
            },
            {
              icon: "fa-solid fa-wave-square",
              title: "Encontrar patrones",
              text: "Sirve para reconocer comportamientos repetidos, por ejemplo fallas de m\u00E1quina que aparecen cuando el mantenimiento se retrasa."
            }
          ]
        },
        {
          title: "C\u00F3mo usar esto antes de analizar",
          body: "Antes de abrir una herramienta, me conviene preguntar qu\u00E9 clase de problema estoy tratando de resolver. Esa respuesta me ayuda a decidir qu\u00E9 datos necesito, qu\u00E9 m\u00E9todo usar\u00E9 y qu\u00E9 tipo de salida tendr\u00EDa sentido construir.",
          bestPractices: [
            "Nombrar el tipo de problema antes de empezar el an\u00E1lisis.",
            "Evitar mezclar predicci\u00F3n, clasificaci\u00F3n y b\u00FAsqueda de patrones como si fueran lo mismo.",
            "Usar el tipo de problema para ordenar expectativas con negocio o con el equipo."
          ]
        },
        {
          title: "Preguntas SMART para definir mejor el problema",
          body: "Una buena pregunta inicial deber\u00EDa ayudarme a obtener respuestas \u00FAtiles, medibles y accionables. Por eso me sirve revisar si la pregunta cumple con el filtro SMART.",
          comparisonTable: {
            columns: ["Espec\u00EDfica", "Mensurable", "Orientada a la acci\u00F3n", "Pertinente", "Limitada en el tiempo"],
            rows: [
              [
                "\u00BFLa pregunta aborda el problema concreto y tiene contexto claro?",
                "\u00BFLa respuesta se puede medir o comparar?",
                "\u00BFLa respuesta me ayudar\u00E1 a dise\u00F1ar un plan o decisi\u00F3n?",
                "\u00BFSe conecta con el problema real que quiero resolver?",
                "\u00BFLa respuesta sirve para el per\u00EDodo que estoy estudiando?"
              ],
              [
                "Se enfoca en un punto definido.",
                "Permite usar m\u00E9tricas o criterios observables.",
                "Empuja a tomar una acci\u00F3n concreta.",
                "Evita preguntas bonitas pero poco \u00FAtiles.",
                "Pone un marco temporal realista."
              ]
            ]
          }
        },
        {
          title: "Ejemplo t\u00E9cnico llevado a negocio",
          body: "Si un ecommerce quiere mejorar sus conversiones, una pregunta vaga ser\u00EDa: \"\u00BFPor qu\u00E9 la gente no compra m\u00E1s?\". Una versi\u00F3n mucho m\u00E1s \u00FAtil ser\u00EDa: \"\u00BFQu\u00E9 cambios en el flujo de checkout podr\u00EDan aumentar en un 10% la tasa de conversi\u00F3n m\u00F3vil durante el pr\u00F3ximo trimestre?\" Esa segúnda pregunta ya me orienta mejor el an\u00E1lisis porque define foco, m\u00E9trica, acci\u00F3n esperada, relevancia y tiempo.",
          example: "Pregunta vaga: \u00BFPor qu\u00E9 la gente no compra m\u00E1s? | Pregunta SMART: \u00BFQu\u00E9 cambios en el checkout podr\u00EDan aumentar en un 10% la conversi\u00F3n m\u00F3vil durante el pr\u00F3ximo trimestre?"
        },
        {
          title: "Qu\u00E9 conviene evitar al formular preguntas",
          body: "No todas las preguntas ayudan. Algunas empujan una respuesta espec\u00EDfica, otras son demasiado cerradas y otras tan vagas que no entregan contexto suficiente para analizar bien.",
          commandGroups: [
            {
              title: "Pregunta capciosa",
              description: "Sugiere la respuesta dentro de la misma pregunta.",
              code: "Este producto es demasiado caro, \u00BFverdad?"
            },
            {
              title: "Pregunta cerrada",
              description: "Limita demasiado la respuesta y deja poca informaci\u00F3n \u00FAtil.",
              code: "\u00BFQued\u00F3 satisfecho con la prueba?"
            },
            {
              title: "Pregunta vaga",
              description: "No entrega contexto suficiente para interpretar la respuesta.",
              code: "\u00BFLe funciona la herramienta?"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        }
      ],
      relatedIds: ["structured-problem-solving", "data-analysis-phases-and-tools"]
    },
    {
      id: "qualitative-quantitative-and-data-scale",
      slug: "datos-cualitativos-cuantitativos-y-escala-de-datos",
      title: "Datos cualitativos, cuantitativos y escala de datos",
      summary: "No todos los datos responden lo mismo. Esta nota ayuda a distinguir entre datos cualitativos y cuantitativos, y a entender cómo cambia el análisis cuando se trabaja con microdatos o big data.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "initial",
      readingTime: "9 min",
      updatedAt: "2026-08-02",
      tags: ["Fundamentos", "Cualitativo", "Cuantitativo", "Big data"],
      featured: true,
      contentSections: [
        {
          title: "La idea central",
          body: "En an\u00E1lisis de datos no basta con tener informaci\u00F3n: tambi\u00E9n importa entender qu\u00E9 clase de dato tengo entre manos. Los datos cuantitativos suelen mostrar el qu\u00E9 est\u00E1 pasando; los cualitativos ayudan mucho m\u00E1s a entender el por qu\u00E9."
        },
        {
          title: "Cualitativos vs cuantitativos",
          body: "La diferencia m\u00E1s \u00FAtil para recordar es que uno mide y el otro explica. Ambos sirven, pero no para lo mismo.",
          comparisonTable: {
            columns: ["Datos cualitativos", "Datos cuantitativos"],
            rows: [
              [
                "Describen percepciones, opiniones, motivos o experiencias.",
                "Describen cantidades, frecuencias, porcentajes o variaciones medibles."
              ],
              [
                "Ayudan a entender el contexto y la raz\u00F3n detr\u00E1s de un comportamiento.",
                "Ayudan a medir qu\u00E9 tan grande, frecuente o rentable es algo."
              ],
              [
                "Suelen aparecer en entrevistas, respuestas abiertas, focus groups o comentarios.",
                "Suelen aparecer en encuestas estructuradas, ventas, asistencia, m\u00E1rgenes o tasas."
              ],
              [
                "Ejemplo casual: \"Voy a ese cine porque las butacas son m\u00E1s c\u00F3modas\".",
                "Ejemplo casual: \"La funci\u00F3n de las 19:30 promedia 1.600 asistentes en meses de vacaciones\"."
              ],
              [
                "Convienen cuando necesito comprender motivaciones o preferencias.",
                "Convienen cuando necesito comparar, monitorear o detectar cambios."
              ]
            ]
          }
        },
        {
          title: "Cu\u00E1ndo usar cada uno",
          body: "En la pr\u00E1ctica, lo m\u00E1s \u00FAtil casi nunca es elegir solo uno. Muchas veces parto viendo m\u00E9tricas para detectar un cambio, y despu\u00E9s uso preguntas abiertas para entender qu\u00E9 lo explica.",
          bestPractices: [
            "Usar datos cuantitativos para medir asistencia, ventas, rentabilidad o conversiones.",
            "Usar datos cualitativos para entender opiniones, fricciones, gustos o sensibilidad al precio.",
            "Combinar ambos cuando necesito pasar de la observaci\u00F3n a una recomendaci\u00F3n m\u00E1s s\u00F3lida."
          ]
        },
        {
          title: "Ejemplo casual para aterrizarlo",
          body: "Si analizo un cine, los datos cuantitativos me pueden mostrar que la funci\u00F3n nocturna de las 19:30 es la m\u00E1s concurrida y que el puesto de comida tiene un margen menor al 5%. Pero si quiero entender por qu\u00E9 la gente prefiere ese horario o qu\u00E9 opina del valor de la comida, necesito preguntas cualitativas dentro de una encuesta o entrevista.",
          example: "Cuantitativo: asistencia promedio, compras menores a 20 d\u00F3lares, margen bajo. | Cualitativo: \"prefiero ese horario porque alcanzo a salir del trabajo\" o \"la comida es cara para lo que ofrece\"."
        },
        {
          title: "Microdatos vs big data",
          body: "Adem\u00E1s del tipo de dato, tambi\u00E9n cambia mucho el contexto seg\u00FAn la escala del conjunto que estoy analizando.",
          comparisonTable: {
            columns: ["Microdatos", "Big data"],
            rows: [
              [
                "Suelen ser m\u00E9tricas espec\u00EDficas en un per\u00EDodo corto y bien definido.",
                "Suelen ser conjuntos grandes, menos espec\u00EDficos y extendidos en el tiempo."
              ],
              [
                "Muchas veces se organizan y analizan en hojas de c\u00E1lculo.",
                "Normalmente se almacenan en bases de datos y se consultan con otras herramientas."
              ],
              [
                "Son frecuentes en equipos peque\u00F1os o empresas medianas.",
                "Aparecen mucho m\u00E1s en organizaciones grandes o ecosistemas digitales amplios."
              ],
              [
                "Suelen ser m\u00E1s f\u00E1ciles de recopilar, ordenar y visualizar.",
                "Requieren mucho m\u00E1s esfuerzo para recopilar, gestionar, clasificar y representar."
              ],
              [
                "Generalmente ya tienen un tama\u00F1o manejable para analizar.",
                "Muchas veces hay que dividirlos o resumirlos para volverlos \u00FAtiles para decisiones."
              ]
            ]
          }
        },
        {
          title: "Impacto real del big data",
          body: "El big data puede ser muy poderoso porque permite detectar tendencias, patrones de compra, cambios de satisfacci\u00F3n y condiciones de mercado con mucha m\u00E1s profundidad. Pero tambi\u00E9n trae ruido, sobrecarga de informaci\u00F3n, problemas de acceso, complejidad t\u00E9cnica y riesgos de calidad.",
          commandGroups: [
            {
              title: "Beneficio",
              description: "Permite descubrir tendencias, optimizar procesos y crear productos con mejor ajuste al mercado.",
              code: "Ejemplo: detectar patrones de compra y ajustar una estrategia comercial."
            },
            {
              title: "Reto",
              description: "Puede esconder la informaci\u00F3n valiosa entre demasiado dato irrelevante.",
              code: "Ejemplo: tener millones de registros, pero tardar demasiado en encontrar se\u00F1ales realmente \u00FAtiles."
            }
          ]
        },
        {
          title: "Las 4V para recordar el big data",
          body: "Una forma simple de resumir los desaf\u00EDos del big data es pensar en las 4V: volumen, variedad, velocidad y veracidad.",
          comparisonTable: {
            columns: ["Volumen", "Variedad", "Velocidad", "Veracidad"],
            rows: [
              [
                "La cantidad de datos.",
                "Los diferentes tipos de datos.",
                "La rapidez con que se pueden procesar los datos.",
                "La calidad y confiabilidad de los datos."
              ]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Si quiero medir, comparar o monitorear, probablemente necesito cuantitativo. Si quiero entender razones, percepciones o motivaciones, probablemente necesito cualitativo. Y si adem\u00E1s cambia mucho la escala del problema, tambi\u00E9n cambia la herramienta, la complejidad y la forma de interpretar lo que encuentro."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        }
      ],
      relatedIds: ["choose-the-right-tool", "common-problem-types-and-smart-questions"]
    },
    {
      id: "data-collection-and-structure-guide",
      slug: "como-seleccionar-y-estructurar-los-datos-correctos",
      title: "C\u00F3mo seleccionar, recopilar y estructurar los datos correctos",
      summary: "Una gu\u00EDa para elegir qu\u00E9 datos conviene usar, de d\u00F3nde salen y c\u00F3mo cambia el an\u00E1lisis seg\u00FAn si los datos son estructurados o no estructurados.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Recopilaci\u00F3n", "Fuentes", "Datos estructurados", "Fundamentos"],
      featured: true,
      contentSections: [
        {
          title: "Idea central",
          body: "Antes de analizar, conviene resolver dos preguntas: qu\u00E9 datos necesito realmente y en qu\u00E9 formato est\u00E1n. Si elijo mal la fuente o el tipo de dato, puedo terminar respondiendo otra cosa, demorando m\u00E1s de la cuenta o apoy\u00E1ndome en informaci\u00F3n poco \u00FAtil para el problema."
        },
        {
          title: "Qu\u00E9 revisar antes de recopilar datos",
          body: "Cuando pienso en recopilaci\u00F3n, me sirve pasar por una lista corta: c\u00F3mo se obtendr\u00E1n los datos, si vienen de mis propios recursos o de terceros, si realmente responden el problema de negocio, cu\u00E1ntos necesito y cu\u00E1l es el marco temporal disponible.",
          highlights: [
            {
              icon: "fa-solid fa-layer-group",
              title: "Elegir el tipo de dato correcto",
              text: "No todos los conjuntos sirven para todas las preguntas: si quiero tendencias, necesito datos con tiempo; si quiero comportamiento, necesito datos que capturen ese contexto."
            },
            {
              icon: "fa-regular fa-clock",
              title: "Definir el marco temporal",
              text: "Si necesito una respuesta inmediata, puede que tenga que trabajar con datos hist\u00F3ricos en vez de esperar recolecci\u00F3n nueva."
            },
            {
              icon: "fa-solid fa-database",
              title: "Decidir c\u00F3mo se recopilar\u00E1n",
              text: "Puedo usar datos de primera fuente, comprar o recibir datos de otras fuentes, o mezclar varias seg\u00FAn el caso."
            },
            {
              icon: "fa-solid fa-filter-circle-check",
              title: "Definir cu\u00E1ntos datos usar",
              text: "A veces basta una muestra aleatoria razonable; otras veces conviene una selecci\u00F3n m\u00E1s estrat\u00E9gica seg\u00FAn el objetivo."
            }
          ],
          example: "Elegir tipo de dato \u2192 definir tiempo disponible \u2192 decidir si recolecto nuevo o uso existente \u2192 validar fuente \u2192 definir volumen de datos"
        },
        {
          title: "Fuentes de datos: primera, segúnda y tercera parte",
          body: "La diferencia principal est\u00E1 en qui\u00E9n recopil\u00F3 originalmente la informaci\u00F3n. Si la obtengo con mis propios recursos, hablo de datos de primera fuente. Si los recopil\u00F3 otro grupo y luego me los vende o comparte, ya estoy entrando en datos de segúnda o tercera parte.",
          comparisonTable: {
            columns: ["Clasificaci\u00F3n", "Definici\u00F3n", "Ejemplos"],
            rows: [
              [
                "Datos primarios",
                "Recogidos directamente por quien investiga o por la propia organizaci\u00F3n.",
                "Entrevistas, encuestas propias, formularios internos o levantamiento directo con clientes."
              ],
              [
                "Datos secundarios / de segúnda parte",
                "Recogidos por otro grupo y luego compartidos, vendidos o reutilizados.",
                "Datos demogr\u00E1ficos de una universidad, perfiles de clientes de otra empresa o reportes sectoriales."
              ],
              [
                "Datos de tercera parte",
                "Distribuidos por un proveedor que no necesariamente los recopil\u00F3 por s\u00ED mismo.",
                "Paquetes de datos agregados desde varias fuentes comerciales o plataformas de datos."
              ]
            ]
          }
        },
        {
          title: "Datos internos y externos",
          body: "Otra forma \u00FAtil de pensar las fuentes es distinguir si los datos nacen dentro del sistema de una organizaci\u00F3n o si vienen desde fuera. Esa diferencia importa porque cambia el nivel de control, el contexto y la facilidad para interpretar lo que estoy viendo.",
          comparisonTable: {
            columns: ["Clasificaci\u00F3n", "Definici\u00F3n", "Ejemplos"],
            rows: [
              [
                "Datos internos",
                "Se almacenan dentro de los propios sistemas de una empresa u organizaci\u00F3n.",
                "Ventas por sucursal, inventario, registros de RRHH, historial de transacciones."
              ],
              [
                "Datos externos",
                "Se almacenan fuera de la organizaci\u00F3n y se incorporan para complementar contexto.",
                "Informes de cr\u00E9dito, salarios de mercado, datos censales e indicadores econ\u00F3micos."
              ]
            ]
          }
        },
        {
          title: "Datos estructurados frente a no estructurados",
          body: "Los datos estructurados vienen ordenados en un formato f\u00E1cil de identificar, normalmente filas y columnas. Los no estructurados no siguen ese patr\u00F3n tan claro y suelen dar m\u00E1s libertad, pero tambi\u00E9n m\u00E1s dificultad para buscar, gestionar y analizar.",
          comparisonTable: {
            columns: ["Tipo", "Caracter\u00EDsticas", "Ejemplos"],
            rows: [
              [
                "Estructurados",
                "Tienen tipos de dato definidos, suelen ser cuantitativos, son f\u00E1ciles de organizar, buscar y analizar, y suelen vivir en tablas o bases relacionales.",
                "Excel, Google Sheets, SQL, datos de clientes, registros telef\u00F3nicos, historial transaccional."
              ],
              [
                "No estructurados",
                "Tienen formatos variados, suelen ser cualitativos, son m\u00E1s dif\u00EDciles de buscar y ordenar, pero pueden aportar m\u00E1s libertad anal\u00EDtica.",
                "Mensajes, comentarios de redes sociales, transcripciones, logs, im\u00E1genes, audio, video, PDFs y p\u00E1ginas web."
              ]
            ]
          }
        },
        {
          title: "Por qu\u00E9 esta diferencia importa en la pr\u00E1ctica",
          body: "Si exporto datos estructurados, la estructura suele viajar con ellos. En cambio, los datos no estructurados exigen m\u00E1s interpretaci\u00F3n y herramientas m\u00E1s sofisticadas para volverse analizables. Por eso hoy muchas soluciones usan IA o aprendizaje autom\u00E1tico para clasificar texto, imagen o audio que antes era m\u00E1s dif\u00EDcil de trabajar.",
          bestPractices: [
            "No elegir una fuente solo porque tiene muchos datos: elegirla porque responde la pregunta.",
            "Si el tiempo apremia, priorizar datos hist\u00F3ricos confiables antes que esperar una recolecci\u00F3n larga.",
            "Distinguir si necesito estructura para buscar r\u00E1pido o flexibilidad para explorar mejor.",
            "Validar si la fuente introduce sesgos, vac\u00EDos o representaciones injustas del problema."
          ]
        },
        {
          title: "El problema de la equidad",
          body: "Cuando los datos no representan bien a la poblaci\u00F3n o ciertos grupos quedan subrepresentados, el an\u00E1lisis se vuelve menos confiable. Esto se vuelve especialmente delicado cuando uso IA o modelos para procesar datos no estructurados, porque un sesgo en la fuente puede terminar en resultados injustos o poco precisos."
        },
        {
          title: "Para recordar",
          body: "Lo importante no es acumular datos, sino elegir los correctos. Primero decido si necesito recolectar o reutilizar, luego reviso la fuente, el tiempo, el volumen y la estructura. Reci\u00E9n con eso tiene sentido pensar en la herramienta o en el an\u00E1lisis que har\u00E9 despu\u00E9s."
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Foundations: Data, Data, Everywhere</em>. Coursera. https://www.coursera.org/learn/foundations-data",
          url: "https://www.coursera.org/learn/foundations-data"
        }
      ],
      relatedIds: ["structured-problem-solving", "qualitative-quantitative-and-data-scale", "choose-the-right-tool"]
    },
    {
      id: "excel-shortcuts-guide",
      slug: "atajos-de-excel-para-analisis",
      title: "Atajos de Excel para an\u00E1lisis",
      summary: "Una gu\u00EDa r\u00E1pida con atajos de Excel que sirven para navegar mejor, editar m\u00E1s r\u00E1pido y trabajar datos sin depender tanto del mouse.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "8 min",
      updatedAt: "2026-08-02",
      tags: ["Excel", "Atajos", "Productividad"],
      featured: true,
      contentSections: [
        {
          title: "Para qu\u00E9 me sirve esta gu\u00EDa",
          body: "Estos atajos me sirven para trabajar m\u00E1s r\u00E1pido en Excel cuando estoy limpiando datos, revisando tablas, formateando celdas o movi\u00E9ndome por hojas grandes. La idea no es memorizar todo de una vez, sino tener una base pr\u00E1ctica a mano."
        },
        {
          title: "Atajos m\u00E1s usados",
          body: "Si tuviera que empezar por un grupo chico de atajos, partir\u00EDa por estos porque aparecen casi siempre.",
          commandGroups: [
            {
              title: "Guardar",
              description: "Guardar el archivo actual.",
              code: "Ctrl + S"
            },
            {
              title: "Copiar, cortar y pegar",
              description: "Lo m\u00EDnimo para mover datos de forma r\u00E1pida.",
              code: "Ctrl + C | Ctrl + X | Ctrl + V"
            },
            {
              title: "Deshacer",
              description: "Volver atr\u00E1s si hice un cambio no deseado.",
              code: "Ctrl + Z"
            },
            {
              title: "Negrita",
              description: "Muy \u00FAtil para encabezados o destacar resultados.",
              code: "Ctrl + B"
            }
          ]
        },
        {
          title: "Navegaci\u00F3n y selecci\u00F3n",
          body: "Cuando la hoja ya est\u00E1 grande, estos atajos ayudan mucho m\u00E1s que desplazarse celda por celda.",
          commandGroups: [
            {
              title: "Moverse al borde de una regi\u00F3n de datos",
              description: "Salta al l\u00EDmite del bloque de datos actual.",
              code: "Ctrl + Flecha"
            },
            {
              title: "Ir al inicio de la hoja",
              description: "Lleva al primer punto \u00FAtil de la planilla.",
              code: "Ctrl + Home"
            },
            {
              title: "Ir a la \u00FAltima celda usada",
              description: "Ayuda a detectar hasta d\u00F3nde llega realmente el contenido.",
              code: "Ctrl + End"
            },
            {
              title: "Seleccionar hasta el borde",
              description: "Extiende la selecci\u00F3n sin perder continuidad.",
              code: "Ctrl + Shift + Flecha"
            }
          ]
        },
        {
          title: "Formato y estructura",
          body: "Estos atajos son pr\u00E1cticos cuando quiero dejar una tabla m\u00E1s ordenada o legible.",
          commandGroups: [
            {
              title: "Ocultar filas",
              description: "Sirve para esconder apoyo temporal sin borrar datos.",
              code: "Ctrl + 9"
            },
            {
              title: "Ocultar columnas",
              description: "Muy \u00FAtil cuando hay muchas columnas auxiliares.",
              code: "Ctrl + 0"
            },
            {
              title: "Abrir pesta\u00F1a Inicio",
              description: "Permite usar comandos del ribbon desde teclado.",
              code: "Alt + H"
            },
            {
              title: "Centrar contenido",
              description: "Alinea visualmente encabezados o t\u00EDtulos.",
              code: "Alt + H, A, C"
            }
          ]
        },
        {
          title: "B\u00FAsqueda y trabajo con datos",
          body: "En tareas m\u00E1s anal\u00EDticas, estos atajos ayudan mucho a revisar contenido y moverse por comandos de datos.",
          commandGroups: [
            {
              title: "Buscar",
              description: "Permite localizar texto o valores dentro de la hoja.",
              code: "Ctrl + F"
            },
            {
              title: "Pesta\u00F1a Datos",
              description: "Abre r\u00E1pido el men\u00FA de ordenar, filtrar o conectarse a datos.",
              code: "Alt + A"
            },
            {
              title: "Pesta\u00F1a F\u00F3rmulas",
              description: "Acerca las funciones y herramientas de auditor\u00EDa.",
              code: "Alt + M"
            },
            {
              title: "Expandir o contraer ribbon",
              description: "Deja m\u00E1s espacio libre en pantalla cuando lo necesito.",
              code: "Ctrl + F1"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "No necesito aprender todos los atajos de una vez. Lo m\u00E1s rentable es partir por los que se repiten en limpieza, revisi\u00F3n y formato, y luego sumar otros cuando el trabajo lo pida.",
          resourceLinks: [
            {
              label: "Atajos oficiales de Excel - Microsoft Support",
              url: "https://support.microsoft.com/en-US/Accessibility/excel/keyboard-shortcuts-in-excel"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Microsoft Support. (s. f.). <em>Keyboard shortcuts in Excel</em>. https://support.microsoft.com/en-US/Accessibility/excel/keyboard-shortcuts-in-excel",
          url: "https://support.microsoft.com/en-US/Accessibility/excel/keyboard-shortcuts-in-excel"
        }
      ],
      relatedIds: ["choose-the-right-tool", "qualitative-quantitative-and-data-scale"]
    },
    {
      id: "google-sheets-shortcuts-guide",
      slug: "atajos-de-google-sheets-para-analisis",
      title: "Atajos de Google Sheets para an\u00E1lisis",
      summary: "Una referencia pr\u00E1ctica con atajos de Google Sheets para navegar, editar y formatear hojas de c\u00E1lculo m\u00E1s r\u00E1pido dentro del trabajo diario.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "8 min",
      updatedAt: "2026-08-02",
      tags: ["Google Sheets", "Atajos", "Productividad"],
      featured: true,
      contentSections: [
        {
          title: "Para qu\u00E9 me sirve esta gu\u00EDa",
          body: "Google Sheets tiene varios atajos parecidos a Excel, pero tambi\u00E9n otros muy \u00FAtiles para trabajo colaborativo, men\u00FAs y tareas r\u00E1pidas en navegador. Esta nota est\u00E1 pensada para tener a mano los que m\u00E1s sirven en an\u00E1lisis."
        },
        {
          title: "Atajos m\u00E1s usados",
          body: "Si quiero empezar por lo esencial, partir\u00EDa por este grupo.",
          commandGroups: [
            {
              title: "Buscar",
              description: "Encuentra texto o valores dentro de la hoja.",
              code: "Ctrl + F"
            },
            {
              title: "Buscar y reemplazar",
              description: "Muy \u00FAtil en limpiezas r\u00E1pidas.",
              code: "Ctrl + H"
            },
            {
              title: "Pegar solo valores",
              description: "Pega contenido sin arrastrar formatos o f\u00F3rmulas.",
              code: "Ctrl + Shift + V"
            },
            {
              title: "Mostrar lista de atajos",
              description: "Abre el panel oficial de combinaciones desde la hoja.",
              code: "Ctrl + /"
            }
          ]
        },
        {
          title: "Navegaci\u00F3n y selecci\u00F3n",
          body: "Estos ayudan mucho cuando la hoja crece y necesito moverme sin perder tiempo.",
          commandGroups: [
            {
              title: "Seleccionar columna",
              description: "Selecciona toda la columna activa.",
              code: "Ctrl + Espacio"
            },
            {
              title: "Seleccionar fila",
              description: "Selecciona toda la fila activa.",
              code: "Shift + Espacio"
            },
            {
              title: "Ir al inicio de la hoja",
              description: "Salta al inicio del contenido.",
              code: "Ctrl + Home"
            },
            {
              title: "Ir al final de la hoja",
              description: "Ayuda a revisar hasta d\u00F3nde llega la planilla.",
              code: "Ctrl + End"
            }
          ]
        },
        {
          title: "Formato y edici\u00F3n",
          body: "Muy pr\u00E1cticos para dejar m\u00E1s prolija la hoja sin abrir tanto men\u00FA.",
          commandGroups: [
            {
              title: "Negrita, cursiva y subrayado",
              description: "Sirven para encabezados o resaltar bloques importantes.",
              code: "Ctrl + B | Ctrl + I | Ctrl + U"
            },
            {
              title: "Borrar formato",
              description: "Limpia estilos sin borrar contenido.",
              code: "Ctrl + \\"
            },
            {
              title: "Formato de fecha",
              description: "Aplica r\u00E1pido un formato de fecha.",
              code: "Ctrl + Shift + 3"
            },
            {
              title: "Formato de moneda",
              description: "Muy \u00FAtil cuando reviso ventas o presupuestos.",
              code: "Ctrl + Shift + 4"
            }
          ]
        },
        {
          title: "Relleno y productividad",
          body: "Estos aparecen mucho cuando estoy trabajando datos repetitivos o estructurando rangos.",
          commandGroups: [
            {
              title: "Rellenar hacia abajo",
              description: "Replica el contenido o la f\u00F3rmula hacia abajo.",
              code: "Ctrl + D"
            },
            {
              title: "Rellenar hacia la derecha",
              description: "Replica contenido o f\u00F3rmulas horizontalmente.",
              code: "Ctrl + R"
            },
            {
              title: "Rellenar un intervalo",
              description: "Aplica una entrada a todas las celdas seleccionadas.",
              code: "Ctrl + Enter"
            },
            {
              title: "Buscador de herramientas",
              description: "Sirve para encontrar comandos desde teclado.",
              code: "Alt + /"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "En Sheets me conviene aprovechar mucho los atajos de b\u00FAsqueda, pegado especial, relleno y formato porque son los que m\u00E1s r\u00E1pido devuelven tiempo en el trabajo diario.",
          resourceLinks: [
            {
              label: "Atajos oficiales de Google Sheets - Google Docs Editors Help",
              url: "https://support.google.com/docs/answer/181110?co=GENIE.Platform%3DDesktop&hl=es"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Docs Editors Help. (s. f.). <em>Combinaciones de teclas de Hojas de c\u00E1lculo de Google</em>. https://support.google.com/docs/answer/181110?co=GENIE.Platform%3DDesktop&hl=es",
          url: "https://support.google.com/docs/answer/181110?co=GENIE.Platform%3DDesktop&hl=es"
        }
      ],
      relatedIds: ["excel-shortcuts-guide", "choose-the-right-tool"]
    },
    {
      id: "spreadsheet-functions-definitive-guide",
      slug: "guia-definitiva-de-funciones-en-hojas-de-calculo",
      title: "Gu\u00EDa definitiva de funciones en hojas de c\u00E1lculo",
      summary: "Una nota comparativa para recordar objetivos frecuentes, funci\u00F3n en Google Sheets, funci\u00F3n en Excel y ejemplos pr\u00E1cticos al trabajar con datos.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "intermediate",
      readingTime: "10 min",
      updatedAt: "2026-08-02",
      tags: ["Excel", "Google Sheets", "Funciones", "F\u00F3rmulas"],
      featured: true,
      contentSections: [
        {
          title: "C\u00F3mo leer esta gu\u00EDa",
          body: "La gracia de esta nota es no pensar en funciones aisladas, sino en objetivos. Si quiero sumar, buscar, filtrar o evaluar condiciones, aqu\u00ED puedo mirar qu\u00E9 funci\u00F3n usar en Sheets y qu\u00E9 equivalente me sirve en Excel. En esta versi\u00F3n dej\u00E9 los nombres en espa\u00F1ol; si la app est\u00E1 configurada en ingl\u00E9s, ver\u00E1s variantes como `IF`, `COUNTIF` o `VLOOKUP`."
        },
        {
          title: "Antes de entrar a las funciones",
          body: "Hay tres ideas que siempre conviene recordar: toda f\u00F3rmula empieza con `=`, los rangos como `A2:A10` ayudan a trabajar bloques completos y las referencias relativas, absolutas y mixtas cambian mucho c\u00F3mo se comporta una f\u00F3rmula al copiarla.",
          bestPractices: [
            "Usar `=` para indicar que estoy escribiendo una f\u00F3rmula o funci\u00F3n.",
            "Apoyarme en el autocompletado para reducir errores de sintaxis.",
            "Usar `F4` cuando necesite fijar referencias con signos `$`.",
            "Aprovechar el controlador de relleno para replicar funciones r\u00E1pido."
          ]
        },
        {
          title: "Funciones base que m\u00E1s se repiten",
          body: "Este primer bloque cubre las funciones que aparecen casi siempre en una limpieza o an\u00E1lisis exploratorio.",
          comparisonTable: {
            columns: ["Objetivo", "Google Sheets", "Excel", "Ejemplo pr\u00E1ctico"],
            rows: [
              ["Sumar un rango", "=SUMA(B2:E2)", "=SUMA(B2:E2)", "Calcular ventas totales de un periodo."],
              ["Sacar promedio", "=PROMEDIO(B2:E2)", "=PROMEDIO(B2:E2)", "Obtener venta media mensual."],
              ["Encontrar m\u00EDnimo", "=MIN(B2:E4)", "=MIN(B2:E4)", "Detectar la venta m\u00E1s baja del periodo."],
              ["Encontrar m\u00E1ximo", "=MAX(B2:E4)", "=MAX(B2:E4)", "Detectar la venta m\u00E1s alta."],
              ["Contar valores num\u00E9ricos", "=CONTAR(B2:B100)", "=CONTAR(B2:B100)", "Saber cu\u00E1ntos registros tienen n\u00FAmero."],
              ["Contar celdas no vac\u00EDas", "=CONTARA(B2:B100)", "=CONTARA(B2:B100)", "Revisar cu\u00E1ntos registros tienen contenido."]
            ]
          }
        },
        {
          title: "Funciones con condiciones",
          body: "Cuando necesito contar, sumar o promediar seg\u00FAn un criterio, estas son de las m\u00E1s \u00FAtiles. Si solo tengo una condici\u00F3n, normalmente basta con `CONTAR.SI`, `SUMAR.SI` o `PROMEDIO.SI`. Pero si el an\u00E1lisis pide m\u00E1s precisi\u00F3n, conviene pasar a sus versiones con m\u00FAltiples criterios.",
          comparisonTable: {
            columns: ["Objetivo", "Google Sheets", "Excel", "Ejemplo pr\u00E1ctico"],
            rows: [
              ["Contar con un criterio", "=CONTAR.SI(A:A,\"Aprobado\")", "=CONTAR.SI(A:A,\"Aprobado\")", "Contar cu\u00E1ntos casos quedaron aprobados."],
              ["Sumar con un criterio", "=SUMAR.SI(A:A,\"Retail\",B:B)", "=SUMAR.SI(A:A,\"Retail\",B:B)", "Sumar ventas solo del canal retail."],
              ["Promediar con un criterio", "=PROMEDIO.SI(A:A,\"Norte\",B:B)", "=PROMEDIO.SI(A:A,\"Norte\",B:B)", "Sacar ticket promedio de una zona."],
              ["Contar con varios criterios", "=CONTAR.SI.CONJUNTO(A:A,\"Norte\",B:B,\">100\")", "=CONTAR.SI.CONJUNTO(A:A,\"Norte\",B:B,\">100\")", "Contar ventas del Norte mayores a 100."],
              ["Sumar con varios criterios", "=SUMAR.SI.CONJUNTO(C:C,A:A,\"Norte\",B:B,\"Retail\")", "=SUMAR.SI.CONJUNTO(C:C,A:A,\"Norte\",B:B,\"Retail\")", "Sumar ingresos de una zona y canal espec\u00EDficos."]
            ]
          }
        },
        {
          title: "C\u00F3mo pensar el salto de una condici\u00F3n a varias",
          body: "La l\u00F3gica es simple: `SUMAR.SI` y `CONTAR.SI` resuelven una sola condici\u00F3n. En cambio, `SUMAR.SI.CONJUNTO` y `CONTAR.SI.CONJUNTO` sirven cuando quiero exigir que dos o m\u00E1s reglas se cumplan al mismo tiempo. Eso permite construir an\u00E1lisis mucho m\u00E1s finos sin depender de filtros manuales.",
          comparisonTable: {
            columns: ["Si necesito...", "Funci\u00F3n m\u00E1s natural", "Ejemplo"],
            rows: [
              ["Sumar una sola categor\u00EDa", "`SUMAR.SI`", "=SUMAR.SI(A:A,\"ProductA\",D:D)"],
              ["Sumar por producto, regi\u00F3n y trimestre", "`SUMAR.SI.CONJUNTO`", "=SUMAR.SI.CONJUNTO(D:D,A:A,\"ProductA\",B:B,\"East\",C:C,\"Q1\")"],
              ["Contar una sola categor\u00EDa", "`CONTAR.SI`", "=CONTAR.SI(A:A,\"ProductA\")"],
              ["Contar por varias reglas simult\u00E1neas", "`CONTAR.SI.CONJUNTO`", "=CONTAR.SI.CONJUNTO(A:A,\"ProductA\",B:B,\"East\",C:C,\"Q1\")"]
            ]
          }
        },
        {
          title: "Ejemplos pr\u00E1cticos con m\u00FAltiples condiciones",
          body: "Este tipo de f\u00F3rmulas sirve mucho cuando trabajo con ventas, asistencia, campa\u00F1as o control operativo, porque permite cruzar m\u00E1s de una dimensi\u00F3n a la vez sin tener que filtrar manualmente.",
          commandGroups: [
            {
              title: "SUMAR.SI.CONJUNTO para ventas espec\u00EDficas",
              description: "Suma ventas de un producto concreto en una regi\u00F3n y trimestre definidos.",
              code: "=SUMAR.SI.CONJUNTO(D2:D8,A2:A8,\"ProductA\",B2:B8,\"East\",C2:C8,\"Q1\")"
            },
            {
              title: "CONTAR.SI.CONJUNTO para contar transacciones",
              description: "Cuenta cu\u00E1ntas filas cumplen simult\u00E1neamente con producto, regi\u00F3n y periodo.",
              code: "=CONTAR.SI.CONJUNTO(A2:A8,\"ProductA\",B2:B8,\"East\",C2:C8,\"Q1\")"
            },
            {
              title: "SI.CONJUNTO para segmentar niveles",
              description: "Clasifica un resultado seg\u00FAn varios rangos o tramos.",
              code: "=SI.CONJUNTO(B2>=90,\"Alto\",B2>=70,\"Medio\",VERDADERO,\"Bajo\")"
            },
            {
              title: "SI con Y / O / NO",
              description: "Sirve cuando la decisi\u00F3n depende de combinar varias condiciones l\u00F3gicas.",
              code: "=SI(Y(B2>0,C2=\"Activo\"),\"V\u00E1lido\",\"Revisar\")"
            }
          ]
        },
        {
          title: "B\u00FAsquedas y cruces de datos",
          body: "Este bloque es clave cuando tengo cat\u00E1logos, cruces con IDs o necesito traer valores desde otra tabla.",
          comparisonTable: {
            columns: ["Objetivo", "Google Sheets", "Excel", "Ejemplo pr\u00E1ctico"],
            rows: [
              ["Buscar verticalmente", "=BUSCARV(E2,A:B,2,FALSO)", "=BUSCARV(E2,A:B,2,FALSO)", "Traer el nombre de un producto seg\u00FAn su c\u00F3digo."],
              ["Buscar horizontalmente", "=BUSCARH(B1,A1:G2,2,FALSO)", "=BUSCARH(B1,A1:G2,2,FALSO)", "Traer un valor desde una tabla organizada por columnas."],
              ["B\u00FAsqueda m\u00E1s flexible", "=BUSCARX(E2,A:A,B:B,\"No encontrado\")", "=BUSCARX(E2,A:A,B:B,\"No encontrado\")", "Buscar un cliente por ID sin depender del n\u00FAmero de columna."],
              ["Cruzar con \u00EDndice y coincidencia", "=INDICE(B:B,COINCIDIR(E2,A:A,0))", "=INDICE(B:B,COINCIDIR(E2,A:A,0))", "Recuperar un valor cuando quiero m\u00E1s control que con BUSCARV."],
              ["Filtrar coincidencias", "=FILTRAR(A:C,B:B=\"Retail\")", "=FILTRAR(A:C,B:B=\"Retail\")", "Mostrar solo filas del canal retail."]
            ]
          }
        },
        {
          title: "Texto, limpieza y orden",
          body: "Estas funciones ayudan mucho cuando el problema no es calcular, sino dejar los datos utilizables.",
          comparisonTable: {
            columns: ["Objetivo", "Google Sheets", "Excel", "Ejemplo pr\u00E1ctico"],
            rows: [
              ["Unir texto", "=CONCAT(A2,\" \",B2)", "=CONCAT(A2,\" \",B2)", "Crear nombre completo a partir de nombre y apellido."],
              ["Unir varios textos", "=UNIRTEXTOS(\", \",VERDADERO,A2:C2)", "=UNIRTEXTOS(\", \",VERDADERO,A2:C2)", "Combinar varias etiquetas en una sola celda."],
              ["Eliminar espacios sobrantes", "=ESPACIOS(A2)", "=ESPACIOS(A2)", "Limpiar nombres importados con espacios extra."],
              ["Cambiar a may\u00FAsculas", "=MAYUSC(A2)", "=MAYUSC(A2)", "Estandarizar c\u00F3digos o categor\u00EDas."],
              ["Cambiar a min\u00FAsculas", "=MINUSC(A2)", "=MINUSC(A2)", "Normalizar correos o textos."],
              ["Capitalizar", "=NOMPROPIO(A2)", "=NOMPROPIO(A2)", "Dejar nombres propios mejor presentados."]
            ]
          }
        },
        {
          title: "L\u00F3gica y manejo de errores",
          body: "Cuando quiero clasificar resultados o controlar mensajes feos de error, estas funciones ayudan mucho.",
          comparisonTable: {
            columns: ["Objetivo", "Google Sheets", "Excel", "Ejemplo pr\u00E1ctico"],
            rows: [
              ["Evaluar una condici\u00F3n", "=SI(B2>=60,\"Aprueba\",\"Revisar\")", "=SI(B2>=60,\"Aprueba\",\"Revisar\")", "Clasificar si una meta fue cumplida."],
              ["Varias condiciones anidadas", "=SI.CONJUNTO(B2>=90,\"Alto\",B2>=70,\"Medio\",VERDADERO,\"Bajo\")", "=SI.CONJUNTO(B2>=90,\"Alto\",B2>=70,\"Medio\",VERDADERO,\"Bajo\")", "Segmentar desempe\u00F1o en niveles."],
              ["Y l\u00F3gico", "=Y(B2>0,C2=\"Activo\")", "=Y(B2>0,C2=\"Activo\")", "Validar si dos condiciones se cumplen juntas."],
              ["O l\u00F3gico", "=O(B2=\"Retail\",B2=\"Mayorista\")", "=O(B2=\"Retail\",B2=\"Mayorista\")", "Validar si un registro pertenece a uno de dos grupos."],
              ["Capturar errores", "=SI.ERROR(BUSCARV(E2,A:B,2,FALSO),\"No encontrado\")", "=SI.ERROR(BUSCARV(E2,A:B,2,FALSO),\"No encontrado\")", "Evitar que un cruce roto muestre `#N/A`."]
            ]
          }
        },
        {
          title: "Cu\u00E1ndo usar SI.CONJUNTO, Y, O y NO",
          body: "No todo se resuelve con sumar o contar. A veces necesito clasificar, validar o devolver mensajes distintos seg\u00FAn varias reglas. Ah\u00ED entran `SI.CONJUNTO` o la combinaci\u00F3n de `SI` con `Y`, `O` y `NO`.",
          bestPractices: [
            "Usar `SI.CONJUNTO` cuando tengo varios escenarios mutuamente excluyentes.",
            "Usar `Y` cuando todas las condiciones deben cumplirse al mismo tiempo.",
            "Usar `O` cuando basta con una de varias opciones.",
            "Usar `NO` cuando necesito excluir una condici\u00F3n espec\u00EDfica.",
            "Combinar con `SI.ERROR` si la f\u00F3rmula depende de b\u00FAsquedas o cruces que podr\u00EDan fallar."
          ]
        },
        {
          title: "Una mini ruta para empezar",
          body: "Si alguien parte desde cero, yo aprender\u00EDa en este orden: SUMA, PROMEDIO, MIN, MAX; luego CONTAR.SI y SUMAR.SI; despu\u00E9s SI y SI.ERROR; y reci\u00E9n despu\u00E9s BUSCARV, BUSCARX, INDICE+COINCIDIR y FILTRAR. Ese orden da mucha m\u00E1s seguridad que tratar de memorizar todo al mismo tiempo."
        },
        {
          title: "Para recordar",
          body: "La funci\u00F3n correcta depende del objetivo. Si quiero resumir, voy a SUMA o PROMEDIO. Si quiero filtrar por un solo criterio, pienso en `CONTAR.SI` o `SUMAR.SI`. Si necesito varias condiciones al mismo tiempo, paso a `CONTAR.SI.CONJUNTO`, `SUMAR.SI.CONJUNTO`, `SI.CONJUNTO` o a `SI` combinado con `Y`, `O` y `NO`. Si quiero cruzar tablas, pienso en BUSCARV, BUSCARX o INDICE+COINCIDIR. Y si quiero limpiar texto o evitar errores, uso ESPACIOS, SI y SI.ERROR.",
          resourceLinks: [
            {
              label: "Referencia oficial de funciones de Google Sheets",
              url: "https://support.google.com/docs/table/25273?hl=es"
            },
            {
              label: "Referencia oficial de funciones de Excel",
              url: "https://support.microsoft.com/es-es/excel"
            },
            {
              label: "ExcelJet - Función IFS en Excel",
              url: "https://exceljet.net/excel-functions/excel-ifs-function"
            },
            {
              label: "ExcelJet - VLOOKUP con múltiples criterios",
              url: "https://exceljet.net/formula/vlookup-with-multiple-criteria"
            },
            {
              label: "ExcelJet - INDEX y MATCH con criterios múltiples",
              url: "https://exceljet.net/formulas/index-and-match-with-multiple-criteria"
            },
            {
              label: "Microsoft Support - IF con AND, OR y NOT",
              url: "https://support.microsoft.com/en-us/office/using-if-with-and-or-and-not-functions-d895f58c-b36c-419e-b1f2-5c193a236d97"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Ask Questions to Make Data-Driven Decisions</em>. Coursera.",
          url: "https://www.coursera.org/learn/ask-questions-make-decisions"
        },
        {
          citation:
            "Google Docs Editors Help. (s. f.). <em>Lista de funciones de Hojas de c\u00E1lculo de Google</em>. https://support.google.com/docs/table/25273?hl=es",
          url: "https://support.google.com/docs/table/25273?hl=es"
        },
        {
          citation:
            "Microsoft Support. (s. f.). <em>Excel help & learning</em>. https://support.microsoft.com/es-es/excel",
          url: "https://support.microsoft.com/es-es/excel"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Funciones con condiciones múltiples</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: ["excel-shortcuts-guide", "google-sheets-shortcuts-guide"]
    },
    {
      id: "lookup-functions-in-spreadsheets",
      slug: "buscarv-buscarh-y-buscarx-en-hojas-de-calculo",
      title: "BUSCARV, BUSCARH y BUSCARX en hojas de cálculo",
      summary: "Una guía práctica para entender cómo funcionan las búsquedas más comunes en Google Sheets y Excel, cuándo usar `BUSCARV`, cuándo usar `BUSCARH` y por qué `BUSCARX` suele ser la opción más flexible.",
      category: "Hojas de cálculo",
      type: "Guía",
      level: "intermediate",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["BUSCARV", "BUSCARH", "BUSCARX", "Excel", "Google Sheets"],
      featured: false,
      contentSections: [
        {
          title: "Para qué sirven estas funciones",
          body: "Las funciones de búsqueda sirven para encontrar un valor dentro de una tabla y devolver información relacionada. Son clave cuando trabajo con catálogos, IDs de clientes, códigos de producto, notas, asistencia o cualquier base donde una columna actúe como llave."
        },
        {
          title: "La idea base detrás de una búsqueda",
          body: "Siempre hay cuatro piezas que conviene entender: qué valor busco, dónde lo busco, qué dato quiero devolver y si necesito coincidencia exacta o aproximada. Si esas cuatro cosas están claras, la fórmula deja de sentirse complicada."
        },
        {
          title: "BUSCARV: la búsqueda vertical clásica",
          body: "`BUSCARV` busca un valor en la primera columna de un rango y devuelve el dato correspondiente desde otra columna de esa misma fila. Es útil, rápido y muy común, pero tiene una limitación importante: solo puede buscar hacia la derecha.",
          code: "=BUSCARV(E2,A:B,2,FALSO)",
          comparisonTable: {
            columns: ["Parte", "Qué significa", "Ejemplo en `=BUSCARV(E2,A:B,2,FALSO)`"],
            rows: [
              ["Valor buscado", "El dato que quiero encontrar.", "E2"],
              ["Rango", "La tabla donde voy a buscar y devolver datos.", "A:B"],
              ["Índice de columna", "La columna del rango desde donde quiero traer el resultado.", "2"],
              ["Coincidencia", "Exacta o aproximada.", "FALSO = exacta"]
            ]
          }
        },
        {
          title: "Qué tener presente con BUSCARV",
          body: "El valor buscado debe estar en la primera columna del rango. Si el código está en la columna D pero quiero traer algo desde la A, `BUSCARV` no me sirve tal como está. Ahí toca reordenar columnas antes o usar otra función más flexible.",
          bestPractices: [
            "Usar `FALSO` casi siempre, porque normalmente quiero coincidencias exactas.",
            "Revisar que el rango incluya tanto la columna donde busco como la columna que devuelve el dato.",
            "Recordar que si hay duplicados, `BUSCARV` devuelve solo la primera coincidencia.",
            "Envolver la fórmula con `SI.ERROR` si quiero evitar mensajes como `#N/A`."
          ]
        },
        {
          title: "BUSCARH: la versión horizontal",
          body: "`BUSCARH` funciona con la misma lógica, pero en vez de buscar en una columna busca en la primera fila del rango. Sirve cuando la tabla está organizada por columnas, por ejemplo meses, categorías o métricas distribuidas horizontalmente.",
          code: "=BUSCARH(B1,A1:G2,2,FALSO)",
          example: "Si tengo los meses en la fila 1 y las ventas en la fila 2, `BUSCARH` me permite escribir el mes y recuperar la venta correspondiente."
        },
        {
          title: "BUSCARX: la alternativa más flexible",
          body: "`BUSCARX` suele ser la opción más cómoda porque no depende del número de columna, permite buscar hacia la izquierda o la derecha y además deja definir qué mostrar si no encuentra el valor. En muchas hojas modernas, es la opción que más conviene priorizar.",
          code: "=BUSCARX(E2,A:A,B:B,\"No encontrado\")",
          comparisonTable: {
            columns: ["Función", "Fortaleza principal", "Limitación principal"],
            rows: [
              ["BUSCARV", "Muy conocida y rápida para tablas simples.", "Solo busca hacia la derecha y depende del índice numérico."],
              ["BUSCARH", "Resuelve tablas organizadas horizontalmente.", "Es menos común y depende de la estructura por filas."],
              ["BUSCARX", "Busca en cualquier dirección y maneja mejor errores.", "No siempre está disponible en versiones antiguas de Excel."]
            ]
          }
        },
        {
          title: "Cómo lo haría en Excel",
          body: "En Excel la lógica es la misma que en Google Sheets. Lo importante es revisar si tu versión tiene `BUSCARX`; si no la tiene, entonces `BUSCARV` y `BUSCARH` siguen siendo totalmente válidas. Para casos más avanzados, también puedo combinar `INDICE` y `COINCIDIR`.",
          commandGroups: [
            {
              title: "BUSCARV en Excel",
              description: "Ideal cuando la llave está en la primera columna del rango y el dato que quiero traer está a la derecha.",
              code: "=BUSCARV(A2,$H$2:$J$100,3,FALSO)"
            },
            {
              title: "BUSCARH en Excel",
              description: "Útil cuando los encabezados están distribuidos en la primera fila.",
              code: "=BUSCARH(B1,$A$1:$G$2,2,FALSO)"
            },
            {
              title: "BUSCARX en Excel",
              description: "La opción más limpia cuando quiero una búsqueda flexible y con mensaje personalizado.",
              code: "=BUSCARX(A2,$H$2:$H$100,$J$2:$J$100,\"No encontrado\")"
            }
          ]
        },
        {
          title: "Errores típicos y cómo evitarlos",
          body: "La mayoría de los problemas no vienen de la función, sino del orden de la tabla o de detalles pequeños de formato.",
          comparisonTable: {
            columns: ["Problema", "Qué suele causar", "Cómo lo corregiría"],
            rows: [
              ["#N/A", "No se encontró coincidencia exacta.", "Revisar el valor buscado, limpiar espacios y usar `SI.ERROR`."],
              ["Resultado incorrecto", "Se usó `VERDADERO` o coincidencia aproximada sin ordenar datos.", "Cambiar a `FALSO` si quiero coincidencia exacta."],
              ["No trae la columna correcta", "El índice está mal definido.", "Contar bien el número de columna dentro del rango."],
              ["No puede buscar a la izquierda", "Limitación natural de `BUSCARV`.", "Usar `BUSCARX` o `INDICE` + `COINCIDIR`."]
            ]
          }
        },
        {
          title: "Cuándo usar cada una",
          body: "Si la tabla es simple y el dato está a la derecha, `BUSCARV` sigue sirviendo mucho. Si la tabla está horizontal, `BUSCARH` resuelve bien. Pero si tengo opción, `BUSCARX` suele ser la mejor alternativa por claridad, flexibilidad y control de errores."
        },
        {
          title: "Para recordar",
          body: "`BUSCARV` me sirve para búsquedas verticales clásicas, `BUSCARH` para tablas horizontales y `BUSCARX` para un cruce más moderno y flexible. La clave no es memorizar la fórmula completa, sino entender primero la estructura de la tabla y luego elegir la función correcta.",
          resourceLinks: [
            {
              label: "Microsoft Support - VLOOKUP",
              url: "https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1"
            },
            {
              label: "Microsoft Support - XLOOKUP",
              url: "https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929"
            },
            {
              label: "Google Sheets - BUSCARV",
              url: "https://support.google.com/docs/answer/3093318?hl=es"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Conceptos básicos de VLOOKUP</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Microsoft. (s. f.). <em>VLOOKUP function</em>. Microsoft Support.",
          url: "https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1"
        }
      ],
      relatedIds: [
        "spreadsheet-functions-definitive-guide",
        "advanced-spreadsheet-functions-and-versioning",
        "sorting-filtering-and-converting-in-spreadsheets"
      ]
    },
    {
      id: "advanced-spreadsheet-functions-and-versioning",
      slug: "funciones-avanzadas-y-versionado-en-hojas-de-calculo",
      title: "Funciones avanzadas y versionado en hojas de cálculo",
      summary: "Una guía para usar funciones más potentes en Google Sheets y Excel, conectar información entre hojas o fuentes y mantener trazabilidad cuando el trabajo se hace en equipo.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "intermediate",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Google Sheets", "Excel", "QUERY", "IMPORTRANGE", "Versiones"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte vale tanto la pena",
          body: "Cuando ya pasé la etapa básica de limpiar, sumar o buscar datos, lo siguiente que más tiempo ahorra es aprender a conectar hojas, traer solo lo relevante y dejar vistas reutilizables. Ahí es donde funciones como `IMPORTRANGE`, `QUERY` y `FILTRAR` empiezan a devolver mucho valor."
        },
        {
          title: "Tres funciones avanzadas que conviene dominar",
          body: "Estas funciones sirven para reducir copia y pega manual, filtrar con más criterio y trabajar sobre fuentes que se actualizan sin tener que rehacer todo cada vez.",
          comparisonTable: {
            columns: ["Función o herramienta", "Dónde se usa más", "Para qué sirve"],
            rows: [
              ["IMPORTRANGE", "Google Sheets", "Trae un rango desde otra hoja de cálculo y lo mantiene sincronizado con la fuente."],
              ["QUERY", "Google Sheets y asistentes de consulta en Excel", "Permite seleccionar, filtrar y ordenar datos con lógica parecida a SQL."],
              ["FILTRAR", "Google Sheets / Excel con funciones dinámicas", "Devuelve solo las filas o columnas que cumplen condiciones específicas."],
              ["Pegar vínculo / vínculos a celdas", "Excel", "Conecta una hoja con otra sin copiar valores de forma manual."],
              ["Power Query / Obtener y transformar", "Excel", "Importa, limpia y transforma datos desde archivos, tablas o fuentes externas."]
            ]
          }
        },
        {
          title: "IMPORTRANGE: mantener datos sincronizados",
          body: "En Google Sheets, `IMPORTRANGE` me sirve cuando quiero tomar un bloque de otra hoja y usarlo como base de seguimiento o análisis. Es mucho mejor que copiar y pegar manualmente, porque deja la salida conectada con la fuente y reduce errores humanos.",
          code: "=IMPORTRANGE(\"https://docs.google.com/spreadsheets/d/tu_id\", \"Ventas!A1:F500\")",
          example: "Puedo traer solo la pestaña de ventas desde un archivo maestro y usarla como hoja de seguimiento local sin tocar la base original."
        },
        {
          title: "QUERY: consultar dentro de una hoja como si fuera mini SQL",
          body: "`QUERY` es de las funciones más potentes en Google Sheets porque permite seleccionar columnas, filtrar registros y ordenar sin necesidad de tocar la base original. Es ideal cuando necesito varias vistas del mismo dataset para distintos análisis.",
          code: "=QUERY(A1:F1000, \"SELECT A, C, E WHERE E > 100 ORDER BY E DESC\", 1)",
          comparisonTable: {
            columns: ["Ventaja de QUERY", "Qué me resuelve"],
            rows: [
              ["Filtrado repetible", "Evita rehacer filtros manuales cada vez que actualizo datos."],
              ["Selección de columnas", "Puedo quedarme solo con los campos que importan para una vista específica."],
              ["Orden y criterio en una sola función", "Me ahorra pasos intermedios y hojas auxiliares."],
              ["Base para vistas temáticas", "Puedo crear una pestaña por región, mes, producto o segmento."]
            ]
          }
        },
        {
          title: "FILTRAR: cuando necesito algo rápido y directo",
          body: "`FILTRAR` es más simple que `QUERY`, pero vuela cuando solo necesito quedarme con las filas que cumplen una condición clara. Para prefiltrar antes de analizar, es excelente.",
          code: "=FILTRAR(A2:F1000, E2:E1000>100)",
          example: "Si quiero ver solo ventas mayores a 100 o solo filas de una categoría específica, `FILTRAR` suele ser más rápido que armar una consulta más larga."
        },
        {
          title: "Cómo se conecta esto con Excel",
          body: "En Excel no siempre usaré exactamente las mismas funciones, pero la lógica sí existe. Puedo traer datos externos, pegar vínculos entre hojas o usar Power Query para cargar, transformar y dejar una salida lista sin depender de limpieza manual repetitiva.",
          comparisonTable: {
            columns: ["Necesidad", "Google Sheets", "Excel"],
            rows: [
              ["Traer datos de otra hoja", "IMPORTRANGE", "Pegar vínculo o conexiones externas"],
              ["Filtrar con lógica declarativa", "QUERY", "Power Query o filtros avanzados"],
              ["Prefiltrar filas según condición", "FILTRAR", "FILTRAR en Excel moderno o filtros dinámicos"],
              ["Reutilizar vistas limpias", "Pestañas derivadas con funciones", "Consultas cargadas a tablas o pestañas nuevas"]
            ]
          }
        },
        {
          title: "Más fórmulas avanzadas que sí conviene tener a mano",
          body: "Además de `IMPORTRANGE`, `QUERY` y `FILTRAR`, hay otras funciones que ayudan mucho cuando la hoja empieza a crecer y necesito que el análisis sea más flexible, dinámico o fácil de mantener.",
          commandGroups: [
            {
              title: "UNIQUE / ÚNICO",
              description: "Devuelve valores sin duplicados y sirve mucho para crear catálogos, listas limpias o validaciones.",
              code: "=UNIQUE(A2:A1000)"
            },
            {
              title: "SORT / ORDENAR",
              description: "Ordena un rango con fórmula, sin tocar la base original.",
              code: "=SORT(A2:F1000, 2, TRUE)"
            },
            {
              title: "XLOOKUP / BUSCARX",
              description: "Más flexible que BUSCARV porque permite buscar a izquierda o derecha y definir qué devolver si no encuentra coincidencia.",
              code: "=BUSCARX(A2, Hoja2!A:A, Hoja2!D:D, \"No encontrado\")"
            },
            {
              title: "SUMIFS / SUMAR.SI.CONJUNTO",
              description: "Suma valores cuando se cumplen varias condiciones al mismo tiempo.",
              code: "=SUMAR.SI.CONJUNTO(F:F, B:B, \"Norte\", C:C, \"Activo\")"
            },
            {
              title: "COUNTIFS / CONTAR.SI.CONJUNTO",
              description: "Cuenta registros que cumplen más de un criterio, útil para perfiles, estados o revisiones rápidas.",
              code: "=CONTAR.SI.CONJUNTO(B:B, \"Norte\", C:C, \"Activo\")"
            },
            {
              title: "ARRAYFORMULA",
              description: "En Google Sheets permite extender una lógica a toda una columna sin arrastrar fórmulas fila por fila.",
              code: "=ARRAYFORMULA(IF(A2:A=\"\", \"\", B2:B*C2:C))"
            },
            {
              title: "TEXTJOIN / UNIRTEXTO",
              description: "Une varios textos con un separador y es muy útil para etiquetas, resúmenes o combinaciones de campos.",
              code: "=UNIRTEXTO(\" - \", VERDADERO, A2:C2)"
            },
            {
              title: "IFERROR / SI.ERROR",
              description: "Evita que una fórmula rompa toda la vista cuando hay búsquedas o divisiones problemáticas.",
              code: "=SI.ERROR(BUSCARX(A2, Hoja2!A:A, Hoja2!D:D), \"Sin dato\")"
            }
          ]
        },
        {
          title: "Cuándo estas funciones ayudan más",
          body: "No las usaría por lucirme: las usaría cuando realmente reduzcan trabajo repetitivo o mejoren el orden del flujo.",
          bestPractices: [
            "Cuando la fuente se actualiza todos los días y no quiero copiar datos manualmente.",
            "Cuando necesito varias vistas de una misma base sin duplicarla entera.",
            "Cuando quiero compartir solo el subconjunto relevante con otra persona o equipo.",
            "Cuando me conviene separar dato crudo de dato preparado para análisis."
          ]
        },
        {
          title: "Versionado en Sheets y Excel",
          body: "Cuando trabajo en equipo, no basta con tener la función correcta: también necesito saber quién cambió qué y por qué. El historial de versiones y los registros de cambios ayudan a que el trabajo colaborativo no se vuelva un caos.",
          comparisonTable: {
            columns: ["Herramienta", "Qué permite", "Para qué ayuda"],
            rows: [
              ["Historial de versiones en Google Sheets", "Ver ediciones por hoja o celda y volver atrás si hace falta.", "Recuperar cambios, entender quién editó y cuándo."],
              ["Seguimiento de cambios en Excel", "Aceptar o rechazar cambios si la función está habilitada.", "Revisar modificaciones de colaboradores."],
              ["Historial en herramientas como BigQuery", "Comparar estados anteriores de una consulta o tabla.", "Entender qué cambió sin depender solo de memoria."],
              ["Registro de cambios manual", "Anotar qué se cambió, cuándo, quién lo hizo y por qué.", "Aporta contexto que el historial automático no siempre muestra."]
            ]
          }
        },
        {
          title: "Qué debería llevar un buen registro de cambios",
          body: "Un changelog simple puede salvar muchísimo tiempo, sobre todo cuando cambian fórmulas, consultas o criterios de limpieza.",
          comparisonTable: {
            columns: ["Campo del registro", "Para qué sirve"],
            rows: [
              ["Archivo, hoja, fórmula o consulta afectada", "Ubicar rápidamente qué componente cambió."],
              ["Descripción del cambio", "Entender qué se modificó realmente."],
              ["Fecha", "Saber cuándo ocurrió."],
              ["Persona que hizo el cambio", "Tener trazabilidad de autoría."],
              ["Persona que aprobó", "Agregar control cuando el cambio afecta a todo el equipo."],
              ["Versión", "Ordenar revisiones sin confusión."],
              ["Motivo del cambio", "Entender por qué se tomó la decisión."]
            ]
          }
        },
        {
          title: "Cómo lo usaría en la práctica",
          body: "Si una hoja compartida alimenta un dashboard o una decisión importante, conviene combinar tres cosas: una fuente clara, funciones que reduzcan manipulación manual y un registro de cambios que explique el motivo de cada ajuste. Así el equipo puede sincronizarse mejor y volver atrás sin perder contexto."
        },
        {
          title: "Para recordar",
          body: "Las funciones avanzadas en Sheets o Excel no solo aceleran el trabajo: también ayudan a construir un flujo más limpio, reutilizable y menos frágil. Y si además hay versionado y changelog, el análisis gana mucha más confianza cuando lo toca más de una persona.",
          resourceLinks: [
            {
              label: "Google Support - IMPORTRANGE",
              url: "https://support.google.com/docs/answer/3093340?hl=en"
            },
            {
              label: "Google Support - QUERY",
              url: "https://support.google.com/docs/answer/3093343?hl=en"
            },
            {
              label: "Google Support - FILTRO",
              url: "https://support.google.com/docs/answer/3093197?hl=en"
            },
            {
              label: "Google Sheets - Atajos de teclado",
              url: "https://support.google.com/docs/answer/181110"
            },
            {
              label: "Google Sheets - Lista de funciones",
              url: "https://support.google.com/docs/table/25273?hl=en"
            },
            {
              label: "23 fórmulas de Google Sheets que debes conocer",
              url: "https://blog.golayer.io/google-sheets/google-sheets-formulas"
            },
            {
              label: "18 trucos y técnicas con fórmulas en Google Sheets",
              url: "https://www.benlcollins.com/spreadsheets/google-sheets-formulas-techniques/"
            },
            {
              label: "Excel - Métodos abreviados de teclado",
              url: "https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f?ui=en-US&rs=en-US&ad=US"
            },
            {
              label: "ExcelJet - 222 atajos de Excel",
              url: "https://exceljet.net/keyboard-shortcuts"
            },
            {
              label: "ExcelJet - Lista de funciones de Excel",
              url: "https://exceljet.net/excel-functions"
            },
            {
              label: "ExcelJet - Lista de fórmulas de Excel",
              url: "https://exceljet.net/formulas"
            },
            {
              label: "Essential Excel Skills for Analyzing Data",
              url: "https://learntocodewith.me/posts/excel-skills/"
            },
            {
              label: "Advanced Spreadsheet Skills",
              url: "https://www.slideshare.net/markjhonoxillo/advanced-spreadsheet-skills"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Funciones avanzadas para agilizar la limpieza de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Registros de cambios</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Trucos y consejos avanzados para hojas de cálculo</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "spreadsheet-functions-definitive-guide",
        "data-cleaning-workflow-in-spreadsheets",
        "data-security-access-and-file-organization"
      ]
    },
    {
      id: "pivot-tables-in-sheets-and-excel",
      slug: "tablas-dinamicas-en-sheets-y-excel",
      title: "Tablas dinámicas en Sheets y Excel",
      summary: "Una guía práctica para entender qué hace una tabla dinámica, cuáles son sus partes y cómo usarla en Google Sheets o Excel para resumir datos, comparar métricas y responder preguntas rápido.",
      category: "Hojas de cálculo",
      type: "Guía",
      level: "intermediate",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Tabla dinámica", "Pivot Table", "Google Sheets", "Excel"],
      featured: true,
      contentSections: [
        {
          title: "Por qué una tabla dinámica ahorra tanto tiempo",
          body: "Una tabla dinámica sirve para ordenar, reorganizar, agrupar, contar, sumar o promediar datos sin tocar la base original. Eso la vuelve muy útil cuando necesito sacar conclusiones rápidas desde una hoja grande sin empezar a crear muchas fórmulas manuales."
        },
        {
          title: "Qué preguntas resuelve bien",
          body: "Las tablas dinámicas brillan cuando quiero responder preguntas concretas sobre volumen, distribución, comparación o tendencia.",
          highlights: [
            {
              icon: "fa-solid fa-chart-column",
              title: "Qué categoría vende más",
              text: "Puedo comparar ventas por producto, canal o departamento."
            },
            {
              icon: "fa-solid fa-calendar-days",
              title: "Qué periodo concentra más actividad",
              text: "Agrupo por mes, trimestre o año para ver tendencias."
            },
            {
              icon: "fa-solid fa-calculator",
              title: "Cuánto suman o promedian ciertos grupos",
              text: "Puedo resumir una métrica sin alterar la tabla cruda."
            },
            {
              icon: "fa-solid fa-filter",
              title: "Qué pasa si miro solo un subconjunto",
              text: "Aplico filtros para acotar el análisis sin duplicar datos."
            }
          ]
        },
        {
          title: "Las 4 partes básicas de una tabla dinámica",
          body: "Casi toda tabla dinámica se arma combinando filas, columnas, valores y filtros. Entender bien estas cuatro piezas hace mucho más fácil usarla bien.",
          comparisonTable: {
            columns: ["Parte", "Qué hace", "Ejemplo"],
            rows: [
              ["Filas", "Agrupan y organizan los datos por una dimensión principal.", "Departamento, año o región."],
              ["Columnas", "Separan la información en otra dimensión visual.", "Trimestre, canal o categoría."],
              ["Valores", "Aplican una agregación como suma, conteo o promedio.", "SUMA de ventas, PROMEDIO de margen, COUNT de pedidos."],
              ["Filtros", "Reducen el universo analizado según un criterio.", "Solo productos activos o ventas menores a cierto monto."]
            ]
          }
        },
        {
          title: "Cómo se vería en un caso real",
          body: "Si quiero saber las ventas totales por departamento y también cuántos productos vendió cada uno, pondría `Departamento` en filas y después dos valores: `SUMA de ventas` y `COUNT de productos`. Si además ordeno por suma de ventas, identifico altiro qué departamento generó más ingresos."
        },
        {
          title: "Cómo crearla en Google Sheets",
          body: "En Sheets, normalmente parto desde la base original, selecciono el rango y luego voy a `Insertar > Tabla dinámica`. Casi siempre conviene crearla en una hoja nueva para no mezclar el análisis con el dato crudo.",
          commandGroups: [
            {
              title: "1. Insertar tabla dinámica",
              description: "Seleccionar la base y crear una tabla dinámica nueva.",
              code: "Insertar > Tabla dinámica"
            },
            {
              title: "2. Definir filas",
              description: "Elegir la dimensión principal que ordenará el resumen.",
              code: "Editor lateral > Filas > Añadir"
            },
            {
              title: "3. Definir valores",
              description: "Elegir la métrica y el tipo de cálculo.",
              code: "Editor lateral > Valores > SUMA / PROMEDIO / COUNT"
            },
            {
              title: "4. Añadir filtros o columnas",
              description: "Refinar el análisis o abrir otra dimensión de comparación.",
              code: "Editor lateral > Columnas / Filtros > Añadir"
            }
          ]
        },
        {
          title: "Cómo hacerlo en Excel",
          body: "En Excel la lógica es casi la misma. Selecciono la tabla, voy a `Insertar > Tabla dinámica` y elijo dónde quiero que viva el resumen. Luego trabajo con el panel de campos para mover variables a filas, columnas, valores y filtros.",
          bestPractices: [
            "Usar una tabla bien encabezada antes de crear la tabla dinámica.",
            "Crear la tabla dinámica en una hoja nueva para separar análisis y base.",
            "Cambiar la agregación por defecto si no me sirve el conteo.",
            "Actualizar la tabla dinámica si la fuente cambió y el resumen no se refresca solo."
          ]
        },
        {
          title: "Qué cálculos conviene usar en valores",
          body: "La sección de valores es donde realmente toma forma el análisis. Ahí decido si quiero sumar, contar, promediar o incluso construir un campo calculado.",
          comparisonTable: {
            columns: ["Cálculo", "Cuándo sirve más", "Ejemplo"],
            rows: [
              ["SUMA", "Cuando quiero ver totales acumulados.", "Ventas totales por región."],
              ["COUNT", "Cuando quiero contar registros o eventos.", "Cantidad de pedidos por canal."],
              ["PROMEDIO", "Cuando quiero comparar niveles medios.", "Ticket promedio por tienda."],
              ["Campo calculado", "Cuando necesito una métrica derivada.", "Margen porcentual o ratio simple."]
            ]
          }
        },
        {
          title: "Ordenar, filtrar y presentar mejor el resultado",
          body: "Una vez creada la tabla dinámica, la parte útil es moverla según la pregunta analítica. Puedo ordenar por el valor más alto, filtrar categorías específicas o cambiar el formato para que el resumen quede más claro para otra persona."
        },
        {
          title: "Cuándo prefiero una tabla dinámica y cuándo no",
          body: "La usaría cuando quiero un resumen rápido, flexible y legible. No la usaría como reemplazo total de una base bien estructurada o de un modelo más formal.",
          comparisonTable: {
            columns: ["La usaría cuando...", "No sería mi primera opción cuando..."],
            rows: [
              ["Necesito comparar métricas rápido.", "Necesito lógica muy personalizada fila por fila."],
              ["Quiero explorar tendencias sin tocar la base.", "Estoy armando un proceso automatizado o repetible con más complejidad."],
              ["Quiero compartir un resumen con stakeholders.", "Necesito modelar datos o hacer cruces más profundos con muchas reglas."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Una tabla dinámica no reemplaza el análisis: lo acelera. Si entiendo bien filas, columnas, valores y filtros, puedo responder preguntas útiles en muy poco tiempo y sin ensuciar la base original.",
          resourceLinks: [
            {
              label: "Google Support - Crear y usar tablas dinámicas",
              url: "https://support.google.com/docs/answer/1272900?hl=es"
            },
            {
              label: "Google Support - Personalizar una tabla dinámica",
              url: "https://support.google.com/docs/answer/7572895?hl=es"
            },
            {
              label: "Microsoft Support - Crear una tabla dinámica",
              url: "https://support.microsoft.com/es-es/office/crear-una-tabla-din%C3%A1mica-5c708a92-03aa-4cbf-a1af-9d01c620a2ff"
            },
            {
              label: "Microsoft Support - Filtrar datos en una tabla dinámica",
              url: "https://support.microsoft.com/es-es/office/filtrar-datos-en-una-tabla-din%C3%A1mica-cc1ed287-3a97-4e95-b377-ddfafe79fa8f"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Elementos de una Tabla dinámica</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Utilizar tablas dinámicas en el Análisis</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "sorting-filtering-and-converting-in-spreadsheets",
        "advanced-spreadsheet-functions-and-versioning",
        "spreadsheet-functions-definitive-guide"
      ]
    },
    {
      id: "sorting-filtering-and-converting-in-spreadsheets",
      slug: "ordenar-filtrar-y-convertir-datos-en-hojas-de-calculo",
      title: "Ordenar, filtrar y convertir datos en hojas de cálculo",
      summary: "Una guía práctica para organizar mejor la información en Google Sheets y Excel usando ordenación, filtros, `SORT`, conversión de formatos y bloqueo de valores.",
      category: "Hojas de cálculo",
      type: "Guía",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["SORT", "Filtros", "Conversión", "Google Sheets", "Excel"],
      featured: true,
      contentSections: [
        {
          title: "Por qué este bloque merece su propia nota",
          body: "Ordenar, filtrar y convertir no son solo detalles de formato: son parte del proceso de entender mejor la base. Si la información está bien ordenada, filtrada con criterio y convertida al tipo correcto, el análisis se vuelve más claro, más rápido y mucho más confiable."
        },
        {
          title: "Qué resuelven estas herramientas",
          body: "Estas acciones aparecen una y otra vez en hojas de cálculo cuando quiero pasar del caos inicial a una base lista para revisar, resumir o visualizar.",
          comparisonTable: {
            columns: ["Acción", "Para qué sirve", "Ejemplo práctico"],
            rows: [
              ["Ordenar", "Reorganiza filas para hacer más visible un patrón o prioridad.", "Ver ventas de mayor a menor o invitados agrupados por mesa."],
              ["Filtrar", "Muestra solo los registros que cumplen ciertas condiciones.", "Ver solo clientes activos o pedidos mayores a cierto monto."],
              ["Convertir formato", "Hace que fechas, números, monedas o porcentajes se interpreten correctamente.", "Pasar texto a fecha o números a porcentaje."],
              ["Bloquear valores", "Evita que una celda dependa de una fórmula que puede cambiar más adelante.", "Pegar solo valores para fijar resultados convertidos."]
            ]
          }
        },
        {
          title: "Usar la función SORT",
          body: "La función `SORT` es muy útil cuando quiero crear una vista ordenada sin alterar la tabla original. Eso la hace más segura que ordenar manualmente la base si todavía estoy explorando.",
          code: "=SORT(A2:D6, 2, TRUE)",
          comparisonTable: {
            columns: ["Parte de la fórmula", "Qué hace"],
            rows: [
              ["A2:D6", "Define el rango que quiero ordenar."],
              ["2", "Indica la columna interna del rango usada para ordenar."],
              ["TRUE", "Ordena en forma ascendente."],
              ["FALSE", "Ordena en forma descendente."]
            ]
          },
          example: "Si ordeno una lista de invitados por la columna de mesa, puedo ver rápidamente qué personas pertenecen a cada grupo sin tocar la tabla de origen."
        },
        {
          title: "Ordenación personalizada",
          body: "Cuando una sola condición no basta, conviene usar ordenación por varias columnas. Esto permite priorizar una lógica y luego refinarla con otra.",
          comparisonTable: {
            columns: ["Primer criterio", "Segundo criterio", "Resultado esperado"],
            rows: [
              ["Invitación enviada", "Nombre de invitado", "Primero veo `No`, luego `Sí`, y dentro de cada grupo quedan ordenados alfabéticamente."],
              ["Región", "Ventas", "Agrupo por zona y después veo montos de mayor a menor."],
              ["Estado", "Fecha", "Primero separo casos activos/inactivos y luego los ordeno cronológicamente."]
            ]
          }
        },
        {
          title: "Filtrar sin perder el contexto",
          body: "Los filtros son clave cuando no quiero mover ni duplicar datos, sino simplemente mirar una parte del conjunto. Son especialmente útiles para revisar anomalías, categorías específicas o periodos concretos sin crear una tabla nueva.",
          bestPractices: [
            "Aplicar filtros cuando quiero explorar sin alterar el orden base.",
            "Usar varias condiciones cuando necesito aislar un subconjunto muy específico.",
            "Quitar filtros antes de concluir que faltan datos, para no olvidar que hay filas ocultas.",
            "Revisar siempre si el filtro sigue vigente antes de compartir una hoja con otra persona."
          ]
        },
        {
          title: "Convertir datos al tipo correcto",
          body: "A veces una columna se ve bien, pero el dato está mal interpretado. Puede parecer fecha y ser texto, o parecer número y estar guardado como cadena. Esa diferencia rompe fórmulas, filtros y cálculos.",
          comparisonTable: {
            columns: ["Conversión", "Google Sheets / Excel", "Para qué ayuda"],
            rows: [
              ["Texto a fecha", "Formato fecha o funciones específicas", "Permite ordenar cronológicamente y calcular diferencias entre fechas."],
              ["Texto a número", "Conversión de formato o limpieza previa", "Hace que los valores sumen, promedien y entren en fórmulas."],
              ["Número a moneda", "Formato moneda", "Mejora lectura y consistencia financiera."],
              ["Número a porcentaje", "Formato porcentaje o `TO_PERCENT` en Sheets", "Facilita lectura de tasas, participación o conversión."],
              ["Unidades de medida", "Función `CONVERT`", "Permite comparar magnitudes en una unidad coherente."]
            ]
          }
        },
        {
          title: "La función CONVERT",
          body: "`CONVERT` me sirve cuando una columna viene en una unidad y necesito llevarla a otra para poder comparar o analizar mejor.",
          code: "=CONVERT(B2, \"F\", \"C\")",
          example: "Si una tabla meteorológica trae temperatura en Fahrenheit, puedo llevarla a Celsius y mantener toda la columna en el mismo estándar antes de hacer gráficos o resúmenes."
        },
        {
          title: "Bloquear valores para no depender de la fórmula",
          body: "Después de convertir o calcular algo, a veces conviene pegar solo valores. Esto fija el resultado y evita que cambie si se toca la celda de origen o la fórmula que lo generó.",
          bestPractices: [
            "Usar `Pegar solo valores` cuando el cálculo ya quedó validado.",
            "Mantener una columna con fórmula y otra con valor fijo si necesito trazabilidad.",
            "No bloquear demasiado pronto si aún sigo revisando la lógica del cálculo."
          ]
        },
        {
          title: "Google Sheets y Excel: cómo pensarlo",
          body: "La lógica general es la misma en ambas herramientas, aunque los caminos cambian un poco según el menú o las funciones disponibles.",
          comparisonTable: {
            columns: ["Necesidad", "Google Sheets", "Excel"],
            rows: [
              ["Ordenar una vista", "`SORT` o menú de ordenar rango", "`SORT` en versiones modernas o menú de ordenación"],
              ["Filtrar registros", "Filtros desde Datos o `FILTRAR`", "Filtros desde Datos o funciones dinámicas"],
              ["Convertir unidades", "`CONVERT`", "`CONVERT`"],
              ["Formatear moneda, fecha o porcentaje", "Formato > Número", "Pestaña Inicio o formato de número"],
              ["Pegar valores fijos", "Pegar especial > Solo valores", "Pegado especial > Valores"]
            ]
          }
        },
        {
          title: "Un flujo rápido que suelo usar",
          body: "Si me llega una base nueva, esta secuencia me ahorra tiempo y reduce errores de interpretación.",
          commandGroups: [
            {
              title: "1. Revisar tipos y formatos",
              description: "Confirmar si números, fechas y porcentajes están bien interpretados.",
              code: "Formato > revisar fecha, número, moneda o porcentaje"
            },
            {
              title: "2. Filtrar valores raros",
              description: "Aislar nulos, extremos, categorías poco frecuentes o registros sospechosos.",
              code: "Filtro por columnas críticas"
            },
            {
              title: "3. Ordenar para leer mejor",
              description: "Agrupar por prioridad, fecha, región o cualquier criterio útil.",
              code: "SORT o ordenación por una o más columnas"
            },
            {
              title: "4. Convertir si hace falta",
              description: "Normalizar unidades o cambiar textos mal tipados a valores útiles.",
              code: "CONVERT + formato de número/fecha"
            },
            {
              title: "5. Fijar resultados clave",
              description: "Pegar solo valores si necesito congelar una salida validada.",
              code: "Pegar especial > solo valores"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Ordenar, filtrar y convertir son de las habilidades más rentables en hojas de cálculo. No porque sean vistosas, sino porque ayudan a ver mejor el dato, evitar errores tontos y dejar una base más lista para análisis o visualización.",
          resourceLinks: [
            {
              label: "Microsoft Support - Formatear números como porcentajes",
              url: "https://support.microsoft.com/en-us/office/format-numbers-as-percentages-de49167b-d603-4450-bcaa-31fba6c7b6b4"
            },
            {
              label: "Google Support - TO_PERCENT",
              url: "https://support.google.com/docs/answer/3094284?hl=en"
            },
            {
              label: "Microsoft Support",
              url: "https://support.microsoft.com/"
            },
            {
              label: "Ayuda del editor de Google Docs",
              url: "https://support.google.com/docs/?hl=en#topic=1382883"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Utilizar la función SORT en las hojas de cálculo</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Ordenación y filtrado de datos para mantenerlos organizados</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Ordenación y filtrado en hojas y Excel</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Convertir datos en hojas de cálculo</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: De un tipo a otro</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-transformation-in-spreadsheets",
        "importing-data-into-sheets-and-excel",
        "advanced-spreadsheet-functions-and-versioning"
      ]
    },
    {
      id: "data-transformation-in-spreadsheets",
      slug: "transformacion-de-datos-en-excel-y-google-sheets",
      title: "Transformaci\u00F3n de datos en Excel y Google Sheets",
      summary: "Transformar datos no es solo cambiar columnas: tambi\u00E9n implica ordenar mejor la informaci\u00F3n, volverla compatible y dejarla lista para analizar, comparar o fusionar.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Excel", "Google Sheets", "Transformaci\u00F3n", "Limpieza"],
      featured: true,
      contentSections: [
        {
          title: "Qu\u00E9 es transformar datos",
          body: "Transformar datos es cambiar su formato, estructura o contenido para que el an\u00E1lisis sea m\u00E1s simple, consistente y \u00FAtil. En el trabajo diario esto puede significar renombrar columnas, corregir valores, juntar archivos, quitar duplicados o pasar una tabla de formato largo a formato ancho."
        },
        {
          title: "Qu\u00E9 tipo de cambios suelen entrar aqu\u00ED",
          body: "Aunque a veces suena t\u00E9cnico, en la pr\u00E1ctica son acciones bastante concretas que aparecen todo el tiempo cuando trabajo con hojas de c\u00E1lculo.",
          bestPractices: [
            "Agregar, copiar o replicar datos cuando faltan campos de apoyo.",
            "Eliminar filas o columnas que ya no aportan al an\u00E1lisis.",
            "Normalizar nombres de variables, categor\u00EDas o encabezados.",
            "Renombrar, mover o combinar columnas para ordenar mejor la tabla.",
            "Unir un dataset con otro cuando necesito consolidar informaci\u00F3n.",
            "Guardar el archivo en otro formato, como CSV, cuando debo compartirlo o migrarlo."
          ]
        },
        {
          title: "Por qu\u00E9 vale la pena transformar",
          body: "No se transforma por capricho: se transforma para que los datos funcionen mejor. Cuando la estructura mejora, tambi\u00E9n mejora la lectura, la compatibilidad y la calidad del an\u00E1lisis.",
          highlights: [
            {
              icon: "fa-solid fa-layer-group",
              title: "Organizaci\u00F3n",
              text: "Una tabla mejor ordenada es mucho m\u00E1s f\u00E1cil de filtrar, revisar y reutilizar."
            },
            {
              icon: "fa-solid fa-link",
              title: "Compatibilidad",
              text: "Dos sistemas distintos pueden usar mejor los mismos datos si comparten una estructura parecida."
            },
            {
              icon: "fa-solid fa-code-merge",
              title: "Fusi\u00F3n",
              text: "Cuando los formatos son compatibles, juntar bases deja de ser un dolor."
            },
            {
              icon: "fa-solid fa-scale-balanced",
              title: "Comparaci\u00F3n",
              text: "Se vuelve m\u00E1s f\u00E1cil comparar periodos, grupos o resultados entre archivos."
            }
          ]
        },
        {
          title: "Acciones pr\u00E1cticas en Excel y Google Sheets",
          body: "Si aterrizo la transformaci\u00F3n a herramientas reales, estas son de las primeras funciones que uso cuando necesito ordenar una base antes de analizarla.",
          comparisonTable: {
            columns: ["Tarea", "Google Sheets", "Excel", "Para qu\u00E9 sirve"],
            rows: [
              ["Filtrar registros", "Datos > Crear filtro", "Datos > Filtro", "Ver solo las filas que cumplen ciertas condiciones."],
              ["Ordenar valores", "Ordenar hoja o rango", "Ordenar de A a Z / Z a A", "Agrupar mejor categor\u00EDas, fechas o montos."],
              ["Buscar y reemplazar", "Ctrl + H", "Ctrl + L o Ctrl + H seg\u00FAn versi\u00F3n", "Corregir nombres, formatos o etiquetas repetidas."],
              ["Quitar duplicados", "Datos > Limpieza de datos > Quitar duplicados", "Datos > Quitar duplicados", "Evitar contar dos veces el mismo registro."],
              ["Dividir texto en columnas", "Datos > Dividir texto en columnas", "Datos > Texto en columnas", "Separar campos como nombre, fecha o c\u00F3digo."],
              ["Cambiar formato de archivo", "Descargar como CSV/XLSX", "Guardar como CSV/XLSX", "Compartir o migrar datos entre sistemas."]
            ]
          }
        },
        {
          title: "Caso t\u00EDpico: juntar y ordenar dos bases",
          body: "Si una empresa compra otra o si recibo dos archivos de clientes con estructuras distintas, primero necesito dejar compatibles los encabezados, el orden de columnas y los formatos. Reci\u00E9n despu\u00E9s conviene unir todo y quitar registros repetidos. Esa parte tambi\u00E9n es transformaci\u00F3n de datos, no solo limpieza."
        },
        {
          title: "Formato largo vs formato ancho",
          body: "Una transformaci\u00F3n muy com\u00FAn es cambiar entre formato largo y formato ancho. Ambos guardan la misma informaci\u00F3n, pero no se leen ni se analizan igual.",
          comparisonTable: {
            columns: ["Formato largo", "Formato ancho"],
            rows: [
              ["Cada fila representa un solo punto de dato para una combinaci\u00F3n espec\u00EDfica.", "Cada fila puede contener varios puntos de dato para un mismo elemento."],
              ["Suele ser mejor cuando tengo muchas observaciones o series que quiero modelar.", "Suele ser m\u00E1s c\u00F3modo para leer r\u00E1pido o graficar comparaciones simples."],
              ["Es muy \u00FAtil para an\u00E1lisis estad\u00EDstico, tablas din\u00E1micas avanzadas o modelado.", "Es muy \u00FAtil para reportes ejecutivos, comparaciones visuales y tablas resumidas."]
            ]
          }
        },
        {
          title: "Cu\u00E1ndo prefiero cada uno",
          body: "No hay un formato universalmente mejor. Lo importante es elegir el que facilita la tarea que viene despu\u00E9s.",
          comparisonTable: {
            columns: ["Formato ancho se prefiere cuando", "Formato largo se prefiere cuando"],
            rows: [
              ["Quiero crear tablas o gr\u00E1ficos con pocas variables por cada sujeto.", "Quiero almacenar muchas variables o mediciones sobre cada sujeto."],
              ["Necesito comparar visualmente series simples, como l\u00EDneas por fecha.", "Necesito hacer an\u00E1lisis estad\u00EDstico o gr\u00E1ficos m\u00E1s avanzados."],
              ["Estoy armando un resumen r\u00E1pido para lectura humana.", "Estoy dejando los datos listos para modelar, procesar o pivotear despu\u00E9s."]
            ]
          }
        },
        {
          title: "Ruta pr\u00E1ctica para transformar mejor una base",
          body: "Cuando abro un archivo desordenado, me sirve seguir una secuencia simple para no tocar cosas al azar y romper el dataset.",
          commandGroups: [
            {
              title: "1. Revisar estructura",
              description: "Mirar encabezados, tipos de dato, celdas vac\u00EDas y columnas repetidas antes de editar.",
              code: "Revisar columnas > detectar vac\u00EDos > validar formato"
            },
            {
              title: "2. Ordenar y filtrar",
              description: "Aplicar filtros y orden para detectar valores raros, inconsistentes o categor\u00EDas mal escritas.",
              code: "Filtro + orden asc/desc + revisi\u00F3n por categor\u00EDa"
            },
            {
              title: "3. Corregir y normalizar",
              description: "Usar buscar/reemplazar, cambiar formatos y alinear nombres de columnas o etiquetas.",
              code: "Ctrl + H + formatos + renombre de campos"
            },
            {
              title: "4. Quitar duplicados y exportar",
              description: "Eliminar repeticiones, validar el resultado final y guardar en el formato que mejor sirva.",
              code: "Quitar duplicados > revisar conteo > guardar CSV/XLSX"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Transformar datos no es un paso decorativo: es parte del an\u00E1lisis. Si la base queda clara, consistente y compatible, todo lo que viene despu\u00E9s se vuelve m\u00E1s confiable.",
          resourceLinks: [
            {
              label: "Ayuda oficial de Google Sheets",
              url: "https://support.google.com/docs/?hl=es#topic=1382883"
            },
            {
              label: "Ayuda oficial de Excel",
              url: "https://support.microsoft.com/es-es/excel"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Transformaci\u00F3n de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Docs Editors Help. (s. f.). <em>Centro de ayuda de Hojas de c\u00E1lculo de Google</em>. https://support.google.com/docs/?hl=es#topic=1382883",
          url: "https://support.google.com/docs/?hl=es#topic=1382883"
        },
        {
          citation:
            "Microsoft Support. (s. f.). <em>Excel help & learning</em>. https://support.microsoft.com/es-es/excel",
          url: "https://support.microsoft.com/es-es/excel"
        }
      ],
      relatedIds: [
        "choose-the-right-tool",
        "spreadsheet-functions-definitive-guide",
        "data-collection-and-structure-guide"
      ]
    },
    {
      id: "importing-data-into-sheets-and-excel",
      slug: "importar-datos-en-google-sheets-y-excel",
      title: "Importar datos en Google Sheets y Excel",
      summary: "Una guía práctica para recordar cómo cargar archivos CSV, cuándo conviene cada opción de importación y dónde buscar datasets públicos para practicar.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Google Sheets", "Excel", "CSV", "Importaci\u00F3n"],
      featured: true,
      contentSections: [
        {
          title: "Por qu\u00E9 importa saber importar bien",
          body: "Importar datos no es solo abrir un archivo. La forma en que cargo un CSV o conecto una fuente afecta separadores, fechas, números, fórmulas y hasta la estructura completa de la tabla. Si esta parte sale mal, el análisis parte torcido desde el minuto uno."
        },
        {
          title: "Qué conviene revisar antes de importar",
          body: "Antes de meter cualquier archivo a la planilla, me sirve revisar algunas cosas básicas para evitar errores tontos que después cuestan tiempo.",
          bestPractices: [
            "Confirmar si el archivo viene en CSV, XLSX o desde otra base de datos.",
            "Mirar qué separador usa: coma, punto y coma, tabulación u otro.",
            "Revisar si las fechas y números deberían convertirse automáticamente.",
            "Definir si quiero crear una hoja nueva, reemplazar una existente o agregar datos al final.",
            "Verificar si el archivo trae encabezados claros antes de importarlo."
          ]
        },
        {
          title: "Importar un CSV en Google Sheets",
          body: "En Google Sheets, la importación por menú es simple y muy útil cuando quiero practicar con datos públicos o cargar un archivo descargado desde la web.",
          commandGroups: [
            {
              title: "1. Abrir la ventana de importación",
              description: "Desde una hoja en blanco o ya creada, ir a `Archivo > Importar`.",
              code: "Archivo > Importar"
            },
            {
              title: "2. Subir el archivo",
              description: "Elegir la pestaña de carga, buscar el CSV y seleccionarlo desde el equipo.",
              code: "Cargar > Examinar"
            },
            {
              title: "3. Elegir ubicación de importación",
              description: "Definir si crearé una hoja nueva, insertaré una pestaña, reemplazaré algo o agregaré los datos a una hoja existente.",
              code: "Nueva hoja | Insertar hoja | Reemplazar hoja | Agregar a hoja actual"
            },
            {
              title: "4. Revisar separador y formato",
              description: "Sheets suele detectar el delimitador solo, pero también puedo fijarlo manualmente y decidir si convierte texto a números, fechas o fórmulas.",
              code: "Tipo de separador + Convertir texto en números, fechas y fórmulas"
            },
            {
              title: "5. Importar y revisar",
              description: "Una vez cargado, conviene revisar encabezados, tipos de dato y nombres de columnas antes de seguir.",
              code: "Importar datos"
            }
          ]
        },
        {
          title: "Importar un CSV en Excel",
          body: "En Excel el flujo cambia un poco, pero la lógica es la misma: cargar la fuente, revisar delimitadores y validar cómo se interpretan los campos.",
          commandGroups: [
            {
              title: "1. Ir a la pestaña Datos",
              description: "Desde el libro abierto, uso el menú de datos para traer el archivo externo.",
              code: "Datos > Obtener datos o Desde texto/CSV"
            },
            {
              title: "2. Seleccionar el archivo",
              description: "Busco el CSV desde el equipo y abro la vista previa de importación.",
              code: "Seleccionar archivo .csv"
            },
            {
              title: "3. Revisar origen y delimitador",
              description: "Excel suele proponer separador, codificación y tipos, pero conviene comprobarlos antes de cargar.",
              code: "Origen del archivo + Delimitador + Vista previa"
            },
            {
              title: "4. Elegir cómo cargar",
              description: "Puedo cargar directo a una hoja, a una tabla o entrar al editor para transformar antes de importar.",
              code: "Cargar | Cargar en... | Transformar datos"
            },
            {
              title: "5. Validar estructura final",
              description: "Después de cargar, reviso si los números quedaron como números, las fechas como fechas y los encabezados sin cortes raros.",
              code: "Revisión de tipos de dato"
            }
          ]
        },
        {
          title: "Opciones que vale la pena entender",
          body: "No siempre quiero hacer lo mismo con un archivo importado. Estas decisiones cambian bastante cómo queda la hoja al final.",
          comparisonTable: {
            columns: ["Decisión", "Qué permite", "Cuándo me sirve más"],
            rows: [
              ["Crear una hoja nueva", "Mantiene la importación separada del resto", "Cuando quiero conservar el archivo original sin tocar otras pestañas."],
              ["Insertar como hoja nueva", "Agrega los datos como otra pestaña dentro del mismo libro", "Cuando el dataset será parte de un análisis ya iniciado."],
              ["Reemplazar hoja actual", "Sobrescribe el contenido existente", "Cuando la hoja anterior ya no sirve y quiero actualizarla completa."],
              ["Agregar a hoja actual", "Suma filas o bloques sobre datos existentes", "Cuando construyo una base acumulativa o consolidada."],
              ["Transformar antes de cargar", "Permite limpiar o ajustar estructura antes de importar", "Cuando el archivo viene sucio o mal separado desde el origen."]
            ]
          }
        },
        {
          title: "Importar datos públicos para practicar",
          body: "Una buena forma de aprender esta parte es descargar un dataset público y practicar la importación. Un ejemplo útil es bajar un CSV de salud pública y cargarlo en una hoja nueva para revisar estructura, encabezados y tipos de dato.",
          example: "Un flujo simple sería: descargar el CSV desde una fuente pública confiable, importarlo a Google Sheets o Excel, revisar separadores, renombrar la hoja y recién después empezar a filtrar o transformar."
        },
        {
          title: "Dónde buscar datasets públicos",
          body: "Si quiero practicar o explorar fuentes reales, estos sitios me dejan partir con una base bastante sólida.",
          resourceLinks: [
            {
              label: "Google Cloud Public Datasets",
              url: "https://cloud.google.com/public-datasets"
            },
            {
              label: "Google Dataset Search",
              url: "https://datasetsearch.research.google.com/"
            },
            {
              label: "Kaggle Datasets",
              url: "https://www.kaggle.com/datasets"
            },
            {
              label: "BigQuery Public Datasets",
              url: "https://cloud.google.com/bigquery/public-data"
            },
            {
              label: "WHO Data Collections",
              url: "https://www.who.int/data/collections"
            },
            {
              label: "The Cancer Imaging Archive (TCIA)",
              url: "https://cloud.google.com/healthcare/docs/resources/public-datasets/tcia"
            },
            {
              label: "1000 Genomes",
              url: "https://cloud.google.com/life-sciences/docs/resources/public-datasets/1000-genomes"
            },
            {
              label: "NCEI / NOAA Climate Data",
              url: "https://www.ncei.noaa.gov/products"
            },
            {
              label: "NOAA Public Datasets Gallery",
              url: "https://www.climate.gov/maps-data/datasets"
            },
            {
              label: "UNICEF - State of the World's Children",
              url: "https://data.unicef.org/resources/dataset/sowc-2019-statistical-tables/"
            },
            {
              label: "BLS CPS Tables",
              url: "https://www.bls.gov/cps/tables.htm"
            },
            {
              label: "Stanford Open Policing Project",
              url: "https://openpolicing.stanford.edu/"
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Importar bien datos es parte de preparar bien el análisis. Si reviso separador, ubicación de carga, tipos de dato y fuente de origen antes de seguir, me ahorro muchos problemas después.",
          bestPractices: [
            "No asumir que el separador siempre viene bien detectado.",
            "Validar fechas, montos y encabezados apenas termine la carga.",
            "Preferir fuentes públicas confiables cuando practico con datos externos.",
            "Si el archivo viene sucio, transformar antes de analizar."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Importe datos de forma dinámica</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Importar datos de hojas de cálculo y bases de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Explorar conjuntos de datos públicos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-transformation-in-spreadsheets",
        "choose-the-right-tool",
        "data-collection-and-structure-guide"
      ]
    },
    {
      id: "data-cleaning-workflow-in-spreadsheets",
      slug: "limpieza-de-datos-en-hojas-de-calculo",
      title: "Limpieza de datos en hojas de cálculo",
      summary: "Una guía completa para reconocer datos sucios, evitar errores comunes, aplicar funciones útiles en Google Sheets o Excel y ordenar mejor el flujo de limpieza desde la importación hasta la validación final.",
      category: "Hojas de c\u00E1lculo",
      type: "Gu\u00EDa",
      level: "intermediate",
      readingTime: "11 min",
      updatedAt: "2026-08-03",
      tags: ["Limpieza", "Excel", "Google Sheets", "CSV"],
      featured: true,
      contentSections: [
        {
          title: "Qué son los datos sucios",
          body: "Cuando hablo de datos sucios, me refiero a datos incompletos, incorrectos, desactualizados, duplicados o irrelevantes para la pregunta que intento responder. El problema no es solo estético: si la base está sucia, el análisis se sesga, se vuelve lento o directamente lleva a decisiones malas."
        },
        {
          title: "Tipos de datos sucios que aparecen más seguido",
          body: "Estos son de los errores más comunes que conviene detectar apenas importo o reviso una base por primera vez.",
          comparisonTable: {
            columns: ["Tipo de dato sucio", "Qué significa", "Posibles causas", "Impacto en el negocio o análisis"],
            rows: [
              ["Duplicados", "El mismo registro aparece más de una vez.", "Carga por lotes, migraciones, ingreso manual repetido.", "Conteos inflados, sesgo en métricas y confusión al recuperar datos."],
              ["Desactualizados", "La información ya no refleja la realidad actual.", "Cambios de cargo, empresa, sistema o persona.", "Decisiones basadas en información vieja o equivocada."],
              ["Incompletos", "Faltan campos importantes.", "Mala recolección, omisiones, formularios mal diseñados.", "Baja productividad, errores de cálculo o imposibilidad de completar servicios."],
              ["Incorrectos o inexactos", "El dato existe, pero está mal.", "Error humano, información falsa, simulada o mal digitada.", "Insights imprecisos y pérdidas por decisiones mal informadas."],
              ["Incoherentes", "Se usa distinto formato para representar lo mismo.", "Errores de almacenamiento, transferencias o criterios no unificados.", "Problemas al segmentar, filtrar, agrupar o comparar."]
            ]
          }
        },
        {
          title: "Errores comunes que conviene evitar al limpiar",
          body: "La limpieza no falla solo por no saber funciones: muchas veces falla por hábitos poco prolijos o por no mirar el problema completo.",
          bestPractices: [
            "No dar por buenos nombres o palabras solo porque el corrector no marca error.",
            "Documentar las correcciones importantes para no repetir trabajo.",
            "Revisar si hay valores en la columna equivocada aunque el formato parezca válido.",
            "No pasar por alto vacíos o semanas faltantes si afectan cálculos acumulados.",
            "No limpiar solo un subconjunto si el problema puede estar repetido en toda la base.",
            "No perder de vista el objetivo del negocio mientras aparecen hallazgos secundarios.",
            "Corregir la causa raíz cuando el error viene del sistema o del flujo de carga.",
            "Hacer siempre una copia de respaldo antes de tocar la base original."
          ]
        },
        {
          title: "Funciones y herramientas que más sirven para limpiar",
          body: "En hojas de cálculo la limpieza mezcla fórmulas y opciones de menú. Estas son de las que más valor práctico devuelven.",
          comparisonTable: {
            columns: ["Herramienta o función", "Para qué sirve", "Ejemplo rápido"],
            rows: [
              ["Formato condicional", "Resalta vacíos, longitudes raras o valores fuera de regla.", "Detectar celdas vacías o IDs con longitud distinta."],
              ["Quitar duplicados", "Elimina repeticiones sin revisar fila por fila.", "Depurar miembros repetidos en una tabla de clientes."],
              ["Formato de fecha", "Unifica fechas para que se puedan ordenar y calcular bien.", "Pasar todo a formato fecha coherente."],
              ["Dividir texto en columnas", "Separa datos mezclados en una sola celda.", "Separar certificaciones o códigos compuestos."],
              ["CONTAR.SI", "Cuenta celdas que cumplen una condición.", "Detectar montos menores a 0 o mayores al rango esperado."],
              ["LARGO", "Devuelve la longitud de un texto o código.", "Revisar si todos los IDs tienen 6 caracteres."],
              ["IZQUIERDA / DERECHA / EXTRAE", "Extraen partes de un texto.", "Sacar prefijos, sufijos o códigos intermedios."],
              ["CONCATENAR / CONCAT / UNIRTEXTOS", "Recompone texto desde piezas separadas.", "Volver a unir fragmentos de un identificador."],
              ["ESPACIOS", "Quita espacios iniciales, finales o repetidos.", "Normalizar nombres o descripciones antes de agrupar."]
            ]
          }
        },
        {
          title: "Mini flujo paso a paso para limpiar mejor",
          body: "Cuando la base viene desordenada, me ayuda seguir un orden simple en vez de empezar a tocar cosas al azar.",
          commandGroups: [
            {
              title: "1. Importar o abrir una copia de trabajo",
              description: "Parto desde una copia, idealmente luego de revisar el CSV o archivo fuente.",
              code: "Duplicar archivo o pestaña antes de limpiar"
            },
            {
              title: "2. Resaltar vacíos y formatos raros",
              description: "Uso formato condicional para detectar celdas en blanco, longitudes fuera de regla o patrones extraños.",
              code: "Formato condicional + LARGO + reglas visuales"
            },
            {
              title: "3. Quitar duplicados y ordenar",
              description: "Elimino repeticiones, ordeno columnas clave y reviso si los valores siguen teniendo sentido.",
              code: "Datos > Quitar duplicados + ordenar por fecha, ID o categoría"
            },
            {
              title: "4. Corregir formatos y separar texto",
              description: "Unifico fechas, convierto números mal tipados y separo columnas compuestas cuando hace falta.",
              code: "Formato fecha + dividir texto en columnas"
            },
            {
              title: "5. Validar con funciones",
              description: "Apoyo la revisión con CONTAR.SI, LARGO, ESPACIOS, IZQUIERDA, DERECHA o EXTRAE para encontrar patrones o anomalías.",
              code: "CONTAR.SI + LARGO + ESPACIOS + IZQUIERDA/DERECHA/EXTRAE"
            },
            {
              title: "6. Documentar y guardar versión limpia",
              description: "Dejo registro de qué corregí y guardo una versión limpia con nombre claro.",
              code: "dataset_limpio_20260803_v01"
            }
          ]
        },
        {
          title: "Automatización: qué sí y qué no",
          body: "La automatización ahorra mucho tiempo, pero no todo se automatiza igual. Lo útil es automatizar lo repetitivo sin perder juicio analítico.",
          comparisonTable: {
            columns: ["Tarea", "¿Se puede automatizar?", "Comentario"],
            rows: [
              ["Comunicación con equipo y stakeholders", "No", "Sigue requiriendo criterio humano y conversación real."],
              ["Presentar resultados", "No", "El contexto y la narrativa no se delegan por completo."],
              ["Preparación y limpieza de datos", "Parcialmente", "Se pueden automatizar chequeos, formatos y detección de faltantes."],
              ["Exploración de datos", "Parcialmente", "Hay ayudas visuales automáticas, pero la lectura sigue siendo del analista."],
              ["Modelado de datos", "Sí, en varias etapas", "Existen herramientas que automatizan parte importante del flujo."]
            ]
          }
        },
        {
          title: "Cómo pensar la automatización en limpieza",
          body: "Una de las ideas más útiles es limpiar donde viven los datos. Si hago la corrección solo en una copia aislada, probablemente repetiré el mismo trabajo después. En cambio, si dejo validaciones, scripts o reglas donde se almacenan o cargan los datos, el beneficio se multiplica para todo el equipo."
        },
        {
          title: "Recordatorio rápido sobre archivos CSV",
          body: "Los `.csv` siguen siendo clave porque se entienden fácil, viajan bien entre herramientas y suelen ser el formato más común para importar o exportar datos antes de limpiar o analizar.",
          bestPractices: [
            "Verificar separador, codificación y encabezados apenas se descarga el archivo.",
            "Guardar una copia del original antes de modificarlo.",
            "Importarlo desde menú o carga directa según la plataforma.",
            "Validar si números, fechas o textos quedaron bien interpretados después de cargar."
          ]
        },
        {
          title: "Cómo se conecta con la importación",
          body: "Casi siempre la limpieza empieza en el momento de importar. Si detecto mal el separador, dejo fechas como texto o mezclo formatos desde la carga, después toda la limpieza se vuelve más lenta. Por eso importar bien también es parte del proceso de limpieza.",
          resourceLinks: [
            {
              label: "Nota relacionada: importar datos en Google Sheets y Excel",
              url: "#"
            },
            {
              label: "Microsoft Support - Top ten ways to clean your data",
              url: "https://support.microsoft.com/en-us/office/top-ten-ways-to-clean-your-data-2844b620-677c-47a7-ac3e-c2e157d1db19"
            },
            {
              label: "Google Workspace - tips para limpiar datos",
              url: "https://support.google.com/a/users/answer/9604139?hl=en#zippy="
            }
          ]
        },
        {
          title: "Para recordar",
          body: "Limpiar datos no es una tarea menor ni un detalle previo al análisis: es parte del análisis mismo. Si dejo pasar duplicados, vacíos, incoherencias o formatos mal cargados, todo lo que venga después pierde fuerza.",
          bestPractices: [
            "Respaldar antes de limpiar.",
            "Corregir la causa raíz cuando sea posible.",
            "Usar funciones y herramientas para acelerar, no para dejar de pensar.",
            "Mantener la limpieza conectada con el objetivo real del negocio."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>¿Qué son los datos sucios?</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Errores comunes en la limpieza de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Guía paso a paso: Funciones de limpieza de datos en hojas de cálculo</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Paso a paso: Optimizar el proceso de limpieza de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Automatización del flujo de trabajo</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Trabajar con archivos .csv</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-transformation-in-spreadsheets",
        "importing-data-into-sheets-and-excel",
        "spreadsheet-functions-definitive-guide"
      ]
    },
    {
      id: "data-ethics-privacy-and-open-data",
      slug: "etica-privacidad-y-datos-abiertos-en-analisis",
      title: "\u00C9tica, privacidad y datos abiertos en an\u00E1lisis",
      summary: "Trabajar con datos no es solo una tarea t\u00E9cnica. Tambi\u00E9n implica proteger identidades, ser transparente con el uso de la informaci\u00F3n y entender cu\u00E1ndo los datos pueden compartirse de forma abierta y cu\u00E1ndo no.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["\u00C9tica", "Privacidad", "PII", "Datos abiertos"],
      featured: true,
      contentSections: [
        {
          title: "Por qu\u00E9 este tema importa",
          body: "En anal\u00EDtica no basta con saber limpiar, consultar o visualizar datos. Tambi\u00E9n hay que entender qu\u00E9 informaci\u00F3n puede da\u00F1ar a una persona si se usa mal, qu\u00E9 reglas protegen esa informaci\u00F3n y qu\u00E9 tan transparente debe ser una organizaci\u00F3n cuando recolecta o reutiliza datos."
        },
        {
          title: "Conceptos base que conviene distinguir",
          body: "Hay varios t\u00E9rminos que suelen mezclarse. Dejarlos ordenados ayuda mucho a no usar 'anonimizar' como si fuera la \u00FAnica idea importante.",
          comparisonTable: {
            columns: ["Concepto", "Qu\u00E9 significa", "Por qu\u00E9 importa"],
            rows: [
              ["PII o informaci\u00F3n de identificaci\u00F3n personal", "Datos que por s\u00ED solos o combinados pueden identificar a una persona.", "Si se exponen, se pone en riesgo la privacidad y seguridad del individuo."],
              ["Anonimizaci\u00F3n", "Proceso de eliminar, enmascarar o transformar identificadores sensibles.", "Reduce el riesgo de identificar a alguien al analizar o compartir datos."],
              ["Desidentificaci\u00F3n", "Limpieza de una base para quitar informaci\u00F3n identificable directa.", "Se usa mucho en salud y finanzas, donde hay datos especialmente delicados."],
              ["Gobernanza de datos", "Reglas, roles y controles para decidir c\u00F3mo se usan, protegen y administran los datos.", "Asegura orden, trazabilidad y responsabilidad en el uso de la informaci\u00F3n."],
              ["Transparencia", "Claridad sobre qu\u00E9 datos se recogen, para qu\u00E9 se usar\u00E1n y con qui\u00E9n se compartir\u00E1n.", "Permite que las personas entiendan el tratamiento de su informaci\u00F3n."],
              ["Consentimiento", "Aprobaci\u00F3n informada del individuo sobre el uso de sus datos en ciertos contextos.", "Es clave cuando el uso de datos afecta derechos, privacidad o decisiones sensibles."]
            ]
          }
        },
        {
          title: "Qu\u00E9 datos suelen requerir protecci\u00F3n especial",
          body: "No toda columna es igual de sensible. Hay datos que, por su naturaleza, deber\u00EDan tratarse con mucho m\u00E1s cuidado desde el principio.",
          comparisonTable: {
            columns: ["Tipo de dato", "Ejemplos", "Por qu\u00E9 conviene anonimizar o proteger"],
            rows: [
              ["Identificadores directos", "Nombre, correo, tel\u00E9fono, direcci\u00F3n", "Permiten reconocer a una persona de forma inmediata."],
              ["Identificadores oficiales", "RUT, n\u00FAmero de seguridad social, licencia, matr\u00EDcula", "Pueden vincularse con registros legales o financieros."],
              ["Datos financieros", "N\u00FAmero de cuenta, tarjeta, historial de pagos", "Exponen a fraude o uso indebido econ\u00F3mico."],
              ["Datos de salud", "Historial m\u00E9dico, diagn\u00F3sticos, tratamientos", "Son altamente sensibles y requieren resguardo reforzado."],
              ["Datos digitales", "Direcci\u00F3n IP, fotos, geolocalizaci\u00F3n, actividad online", "Pueden perfilar comportamiento o rastrear identidad."]
            ]
          }
        },
        {
          title: "Tu rol como analista",
          body: "Muchas veces el analista no es quien anonimiza la base original, pero igual necesita reconocer d\u00F3nde hay riesgo. Si trabajo con una copia de prueba, una muestra o un extracto para desarrollo, me podr\u00EDan pedir anonimizar antes de tocar la informaci\u00F3n. Y aunque no lo haga directamente, s\u00ED me corresponde detectar qu\u00E9 campos no deber\u00EDan circular libremente."
        },
        {
          title: "\u00C9tica m\u00E1s all\u00E1 de la anonimización",
          body: "La parte \u00E9tica no se agota en esconder nombres. Tambi\u00E9n implica preguntarse si el uso de los datos es justo, proporcional y comprensible para la persona que los entreg\u00F3.",
          highlights: [
            {
              icon: "fa-solid fa-eye",
              title: "Transparencia",
              text: "La persona deber\u00EDa poder entender qu\u00E9 se recopila, con qu\u00E9 objetivo y por cu\u00E1nto tiempo."
            },
            {
              icon: "fa-solid fa-scale-balanced",
              title: "Uso justo",
              text: "No conviene pedir m\u00E1s datos de los necesarios ni reutilizarlos para fines que la persona no esperaba."
            },
            {
              icon: "fa-solid fa-shield-heart",
              title: "Protecci\u00F3n",
              text: "Los controles t\u00E9cnicos y organizacionales deber\u00EDan reducir filtraciones, abuso o accesos innecesarios."
            },
            {
              icon: "fa-solid fa-building-lock",
              title: "Gobernanza",
              text: "La organizaci\u00F3n tiene que definir responsables, permisos y reglas claras de uso."
            }
          ]
        },
        {
          title: "Qu\u00E9 son los datos abiertos",
          body: "Dentro de la \u00E9tica de datos, la apertura se refiere a dejar datos disponibles para que otros puedan acceder, reutilizar y redistribuirlos. Pero no basta con 'publicarlos': para que realmente sean datos abiertos deben cumplir condiciones de acceso, reutilizaci\u00F3n y participaci\u00F3n universal.",
          comparisonTable: {
            columns: ["Condici\u00F3n", "Qu\u00E9 exige"],
            rows: [
              ["Disponibilidad y acceso", "El conjunto debe estar accesible al p\u00FAblico de forma completa o razonablemente utilizable."],
              ["Reutilizaci\u00F3n y redistribuci\u00F3n", "La licencia o condiciones deben permitir volver a usar y compartir los datos."],
              ["Participaci\u00F3n universal", "Cualquier persona deber\u00EDa poder utilizarlos sin barreras arbitrarias."]
            ]
          }
        },
        {
          title: "El debate real: apertura vs privacidad",
          body: "Los datos abiertos pueden impulsar investigaci\u00F3n, colaboraci\u00F3n y mejores decisiones, pero no cualquier dato deber\u00EDa abrirse sin filtros. El punto importante es equilibrar utilidad p\u00FAblica con protecci\u00F3n individual, sobre todo cuando existen datos de terceros o informaci\u00F3n que podr\u00EDa volver identificable a una persona."
        },
        {
          title: "Una regla simple para recordar",
          body: "Si un dataset puede identificar, perfilar o exponer a alguien, primero pienso en protecci\u00F3n, minimizaci\u00F3n y transparencia. Si un dataset puede compartirse de forma abierta, deber\u00EDa hacerlo con criterios claros, sin comprometer privacidad ni seguridad.",
          bestPractices: [
            "No pedir ni conservar m\u00E1s datos de los necesarios.",
            "Separar identificadores personales del resto del an\u00E1lisis cuando sea posible.",
            "Explicar de forma clara para qu\u00E9 se recolecta la informaci\u00F3n.",
            "Evaluar siempre si abrir un dataset puede da\u00F1ar a las personas representadas."
          ]
        },
        {
          title: "Recursos de datos abiertos para explorar",
          body: "Si quiero practicar b\u00FAsqueda de datasets abiertos, estos recursos son un muy buen punto de partida. Igual conviene evaluarlos siempre con criterio antes de reutilizarlos.",
          resourceLinks: [
            {
              label: "Data.gov - Sitio de datos del Gobierno de EE. UU.",
              url: "https://www.data.gov/"
            },
            {
              label: "U.S. Census Bureau - Data",
              url: "https://www.census.gov/data.html"
            },
            {
              label: "Open Data Network",
              url: "https://www.opendatanetwork.com/"
            },
            {
              label: "Google Cloud Public Datasets",
              url: "https://cloud.google.com/datasets"
            },
            {
              label: "Google Dataset Search",
              url: "https://datasetsearch.research.google.com/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Anonimizaci\u00F3n de datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>El debate sobre los datos abiertos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Recursos para datos abiertos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Data.gov. (s. f.). <em>Home</em>. https://www.data.gov/",
          url: "https://www.data.gov/"
        },
        {
          citation:
            "U.S. Census Bureau. (s. f.). <em>Data</em>. https://www.census.gov/data.html",
          url: "https://www.census.gov/data.html"
        },
        {
          citation:
            "Google Cloud. (s. f.). <em>Public datasets</em>. https://cloud.google.com/datasets",
          url: "https://cloud.google.com/datasets"
        }
      ],
      relatedIds: [
        "data-collection-and-structure-guide",
        "structured-problem-solving",
        "qualitative-quantitative-and-data-scale"
      ]
    },
    {
      id: "metadata-and-data-origin-context",
      slug: "metadatos-y-origen-de-los-datos",
      title: "Metadatos y origen de los datos",
      summary: "Los metadatos ayudan a entender de d\u00F3nde vienen los datos, c\u00F3mo fueron creados, qui\u00E9n los modific\u00F3 y qu\u00E9 tan confiables son para un an\u00E1lisis.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "9 min",
      updatedAt: "2026-08-03",
      tags: ["Metadatos", "Contexto", "Confiabilidad", "Origen"],
      featured: true,
      contentSections: [
        {
          title: "Por qu\u00E9 no basta con mirar solo los datos",
          body: "Una tabla puede verse ordenada y aun as\u00ED no decirme lo suficiente. Para analizar con m\u00E1s seguridad tambi\u00E9n necesito saber de d\u00F3nde sale, cu\u00E1ndo se gener\u00F3, qui\u00E9n la modific\u00F3 y bajo qu\u00E9 contexto fue construida. Ah\u00ED es donde entran los metadatos."
        },
        {
          title: "Qu\u00E9 son los metadatos",
          body: "Los metadatos son datos sobre los datos. En vez de describir directamente el contenido de una fila o una tabla, describen el archivo, el dataset o el recurso donde esos datos viven. En la pr\u00E1ctica, ayudan a responder el qui\u00E9n, qu\u00E9, cu\u00E1ndo, d\u00F3nde, por qu\u00E9 y c\u00F3mo de la informaci\u00F3n."
        },
        {
          title: "Qu\u00E9 tipo de informaci\u00F3n suelen aportar",
          body: "No todos los metadatos se ven igual, pero suele haber ciertos elementos que aparecen una y otra vez y que me ayudan mucho a contextualizar el recurso que estoy usando.",
          comparisonTable: {
            columns: ["Elemento de metadato", "Qu\u00E9 me ayuda a responder", "Ejemplo"],
            rows: [
              ["Tipo de archivo o documento", "\u00BFQu\u00E9 estoy mirando exactamente?", "CSV, XLSX, imagen, correo, PDF"],
              ["Fecha, hora y creador", "\u00BFCu\u00E1ndo se cre\u00F3 y qui\u00E9n lo hizo?", "Creado el 12-05-2026 por equipo BI"],
              ["T\u00EDtulo y descripci\u00F3n", "\u00BFQu\u00E9 contiene o representa?", "Ventas mensuales por sucursal"],
              ["Geolocalizaci\u00F3n", "\u00BFD\u00F3nde se gener\u00F3 o captur\u00F3?", "Foto tomada en Coquimbo"],
              ["Etiquetas y categor\u00EDas", "\u00BFC\u00F3mo est\u00E1 clasificado?", "Clientes, marketing, encuesta"],
              ["\u00DAltima modificaci\u00F3n", "\u00BFQui\u00E9n toc\u00F3 el archivo por \u00FAltima vez y cu\u00E1ndo?", "Modificado ayer por analista senior"],
              ["Permisos y acceso", "\u00BFQui\u00E9n puede verlo o editarlo?", "Solo lectura para analistas"]
            ]
          }
        },
        {
          title: "Por qu\u00E9 importan tanto en an\u00E1lisis",
          body: "Los metadatos no solo sirven para ordenar archivos. Tambi\u00E9n refuerzan la confiabilidad del an\u00E1lisis porque ayudan a verificar si estoy usando la versi\u00F3n correcta, si la fuente es pertinente y si la informaci\u00F3n sigue vigente.",
          highlights: [
            {
              icon: "fa-solid fa-shield-check",
              title: "Confiabilidad",
              text: "Ayudan a confirmar si los datos son exactos, precisos, pertinentes y oportunos para el problema."
            },
            {
              icon: "fa-solid fa-folder-tree",
              title: "Contexto",
              text: "Dan historia al dataset y evitan usar una tabla fuera del escenario para el que fue creada."
            },
            {
              icon: "fa-solid fa-arrows-rotate",
              title: "Reutilizaci\u00F3n",
              text: "Hacen mucho m\u00E1s f\u00E1cil volver a usar datos sin partir desde cero cada vez."
            },
            {
              icon: "fa-solid fa-users-gear",
              title: "Comunicaci\u00F3n",
              text: "Permiten que distintas personas entiendan el mismo recurso con criterios m\u00E1s uniformes."
            }
          ]
        },
        {
          title: "Metadatos en cosas cotidianas",
          body: "Una forma simple de aterrizar este concepto es mirar ejemplos que aparecen todos los d\u00EDas, incluso fuera del trabajo anal\u00EDtico.",
          comparisonTable: {
            columns: ["Recurso", "Metadatos comunes", "Qu\u00E9 me ense\u00F1a"],
            rows: [
              ["Fotos", "Fecha, hora, dispositivo, tama\u00F1o, geolocalizaci\u00F3n", "Que el archivo tiene contexto de captura, no solo imagen."],
              ["Correos electr\u00F3nicos", "Asunto, remitente, destinatario, fecha, servidores, IP", "Que el mensaje tiene historia t\u00E9cnica adem\u00E1s del texto visible."],
              ["Hojas de c\u00E1lculo", "T\u00EDtulo, autor, fecha de creaci\u00F3n, pesta\u00F1as, columnas, permisos", "Que un dataset tambi\u00E9n necesita trazabilidad y estructura."],
              ["P\u00E1ginas web", "Meta t\u00EDtulo, meta descripci\u00F3n, categor\u00EDas, autor", "Que incluso lo que muestra Google al buscar ya es metadato."],
              ["Libros o audiolibros", "Autor, editorial, fecha, idioma, narrador, duraci\u00F3n", "Que los metadatos no son solo digitales ni exclusivos de bases de datos."]
            ]
          }
        },
        {
          title: "Metadatos y origen confiable",
          body: "La parte que m\u00E1s me sirve como analista es que los metadatos cuentan la historia del dato. Si un archivo no dice de qu\u00E9 periodo viene, qui\u00E9n lo construy\u00F3 o cu\u00E1ndo fue actualizado, mi confianza baja mucho. En cambio, cuando esa historia est\u00E1 clara, puedo defender mejor por qu\u00E9 lo uso y cu\u00E1les son sus l\u00EDmites."
        },
        {
          title: "Repositorios de metadatos",
          body: "Cuando la organizaci\u00F3n trabaja con muchas fuentes, los metadatos no pueden quedar repartidos al azar. Para eso existen los repositorios de metadatos: bases especializadas que almacenan y gestionan esa informaci\u00F3n de forma estructurada y accesible.",
          bestPractices: [
            "Describen de d\u00F3nde provienen los datos y c\u00F3mo est\u00E1n organizados.",
            "Ayudan a localizar tablas, archivos y recursos m\u00E1s r\u00E1pido.",
            "Facilitan comparar fuentes sin revisar archivo por archivo manualmente.",
            "Permiten ver estado, ubicaci\u00F3n, estructura y accesos sobre los datos."
          ]
        },
        {
          title: "Qu\u00E9 pasa con datos externos o de terceros",
          body: "Si uso datos de segúnda fuente o de terceros, los metadatos se vuelven todav\u00EDa m\u00E1s importantes. Ah\u00ED necesito confirmar consistencia, permisos, disponibilidad y procedencia antes de asumir que la fuente es buena solo porque viene de fuera.",
          example: "Si recibo un dataset externo sin fecha de actualizaci\u00F3n, sin descripci\u00F3n metodol\u00F3gica y sin claridad de permisos, lo m\u00E1s prudente es frenar y validar antes de usarlo."
        },
        {
          title: "Para recordar",
          body: "Los metadatos dan contexto, historia y seguridad. No reemplazan a los datos, pero s\u00ED ayudan a entender si esos datos merecen confianza y c\u00F3mo deber\u00EDan usarse dentro del an\u00E1lisis.",
          resourceLinks: [
            {
              label: "Nota relacionada: cómo seleccionar, recopilar y estructurar los datos correctos",
              url: "#"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Los metadatos son tan importantes como los propios datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Repositorios de metadatos y metadatos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-collection-and-structure-guide",
        "data-ethics-privacy-and-open-data",
        "structured-problem-solving"
      ]
    },
    {
      id: "data-security-access-and-file-organization",
      slug: "seguridad-acceso-y-organizacion-de-archivos",
      title: "Seguridad, acceso y organización de archivos",
      summary: "En análisis no basta con proteger los datos: también hay que hacerlos accesibles para trabajar. Esta nota resume cómo equilibrar seguridad, colaboración, control de versiones y orden de archivos.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Seguridad", "Versionado", "Organización", "Colaboración"],
      featured: true,
      contentSections: [
        {
          title: "El equilibrio real",
          body: "La seguridad de los datos busca impedir accesos no autorizados o corrupción de la información, pero el análisis también necesita velocidad, colaboración y acceso oportuno. El punto no es elegir entre proteger o usar: es encontrar un equilibrio razonable entre ambas cosas."
        },
        {
          title: "Qué significa proteger bien los datos",
          body: "Cuando hablo de seguridad, no solo pienso en hackers o filtraciones grandes. También pienso en permisos mal asignados, archivos compartidos fuera del equipo, sobrescrituras accidentales o versiones incorrectas circulando por correo o carpetas sueltas."
        },
        {
          title: "Medidas de seguridad que conviene conocer",
          body: "Como analista junior probablemente no diseñaré toda la arquitectura de seguridad, pero sí me conviene entender algunas de las medidas que suelen aparecer en entornos reales.",
          comparisonTable: {
            columns: ["Medida", "Qué hace", "Por qué importa"],
            rows: [
              ["Encriptación", "Transforma los datos con un algoritmo y una clave para que no sean legibles sin autorización.", "Protege información sensible incluso si alguien accede al archivo o tránsito de datos."],
              ["Tokenización", "Reemplaza datos sensibles por tokens y guarda el valor original aparte.", "Reduce el impacto de una filtración porque el dato real no viaja ni se expone completo."],
              ["Control de accesos", "Define quién puede ver, editar, descargar o compartir un recurso.", "Evita que todo el mundo tenga más permisos de los necesarios."],
              ["Autenticación adicional", "Agrega capas como MFA o dispositivos de verificación.", "Disminuye el riesgo de accesos indebidos por robo de credenciales."]
            ]
          }
        },
        {
          title: "Lo que sí puedo hacer directamente como analista",
          body: "Aunque no configure toda la seguridad del sistema, sí hay prácticas concretas que ayudan mucho a mantener el equilibrio correcto.",
          bestPractices: [
            "Compartir solo con personas que realmente necesitan acceso.",
            "Evitar mandar archivos sensibles por canales informales o sin protección.",
            "Trabajar sobre copias controladas cuando la base original es crítica.",
            "No descargar ni duplicar datasets sensibles sin justificación clara.",
            "Revisar permisos antes de compartir dashboards, sheets o carpetas."
          ]
        },
        {
          title: "Control de versiones: la seguridad también es orden",
          body: "Una parte muy importante del equilibrio entre seguridad y análisis es saber qué versión del archivo es la correcta. El control de versiones permite registrar quién cambió qué, cuándo y por qué, y evita que el equipo se pise o sobrescriba trabajo sin darse cuenta.",
          highlights: [
            {
              icon: "fa-solid fa-clock-rotate-left",
              title: "Trazabilidad",
              text: "Permite volver atrás o entender por qué un archivo terminó como terminó."
            },
            {
              icon: "fa-solid fa-users",
              title: "Colaboración",
              text: "Ayuda a que varias personas trabajen sobre el mismo proyecto sin desorden total."
            },
            {
              icon: "fa-solid fa-file-circle-check",
              title: "Menos errores",
              text: "Disminuye el riesgo de editar una versión antigua o equivocada."
            },
            {
              icon: "fa-solid fa-flask",
              title: "Experimentación",
              text: "Hace más fácil probar ideas nuevas sin miedo a perder el trabajo anterior."
            }
          ]
        },
        {
          title: "Convenciones para nombrar archivos",
          body: "Un archivo bien nombrado ya ahorra tiempo antes de abrirlo. Si el nombre es coherente, puedo reconocer rápido qué contiene, de cuándo es y en qué versión va.",
          comparisonTable: {
            columns: ["Elemento", "Qué conviene incluir", "Ejemplo"],
            rows: [
              ["Nombre del proyecto o contenido", "Una descripción breve y clara de lo que contiene.", "SalesReport"],
              ["Fecha", "Idealmente en formato AAAAMMDD para ordenar mejor.", "20231125"],
              ["Versión", "Número de revisión con cero inicial cuando haga falta.", "v02"],
              ["Estilo consistente", "Mismo orden y separadores en todo el equipo.", "SalesReport_20231125_v02"]
            ]
          }
        },
        {
          title: "Cómo organizar carpetas sin perderse",
          body: "Además del nombre del archivo, la jerarquía de carpetas también importa mucho. Una estructura lógica permite encontrar más rápido lo que está en curso, lo que ya está cerrado y lo que conviene archivar.",
          commandGroups: [
            {
              title: "1. Separar por nivel de trabajo",
              description: "Mantener carpetas distintas para insumos, trabajo en proceso, entregables y archivos históricos.",
              code: "/datos_fuente\n/trabajo\n/entregables\n/archivo"
            },
            {
              title: "2. Agrupar por proyecto o tema",
              description: "Dentro de cada nivel, separar por proyecto, cliente o línea de análisis.",
              code: "/proyecto_a\n/proyecto_b\n/proyecto_c"
            },
            {
              title: "3. Documentar la convención",
              description: "Dejar un archivo guía para que el equipo use la misma estructura y nomenclatura.",
              code: "README_nombres_y_carpetas.txt"
            },
            {
              title: "4. Archivar lo cerrado",
              description: "Mover versiones viejas o finalizadas a un espacio separado para no contaminar el trabajo activo.",
              code: "/archivo/2026/"
            }
          ]
        },
        {
          title: "Herramientas para compartir sin desorden",
          body: "Para coordinar trabajo, plataformas como Slack o incluso un Discord privado pueden servir como canal operativo del equipo, siempre que la organización lo permita y no se usen como sustituto improvisado de un sistema formal para datos sensibles. En espacios así puede ayudar tener roles, canales separados, bots de moderación y reglas claras de acceso para reducir errores humanos o filtraciones innecesarias.",
          comparisonTable: {
            columns: ["Herramienta o práctica", "Cuándo aporta", "Qué cuidado tener"],
            rows: [
              ["Slack", "Cuando el equipo necesita coordinación rápida, historial de decisiones y canales por proyecto.", "Evitar compartir datos sensibles sin controles o permisos adecuados."],
              ["Discord privado", "Puede servir en equipos pequeños o comunidades técnicas cerradas con buena organización.", "Usarlo solo si está aprobado y con roles, permisos y moderación bien definidos."],
              ["Bots de moderación o control", "Ayudan a ordenar accesos, alertas y limpieza de canales.", "No reemplazan política de seguridad ni control formal de datos."],
              ["Repositorios y drives controlados", "Sirven como fuente oficial de archivos y versiones.", "Conviene centralizar ahí lo importante y no dejarlo perdido en chats."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "La seguridad no debería frenar el análisis, pero el análisis tampoco debería saltarse la seguridad. Cuando nombro bien, organizo bien, versiono bien y comparto con criterio, le facilito la vida al equipo y bajo varios riesgos a la vez.",
          bestPractices: [
            "Definir convenciones de nombres al inicio del proyecto.",
            "Separar trabajo activo, entregables y archivo histórico.",
            "Centralizar versiones para no depender de archivos sueltos en chats o correos.",
            "Usar herramientas de colaboración con permisos, roles y reglas claras."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Equilibrio entre seguridad y análisis</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Pautas para la organización de archivos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-ethics-privacy-and-open-data",
        "metadata-and-data-origin-context",
        "importing-data-into-sheets-and-excel"
      ]
    },
    {
      id: "data-integrity-alignment-and-common-problems",
      slug: "integridad-conformidad-y-problemas-comunes-de-datos",
      title: "Integridad, conformidad y problemas comunes de datos",
      summary: "Antes de analizar, conviene revisar si los datos son válidos, consistentes y realmente útiles para el objetivo del negocio. Esta nota resume restricciones, problemas típicos y cómo decidir qué hacer con bases incompletas o erróneas.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Integridad", "Conformidad", "Validación", "Objetivos"],
      featured: true,
      contentSections: [
        {
          title: "La idea base",
          body: "Un buen análisis depende de que los datos estén limpios, completos y bien alineados con la pregunta que quiero responder. Si algo falla en formato, tipo, cobertura o contexto, la conclusión puede salir elegante, pero incorrecta."
        },
        {
          title: "Integridad y conformidad: por qué importan tanto",
          body: "La integridad de los datos se pone en juego cuando varias personas, archivos o sistemas tocan la misma información. La conformidad aparece cuando todos trabajan con reglas y formatos comunes. Si uno usa fechas como `10/12/20` pensando en diciembre y otro las lee como octubre, todo el análisis puede quedar comprometido.",
          comparisonTable: {
            columns: ["Riesgo", "Qué puede pasar", "Por qué afecta el análisis"],
            rows: [
              ["Formato inconsistente", "Una fecha se interpreta de forma distinta según el país o sistema.", "Las conclusiones temporales quedan equivocadas."],
              ["Replicación incompleta", "Se copia solo parte de un dataset y se valida como si fuera completo.", "Termino trabajando con una versión parcial sin saberlo."],
              ["Transferencia mal tipada", "Una fecha o número entra como texto al importar.", "Los filtros, cálculos y cruces fallan o se distorsionan."],
              ["Manipulación incorrecta", "Se elimina un registro pensando que era duplicado y no lo era.", "El dataset pierde integridad y deja de estar completo."]
            ]
          }
        },
        {
          title: "Restricciones que ayudan a validar la base",
          body: "Las restricciones de datos son reglas simples que ayudan a decidir si un valor es válido o no antes de empezar a sacar conclusiones.",
          comparisonTable: {
            columns: ["Restricción", "Qué exige", "Ejemplo simple"],
            rows: [
              ["Tipo de dato", "El valor debe corresponder al tipo esperado.", "Si la columna es fecha, un `30` suelto no sirve."],
              ["Rango", "El valor debe caer entre un mínimo y un máximo válidos.", "Si el rango es 10-20, un `30` es inválido."],
              ["Obligatorio", "El campo no puede venir vacío.", "Si la edad es requerida, no debería quedar en blanco."],
              ["Único", "No puede repetirse dentro del contexto definido.", "Dos clientes no deberían compartir el mismo ID."],
              ["Patrón o regex", "Debe respetar una forma específica.", "Un teléfono debe seguir un patrón esperado."],
              ["Validación cruzada", "Dos o más campos deben cumplir una relación lógica.", "Varios porcentajes deberían sumar 100%."],
              ["Clave primaria", "El valor debe ser único por fila en una tabla.", "No puede haber dos filas con el mismo `customer_id`."],
              ["Clave foránea", "El valor debe existir en otra tabla relacionada.", "El estado debe existir en la tabla maestra de estados."],
              ["Membresía en conjunto", "El valor debe estar dentro de opciones permitidas.", "`Sí`, `No` o `No aplica`."],
              ["Exactitud", "El dato debe representar correctamente la realidad.", "Un código postal debe coincidir con la calle."],
              ["Exhaustividad", "La base debe contener todos los componentes necesarios.", "Si pido color de pelo y ojos, ambos deberían existir."],
              ["Coherencia", "El mismo dato debería verse igual en distintas fuentes.", "La dirección del cliente debería coincidir entre ventas y soporte."]
            ]
          }
        },
        {
          title: "Cómo se ve eso en Excel versus SQL/Python",
          body: "La misma idea de validación aparece en varias herramientas, pero cambia la forma de expresarla. En hojas de cálculo hablo más de formato visible; en SQL o Python hablo más de tipos de dato y restricciones lógicas.",
          comparisonTable: {
            columns: ["Concepto", "Excel / Google Sheets", "SQL / Python", "Qué conviene recordar"],
            rows: [
              ["Número", "Formato número, moneda, porcentaje", "`INT`, `FLOAT`, `DECIMAL`", "No basta con verse como número: debe comportarse como número."],
              ["Texto", "Texto o formato general", "`VARCHAR`, `TEXT`, `STRING`, `str`", "Sirve para nombres, códigos o etiquetas."],
              ["Fecha", "Formato fecha", "`DATE`, `DATETIME`, `TIMESTAMP`", "Si entra como texto, después da problemas en filtros y diferencias de tiempo."],
              ["Booleano", "Casillas, `VERDADERO/FALSO`, validaciones", "`BOOLEAN`, `bool`", "Muy útil para estados, banderas o reglas lógicas."],
              ["Valor nulo", "Celda vacía o incompleta", "`NULL`, `None`, `NaN`", "No es lo mismo vacío que cero o texto en blanco."]
            ]
          }
        },
        {
          title: "Qué hacer cuando falta información o algo anda mal",
          body: "No siempre voy a tener la base ideal. A veces faltan datos, hay pocos registros o directamente llegaron mal. En vez de improvisar, me sirve pensar en respuestas posibles según el problema.",
          comparisonTable: {
            columns: ["Problema", "Posibles soluciones", "Ejemplo de aplicación"],
            rows: [
              ["No hay datos", "Hacer un análisis preliminar con muestra pequeña o usar datos proxy si el caso lo permite.", "Si faltan datos de una ciudad, usar otra con tamaño y demografía similares como referencia temporal."],
              ["Muy pocos datos", "Combinar datos reales con proxy o acotar el análisis a lo que sí representa bien.", "Si faltan jóvenes de 18 a 24, informar que la conclusión aplica desde 25 años en adelante."],
              ["Datos erróneos", "Recomunicar requisitos, corregir el error en origen o ignorar solo si no introduce sesgo importante.", "Si un cálculo falla por una condición booleana mal escrita, corregir la lógica, no solo el resultado final."]
            ]
          }
        },
        {
          title: "El valor de los datos proxy",
          body: "Los datos proxy pueden salvar un análisis cuando no existe el dato ideal, pero no son una licencia para inventar equivalencias débiles. Solo sirven si su comportamiento realmente se parece al fenómeno que quiero estudiar y si dejo clara la limitación en el informe."
        },
        {
          title: "Objetivo del negocio y datos bien alineados",
          body: "No basta con que la base esté limpia: también tiene que servirle a la pregunta. A veces la alineación es directa; otras veces necesito limpiar más, agregar restricciones o reconocer que solo un subconjunto del dataset responde bien al objetivo.",
          comparisonTable: {
            columns: ["Escenario", "Qué reviso", "Decisión correcta"],
            rows: [
              ["Los datos responden bien al objetivo", "Confirmo que están limpios y contienen la variable necesaria.", "Analizo directamente con confianza razonable."],
              ["La base sirve, pero requiere depuración", "Veo vacíos, nombres inconsistentes o empresas incompletas.", "Limpio antes de analizar para evitar conteos o agrupaciones erróneas."],
              ["La base solo se ajusta parcialmente", "Descubro nuevas variables que cambian la interpretación.", "Restrinjo el análisis o redefino mejor el objetivo para no forzar la conclusión."]
            ]
          }
        },
        {
          title: "Para recordar",
          body: "Si los datos están limpios, bien tipados y alineados con el objetivo, el análisis gana precisión. Si no lo están, lo más profesional no es seguir igual, sino declarar la limitación, corregir el origen o ajustar el alcance.",
          bestPractices: [
            "Revisar formato, tipo y consistencia antes de analizar.",
            "No asumir que una base limpia ya está alineada con el objetivo.",
            "Usar datos proxy solo cuando la sustitución tenga sentido analítico.",
            "Si descubro una nueva variable relevante, ajustar la restricción antes de concluir."
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Más información sobre integridad y conformidad de los datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Objetivos y datos bien alineados</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Cuando encuentre un problema con sus datos</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "data-collection-and-structure-guide",
        "data-transformation-in-spreadsheets",
        "metadata-and-data-origin-context"
      ]
    },
    {
      id: "sample-size-confidence-and-basic-inference",
      slug: "tamano-de-muestra-confianza-e-inferencia-basica",
      title: "Tamaño de muestra, confianza e inferencia básica",
      summary: "Una guía para recordar cómo pensar población, muestra, margen de error, nivel de confianza y por qué estas decisiones cambian según el problema del negocio.",
      category: "Fundamentos",
      type: "Gu\u00EDa",
      level: "basic",
      readingTime: "10 min",
      updatedAt: "2026-08-03",
      tags: ["Muestra", "Confianza", "Inferencia", "Estadística"],
      featured: true,
      contentSections: [
        {
          title: "Por qué esta parte es tan útil",
          body: "El cálculo del tamaño de muestra me gusta porque traduce una intuición muy práctica a algo medible: cuántos casos necesito observar para que el resultado represente razonablemente a una población más grande. Eso ayuda mucho a no sacar conclusiones apresuradas con muy pocos datos."
        },
        {
          title: "Conceptos base que conviene tener claros",
          body: "Antes de abrir una calculadora de muestra, hay varios términos que necesito distinguir para no confundir precisión con seguridad estadística.",
          comparisonTable: {
            columns: ["Concepto", "Qué significa", "Idea rápida"],
            rows: [
              ["Población", "El universo total que me interesa estudiar.", "Todos los clientes, empleados, votantes o registros posibles."],
              ["Muestra", "Subconjunto de la población que usaré para analizar.", "Una parte representativa del total."],
              ["Nivel de confianza", "Probabilidad de que la muestra refleje adecuadamente a la población.", "95% es el valor más usado."],
              ["Margen de error", "Diferencia máxima esperada entre la muestra y la población real.", "Mientras más pequeño, más exigente es el estudio."],
              ["Intervalo de confianza", "Rango probable donde caería el valor real de la población.", "Resultado estimado ± margen de error."],
              ["Tasa de respuesta", "Porcentaje esperado de personas que efectivamente responderán.", "Si responden pocos, debo invitar a más."],
              ["Significancia estadística", "Señal de que un resultado difícilmente se debe al azar.", "Mientras más robusta, menos probable que sea coincidencia."]
            ]
          }
        },
        {
          title: "Qué hace una calculadora de tamaño de muestra",
          body: "Una calculadora de muestra no adivina el mejor número de casos: lo estima a partir de la población, el nivel de confianza y el margen de error que estoy dispuesto a aceptar. El resultado suele ser el mínimo recomendado para alcanzar ese estándar."
        },
        {
          title: "Cómo leer ese resultado",
          body: "Si la calculadora me dice que necesito 100 respuestas, eso no significa que tenga que enviar la encuesta solo a 100 personas. Si espero una tasa de respuesta de 10%, en realidad tendría que invitar a cerca de 1.000 para alcanzar esas 100 respuestas válidas.",
          example: "Tamaño de muestra necesario: 100. Tasa de respuesta estimada: 10%. Encuestas a enviar: 100 / 0,10 = 1.000."
        },
        {
          title: "Reglas prácticas que ayudan",
          body: "No reemplazan el análisis estadístico completo, pero sirven mucho como orientación rápida cuando todavía estoy dimensionando el estudio.",
          bestPractices: [
            "Evitar muestras menores a 30 como referencia general muy básica.",
            "Usar 95% de confianza cuando necesito un estándar común y defendible.",
            "Aumentar la muestra si quiero bajar el margen de error.",
            "Aumentar la muestra si lo que está en juego exige más precisión.",
            "No olvidar el costo operativo: más precisión casi siempre cuesta más tiempo o dinero."
          ]
        },
        {
          title: "El tamaño de muestra depende del problema",
          body: "No todos los proyectos necesitan el mismo nivel de precisión. Una muestra que sirve para explorar opiniones generales puede quedarse corta si la decisión involucra riesgos altos, inversión grande o consecuencias públicas importantes.",
          comparisonTable: {
            columns: ["Escenario", "Muestra más pequeña podría bastar", "Muestra mayor sería más razonable"],
            rows: [
              ["Opinión general de vecinos sobre una biblioteca", "Sí, si la idea es explorar tendencias iniciales.", "No siempre hace falta una muestra enorme si el riesgo de error es bajo."],
              ["Votación o decisión de financiamiento", "No conviene confiar demasiado en una muestra pequeña.", "Sí, porque un error cambia una decisión importante."],
              ["Preferencias de consumidores", "A veces una muestra moderada basta para detectar señales útiles.", "Se amplía si la segmentación o el costo del error es alto."],
              ["Seguridad o eficacia de un tratamiento", "Generalmente no.", "Sí, porque el estándar de evidencia debe ser bastante más riguroso."]
            ]
          }
        },
        {
          title: "Tipos de muestra que vale la pena reconocer",
          body: "Además del tamaño, también importa cómo se elige la muestra. Una muestra grande pero mal seleccionada puede seguir siendo poco representativa.",
          comparisonTable: {
            columns: ["Tipo de muestra", "Qué hace", "Cuándo ayuda"],
            rows: [
              ["Aleatoria simple", "Da a todos la misma probabilidad de ser elegidos.", "Cuando la población es homogénea o tengo acceso parejo."],
              ["Estratificada", "Divide la población en grupos y toma muestra de cada uno.", "Cuando quiero representar bien edades, zonas o segmentos."],
              ["Por conveniencia", "Usa los casos más fáciles de obtener.", "Sirve para exploración, pero no conviene sobrerrepresentarla como definitiva."],
              ["Sistemática", "Selecciona casos siguiendo una regla fija.", "Útil cuando la base está ordenada y quiero repartir selección."]
            ]
          }
        },
        {
          title: "Dónde entran Z, t de Student y comparación de medias",
          body: "Si después quiero pasar desde la muestra a una inferencia más formal, aparecen distribuciones y pruebas estadísticas. No hace falta memorizar todo ahora, pero sí ubicar para qué sirven.",
          comparisonTable: {
            columns: ["Concepto", "Para qué sirve", "Cuándo suele aparecer"],
            rows: [
              ["Valor Z", "Se usa en intervalos y pruebas cuando la muestra es grande o la desviación poblacional es conocida.", "Cálculos de confianza y contraste con normal aproximada."],
              ["t de Student", "Sirve cuando la muestra es más pequeña y la desviación poblacional no se conoce.", "Comparación de medias con muestras pequeñas o moderadas."],
              ["Comparación de medias", "Evalúa si dos grupos difieren de forma relevante.", "Antes/después, grupo A vs grupo B, control vs tratamiento."],
              ["CLT o teorema del límite central", "Explica por qué al crecer la muestra la distribución de medias se vuelve más estable.", "Base intuitiva para muchas aproximaciones estadísticas."]
            ]
          }
        },
        {
          title: "Cómo lo conecto con análisis real",
          body: "Si estoy haciendo una encuesta, el tamaño muestral me ayuda a decidir a cuántas personas contactar. Si comparo grupos, la inferencia me ayuda a no confundir una diferencia casual con una señal real. Y si estoy trabajando con poblaciones grandes, esta lógica me da una forma más seria de defender por qué mi muestra sí puede representar al total."
        },
        {
          title: "Para recordar",
          body: "Una buena muestra no es solo grande: también debe ser suficiente para el objetivo, razonable para el costo y coherente con el riesgo de equivocarme. Si sé qué tan precisa necesito la respuesta, puedo justificar mucho mejor el tamaño de muestra que elijo.",
          resourceLinks: [
            {
              label: "SurveyMonkey - Sample Size Calculator",
              url: "https://www.surveymonkey.com/mp/sample-size-calculator/"
            },
            {
              label: "Raosoft - Sample Size Calculator",
              url: "http://www.raosoft.com/samplesize.html"
            },
            {
              label: "Investopedia - Central Limit Theorem",
              url: "https://www.investopedia.com/terms/c/central_limit_theorem.asp"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Calcular el tamaño de la muestra</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Calculadora del tamaño de la muestra</em>. Coursera.",
          url: "https://www.coursera.org/"
        },
        {
          citation:
            "Investopedia. (s. f.). <em>Central limit theorem (CLT)</em>. https://www.investopedia.com/terms/c/central_limit_theorem.asp",
          url: "https://www.investopedia.com/terms/c/central_limit_theorem.asp"
        }
      ],
      relatedIds: [
        "qualitative-quantitative-and-data-scale",
        "data-integrity-alignment-and-common-problems",
        "common-problem-types-and-smart-questions"
      ]
    },
    {
      id: "margin-of-error-and-confidence-interpretation",
      slug: "margen-de-error-e-interpretacion-de-resultados",
      title: "Margen de error e interpretación de resultados",
      summary: "El margen de error ayuda a entender qué tan cerca puede estar un resultado muestral del valor real de la población y por qué eso cambia la forma en que interpreto encuestas, pruebas A/B y conclusiones del negocio.",
      category: "Fundamentos",
      type: "Guía",
      level: "basic",
      readingTime: "8 min",
      updatedAt: "2026-08-03",
      tags: ["Margen de error", "Confianza", "Encuestas", "A/B testing"],
      featured: true,
      contentSections: [
        {
          title: "Qué es realmente el margen de error",
          body: "El margen de error es la diferencia máxima esperada entre lo que observo en una muestra y lo que probablemente habría visto si hubiese medido a toda la población. En simple, me dice cuánta holgura debo aceptar alrededor del resultado muestral antes de afirmar algo con demasiada seguridad."
        },
        {
          title: "Cómo se conecta con el nivel de confianza",
          body: "El margen de error no vive solo: siempre se interpreta junto al nivel de confianza. Cuando uso un 90%, 95% o 99% de confianza, estoy diciendo qué tan probable considero que el intervalo construido alrededor de mi muestra capture el valor real de la población.",
          comparisonTable: {
            columns: ["Concepto", "Qué me dice", "Idea rápida"],
            rows: [
              ["Nivel de confianza", "Qué tan probable es que el intervalo represente bien a la población.", "95% es el estándar más común."],
              ["Margen de error", "Cuánto puede desviarse el resultado muestral del valor real.", "Mientras más pequeño, más preciso es el estudio."],
              ["Intervalo de confianza", "Rango donde probablemente cae el valor real.", "Resultado de la muestra ± margen de error."],
              ["Tamaño de muestra", "Influye directamente en qué tan estrecho o ancho será el margen.", "Más muestra suele reducir incertidumbre."]
            ]
          }
        },
        {
          title: "Cómo leerlo en la práctica",
          body: "Si una encuesta muestra 60% de apoyo con un margen de error de ±3%, no debería leer ese 60 como valor exacto. Lo correcto es entender que el valor real probablemente está en un rango entre 57% y 63%, según el nivel de confianza definido.",
          example: "Resultado muestral: 60%. Margen de error: ±3%. Intervalo probable: entre 57% y 63%."
        },
        {
          title: "Qué hace que el margen cambie",
          body: "No todos los estudios tienen el mismo margen de error. Cambia según cuántos casos recojo, el nivel de confianza que exijo y el tipo de decisión que quiero respaldar.",
          bestPractices: [
            "Aumentar la muestra suele reducir el margen de error.",
            "Exigir mayor confianza suele volver el intervalo más estricto o más costoso de alcanzar.",
            "Decisiones de alto impacto suelen justificar márgenes más pequeños.",
            "No conviene interpretar resultados sin mirar el margen junto al contexto."
          ]
        },
        {
          title: "Ejemplo intuitivo: béisbol",
          body: "Una forma simple de pensarlo es imaginar que en béisbol el swing estuvo cerca, pero no exacto. El margen de error sería esa pequeña distancia temporal entre el momento ideal del contacto y el momento real del bateo. No dice solo si fallé, sino qué tan lejos o cerca estuve de acertar."
        },
        {
          title: "Ejemplo aplicado: marketing y pruebas A/B",
          body: "En pruebas A/B el margen de error evita sobrerreaccionar ante diferencias pequeñas. Si una línea de asunto logra 5% de apertura y otra 3%, eso no alcanza por sí solo para decir que una gana claramente. Primero necesito revisar si el intervalo de la variante A se solapa con el resultado de la variante B.",
          comparisonTable: {
            columns: ["Variante", "Resultado observado", "Lectura con margen de error ±2%"],
            rows: [
              ["Asunto A", "5%", "Su rango probable va de 3% a 7%."],
              ["Asunto B", "3%", "Su valor observado cae dentro del rango inferior de A."],
              ["Conclusión", "No necesariamente hay diferencia estadísticamente clara.", "El solapamiento obliga a ser más prudente."]
            ]
          }
        },
        {
          title: "Qué necesito para calcularlo",
          body: "Para estimar el margen de error normalmente necesito tres cosas mínimas: población, tamaño de muestra y nivel de confianza. Con eso una calculadora ya puede darme una aproximación útil para interpretar qué tan firme o flexible es mi resultado.",
          comparisonTable: {
            columns: ["Dato de entrada", "Para qué sirve"],
            rows: [
              ["Población", "Define el universo desde el que estoy extrayendo la muestra."],
              ["Muestra", "Define cuántos casos reales estoy usando para estimar el resultado."],
              ["Nivel de confianza", "Define qué tan exigente quiero ser al construir el intervalo."]
            ]
          }
        },
        {
          title: "Cuándo conviene ser más estricto",
          body: "En algunos sectores un 90% o 95% puede ser suficiente, pero en otros el costo de equivocarse es tan alto que conviene trabajar con 99% de confianza o con muestras más grandes. Esa decisión depende del riesgo, no solo de la técnica."
        },
        {
          title: "Para recordar",
          body: "El margen de error no decide solo si un dato entra o no al estudio, pero sí me ayuda a interpretar cuánto puedo confiar en que el resultado muestral se parece al valor real de la población. Mientras mejor lo entienda, mejor voy a leer encuestas, comparaciones y pruebas del negocio.",
          resourceLinks: [
            {
              label: "Good Calculators - Margin of Error Calculator",
              url: "https://goodcalculators.com/margin-of-error-calculator/"
            },
            {
              label: "CheckMarket - Margin of Error Calculator",
              url: "https://www.checkmarket.com/sample-size-calculator/"
            }
          ]
        }
      ],
      references: [
        {
          citation:
            "Google Career Certificates. (s. f.). <em>Todo sobre el margen de error</em>. Coursera.",
          url: "https://www.coursera.org/"
        }
      ],
      relatedIds: [
        "sample-size-confidence-and-basic-inference",
        "common-problem-types-and-smart-questions",
        "data-integrity-alignment-and-common-problems"
      ]
    }
  ];

  const inferAtlasMlSubcategory = (note) => {
    const haystack = `${note.title} ${note.summary} ${(note.tags || []).join(" ")}`.toLowerCase();

    if (
      haystack.includes("nlp") ||
      haystack.includes("bert") ||
      haystack.includes("transformers") ||
      haystack.includes("texto")
    ) {
      return "NLP";
    }

    if (
      haystack.includes("redes neuronales") ||
      haystack.includes("deep learning") ||
      haystack.includes("lstm") ||
      haystack.includes("resnet") ||
      haystack.includes("efficientnet") ||
      haystack.includes("autoencoder") ||
      haystack.includes("transfer learning") ||
      haystack.includes("fine-tuning")
    ) {
      return "Deep Learning";
    }

    if (
      haystack.includes("clustering") ||
      haystack.includes("agrupamiento") ||
      haystack.includes("dbscan") ||
      haystack.includes("hdbscan") ||
      haystack.includes("pca") ||
      haystack.includes("dimensionalidad") ||
      haystack.includes("t-sne") ||
      haystack.includes("umap") ||
      haystack.includes("anomal")
    ) {
      return "Clustering y reducción de dimensionalidad";
    }

    if (
      haystack.includes("docker") ||
      haystack.includes("mlops") ||
      haystack.includes("despliegue") ||
      haystack.includes("shap") ||
      haystack.includes("lime") ||
      haystack.includes("xai") ||
      haystack.includes("ci/cd") ||
      haystack.includes("api")
    ) {
      return "MLOps e interpretabilidad";
    }

    if (
      haystack.includes("regresión") ||
      haystack.includes("regularización") ||
      haystack.includes("ridge") ||
      haystack.includes("lasso") ||
      haystack.includes("elastic net") ||
      haystack.includes("boosting") ||
      haystack.includes("cross validation") ||
      haystack.includes("feature selection") ||
      haystack.includes("selección de características") ||
      haystack.includes("métricas") ||
      haystack.includes("f1")
    ) {
      return "Modelos supervisados";
    }

    return "Fundamentos ML";
  };

  atlasNotes.forEach((note) => {
    if (note.category !== "Machine Learning") return;
    note.subcategory = inferAtlasMlSubcategory(note);
    if (note.subcategory && !note.tags.includes(note.subcategory)) {
      note.tags = [note.subcategory, ...note.tags];
    }
  });

  const atlasCategoryChildren = atlasTopics.reduce((accumulator, category) => {
    if (category === "Machine Learning") {
      accumulator[category] = atlasMlSubcategories;
      return accumulator;
    }

    const tagCounts = new Map();

    atlasNotes
      .filter((note) => note.category === category)
      .forEach((note) => {
        (note.tags || []).forEach((tag) => {
          if (!tag || tag === category) return;
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        });
      });

    accumulator[category] = Array.from(tagCounts.entries())
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0], "es");
      })
      .slice(0, 6)
      .map(([tag]) => tag);

    return accumulator;
  }, {});

  let currentProjectIndex = 0;
  let atlasSearchTerm = "";
  let atlasSelectedTopic = null;
  let atlasSelectedCategoryTag = null;
  let atlasOpenTopic = null;
  let atlasSelectedLevels = new Set();
  let atlasSortMode = "recent";
  let atlasCurrentPage = 1;
  const ATLAS_PAGE_SIZE = 6;

  const updateCompactHeader = () => {
    stickyHeader?.classList.toggle("is-compact", window.scrollY > 120);
  };

  const syncBodyScrollState = () => {
    const hasOpenModal =
      modal?.classList.contains("is-open") ||
      atlasNoteModal?.classList.contains("is-open") ||
      cvModal?.classList.contains("is-open");

    document.body.style.overflow = hasOpenModal ? "hidden" : "";
  };

  const validPanels = new Set(["about", "projects", "skills", "resources"]);
  const requestedPanel = new URLSearchParams(window.location.search).get("panel");
  const initialPanel = validPanels.has(requestedPanel) ? requestedPanel : "about";

  const scrollToPortfolioTop = () => {
    const stickyOffset = stickyHeader?.classList.contains("is-compact")
      ? (notebookTopbar?.offsetHeight || 0) +
        (stickyHeader.querySelector(".site-header")?.offsetHeight || 0) +
        (sectionSwitcherWrap?.offsetHeight || 0)
      : stickyHeader?.offsetHeight || 0;

    window.scrollTo({
      top: Math.max(0, mainContent.offsetTop - stickyOffset),
      behavior: "smooth"
    });
  };

  const setActivePanel = (panelName, { scroll = true } = {}) => {
    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === panelName;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });

    switcherButtons.forEach((button) => {
      const isActive = button.dataset.panelTarget === panelName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (scroll) {
      scrollToPortfolioTop();
    }
  };

  const renderProjectModal = (index) => {
    const safeIndex = Math.max(0, Math.min(index, projects.length - 1));
    currentProjectIndex = safeIndex;
    const project = projects[safeIndex];
    if (!project || !modalImage || !modalKicker || !modalTitle || !modalDescription || !modalRepo || !modalTags) {
      return;
    }

    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalKicker.textContent = project.kicker;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalRepo.href = project.repo;
    modalTags.innerHTML = "";
    modalResultsList.innerHTML = "";

    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    project.results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      modalResultsList.appendChild(li);
    });

    if (modalPrev) modalPrev.disabled = safeIndex === 0;
    if (modalNext) modalNext.disabled = safeIndex === projects.length - 1;
  };

  const openProjectModal = (projectId) => {
    const index = projects.findIndex((project) => project.id === projectId);
    if (index < 0 || !modal) return;

    renderProjectModal(index);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    syncBodyScrollState();
  };

  const closeProjectModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    syncBodyScrollState();
  };

  const openCvModal = () => {
    if (!cvModal) return;
    cvModal.classList.add("is-open");
    cvModal.setAttribute("aria-hidden", "false");
    syncBodyScrollState();
  };

  const closeCvModal = () => {
    if (!cvModal) return;
    cvModal.classList.remove("is-open");
    cvModal.setAttribute("aria-hidden", "true");
    closeCvExperiencePopovers();
    closeCvPhonePopover();
    syncBodyScrollState();
  };

  const setActiveCvTab = (tabName) => {
    if (!cvTabButtons.length || !cvTabPanels.length) return;

    cvTabButtons.forEach((button) => {
      const isActive = button.dataset.cvTab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    cvTabPanels.forEach((panel) => {
      const isActive = panel.dataset.cvPanel === tabName;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  const closeCvExperiencePopovers = (exceptBadge = null) => {
    cvExperienceBadges.forEach((badge) => {
      if (badge === exceptBadge) return;
      badge.classList.remove("is-open");
      const button = badge.querySelector(".cv-experience-icon");
      button?.setAttribute("aria-expanded", "false");
    });
  };

  const closeCvPhonePopover = () => {
    if (!cvPhoneToggle) return;
    cvPhoneToggle.classList.remove("is-open");
    cvPhoneToggle.setAttribute("aria-expanded", "false");
  };

  const toggleCvExperiencePopover = (badge) => {
    const button = badge.querySelector(".cv-experience-icon");
    const isOpen = badge.classList.contains("is-open");
    closeCvExperiencePopovers(badge);
    closeCvPhonePopover();
    badge.classList.toggle("is-open", !isOpen);
    button?.setAttribute("aria-expanded", String(!isOpen));
  };

  const toggleCvPhonePopover = () => {
    if (!cvPhoneToggle) return;
    const isOpen = cvPhoneToggle.classList.contains("is-open");
    closeCvExperiencePopovers();
    cvPhoneToggle.classList.toggle("is-open", !isOpen);
    cvPhoneToggle.setAttribute("aria-expanded", String(!isOpen));
  };

  const applyFilter = (filter) => {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
    });

    projectCards.forEach((card) => {
      const filters = (card.dataset.filters || "").split(" ").filter(Boolean);
      const visible = filter === "all" || filters.includes(filter);
      card.classList.toggle("is-hidden", !visible);
    });
  };

  const applySkillsFilter = (filter) => {
    skillsFilterButtons.forEach((button) => {
      const isActive = button.dataset.skillsFilter === filter;
      button.classList.toggle("is-active", isActive);
    });

    skillsPanels.forEach((panel) => {
      const isActive = panel.dataset.skillsPanel === filter;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  };

  const createComplexityBadge = (levelKey, size = "card") => {
    const config = complexityLevels[levelKey];
    const wrapper = document.createElement("div");
    wrapper.className = `complexity-badge complexity-badge--${size}`;

    if (!config) {
      wrapper.textContent = levelKey;
      return wrapper;
    }

    wrapper.title = `${config.label}: ${config.description}`;
    wrapper.innerHTML = `
      <img
        class="complexity-badge__image"
        src="${config.icon}"
        alt="Nivel ${config.label}"
      />
      <div class="complexity-badge__copy">
        <strong>${config.label}</strong>
      </div>
    `;
    return wrapper;
  };

  const createAtlasCategoryIcon = (category) => {
    const config = atlasCategoryMeta[category] || atlasCategoryMeta.Fundamentos;
    return `
      <div class="atlas-card-icon" aria-label="${config.label}">
        <i class="${config.iconClass}" aria-hidden="true"></i>
      </div>
    `;
  };

  const getAtlasFilteredNotes = () => {
    const search = atlasSearchTerm.trim().toLowerCase();

    return atlasNotes
      .filter((note) => {
        const matchesSearch =
          !search ||
          note.title.toLowerCase().includes(search) ||
          note.summary.toLowerCase().includes(search) ||
          note.tags.some((tag) => tag.toLowerCase().includes(search)) ||
          (note.subcategory || "").toLowerCase().includes(search);

        const matchesTopics = !atlasSelectedTopic || note.category === atlasSelectedTopic;

        const matchesCategoryTags =
          !atlasSelectedCategoryTag ||
          note.tags.includes(atlasSelectedCategoryTag) ||
          note.subcategory === atlasSelectedCategoryTag;

        const matchesLevels =
          atlasSelectedLevels.size === 0 || atlasSelectedLevels.has(note.level);

        return matchesSearch && matchesTopics && matchesCategoryTags && matchesLevels;
      })
      .sort((a, b) => {
        if (atlasSortMode === "alpha") {
          return a.title.localeCompare(b.title, "es");
        }
        if (atlasSortMode === "oldest") {
          return new Date(a.updatedAt) - new Date(b.updatedAt);
        }
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
  };

  const renderAtlasMemoryFilters = () => {
    if (!atlasMemoryList) return;
    atlasMemoryList.innerHTML = "";

    if (atlasMemorySummary) {
      const summaryParts = [];
      if (atlasSelectedTopic) {
        summaryParts.push(atlasSelectedTopic);
      }
      if (atlasSelectedCategoryTag) {
        summaryParts.push(atlasSelectedCategoryTag);
      }

      atlasMemorySummary.textContent =
        summaryParts.length === 0 ? "Seleccionar categor\u00EDas" : summaryParts.join(" \u00B7 ");
    }

    const menu = document.createElement("div");
    menu.className = "atlas-hover-menu";

    const showAllButton = document.createElement("button");
    showAllButton.type = "button";
    showAllButton.className = `atlas-hover-menu-button atlas-hover-menu-button--topic ${!atlasSelectedTopic ? "is-active" : ""}`;
    showAllButton.innerHTML = `
      <span>Mostrar todo</span>
      <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
    `;
    showAllButton.addEventListener("click", () => {
      atlasSelectedTopic = null;
      atlasSelectedCategoryTag = null;
      atlasCurrentPage = 1;
      renderAtlas();
    });
    menu.appendChild(showAllButton);

    atlasTopics.forEach((topic) => {
      const childItems = atlasCategoryChildren[topic] || [];
      const isActive = atlasSelectedTopic === topic;
      if (childItems.length > 0) {
        const item = document.createElement("div");
        item.className = "atlas-hover-menu-item atlas-hover-menu-item--has-children";

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = `atlas-hover-menu-button atlas-hover-menu-button--topic ${isActive ? "is-active" : ""}`;
        trigger.innerHTML = `
          <span>${topic}</span>
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        `;
        trigger.addEventListener("click", () => {
          atlasSelectedTopic = topic;
          atlasSelectedCategoryTag = null;
          atlasOpenTopic = null;
          atlasCurrentPage = 1;
          renderAtlas();
        });

        const submenu = document.createElement("div");
        submenu.className = "atlas-hover-submenu";

        childItems.forEach((childTag) => {
          const subButton = document.createElement("button");
          subButton.type = "button";
          subButton.className = `atlas-hover-menu-button atlas-hover-menu-button--child ${
            atlasSelectedTopic === topic && atlasSelectedCategoryTag === childTag ? "is-active" : ""
          }`;
          subButton.textContent = childTag;
          subButton.addEventListener("click", () => {
            atlasSelectedTopic = topic;
            atlasSelectedCategoryTag = childTag;
            atlasOpenTopic = null;
            atlasCurrentPage = 1;
            renderAtlas();
          });
          submenu.appendChild(subButton);
        });

        item.appendChild(trigger);
        item.appendChild(submenu);
        menu.appendChild(item);
        return;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = `atlas-hover-menu-button atlas-hover-menu-button--topic ${isActive ? "is-active" : ""}`;
      button.innerHTML = `
        <span>${topic}</span>
        <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
      `;
      button.addEventListener("click", () => {
        atlasSelectedTopic = topic;
        atlasSelectedCategoryTag = null;
        atlasOpenTopic = null;
        atlasCurrentPage = 1;
        renderAtlas();
      });
      menu.appendChild(button);
    });

    atlasMemoryList.appendChild(menu);
  };

  const renderAtlasComplexityFilters = () => {
    if (!atlasComplexityList) return;
    atlasComplexityList.innerHTML = "";

    Object.entries(complexityLevels).forEach(([key, config]) => {
      const label = document.createElement("label");
      label.className = "atlas-complexity-option";
      label.innerHTML = `
        <input type="checkbox" value="${key}" ${atlasSelectedLevels.has(key) ? "checked" : ""} />
      `;

      label.appendChild(createComplexityBadge(key, "filter"));

      label.querySelector("input")?.addEventListener("change", (event) => {
        if (event.target.checked) {
          atlasSelectedLevels.add(key);
        } else {
          atlasSelectedLevels.delete(key);
        }
        atlasCurrentPage = 1;
        renderAtlas();
      });

      label.title = config.description;
      atlasComplexityList.appendChild(label);
    });
  };

  const createAtlasCard = (note) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "atlas-card";
    button.dataset.noteId = note.id;

    const tagsMarkup = note.tags.slice(0, 2).map((tag) => `<span>${tag}</span>`).join("");

    button.innerHTML = `
      <div class="atlas-card-top">
        <div>
          <p class="atlas-card-topic">${note.category}</p>
          <h3>${note.title}</h3>
        </div>
        ${createAtlasCategoryIcon(note.category)}
      </div>
      <p class="atlas-card-summary">${note.summary}</p>
      <div class="atlas-card-tags">${tagsMarkup}</div>
      <div class="atlas-card-footer">
        <span>${note.readingTime}</span>
        <strong class="atlas-read-note">Leer nota</strong>
      </div>
    `;

    const footer = button.querySelector(".atlas-card-footer");
    footer?.prepend(createComplexityBadge(note.level, "card"));

    button.addEventListener("click", () => openAtlasNote(note.id));
    return button;
  };

  const escapeHtml = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const buildAtlasQuickNav = (note, sections) => {
    const wrapper = document.createElement("div");
    wrapper.className = "atlas-note-quick-nav";
    wrapper.id = `atlas-note-top-${note.id}`;

    const links = sections
      .map(
        (_, index) => `
          <button
            type="button"
            class="atlas-note-index-link"
            data-atlas-scroll-target="atlas-section-${note.id}-${index}"
          >
            Sección ${index + 1}
          </button>
        `
      )
      .join("");

    wrapper.innerHTML = `
      <p class="atlas-note-quick-nav-label">Visualiza más rápido</p>
      <div class="atlas-note-index-nav">${links}</div>
    `;

    return wrapper;
  };

  const buildAtlasSection = (section, options = {}) => {
    const article = document.createElement("article");
    const sectionClasses = ["atlas-note-section"];
    if (section.comparisonTable) sectionClasses.push("atlas-note-section--comparison");
    if (section.highlights) sectionClasses.push("atlas-note-section--highlights");
    if (section.commandGroups) sectionClasses.push("atlas-note-section--commands");
    if (section.illustrations) sectionClasses.push("atlas-note-section--visual");
    if (section.bestPractices) sectionClasses.push("atlas-note-section--playbook");
    article.className = sectionClasses.join(" ");

    let sectionTypeLabel = "";
    if (section.comparisonTable) {
      sectionTypeLabel = "Tabla comparativa";
    } else if (section.highlights) {
      sectionTypeLabel = "Resumen clave";
    } else if (section.commandGroups) {
      sectionTypeLabel = "Guía práctica";
    } else if (section.illustrations) {
      sectionTypeLabel = "Apoyo visual";
    } else if (section.bestPractices) {
      sectionTypeLabel = "Buenas prácticas";
    }

    let extraBlocks = "";
    if (section.highlights) {
      const items = section.highlights
        .map(
          (item) => `
            <article class="atlas-note-highlight">
              <div class="atlas-note-highlight__icon"><i class="${item.icon}" aria-hidden="true"></i></div>
              <div>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
              </div>
            </article>
          `
        )
        .join("");
      extraBlocks += `<div class="atlas-note-highlights">${items}</div>`;
    }
    if (section.example) {
      extraBlocks += `<div class="atlas-note-example"><strong>Ejemplo</strong><p>${section.example}</p></div>`;
    }
    if (section.comparisonTable) {
      const headers = section.comparisonTable.columns
        .map((column) => `<th scope="col">${column}</th>`)
        .join("");
      const rows = section.comparisonTable.rows
        .map(
          (row) => `
            <tr>
              ${row.map((cell) => `<td>${cell}</td>`).join("")}
            </tr>
          `
        )
        .join("");
      extraBlocks += `
        <div class="atlas-note-table-wrap" data-columns="${section.comparisonTable.columns.length}">
          <table class="atlas-note-table" data-columns="${section.comparisonTable.columns.length}">
            <thead>
              <tr>${headers}</tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }
    if (section.commandGroups) {
      const items = section.commandGroups
        .map(
          (item) => `
            <article class="atlas-note-command-card">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <pre class="atlas-note-command-code"><code>${escapeHtml(item.code)}</code></pre>
            </article>
          `
        )
        .join("");
      extraBlocks += `<div class="atlas-note-command-grid">${items}</div>`;
    }
    if (section.illustrations) {
      const items = section.illustrations
        .map(
          (item) => `
            <figure class="atlas-note-illustration-card">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
              ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
            </figure>
          `
        )
        .join("");
      const illustrationGridClass =
        section.illustrations.length === 1
          ? "atlas-note-illustration-grid single"
          : "atlas-note-illustration-grid";
      extraBlocks += `<div class="${illustrationGridClass}">${items}</div>`;
    }
    if (section.code) {
      extraBlocks += `<pre class="atlas-note-code"><code>${escapeHtml(section.code)}</code></pre>`;
    }
    if (section.resourceLinks) {
      const items = section.resourceLinks
        .map(
          (item) => `
            <li>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>
            </li>
          `
        )
        .join("");
      extraBlocks += `<div class="atlas-note-related-links"><strong>Recurso externo</strong><ul>${items}</ul></div>`;
    }
    if (section.bestPractices) {
      const items = section.bestPractices.map((item) => `<li>${item}</li>`).join("");
      extraBlocks += `<div class="atlas-note-best-practices"><strong>Buenas pr\u00E1cticas</strong><ul>${items}</ul></div>`;
    }
    const sectionFooterActions = [];
    if (section.tooltipBody) {
      sectionFooterActions.push(`
        <div class="atlas-note-inline-help">
          <button
            type="button"
            class="atlas-note-inline-help__trigger"
            aria-label="Ver explicación rápida"
            title="Ver explicación rápida"
          >
            <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
          </button>
          <div class="atlas-note-inline-help__popover">
            <strong>Qué hace y cuándo me sirve</strong>
            <p>${section.tooltipBody}</p>
          </div>
        </div>
      `);
    }
    if (options.showBackToTop) {
      sectionFooterActions.push(`
        <button
          type="button"
          class="atlas-note-back-to-top"
          data-atlas-scroll-target="atlas-note-top-${options.noteId}"
          aria-label="Volver al inicio"
          title="Volver al inicio"
        >
          <i class="fa-solid fa-arrow-up-long" aria-hidden="true"></i>
        </button>
      `);
    }
    if (sectionFooterActions.length > 0) {
      extraBlocks += `
        <div class="atlas-note-section-actions">
          ${sectionFooterActions.join("")}
        </div>
      `;
    }

    article.innerHTML = `
      <div class="atlas-note-section-heading">
        <h3>${options.sectionLabel ? `<span class="atlas-note-section-label">${options.sectionLabel}</span>${section.title}` : section.title}</h3>
        ${sectionTypeLabel ? `<span class="atlas-note-section-type">${sectionTypeLabel}</span>` : ""}
      </div>
      <p>${section.body}</p>
      ${extraBlocks}
    `;

    return article;
  };

  const buildAtlasReferences = (references) => {
    const article = document.createElement("article");
    article.className = "atlas-note-section atlas-note-section--references";

    const items = references
      .map((reference) => {
        const linkMarkup = reference.url
          ? ` <a href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.url}</a>`
          : "";
        return `<li>${reference.citation}${linkMarkup}</li>`;
      })
      .join("");

    article.innerHTML = `
      <h3>Referencias</h3>
      <ul>${items}</ul>
    `;

    return article;
  };

  const renderAtlas = () => {
    if (!atlasGrid) return;

    const filtered = getAtlasFilteredNotes();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ATLAS_PAGE_SIZE));
    atlasCurrentPage = Math.min(atlasCurrentPage, totalPages);
    const pageStart = (atlasCurrentPage - 1) * ATLAS_PAGE_SIZE;
    const visibleNotes = filtered.slice(pageStart, pageStart + ATLAS_PAGE_SIZE);

    atlasGrid.innerHTML = "";
    visibleNotes.forEach((note) => atlasGrid.appendChild(createAtlasCard(note)));

    if (atlasResultsCount) atlasResultsCount.textContent = String(filtered.length);

    if (atlasCurrentCategory) {
      const topicLabel = atlasSelectedTopic || "Todo el atlas";
      const subcategoryLabel = atlasSelectedCategoryTag ? ` \u00B7 ${atlasSelectedCategoryTag}` : "";
      atlasCurrentCategory.textContent = `${topicLabel}${subcategoryLabel}`;
    }

    if (atlasEmptyState) {
      atlasEmptyState.hidden = filtered.length !== 0;
    }

    if (atlasActiveFilters) {
      atlasActiveFilters.hidden = true;
      atlasActiveFilters.innerHTML = "";
    }

    if (atlasClearSearch) {
      atlasClearSearch.hidden = !atlasSearchTerm.trim();
    }

    if (atlasPagination) {
      atlasPagination.innerHTML = "";

      if (filtered.length > ATLAS_PAGE_SIZE) {
        const prevButton = document.createElement("button");
        prevButton.type = "button";
        prevButton.textContent = "Anterior";
        prevButton.disabled = atlasCurrentPage === 1;
        prevButton.addEventListener("click", () => {
          atlasCurrentPage -= 1;
          renderAtlas();
        });
        atlasPagination.appendChild(prevButton);

        for (let page = 1; page <= totalPages; page += 1) {
          const pageButton = document.createElement("button");
          pageButton.type = "button";
          pageButton.textContent = String(page);
          pageButton.classList.toggle("is-active", page === atlasCurrentPage);
          pageButton.addEventListener("click", () => {
            atlasCurrentPage = page;
            renderAtlas();
          });
          atlasPagination.appendChild(pageButton);
        }

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.textContent = "Siguiente";
        nextButton.disabled = atlasCurrentPage === totalPages;
        nextButton.addEventListener("click", () => {
          atlasCurrentPage += 1;
          renderAtlas();
        });
        atlasPagination.appendChild(nextButton);
      }
    }

    renderAtlasMemoryFilters();
    renderAtlasComplexityFilters();
  };

  const openAtlasNote = (noteId) => {
    const note = atlasNotes.find((item) => item.id === noteId);
    if (!note || !atlasNoteModal) return;

    atlasNoteKicker.textContent = note.subcategory
      ? `${note.category} \u00B7 ${note.subcategory} \u00B7 ${note.type}`
      : `${note.category} \u00B7 ${note.type}`;
    atlasNoteTitle.textContent = note.title;
    atlasNoteSummary.textContent = note.summary;
    atlasNoteReadingTime.textContent = note.readingTime;
    atlasNoteUpdatedAt.textContent = note.updatedAt;

    atlasNoteLevelBadge.innerHTML = "";
    atlasNoteLevelBadge.appendChild(createComplexityBadge(note.level, "detail"));

    atlasNoteTags.innerHTML = "";
    note.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      atlasNoteTags.appendChild(span);
    });

    atlasNoteSections.innerHTML = "";
    const sectionsToRender = [];
    let introSection = null;
    note.contentSections.forEach((section) => {
      if (!introSection && section.title === "Para qué sirve este recetario") {
        introSection = { ...section };
        return;
      }
      if (section.title === "Qué hace y cuándo me sirve" && sectionsToRender.length > 0) {
        sectionsToRender[sectionsToRender.length - 1].tooltipBody = section.body;
        return;
      }
      sectionsToRender.push({ ...section });
    });

    if (introSection) {
      const intro = document.createElement("div");
      intro.className = "atlas-note-quick-intro";
      intro.innerHTML = `
        <h3>${introSection.title}</h3>
        <p>${introSection.body}</p>
      `;
      atlasNoteSections.appendChild(intro);
    }

    if (note.showSectionIndex && sectionsToRender.length > 1) {
      atlasNoteSections.appendChild(buildAtlasQuickNav(note, sectionsToRender));
    }
    sectionsToRender.forEach((section, index) => {
      const article = buildAtlasSection(section, {
        showBackToTop: Boolean(note.showSectionIndex),
        noteId: note.id,
        sectionLabel: note.showSectionIndex ? `Sección ${index + 1}. ` : ""
      });
      article.id = `atlas-section-${note.id}-${index}`;
      atlasNoteSections.appendChild(article);
    });

    if (note.closingNote) {
      const closing = document.createElement("div");
      closing.className = "atlas-note-closing-note";
      closing.innerHTML = `
        <strong>Nota final</strong>
        <p>${note.closingNote}</p>
      `;
      atlasNoteSections.appendChild(closing);
    }

    if (Array.isArray(note.references) && note.references.length > 0) {
      atlasNoteSections.appendChild(buildAtlasReferences(note.references));
    }

    atlasRelatedGrid.innerHTML = "";
    atlasNotes
      .filter((item) => note.relatedIds.includes(item.id))
      .forEach((related) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "atlas-related-card";
        button.innerHTML = `<h3>${related.title}</h3><p>${related.summary}</p>`;
        button.addEventListener("click", () => openAtlasNote(related.id));
        atlasRelatedGrid.appendChild(button);
      });

    atlasNoteSections.querySelectorAll("[data-atlas-scroll-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.atlasScrollTarget;
        const target = targetId ? document.getElementById(targetId) : null;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    atlasNoteModal.classList.add("is-open");
    atlasNoteModal.setAttribute("aria-hidden", "false");
    syncBodyScrollState();
  };

  const closeAtlasNote = () => {
    if (!atlasNoteModal) return;
    atlasNoteModal.classList.remove("is-open");
    atlasNoteModal.setAttribute("aria-hidden", "true");
    syncBodyScrollState();
  };

  switcherButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.panelTarget;
      if (target) setActivePanel(target);
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.filter || "all");
    });
  });

  skillsFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applySkillsFilter(button.dataset.skillsFilter || "technical");
    });
  });

  atlasSearchInput?.addEventListener("input", (event) => {
    atlasSearchTerm = event.target.value;
    atlasCurrentPage = 1;
    renderAtlas();
  });

  atlasClearSearch?.addEventListener("click", () => {
    atlasSearchTerm = "";
    atlasCurrentPage = 1;
    if (atlasSearchInput) atlasSearchInput.value = "";
    renderAtlas();
  });

  atlasSortSelect?.addEventListener("change", (event) => {
    atlasSortMode = event.target.value;
    atlasCurrentPage = 1;
    renderAtlas();
  });

  atlasClearFilters?.addEventListener("click", () => {
    atlasSearchTerm = "";
    atlasSelectedTopic = null;
    atlasSelectedCategoryTag = null;
    atlasOpenTopic = null;
    atlasSelectedLevels.clear();
    atlasSortMode = "recent";
    atlasCurrentPage = 1;
    if (atlasSearchInput) atlasSearchInput.value = "";
    if (atlasSortSelect) atlasSortSelect.value = "recent";
    renderAtlas();
  });

  atlasFiltersToggle?.addEventListener("click", () => {
    const isOpen = atlasSidebar?.classList.toggle("is-open");
    atlasFiltersToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.project;
      if (projectId) openProjectModal(projectId);
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeProjectModal);
  });

  atlasNoteCloseButtons.forEach((button) => {
    button.addEventListener("click", closeAtlasNote);
  });

  openCvModalButtons.forEach((button) => {
    button.addEventListener("click", openCvModal);
  });

  closeCvModalButtons.forEach((button) => {
    button.addEventListener("click", closeCvModal);
  });

  cvTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabName = button.dataset.cvTab;
      if (tabName) setActiveCvTab(tabName);
    });
  });

  cvExperienceBadges.forEach((badge) => {
    const button = badge.querySelector(".cv-experience-icon");
    button?.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCvExperiencePopover(badge);
    });
  });

  cvPhoneToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleCvPhonePopover();
  });

  modalPrev?.addEventListener("click", () => {
    renderProjectModal(currentProjectIndex - 1);
  });

  modalNext?.addEventListener("click", () => {
    renderProjectModal(currentProjectIndex + 1);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) {
      closeProjectModal();
    }
    if (event.key === "Escape" && atlasNoteModal?.classList.contains("is-open")) {
      closeAtlasNote();
    }
    if (event.key === "Escape" && cvModal?.classList.contains("is-open")) {
      closeCvModal();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (!target.closest(".cv-experience-badge")) {
      closeCvExperiencePopovers();
    }

    if (!target.closest("[data-cv-phone-toggle]")) {
      closeCvPhonePopover();
    }
  });

  window.addEventListener("scroll", updateCompactHeader, { passive: true });

  applyFilter("all");
  applySkillsFilter("technical");
  setActiveCvTab("laboral");
  renderAtlas();
  setActivePanel(initialPanel, { scroll: false });
  updateCompactHeader();
});


