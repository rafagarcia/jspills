---
title: Memoization
description: Summarized definition of memoization
layout: ../../layouts/MainLayout.astro
---

**Memoization** is an optimization technique that increases the performance of a function by remembering its previously computed results. As javascript objets behave like associative arrays, they can act as caches. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned without executing the entire function. However, if the data is not cached, then the function is executed and the result is added to the cache.

The memoized function must be pure. A **pure function** will return the same output for a given input, no matter how many times being called. This makes the cache work as expected. The value of a pure function is not recalculated.

```js
// memoized function to add something

const memoizedAdd = () => {
  let cache = {};
  return n => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    } else {
      console.log('Calculating result...');
      let result = n * (n -1);
      cache[n] = result;
      return result;
    }
  };
};

// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(6)); // calculated result 30
console.log(newAdd(6)); // cached result 30
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_
