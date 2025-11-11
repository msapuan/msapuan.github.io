#!/bin/bash

# 🚀 PORTFOLIO SETUP CHECKLIST
# Panduan step-by-step untuk activate semua features

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║   Terminal-Style Portfolio Website - Setup Checklist          ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Checklist functions
check_item() {
  local item=$1
  echo -e "${BLUE}[ ]${NC} $item"
}

check_done() {
  local item=$1
  echo -e "${GREEN}[✓]${NC} $item"
}

echo -e "${YELLOW}=== STEP 1: INITIAL SETUP ===${NC}"
check_item "Clone repository: git clone https://github.com/msapuan/msapuan.github.io.git"
check_item "Navigate to directory: cd msapuan.github.io"
check_item "Install dependencies: bundle install"
check_item "Start local server: bundle exec jekyll serve"
echo ""

echo -e "${YELLOW}=== STEP 2: BASIC CONFIGURATION ===${NC}"
check_item "Edit _config.yml - Update title, description, url"
check_item "Edit _config.yml - Update author info (name, email, github, twitter)"
check_item "Edit _includes/footer.html - Add social media links"
echo ""

echo -e "${YELLOW}=== STEP 3: CUSTOMIZE THEME ===${NC}"
check_item "Edit _data/colors.json - Customize color palette"
check_item "Choose dark mode colors"
check_item "Choose light mode colors"
check_item "Test theme toggle locally"
echo ""

echo -e "${YELLOW}=== STEP 4: HOMEPAGE ANIMATION ===${NC}"
check_item "Edit assets/js/typing.js - Update commands & output"
check_item "Test typing animation di http://localhost:4000"
check_item "Adjust typing speed jika diperlukan"
echo ""

echo -e "${YELLOW}=== STEP 5: GITHUB API INTEGRATION ===${NC}"
check_item "Edit assets/js/github-repos.js - Update GitHub username"
check_item "Test fetch repos (should see your repos di homepage)"
check_item "Verify repos display dengan correct data"
echo ""

echo -e "${YELLOW}=== STEP 6: COMMENT SYSTEM (UTTERANCES) ===${NC}"
check_item "Visit https://utteranc.es"
check_item "Authorize Utterances GitHub App"
check_item "Select repository: yourusername/yourusername.github.io"
check_item "Edit _config.yml - Update comments.utterances.repo"
check_item "Create first blog post test"
check_item "Verify comments section appear on blog post"
echo ""

echo -e "${YELLOW}=== STEP 7: FIRST BLOG POST ===${NC}"
check_item "Create _posts/YYYY-MM-DD-first-post.md"
check_item "Add front matter (title, date, tags, excerpt)"
check_item "Write markdown content"
check_item "Test locally - post appear di /blog/"
check_item "Test comment section loaded"
echo ""

echo -e "${YELLOW}=== STEP 8: DEPLOY TO GITHUB ===${NC}"
check_item "git add ."
check_item "git commit -m 'Initial portfolio setup'"
check_item "git push origin main"
check_item "Check GitHub Actions workflow running"
check_item "Wait for deployment (1-2 minutes)"
check_item "Visit https://yourusername.github.io"
check_item "Verify everything working live"
echo ""

echo -e "${YELLOW}=== STEP 9: SEO OPTIMIZATION ===${NC}"
check_item "Update meta description di _config.yml"
check_item "Add og:image path"
check_item "Verify sitemap.xml generation"
check_item "Verify robots.txt configuration"
check_item "Test in Google Search Console (optional)"
echo ""

echo -e "${YELLOW}=== STEP 10: OPTIONAL ENHANCEMENTS ===${NC}"
check_item "Setup Google Analytics (optional)"
check_item "Add custom domain (optional)"
check_item "Add more blog posts"
check_item "Customize colors further"
check_item "Add more projects ke projects.html"
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  Setup Complete! Your portfolio is ready to showcase 🚀       ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}Next steps:${NC}"
echo "1. Write more blog posts in _posts/"
echo "2. Update your bio dan social links"
echo "3. Share your portfolio dengan world!"
echo "4. Keep improving dan adding features"
echo ""
echo -e "${BLUE}Resources:${NC}"
echo "- Documentation: SETUP_GUIDE.md"
echo "- Detailed guide: PANDUAN_LENGKAP.md"
echo "- Jekyll docs: https://jekyllrb.com"
echo ""
