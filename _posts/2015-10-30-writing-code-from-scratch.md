---
layout: post
title: "Writing Code from Scratch"
category: writing
description: "The mystery of one way streets."
---

Tutorials are great for seeing examples of code and how coding languages are put together. But what happens when you’re far away from the safety of the examples in tutorials and need to write your own code from scratch? This requires a very different set of skills that tutorials typically don’t teach.

What you need isn’t the solution (which is what tutorials give you), but a set of strategies and creative problem solving skills that you can use to combine the building blocks that you’ve learned through tutorials into your own original solutions.

Here’s are the key parts of the strategy I use to write code from scratch when I know what I want the code to do, but I’m not sure how to put it into the syntax a computer will understand.

## 1. Start with pseudo-code.

Coding is translating human logic and words into a language the computer will understand. This translation doesn’t happen automatically. It’s helpful to have some intermediary steps in between the human verbal understanding of what needs to happen and the computer syntax of how to carry it out. The best tool for this is **pseudo-code**. Pseudo-code is instructions written in plain English (or whatever your primary language is) that roughly resemble the logical order of steps a computer would take.

For example:

```
// When the image is clicked
// Cycle the background color of the page through red, green, and blue
```

You may not know exactly how to turn this rough outline into the correct syntax for the computer to understand, and it may not even be the correct logic or order, but you at least have a rough sketch to start with that somewhat resembles the structure of a piece of code.

## 2. Tackle the smallest, tiniest piece of the functionality.

Before beginning this step, the most important thing to keep in mind is that the code you’re writing doesn’t have to be perfect the first time. It’s important to just get one tiny piece of the overall functionality working so you can get some feedback and make some progress. Even if it will have to be adjusted later, each step results in feedback and a few pieces of code you can use moving forward.

Using your pseudo-code, break it down into tiny, tiny pieces that you can tackle individually and do them one at a time. If you don’t know how exactly to write something in the correct syntax, this is a good time to do some research and look it up.

In this example, we're taking the pseudo-code from the previous example and simply getting the image to respond to a click:

```
var image = document.getElementById('image');
image.addEventListener("click", function() {
  console.log("click");
  // Cycle the background color of the page through red, green, and blue
});
```

We're using a `console.log` just to confirm that the click function is working, not worrying about whether or not the background color is changing yet.

In this example, we're getting the code to change the background to one specific color, not worrying about looping through all three yet:

```
var image = document.getElementById('image');
image.addEventListener("click", function() {
  console.log("click");
  document.body.style.backgroundColor = "blue";
  // Cycle the background color of the page through red, green, and blue
});
```

In the third example, we're taking it one step further, saving all of the colors together in an array and then changing the background color to a specific item in that array:

```
var image = document.getElementById('image');
var colors = ["red", "green", "blue"];
image.addEventListener("click", function() {
  console.log("click");
  document.body.style.backgroundColor = colors[1];
  // Cycle the background color of the page through red, green, and blue
});
```


## 3. Problem solving

At this point, it’s likely that you’ve tackled the easiest pieces and have made some progress toward what you want the code to do. But you’re also likely now stuck on the trickiest part of the problem. This is a good time to revisit your pseudo-code, revising it and making it more relevant to the part you’re stuck on. You may need to try different approaches and think of alternative solutions in order to solve the problem, or your current logic may need to be improved or edited to make it work properly.

In this example, we've re-written the pseudo-code to be more specific and closer to computer-speak rather than English:

```
var image = document.getElementById('image');
var colors = ["red", "green", "blue"];
// Set an index to point to the first color in the list of colors
image.addEventListener("click", function() {
  // Set the color to the current index
  document.body.style.backgroundColor = colors[1];
  // Increase the index
  // If the index is greater than the number of colors, reset to 0
});
```

And now we can translate the pseudo code fully into Javascript:

```
var image = document.getElementById('image');
var colors = ["red", "green", "blue"];
var colorIndex = 0;
image.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
      colorIndex = 0;
    }
});
```

## 4. Iterate

This code may not be perfect either—there may be a better way to do the same thing. But at least you have a working example, and you can focus on making it better rather than just getting it working. For example, this code could be abstracted even further by abstracting out the color change code into its own function that other pieces of the code could use. Or there may be a better way to handle the loop altogether.

## A note on specificity and abstraction

When you go through this process, usually the code moves from specific, inflexible versions to more flexible and abstract code. Specific means that it can only be used to do one thing or in one situation, and abstract means it’s modular and flexible and can do more things in more situations. This is part of the sketching process when writing code. Again, don’t expect it to be perfectly modular and abstract right away. Get it working in any way you can even if it’s imperfect, then go back and improve it once you’ve made some progress. The thing to avoid is making no progress for a long time because being stuck will eventually completely erode your motivation. It’s a lot more fun to solve problems one step at a time than be overwhelmed by the whole mountain.
