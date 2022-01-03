---
layout: noble
title: Kevin's Painting Sale
paintings:
  - title: Sweet Italian Pepper
    image: /pepper.jpg
    year: 2021
    medium: Oil on panel
    size: 5 x 7 in.
    price: $190
    reserved: true
  - title: Egg
    image: /egg.jpg
    year: 2019
    medium: Oil on panel
    size: 5 x 7 in.
    price: $190
    reserved: true
  - title: Apples
    image: /apple-1.jpg
    year: 2021
    medium: Oil on panel
    size: 5 x 7 in.
    price: $190
    reserved: true
  - title: Garlic
    image: /garlic.jpg
    year: 2021
    medium: Oil on panel
    size: 8 x 10 in.
    price: $375
  - title: Riverside
    image: /park-4.jpg
    year: 2021
    medium: Oil on panel
    size: 5 x 7 in.
    price: $190
  - title: Riverside (Park Bench)
    image: /park-3.jpg
    year: 2020
    medium: Oil on panel
    size: 8 x 10 in.
    price: $375
  - title: Riverside (Berry Bush)
    image: /riverside-1.jpg
    year: 2021
    medium: Oil on canvas
    size: 12 x 16 in.
    price: $525
  - title: Dahlia and sunflower
    image: /dahlia-sunflower.jpg
    year: 2021
    medium: Oil on panel
    size: 5 x 7 in. each
    price: $350
    reserved: true
---

# Kevin's Painting Sale
{: .f2 .tc}

Thank you for stopping by the gallery! I hope these paintings find a good home with you.
{: .measure .center}

**To reserve a painting, please send me an email using the link below each image.** I'll be in touch to coordinate shipping and send an invoice. First come, first served! US shipping will be between $8<sup>.00</sup> - $15<sup>.00</sup>. International shipping will vary by location. All paintings will be framed. Please allow 4-6 weeks to ship.
{: .measure .center}

{% for painting in page.paintings %}
<div class="mw7 center tc">
  <img class="mb3 ba b--white bw4" src="/img/{{ painting.image }}" alt="{{ painting.title }}" />
  <h2 class="mv0 f5 normal"><span class="i">{{ painting.title }}</span>, {{ painting.year }}</h2>
  <p>{{ painting.medium }}. {{ painting.size }}<br>{{ painting.price }}<br>{% if painting.reserved %}<span class="tracked f6">RESERVED</span>{% else %}<a href="mailto:kevin.mcgillivray@me.com?subject=Painting Request: {{ painting.title }}">Request</a>{% endif %}</p>
</div>
{% endfor %}
