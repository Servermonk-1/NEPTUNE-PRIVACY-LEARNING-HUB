// ============================================================
// NEPTUNE PRIVACY — THEME TOGGLE
// ============================================================

function getTheme() {
	return localStorage.getItem('neptune_theme') || 'dark';
}

function setTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('neptune_theme', theme);
}

function toggleTheme() {
	const current = getTheme();
	const next = current === 'dark' ? 'light' : 'dark';
	setTheme(next);
}

function initTheme() {
	// Apply saved theme ASAP (pre-render)
	setTheme(getTheme());

	const toggle = document.getElementById('themeToggle');
	if (toggle) {
		toggle.addEventListener('click', toggleTheme);
	}
}

// Apply theme immediately to avoid flash (before DOMContentLoaded)
(function () {
	const saved = localStorage.getItem('neptune_theme') || 'dark';
	document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', initTheme);