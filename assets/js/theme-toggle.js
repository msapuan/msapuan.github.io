/**
 * Theme Toggle Script
 * Manage dark/light mode dengan localStorage persistence
 * Support system preference detection
 */

const ThemeManager = {
  // Constants
  STORAGE_KEY: 'portfolio-theme',
  DARK_THEME: 'dark',
  LIGHT_THEME: 'light',
  DATA_ATTR: 'data-theme',
  BUTTON_ID: 'theme-toggle-btn',

  // Icons untuk button
  icons: {
    dark: '🌙 dark',
    light: '☀️ light'
  },

  /**
   * Dapatkan tema awal dari:
   * 1. localStorage (jika user pernah memilih)
   * 2. System preference (prefers-color-scheme)
   * 3. Default: dark
   */
  getInitialTheme() {
    // Cek localStorage dulu
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      return saved;
    }

    // Cek system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? this.DARK_THEME : this.LIGHT_THEME;
  },

  /**
   * Apply tema ke HTML root element
   * @param {string} theme - 'dark' atau 'light'
   */
  applyTheme(theme) {
    // Validate theme
    if (![this.DARK_THEME, this.LIGHT_THEME].includes(theme)) {
      console.warn(`Invalid theme: ${theme}`);
      return;
    }

    // Set attribute di <html>
    document.documentElement.setAttribute(this.DATA_ATTR, theme);
    
    // Save ke localStorage
    localStorage.setItem(this.STORAGE_KEY, theme);

    // Update button icon
    this.updateButtonIcon(theme);

    // Trigger custom event untuk komponen lain
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  },

  /**
   * Update icon dan text button
   * @param {string} theme - Current theme
   */
  updateButtonIcon(theme) {
    const button = document.getElementById(this.BUTTON_ID);
    if (button) {
      // Tampilkan icon untuk switch ke theme lainnya
      const nextTheme = theme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
      button.textContent = this.icons[nextTheme];
      button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
      button.title = `Switch to ${nextTheme} mode`;
    }
  },

  /**
   * Toggle antara dark dan light
   */
  toggleTheme() {
    const current = document.documentElement.getAttribute(this.DATA_ATTR);
    const next = current === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
    this.applyTheme(next);
  },

  /**
   * Create dan inject toggle button ke page
   */
  createToggleButton() {
    // Check apakah button sudah ada
    if (document.getElementById(this.BUTTON_ID)) {
      return;
    }

    const button = document.createElement('button');
    button.id = this.BUTTON_ID;
    button.className = 'theme-toggle';
    button.type = 'button';
    button.addEventListener('click', () => this.toggleTheme());

    // Append ke body
    document.body.appendChild(button);

    // Update icon
    const currentTheme = document.documentElement.getAttribute(this.DATA_ATTR);
    this.updateButtonIcon(currentTheme);
  },

  /**
   * Listen untuk perubahan system preference
   * Jika user belum set tema manual, ikuti system preference
   */
  watchSystemPreference() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Hanya apply jika belum ada localStorage theme
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        const theme = e.matches ? this.DARK_THEME : this.LIGHT_THEME;
        this.applyTheme(theme);
      }
    };

    // Listen untuk perubahan
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback untuk browser lama
      mediaQuery.addListener(handleChange);
    }
  },

  /**
   * Initialize theme manager
   * Panggil saat DOM ready
   */
  init() {
    const initTheme = () => {
      // Apply tema awal
      const theme = this.getInitialTheme();
      this.applyTheme(theme);

      // Create toggle button
      this.createToggleButton();

      // Watch system preference changes
      this.watchSystemPreference();
    };

    // Check DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTheme);
    } else {
      initTheme();
    }
  }
};

// Auto-initialize
ThemeManager.init();

// Export untuk digunakan di script lain
if (typeof window !== 'undefined') {
  window.ThemeManager = ThemeManager;
}
