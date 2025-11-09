// Cek localStorage atau preferensi sistem
function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  
  // Jika belum ada, cek preferensi sistem
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

// Apply tema ke <html> element
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update button text
  const button = document.getElementById('theme-toggle-btn');
  if (button) {
    button.textContent = theme === 'dark' ? '☀️ light' : '🌙 dark';
  }
}

// Toggle tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  
  // Buat tombol toggle
  const button = document.createElement('button');
  button.id = 'theme-toggle-btn';
  button.className = 'theme-toggle';
  button.onclick = toggleTheme;
  document.body.appendChild(button);
  
  // Update text awal
  button.textContent = initialTheme === 'dark' ? '☀️ light' : '🌙 dark';
});

// Listen untuk perubahan preferensi sistem
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});