// Terminal commands yang akan di-type otomatis
const commands = [
  { command: 'cat about.txt', output: 'Hi, I\'m <strong>Muhammad Sapuan</strong>. Web Developer & Linux Enthusiast. I build scalable web apps and automate everything with shell scripts.' },
  { command: 'ls skills/', output: 'JavaScript  React  Node.js  Docker  AWS  Bash  Python' },
  { command: 'ping github.com', output: '64 bytes from github.com: icmp_seq=1 ttl=52 time=23.1 ms' },
  { command: 'curl -s https://api.github.com/users/msapuan | jq ".public_repos"', output: 'Public Repos: <span id="repo-count">Fetching...</span>' }
];

async function typeCommand() {
  const outputDiv = document.getElementById('typing-output');
  
  for (const cmd of commands) {
    // Type command
    const promptDiv = document.createElement('div');
    promptDiv.className = 'prompt';
    promptDiv.innerHTML = `user@portfolio:~$ <span class="command"></span>`;
    outputDiv.appendChild(promptDiv);
    
    const commandSpan = promptDiv.querySelector('.command');
    await typeText(commandSpan, cmd.command, 50);
    
    // Show output
    const outputDivCmd = document.createElement('div');
    outputDivCmd.className = 'output';
    outputDiv.appendChild(outputDivCmd);
    await typeText(outputDivCmd, cmd.output, 30);
    
    await sleep(500);
  }
}

function typeText(element, text, speed) {
  return new Promise(resolve => {
    let i = 0;
    const typeInterval = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(typeInterval);
        resolve();
      }
    }, speed);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Jalankan saat load
document.addEventListener('DOMContentLoaded', () => {
  typeCommand();
});