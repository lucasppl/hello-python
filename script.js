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

document.querySelectorAll(".faq").forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      document.querySelectorAll(".faq").forEach((d) => {
        if (d !== details) d.open = false;
      });
    }
  });
});

// --- CUSTOM SNAKE CURSOR ---
if (window.matchMedia('(pointer: fine)').matches) {
  const snakeLength = 8;
  const snakeParts = [];
  let mouseX = -100;
  let mouseY = -100;

  for (let i = 0; i < snakeLength; i++) {
    const part = document.createElement('div');
    part.classList.add('snake-part');
    if (i === 0) {
      part.classList.add('snake-head');
      part.innerHTML = '🐍';
    } else {
      part.style.opacity = 1 - (i / snakeLength) * 0.5;
      part.style.zIndex = 99999 - i;
    }
    document.body.appendChild(part);
    snakeParts.push({ el: part, x: -100, y: -100 });
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateSnake = () => {
    let dx = mouseX - snakeParts[0].x;
    let dy = mouseY - snakeParts[0].y;
    snakeParts[0].x += dx * 0.6;
    snakeParts[0].y += dy * 0.6;
    snakeParts[0].el.style.transform = `translate(${snakeParts[0].x}px, ${snakeParts[0].y}px) translate(-50%, -50%)`;

    for (let i = 1; i < snakeLength; i++) {
      const prev = snakeParts[i - 1];
      const curr = snakeParts[i];
      
      const dx = prev.x - curr.x;
      const dy = prev.y - curr.y;
      
      curr.x += dx * 0.45;
      curr.y += dy * 0.45;
      
      const scale = 1 - (i / snakeLength) * 0.45;
      curr.el.style.transform = `translate(${curr.x}px, ${curr.y}px) translate(-50%, -50%) scale(${scale})`;
    }
    
    requestAnimationFrame(animateSnake);
  };
  animateSnake();

  const interactables = document.querySelectorAll('a, button, summary, select, input, [role="button"], .term-run');
  interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      snakeParts.forEach(p => p.el.classList.add('snake-hover'));
    });
    el.addEventListener('mouseleave', () => {
      snakeParts.forEach(p => p.el.classList.remove('snake-hover'));
    });
  });
}
