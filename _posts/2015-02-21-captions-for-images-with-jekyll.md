---
layout: post
title: How to Create Image Captions with Jekyll
category: writing
---

Markdown is great for writing because of its simplicity and ability to be easily converted to HTML, but because of that simplicity it can be difficult to create anything more complex than blockquotes or unordered lists like image captions.

Luckily, if you're using [Jekyll](http://jekyllrb.com) to make your site, you can use a cool trick with the include files to make this as easy as using any other Markdown syntax.

First, set up an HTML partial in the Jekyll `_includes` folder named `image.html`. Mine looks something like this:

{% highlight html %}
{% raw %}
<img src="/img/{{ include.file }}" alt="{{ include.description }}">  
<span class="caption">{{ include.description }}</span>
{% endraw %}
{% endhighlight %}

Then add the include file to your post's Markdown file and add an image and caption using the normal include syntax:

{% highlight html %}
{% raw %}
---
layout: post
title: Image Caption Example
---

{% include image.html file="image-name.jpg" description="This is an image." %}
{% endraw %}
{% endhighlight %}

The trick here is the ability to use variables when adding the partial that are then able to be pulled into the partial HTML template. You can create whatever variables you would like, just like any other variable in the Jekyll front matter data.

Here's an example of it in action.

{% include image.html file="11-alcatraz.jpg" description="Sketch of Alcatraz and Angel Island. San Francisco, CA." %}

Good luck and have fun. Let's talk on [Twitter](http://twitter.com/kev_mcg) if you have any questions.
