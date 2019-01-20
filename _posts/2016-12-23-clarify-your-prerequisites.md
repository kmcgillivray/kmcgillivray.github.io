---
layout: post
title: "Tutorial Writing: Clarify Your Prerequisites"
category: code
description: "Writing accessible and learner-friendly tutorials."
excerpt: 'This was my experience for the first few years of my own learning-to-code journey. Most tutorials I found started with "open up your text editor" or "run X on the command line." What the heck did that mean?! The tutorials were written for people who had already been initiated into the world of development. They assumed you had a bit of experience already and knew how to get started, that you knew what a text editor and the command line were.'
---

A few days ago, Anil Dash asked an interesting question on Twitter (actually, he asked it a year ago, but brought it up again recently by retweeting himself):

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">So, what made you stop trying to learn how to code? I&#39;m curious about the barriers that get erected.</p>&mdash; Anil Dash (@anildash) <a href="https://twitter.com/anildash/status/648730444050104320">September 29, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Essentially, what are the walls that stand between a beginner and learning how to code?

The answers were varied, but one theme that came up a few times was the fact that many programming learning resources make a lot of assumptions about the reader. As an experienced developer writing a tutorial, it's hard to remember just how basic we need to be for complete beginners:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/anildash">@anildash</a> literally stuff like &quot;where do I type code into?&quot; &quot;How do I get python on my computer?&quot; &quot;How do I save a program and make it run&quot;</p>&mdash; Alex Hern (@alexhern) <a href="https://twitter.com/alexhern/status/648737063626481664">September 29, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/alexhern">@alexhern</a> <a href="https://twitter.com/anildash">@anildash</a> Know its redundant to mention, but so many resources say &#39;install npm x&#39; then leave out (nor even link to) why, or where</p>&mdash; Aaron Winters (@AaronWinters916) <a href="https://twitter.com/AaronWinters916/status/786293953641394176">October 12, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet center" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/anildash">@anildash</a> &#39;Beginner&#39; courses that are actually intermediate. Lack of detectable progress. Being overwhelmed with information. Jargon. Time.</p>&mdash; Bryan 👾 Clark (@bryanclark) <a href="https://twitter.com/bryanclark/status/805952376192450560">December 6, 2016</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/anildash">@anildash</a> I didn&#39;t stop all things, but I think about trying to learn Javascript...the assumption that ppl know &quot;basics&quot; everywhere.</p>&mdash; Sora mad at Riku rn (@dtwps) <a href="https://twitter.com/dtwps/status/648852811053158400">September 29, 2015</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

This was my experience for the first few years of my own learning-to-code journey. Most tutorials I found started with "open up your text editor" or "run X on the command line." What the heck did that mean?! The tutorials were written for people who had already been initiated into the world of development. They assumed you had a bit of experience already and knew how to get started, that you knew what a text editor and the command line were.

<p data-pullquote='“the assumption that ppl know basics everywhere.”'></p>

This is a huge problem. First, there aren't many resources written with complete beginners in mind. Most resources for learning programming skills are written for people who already have a fundamental level of understanding. As [Jeremy Keith](https://adactio.com/journal/11551) says, "There are lots of great articles and tutorials out there for professional web developers—Smashing Magazine, A List Apart, CSS Tricks, etc.—but not so much for complete beginners." Even if a tutorial is meant to be for beginners, it's hard to remember all of the details that a beginner might not know yet, so beginners end up getting stuck and feeling frustrated.

Second, if a tutorial is written for intermediate to advanced programmers, that fact isn't clear to a beginner. A beginner looking at a tutorial has no way of knowing if they're prepared for the tutorial unless the tutorial tells them the prerequisites. When they attempt it, it feels like stumbling around in the dark trying to find any rock to trip on that might help you figure out the right direction.

Writing tutorials for intermediate or advanced programmers isn't a bad thing. If you write tutorials, you don't want to have to write every tutorial as though it's for a complete beginner. But it's *super helpful* when a resource has a paragraph at the beginning outlining the experience level you should have before using said resource, and a couple links to help you get that experience if you don't have it. And it's *amazing* when people spend time writing resources for complete beginners because there is a lack of resources available for that skill level.

As resource writers, we should do two things:

1. Spend time writing material that is truly geared toward beginners—make zero assumptions about previous skill level and explain everything.
2. Leave a trail of breadcrumbs at the beginning of our intermediate and advanced resources. At the beginning of the resource, explain to the audience who the tutorial is for and what experience level they should have before attempting to understand your tutorial. If it's not for beginners, link to a few places a beginner should start instead to gain the fundamentals needed to understand the resource.

It would be great if we had a standardized way to do this across the industry, but here's an example—please feel free to use it and adjust it for your needs:

>## Understanding JavaScript Object Constructors
>
>This tutorial is meant for intermediate developers. To learn most effectively from this tutorial and avoid frustration you should understand the following:
>
>* *Required* – How to use the command line ([Learn here](#))
>* *Required* – How to use a text editor ([Learn here](#))
>* *Recommended* – How to read and write basic JavaScript ([Sections 1-6 of this course](#))

To figure out what skills your audience needs for your tutorial, go through your tutorial yourself and pay attention to what skills you're using to demonstrate your topic, even if they're not skills you're explaining in the tutorial itself. Make a list of them, and then find resources for those topics. Since you've already learned these things yourself, it's likely that you already know of some that are good.

---

The beginning initiation to a subject is an exciting place to work for a teacher because it can mean the difference between someone giving up learning and someone having the fundamental skills to be able to continue learning and growing long after you're done working with them. Let's give learners more resources that meet them where they're at, and help them find the right place for them in the huge array of learning resources available by clarifying who our resource is meant for and guiding them toward resources appropriate for their skill level.

>In an effort to provide more beginner resources and put these ideas into action, I'm also publishing an [Introduction to Text Editors and the Command Line](/introduction-to-text-editors-and-the-command-line) for beginners alongside this post!
