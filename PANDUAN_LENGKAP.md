# 📖 PANDUAN LENGKAP: Portfolio Terminal-Style dengan Blog, Comment, & CI/CD

Selamat! Anda sekarang memiliki portfolio website yang modern, interactive, dan professional. Panduan ini akan menjelaskan setiap fitur dan cara customize sesuai kebutuhan Anda.

---

## 🎯 Apa Yang Sudah Kami Setup?

### 1️⃣ **Struktur Website**
```
/
├── index.html                    # Homepage dengan typing animation
├── blog/
│   ├── index.html               # Daftar blog posts
│   └── [posts]/                 # Direktori untuk blog posts
├── projects.html                # Portfolio projects
├── _posts/                       # Markdown blog files
├── _layouts/                     # HTML templates
├── _includes/                    # Reusable components
├── assets/
│   ├── css/
│   │   └── style.css            # Main CSS (with colors & animations)
│   └── js/
│       ├── typing.js            # Typing animation
│       ├── theme-toggle.js      # Dark/Light mode
│       └── github-repos.js      # GitHub API
├── _data/
│   └── colors.json              # Color palette
├── _config.yml                  # Konfigurasi Jekyll
├── Gemfile                       # Ruby dependencies
└── .github/workflows/
    └── jekyll-build.yml         # GitHub Actions CI/CD
```

### 2️⃣ **Fitur Yang Sudah Diimplementasikan**

✅ **Terminal Aesthetic** - CSS dengan color variables dan responsive design
✅ **Dark/Light Toggle** - Theme persistence via localStorage
✅ **Typing Animation** - Homepage intro dengan typewriter effect
✅ **GitHub API** - Auto-display repos dari GitHub
✅ **Comment System** - Utterances untuk GitHub Issues comments
✅ **Blog System** - Jekyll collections dengan tagging & archives
✅ **CI/CD Pipeline** - GitHub Actions untuk auto-deploy
✅ **SEO Optimization** - Meta tags, sitemap, RSS feed
✅ **Responsive Design** - Mobile, tablet, desktop

---

## 🚀 STEP-BY-STEP CUSTOMIZATION

### **STEP 1: Update Basic Info**

**File: `_config.yml`**

```yaml
# Ganti dengan info Anda
title: "Muhammad Sapuan"          # Nama Anda
tagline: "$ whoami"               # Tagline
description: "Web Developer & Linux Enthusiast | Terminal Portfolio"
url: "https://msapuan.github.io"  # Domain Anda
email: "your-email@example.com"

author:
  name: Muhammad Sapuan           # Nama
  email: "your-email@example.com"
  twitter: "your_twitter_handle"
  github: "msapuan"               # GitHub username
  linkedin: "your_linkedin"
  bio: "Your bio here"            # Bio singkat
```

**Mengapa penting?**
- Digunakan untuk meta tags & SEO
- Ditampilkan di footer & social media preview
- Membantu search engines memahami content

---

### **STEP 2: Customize Warna Tema**

**File: `_data/colors.json`**

Current colors (terminal green):
```json
{
  "dark": {
    "bg": "#0a0e14",              // Background gelap
    "bg-secondary": "#1a1f2e",    // Background secondary
    "text": "#e0e0e0",            // Text color
    "green": "#33ff00",           // Accent (terminal green)
    "gray": "#888888",            // Gray untuk text secondary
    "cursor": "#33ff00"           // Cursor color
  },
  "light": {
    "bg": "#f5f5f5",              // Background terang
    "bg-secondary": "#ffffff",
    "text": "#333333",
    "green": "#006600",           // Dark green
    "gray": "#666666",
    "cursor": "#006600"
  }
}
```

**Custom color examples:**

Untuk **blue theme**:
```json
{
  "dark": {
    "bg": "#0f1419",
    "green": "#00d9ff",           // Cyan
    "accent": "#00e5ff"
  }
}
```

Untuk **purple theme**:
```json
{
  "dark": {
    "bg": "#1a0033",
    "green": "#aa00ff",           // Purple
    "accent": "#ff00ff"
  }
}
```

