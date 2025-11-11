/**
 * GitHub Repos API Integration - Modern Version
 */

const GitHubRepos = {
  config: {
    username: 'msapuan',
    outputContainerId: 'repos-grid',
    cacheDuration: 3600000,
    perPage: 6,
    sortBy: 'updated'
  },

  cache: {
    data: null,
    timestamp: null
  },

  getApiUrl() {
    const { username, perPage, sortBy } = this.config;
    return `https://api.github.com/users/${username}/repos?sort=${sortBy}&per_page=${perPage}&type=public`;
  },

  isCacheValid() {
    if (!this.cache.data || !this.cache.timestamp) {
      return false;
    }
    const now = Date.now();
    return (now - this.cache.timestamp) < this.config.cacheDuration;
  },

  showLoading() {
    const output = document.getElementById(this.config.outputContainerId);
    if (output) {
      output.innerHTML = '<div class="loading">Loading projects...</div>';
    }
  },

  showError(message) {
    const output = document.getElementById(this.config.outputContainerId);
    if (output) {
      output.innerHTML = `<div class="loading">Error: ${message}</div>`;
    }
  },

  formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  },

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

  displayRepos(repos) {
    const output = document.getElementById(this.config.outputContainerId);
    if (!output) return;

    if (repos.length === 0) {
      output.innerHTML = '<div class="loading">No public repositories found.</div>';
      return;
    }

    const repoCards = repos.map(repo => {
      const stars = this.formatNumber(repo.stargazers_count);
      const forks = this.formatNumber(repo.forks_count);
      const language = repo.language || 'Unknown';
      const langColor = this.getLanguageColor(language);
      const description = repo.description || 'No description available';
      const url = repo.html_url;

      return `
        <div class="project-card">
          <div class="project-card-content">
            <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
            <p>${description}</p>
            <div class="tags">
              <span class="tag" style="border-color: ${langColor}; color: ${langColor}">
                ${language}
              </span>
              ${repo.topics && repo.topics.length > 0 ? 
                repo.topics.slice(0, 2).map(topic => 
                  `<span class="tag">${topic}</span>`
                ).join('') : ''
              }
            </div>
            <div class="project-meta">
              <span>⭐ ${stars}</span>
              <span>🍴 ${forks}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    output.innerHTML = repoCards;
  },

  async fetchRepos() {
    const output = document.getElementById(this.config.outputContainerId);
    if (!output) return;

    try {
      if (this.isCacheValid()) {
        this.displayRepos(this.cache.data);
        return;
      }

      this.showLoading();

      const response = await fetch(this.getApiUrl(), {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();

      if (!Array.isArray(repos)) {
        throw new Error('Invalid API response format');
      }

      this.cache.data = repos;
      this.cache.timestamp = Date.now();

      this.displayRepos(repos);

    } catch (error) {
      console.error('GitHub repos fetch error:', error);
      this.showError(error.message);
    }
  },

  init() {
    const initFetch = () => {
      const output = document.getElementById(this.config.outputContainerId);
      if (output) {
        this.fetchRepos();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFetch);
    } else {
      initFetch();
    }
  }
};

GitHubRepos.init();

if (typeof window !== 'undefined') {
  window.GitHubRepos = GitHubRepos;
}
