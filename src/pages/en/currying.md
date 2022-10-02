---
title: Currying
description: Summarized definition of Currying
layout: ../../layouts/MainLayout.astro
---

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3)

The number of arguments a function takes is also called `arity`.

```js
  function sum(a, b) {
      // do something
  }
  function _sum(a, b, c) {
      // do something
  }
```

function sum takes two arguments (2-arity function) and _sum takes three arguments (3-arity function).

Curried functions are constructed by chaining closures by defining and immediately returning their inner functions simultaneously.

## Why it’s useful ?

* Currying helps we avoid passing the same variable again and again.
* It helps to create a `higher order function`

Currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.

See an example:

```js
  function sum(a, b, c) {
    return a + b + c;
  }
  sum(1,2,3); //6
```

As we see, function with the full arguments. Let’s create a curried version of the function and see how we would call the same function (and get the same result) in a series of calls:

```js
  function sum(a) {
    return (b) => {
      return (c) => {
        return a + b + c
      }
    }
  }
  console.log(sum(1)(2)(3)) // 6
```

_Source: [**Currying in JavaScript - Medium post**](https://medium.com/swlh/currying-in-javascript-bbe4ddedf86b)_

