---
layout: page
title: About
permalink: /about/
---

<!--IT, Finance, Apple, iOS Automation, HKSL-->

<!-- 寫網誌的原因是想防止自己失憶、訓練自己的表達能力、以及為世界帶來一點參考。 -->
當自己從網絡上學到幫助自己成長的知識時，便想把自己所知的分享出去，當我們把自己的知識分享時，自己反而會學到更多。

我為自己而寫，我更為大家而寫。

<!-- Eterna Betao 是世界語，意思是永遠的 beta 版本。因為這個網誌永遠都不會有完成版，只會不斷地進化。 -->
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

* [RouOutliner](https://rououtliner.github.io): A plain text, web-based, minimalist outline processor.
* [Telegram Sticker](https://t.me/addstickers/Roulesophy)
