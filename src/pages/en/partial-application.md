---
title: Partial application
description: Summarized definition of partial application
layout: ../../layouts/MainLayout.astro
---

**Partial application** is a technique used to transform functions with multiple arguments into multiple functions that take fewer arguments. A function can be called with fewer arguments than it expects and the function returns a function that takes the remaining arguments.

A curried function can be split into many chained functions, all taking exactly one argument, but a partially applied function does not have that limitation.

```js
/* call a function with fewer arguments than expected
* and the function returns a function that takes the remaining arguments
*/

const add = (a, b) => a + b;
let add1 = add.bind(null, 1);
let add2 = add.bind(null, 2);

console.log(add1(10)); //logs 11
console.log(add2(10)); //logs 12
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_
