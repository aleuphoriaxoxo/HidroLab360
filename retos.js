const bancoPreguntas = [
  // --- NIVEL: FÁCIL ---
  {
    id: 1,
    nivel: "facil",
    pregunta: {
      es: "¿En qué principio se basa el funcionamiento de una prensa hidráulica?",
      en: "On which principle is the operation of a hydraulic press based?"
    },
    opciones: {
      es: ["Principio de Arquímedes", "Principio de Pascal", "Principio de Bernoulli"],
      en: ["Archimedes' Principle", "Pascal's Principle", "Bernoulli's Principle"]
    },
    correcta: 1
  },
  {
    id: 2,
    nivel: "facil",
    pregunta: {
      es: "La presión ejercida en un fluido incompresible se transmite con igual intensidad en...",
      en: "The pressure exerted on an incompressible fluid is transmitted with equal intensity in..."
    },
    opciones: {
      es: ["Una sola dirección", "Todas las direcciones", "Solo hacia abajo"],
      en: ["One direction only", "All directions", "Downward only"]
    },
    correcta: 1
  },
  {
    id: 3,
    nivel: "facil",
    pregunta: {
      es: "En el Sistema Internacional (SI), ¿cuál es la unidad de medida de la presión?",
      en: "In the International System (SI), what is the unit of measurement for pressure?"
    },
    opciones: {
      es: ["Newton (N)", "Pascal (Pa)", "Julio (J)"],
      en: ["Newton (N)", "Pascal (Pa)", "Joules (J)"]
    },
    correcta: 1
  },
  {
    id: 4,
    nivel: "facil",
    pregunta: {
      es: "¿Qué fluido se utiliza comúnmente en los sistemas hidráulicos industriales?",
      en: "What fluid is commonly used in industrial hydraulic systems?"
    },
    opciones: {
      es: ["Agua destilada", "Aceite hidráulico", "Aire comprimido"],
      en: ["Distilled water", "Hydraulic oil", "Compressed air"]
    },
    correcta: 1
  },
  {
    id: 5,
    nivel: "facil",
    pregunta: {
      es: "Si aumentamos la fuerza aplicada sobre un área constante, la presión...",
      en: "If we increase the force applied on a constant area, the pressure..."
    },
    opciones: {
      es: ["Aumenta", "Disminuye", "Se mantiene igual"],
      en: ["Increases", "Decreases", "Stays the same"]
    },
    correcta: 0
  },

  // --- NIVEL: INTERMEDIO ---
  {
    id: 6,
    nivel: "intermedio",
    pregunta: {
      es: "Una prensa hidráulica multiplica la fuerza porque los pistones tienen diferente...",
      en: "A hydraulic press multiplies force because the pistons have different..."
    },
    opciones: {
      es: ["Masa", "Volumen de fluido", "Área de sección transversal"],
      en: ["Mass", "Fluid volume", "Cross-sectional area"]
    },
    correcta: 2
  },
  {
    id: 7,
    nivel: "intermedio",
    pregunta: {
      es: "¿Cuál es la fórmula matemática del Principio de Pascal?",
      en: "What is the mathematical formula for Pascal's Principle?"
    },
    opciones: {
      es: ["P = F × A", "F₁ / A₁ = F₂ / A₂", "P = m × g"],
      en: ["P = F × A", "F₁ / A₁ = F₂ / A₂", "P = m × g"]
    },
    correcta: 1
  },
  {
    id: 8,
    nivel: "intermedio",
    pregunta: {
      es: "Si el área del pistón de salida (A₂) es 10 veces mayor que el de entrada (A₁), la fuerza F₂ será...",
      en: "If the area of the output piston (A₂) is 10 times larger than the input (A₁), the force F₂ will be..."
    },
    opciones: {
      es: ["10 veces menor", "Igual a F₁", "10 veces mayor"],
      en: ["10 times smaller", "Equal to F₁", "10 times larger"]
    },
    correcta: 2
  },
  {
    id: 9,
    nivel: "intermedio",
    pregunta: {
      es: "¿Cuál de los siguientes es un ejemplo de aplicación real del Principio de Pascal?",
      en: "Which of the following is a real-world application of Pascal's Principle?"
    },
    opciones: {
      es: ["El vuelo de un avión", "El sistema de frenos de un auto", "El funcionamiento de un termómetro"],
      en: ["An airplane flight", "A car braking system", "The operation of a thermometer"]
    },
    correcta: 1
  },
  {
    id: 10,
    nivel: "intermedio",
    pregunta: {
      es: "Para que el Principio de Pascal se cumpla perfectamente, el fluido debe ser ideal, lo que significa que es...",
      en: "For Pascal's Principle to hold perfectly, the fluid must be ideal, meaning it is..."
    },
    opciones: {
      es: ["Compresible y viscoso", "Altamente volátil", "Incompresible y sin viscosidad"],
      en: ["Compressible and viscous", "Highly volatile", "Incompressible and non-viscous"]
    },
    correcta: 2
  },

  // --- NIVEL: DIFÍCIL ---
  {
    id: 11,
    nivel: "dificil",
    pregunta: {
      es: "Si aplicamos 50 N en un pistón de 2 m², ¿cuál es la presión transmitida al resto del fluido?",
      en: "If we apply 50 N on a 2 m² piston, what is the pressure transmitted to the rest of the fluid?"
    },
    opciones: {
      es: ["100 Pa", "25 Pa", "0.04 Pa"],
      en: ["100 Pa", "25 Pa", "0.04 Pa"]
    },
    correcta: 1
  },
  {
    id: 12,
    nivel: "dificil",
    pregunta: {
      es: "Aunque la fuerza se multiplica en una prensa hidráulica, ¿qué magnitud física se conserva idealmente?",
      en: "Although force is multiplied in a hydraulic press, what physical quantity is ideally conserved?"
    },
    opciones: {
      es: ["La distancia recorrida", "El trabajo mecánico (energía)", "La velocidad del pistón"],
      en: ["The distance traveled", "Mechanical work (energy)", "The piston speed"]
    },
    correcta: 1
  },
  {
    id: 13,
    nivel: "dificil",
    pregunta: {
      es: "Si el pistón pequeño baja 10 cm, y el área del grande es 5 veces mayor, ¿cuánto sube el pistón grande?",
      en: "If the small piston moves down 10 cm, and the large piston's area is 5 times larger, how much does the large piston rise?"
    },
    opciones: { 
      es: ["50 cm", "10 cm", "2 cm"],
      en: ["50 cm", "10 cm", "2 cm"]
    },
    correcta: 2
  },
  {
    id: 14,
    nivel: "dificil",
    pregunta: {
      es: "La presión hidrostática en un punto dentro de un líquido en reposo depende directamente de:",
      en: "Hydrostatic pressure at a point inside a liquid at rest depends directly on:"
    },
    opciones: {
      es: ["La forma del recipiente", "La densidad del líquido y la profundidad", "La masa total del líquido"],
      en: ["The shape of the container", "The liquid density and depth", "The total mass of the liquid"]
    },
    correcta: 1
  },
  {
    id: 15,
    nivel: "dificil",
    pregunta: {
      es: "Un barómetro mide la presión atmosférica equilibrándola con una columna de:",
      en: "A barometer measures atmospheric pressure by balancing it with a column of:"
    },
    opciones: {
      es: ["Agua", "Mercurio", "Alcohol"],
      en: ["Water", "Mercury", "Alcohol"]
    },
    correcta: 1
  }
];

