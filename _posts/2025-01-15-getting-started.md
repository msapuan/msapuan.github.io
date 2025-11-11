---
layout: post
title: "Getting Started dengan Jekyll & Terminal Style Design"
date: 2025-01-15
author: Muhammad Sapuan
categories: blog
tags: [jekyll, web-design, terminal, tutorial]
excerpt: "Tutorial lengkap cara membuat portfolio website dengan Jekyll yang memiliki tampilan terminal Linux dan fitur interaktif."
---

Halo! Ini adalah postingan pertama di blog terminal-style portfolio saya. Dalam postingan ini, saya akan menjelaskan bagaimana cara membuat website portfolio modern dengan Jekyll dan tampilan yang terinspirasi dari terminal Linux.

## Mengapa Terminal Style?

Sebagai seorang developer dan Linux enthusiast, saya ingin portfolio website saya mencerminkan passion saya terhadap command-line interface dan open-source culture. Terminal style design tidak hanya terlihat cool, tapi juga memberikan pengalaman yang unik dan memorable untuk visitors.

## Fitur Utama Website Ini

### 1. **Dark/Light Mode Toggle**
Website ini mendukung automatic theme detection berdasarkan system preference user, dan juga bisa di-toggle secara manual. Pilihan theme disimpan di localStorage sehingga persistent.

```javascript
// Example dari theme toggle
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);
```

### 2. **Typing Animation di Homepage**
Animasi ketik di homepage memberikan welcome experience yang interactive dan engaging. Setiap command di-type character-by-character untuk memberikan illusion bahwa website sedang "menjalankan" commands.

### 3. **GitHub API Integration**
Portfolio ini automatically fetch dan display projects dari GitHub account Anda, dengan real-time data tentang stars, forks, dan language yang digunakan.

### 4. **Comment System dengan Utterances**
Setiap blog post dilengkapi dengan comment system menggunakan Utterances, yang menggunakan GitHub Issues sebagai backend. Ini berarti tidak perlu setup database terpisah!

### 5. **Responsive Design**
Website ini 100% responsive dan terlihat bagus di semua ukuran screen, dari mobile hingga desktop. Menggunakan CSS Grid dan Flexbox untuk layout yang flexible.

### 6. **SEO Friendly**
Dilengkapi dengan proper meta tags, structured data (JSON-LD), sitemap, dan RSS feed untuk SEO yang optimal.

## Technical Stack

- **Jekyll** - Static site generator
- **SCSS** - Advanced CSS preprocessing
- **Vanilla JavaScript** - No framework, pure JS untuk performance
- **GitHub API** - Untuk fetch repos
- **Utterances** - GitHub-powered comments
- **GitHub Pages** - Free hosting

## Getting Started

Untuk setup portfolio website seperti ini, Anda membutuhkan:

1. GitHub account
2. Basic knowledge tentang Git dan Jekyll
3. Text editor (VS Code, Vim, dll)

Mari mulai!

## Kesimpulan

Terminal style portfolio website adalah cara yang unik untuk showcase personality dan technical skills Anda. Dengan Jekyll, Anda bisa maintain content dengan simple Markdown files, dan semua di-host gratis di GitHub Pages.

Happy coding! 🚀

---

### Pertanyaan atau Saran?

Silakan tinggalkan comment dibawah atau reach out ke saya di [GitHub](https://github.com/msapuan). Tunggu postingan berikutnya tentang setup dan customization lebih lanjut!
