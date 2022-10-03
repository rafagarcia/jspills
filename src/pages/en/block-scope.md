---
title: Block scope
description: Summarized definition of block scope of var, let and const
layout: ../../layouts/MainLayout.astro
---

Block scope controls the visibility and lifetime of variables and parameters. Variables declared using var do not have block scope, while variables declared using let and const have block scope. Anything within curly braces ({}) is a block. A variable declared in a block with let or const is only available for use withing this block.

```js
// no block scope with var

var myage = 1;

if (myage === 1) {
  var myage = 2;
}

console.log(myage); // expected value: 2

// block scope created by let

var myage2 = 10;

if (myage2 === 10) {
  let myage2 = 20;

  console.log(myage2); // expected output: 20
}

console.log(myage2); // expected output: 10
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_