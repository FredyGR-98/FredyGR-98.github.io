document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");
  const revealElements = document.querySelectorAll(".reveal");
  const header = document.querySelector(".header");
  const progressBar = document.getElementById("scroll-progress-bar");
  const projectTabs = document.querySelectorAll(".project-tab");
  const projectPanels = document.querySelectorAll(".project-tab-panel");
  const projectsExperience = document.querySelector(".projects-experience");
  const carousels = document.querySelectorAll(".cases-carousel");
  const modal = document.getElementById("case-modal");
  const modalCloseTriggers = document.querySelectorAll("[data-close-modal]");
  const caseOpenButtons = document.querySelectorAll(".case-open");

  const caseDetails = {
    "fraud-monitoring": {
      category: "Data Analysis",
      title: "Monitoreo de transacciones y riesgo de fraude",
      repoUrl: "https://github.com/FredyGR-98/monitoreo-transacciones-riesgo-fraude",
      metrics: ["Precision 1.000", "F1 0.933", "35 casos"],
      image: {
        src: "project-images/project-fraud-monitoring.png",
        alt: "Ilustracion del proyecto de monitoreo de fraude"
      },
      visualTitle: "Dashboard de monitoreo financiero",
      visualText:
        "Placeholder para una composicion con alertas, scoring y flujo operativo bancario en estilo dark + lofi.",
      problem:
        "El reto era detectar transacciones sospechosas sin llenar la operacion de alertas innecesarias ni perder foco en los casos realmente criticos.",
      approach:
        "Se combinaron analisis exploratorio, reglas de riesgo, modelo supervisado y una capa visual de monitoreo para convertir datos en criterios claros de revision.",
      result:
        "El sistema mejora la priorizacion de casos, reduce ruido operativo y deja alertas mas utiles para decisiones de seguimiento."
    },
    "breast-cancer-mlops": {
      category: "Machine Learning",
      title: "Detector de cancer de mama",
      repoUrl: "https://github.com/FredyGR-98/detector-cancer-mama-mlops",
      metrics: ["Accuracy 0.947", "F1 0.958", "ROC 0.994"],
      image: {
        src: "project-images/project-breast-cancer.png",
        alt: "Ilustracion del proyecto detector de cancer de mama"
      },
      visualTitle: "Clasificacion clinica con soporte visual",
      visualText:
        "Placeholder para una escena con variables clinicas, prediccion y visualizaciones del modelo.",
      problem:
        "El desafio era presentar un modelo sensible de forma clara, usable y responsable, sin dejarlo solo como un ejercicio tecnico.",
      approach:
        "Se llevo el modelo desde el entrenamiento hasta una experiencia reproducible con API, frontend y despliegue portable para facilitar prueba y comprension.",
      result:
        "El caso convierte el modelo en una herramienta mas demostrable, mas facil de validar y mejor preparada para comunicar valor."
    },
    "nlp-sentiment-movies": {
      category: "Machine Learning",
      title: "Analisis de sentimientos de peliculas",
      repoUrl: "https://github.com/FredyGR-98/nlp-sentiment-movies",
      metrics: ["Accuracy 0.886", "25k resenas", "F1 0.887"],
      visualTitle: "NLP aplicado a resenas IMDb",
      visualText:
        "Placeholder para resenas, polaridad positiva/negativa y un entorno visual cinematografico.",
      problem:
        "El problema era transformar muchas resenas en una senal clara de percepcion, evitando revision manual caso por caso.",
      approach:
        "Se uso un flujo de NLP con clasificacion y una interfaz simple para convertir opinion dispersa en una lectura rapida y facil de explorar.",
      result:
        "El proyecto facilita interpretar volumenes altos de opinion y deja una base util para seguimiento de percepcion o experiencia."
    },
    "iris-flower-classifier": {
      category: "Machine Learning",
      title: "Clasificador de flores Iris",
      repoUrl: "https://github.com/FredyGR-98/iris-flower-classifier",
      metrics: ["4 variables", "3 especies", "Flask + HTML"],
      visualTitle: "Prediccion simple con Flask + HTML",
      visualText:
        "Placeholder para ilustracion botanica, sliders y salida de clasificacion en una UI liviana.",
      problem:
        "El objetivo era mostrar de forma simple como un modelo puede pasar del entrenamiento a una experiencia que cualquiera pueda probar.",
      approach:
        "Se priorizo claridad por sobre complejidad, conectando modelo, API, interfaz y pruebas en un caso pequeno pero facil de entender.",
      result:
        "El resultado es una base reusable para futuros servicios de ML, con una presentacion funcional y portable."
    },
    "fraud-data-pipeline": {
      category: "ETL / Data Engineering",
      title: "Pipeline de scoring para monitoreo transaccional",
      repoUrl: "https://github.com/FredyGR-98/monitoreo-transacciones-riesgo-fraude",
      metrics: ["10 features", "Batch scoring", "Docker Compose"],
      visualTitle: "Flujo tecnico de scoring e integracion",
      visualText:
        "Placeholder para diagrama visual de payload, validacion, scoring y consumo en dashboard.",
      problem:
        "El problema era evitar que el analisis quedara encerrado en una capa tecnica dificil de consumir o integrar.",
      approach:
        "Se ordeno la arquitectura para que scoring, validacion y consumo analitico convivieran en un flujo mas claro y reutilizable.",
      result:
        "El resultado es una capa tecnica mas consistente, mas facil de integrar y mejor preparada para convertir analisis en capacidad operativa."
    }
  };

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        navMenu.classList.remove("open");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) {
        navMenu.classList.remove("open");
      }
    });
  }

  const activateNavLink = () => {
    let currentSectionId = sections.length ? sections[0].id : "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 160;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = sectionId;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  };

  const updateScrollUI = () => {
    if (header) {
      header.classList.toggle("header-scrolled", window.scrollY > 12);
    }

    if (progressBar) {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }
  };

  const setActiveTab = (tabId) => {
    if (projectsExperience) {
      projectsExperience.dataset.theme = tabId;
    }

    projectTabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    projectPanels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  if (projectTabs.length && projectPanels.length) {
    projectTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setActiveTab(tab.dataset.tab);
      });
    });
  }

  const updateCarousel = (carousel, index) => {
    const track = carousel.querySelector(".cases-track");
    const slides = carousel.querySelectorAll(".case-slide");
    const prevButton = carousel.querySelector(".carousel-control.prev");
    const nextButton = carousel.querySelector(".carousel-control.next");
    const dotsContainer = carousel.parentElement.querySelector(".carousel-dots");
    const safeIndex = Math.max(0, Math.min(index, slides.length - 1));

    carousel.dataset.index = String(safeIndex);
    track.style.transform = `translateX(-${safeIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === safeIndex);
    });

    if (prevButton) {
      prevButton.disabled = safeIndex === 0;
    }

    if (nextButton) {
      nextButton.disabled = safeIndex === slides.length - 1;
    }

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === safeIndex);
      });
    }
  };

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".case-slide");
    const prevButton = carousel.querySelector(".carousel-control.prev");
    const nextButton = carousel.querySelector(".carousel-control.next");
    const dotsContainer = carousel.parentElement.querySelector(".carousel-dots");

    if (dotsContainer) {
      dotsContainer.innerHTML = "";

      slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Ir al proyecto ${index + 1}`);
        dot.addEventListener("click", () => updateCarousel(carousel, index));
        dotsContainer.appendChild(dot);
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        const currentIndex = Number(carousel.dataset.index || 0);
        updateCarousel(carousel, currentIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const currentIndex = Number(carousel.dataset.index || 0);
        updateCarousel(carousel, currentIndex + 1);
      });
    }

    updateCarousel(carousel, 0);
  });

  const fillModal = (caseId) => {
    const details = caseDetails[caseId];
    if (!details || !modal) {
      return;
    }

    const fields = {
      category: document.getElementById("case-modal-category"),
      title: document.getElementById("case-modal-title"),
      problem: document.getElementById("case-modal-problem"),
      approach: document.getElementById("case-modal-approach"),
      result: document.getElementById("case-modal-result"),
      repo: document.getElementById("case-modal-repo"),
      metrics: document.getElementById("case-modal-metrics"),
      image: document.getElementById("case-modal-image"),
      visualTitle: document.getElementById("case-modal-visual-title"),
      visualText: document.getElementById("case-modal-visual-text")
    };

    fields.category.textContent = details.category;
    fields.title.textContent = details.title;
    fields.problem.textContent = details.problem;
    fields.approach.textContent = details.approach;
    fields.result.textContent = details.result;
    fields.repo.href = details.repoUrl;
    fields.visualTitle.textContent = details.visualTitle;
    fields.visualText.textContent = details.visualText;
    fields.metrics.innerHTML = "";

    if (details.image?.src) {
      fields.image.src = details.image.src;
      fields.image.alt = details.image.alt || details.title;
      fields.image.hidden = false;
    } else {
      fields.image.src = "";
      fields.image.alt = "";
      fields.image.hidden = true;
    }

    (details.metrics || []).slice(0, 3).forEach((metric) => {
      const chip = document.createElement("span");
      chip.className = "case-metric-chip";
      chip.textContent = metric;
      fields.metrics.appendChild(chip);
    });
  };

  const openModal = (caseId) => {
    if (!modal) {
      return;
    }

    fillModal(caseId);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modal) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  caseOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.case);
    });
  });

  modalCloseTriggers.forEach((trigger) => {
    trigger.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) {
      closeModal();
    }
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  const handleScroll = () => {
    activateNavLink();
    updateScrollUI();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  setTimeout(() => {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }, 250);
});
