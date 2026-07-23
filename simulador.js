function calcularPascal(F1, A1, A2) {
    let P = F1 / A1;
    let F2 = P * A2;
    return { presion: P, fuerza2: F2 };
}

function actualizarResultados() {
    let F1 = parseFloat(document.getElementById("f1").value) || 0;
    let a1raw = parseFloat(document.getElementById("a1s").value) || 1;
    let a2raw = parseFloat(document.getElementById("a2s").value) || 1;

    let A1 = parseFloat((a1raw * 0.002).toFixed(3));
    let A2 = parseFloat((a2raw * 0.002).toFixed(3));

    document.getElementById("f1val").textContent = F1;
    document.getElementById("a1val").textContent = A1.toFixed(3);
    document.getElementById("a2val").textContent = A2.toFixed(3);

    if (A1 === 0) {
        document.getElementById("resultPresion").textContent = "—";
        document.getElementById("resultF2").textContent = "—";
        return;
    }

    let resultado = calcularPascal(F1, A1, A2);

    document.getElementById("resultPresion").textContent =
        resultado.presion.toLocaleString('es-PE', { maximumFractionDigits: 0 }) + " Pa";
    document.getElementById("resultF2").textContent =
        resultado.fuerza2.toFixed(2) + " N";

    if (window.simData) {
        window.simData.f1 = F1;
        window.simData.a1 = A1;
        window.simData.a2 = A2;
        window.simData.presion = Math.round(resultado.presion);
        window.simData.f2 = Math.round(resultado.fuerza2);
    }
}

function calcularNecesario() {
    let peso = parseFloat(document.getElementById("peso").value) || 0;
    let A1   = parseFloat(document.getElementById("area1d").value) || 0;
    let A2   = parseFloat(document.getElementById("area2d").value) || 0;

    const resBox = document.getElementById("resultado2");
    const btnPDF = document.getElementById("btnPDF");

    if (A2 === 0) {
        resBox.style.display = "flex";
        resBox.innerHTML = `<div class="result-item"><span class="result-label">Error</span><span class="result-value" style="color:#ff6b6b">A₂ no puede ser 0</span></div>`;
        return;
    }
    if (A1 === 0) {
        resBox.style.display = "flex";
        resBox.innerHTML = `<div class="result-item"><span class="result-label">Error</span><span class="result-value" style="color:#ff6b6b">A₁ no puede ser 0</span></div>`;
        return;
    }

    let F1_necesaria = (peso * A1) / A2;
    let presion = peso / A2;

    window.ultimoDiseno = { peso, A1, A2, F1_necesaria, presion };

    resBox.style.display = "flex";
    resBox.innerHTML = `
      <div class="result-item">
        <span class="result-label">Fuerza necesaria (F₁)</span>
        <span class="result-value">${F1_necesaria.toFixed(2)} N</span>
      </div>
      <div class="result-item">
        <span class="result-label">Presión del sistema</span>
        <span class="result-value accent2">${presion.toLocaleString('es-PE', {maximumFractionDigits:0})} Pa</span>
      </div>
      <div class="result-item">
        <span class="result-label">Relación A₂/A₁</span>
        <span class="result-value">${(A2/A1).toFixed(2)}x</span>
      </div>
    `;

    btnPDF.style.display = "inline-block";
}

function generarPDF() {
    const d = window.ultimoDiseno;
    if (!d) return;

    if (typeof window.jspdf !== 'undefined' || typeof jsPDF !== 'undefined') {
        const { jsPDF } = window.jspdf || window;
        const doc = new jsPDF();
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.text('HidroLab 360 — Reporte Hidráulico', 20, 25);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text(`Fecha: ${new Date().toLocaleDateString('es-PE')}`, 20, 38);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('Parámetros ingresados:', 20, 55);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.text(`Peso a levantar (F₂): ${d.peso} N`, 25, 67);
        doc.text(`Área pistón 1 (A₁): ${d.A1} m²`, 25, 77);
        doc.text(`Área pistón 2 (A₂): ${d.A2} m²`, 25, 87);
        doc.setFontSize(13);
        doc.setFont('helvetica', 'bold');
        doc.text('Resultados calculados:', 20, 103);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.text(`Fuerza necesaria (F₁): ${d.F1_necesaria.toFixed(2)} N`, 25, 115);
        doc.text(`Presión del sistema: ${d.presion.toFixed(0)} Pa`, 25, 125);
        doc.text(`Relación A₂/A₁: ${(d.A2/d.A1).toFixed(2)}x`, 25, 135);
        doc.setFontSize(10);
        doc.setTextColor(120);
        doc.text('Principio de Pascal: P = F₁/A₁ = F₂/A₂', 20, 155);
        doc.text('TECSUP — Ciencias Básicas Aplicadas 2025', 20, 165);
        doc.save('HidroLab360_Reporte.pdf');
    } else {
        alert(`REPORTE HIDROLAB 360\n\nPeso a levantar: ${d.peso} N\nA₁: ${d.A1} m²  |  A₂: ${d.A2} m²\n\nFuerza necesaria F₁: ${d.F1_necesaria.toFixed(2)} N\nPresión: ${d.presion.toFixed(0)} Pa\nRelación: ${(d.A2/d.A1).toFixed(2)}x`);
    }
}

document.addEventListener('DOMContentLoaded', () => actualizarResultados());