---
layout: page-wide
newsletter: true
---

{% for post in site.categories.development %}
  {% if post.image %}
    <img class="post-image" src="/img/{{ post.image }}">
  {% endif %}
  <div class="container-narrow">
    <div class="post">
      <div class="post-header">
    	  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
        <p class="post-date">{{ post.date | date: "%-d %B %Y" }}</p>
      </div>
      <p>{{ post.excerpt }}</p>
      <p><a class="button-primary" style="margin-top: 10px;" href="{{ post.url }}">Read more</a></p>
    </div>
  </div>
  <hr>
{% endfor %}
