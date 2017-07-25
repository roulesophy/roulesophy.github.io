---
layout: page
title: Tags
permalink: /tags/
---

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->

<!--
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
-->

<!-- `tag_words` is a sorted array of the tag names. -->
<!--
{% assign tag_words = site_tags | split:',' | sort %}
-->

<!-- List of all tags -->
<ul class="tags">
	{% for item in (0..site.tags.size) %}
		{% unless forloop.last %}
			{% capture this_word %}{{ tag_words[item] }}{% endcapture %}
			<li>
				<a href="/tags?tag={{ this_word }}" class="tag">#{{ this_word }}</a>
			</li>
		{% endunless %}
	{% endfor %}
</ul>

<div id="search-results"></div>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        //"content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}",
        "excerpt": "{{ post.excerpt | strip_html | strip_newlines }}",
        "date": "{{ post.date | date: "%B %e, %Y" }}",
        "filename": "{{ post.filename }}",
        "tags": "{{ post.tags }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="/js/lunr.min.js"></script>
<script src="/js/search.js"></script>