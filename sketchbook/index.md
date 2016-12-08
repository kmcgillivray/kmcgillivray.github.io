---
layout: page-wide
title: Sketchbook
category: gallery
newsletter: true
---

<div class="cf bg-dark-gray ph4 pv3 pa0-ns">
  <div class="fl-ns pa3-ns pl4-ns w-30-ns">
    {% for art in site.data.art["col1"] %}
      <a href="/img/{{ art.file }}" data-fluidbox><img class="mb3 br0 ba bw5 b--light-gray" src="/img/{{ art.file }}" alt="{{ art.name }}"></a>
    {% endfor %}
  </div>
  <div class="fl-ns pa3-ns w-40-ns">
    {% for art in site.data.art["col2"] %}
      <a href="/img/{{ art.file }}" data-fluidbox><img class="mb3 br0 ba bw5 b--light-gray" src="/img/{{ art.file }}" alt="{{ art.name }}"></a>
    {% endfor %}
  </div>
  <div class="fl-ns pa3-ns pr4-ns w-30-ns">
    {% for art in site.data.art["col3"] %}
      <a href="/img/{{ art.file }}" data-fluidbox><img class="mb3 br0 ba bw5 b--light-gray" src="/img/{{ art.file }}" alt="{{ art.name }}"></a>
    {% endfor %}
  </div>
</div>
