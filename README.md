# jekyll-theme-qufe

A blog theme with a personalized feel.

![screenshot](/assets/img/ss1.png)

![screenshot](/assets/img/ss2.png)

## Installation

Download files:

    git clone https://github.com/mtnzorlu/qufe.git


Go to directory with terminal command:

    cd qufe


Build the Site:

    jekyll build

Run:

    bundle exec jekyll serve

And open:

http://127.0.0.1:4000/qufe/


## Gem Based

Change the index.markdown file to index.html. It includes:

    ---
    layout: main
    ---

    {{ content }}

Add your Jekyll site into gemfile:
    
    gem 'webrick'
    gem 'jekyll-theme-qufe', '~> 0.1.1'

And change:

    group :jekyll_plugins do
    gem "jekyll-feed", "~> 0.12"
    gem "jekyll-paginate"
    end

In the _config.yml file enter:

    paginate: 5
    theme: jekyll-theme-qufe
    plugins:
    - jekyll-feed
    - jekyll-paginate

And execute:

    bundle

Run:

    bundle exec jekyll serve

And open:

http://127.0.0.1:4000

## Note: 

If your site is in the root directory, the baseurl must be empty. Replace _config.yml:

    baseurl: ""


Edit or change some parts of the _config_yml file. For example, enter your own social media usernames in the relevant lines.

    twitter_username: your_name

To set the cover photo, modify the head.html file:

    <img src="{{ site.baseurl }}/{{ site.image.kapak-1 }}" alt="kapak">

There are 4 options:

kapak-0, kapak-1 kapak-2, kapak-3

Use _config yml to change other things.

Title, description, footer_desc.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

