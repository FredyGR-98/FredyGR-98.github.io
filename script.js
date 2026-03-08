const root = document.documentElement;
const btn = document.getElementById("themeToggle");

// Tema persistente
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
}

btn.addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
});

// Retro persistente
const retroEnabled = localStorage.getItem("retro") === "1";
if (retroEnabled) {
  root.classList.add("retro");
}

function toggleRetro() {
  const enabled = root.classList.toggle("retro");
  localStorage.setItem("retro", enabled ? "1" : "0");
}

// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
