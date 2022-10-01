---
title: Hoisting
description: Summarized definition of Hoisting
layout: ../../layouts/MainLayout.astro
---

In JavaScript, declarations (for example, of variables or functions) are moved to the beginning of their scope. This behavior is known as hoisting and it is very important to take it into account when programming to prevent possible errors.

Considering how hoisting works, we can call a function and define it below, because automatically JS will “hoist” it. So, this code works correctly:

```js
  add();
  function add() {
   var myNumber = 4;
   console.log(myNumber + myNumber);
  }
```

since JS converts it to:

```js
  function add() {
    var myNumber;
    myNumber = 4;
    console.log(myNumber + myNumber);
  }
  add();
```

In the case of variables, it is very important to note that hoisting only applies to the declaration, and not to its assignment.

Therefore, we could **NOT** write this:

```js
  //Error
  add();
  function add() {
    console.log(myNumber + myNumber);
  }
  var myNumber = 4;
```

_Source: [¿Qué es el hoisting? - Medium post](https://anamartinezaguilar.medium.com/qu%C3%A9-es-el-hoisting-327870f67b36)_
