source "https://rubygems.org"
ruby "3.2.0"

gem "jekyll", "~> 4.3.0"
gem "jekyll-feed", "~> 0.17.0"
gem "jekyll-sitemap", "~> 1.4.0"
gem "jekyll-seo-tag", "~> 2.8.0"
gem "jekyll-github-metadata", "~> 2.15.0"
gem "jekyll-include-cache", "~> 0.2.1"
gem "jekyll-paginate-v2", "~> 3.0.0"
gem "jekyll-archives", "~> 2.2.1"
gem "github-pages", "~> 228"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-github-metadata"
  gem "jekyll-include-cache"
  gem "jekyll-paginate-v2"
  gem "jekyll-archives"
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
