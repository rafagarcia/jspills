---
title: Closure
description: Summarized definition of Closure
layout: ../../layouts/MainLayout.astro
---

In javascript, every running function, code block or script have an associated object known as the **Lexical environment**. A new lexical environment is created each tme a function is executed. If the function has more than two-level nested inner functions, the innermost lexical environment is searched first, then the outer one, and so on until the end of the chain.

If we write a two-level nested function, when this function is called multiple times, each invocation will have its own lexical environment, with specific local variables and parameters for that run.

A **closure** is a **function with access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has been executed**.

**The function defined in the closure remembers the environment in which it was created**.

```js
  //function scope and closure

  function outer() {
    const outside = "I live in the outer function.";

    function inner() {
      const inside = "I live in the inner function";
      console.log(outside); //logs "I live in the outer function."
      console.log(inside); //logs "I live in the inner function."
    }

    return inner
  }

  const myClosure = outer();

  myClosure();
```

```js
  //counter without closure
  let count = 0; //global variable

  function counter() {
    return ++count;
  }

  console.log(counter()); //logs 1
  console.log(counter()); //logs 2
  console.log(counter()); //logs 3
```

The following example is a counter with local and protected variable _i_. The inner function created an independent execution context containing variable _i_. The returned function can refer to variable i even after the function is executed. Therefore, each time count is invoked, the variable _i_ is incremented from the previous value.

**The closure keeps the execution context**.

```js
  //counter with closure

  function counter(init) {
    let i = init;
    return function() {
      return ++i;
    }
  }

  const count = counter(100);
  console.log(count()); //logs 101
  console.log(count()); //logs 102
  console.log(count()); //logs 103
```

_Source: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_

