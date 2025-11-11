source "https://rubygems.org"

# GitHub Pages gem includes Jekyll and most plugins
gem "github-pages", group: :jekyll_plugins

# Additional plugins not included in github-pages
group :jekyll_plugins do
  gem "jekyll-include-cache"
end

group :development do
  gem "jekyll-watch", "~> 2.2.1"
  gem "kramdown-parser-gfm", "~> 1.1.0"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` to `v0.6.x` on JRuby to avoid blocking or regex backtracking issues
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]