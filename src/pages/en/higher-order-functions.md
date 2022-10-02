---
title: Higher Order Functions (HOF)
description: Summarized definition of Higher order functions (HOF)
layout: ../../layouts/MainLayout.astro
---

Functions that take and/or return other functions are called **Higher order functions**.

In the example below, we pass an anonymous function to the MyFunc function, which we then inmediately return from the myFunc function.

```js
  //functions can be sent to another function and be returned from the function

const myHof = function(myFunc) {
  return myFunc;
}

const sayHi = myHof(function() {
  console.log('Hello!');
})

sayHi(); //logs 'Hello'
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_

