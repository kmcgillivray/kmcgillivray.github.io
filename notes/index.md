---
layout: page-wide
newsletter: true
---

<div class="mw7 ph3 center cf">
  {% for note in site.notes reversed %}
    <div class="h-entry mb3 flex">

      <div class="w2 mv2 mr2">
        <a class="u-author db bn" href="{{ site.url }}/about"><img class="img-profile br-100" src="/img/kevin-alt-4.jpg" alt="Kevin McGillivray"></a>
      </div>

      <div class="w-100 measure-ns">
        <a class="f7 bn silver" href="{{ note.url }}"><time class="dt-published" datetime="{{ note.date }}">{{ note.date | date: "%-d %b %Y" }}</time></a>
        <div class="e-content">{{ note.content }}</div>
      </div>

    </div>
  {% endfor %}
</div>

<div class="section cf">
  <div class="container-narrow">
    {% capture bio %}{% include bio.md %}{% endcapture %}
    {{ bio | markdownify }}
  </div>
</div>
