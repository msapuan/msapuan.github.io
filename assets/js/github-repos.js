/**
 * GitHub Repos API Integration
 * Fetch dan display public repositories dari GitHub
 * Dengan loading state, error handling, dan caching
 */

const GitHubRepos = {
  // Configuration
  config: {
    username: 'msapuan',              // Ganti dengan GitHub username Anda
    outputContainerId: 'repos-output',
    cacheDuration: 3600000,           // 1 jam (ms)
    perPage: 12,
    sortBy: 'updated'
  },

  // Cache
  cache: {
    data: null,
    timestamp: null
  },

  /**
   * Build GitHub API URL
   */
  getApiUrl() {
    const { username, perPage, sortBy } = this.config;
    return `https://api.github.com/users/${username}/repos?sort=${sortBy}&per_page=${perPage}&type=public`;
  },

  /**
   * Check cache validity
   */
  isCacheValid() {
    if (!this.cache.data || !this.cache.timestamp) {
      return false;
    }
    const now = Date.now();
    return (now - this.cache.timestamp) < this.config.cacheDuration;
  },

  /**
   * Render loading state
   */
  showLoading() {
    const output = document.getElementById(this.config.outputContainerId);
    if (output) {
      output.innerHTML = `
        <div class="terminal-window">
          <div class="terminal-content">
            <div class="prompt">
              <span class="symbol">$</span> <span class="user">guest</span><span class="at">@</span><span class="host">github</span><span class="symbol">:</span><span class="path">repos</span><span class="symbol">$</span>
            </div>
            <div class="output">
              Fetching repositories <span class="spinner"></span>
            </div>
          </div>
        </div>
      `;
    }
  },

  /**
   * Render error state
   * @param {string} message - Error message
   */
  showError(message) {
    const output = document.getElementById(this.config.outputContainerId);
    if (output) {
      output.innerHTML = `
        <div class="terminal-window">
          <div class="terminal-content">
            <div class="prompt">
              <span class="symbol">$</span> <span class="user">guest</span><span class="at">@</span><span class="host">github</span><span class="symbol">:</span><span class="path">repos</span><span class="symbol">$</span>
            </div>
            <div class="output error">
              Error: ${message}
              <br><br>
              💡 Tip: Check your internet connection or try again later.
            </div>
          </div>
        </div>
      `;
    }
  },

  /**
   * Format number dengan suffix (K, M)
   * @param {number} num - Number to format
   * @returns {string} Formatted number
   */
  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  },

  /**
   * Get language badge color
   * @param {string} language - Programming language
   * @returns {string} Color hex
   */
  getLanguageColor(language) {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Go': '#00ADD8',
      'Rust': '#CE422B',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#239120',
      'PHP': '#777BB4',
      'Ruby': '#CC342D',
      'CSS': '#563d7c',
      'HTML': '#e34c26',
      'Shell': '#89e051',
      'default': '#858585'
    };
    return colors[language] || colors['default'];
  },

  /**
   * Render repositories list
   * @param {Array} repos - Repository data array
   */
  displayRepos(repos) {
    const output = document.getElementById(this.config.outputContainerId);
    if (!output) return;

    if (repos.length === 0) {
      output.innerHTML = `
        <div class="terminal-window">
          <div class="terminal-content">
            <div class="prompt">
              <span class="symbol">$</span> <span class="user">guest</span><span class="at">@</span><span class="host">github</span><span class="symbol">:</span><span class="path">repos</span><span class="symbol">$</span>
            </div>
            <div class="output">
              No public repositories found.
            </div>
          </div>
        </div>
      `;
      return;
    }

    // Build repository cards
    const repoCards = repos.map(repo => {
      const stars = this.formatNumber(repo.stargazers_count);
      const forks = this.formatNumber(repo.forks_count);
      const language = repo.language || 'Unknown';
      const langColor = this.getLanguageColor(language);
      const description = repo.description || 'No description available';
      const url = repo.html_url;

      return `
        <div class="repo-item">
          <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
          <p>${description}</p>
          <div class="tags">
            <span class="tag" style="border-color: ${langColor}; color: ${langColor}">
              ● ${language}
            </span>
            ${repo.topics && repo.topics.length > 0 ? 
              repo.topics.slice(0, 2).map(topic => 
                `<span class="tag">${topic}</span>`
              ).join('') : ''
            }
          </div>
          <div class="repo-meta">
            <span>⭐ ${stars}</span>
            <span>🍴 ${forks}</span>
            ${repo.license ? `<span>📜 ${repo.license.name}</span>` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Render dalam terminal window
    output.innerHTML = `
      <div class="terminal-window">
        <div class="terminal-header">
          <span class="window-btn close"></span>
          <span class="window-btn minimize"></span>
          <span class="window-btn maximize"></span>
          <span class="window-title">~/github/repos</span>
        </div>
        <div class="terminal-content">
          <div class="prompt">
            <span class="symbol">$</span> <span class="user">guest</span><span class="at">@</span><span class="host">github</span><span class="symbol">:</span><span class="path">repos</span><span class="symbol">$</span> ls -la
          </div>
          <div class="output">
            Found ${repos.length} public repositories
          </div>
          <div class="repos-grid">
            ${repoCards}
          </div>
          <div class="prompt mt-3">
            <span class="symbol">$</span> <span class="cursor"></span>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Fetch repositories dari GitHub API
   */
  async fetchRepos() {
    const output = document.getElementById(this.config.outputContainerId);
    if (!output) return;

    try {
      // Check cache dulu
      if (this.isCacheValid()) {
        this.displayRepos(this.cache.data);
        return;
      }

      // Show loading state
      this.showLoading();

      // Fetch dari API
      const response = await fetch(this.getApiUrl(), {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repos = await response.json();

      // Validate response
      if (!Array.isArray(repos)) {
        throw new Error('Invalid API response format');
      }

      // Cache data
      this.cache.data = repos;
      this.cache.timestamp = Date.now();

      // Display repos
      this.displayRepos(repos);

      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('reposLoaded', { detail: { count: repos.length } }));

    } catch (error) {
      console.error('GitHub repos fetch error:', error);
      this.showError(error.message);
      window.dispatchEvent(new CustomEvent('reposError', { detail: { error: error.message } }));
    }
  },

  /**
   * Initialize - detect element dan fetch
   */
  init() {
    const initFetch = () => {
      const output = document.getElementById(this.config.outputContainerId);
      if (output) {
        this.fetchRepos();
      }
    };

    // Check DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFetch);
    } else {
      initFetch();
    }
  }
};

// Auto-initialize
GitHubRepos.init();

// Export untuk manual trigger
if (typeof window !== 'undefined') {
  window.GitHubRepos = GitHubRepos;
}
