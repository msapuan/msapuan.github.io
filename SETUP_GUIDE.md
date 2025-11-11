# 🚀 Terminal-Style Portfolio Website

Portfolio website modern dengan tampilan terminal Linux, interactive features, dan SEO optimization. Built with Jekyll, hosting di GitHub Pages.

## ✨ Fitur Utama

### 🎨 **Design & UX**
- ✅ Terminal-style aesthetic terinspirasi dari Linux CLI
- ✅ Dark/Light mode toggle dengan persistent storage
- ✅ 100% Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations dan transitions
- ✅ Eye-catching color scheme

### 💻 **Interactivity**
- ✅ Typing animation di homepage
- ✅ GitHub API integration (auto-display repos)
- ✅ Comment system via Utterances (GitHub Issues)
- ✅ Search functionality untuk blog posts
- ✅ Tag filtering dan archives

### 🔍 **SEO & Performance**
- ✅ SEO-friendly dengan proper meta tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap & RSS feed auto-generated
- ✅ robots.txt configuration
- ✅ HTML minification & compression

### 🚀 **DevOps**
- ✅ GitHub Actions CI/CD pipeline
- ✅ Auto-build dan deploy pada push ke main branch
- ✅ Free hosting di GitHub Pages
- ✅ Easy content management dengan Markdown

---

## 📋 Setup & Installation

### Prerequisites
- Git
- Ruby 3.2+
- GitHub account

### Step 1: Fork/Clone Repository

```bash
git clone https://github.com/msapuan/msapuan.github.io.git
cd msapuan.github.io
```

### Step 2: Install Dependencies

```bash
# Install Ruby gems
bundle install
```

### Step 3: Configure

Edit `_config.yml` dan ubah:

```yaml
title: "Your Name"
description: "Your tagline"
url: "https://yourusername.github.io"

# Social media
twitter:
  username: your_twitter
github:
  username: your_github_username

# Comments (Utterances)
comments:
  utterances:
    repo: yourusername/yourusername.github.io
```

### Step 4: Run Locally

```bash
# Start development server
bundle exec jekyll serve

# Akses di http://localhost:4000
```

### Step 5: Customize

#### Update Theme Colors
Edit `_data/colors.json`:

```json
{
  "dark": {
    "bg": "#0a0e14",
    "green": "#33ff00",
    "accent": "#00ff99"
  }
}
```

#### Update Typing Animation
Edit `assets/js/typing.js`, ubah array `getCommands()`:

```javascript
getCommands() {
  return [
    {
      command: 'whoami',
      output: 'Your Name | Your Title'
    },
    // ... more commands
  ];
}
```

#### Configure GitHub API
Di `assets/js/github-repos.js`:

```javascript
config: {
  username: 'your_github_username',
  // ...
}
```

#### Setup Comments (Utterances)

1. Pergi ke [https://utteranc.es](https://utteranc.es)
2. Authorize app ke GitHub
3. Pilih repo `yourusername/yourusername.github.io`
4. Copy install script code
5. Update `_config.yml` dengan repo info

Atau biarkan default, tapi pastikan repo setting sudah allow issues.

---

## 📝 Writing Blog Posts

### Create New Post

Buat file baru di `_posts/` dengan format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-15
author: Your Name
categories: blog
tags: [tag1, tag2, tag3]
excerpt: "Short excerpt untuk preview"
---

# Konten Post

Your markdown content here...

## Heading 2

Paragraf dengan [link](https://example.com)

### Code Example

\`\`\`javascript
console.log('Hello World');
\`\`\`
```

### Front Matter Options

| Key | Type | Description |
|-----|------|-------------|
| layout | string | Always `post` |
| title | string | Post title |
| date | date | Publish date (YYYY-MM-DD) |
| author | string | Author name |
| tags | array | Post tags |
| excerpt | string | Short description |
| categories | array | Post categories |

### Markdown Features

**Bold**: `**text**`

*Italic*: `*text*`

`Inline code`: \`code\`

Code block:
\`\`\`language
code here
\`\`\`

Lists:
- Item 1
- Item 2

Links: `[text](url)`

Images: `![alt](url)`

---

## 🔧 Customization Guide

### Ubah Warna Tema

Edit `_data/colors.json`:

```json
{
  "dark": {
    "bg": "#your-bg-color",
    "text": "#your-text-color",
    "green": "#your-accent-color"
  },
  "light": {
    // light theme colors
  }
}
```

### Tambah Social Media Links

Edit `_includes/footer.html`:

```html
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/your-handle" target="_blank">Twitter</a>
```

### Ubah Font

Edit `assets/css/style.css`, cari `font-family`:

```css
font-family: 'Your-Font-Name', monospace;
```

### Customize Terminal Window Buttons

Edit `_layouts/home.html` dan ubah HTML terminal-header.

---

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

1. Push code ke GitHub
2. GitHub Actions akan auto-build & deploy
3. Site accessible di `https://yourusername.github.io`

### Option 2: Manual Deploy

```bash
# Build site
bundle exec jekyll build

# Output di _site/ folder
# Upload ke hosting provider
```

---

## 📊 SEO Optimization

### Meta Tags
Auto-generated dari Jekyll SEO Tag plugin, tapi pastikan:

```yaml
# _config.yml
title: "Your Site Title"
description: "Meta description (< 160 chars)"
url: "https://your-domain.com"
author:
  name: "Your Name"
  twitter: "your_twitter"
  github: "your_github"
```

### Sitemap & RSS
Auto-generated:
- `/sitemap.xml` - untuk search engines
- `/feed.xml` - RSS feed untuk subscribers

### Open Graph Images
Update image path di `_includes/head.html`:

```html
<meta property="og:image" content="/assets/images/og-image.jpg">
```

---

## 🐛 Troubleshooting

### Build Error: Bundle Not Found
```bash
bundle install
bundle exec jekyll serve
```

### Port Already in Use
```bash
bundle exec jekyll serve --port 5000
```

### Changes Not Reflecting
1. Clear Jekyll cache: `rm -rf .jekyll-cache _site`
2. Restart server: `Ctrl+C` then `bundle exec jekyll serve`

### GitHub API Rate Limiting
Default rate limit: 60 requests/hour (anonymous). Jika terlalu sering fetch, add GitHub token di `assets/js/github-repos.js`

---

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Utterances Comments](https://utteranc.es/)

---

## 📄 License

MIT License - Feel free to fork, modify, dan use!

---

## 💬 Support

Punya pertanyaan atau issue? Silakan:

1. Check existing issues di GitHub
2. Create new issue dengan detail problem
3. Contact via email atau Twitter

---

**Built with ❤️ using Jekyll | Hosted on GitHub Pages**

> Terakhir diupdate: November 11, 2025
