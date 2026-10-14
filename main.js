document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  // Theme preference: light/white is the default; dark is optional.
  const themeToggle = document.querySelector('.theme-toggle');
  const themeIcon = document.querySelector('.theme-icon');
  const themeLabel = document.querySelector('.theme-label');
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('mokesh-portfolio-theme') || 'light'; } catch (e) {}
  const applyTheme = (theme) => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀' : '◐';
    if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'White theme' : 'Dark theme';
    if (themeToggle) themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to white theme' : 'Switch to dark theme');
  };
  applyTheme(savedTheme);
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
      applyTheme(nextTheme);
      try { localStorage.setItem('mokesh-portfolio-theme', nextTheme); } catch (e) {}
    });
  }
});