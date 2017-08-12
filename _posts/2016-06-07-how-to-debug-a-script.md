---
layout: post
title: "How to Debug a Script"
category: development
description: "Strategies and mindset for untangling code."
excerpt: "Besides solving the issue you're stuck on, figuring out what the issue is in the first place is half the battle. But how do you start? How do you comb through the mess of code in front of you and find the issue? Here are a few strategies you can use to get started and work toward finding the issue and solving it."
---

As a programmer, it’s rare to have a day where you don’t get stuck on something. Getting stuck isn’t a bad thing, it’s a normal part of any programming—and it’s often when you learn the most. Usually this stuckness happens in situations when:

* You have a script in front of you but have no idea how it works.
* You have a script that isn’t doing what it’s supposed to be doing.
* You’re writing a script and are stuck in the middle of writing it, unsure how to move forward.

Besides solving the issue you're stuck on, figuring out what the issue is in the first place is half the battle. But how do you start? How do you comb through the mess of code in front of you and find the issue?

Here are a few strategies you can use to get started and work toward finding the issue and solving it.

## 1. Reveal the data

When we give the computer instructions we see the result of what happens after the computer follows those instructions, but typically we don’t see the computer’s “thinking” process as it follows each step. Essentially, a script takes in a set of data, changes that data via the instructions we write, and then outputs the final form of the data. If the result of the instructions isn’t what we intended, then somewhere along the line one of the steps is either missing, incorrect, or the computer interprets it differently than we thought it would. The problem is that the result of each step in the code is often hidden from view by default, so it's not immediately apparent where the error in logic happened.

The solution is to use whatever tools we have in the language we're working with to see the data as it changes throughout the script. If we can see exactly what the computer "sees" during each step, we'll have much more information to work with to figure out where the issue is. The key is to get a clear picture of what's actually going on inside the script by making the changes to the data visible. We can't debug what we can't see.

The main tool for this in JavaScript is the console. I use `console.log` constantly to check if each step is working correctly. It lets me see what the value of a piece of data is at any point. If I’m not sure what a variable is referring to, or if I want to make sure the data is what I expect it to be, `console.log` tells me what I need to know. I might have a hunch about an area of code that could be causing problems, so I'll use a `console.log` to explore it and test things to make sure they're working the way they're supposed to work.

Other languages may have other tools, and there may even be specific code inspecting tools you can use in your development environment, but no matter what tools or language you're working with the same principle applies: when you're stuck, look more closely at the data at each step.

## 2. Walk through the script like you're a computer

Another strategy for getting a better understanding of a script or solving a problem with a script that's not working is to mentally walk through each step as though you're the computer. A script is full of placeholder variables and unspecific information, and it looks like a static, linear block of text when you're trying to read it because it's written in words, letters, and symbols that don't move around. However, when the computer actually runs the script, the script comes to life, and it becomes a changing, dynamic system. Variables change values, data gets passed around to functions all over the script and even to completely different scripts. Imagining and walking through this dynamic process step by step is essential to understanding how a script works and resolving any issues that might be making it not work.

The first thing to keep in mind is that a script is linear but it’s not linear from top to bottom like a blog post or email. As the computer runs the script, it follows each step in order, but those steps aren’t necessarily in top to bottom order in the file—it jumps around as functions are called. Trying to read a script from top to bottom isn’t a good way to understand how it works. Instead, find the place where the script actually gets started. In a JavaScript file in a web browser, that might be as soon as the web page loads the JavaScript file. Then find the first line of code that actually runs. Often a script will have functions and variables declared at the top of the file, but not actually run any significant code until further down in the file. Find the point where the script starts processing instructions, and then follow the steps and data changes from there.

One key sub-strategy for this technique is to imagine real data. Data is often abstracted into placeholder variables that don’t mean anything until real data is inserted. As you walk through the script, imagine what the actual data would be in each moment and keep the current values of the different pieces of data in your memory just like a computer does in its memory. It will be much easier to understand what a script is doing when you’re thinking about a real example rather than abstract possibilities, and you’ll be more likely to find errors. You should also try combining this with the previous "reveal the data" technique to trace the instructions and the data through the script.

## 3. Be a scientist

The process for solving a problem in a complex system like a piece of code is pretty similar to doing a science experiment. identifying what’s wrong with a car or a plumbing system. It’s a series of logical hypotheses, tests, and experiments that work toward determining the cause of the problem. This process is a bit more loose than a strict scientific method, and could be compared to identifying problems with a car or plumbing system.

Come up with a hypothesis for where the issue might be, and use the previous two techniques to test that guess. If everything is working fine, you can move forward with more knowledge about how that section of code works, which helps to narrow down possibilities and come up with even more ideas for what the issue could be. Often you can narrow down an issue to where you know what section of code the issue is in, but still don't know exactly what the issue is. By repeating a series of guesses and tests, you build up knowledge about the script and get closer to understanding the problem. Usually it's helpful to start with testing the most basic functionality first. Comment out the complex stuff, and just make sure the basic features are working. If those look good, then you know you have a strong foundation and can start testing the functionality that you're building on top of it.

---

Even the most complex scripts can be tested, explored, and debugged using these strategies. By testing step by step, you can locate issues within a script and then get to the challenge of solving them!

What strategies do you use when you're stuck on a programming problem? Let's chat on [Twitter](http://twitter.com/kev_mcg) or send me an [email](mailto:kevin@sandcastle.co) with comments or questions.
