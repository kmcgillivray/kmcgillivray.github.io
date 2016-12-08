---
layout: plain
title: Sketchbook
category: gallery
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
  <div class="fl w-100 ph4-ns pv3 pv4-ns tc">
    <p class="center light-gray measure-wide lh-copy ba b--mid-gray bw3 pa4"><a class="light-gray bb b--gray" href="/about">Kevin McGillivray</a> is a <a class="light-gray bb b--gray" href="http://codeconvoy.com" target="_blank">teacher</a> and <a class="light-gray bb b--gray" href="http://sandcastle.co" target="_blank">web developer</a> from Wisconsin.<br>He <a class="light-gray bb b--gray" href="/">writes</a> about creativity, mindfulness, <a class="light-gray bb b--gray" href="/code">code</a>, and <a class="light-gray bb b--gray" href="http://teaguide.co" target="_blank">tea</a>.<br>He <a class="light-gray bb b--gray" href="http://twitter.com/kev_mcg" target="_blank">tweets</a> and <a class="light-gray bb b--gray" href="http://kevinschmevin.com" target="_blank">tumbles</a>.</p>
  </div>
</div>
