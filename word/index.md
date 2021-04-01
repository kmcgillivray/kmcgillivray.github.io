---
layout: noble
title: My Word for the Year
description: My word for the year is...
social-image: noble-chess-players.jpg
newsletter: false
---

<section class="flex-l items-center mw8 ph5-l center">
  <div class="w-50-l pr3-l">
    <img src="/img/lion-sketch.jpg" alt="Ink sketch of a lion with a fountain pen">
  </div>
  <div class="w-50-l pl3-l">
    {% capture intro %}{% include word/noble/intro.md %}{% endcapture %}
    {{ intro | markdownify }}
  </div>
</section>

<div class="tc mv3">
  <span class="noble-hr tc f2 sage d-sage-light">&#x2656; &#x2658; &#x2657; &#x2655; &#x2654; &#x2657; &#x2658; &#x2656;</span>
</div>

<section class="mw6 center">
  {% capture index %}{% include word/noble/index.md %}{% endcapture %}
  {{ index | markdownify }}
</section>
