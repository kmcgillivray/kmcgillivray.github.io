---
layout: post
title: "Introduction to Text Editors and the Command Line"
category: development
description: "Despite their simplicity, text editors and the command line are powerful keys to creativity, unlocking the ability to create anything."
excerpt: "When I started learning graphic design, I realized that the only thing holding me back from not learning design earlier was not having access to design software. Once I got my hands on some, it felt like the whole world had been opened up to me. I could make anything! Posters, logos, books, digital illustration... it was like the whole world of visual design went into edit mode simply by installing the right software."
---

>This resource is designed for beginner developers—people who are just beginning their journey in learning how to code (but of course more experienced developers might find something useful in it too). The only prerequisites for understanding this resource are a curiosity about the tools used to write code and past experience interacting with a computer.

When I started learning graphic design, I realized that the only thing holding me back from not learning design earlier was not having access to design software. Once I got my hands on some, it felt like the whole world had been opened up to me. I could make anything! Posters, logos, books, digital illustration... it was like the whole world of visual design went into edit mode simply by installing the right software.

Often, the only thing holding someone back from entire worlds of learning and creating is one door that needs to be opened. And the key to opening that door is often simply being given a quick introduction to basic tools and how they work.

When I started learning how to code, I would see tutorials that had instructions like "open up your text editor" or "run X on the command line." These instructions were written as though it was obvious what I was supposed to do, but as a complete beginner I had no idea exactly what the tutorial meant by "text editor" and "command line." I needed the same fundamental introduction to these tools that I had for design in order to truly be able to get started.

Text editors and the command line are like pens. The tools are so essential and basic to a developer that saying "open up your text editor" is like saying "pick up a pen"—it's easy to assume everyone not only has a pen, but has used one so often that they don't need any guidance for finding one or using it. But without an introduction to these tools, it's extremely difficult to get started, just like it would be hard to start writing without being taught what a pen is first.

Also, just like a pen or pencil, despite their simplicity, text editors and the command line are powerful keys to creativity, unlocking the ability to create anything.

So, here is the introduction to text editors and the command line that I wish I had when I got started.

---

## Text

First, it's important to understand that programming, at its heart, is a *text based interface* for using or controlling a computer. There was a time typing out commands and writing instructions out in text was the *only* way to interact with a computer. Then, famously, Steve Jobs led the development of a graphic-based interface for computers in which the interaction and contents of the computer were visualized in a metaphorical space. Instead of typing a command to open a file, you could now see the file on your screen, point at it, and touch it by clicking on it to open it. While Apple was not the first to do this, they were the most influential on the widest audience, and this became the primary interaction for personal computers ever since, so much so that many people have never used a text based interface to interact with a computer.

Developers, however, whether they're building websites or apps or simply interacting with their computer, still use text based interfaces for the vast majority of their tasks. To do this, they need text-focused tools, and the most essential, fundamental, and flexible text-focused tools are the text editor and the command line.

## So... what is a text editor?

A text editor is a tool for editing text. I know that sounds ridiculous, but that's what it is. Code is text, and a text editor is a tool that's primary purpose is making it easier to work with that text.

Typing and deleting text are the only essential features of a text editor, but most text editors have useful features that go beyond that to make it easier to read and edit code more efficiently and powerfully.

You might think, "Isn't that a word processor, like Microsoft Word or Apple Pages?" Kind of, but those applications are focused on creating documents to print along with visual styling and layout. Text editors don't include tools for visual layout or styling of text—they are focused on working with text itself, allowing you to sculpt text like clay. For example, some common features of text editors include:

{% include image.html file="multiline.gif" description="Writing on multiple lines at the same time." %}

{% include image.html file="quick-copy.gif" description="Quickly duplicating a line of text (without a full copy and paste)" %}

{% include image.html file="syntax-highlighting.gif" description="Highlighting text based on the syntax of the specific language you're writing" %}

