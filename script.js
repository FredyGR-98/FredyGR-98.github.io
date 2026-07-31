document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const panelButtons = document.querySelectorAll("[data-panel-target]");
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

  if (!mainContent || !panels.length) {
    return;
  }

  const projects = [
    {
      id: "credit-risk",
      title: "Análisis de riesgo crediticio",
      kicker: "Data analysis + riesgo",
      description: "Caso orientado a ordenar la evaluación de solicitudes de préstamo, integrando perfil del cliente, finalidad del crédito, historial y señales de incumplimiento en una lectura visual más clara para apoyar decisiones.",
      image: "project-images/project-fraud-monitoring.png",
      repo: "https://github.com/FredyGR-98/credit-risk-analysis-system",
      filters: ["sql", "python", "viz"],
      tags: ["SQL", "Python", "Visualización"],
      results: [
        "Mejor organización para revisar riesgo, tipo de hogar y propósito del préstamo.",
        "Segmentación más clara de solicitudes con mayor probabilidad de incumplimiento.",
        "Dashboard interactivo para monitorear cartera y apoyar seguimiento analítico."
      ]
    },
    {
      id: "breast-cancer",
      title: "Detector de cáncer de mama",
      kicker: "Machine learning + salud",
      description: "Caso orientado a estructurar mejor la interpretación de hallazgos clínicos, utilizando machine learning para clasificar diagnósticos y un dashboard visual para comunicar patrones, distribución de casos y señales relevantes.",
      image: "project-images/project-breast-cancer.png",
      repo: "https://github.com/FredyGR-98/detector-cancer-mama-mlops",
      filters: ["sql", "python", "ml", "viz"],
      tags: ["SQL", "Python", "Machine Learning", "Visualización"],
      results: [
        "Clasificación visual de diagnósticos benignos y malignos con soporte analítico.",
        "Lectura más clara de distribución etaria, concentración de casos y evolución clínica.",
        "Presentación técnica más comprensible para comunicar patrones del dataset."
      ]
    }
  ];

  let currentProjectIndex = 0;

  const updateCompactHeader = () => {
    stickyHeader?.classList.toggle("is-compact", window.scrollY > 120);
  };

  const validPanels = new Set(["about", "projects", "skills"]);
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
    if (modalResultsList) {
      modalResultsList.innerHTML = "";
    }

    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    (project.results || []).forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      modalResultsList?.appendChild(li);
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
    document.body.style.overflow = "";
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

  panelButtons.forEach((button) => {
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

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.project;
      if (projectId) openProjectModal(projectId);
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", closeProjectModal);
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
  });

  window.addEventListener("scroll", updateCompactHeader, { passive: true });

  applyFilter("all");
  applySkillsFilter("technical");
  setActivePanel(initialPanel, { scroll: false });
  updateCompactHeader();
});