let preguntaActualIndex = 0;
let puntaje = 0;
let correctas = 0;
let intentos = 0;

function idiomaActivo() {
  return window.currentLang || window.idiomaActual || "es";
}

function actualizarMarcador() {
  const elP = document.getElementById("puntaje");
  const elC = document.getElementById("correctas");
  const elI = document.getElementById("intentos");
  if (elP) elP.textContent = puntaje;
  if (elC) elC.textContent = correctas;
  if (elI) elI.textContent = intentos;
}

function iniciarTrivia() {
  preguntaActualIndex = 0;
  puntaje = 0;
  correctas = 0;
  intentos = 0;
  actualizarMarcador();
  mostrarPregunta();
}

function mostrarPregunta() {
  const badge = document.getElementById("retoBadge");
  const progress = document.getElementById("retoProgress");
  const pregunta = document.getElementById("retoPregunta");
  const opciones = document.getElementById("retoOpciones");
  const feedback = document.getElementById("retoFeedback");
  if (!pregunta || !opciones) return;

  if (feedback) feedback.textContent = "";

  if (preguntaActualIndex >= bancoPreguntas.length) {
    mostrarResultadosFinales();
    return;
  }

  const item = bancoPreguntas[preguntaActualIndex];
  const lang = idiomaActivo();

  const textoNivel = {
    facil: { es: "Fácil", en: "Easy" },
    intermedio: { es: "Intermedio", en: "Intermediate" },
    dificil: { es: "Difícil", en: "Difficult" }
  };

  if (badge) badge.textContent = `Reto #${preguntaActualIndex + 1} — ${textoNivel[item.nivel][lang]}`;
  if (progress) progress.textContent = `${preguntaActualIndex + 1} / ${bancoPreguntas.length}`;
  pregunta.textContent = item.pregunta[lang];

  opciones.innerHTML = "";
  item.opciones[lang].forEach((texto, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-opcion";
    btn.textContent = texto;
    btn.addEventListener("click", () => validarRespuesta(index));
    opciones.appendChild(btn);
  });
}

