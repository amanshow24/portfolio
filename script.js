// Theme toggle (light is default; preference is remembered)
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  function applyIcon() {
    var theme = root.getAttribute('data-theme') || 'dark';
    btn.textContent = theme === 'light' ? '🌙' : '☀️';
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  }

  applyIcon();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    applyIcon();
  });
})();

// Mobile nav toggle
var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Visit counter (CountAPI, with a local fallback if the request fails)
(function () {
  var el = document.getElementById('visit-count');
  if (!el) return;

  var NAMESPACE = 'amanshow-me';
  var KEY = 'portfolio-visits';

  fetch('https://api.countapi.xyz/hit/' + NAMESPACE + '/' + KEY)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      el.textContent = data.value;
    })
    .catch(function () {
      var count = parseInt(localStorage.getItem(KEY) || '0', 10) + 1;
      localStorage.setItem(KEY, count);
      el.textContent = count;
    });
})();