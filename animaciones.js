const Animaciones = {
  init() {
    this.iniciarFondoNebulosa();
    this.iniciarOlasHero();
    this.iniciarPrensaHidraulica();
  },

  iniciarFondoNebulosa() {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.003 + 0.001,
      phase: Math.random() * Math.PI * 2
    }));

    const sparkles = Array.from({ length: 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 3,
      o: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      color: ['#2ec4b6','#e8c97a','#a78fff','#ffffff'][Math.floor(Math.random()*4)]
    }));

    const nebulae = [
      { x: 0.15, y: 0.3,  rx: 320, ry: 200, c1: 'rgba(46,196,182,0.07)',  c2: 'rgba(46,196,182,0)' },
      { x: 0.75, y: 0.6,  rx: 280, ry: 180, c1: 'rgba(107,63,160,0.09)', c2: 'rgba(107,63,160,0)' },
      { x: 0.5,  y: 0.15, rx: 350, ry: 160, c1: 'rgba(30,95,140,0.08)',  c2: 'rgba(30,95,140,0)' },
      { x: 0.85, y: 0.85, rx: 200, ry: 140, c1: 'rgba(232,201,122,0.05)',c2: 'rgba(232,201,122,0)' },
    ];

    let t = 0;

    const drawSparkle = (x, y, size, opacity, color) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.shadowColor = color;
      ctx.shadowBlur = 6;

      ctx.beginPath();
      ctx.moveTo(x - size, y); ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size); ctx.lineTo(x, y + size);

      const d = size * 0.4;
      ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d);
      ctx.moveTo(x + d, y - d); ctx.lineTo(x - d, y + d);
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nebulae.forEach(n => {
        const gx = n.x * canvas.width;
        const gy = n.y * canvas.height;
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(n.rx, n.ry));
        grad.addColorStop(0, n.c1);
        grad.addColorStop(1, n.c2);
        ctx.save();
        ctx.scale(1, n.ry / n.rx);
        ctx.beginPath();
        ctx.arc(gx, gy * (n.rx / n.ry), n.rx, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });

      stars.forEach(s => {
        const o = s.o * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,244,255,${o})`;
        ctx.fill();
      });

      sparkles.forEach(s => {
        const o = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed * 60 + s.phase));
        drawSparkle(s.x, s.y, s.size * o, o * 0.85, s.color);
      });

      t += 0.016;
      requestAnimationFrame(draw);
    };

    draw();
  },

  // ── OLAS HERO ──
  iniciarOlasHero() {
    const canvas = document.getElementById('waveCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      ctx.beginPath();
      ctx.moveTo(0, H * 0.6);
      for (let x = 0; x <= W; x++) {
        const y = H * 0.55 + Math.sin((x / W) * Math.PI * 3 + t) * 22
                             + Math.sin((x / W) * Math.PI * 6 + t * 1.4) * 10;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const g1 = ctx.createLinearGradient(0, H * 0.5, 0, H);
      g1.addColorStop(0, 'rgba(46,196,182,0.35)');
      g1.addColorStop(1, 'rgba(46,196,182,0.05)');
      ctx.fillStyle = g1; ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, H * 0.72);
      for (let x = 0; x <= W; x++) {
        const y = H * 0.68 + Math.sin((x / W) * Math.PI * 4 + t * 1.2 + 1) * 16
                             + Math.sin((x / W) * Math.PI * 2 + t * 0.8) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const g2 = ctx.createLinearGradient(0, H * 0.65, 0, H);
      g2.addColorStop(0, 'rgba(107,63,160,0.4)');
      g2.addColorStop(1, 'rgba(107,63,160,0.05)');
      ctx.fillStyle = g2; ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, H * 0.82);
      for (let x = 0; x <= W; x++) {
        const y = H * 0.8 + Math.sin((x / W) * Math.PI * 5 + t * 0.9 + 2) * 12;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      const g3 = ctx.createLinearGradient(0, H * 0.78, 0, H);
      g3.addColorStop(0, 'rgba(30,95,140,0.5)');
      g3.addColorStop(1, 'rgba(11,13,26,0.8)');
      ctx.fillStyle = g3; ctx.fill();

      t += 0.018;
      requestAnimationFrame(draw);
    };

    draw();
  },

  // ── PRENSA HIDRÁULICA ──
  iniciarPrensaHidraulica() {
    const canvas = document.getElementById('simCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    window.simData = { f1: 50, a1: 0.01, a2: 0.05, presion: 5000, f2: 250 };

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0b0d1a';
      ctx.fillRect(0, 0, W, H);

      const sd = window.simData;
      const ratio = Math.min(sd.a2 / sd.a1, 8);
      const bob = Math.sin(t) * 4;

      const p1x = 95, p2x = 290;
      const p1w = 44, p2w = Math.min(44 * Math.sqrt(ratio), 130);
      const baseY = H - 40;
      const fluidH = 130;

      // Tubo base
      ctx.fillStyle = 'rgba(46,196,182,0.06)';
      ctx.fillRect(p1x - p1w / 2, baseY - 20, p2x + p2w / 2 - (p1x - p1w / 2), 20);

      // Fluido pistón 1
      const g1 = ctx.createLinearGradient(0, baseY - fluidH, 0, baseY);
      g1.addColorStop(0, 'rgba(46,196,182,0.3)');
      g1.addColorStop(1, 'rgba(30,95,140,0.2)');
      ctx.fillStyle = g1;
      ctx.fillRect(p1x - p1w / 2, baseY - fluidH, p1w, fluidH);

      // Fluido pistón 2
      const fluidH2 = fluidH * 0.65;
      const g2 = ctx.createLinearGradient(0, baseY - fluidH2, 0, baseY);
      g2.addColorStop(0, 'rgba(107,63,160,0.35)');
      g2.addColorStop(1, 'rgba(30,95,140,0.15)');
      ctx.fillStyle = g2;
      ctx.fillRect(p2x - p2w / 2, baseY - fluidH2, p2w, fluidH2);

      // Ondas internas
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(46,196,182,${0.15 - i * 0.04})`;
        ctx.lineWidth = 1;
        const wy = baseY - 10 - i * 14;
        ctx.moveTo(p1x - p1w / 2 + 4, wy);
        for (let x = p1x - p1w / 2 + 4; x <= p2x + p2w / 2 - 4; x++) {
          ctx.lineTo(x, wy + Math.sin((x / 22) + t + i) * 2.5);
        }
        ctx.stroke();
      }

      // Bordes pistón 1
      ctx.strokeStyle = 'rgba(46,196,182,0.6)';
      ctx.lineWidth = 2;
      ctx.strokeRect(p1x - p1w / 2, baseY - fluidH, p1w, fluidH + 20);

      // Bordes pistón 2
      ctx.strokeStyle = 'rgba(167,143,255,0.6)';
      ctx.strokeRect(p2x - p2w / 2, baseY - fluidH2, p2w, fluidH2 + 20);

      // Pistón 1 móvil
      const pg1 = ctx.createLinearGradient(0, 0, p1w, 0);
      pg1.addColorStop(0, '#1a8fa8'); pg1.addColorStop(1, '#2ec4b6');
      ctx.fillStyle = pg1;
      ctx.beginPath();
      ctx.roundRect(p1x - p1w / 2 + 2, baseY - fluidH - 12 + bob, p1w - 4, 13, 4);
      ctx.fill();

      // Pistón 2 móvil
      const pg2 = ctx.createLinearGradient(0, 0, p2w, 0);
      pg2.addColorStop(0, '#6b3fa0'); pg2.addColorStop(1, '#a78fff');
      ctx.fillStyle = pg2;
      ctx.beginPath();
      ctx.roundRect(p2x - p2w / 2 + 2, baseY - fluidH2 - 12 - bob * (ratio * 0.25), p2w - 4, 13, 4);
      ctx.fill();

      // Flecha F1
      ctx.strokeStyle = '#2ec4b6'; ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(p1x, baseY - fluidH - 34 + bob);
      ctx.lineTo(p1x, baseY - fluidH - 14 + bob);
      ctx.stroke();
      // punta flecha
      ctx.beginPath();
      ctx.moveTo(p1x - 5, baseY - fluidH - 22 + bob);
      ctx.lineTo(p1x, baseY - fluidH - 14 + bob);
      ctx.lineTo(p1x + 5, baseY - fluidH - 22 + bob);
      ctx.strokeStyle = '#2ec4b6'; ctx.stroke();

      // Label F1
      ctx.fillStyle = '#2ec4b6';
      ctx.font = 'bold 11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(`F₁ = ${sd.f1}N`, p1x, baseY - fluidH - 38 + bob);

      // Flecha F2
      ctx.strokeStyle = '#a78fff'; ctx.lineWidth = 2.5;
      const p2top = baseY - fluidH2 - 12 - bob * (ratio * 0.25);
      ctx.beginPath();
      ctx.moveTo(p2x, p2top - 22);
      ctx.lineTo(p2x, p2top - 4);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(p2x - 5, p2top - 12);
      ctx.lineTo(p2x, p2top - 4);
      ctx.lineTo(p2x + 5, p2top - 12);
      ctx.strokeStyle = '#a78fff'; ctx.stroke();

      ctx.fillStyle = '#a78fff';
      ctx.fillText(`F₂ = ${sd.f2}N`, p2x, p2top - 26);

      // Presión central
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.font = '10px Inter';
      ctx.fillText(`P = ${sd.presion.toLocaleString()} Pa`, (p1x + p2x) / 2, baseY - 6);

      t += 0.05;
      requestAnimationFrame(draw);
    };

    draw();
  }
};

document.addEventListener('DOMContentLoaded', () => Animaciones.init());