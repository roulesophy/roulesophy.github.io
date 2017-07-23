---
layout: page
title: About
permalink: /about/
---

<!--IT, Finance, Apple, iOS Automation, HKSL-->
我是一個香港的 IT 人，可是經常在研究 IT 以外的事情，實用技能和無用技能都在範圍之內。

<!--
想用三個點來記錄一件事情，因為三件事最容易讓別人記住。
-->
寫網誌的原因是想防止自己失憶、訓練自己的表達能力、以及為世界帶來一點參考。

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
<!--
<ul class="tags">
	{% for item in (0..site.tags.size) %}
		{% unless forloop.last %}
			{% capture this_word %}{{ tag_words[item] }}{% endcapture %}
			<li>
				<a href="{{ site.baseurl }}/tags/#{{ this_word | cgi_escape }}" class="tag">#{{ this_word }}</a>
			</li>
		{% endunless %}
	{% endfor %}
</ul>
-->

## Projects

* [RouOutliner](https://rououtliner.github.io)
