let currentLang = 'es';
window.currentLang = currentLang;

function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  const tabs = document.querySelectorAll('.tab');
  const idx = ['simulador','asistente','retos','disenador','acerca','equipo'].indexOf(name);
  if(tabs[idx]) tabs[idx].classList.add('active');

  // scroll suave al inicio del módulo
  const wrapper = document.getElementById('tabsWrapper');
  if (wrapper) {
    setTimeout(() => {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

function setLang(lang) {
  currentLang = lang;
  window.currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  document.querySelectorAll('[data-es]').forEach(el => {
    const txt = el.getAttribute('data-' + lang);
    if(txt) {
      el.textContent = txt;
    }
  });
  window.dispatchEvent(new Event('cambioIdioma'));
}

// ── EXPLORAR SIMULADOR (scroll suave + cambiar tab) ──
function explorarSimulador() {
  showTab('simulador');
}

// ── MODO CLARO / OSCURO ──
function toggleMode() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  const btn = document.getElementById('modeToggleBtn');
  if (btn) btn.textContent = isLight ? '🌞' : '🌚';
  try { localStorage.setItem('hidrolab_theme', isLight ? 'light' : 'dark'); } catch (e) {}
}

function restaurarTema() {
  let guardado = null;
  try { guardado = localStorage.getItem('hidrolab_theme'); } catch (e) {}
  if (guardado === 'light') {
    document.body.classList.add('light-mode');
    const btn = document.getElementById('modeToggleBtn');
    if (btn) btn.textContent = '🌞';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  restaurarTema();
  setLang('es');
  showTab('simulador');
});
