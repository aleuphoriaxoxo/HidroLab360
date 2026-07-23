const baseConocimiento = {
  es: {
    pascal: "El **Principio de Pascal** establece que la presión aplicada a un fluido incompresible se transmite con igual intensidad en todas las direcciones. Matemáticamente: **P = F₁/A₁ = F₂/A₂**.",
    prensa: "Una **prensa hidráulica** usa dos pistones de diferente área conectados por un fluido. Al aplicar una fuerza pequeña F₁ en el pistón pequeño, se obtiene una fuerza mucho mayor F₂ en el pistón grande.",
    presion: "La **presión** es la fuerza aplicada por unidad de área. Su unidad en el SI es el **Pascal (Pa)**, que equivale a 1 N/m².",
    fuerza: "En una prensa hidráulica, la **fuerza se multiplica** según la relación de áreas: si A₂ es 10 veces A₁, entonces F₂ será 10 veces F₁.",
    fluido: "Para que el Principio de Pascal se cumpla, el fluido debe ser **incompresible** (su volumen no cambia bajo presión) y de baja **viscosidad**.",
    arquimedes: "El **Principio de Arquímedes** dice que todo cuerpo sumergido en un fluido experimenta una fuerza hacia arriba (empuje) igual al peso del fluido desplazado. Es diferente al Principio de Pascal.",
    bernoulli: "El **Principio de Bernoulli** relaciona la velocidad, presión y altura de un fluido en movimiento. No aplica a fluidos en reposo como una prensa hidráulica.",
    unidades: "Las unidades principales son: **Fuerza** en Newton (N), **Área** en m², **Presión** en Pascal (Pa) = N/m².",
    ejemplo: "**Ejemplo:** Si aplicas 50 N en un pistón de 0.01 m², la presión es 5000 Pa. Si el otro pistón tiene 0.05 m², la fuerza de salida será **250 N** (5 veces mayor).",
    energia: "Aunque la fuerza se multiplica, la **energía se conserva**: lo que ganas en fuerza lo pierdes en distancia recorrida (el pistón grande se mueve menos).",
    holahola: "¡Hola! Estoy aquí para ayudarte con cualquier duda sobre el Principio de Pascal, la prensa hidráulica y la física de fluidos. 😊",
    gracias: "¡De nada! Si tienes más preguntas sobre el simulador o la teoría, no dudes en consultarme. 💧"
  },
  en: {
    pascal: "**Pascal's Principle** states that pressure applied to an incompressible fluid is transmitted with equal intensity in all directions. Mathematically: **P = F₁/A₁ = F₂/A₂**.",
    prensa: "A **hydraulic press** uses two pistons of different areas connected by a fluid. Applying a small force F₁ on the small piston produces a much larger force F₂ on the large piston.",
    presion: "**Pressure** is force per unit area. Its SI unit is the **Pascal (Pa)**, equal to 1 N/m².",
    fuerza: "In a hydraulic press, **force is multiplied** according to the area ratio: if A₂ is 10 times A₁, then F₂ will be 10 times F₁.",
    fluido: "For Pascal's Principle to hold, the fluid must be **incompressible** (its volume doesn't change under pressure) and have low **viscosity**.",
    arquimedes: "**Archimedes' Principle** states that any body submerged in a fluid experiences an upward force (buoyancy) equal to the weight of the displaced fluid. It's different from Pascal's Principle.",
    bernoulli: "**Bernoulli's Principle** relates the velocity, pressure and height of a moving fluid. It doesn't apply to fluids at rest like a hydraulic press.",
    unidades: "Main units are: **Force** in Newton (N), **Area** in m², **Pressure** in Pascal (Pa) = N/m².",
    ejemplo: "**Example:** If you apply 50 N on a 0.01 m² piston, pressure is 5000 Pa. If the other piston has 0.05 m², the output force will be **250 N** (5 times larger).",
    energia: "Although force is multiplied, **energy is conserved**: what you gain in force you lose in distance (the large piston moves less).",
    holahola: "Hi! I'm here to help you with any questions about Pascal's Principle, hydraulic press and fluid physics. 😊",
    gracias: "You're welcome! If you have more questions about the simulator or theory, feel free to ask. 💧"
  }
};

