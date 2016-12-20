---
layout: page
title: About
permalink: /about/
---

<!--IT, Finance, Apple, iOS Automation-->
想用三個點來記錄事情，因為三件事最容易令人記住。

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->


{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}


<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- List of all tags -->
<ul style="padding-left:0px">
{% for item in (0..site.tags.size) %}{% unless forloop.last %}{% capture this_word %}{{ tag_words[item] }}{% endcapture %}<span><a href="{{ site.baseurl }}/tags/#{{ this_word | cgi_escape }}">#{{ this_word }}</a>&nbsp;&nbsp;</span>{% endunless %}{% endfor %}
</ul>

## > Projects

* [RouOutliner](https://rououtliner.github.io)

## > Contact me

* [Twitter](http://twitter.com/roulesophy)