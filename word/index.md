---
layout: diver
title: My Word for the Year
description: My word for the year is...
social-image: learning-to-swim.jpg
newsletter: false
---

<section class="diver-section mw8 center relative">
  <div class="f4 measure signal-dark z-2 relative">
    {% capture intro %}{% include word/intro.md %}{% endcapture %}
    {{ intro | markdownify }}
    {% include word/horizontal-rule.html %}
  </div>
  <img class="diver-illustration-1 absolute w-80-l o-20 multiply z-1" src="/img/turtle.jpg" alt="Turtle">
</section>

<section class="mw8 center relative">
  <img class="diver-illustration-2 absolute-l w-90-l o-20 multiply" src="/img/octopus-1600.jpg" alt="Octopus">
  <div class="measure-wide">
    {% capture backstory %}{% include word/backstory.md %}{% endcapture %}
    {{ backstory | markdownify }}
    {% include word/horizontal-rule.html %}
  </div>
</section>

<section class="mw8 center relative">
  <img class="diver-illustration-6 absolute-l w-50-l o-20 multiply" src="/img/mobilis-in-mobili.jpg" alt="Mobilis in mobili">
  <div class="measure-wide">
    {% capture principles %}{% include word/principles.md %}{% endcapture %}
    {{ principles | markdownify }}
    {% include word/horizontal-rule.html %}
  </div>
  <img class="diver-illustration-3 absolute-l w-50-l o-20 multiply" src="/img/diving-gear-1600.jpg" alt="Diving gear">
</section>

<section class="mw8 center relative">
  <div class="measure-wide">
    {% capture patterns %}{% include word/patterns.md %}{% endcapture %}
    {{ patterns | markdownify }}
    {% include word/horizontal-rule.html %}
  </div>
  <img class="diver-illustration-4 absolute-l w-60-l o-20 multiply" src="/img/flying-fish-1600.jpg" alt="Flying fish">
</section>

<section class="mw8 center relative">
  <div class="measure-wide">
    {% capture projects %}{% include word/projects.md %}{% endcapture %}
    {{ projects | markdownify }}
    {% include word/horizontal-rule.html %}
  </div>
  <img class="diver-illustration-4 absolute-l w-50-l o-20 multiply" src="/img/loon-1600.jpg" alt="Loons">
</section>

<section class="mw8 center relative">
  <div class="measure-wide">
    {% capture style-guide %}{% include word/style-guide.md %}{% endcapture %}
    {{ style-guide | markdownify }}
  </div>
  <div class="grid measure">
    <div class="w-100 h2 h3-ns br2 bg-signal-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-signal-mid-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-signal"></div>
    <div class="w-100 h2 h3-ns br2 bg-signal-mid-light"></div>
    <div class="w-100 h2 h3-ns br2 bg-signal-light"></div>

    <div class="w-100 h2 h3-ns br2 bg-seafoam-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-seafoam-mid-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-seafoam"></div>
    <div class="w-100 h2 h3-ns br2 bg-seafoam-mid-light"></div>
    <div class="w-100 h2 h3-ns br2 bg-seafoam-light"></div>

    <div class="w-100 h2 h3-ns br2 bg-newsprint-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-newsprint-mid-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-newsprint"></div>
    <div class="w-100 h2 h3-ns br2 bg-newsprint-mid-light"></div>
    <div class="w-100 h2 h3-ns br2 bg-newsprint-light"></div>

    <div class="w-100 h2 h3-ns br2 bg-coral-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-coral-mid-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-coral"></div>
    <div class="w-100 h2 h3-ns br2 bg-coral-mid-light"></div>
    <div class="w-100 h2 h3-ns br2 bg-coral-light"></div>

    <div class="w-100 h2 h3-ns br2 bg-treasure-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-treasure-mid-dark"></div>
    <div class="w-100 h2 h3-ns br2 bg-treasure"></div>
    <div class="w-100 h2 h3-ns br2 bg-treasure-mid-light"></div>
    <div class="w-100 h2 h3-ns br2 bg-treasure-light"></div>
  </div>
  <div class="bg-white pa4 br3 mv4 mw6">
    <h4 class="ttu tracked avenir f7 mv0 normal newsprint">Clarendon Type Sample</h4>
    <h3 class="mv0 f3 newsprint-dark">Chapter 1: A Shifting Reef</h3>
    <p class="measure mb0">The year 1866 was signalized by a remarkable incident, a mysterious and inexplicable phenomenon, which doubtless no one has yet forgotten. Not to mention rumors which agitated the maritime population, and excited the public mind, even in the interior of continents, seafaring men were particularly excited. Merchants, common sailors, captains of vessels, skippers, both of Europe and America, naval officers of all countries, and the Governments of several states on the two continents, were deeply interested in the matter.</p>
  </div>
  <img class="diver-illustration-5 absolute-l w-90-l o-20 multiply" src="/img/swordfish-1600.jpg" alt="Swordfish">
</section>

<section class="mw8 center relative">
  <img class="db w-50-l center mt5 multiply o-70" src="/img/learning-to-swim.jpg" alt="Learning to swim">
  <div class="measure-wide center">
    {% capture how-you-can-help %}{% include word/how-you-can-help.md %}{% endcapture %}
    {{ how-you-can-help | markdownify }}
  </div>
  <img class="db w-50-l center mv5 multiply o-70" src="/img/submarine-device.jpg" alt="Submarine device">
</section>
