const GITHUB_USERNAME = 'msapuan'; // Ganti dengan username kamu
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`;

async function fetchRepos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch');
    
    const repos = await response.json();
    displayRepos(repos);
    
    // Update repo count di typing animation
    const repoCountSpan = document.getElementById('repo-count');
    if (repoCountSpan) {
      repoCountSpan.textContent = repos.length;
    }
  } catch (error) {
    document.getElementById('repos-output').innerHTML = 
      '<p class="error">Error: Cannot reach GitHub API. Check your internet connection.</p>';
  }
}

function displayRepos(repos) {
  const output = document.getElementById('repos-output');
  
  if (repos.length === 0) {
    output.innerHTML = '<p>No public repositories found.</p>';
    return;
  }
  
  const repoList = repos.map(repo => `
    <div class="repo-item">
      <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
      <p>${repo.description || 'No description available.'}</p>
      <div class="repo-meta">
        <span>🌟 ${repo.stargazers_count}</span>
        <span>🍴 ${repo.forks_count}</span>
        <span>📝 ${repo.language || 'N/A'}</span>
      </div>
    </div>
  `).join('');
  
  output.innerHTML = `
    <div class="repos-grid">
      ${repoList}
    </div>
  `;
}

// Jalankan saat halaman projects dimuat
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;
  if (currentPage.includes('projects') || currentPage.includes('project')) {
    fetchRepos();
  }
});