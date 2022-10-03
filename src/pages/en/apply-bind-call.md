---
title: Apply, bind and call
description: Summarized definition of Apply, bind and call
layout: ../../layouts/MainLayout.astro
---

**Apply** and **call** are similar in usage. They execute a function in the context or scope of the first argument that you pass. They are functions that can only be called on oher functions.

## Call

With **call**, subsequent arguments are passed into the function as they are.

## Apply

**Apply** expects the second argument to be an array that in unpacks as arguments for the called function.

```js
  function sum(a, b) {
    console.log(this.num + a + b);
  }

  let obj1 = { num: 1 }
  let obj2 = { num: 2 }

  // call
  sum.call(obj1, 1, 1); // logs 3
  sum.call(obj2, 1, 1); // logs 4

  // apply
  sum.apply(obj1, [1, 1]); // logs 3
  sum.apply(obj2, [1, 1]); // logs 4
```

## Bind

Bind can be used by every single function. It returns a bound function with the correct context _this_ for calling the original function when executed later. Bind can be used when the function needs to be called later in certain events.

```js
  function sum(a, b) {
    console.log(this.num + a + b);
  }

  let obj1 = { num: 100 }
  let obj2 = { num: 200 }

  let obj1Sum = sum.bind(obj1);
  let obj2Sum = sum.bind(obj2, 1, 2);

  obj1Sum(1, 2); // logs 103
  obj2Sum(); // logs 203
```


_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_