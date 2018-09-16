---
layout: page-wide
newsletter: true
title: Writing
---


<div class="mw7 center cf">

  <div class="ph3 measure">
    <h1>/writing</h1>
    <p>Writing about exploring food, building communities, and living as fermentation.</p>
  </div>

  <div>
    {% for post in site.categories.writing %}
      <div class="measure ph3 post mv4">
        <h2 class="f4 mb1"><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.description }}
      </div>
    {% endfor %}
  </div>

</div>

<div class="section cf">
  <div class="container-narrow">
    {% include bio.html %}
  </div>
</div>
