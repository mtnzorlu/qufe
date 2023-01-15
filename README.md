# jekyll-theme-qufe

A blog theme with a personalized feel.

![screenshot](/assets/img/screenshot.png)

## Installation

Add your Jekyll site into gemfile:

    gem 'jekyll-theme-qufe'

In the _config.yml file enter:

    theme: jekyll-theme-qufe

And execute:

    bundle

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

