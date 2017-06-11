---
layout: post
title: "Portrait of a Morning in Code"
category: writing
description: "cat.eat();"
syntax: true
---

```javascript
var mindfulness = true;
var cat = {
  name: "Apollo",
  hungry: true,
  speak: function() {
    alert("Mrrreowrr!");
  },
  eat: function() {
    this.hungry = false;
  }
};
for (var i = 0; i < 20; i++) {
  cat.speak();
}
cat.eat();
var tea = {
  name: "Pure Bud Golden Snail",
  type: "Black",
  origin: "China";
};
var brew = {
  temperature: 90,
  time: 30,
  teaware: "Gaiwan",
  teaWeight: 4,
  infusions: 4
};
var todo = [
  "Make tea",
  "Read",
  "Work maybe?",
  "Plan wedding"
];
me.makeTea();
me.read();
me.write("Whatever words need to get out today.");
```
