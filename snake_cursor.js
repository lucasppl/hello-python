// --- SNAKE CURSOR ---
if (window.matchMedia("(pointer: fine)").matches) {
  // Cria o canvas
  const snakeCanvas = document.createElement("canvas");
  snakeCanvas.id = "snake-canvas";
  document.body.appendChild(snakeCanvas);
  const ctx = snakeCanvas.getContext("2d");

  function resizeSnake() {
    snakeCanvas.width = window.innerWidth;
    snakeCanvas.height = window.innerHeight;
  }
  resizeSnake();
  window.addEventListener("resize", resizeSnake);

  // Estado
  const N = 22;
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let hx = mx,
    hy = my;
  let snakeHover = false;
  let snakeClick = false;
  let blinkTimer = 0;
  let tongueTimer = 0;

  // Pontos do corpo
  const pts = [];
  for (let i = 0; i <= N; i++) pts.push({ x: mx, y: my });

  // Eventos de mouse
  window.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
    },
    { passive: true },
  );
  window.addEventListener("mousedown", () => {
    snakeClick = true;
  });
  window.addEventListener("mouseup", () => {
    snakeClick = false;
  });

  // Hover em elementos interativos
  const SELECTORS =
    'a, button, summary, input, select, textarea, label, [role="button"]';
  function attachSnakeHover(el) {
    el.addEventListener("mouseenter", () => {
      snakeHover = true;
    });
    el.addEventListener("mouseleave", () => {
      snakeHover = false;
    });
  }
  document.querySelectorAll(SELECTORS).forEach(attachSnakeHover);

  // Observa novos elementos adicionados ao DOM
  new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.matches && node.matches(SELECTORS)) attachSnakeHover(node);
          if (node.querySelectorAll)
            node.querySelectorAll(SELECTORS).forEach(attachSnakeHover);
        }
      });
    });
  }).observe(document.body, { childList: true, subtree: true });

  // Paleta
  const GREEN_BODY = "#4ecb7a";
  const GREEN_DARK = "#1a6b46";
  const GREEN_LIGHT = "#a8f0c6";
  const GOLD_BODY = "#ffc84a";
  const GOLD_DARK = "#7a4e00";
  const GOLD_LIGHT = "#fff0b3";
  const PINK_BODY = "#ff7eb8";
  const PINK_DARK = "#6b0030";
  const PINK_LIGHT = "#ffd6ea";
  const TONGUE_COLOR = "#ff3d6e";

  const lerp = (a, b, t) => a + (b - a) * t;

  function getColors() {
    if (snakeClick)
      return { body: PINK_BODY, dark: PINK_DARK, light: PINK_LIGHT };
    if (snakeHover)
      return { body: GOLD_BODY, dark: GOLD_DARK, light: GOLD_LIGHT };
    return { body: GREEN_BODY, dark: GREEN_DARK, light: GREEN_LIGHT };
  }

  // Desenha segmento do corpo
  function drawSegment(x, y, r, angle) {
    const col = getColors();
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.shadowColor = "rgba(0,0,0,0.18)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 3;

    ctx.beginPath();
    ctx.ellipse(0, 0, r * 1.15, r, 0, 0, Math.PI * 2);
    ctx.fillStyle = col.body;
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    ctx.shadowOffsetY = 0;
    ctx.lineWidth = 2;
    ctx.strokeStyle = col.dark;
    ctx.stroke();

    // barriga clara
    ctx.beginPath();
    ctx.ellipse(r * 0.08, r * 0.22, r * 0.58, r * 0.44, 0, 0, Math.PI * 2);
    ctx.fillStyle = col.light;
    ctx.globalAlpha = 0.45;
    ctx.fill();
    ctx.globalAlpha = 1;

    // brilho
    ctx.beginPath();
    ctx.ellipse(-r * 0.32, -r * 0.3, r * 0.3, r * 0.18, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.fill();

    ctx.restore();
  }

  // Desenha cabeça
  function drawHead(x, y, angle) {
    const col = getColors();
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    const sc = snakeClick ? 0.82 : snakeHover ? 1.18 : 1.0;
    ctx.scale(sc, sc);

    const bob = snakeHover ? Math.sin(Date.now() * 0.007) * 3 : 0;
    ctx.translate(0, bob);

    ctx.shadowColor = "rgba(0,0,0,0.22)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;

    // cabeça oval
    ctx.beginPath();
    ctx.ellipse(2, 0, 23, 17, 0, 0, Math.PI * 2);
    ctx.fillStyle = col.body;
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
    ctx.shadowOffsetY = 0;
    ctx.lineWidth = 2.8;
    ctx.strokeStyle = col.dark;
    ctx.stroke();

    // barriga da cabeça
    ctx.beginPath();
    ctx.ellipse(6, 4, 13, 10, 0, 0, Math.PI * 2);
    ctx.fillStyle = col.light;
    ctx.globalAlpha = 0.42;
    ctx.fill();
    ctx.globalAlpha = 1;

    // brilho topo
    ctx.beginPath();
    ctx.ellipse(-6, -6, 9, 5, -0.4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.fill();

    // narinas
    ctx.fillStyle = col.dark;
    ctx.beginPath();
    ctx.arc(21, -4, 2.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(21, 4, 2.3, 0, Math.PI * 2);
    ctx.fill();

    // língua bifurcada
    if (Math.sin(tongueTimer) > 0.15) {
      const tLen = snakeHover ? 17 : 11;
      ctx.save();
      ctx.translate(22, 0);
      ctx.strokeStyle = TONGUE_COLOR;
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(tLen, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(tLen, 0);
      ctx.lineTo(tLen + 6, -5);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(tLen, 0);
      ctx.lineTo(tLen + 6, 5);
      ctx.stroke();
      ctx.restore();
    }

    // olho
    const blinkOpen = Math.sin(blinkTimer) > -0.95;
    ctx.beginPath();
    ctx.arc(11, -6, 6.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = col.dark;
    ctx.stroke();

    if (blinkOpen) {
      ctx.beginPath();
      ctx.arc(12.5, -6, snakeHover ? 3.8 : 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "#1a1a1a";
      ctx.fill();
      // brilho do olho
      ctx.beginPath();
      ctx.arc(11.2, -7.4, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      // coração no hover
      if (snakeHover) {
        ctx.font = "bold 11px serif";
        ctx.fillStyle = "#ff3d6e";
        ctx.fillText("♥", 17, -11);
      }
      // estrela no click
      if (snakeClick) {
        ctx.font = "bold 10px serif";
        ctx.fillStyle = "#ff8800";
        ctx.fillText("★", 17, -11);
      }
    } else {
      // olho fechado
      ctx.beginPath();
      ctx.moveTo(5, -6);
      ctx.lineTo(17, -6);
      ctx.strokeStyle = col.dark;
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    // bochechas no hover
    if (snakeHover) {
      ctx.beginPath();
      ctx.arc(8, 6, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,150,150,0.35)";
      ctx.fill();
    }

    ctx.restore();
  }

  // Loop de animação
  let prevTime = performance.now();

  function snakeFrame(now) {
    const dt = Math.min((now - prevTime) / 16.67, 3);
    prevTime = now;

    blinkTimer += 0.018 * dt;
    tongueTimer += 0.052 * dt;

    // move cabeça
    const lh = 1 - Math.pow(1 - 0.17, dt);
    hx += (mx - hx) * lh;
    hy += (my - hy) * lh;
    pts[0].x = hx;
    pts[0].y = hy;

    // propaga segmentos
    for (let i = 1; i <= N; i++) {
      const lb = 1 - Math.pow(1 - 0.43 * (1 - (i / N) * 0.32), dt);
      pts[i].x += (pts[i - 1].x - pts[i].x) * lb;
      pts[i].y += (pts[i - 1].y - pts[i].y) * lb;
    }

    ctx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    // desenha do rabo pra cabeça
    for (let i = N; i >= 1; i--) {
      const t = i / N;
      const r = lerp(13, 4.5, t);
      const dx = pts[i].x - pts[i - 1].x;
      const dy = pts[i].y - pts[i - 1].y;
      const ang = Math.atan2(dy, dx) + Math.PI / 2;
      drawSegment(pts[i].x, pts[i].y, r, ang);
    }

    // cabeça
    const hdx = pts[0].x - pts[1].x;
    const hdy = pts[0].y - pts[1].y;
    drawHead(pts[0].x, pts[0].y, Math.atan2(hdy, hdx));

    requestAnimationFrame(snakeFrame);
  }

  requestAnimationFrame(snakeFrame);
}
