---
title: Higher Order Functions (HOF)
description: Definición resumida de Higher order functions (HOF)
layout: ../../layouts/MainLayout.astro
---

Functions that take and/or return other functions are called **Higher order functions**.

Las funciones que toman y/o devuelven otras funciones se denominan **Higher order functions (funciones de orden superior)**.

En el siguiente ejemplo, pasamos una función anónima a la función MyFunc, que luego devolvemos inmediatamente desde la función myFunc.

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

_Fuente: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_

