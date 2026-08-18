/* Motion: Lenis smooth scroll + additive reveal.
   Principles: content is visible by default; motion only enhances. Elements
   already in view on load do NOT animate (no load choreography). Everything
   is disabled under prefers-reduced-motion. Lenis is optional — if it fails
   to load, native scroll still works. */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* ---- Lenis smooth scroll (progressive: only if the lib loaded) ---- */
  if (!reduce && typeof window.Lenis === 'function') {
    const lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    // don't hijack in-page anchor jumps unexpectedly
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
          const t = document.querySelector(id);
          if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -20 }); }
        }
      });
    });
  }

  /* ---- reveal ---- */
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!els.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-in', 'no-anim'));
    return;
  }

  // Mark elements already in the viewport as shown WITHOUT animating (no load choreography).
  const shownAtLoad = new Set();
  els.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      el.classList.add('no-anim', 'is-in');
      shownAtLoad.add(el);
    }
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  els.forEach(el => { if (!shownAtLoad.has(el)) io.observe(el); });

  // Safety sweep: never leave content hidden if the observer never fires.
  setTimeout(() => els.forEach(el => el.classList.add('is-in')), 2500);
})();

/* Lightbox: click any figure or showcase image to enlarge. */
(() => {
  const zoomable = document.querySelectorAll('.showcase img, .fig .frame img');
  if (!zoomable.length) return;
  const ov = document.createElement('div');
  ov.className = 'lightbox';
  ov.setAttribute('role', 'dialog');
  ov.setAttribute('aria-modal', 'true');
  ov.innerHTML = '<button class="lightbox-close" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(ov);
  const big = ov.querySelector('img');
  const open = (img) => {
    big.src = img.currentSrc || img.src; big.alt = img.alt || '';
    ov.classList.add('open'); document.body.classList.add('lb-lock');
  };
  const close = () => { ov.classList.remove('open'); document.body.classList.remove('lb-lock'); };
  zoomable.forEach(img => { img.classList.add('zoomable'); img.addEventListener('click', () => open(img)); });
  ov.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

/* Custom circle cursor: a ring that trails the pointer (fine-pointer devices only). */
(() => {
  if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const ring = document.createElement('div');
  ring.className = 'cursor';
  document.body.appendChild(ring);
  document.documentElement.classList.add('cursor-on');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; ring.classList.add('on'); });
  document.addEventListener('mouseleave', () => ring.classList.remove('on'));
  document.addEventListener('mousedown', () => ring.classList.add('down'));
  document.addEventListener('mouseup', () => ring.classList.remove('down'));
  const sel = 'a,button,[role=button],input,textarea,select,.zoomable';
  document.addEventListener('mouseover', (e) => { if (e.target.closest && e.target.closest(sel)) ring.classList.add('hover'); });
  document.addEventListener('mouseout', (e) => { if (e.target.closest && e.target.closest(sel)) ring.classList.remove('hover'); });
  (function loop() {
    const k = reduce ? 1 : 0.2;
    rx += (mx - rx) * k; ry += (my - ry) * k;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
})();
