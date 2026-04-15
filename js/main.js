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
  const vids     = typeof videos !== 'undefined' ? videos : [];
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
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const type    = document.getElementById('feedbackType')?.value;
    const message = document.getElementById('feedbackMessage')?.value?.trim();
    const name    = document.getElementById('feedbackName')?.value?.trim() || 'Anonymous';
    const email   = document.getElementById('feedbackEmail')?.value?.trim() || 'Not provided';
    if (!type || !message) return;
    const all = JSON.parse(localStorage.getItem('neptune_feedback') || '[]');
    all.push({ id: Date.now(), type, message, name, email, timestamp: new Date().toLocaleString() });
    localStorage.setItem('neptune_feedback', JSON.stringify(all));
    const status = document.getElementById('feedbackStatus');
    if (status) {
      status.style.display = 'block';
      status.textContent = '✅ Thank you! Your feedback has been submitted.';
      status.style.color = '#00b894';
    }
    form.reset();
    setTimeout(() => { if (status) status.style.display = 'none'; }, 4000);
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
  const nav    = document.querySelector('nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCounters();
  initScrollReveal();
  initFeedbackForm();
  initSearch();
  initMobileNav();

  // Typing effect on hero
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    const phrases = ['privacy is automatic.', 'quantum attacks fail.', 'you stay in control.', 'code runs in secret.'];
    let pi = 0, ci = 0, deleting = false;
    function type() {
      const phrase = phrases[pi];
      typingEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
      if (!deleting && ci > phrase.length)     { deleting = true; setTimeout(type, 1500); return; }
      if (deleting  && ci < 0)                 { deleting = false; pi = (pi + 1) % phrases.length; }
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
