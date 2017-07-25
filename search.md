---
layout: page
title: Search
permalink: /search/
---

<form action="/search" method="get">
  <!--
  <label for="search-box">Search</label>
  -->
  
  <input type="text" id="search-box" name="query">
  
  <!--
  <input type="submit" value="search">
  -->
</form>

<div id="search-results"></div>

<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}",
        "excerpt": "{{ post.excerpt | strip_html | strip_newlines }}",
        "date": "{{ post.date | date: "%B %e, %Y" }}",
        "filename": "{{ post.filename }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="/js/lunr.min.js"></script>
<script src="/js/search.js"></script>