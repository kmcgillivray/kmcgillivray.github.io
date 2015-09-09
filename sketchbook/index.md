---
layout: page
title: Sketchbook
category: gallery
---

{% for art in site.data.art %}<a href="/img/{{ art.file }}" data-fluidbox><img src="/img/{{ art.file }}" alt="{{ art.name }}"></a>{% endfor %}
