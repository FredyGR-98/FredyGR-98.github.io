/* =========================================================
   PORTAFOLIO - SCRIPT PRINCIPAL
   Funciones:
   1. Menú responsive
   2. Activación de links según sección visible
   3. Animación reveal al hacer scroll
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");
  const revealElements = document.querySelectorAll(".reveal");

  /* =========================================
     1. MENÚ HAMBURGUESA
  ========================================= */
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

  /* =========================================
     2. LINK ACTIVO SEGÚN SECCIÓN
  ========================================= */
  const activateNavLink = () => {
    let currentSectionId = "inicio";

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

  window.addEventListener("scroll", activateNavLink);
  activateNavLink();

  /* =========================================
     3. ANIMACIÓN DE ENTRADA (REVEAL)
  ========================================= */
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
        threshold: 0.12,
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

  /* =========================================
     4. SEGURIDAD EXTRA PARA VISIBILIDAD
  ========================================= */
  setTimeout(() => {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }, 250);
});
