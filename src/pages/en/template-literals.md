---
title: Template literals
description: Summarized definition of template literals
layout: ../../layouts/MainLayout.astro
---

Template literals are indicated by enclosing strings in backtick characters (``) and provide syntactic sugar for concatenating strings, multi-line strings, and line breaks. Template literals are still a string and help in improving readability.

```js
let data = {
  title: "Mr.",
  name: "David Bowie",
  amount: "100000" 
};

console.log(`Dear ${data.title} ${data.name},

Your sales for your album "Aladdin Sane" have reached the number of ${data.amount} copies.

Congratulations.`)
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_
