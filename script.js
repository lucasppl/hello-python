const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav?.classList.toggle("scrolled", window.scrollY > 8);
  },
  { passive: true },
);

const ham = document.getElementById("ham");
const navLinks = document.getElementById("nav-links");

ham?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  ham.setAttribute("aria-expanded", String(open));
  ham.querySelectorAll("span").forEach((s, i) => {
    s.style.transform = open
      ? i === 0
        ? "translateY(7px) rotate(45deg)"
        : i === 1
          ? "scaleX(0)"
          : "translateY(-7px) rotate(-45deg)"
      : "";
    s.style.opacity = open && i === 1 ? "0" : "";
  });
});
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    ham?.setAttribute("aria-expanded", "false");
    ham?.querySelectorAll("span").forEach((s) => {
      s.style.transform = "";
      s.style.opacity = "";
    });
  }),
);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const offset =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
      ) || 66;
    const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

const revealObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObs.unobserve(e.target);
      }
    }),
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

function countUp(el, target, suffix = "") {
  const dur = 1800;
  const t0 = performance.now();
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    const val = Math.round((1 - Math.pow(1 - p, 3)) * target);
    el.textContent = val + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(performance.now());
}

let counted = false;
const numSection = document.getElementById("numbar");
if (numSection) {
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll(".nb-n[data-target]").forEach((el) => {
          countUp(el, +el.dataset.target, el.dataset.suffix || "");
        });
      }
    },
    { threshold: 0.4 },
  ).observe(numSection);
}

const faqItems = Array.from(document.querySelectorAll(".faq"));

function faqAnswer(details) {
  return details.querySelector(".faq-answer");
}

function openFaq(details) {
  const content = faqAnswer(details);
  if (!content) {
    details.classList.remove("faq-closing");
    details.open = true;
    return;
  }

  details.dataset.animating = "open";
  details.classList.remove("faq-closing");
  details.open = true;

  content.style.maxHeight = "0px";
  content.style.opacity = "0";
  content.style.transform = "translateY(-14px)";
  content.style.paddingBottom = "0px";
  content.style.overflow = "hidden";

  void content.offsetHeight;

  content.style.maxHeight = `${content.scrollHeight}px`;
  content.style.opacity = "1";
  content.style.transform = "translateY(0)";

  const onEnd = (event) => {
    if (event.propertyName !== "max-height") return;
    content.removeEventListener("transitionend", onEnd);
    content.style.maxHeight = "none";
    content.style.overflow = "";
    delete details.dataset.animating;
  };

  content.addEventListener("transitionend", onEnd);
}

function closeFaq(details) {
  const content = faqAnswer(details);
  if (!content) {
    details.classList.remove("faq-closing");
    details.open = false;
    return;
  }

  details.dataset.animating = "close";
  details.classList.add("faq-closing");

  content.style.maxHeight = `${content.scrollHeight}px`;
  content.style.opacity = "1";
  content.style.transform = "translateY(0)";
  content.style.paddingBottom = "18px";
  content.style.overflow = "hidden";

  void content.offsetHeight;

  content.style.maxHeight = "0px";
  content.style.opacity = "0";
  content.style.transform = "translateY(-14px)";
  content.style.paddingBottom = "0px";

  const onEnd = (event) => {
    if (event.propertyName !== "max-height") return;
    content.removeEventListener("transitionend", onEnd);
    details.open = false;
    details.classList.remove("faq-closing");
    content.style.removeProperty("max-height");
    content.style.removeProperty("overflow");
    delete details.dataset.animating;
  };

  content.addEventListener("transitionend", onEnd);
}

faqItems.forEach((details) => {
  const summary = details.querySelector("summary");
  const content = faqAnswer(details);
  if (!summary || !content) return;

  if (details.open) {
    content.style.maxHeight = "none";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
    content.style.paddingBottom = "18px";
  } else {
    content.style.maxHeight = "0px";
    content.style.opacity = "0";
    content.style.transform = "translateY(-14px)";
    content.style.paddingBottom = "0px";
  }

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (details.dataset.animating) return;

    if (details.open) {
      closeFaq(details);
      return;
    }

    faqItems.forEach((other) => {
      if (other !== details && other.open && !other.dataset.animating) {
        closeFaq(other);
      }
    });

    openFaq(details);
  });
});

