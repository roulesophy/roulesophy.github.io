---
layout: page
title: 網誌分類
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
<!--
<ul class="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
    <li>
      <a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }}
        <span>({{ site.tags[this_word].size }})</span>
      </a>
    </li>
  {% endunless %}{% endfor %}
</ul>

---
-->

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->


{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}


<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- List of all tags -->
<ul class="tags">
	{% for item in (0..site.tags.size) %}
		{% unless forloop.last %}
			{% capture this_word %}{{ tag_words[item] }}{% endcapture %}
			<li>
				<!-- <a href="{{ site.baseurl }}/tags/#{{ this_word | cgi_escape }}" class="tag" onclick="hideAllElement();showElement('title_{{ this_word | cgi_escape }}');">#{{ this_word }}</a> -->
				
				<div class="tag" onclick="hideAllElement();showElement('title_{{ this_word | cgi_escape }}');">#{{ this_word }}</div>
			</li>
		{% endunless %}
	{% endfor %}
</ul>



<!-- Posts by Tag -->
<div>
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
    <div class="title" id="title_{{ this_word | cgi_escape }}" style="display: none;">
	    <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
	    <table>
		    <colgroup>
			    <col style="width:80%">
			    <col style="width:20%">
		    </colgroup>  
		    {% for post in site.tags[this_word] %}
		    	{% if post.title != null %}
		      		<!--<div>-->
			          <tr>
				          <td><a href="{{ post.url }}">{{ post.title }}</a></td>
				          <td>{{ post.date | date: "%Y-%m-%d" }}</td>
			          </tr>
		      		<!--</div>-->
		      		<!--<div style="clear: both;"></div>-->
		    	{% endif %}
		    {% endfor %}
	    </table>
    </div>
  {% endunless %}{% endfor %}
</div>