// ============================================================
// NEPTUNE PRIVACY — SHARED UTILITIES
// ============================================================

// ── Counter animation ──────────────────────────────────────
function animateCounter(el, target, duration = 1200) {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));
  const tick = () => {
    start = Math.min(start + step, target);
    el.textContent = start;
    if (start < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function updateCounters() {
  const articles = typeof loadArticles === 'function' ? loadArticles() : [];
  const vids = typeof videos !== 'undefined' ? videos : [];
  const aEl = document.getElementById('articlesCount');
  const vEl = document.getElementById('videosCount');
  if (aEl) animateCounter(aEl, articles.length);
  if (vEl) animateCounter(vEl, vids.length);
}

// ── Scroll-reveal ──────────────────────────────────────────
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.card, .level-section, .about-section').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
}

// ── Feedback form ──────────────────────────────────────────
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const type = document.getElementById('feedbackType')?.value;
    const message = document.getElementById('feedbackMessage')?.value?.trim();
    const name = document.getElementById('feedbackName')?.value?.trim() || 'Anonymous';
    const email = document.getElementById('feedbackEmail')?.value?.trim() || 'Not provided';
    if (!type || !message) return;

    const status = document.getElementById('feedbackStatus');

    try {
      await db.collection('feedback').add({
        type,
        message,
        name,
        email,
        timestamp: new Date().toLocaleString(),
        createdAt: new Date()
      });

      if (status) {
        status.style.display = 'block';
        status.textContent = '✅ Thank you! Your feedback has been submitted.';
        status.style.color = '#00b894';
      }
      form.reset();
      setTimeout(() => { if (status) status.style.display = 'none'; }, 4000);

    } catch (error) {
      console.error('Feedback save failed:', error);
      if (status) {
        status.style.display = 'block';
        status.textContent = '❌ Something went wrong. Please try again.';
        status.style.color = '#ff5c5c';
      }
    }
  });
}

// ── Search live bind ───────────────────────────────────────
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput && typeof updateArticlesDisplay === 'function') {
    searchInput.addEventListener('input', updateArticlesDisplay);
  }
}

// ── Mobile nav ─────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

// ── XNT Price Ticker ───────────────────────────────────────
async function fetchXNTPrice() {
  const priceEl = document.getElementById('xntPrice');
  const changeEl = document.getElementById('xntChange');
  const volEl = document.getElementById('xntVol');
  const updatedEl = document.getElementById('xntUpdated');

  if (!priceEl) return; // not on a page that has the ticker

  try {
    const res = await fetch('/api/xnt-price');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const d = await res.json();

    if (!d.lastPrice) throw new Error('No data');

    const price = parseFloat(d.lastPrice);
    const change = parseFloat(d.priceChangePercent);
    const vol = parseFloat(d.quoteVolume);
    const fmtVol = vol >= 1e6 ? '$' + (vol / 1e6).toFixed(2) + 'M'
      : vol >= 1e3 ? '$' + (vol / 1e3).toFixed(1) + 'K'
        : '$' + vol.toFixed(0);

    priceEl.textContent = '$' + price.toFixed(6);
    changeEl.textContent = (change >= 0 ? '▲ +' : '▼ ') + Math.abs(change).toFixed(2) + '%';
    changeEl.className = 'xnt-change ' + (change >= 0 ? 'up' : 'down');
    volEl.textContent = 'Vol: ' + fmtVol;
    if (updatedEl) updatedEl.textContent = 'Updated ' + new Date().toLocaleTimeString();

  } catch (e) {
    console.error('XNT price fetch failed:', e);
    if (priceEl) priceEl.textContent = 'unavailable';
  }
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCounters();
  initScrollReveal();
  initFeedbackForm();
  initSearch();
  initMobileNav();

  // XNT Price Ticker — fetch immediately then every 60s
  fetchXNTPrice();
  setInterval(fetchXNTPrice, 60000);

  // Typing effect on hero
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    const phrases = ['privacy is automatic.', 'quantum attacks fail.', 'you stay in control.', 'code runs in secret.'];
    let pi = 0, ci = 0, deleting = false;
    function type() {
      const phrase = phrases[pi];
      typingEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
      if (!deleting && ci > phrase.length) { deleting = true; setTimeout(type, 1500); return; }
      if (deleting && ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      setTimeout(type, deleting ? 40 : 80);
    }
    type();
  }

  // Auto-refresh when admin saves
  window.addEventListener('storage', e => {
    if (e.key === 'neptune_articles' || e.key === 'neptune_articles_updated') {
      if (typeof updateArticlesDisplay === 'function') updateArticlesDisplay();
      updateCounters();
    }
  });
});

