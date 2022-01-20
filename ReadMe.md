# helenlin.codes Personal CV Website

This is the code repository for my personal site! View it currently at https://helen-m-lin.github.io/helenlincodes/. 

## Local Dev setup to run Jekyll site

### Prerequisites
1. Ensure [Ruby](https://www.ruby-lang.org/en/documentation/installation) is installed.
2. Install Bundler and Jekyll using `gem install bundler` and `gem install jekyll`.
3. Install Sass using `npm install -g sass`

### Start local dev environment
IMPORTANT: in *_config.yml*, comment out the value for `url` (so that the line becomes `url: #"/helenlincodes"`). This is necessary because when GitHub Pages deploys the side, the url is preceeded by /helenlincodes, while in local dev, it is not. DO NOT COMMIT THIS CHANGE.

1. Open a terminal in the root directory of the local repo.
2. Run `bundle install`
3. Run `bundle exec jekyll serve --livereload` or `jekyll serve`
4. App should now be running on http://localhost:4000/.

## Tools Used
- Web hosting: GitHub Pages with [Jekyll](https://jekyllrb.com/docs) and [Bundler](https://bundler.io)
- initial template based on: http://jmcglone.com/guides/github-pages/