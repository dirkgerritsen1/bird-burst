/* ---------- footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- sunburst rays (generated to keep markup clean) ---------- */
(function buildSunRays() {
  const group = document.querySelector('.hero__sun-rays');
  if (!group) return;
  const cx = 400, cy = 400;
  const rInner = 110, rOuter = 380;
  const count = 60;
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * rInner;
    const y1 = cy + Math.sin(a) * rInner;
    const x2 = cx + Math.cos(a) * rOuter;
    const y2 = cy + Math.sin(a) * rOuter;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1.toFixed(2));
    line.setAttribute('y1', y1.toFixed(2));
    line.setAttribute('x2', x2.toFixed(2));
    line.setAttribute('y2', y2.toFixed(2));
    line.setAttribute('opacity', (0.15 + (i % 3) * 0.18).toFixed(2));
    group.appendChild(line);
  }
})();

/* ---------- nav scrolled state ---------- */
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 30) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- mobile menu ---------- */
const menuBtn = document.querySelector('.nav__menu');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.nav__links a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- scroll reveals ---------- */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  reveals.forEach((el, i) => {
    // small natural stagger for siblings
    el.style.transitionDelay = `${Math.min(i * 30, 200)}ms`;
    io.observe(el);
  });
} else {
  reveals.forEach(el => el.classList.add('is-in'));
}

/* ---------- subtle parallax on portrait ---------- */
const portrait = document.querySelector('.hero__portrait-frame');
if (portrait && window.matchMedia('(min-width: 980px)').matches) {
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', (e) => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    portrait.style.transform = `rotate(${1.5 + dx * 1.5}deg) translate(${dx * 8}px, ${dy * 6}px)`;
  });
  hero.addEventListener('mouseleave', () => {
    portrait.style.transform = '';
  });
}
