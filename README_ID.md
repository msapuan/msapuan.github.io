# 🚀 Terminal-Style Portfolio Website - Indonesian README

Portfolio website modern dengan tampilan terminal Linux, blog interaktif dengan comment system, dan auto-deploy dengan GitHub Actions.

## ✨ Fitur Unggulan

✅ **Terminal Aesthetic** - Green-on-black theme seperti Linux terminal
✅ **Dark/Light Mode** - Toggle dengan localStorage persistence  
✅ **Typing Animation** - Homepage intro yang eye-catching
✅ **Blog System** - Markdown-based dengan tags & search
✅ **Comment System** - Utterances (GitHub Issues powered)
✅ **GitHub API** - Auto-display repositories  
✅ **SEO Friendly** - Meta tags, sitemap, RSS feed
✅ **CI/CD Pipeline** - Auto-deploy dengan GitHub Actions
✅ **Responsive** - Mobile, tablet, desktop optimized
✅ **Gratis** - Hosted on GitHub Pages (no cost!)

## 🎯 Quick Start

### 1. Setup Awal (5 menit)
```bash
# Clone
git clone https://github.com/msapuan/msapuan.github.io.git
cd msapuan.github.io

# Install dependencies
bundle install

# Run local
bundle exec jekyll serve --livereload

# Open http://localhost:4000
```

### 2. Customize (30 menit)
```bash
# Edit konfigurasi dasar
vim _config.yml           # Update title, author, social links

# Edit warna tema
vim _data/colors.json     # Customize colors

# Edit homepage
vim assets/js/typing.js   # Update typing commands

# Edit username GitHub  
vim assets/js/github-repos.js  # Your username
```

### 3. Buat Blog Post (10 menit)
```bash
# Create post baru
touch _posts/2025-01-20-first-post.md

# Add content
vim _posts/2025-01-20-first-post.md

# Test locally
bundle exec jekyll serve
# Visit http://localhost:4000/blog/
```

### 4. Deploy (2 menit)
```bash
git add .
git commit -m "Initial setup"
git push origin main

# Wait 1-2 minutes for GitHub Actions
# Visit https://yourusername.github.io 🎉
```

## 📋 Template Blog Post

```markdown
---
layout: post
title: "Judul Post"
date: 2025-01-20
author: Your Name
tags: [javascript, web-dev, tutorial]
excerpt: "Ringkasan singkat untuk preview"
---

## Isi Post

Paragraph dengan **bold**, *italic*, `code`.

### Subheading

More content here.

\`\`\`javascript
// Code example
console.log('Hello');
\`\`\`
```

## 🔧 File-File Penting

| File | Fungsi |
|------|--------|
| `_config.yml` | Konfigurasi utama Jekyll |
| `_data/colors.json` | Palet warna tema |
| `assets/css/style.css` | Stylesheet (responsive) |
| `assets/js/typing.js` | Animasi homepage |
| `assets/js/theme-toggle.js` | Dark/light mode |
| `assets/js/github-repos.js` | GitHub API fetcher |
| `_posts/` | Folder blog posts |
| `_layouts/` | HTML templates |
| `_includes/` | Reusable components |

## 💡 Customization Tips

### Ubah Warna
Edit `_data/colors.json`:
```json
{
  "dark": {
    "bg": "#0a0e14",
    "green": "#33ff00",      // Main accent color
    "text": "#e0e0e0"
  }
}
```

### Ubah Homepage Text
Edit `assets/js/typing.js`, fungsi `getCommands()`:
```javascript
getCommands() {
  return [
    { command: 'whoami', output: 'Your Name | Title' },
    { command: 'cat skills.txt', output: 'Your skills' }
  ];
}
```

### Update GitHub Username
Edit `assets/js/github-repos.js`:
```javascript
config: {
  username: 'your_github_username'
}
```

## 📚 Dokumentasi Lengkap

- **SETUP_GUIDE.md** - Panduan instalasi & setup
- **PANDUAN_LENGKAP.md** - Guide detail bahasa Indonesia
- **IMPLEMENTATION_SUMMARY.md** - Ringkasan fitur
- **QUICK_COMMANDS.sh** - Cheat sheet commands

## 🎓 Quick Commands

```bash
# Development
bundle exec jekyll serve --livereload

# Create new post
touch _posts/YYYY-MM-DD-title.md

# Build static site
bundle exec jekyll build

# Clear cache
rm -rf .jekyll-cache _site

# Git push
git add . && git commit -m "message" && git push origin main
```

## 🐛 Troubleshooting

**Error: Bundler not found**
```bash
gem install bundler
bundle install
```

**CSS/JS tidak update**
```bash
rm -rf .jekyll-cache _site
bundle exec jekyll serve
```

**Port already in use**
```bash
bundle exec jekyll serve --port 5000
```

## 🌐 URLs

- Local dev: `http://localhost:4000`
- Live site: `https://yourusername.github.io`
- Blog: `https://yourusername.github.io/blog/`
- Projects: `https://yourusername.github.io/projects/`

## 📊 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Jekyll 4.3, Markdown
- **Hosting**: GitHub Pages (free)
- **CI/CD**: GitHub Actions
- **Comments**: Utterances (GitHub Issues)
- **API**: GitHub REST API

## ✅ Setup Checklist

- [ ] Clone repository
- [ ] Bundle install
- [ ] Edit _config.yml
- [ ] Customize colors
- [ ] Test locally
- [ ] Create first post
- [ ] Git push to main
- [ ] Verify GitHub Actions
- [ ] Check live site
- [ ] Share dengan teman! 🎉

## 🎯 Next Steps

1. **Write more posts** - Minimal 3-5 posts untuk credibility
2. **Update projects** - Add your best work
3. **Optimize SEO** - Check Google Search Console
4. **Share** - Promote di LinkedIn, Twitter, dll
5. **Network** - Connect dengan dev community
6. **Monitor** - Check analytics & comments

## 🚀 Advanced Features (Optional)

- Custom domain setup
- Google Analytics integration
- Mailchimp newsletter
- Search implementation
- More plugins

See documentation untuk detail.

## 📞 Support

- Check **SETUP_GUIDE.md** untuk common issues
- Read **PANDUAN_LENGKAP.md** untuk detailed guide
- Visit https://jekyllrb.com untuk Jekyll docs
- Check https://utteranc.es untuk comment system setup

## 📄 License

MIT License - Bebas untuk modify & use!

---

**Built with ❤️ using Jekyll | Hosted on GitHub Pages**

*Last Updated: November 11, 2025*

---

**Ready to showcase your skills? Let's go! 🚀**

Pertanyaan? Cek dokumentasi atau create issue di GitHub.

Happy coding! 💻