"Text editor" is a generic term for a plethora of specific applications. [Atom](http://atom.io), [Sublime Text](https://www.sublimetext.com), and [TextMate](https://macromates.com) are all examples of specific text editors. Macs come preinstalled with TextEdit, which can serve as a text editor, and Windows PCs come preinstalled with Notepad. So when a tutorial says "open up your text editor", they're being purposefully vague because it doesn't *really* matter which one you use. On the surface, they're all the same. Underneath the surface, they have varying built in features, but most are customizable enough that you can easily make them do whatever you need them to do.

## And... what's the "command line"?

The command line is a text-based interface for navigating the computer, creating, reading, and deleting files, and running applications. This is everything you would typically do using the graphic interface by clicking to navigate around the computer, but the same tasks are done through text commands instead of visual interaction.

For example, when you open a command line application, it's similar to opening Finder on MacOS, or Windows Explorer on Windows. When you open any of these tools, you're placed at a "location" in the file system of your computer. From there, you can navigate around and open, create, or delete files and folders. The main difference between Finder or Windows Explorer and a command line application is that Finder and Windows Explorer are tools for interacting with the file system in a visual way, and the command line is a tool for interacting with the file system in a text-based way.

Technically, the command line is the actual area where you type in instructions for the computer, and you interact with that area through a command line application. Similarly to text editors, there's a wide variety of applications that allow you to interact with a computer through a "command line." On macOS, the preinstalled application is Terminal. On Windows, the command line application is called, imaginatively, Command Prompt. Here's an example of the command line in action:

{% include image.html file="command-line.gif" description="Creating a folder, navigating into the folder, creating a file, viewing contents of the current folder." %}

A good question at this point is: why would you want to do that? If you can interact with the computer through a rich visual display, why would you want to use a purely text based interface? Three reasons:

1. **If you're writing code, you're in text world.** Switching from thinking in text to thinking visually is a context shift between different parts of the brain. It feels slow to switch back and forth once you're in the text-based zone.
2. **Developer tools are most often text-based tools.** There are countless tools developers can use to make their lives easier, and most of them run through text commands. These are like mini applications that do different tasks. From the command line, you can run commands in each of these tools at the same time without having to leave the command line or have a dozen apps open at the same time. The tools are there and you can quickly pick it up and use it when you need it, all through the command line—kind of like a set of tools hung above a carpenter's workspace.
3. **Power and versatility.** With a visual interface, you're limited to the buttons and options that have been made available to you through the design of the interface. With a text based interface, you have more control over not only what the computer does, but how it does it. You can string together multiple commands into one command, or write shortcuts to do common tasks, or be very specific about how exactly the task should be done. You're one step closer to speaking the computer's language, so you can be much more nuanced in what you tell it to do.

## Getting started

If you want to get your hands on these tools and get some direct experience with them, here are a few steps to get started. It's hard to write a one-size-fits-all guide to this because it depends on your operating system and what code you eventually want to write, but here's what I'd recommend:

1. Install a professional text editor like [Atom](http://atom.io). If for some reason you can't install Atom on your computer, search Google for recommendations for the best text editor for your operating system. Then, search around for some tutorials for whatever type of code-thing you want to build! If you're interested in making websites, an HTML and CSS introductory tutorial like [this one](http://learn.shayhowe.com/html-css/building-your-first-web-page/) would be a good place to start.
2. If you're on macOS, find Terminal in your applications folder, open it, and then stare at it for a bit until the confusion and anxiety goes away (it is a little terrifying when you first start to use it). Then check out the [Codecademy command line course](https://www.codecademy.com/learn/learn-the-command-line). Try the exercises in the browser, and then try the same exercises on your own computer through Terminal. If you're on Windows... I can't offer too much guidance since it's not my normal operating system but most likely you should start by installing [Git Bash](https://git-for-windows.github.io) and then doing the same as above. (Developers on Windows systems, if you have better recommendations please [let me know](http://twitter.com/kev_mcg)).

---

## Wrapping up

Writing code is a text-based activity, and having a solid introduction to these two essential text-based tools will give you the foundation you need to better understand whatever resources you may encounter on your learning journey. They're so common that they're often overlooked in beginner tutorials which leads to lots of frustration for new developers, so I hope that this resource helps to alleviate some of that getting-stuckness! Please [let me know](http://twitter.com/kev_mcg) if you have comments, feedback, or questions about this post.
