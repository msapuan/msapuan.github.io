/**
 * Typing Animation Script
 * Menampilkan terminal command dengan typing effect
 * Menyertakan dinamis repo count dari GitHub API
 */

const TypingAnimator = {
  // Konfigurasi
  config: {
    typingSpeed: 50,        // ms per karakter untuk command
    outputSpeed: 30,        // ms per karakter untuk output  
    pauseAfterCommand: 800, // pause antar command
    typingContainerId: 'typing-output'
  },

  /**
   * Terminal commands yang akan di-type
   * Format: { command: string, output: string atau HTML }
   */
  getCommands() {
    return [
      {
        command: 'whoami',
        output: '<strong>Muhammad Sapuan</strong> | Web Developer & Linux Enthusiast'
      },
      {
        command: 'cat skills.txt',
        output: 'JavaScript • React • Node.js • Docker • AWS • Bash • Python • Git • Linux'
      },
      {
        command: 'ls -la ~/projects',
        output: 'Loading projects from GitHub... <span class="spinner"></span>'
      },
      {
        command: 'echo "Welcome to my portfolio!"',
        output: 'Welcome to my portfolio!'
      }
    ];
  },

  /**
   * Mengetik text dengan efek karakter per karakter
   * @param {HTMLElement} element - Target element
   * @param {string} text - Text untuk di-type (support HTML)
   * @param {number} speed - Kecepatan typing (ms)
   * @returns {Promise} Resolve saat selesai
   */
  typeText(element, text, speed) {
    return new Promise(resolve => {
      // Jika text mengandung HTML, gunakan textContent untuk escape
      const isHTML = /<[^>]*>/.test(text);
      let i = 0;
      let currentHTML = '';

      const typeInterval = setInterval(() => {
        if (i < text.length) {
          if (isHTML) {
            currentHTML += text.charAt(i);
            element.innerHTML = currentHTML;
          } else {
            element.textContent += text.charAt(i);
          }
          i++;
        } else {
          clearInterval(typeInterval);
          resolve();
        }
      }, speed);
    });
  },

  /**
   * Sleep/delay untuk pause antar command
   * @param {number} ms - Milliseconds
   * @returns {Promise}
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * Render single command dengan typing animation
   * @param {Object} cmd - Command object {command, output}
   * @param {HTMLElement} container - Container element
   */
  async renderCommand(cmd, container) {
    // Buat prompt line
    const promptDiv = document.createElement('div');
    promptDiv.className = 'prompt';
    promptDiv.innerHTML = `<span class="symbol">$</span> <span class="user">guest</span><span class="at">@</span><span class="host">portfolio</span><span class="symbol">:</span><span class="path">~</span><span class="symbol">$</span> <span class="command"></span>`;
    container.appendChild(promptDiv);

    // Type command
    const commandSpan = promptDiv.querySelector('.command');
    await this.typeText(commandSpan, cmd.command, this.config.typingSpeed);

    // Pause sebelum output
    await this.sleep(this.config.pauseAfterCommand);

    // Render output
    const outputDiv = document.createElement('div');
    outputDiv.className = 'output';
    container.appendChild(outputDiv);

    // Type output
    await this.typeText(outputDiv, cmd.output, this.config.outputSpeed);

    // Pause sebelum command berikutnya
    await this.sleep(this.config.pauseAfterCommand);
  },

  /**
   * Main animation function - jalankan semua commands
   */
  async animate() {
    const container = document.getElementById(this.config.typingContainerId);
    if (!container) {
      console.error(`Container #${this.config.typingContainerId} not found`);
      return;
    }

    const commands = this.getCommands();

    try {
      for (const cmd of commands) {
        await this.renderCommand(cmd, container);
      }

      // Render final cursor
      const cursorDiv = document.createElement('div');
      cursorDiv.className = 'prompt';
      cursorDiv.innerHTML = `<span class="symbol">$</span> <span class="cursor"></span>`;
      container.appendChild(cursorDiv);

    } catch (error) {
      console.error('Error in typing animation:', error);
      container.innerHTML += '<p class="error">Error loading animation</p>';
    }
  },

  /**
   * Initialize - jalankan saat DOM ready
   */
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.animate());
    } else {
      this.animate();
    }
  }
};

// Auto-initialize saat script loaded
TypingAnimator.init();