function validarRespuesta(indiceSeleccionado) {
  const item = bancoPreguntas[preguntaActualIndex];
  const botones = document.querySelectorAll("#retoOpciones .btn-opcion");
  const feedback = document.getElementById("retoFeedback");
  const lang = idiomaActivo();

  botones.forEach(btn => btn.disabled = true);
  intentos++;

  if (indiceSeleccionado === item.correcta) {
    correctas++;
    if (item.nivel === "facil") puntaje += 10;
    else if (item.nivel === "intermedio") puntaje += 20;
    else if (item.nivel === "dificil") puntaje += 30;

    botones[indiceSeleccionado].classList.add("correcto");
    if (feedback) {
      feedback.textContent = lang === "es" ? "¡Correcto!" : "Correct!";
      feedback.style.color = "#2ec4b6";
    }
  } else {
    botones[indiceSeleccionado].classList.add("incorrecto");
    botones[item.correcta].classList.add("correcto");
    if (feedback) {
      feedback.textContent = lang === "es" ? "Incorrecto." : "Incorrect.";
      feedback.style.color = "#ff6b6b";
    }
  }

  actualizarMarcador();

  setTimeout(() => {
    preguntaActualIndex++;
    mostrarPregunta();
  }, 1400);
}

function mostrarResultadosFinales() {
  const badge = document.getElementById("retoBadge");
  const progress = document.getElementById("retoProgress");
  const pregunta = document.getElementById("retoPregunta");
  const opciones = document.getElementById("retoOpciones");
  const feedback = document.getElementById("retoFeedback");
  const lang = idiomaActivo();

  const tituloFinal = lang === "es" ? "🏆 ¡Reto Completado!" : "🏆 Challenge Completed!";
  const tuPuntaje = lang === "es" ? `Tu puntaje final es de: ${puntaje} puntos.` : `Your final score is: ${puntaje} points.`;
  const btnReiniciar = lang === "es" ? "Intentar de nuevo" : "Try again";

  if (badge) badge.textContent = tituloFinal;
  if (progress) progress.textContent = "";
  if (pregunta) pregunta.textContent = tuPuntaje;
  if (feedback) feedback.textContent = "";
  if (opciones) {
    opciones.innerHTML = "";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-primary";
    btn.textContent = btnReiniciar;
    btn.addEventListener("click", iniciarTrivia);
    opciones.appendChild(btn);
  }
}

window.addEventListener("cambioIdioma", () => {
  mostrarPregunta();
});

document.addEventListener("DOMContentLoaded", () => iniciarTrivia());

window.iniciarTrivia = iniciarTrivia;
window.validarRespuesta = validarRespuesta;
