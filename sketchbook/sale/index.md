---
layout: noble
title: Kevin's Painting Sale
paintings:
  - title: Voyageur Park Near the Lock
    image: /voyageur-park-1.jpeg
    year: 2022
    medium: Oil on gesso board
    size: 6 x 8 in.
    price: $125
  - title: Clementines
    image: /clementines.jpeg
    year: 2022
    medium: Oil on canvas panel
    size: 6 x 6 in.
    price: $190
  - title: Riverside
    image: /park-4.jpg
    year: 2021
    medium: Oil on canvas panel
    size: 5 x 7 in.
    price: $125
---

<!-- - title: Garlic
  image: /garlic.jpeg
  year: 2022
  medium: Oil on canvas panel
  size: 6 x 6 in.
  price: $190
- title: Clementine
  image: /clementine.jpeg
  year: 2022
  medium: Oil on canvas panel
  size: 6 x 6 in.
  price: $190 -->

# Kevin's Painting Sale
{: .f2 .tc}

Thank you for stopping by the gallery! I hope these paintings find a good home with you.
{: .measure .center}

**To reserve a painting, please send me an email using the link below each image.** I'll be in touch to coordinate shipping and send an invoice. First come, first served! US shipping will be between $8<sup>.00</sup> - $15<sup>.00</sup>. International shipping will vary by location. Please allow two weeks to ship.
{: .measure .center}

{% for painting in page.paintings %}
<div class="mw6 center tc">
  <img class="mb3 ba b--white bw4" src="/img/{{ painting.image }}" alt="{{ painting.title }}" />
  <h2 class="mv0 f5 normal"><span class="i">{{ painting.title }}</span>, {{ painting.year }}</h2>
  <p>{{ painting.medium }}. {{ painting.size }}<br>{{ painting.price }}<br>{% if painting.reserved %}<span class="tracked f6">RESERVED</span>{% else %}<a href="mailto:kevin.mcgillivray@me.com?subject=Painting Request: {{ painting.title }}">Request</a>{% endif %}</p>
</div>
{% endfor %}

---

For painting sales announcements, please subscribe to the newsletter.
{: .tc .f3 .mt5 .i}

<form class="mb5 mw7 center" action="https://tinyletter.com/kev_mcg" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/kev_mcg', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p><label class="sr-only" for="tlemail">Enter your email address</label></p><p><input type="text" class="w-100 plantin bn pa3 f3-l f4" placeholder="Enter your email address..."  name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed"/><input class="br-pill ph4 pt2 pb1 pointer dim bg-sage bn f3-l f4 b sage-light" type="submit" value="Subscribe" /></form>
