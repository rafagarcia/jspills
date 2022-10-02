---
title: Partial application
description: Definición resumida de partial application
layout: ../../layouts/MainLayout.astro
---

**La aplicación parcial (partial application)** es una técnica utilizada para transformar funciones con múltiples argumentos en múltiples funciones que toman menos argumentos. Se puede llamar a una función con menos argumentos de los que espera y la función devuelve una función que toma los argumentos restantes.

Una función curry se puede dividir en muchas funciones encadenadas, todas tomando exactamente un argumento, pero una función aplicada parcialmente no tiene esa limitación.

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
