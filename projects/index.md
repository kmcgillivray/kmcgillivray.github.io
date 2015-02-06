---
layout: default
title: Projects
---

{% for post in site.categories.projects reversed %}
<div class="project">
  {% if post.image %}<a href="{{ post.link }}"><img src="/img/{{ post.image }}" alt="{{ post.title }}"></a>{% endif %}
  <h2><a href="{{ post.link }}">{{ post.title }}</a></h2>
  {{ post.content }}
</div>
<hr>
{% endfor %}