**Tip**: Test colors di [https://htmlcolorcodes.com](https://htmlcolorcodes.com)

---

### **STEP 3: Update Typing Animation**

**File: `assets/js/typing.js`**

Edit fungsi `getCommands()` (sekitar line 13):

```javascript
getCommands() {
  return [
    {
      command: 'whoami',
      output: '<strong>Muhammad Sapuan</strong> | Web Developer & Linux Enthusiast'
    },
    {
      command: 'cat skills.txt',
      output: 'JavaScript • React • Node.js • Docker • AWS • Bash • Python'
    },
    {
      command: 'cat bio.txt',
      output: 'Passionate about building scalable web applications dan Linux automation'
    },
    {
      command: 'echo "Welcome to my portfolio!"',
      output: 'Welcome to my portfolio! 👋'
    }
  ];
}
```

**Kustomisasi:**
- `command` - command yang akan di-type
- `output` - hasil/response dari command
- Bisa pakai HTML tags seperti `<strong>`, `<em>`, dll

---

### **STEP 4: Setup GitHub API Integration**

**File: `assets/js/github-repos.js`**

Update username (line 12):

```javascript
config: {
  username: 'msapuan',            // ← Ganti dengan GitHub username Anda
  outputContainerId: 'repos-output',
  perPage: 12,
  sortBy: 'updated'
}
```

**Yang dilakukan script ini:**
1. Fetch repos dari GitHub API
2. Display dengan stars, forks, language
3. Responsive grid layout
4. Error handling & loading state

**Tips:**
- Jika terlalu banyak request, tambah GitHub token
- Script akan cache data selama 1 jam
- Repos yang ditampilkan hanya yang public

---

### **STEP 5: Setup Comment System (Utterances)**

**Prerequisites:**
1. Repository GitHub sudah public
2. Utterances GitHub App sudah installed

**Setup:**

1. Pergi ke [https://utteranc.es](https://utteranc.es)
2. Scroll ke "Configuration" section
3. Select repository: `yourusername/yourusername.github.io`
4. Blog post ↔️ issue mapping: pilih `pathname`
5. Copy script yang disediakan

**Atau, langsung update config:**

File: `_config.yml`

```yaml
comments:
  enabled: true
  provider: utterances
  utterances:
    repo: yourusername/yourusername.github.io  # ← Ubah
    issue_term: pathname
    label: "💬 comment"
    theme: github-dark
```

**Bagaimana cara kerjanya:**
- Setiap blog post = 1 GitHub Issue
- Comments di blog = comments di issue
- Tidak perlu database terpisah!

**Screenshot workflow:**
```
User klik "Add Comment" 
    ↓
Utterances GitHub App intercept
    ↓
Create/Find issue di repo
    ↓
User comment di modal
    ↓
Comment masuk ke GitHub Issues
    ↓
Auto-display di blog
```

---

### **STEP 6: Membuat Blog Post Pertama**

**Struktur file:**

```
_posts/
├── 2025-01-15-getting-started.md           (sudah ada - contoh)
├── 2025-01-20-tutorial-jekyll.md           (buat file baru)
└── YYYY-MM-DD-title-in-kebab-case.md       (format)
```

**Create new file: `_posts/2025-01-20-my-first-post.md`**

```markdown
---
layout: post
title: "Judul Post Saya"
date: 2025-01-20
author: Muhammad Sapuan
categories: blog
tags: [web-development, jekyll, tutorial]
excerpt: "Ringkasan singkat post ini untuk preview di daftar blog"
---

## Heading 1

Ini adalah paragraf pertama dengan **bold**, *italic*, dan `inline code`.

### Subheading

Lebih banyak konten di sini.

### Code Example

\`\`\`javascript
console.log('Hello World');

function myFunction() {
  return "This is code";
}
\`\`\`

### List

- Item 1
- Item 2
- Item 3

### Link

[Kunjungi Google](https://google.com)

### Image

![Alt text](https://via.placeholder.com/800x400)

---

## Kesimpulan

Tuliskan kesimpulan post di sini.
```

**Front Matter Explanation:**

| Key | Value | Keterangan |
|-----|-------|-----------|
| layout | `post` | Selalu `post` untuk blog |
| title | String | Judul post |
| date | YYYY-MM-DD | Tanggal publish |
| author | String | Nama author |
| tags | Array | Tag untuk filtering & archive |
| excerpt | String | Preview di blog list |
| categories | Array | Kategori post |

**Tips Menulis:**
- Gunakan Markdown syntax
- Tambah images untuk visual
- Structure dengan headings (h2, h3)
- Tambah code blocks untuk contoh
- Jangan lupa add excerpt untuk preview

---

### **STEP 7: Setup Custom Domain (Optional)**

Jika mau pakai domain custom (bukan github.io):

**Step 1: DNS Setup**

Pergi ke domain provider, edit DNS records:

```
Type: CNAME
Name: www
Value: yourusername.github.io
```

Atau untuk apex domain:

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Step 2: GitHub Settings**

1. Repository → Settings → Pages
2. Custom domain: `yourdomain.com`
3. Enable HTTPS (automatic)

**Step 3: Update _config.yml**

```yaml
url: "https://yourdomain.com"
```

---

### **STEP 8: Local Development Setup**

Untuk develop secara local sebelum push:

```bash
# Navigate ke project directory
cd msapuan.github.io

# Install dependencies (first time only)
bundle install

# Run server
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

**Live reload** = Auto-refresh browser saat ada perubahan file

---

### **STEP 9: GitHub Actions (Auto-Deploy)**

Sudah setup! Tapi cara kerjanya:

**File: `.github/workflows/jekyll-build.yml`**

Workflow ini:
1. Trigger saat ada push ke `main` branch
2. Install Ruby & Jekyll
3. Build site → generate `_site/` folder
4. Deploy ke GitHub Pages

**Proses:**

```
You: git push
        ↓
GitHub detect push
        ↓
GitHub Actions trigger workflow
        ↓
Bundle install (gems)
        ↓
jekyll build (compile markdown → HTML)
        ↓
Deploy _site/ ke GitHub Pages
        ↓
Website live! 🎉
```

**Check status:**
Repository → Actions → lihat workflow runs

---

## 🎨 Design Customization

### Change Font

**File: `assets/css/style.css`**

Search untuk `font-family`:

Current:
```css
font-family: 'Fira Code', 'Cascadia Code', 'Monaco', monospace;
```

Alternatif monospace fonts:
- `'Courier New'`
- `'IBM Plex Mono'`
- `'Source Code Pro'`
- `'JetBrains Mono'`

**Import dari Google Fonts:**

File: `_includes/head.html`

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

### Add Social Media Links

**File: `_includes/footer.html`**

```html
<footer>
  <p>© 2025 <strong>Muhammad Sapuan</strong></p>
  <p>
    <a href="/feed.xml">RSS Feed</a> | 
    <a href="https://github.com/msapuan" target="_blank">GitHub</a> |
    <a href="https://twitter.com/handle" target="_blank">Twitter</a> |
    <a href="https://linkedin.com/in/profile" target="_blank">LinkedIn</a>
  </p>
</footer>
```

---

### Add Custom Navigation

**File: `_layouts/home.html`**

Update nav section:

```html
<nav>
  <a href="/" class="active">home</a>
  <a href="/blog/">blog</a>
  <a href="/projects.html">projects</a>
  <a href="/about.html">about</a>
  <a href="https://github.com/msapuan" target="_blank">github</a>
  <a href="/contact.html">contact</a>
</nav>
```

---

## 📝 SEO Best Practices

### 1. Meta Descriptions

Edit post front matter:

```yaml
excerpt: "Deskripsi singkat yang menarik (max 160 chars)"
```

### 2. Internal Linking

Dalam post:

```markdown
Lihat juga [post tentang topic](/blog/YYYY/MM/post-title/)
```

### 3. Keywords

Gunakan keywords natural dalam:
- Title
- Excerpt
- Heading (h2, h3)
- Content

### 4. Image ALT Text

```markdown
![Alt text describing image](image-url)
```

---

## 🔐 Security Best Practices

1. ✅ Jangan commit `.env` file (sudah di `.gitignore`)
2. ✅ Jangan share GitHub tokens public
3. ✅ Gunakan HTTPS (auto on GitHub Pages)
4. ✅ Keep dependencies updated: `bundle update`

---

## 📊 Monitoring & Analytics

### Enable Google Analytics (Optional)

**Step 1: Setup GA**
1. Pergi ke [Google Analytics](https://analytics.google.com)
2. Create property untuk website
3. Copy Measurement ID (G-XXXXXXX)

**Step 2: Add to site**

File: `_includes/head.html`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

---

## 🐛 Troubleshooting

### Problem: Build error "Bundler not found"

```bash
gem install bundler
bundle install
```

### Problem: CSS tidak update

1. Clear cache: `rm -rf .jekyll-cache _site`
2. Restart server: `Ctrl+C` → `bundle exec jekyll serve`

### Problem: GitHub API rate limit

Add GitHub personal token (optional):

File: `assets/js/github-repos.js`

```javascript
async fetchRepos() {
  const headers = {
    'Authorization': 'token YOUR_GITHUB_TOKEN',
    'Accept': 'application/vnd.github.v3+json'
  };
  // ...
}
```

### Problem: Comments tidak muncul

- Check Utterances installed di repo
- Verify repo setting allow issues
- Check browser console untuk errors

---

## 📚 Next Steps & Ideas

### Content Ideas untuk Blog

1. Tutorial: "Setup Jekyll di [OS]"
2. Project showcase: "Behind the scenes project X"
3. Tips & tricks: "Linux productivity tips"
4. Code snippets: "Useful bash commands"
5. Lessons learned: "What I learned building X"

### Feature Additions

1. **Search bar** - Lunr.js untuk full-text search
2. **Newsletter** - Mailchimp integration
3. **Analytics dashboard** - Show blog stats
4. **Dark mode auto-detect** - System preference
5. **Reading time** - Auto-calculate dari content

### Integration Ideas

1. Connect dengan Dev.to (cross-post)
2. Twitter bot (auto-share posts)
3. Discord webhook (notify followers)
4. Slack integration (notif on comments)

---

## 🎓 Learning Resources

- **Jekyll Docs:** https://jekyllrb.com/docs/
- **Markdown Guide:** https://www.markdownguide.org/
- **GitHub Pages:** https://docs.github.com/en/pages
- **Web Dev Learning:** https://developer.mozilla.org/

---

## 💪 Motivasi!

Sekarang Anda punya:
- ✅ Professional portfolio website
- ✅ Interactive blog dengan comments
- ✅ Auto-deploy dengan GitHub Actions
- ✅ SEO-optimized untuk search engines
- ✅ Responsive di semua devices
- ✅ Modern terminal aesthetic

**Selanjutnya?**
1. Update content Anda
2. Add blog posts regularly
3. Share di social media
4. Network dengan dev community
5. Build lebih banyak projects!

---

**Happy coding! 🚀**

Kalau ada pertanyaan atau stuck, feel free reach out! Atau check existing documentation di `/SETUP_GUIDE.md`

---

*Last Updated: November 11, 2025*
