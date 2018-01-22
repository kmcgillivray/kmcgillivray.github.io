---
layout: post
title: "Introduction to the \"Frontend\" and \"Backend\""
category: development
description: "From server to browser—understand the basics of the full stack to create a clear learning path."
---

_So, you want to make a website?_

Yay! That's a great idea—making a website is a rewarding creative project that is not only a fun and valuable skill on its own but also a great way to explore your interests and share them with many, many people (or just a few if you want!).

Usually when someone starts learning how to make a website, the typical starting place is with HTML and CSS. And that's a great place to start!

However, while you're doing that, let's take some time to take a wider look at how websites work underneath the hood. Understanding the big picture will put what you're learning into context and help you plan a clearer learning path to dig deeper into web development.

## The frontend and the backend

Two key words to understanding how websites work you might have heard before are the _frontend_ and the _backend_. These are often talked about (and taught) separately and seen as two very different things, but they are both essential and closely connected in most web development projects.

In simplest terms, **the frontend is any code that runs in the browser** and **the backend is any code that runs on the server**.

## The server

The role of the backend code on the server is very basic on the surface:

1. Listen for requests.
2. Respond to requests.

In a common example, a request might be someone trying to access the home page of a website. The server receives that request and sends back the HTML, CSS, JavaScript, images, and any other files associated with that page.

However, these requests and responses can be much more complex than this simple example—the backend code also typically handles retrieving and storing data in a database, dynamic page rendering, security and authentication checks, intensive image processing, and many other processing heavy tasks in response to incoming requests.

The responses generated can also take many forms. They might be straightforward like goodl old HTML and CSS files or assets like images and audio files, but they can also take the form of data files such as JSON.

Backend code is written in many languages—Ruby, PHP, Python, Java, and JavaScript are common options. Backend web development work often includes what could also be called "system administrator" tasks in addition to writing the actual code to make the website work. These include installing server-side tools, configuring databases, etc.

Learning a backend language opens many possibilities for what kinds of features you can build on a website. It allows you to take a static page and add a huge range of new ways to interact with the site. The best place to get started with backend development is likely a tutorial for one of the languages above, followed by exploring backend frameworks or content management systems for the language you're interested in like Ruby on Rails (Ruby), Express (JavaScript), Wordpress (PHP), Laravel (PHP), Django (Python) or many others.

## The browser

While the server's response can come in many forms, let's return to our example of a common web page request. After processing the request, the server responds with a collection of HTML, CSS, and JavaScript files along with any additional assets the requester might need.

The browser then receives these files and processes them. The code in these files is _frontend_ code because it runs on the browser-side.

The main role of the frontend is to:

1. Request information (data, files, etc.) from the backend.
2. Display or render that information.
3. Listen for user input (clicks, taps, scrolls, hovers, typing, voice commands, etc.).
4. Respond to user input.

For the first role, many requests are handled by the browser itself when a link is clicked or a new URL is entered. New information can also be requested after a page has already loaded with browser-side JavaScript code.

The display of data is defined by HTML and CSS processed by the browser. The HTML tells the browser about the structure and content of the page, and the CSS tells the browser how to display it on the screen.

As the user interacts with the display, both the browser and the page's JavaScript code listen for the interaction and respond appropriately—either with built in browser functionality or custom responses defined in JavaScript.

Writing the HTML, CSS, and JavaScript code for the browser is frontend programming. Writing this code often relies on processing from the backend, so the two are closely related despite being defined separately.

There is a huge array of libraries, frameworks, and other tools for the frontend, ranging from plain HTML, CSS, and JavaScript to tools like jQuery, React, and Angular, but the role of the frontend remains the same no matter what tool you're using. The tools are simply different ways to solve similar problems.

---

The world of web development is a huge playground to explore. Wherever you start exploring, having a map of the frontend and backend and what they do will help guide your next step. If you're not sure where to start, I recommend trying a little of both to get a taste and then follow your curiosity!

Questions? Comments? Clarifications? Let me know on [Twitter](http://twitter.com/kev_mcg)!

---

{% include newsletter-cta.md %}
