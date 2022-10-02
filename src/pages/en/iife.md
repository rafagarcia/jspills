---
title: IIFE
description: Summarized definition of IIFE
layout: ../../layouts/MainLayout.astro
---

Immediately executed function expressions (IIFE) are functions that are executed as soon as they are defined. It is a design pattern also known as a **autoexecutable function** and is made up of two parts:

1. The first part is the lexically scoped anonymous function enclosed by the grouping operator () that prevents accessing variables outside the IIFE or polluting the global scope.
2. The second part creates the function expression whose execution is immediate(), being interpreted directly in the JavaScript engine.

The function is converted to a function expression that is executed immediately. The variable inside the expression is not accessible from outside.

```js
  (function () {
    var aName = "Barry";
  })();
  // Variable name is not accessible from the outside scope
  aName // throws "Uncaught ReferenceError: aName is not defined"
```

Assigning the IIFE to a variable stores the return value, not the function definition.

```js
  var result = (function () {
    var name = "Barry";
    return name;
  })();
  // Immediately creates the output:
  result; // "Barry"
```

```js
  //IIFE without arguments
  (function() {
    console.log('Hello from IIFE without arguments')
  })(); //logs 'Hello from IIFE without arguments'

  //IIFE with arguments
  (function(a, b) {
    console.log(a + b);
  })(2, 3); //logs 5
```

_Source: [**MDN web docs.**](https://developer.mozilla.org/es/docs/Glossary/IIFE)_

