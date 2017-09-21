---
layout: page-wide
newsletter: true
title: Code
---


<div class="mw7 center cf">

  <div class="ph3 measure">
    <h1>/code</h1>
    <p>Notes on learning and teaching web development—better ways to learn and teach programming skills, the essential metaskills and mindset beyond syntax, and code as a creative practice.</p>
  </div>

  <div class="grid">
    {% for post in site.categories.development %}
      <div class="ph3 post mv4">
        <p class="post-date mb2">{{ post.date | date: "%-d %B %Y" }}</p>
    	  <h2 class="f4 mt0"><a href="{{ post.url }}">{{ post.title }}</a></h2>
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
