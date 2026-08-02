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
    "SQL"
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
      slug: "como-elegir-la-herramienta-segun-el-caso",
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
          body: "Si un ecommerce quiere mejorar sus conversiones, una pregunta vaga ser\u00EDa: \"\u00BFPor qu\u00E9 la gente no compra m\u00E1s?\". Una versi\u00F3n mucho m\u00E1s \u00FAtil ser\u00EDa: \"\u00BFQu\u00E9 cambios en el flujo de checkout podr\u00EDan aumentar en un 10% la tasa de conversi\u00F3n m\u00F3vil durante el pr\u00F3ximo trimestre?\" Esa segunda pregunta ya me orienta mejor el an\u00E1lisis porque define foco, m\u00E9trica, acci\u00F3n esperada, relevancia y tiempo.",
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
          body: "Cuando necesito contar, sumar o promediar seg\u00FAn un criterio, estas son de las m\u00E1s \u00FAtiles.",
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
          title: "Una mini ruta para empezar",
          body: "Si alguien parte desde cero, yo aprender\u00EDa en este orden: SUMA, PROMEDIO, MIN, MAX; luego CONTAR.SI y SUMAR.SI; despu\u00E9s SI y SI.ERROR; y reci\u00E9n despu\u00E9s BUSCARV, BUSCARX, INDICE+COINCIDIR y FILTRAR. Ese orden da mucha m\u00E1s seguridad que tratar de memorizar todo al mismo tiempo."
        },
        {
          title: "Para recordar",
          body: "La funci\u00F3n correcta depende del objetivo. Si quiero resumir, voy a SUMA o PROMEDIO. Si quiero filtrar por criterio, voy a CONTAR.SI o SUMAR.SI.CONJUNTO. Si quiero cruzar tablas, pienso en BUSCARV, BUSCARX o INDICE+COINCIDIR. Y si quiero limpiar texto o evitar errores, uso ESPACIOS, SI y SI.ERROR.",
          resourceLinks: [
            {
              label: "Referencia oficial de funciones de Google Sheets",
              url: "https://support.google.com/docs/table/25273?hl=es"
            },
            {
              label: "Referencia oficial de funciones de Excel",
              url: "https://support.microsoft.com/es-es/excel"
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
        }
      ],
      relatedIds: ["excel-shortcuts-guide", "google-sheets-shortcuts-guide"]
    }
  ];

  let currentProjectIndex = 0;
  let atlasSearchTerm = "";
  let atlasSelectedTopics = new Set();
  let atlasSelectedLevels = new Set();
  let atlasSortMode = "recent";
  let atlasCurrentPage = 1;
  const ATLAS_PAGE_SIZE = 6;

  const updateCompactHeader = () => {
    stickyHeader?.classList.toggle("is-compact", window.scrollY > 120);
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
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = atlasNoteModal?.classList.contains("is-open") ? "hidden" : "";
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
          note.tags.some((tag) => tag.toLowerCase().includes(search));

        const matchesTopics =
          atlasSelectedTopics.size === 0 || atlasSelectedTopics.has(note.category);

        const matchesLevels =
          atlasSelectedLevels.size === 0 || atlasSelectedLevels.has(note.level);

        return matchesSearch && matchesTopics && matchesLevels;
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
      atlasMemorySummary.textContent =
        atlasSelectedTopics.size === 0
          ? "Seleccionar categor\u00EDas"
          : Array.from(atlasSelectedTopics).join(" \u00B7 ");
    }

    atlasTopics.forEach((topic) => {
      const label = document.createElement("label");
      label.className = "atlas-memory-option";
      label.innerHTML = `
        <input type="checkbox" value="${topic}" ${atlasSelectedTopics.has(topic) ? "checked" : ""} />
        <span>${topic}</span>
      `;

      label.querySelector("input")?.addEventListener("change", (event) => {
        if (event.target.checked) {
          atlasSelectedTopics.add(topic);
        } else {
          atlasSelectedTopics.delete(topic);
        }
        atlasCurrentPage = 1;
        renderAtlas();
      });

      atlasMemoryList.appendChild(label);
    });
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

  const buildAtlasSection = (section) => {
    const article = document.createElement("article");
    article.className = "atlas-note-section";

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
              <pre class="atlas-note-command-code"><code>${item.code}</code></pre>
            </article>
          `
        )
        .join("");
      extraBlocks += `<div class="atlas-note-command-grid">${items}</div>`;
    }
    if (section.code) {
      extraBlocks += `<div class="atlas-note-code">${section.code}</div>`;
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

    article.innerHTML = `
      <h3>${section.title}</h3>
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
      atlasCurrentCategory.textContent =
        atlasSelectedTopics.size === 0 ? "Todo el atlas" : Array.from(atlasSelectedTopics).join(" \u00B7 ");
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

    atlasNoteKicker.textContent = `${note.category} \u00B7 ${note.type}`;
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
    note.contentSections.forEach((section, index) => {
      const article = buildAtlasSection(section);
      article.id = `atlas-section-${note.id}-${index}`;
      atlasNoteSections.appendChild(article);
    });

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

    atlasNoteModal.classList.add("is-open");
    atlasNoteModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeAtlasNote = () => {
    if (!atlasNoteModal) return;
    atlasNoteModal.classList.remove("is-open");
    atlasNoteModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = modal?.classList.contains("is-open") ? "hidden" : "";
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
    atlasSelectedTopics.clear();
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
  });

  window.addEventListener("scroll", updateCompactHeader, { passive: true });

  applyFilter("all");
  applySkillsFilter("technical");
  renderAtlas();
  setActivePanel(initialPanel, { scroll: false });
  updateCompactHeader();
});