(function () {
  // Aguardar o DOM estar completamente carregado
  function initSteps3D() {
    const stepWrappers = document.querySelectorAll(".step-wrapper");

    if (stepWrappers.length === 0) {
      console.warn("Nenhum .step-wrapper encontrado");
      return;
    }

    stepWrappers.forEach((wrapper) => {
      const stepCard = wrapper.querySelector(".step-3d");

      if (!stepCard) return;

      /**
       * Manipulador de movimento do mouse
       * Calcula a rotação 3D baseada na posição do mouse
       */
      const handleMouseMove = (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calcular rotação baseada na posição do mouse
        // Valores entre -12 e 12 graus para efeito mais visível
        const rotateX = ((centerY - y) / centerY) * 12;
        const rotateY = ((x - centerX) / centerX) * 12;

        // Aplicar transformação 3D com scale para destacar
        stepCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        stepCard.style.zIndex = "10";

        // Calcular sombra dinâmica baseada na rotação
        const shadowX = (rotateY / 8) * 8;
        const shadowY = (rotateX / 8) * 8;

        // Verificar se é o card accent (terceiro)
        const isAccent = stepCard.classList.contains("step-accent");

        if (isAccent) {
          // Sombra para card accent
          stepCard.style.boxShadow = `
            ${shadowX}px ${shadowY + 8}px 0 var(--brown-dk),
            ${shadowX}px ${shadowY + 20}px 35px rgba(26, 26, 26, 0.12),
            ${shadowX * 0.5}px ${shadowY * 0.5 + 10}px 20px rgba(26, 26, 26, 0.08)
          `;
        } else {
          // Sombra para cards normais
          stepCard.style.boxShadow = `
            ${shadowX}px ${shadowY + 15}px 35px rgba(26, 26, 26, 0.12),
            ${shadowX * 0.5}px ${shadowY * 0.5 + 8}px 20px rgba(26, 26, 26, 0.08)
          `;
        }
      };

      /**
       * Manipulador de saída do mouse
       * Reseta a transformação e sombra
       */
      const handleMouseLeave = () => {
        stepCard.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        stepCard.style.zIndex = "";

        // Resetar sombra baseado no tipo de card
        if (stepCard.classList.contains("step-accent")) {
          stepCard.style.boxShadow = `
            0 6px 0 var(--brown-dk),
            var(--s2)
          `;
        } else {
          stepCard.style.boxShadow = "var(--s1)";
        }
      };

      // Adicionar event listeners
      wrapper.addEventListener("mousemove", handleMouseMove);
      wrapper.addEventListener("mouseleave", handleMouseLeave);
    });
  }

  // Inicializar quando o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSteps3D);
  } else {
    initSteps3D();
  }
})();

// // --- CUSTOM SNAKE CURSOR ---
// if (window.matchMedia('(pointer: fine)').matches) {
//   const snakeLength = 8;
//   const snakeParts = [];
//   let mouseX = -100;
//   let mouseY = -100;

//   for (let i = 0; i < snakeLength; i++) {
//     const part = document.createElement('div');
//     part.classList.add('snake-part');
//     if (i === 0) {
//       part.classList.add('snake-head');
//       part.innerHTML = '🐍';
//     } else {
//       part.style.opacity = 1 - (i / snakeLength) * 0.5;
//       part.style.zIndex = 99999 - i;
//     }
//     document.body.appendChild(part);
//     snakeParts.push({ el: part, x: -100, y: -100 });
//   }

//   window.addEventListener('mousemove', (e) => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   const animateSnake = () => {
//     let dx = mouseX - snakeParts[0].x;
//     let dy = mouseY - snakeParts[0].y;
//     snakeParts[0].x += dx * 0.6;
//     snakeParts[0].y += dy * 0.6;
//     snakeParts[0].el.style.transform = `translate(${snakeParts[0].x}px, ${snakeParts[0].y}px) translate(-50%, -50%)`;

//     for (let i = 1; i < snakeLength; i++) {
//       const prev = snakeParts[i - 1];
//       const curr = snakeParts[i];

//       const dx = prev.x - curr.x;
//       const dy = prev.y - curr.y;

//       curr.x += dx * 0.45;
//       curr.y += dy * 0.45;

//       const scale = 1 - (i / snakeLength) * 0.45;
//       curr.el.style.transform = `translate(${curr.x}px, ${curr.y}px) translate(-50%, -50%) scale(${scale})`;
//     }

//     requestAnimationFrame(animateSnake);
//   };
//   animateSnake();

//   const interactables = document.querySelectorAll('a, button, summary, select, input, [role="button"], .term-run');
//   interactables.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//       snakeParts.forEach(p => p.el.classList.add('snake-hover'));
//     });
//     el.addEventListener('mouseleave', () => {
//       snakeParts.forEach(p => p.el.classList.remove('snake-hover'));
//     });
//   });
// }

(function () {
  const canvas = document.getElementById("cta-network");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];
  const maxDistance = 140;
  const pointCount = 80;
  const mouse = { x: null, y: null, radius: 130 };

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(canvas.clientWidth * dpr);
    canvas.height = Math.floor(canvas.clientHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    particles.length = 0;
    for (let i = 0; i < pointCount; i++) {
      particles.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: 1.6 + Math.random() * 1.8,
      });
    }
  }

  function draw() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    ctx.clearRect(0, 0, w, h);

    // Partículas + conexões
    for (let i = 0; i < particles.length; i++) {
      const pi = particles[i];
      pi.x += pi.vx;
      pi.y += pi.vy;

      if (pi.x < 0 || pi.x > w) pi.vx *= -1;
      if (pi.y < 0 || pi.y > h) pi.vy *= -1;

      ctx.beginPath();
      ctx.arc(pi.x, pi.y, pi.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(96, 185, 175, 0.75)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const pj = particles[j];
        const dx = pi.x - pj.x;
        const dy = pi.y - pj.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = 0.15 + (1 - dist / maxDistance) * 0.5;
          ctx.strokeStyle = `rgba(96, 185, 175, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.stroke();
        }
      }

      if (mouse.x !== null) {
        const mx = pi.x - mouse.x;
        const my = pi.y - mouse.y;
        const md = Math.sqrt(mx * mx + my * my);

        if (md < mouse.radius) {
          pi.x += (mx / md) * 0.7;
          pi.y += (my / md) * 0.7;

          ctx.strokeStyle = `rgba(177, 222, 189, 0.45)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  const action = () => {
    resize();
    createParticles();
  };

  window.addEventListener("resize", action);
  window.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  action();
  requestAnimationFrame(draw);
})();
