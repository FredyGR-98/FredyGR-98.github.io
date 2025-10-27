// Tema claro/oscuro (persistente)
const root = document.documentElement;
const btn = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');

btn.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Toggle Retro
const retroEnabled = localStorage.getItem('retro') === '1';
if (retroEnabled) document.documentElement.classList.add('retro');

function toggleRetro(){
  const r = document.documentElement.classList.toggle('retro');
  localStorage.setItem('retro', r ? '1' : '0');
});

// Volver arriba suave
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if (id.length > 1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});
