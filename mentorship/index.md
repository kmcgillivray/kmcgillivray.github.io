---
layout: page-wide
title: Web Development Mentorship
subtitle: Build your **skills, career, and creativity** with a one-on-one mentorship
points:
  - title: Build a super strong foundation
    description: Go beyond syntax and learn essential principles of programatic thinking and web development you can use in any project.
  - title: Craft a career
    description: Build real projects and a portfolio related to your interests and career goals. Practice sharing and communicating about your work and skills.
  - title: Connect with a community
    description: Connect with other students and professional developers at monthly group studio sessions.
  - title: Learn for mastery
    description: Get direct, detailed feedback and guidance as you learn at your own pace. Learn for mastery, not speed.
  - title: Explore wide, dig deep
    description: Connect your skills to a range of interesting topics in the history of the web and computer science and additional interdisciplinary topics to deepen your education.
---

<section class="bg-near-white mw7 center grid">
  <h1 class="pa4 mt0 mb0 b f2 lh-title bg-main white tr-ns">{{ page.title }}</h1>
  <h2 class="pa4 mb0 f4">{{ page.subtitle | markdownify }}</h2>
</section>

<!-- <img class="relative top--1 fr-ns db br0 mv0 mw6 center ba bw3 b--white" src="/img/desk.jpg" alt="A desk with a laptop and books"> -->

<section class="ph4 pv3 mw7 center grid mt3">
  {% for point in page.points %}
  <!-- <img class="mb0" src="/img/desk.jpg" alt="A desk with a laptop and books"> -->
  <h3 class="main ma0-ns tr-ns pr3-ns">{{ point.title }}</h3>
  <p class="pl3-ns">{{ point.description }}</p>
  {% endfor %}
</section>

<section class="ph4 mw7 center">
  {% capture bio %}{% include mentorship/bio.md %}{% endcapture %}
  {{ bio | markdownify }}
</section>

<section class="pa4 mw7 center">
  <h2>What you'll learn</h2>
  <ul class="list pl0 grid grid-gap-1">
    <li class="pa3 br2 bg-near-white tc"><strong>The Web Developer's Toolbox</strong><br>Text editors, browsers, the command line, and Git</li>
    <li class="pa3 br2 bg-near-white tc"><strong>Structure and Style</strong><br>HTML and CSS fundamentals</li>
    <li class="pa3 br2 bg-near-white tc"><strong>Semantics and Layout</strong><br>Advanced HTML and CSS</li>
    <li class="pa3 br2 bg-near-white tc"><strong>Programmatic Thinking with JavaScript</strong></li>
    <li class="pa3 br2 bg-near-white tc"><strong>Backend Fundamentals with Node</strong></li>
    <li class="pa3 br2 bg-near-white tc"><strong>Frontend Fundamentals with DOM Scripting</strong></li>
  </ul>
</section>

<section class="ph4 mw7 center">
  {% capture coursework %}{% include mentorship/coursework.md %}{% endcapture %}
  {{ coursework | markdownify }}
</section>

<section class="pa4 mw8 center grid grid-gap-1">
  <blockquote class="bn pa3 mb4 br2 fs-normal bg-near-white">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="dib w3 h3 bg-gray br-100 v-top"></div>
    <p class="dib ma2 main b">Student name</p>
  </blockquote>
  <blockquote class="bn pa3 mb4 br2 fs-normal bg-near-white">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="dib w3 h3 bg-gray br-100 v-top"></div>
    <p class="dib ma2 main b">Student name</p>
  </blockquote>
</section>

<section class="bg-near-white cf mw8 center br2">
  <div class="fl-ns w-50-ns pa4 bg-main white br2-ns br--left">
    <h2 class="mt0 white b f3 tc">{{ page.title }}</h2>
    <ul>
      <li>Meet one-on-one for one session per week, in person or online</li>
      <li>Access to monthly group studio sessions for networking, collaboration, and sharing projects</li>
      <li>Email any time for feedback and discussion between sessions</li>
      <li>Prepare to commit 10-20 hours of work per week</li>
      <li>Mentorships start in March 2018 – limited spots available.</li>
    </ul>
    <p class="pa2 br3 tc f3 mb0"><sup class="dib mt1">$</sup><span class="f1 v-mid">80</span> weekly</p>
  </div>
  <div class="fl-ns w-50-ns pa4">
    <h2 class="mt0 b f3 tc">Book a consultation</h2>
    <p>Get in touch below and let's talk about your interests and goals and make a plan together.</p>
    <p>**Form here**</p>
  </div>
</section>