const sugerenciasIniciales = {
  es: [
    "¿Qué es el Principio de Pascal?",
    "¿Cómo funciona una prensa hidráulica?",
    "Dame un ejemplo de cálculo",
    "¿Qué es la presión?",
    "¿Qué diferencia hay con Arquímedes?"
  ],
  en: [
    "What is Pascal's Principle?",
    "How does a hydraulic press work?",
    "Give me a calculation example",
    "What is pressure?",
    "How is it different from Archimedes?"
  ]
};

function idiomaActivoAsistente() {
  return window.currentLang || "es";
}

function buscarRespuesta(texto) {
  const lang = idiomaActivoAsistente();
  const t = texto.toLowerCase();
  const kb = baseConocimiento[lang];

  if (/^(hola|hello|hi|buen[oa]s|saludos|qué tal|que tal)/.test(t)) return kb.holahola;
  if (/graci|thanks|thank you/.test(t)) return kb.gracias;
  if (/pasal|princip.*pascal/.test(t)) return kb.pascal;
  if (/prensa|hidraul.*press|funciona|c[óo]mo/.test(t)) return kb.prensa;
  if (/presi[oó]n|pa\b|pascal.*unidad|qu[eé] es presi/.test(t)) return kb.presion;
  if (/fuerza|multiplic/.test(t)) return kb.fuerza;
  if (/fluido|incompresib|viscos/.test(t)) return kb.fluido;
  if (/arqui/.test(t)) return kb.arquimedes;
  if (/bernoulli/.test(t)) return kb.bernoulli;
  if (/unidad|medid/.test(t)) return kb.unidades;
  if (/ejemplo|c[áa]lculo|n[úu]mero|cu[aá]nto/.test(t)) return kb.ejemplo;
  if (/energ|conserv|trabajo|distancia/.test(t)) return kb.energia;

  // Respuesta por defecto
  return lang === "es"
    ? "🤔 Interesante pregunta. Puedo ayudarte con temas como: **Principio de Pascal**, **prensa hidráulica**, **presión**, **fuerza**, **Principio de Arquímedes**, **Bernoulli**, **unidades** o **ejemplos de cálculo**. ¿Sobre cuál te gustaría profundizar?"
    : "🤔 Interesting question. I can help you with: **Pascal's Principle**, **hydraulic press**, **pressure**, **force**, **Archimedes' Principle**, **Bernoulli**, **units** or **calculation examples**. Which one would you like to explore?";
}

function agregarMensaje(rol, texto) {
  const chat = document.getElementById('chatHistory');
  if (!chat) return;
  const lang = idiomaActivoAsistente();
  const rolLabel = rol === 'user'
    ? (lang === 'es' ? 'Tú' : 'You')
    : (lang === 'es' ? 'Asistente' : 'Assistant');
  const clase = rol === 'user' ? 'chat-user' : 'chat-assistant';

  const div = document.createElement('div');
  div.className = `chat-message ${clase}`;
  const safeText = texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  div.innerHTML = `
    <div class="message-role">${rolLabel}</div>
    <div>${safeText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</div>
  `;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function enviarMensaje() {
  const input = document.getElementById('chatInput');
  const status = document.getElementById('statusLabel');
  const lang = idiomaActivoAsistente();

  if (!input) return;
  const texto = input.value.trim();
  if (!texto) return;

  agregarMensaje('user', texto);
  input.value = '';
  input.disabled = true;

  if (status) status.textContent = lang === 'es' ? 'Escribiendo...' : 'Typing...';

  setTimeout(() => {
    const respuesta = buscarRespuesta(texto);
    agregarMensaje('assistant', respuesta);
    if (status) status.textContent = lang === 'es' ? 'Listo.' : 'Ready.';
    input.disabled = false;
    input.focus();
  }, 700);
}

function cargarSugerencias() {
  const cont = document.getElementById('suggestionList');
  if (!cont) return;
  const lang = idiomaActivoAsistente();
  cont.innerHTML = '';
  sugerenciasIniciales[lang].forEach(texto => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-button';
    btn.type = 'button';
    btn.textContent = texto;
    btn.onclick = () => {
      const input = document.getElementById('chatInput');
      if (input) {
        input.value = texto;
        enviarMensaje();
      }
    };
    cont.appendChild(btn);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cargarSugerencias();
  const sendBtn = document.getElementById('sendButton');
  if (sendBtn) sendBtn.addEventListener('click', enviarMensaje);
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        enviarMensaje();
      }
    });
  }
});

window.addEventListener('cambioIdioma', cargarSugerencias);

window.enviarMensaje = enviarMensaje;