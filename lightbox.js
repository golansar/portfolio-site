(() => {
  /* ─── Styles ─────────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    .lb-overlay {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      background: rgba(8, 8, 26, 0.92);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      opacity: 0; pointer-events: none;
      transition: opacity 0.25s ease;
      cursor: zoom-out;
    }
    .lb-overlay.lb-open {
      opacity: 1; pointer-events: all;
    }
    .lb-img-wrap {
      transform: scale(0.88) translateY(12px);
      transition: transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1);
    }
    .lb-overlay.lb-open .lb-img-wrap {
      transform: scale(1) translateY(0);
    }
    .lb-img-wrap img {
      display: block;
      max-width: 90vw; max-height: 88vh;
      object-fit: contain;
      border-radius: 6px;
      box-shadow: 0 40px 100px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06);
      cursor: default;
      user-select: none;
    }
    .lb-close {
      position: fixed; top: 20px; right: 24px;
      width: 44px; height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,.18);
      background: rgba(255,255,255,.08);
      backdrop-filter: blur(8px);
      color: rgba(255,255,255,.85);
      font-size: 18px; line-height: 1;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background 0.2s, border-color 0.2s, transform 0.2s;
      z-index: 10000;
    }
    .lb-close:hover {
      background: rgba(255,255,255,.16);
      border-color: rgba(255,255,255,.35);
      transform: rotate(90deg);
    }
    .lb-hint {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 12px; letter-spacing: .08em;
      color: rgba(255,255,255,.3);
      pointer-events: none;
      transition: opacity 0.3s;
      z-index: 10000;
    }
    img.lb-zoomable {
      cursor: zoom-in;
      transition: opacity 0.2s, transform 0.2s;
    }
    img.lb-zoomable:hover {
      opacity: 0.88;
      transform: scale(1.01);
    }
  `;
  document.head.appendChild(style);

  /* ─── DOM ────────────────────────────────────────────────── */
  const overlay  = document.createElement('div');
  overlay.className = 'lb-overlay';

  const wrap = document.createElement('div');
  wrap.className = 'lb-img-wrap';

  const display = document.createElement('img');
  wrap.appendChild(display);
  overlay.appendChild(wrap);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lb-close';
  closeBtn.innerHTML = '&#x2715;';
  closeBtn.setAttribute('aria-label', 'Close image');
  overlay.appendChild(closeBtn);

  const hint = document.createElement('div');
  hint.className = 'lb-hint';
  hint.textContent = 'Click anywhere or press Esc to close';
  overlay.appendChild(hint);

  document.body.appendChild(overlay);

  /* ─── State ──────────────────────────────────────────────── */
  let isOpen = false;

  /* ─── Open / Close ───────────────────────────────────────── */
  function open(src, alt) {
    display.src = src;
    display.alt = alt || '';
    overlay.style.display = 'flex';
    // Force reflow so transition fires
    overlay.getBoundingClientRect();
    overlay.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }

  function close() {
    if (!isOpen) return;
    overlay.classList.remove('lb-open');
    isOpen = false;
    setTimeout(() => {
      overlay.style.display = 'none';
      display.src = '';
    }, 280);
    document.body.style.overflow = '';
  }

  /* ─── Events ─────────────────────────────────────────────── */
  overlay.addEventListener('click', e => {
    if (e.target !== display) close();
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  /* ─── Attach to images ───────────────────────────────────── */
  function attach() {
    document.querySelectorAll('img').forEach(img => {
      // Skip: hero covers, nav, already processed
      if (img.dataset.lb === 'skip') return;
      if (img.closest('.case-hero')) { img.dataset.lb = 'skip'; return; }
      if (img.closest('nav'))        { img.dataset.lb = 'skip'; return; }
      if (img.dataset.lb === 'done') return;

      img.dataset.lb = 'done';
      img.classList.add('lb-zoomable');
      img.addEventListener('click', () => open(img.src, img.alt));
    });
  }

  // Run once DOM is ready, then observe for lazy-loaded images
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }

  // Re-attach if new images are dynamically added
  const mo = new MutationObserver(attach);
  mo.observe(document.body, { childList: true, subtree: true });
})();
