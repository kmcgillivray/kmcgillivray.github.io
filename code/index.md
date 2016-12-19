---
layout: page-wide
newsletter: true
title: Code
---

<div class="container-narrow">

{% for post in site.categories.development %}
  {% if post.image %}
    <img class="post-image" src="/img/{{ post.image }}">
  {% endif %}
    <div class="post">
      <div class="post-header">
    	  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
        <p class="post-date">{{ post.date | date: "%-d %B %Y" }}</p>
      </div>
      {{ post.excerpt }}
      <p class="mt4"><a class="dim dib ph4 pv2 main bg-transparent ba b--main br-pill" href="{{ post.url }}">Read more</a></p>
    </div>
    <hr>
{% endfor %}

</div>
