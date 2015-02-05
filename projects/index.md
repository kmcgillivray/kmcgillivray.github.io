---
layout: default
title: Projects
---

{% for post in site.categories.projects reversed %}
<div class="project">
  <h2><a href="{{ post.link }}">{{ post.title }}</a></h2>
  {% if post.image %}<a href="{{ post.link }}"><img src="/img/{{ post.image }}" alt="{{ post.title }}"></a>{% endif %}
  {{ post.content }}
</div>
{% endfor %}