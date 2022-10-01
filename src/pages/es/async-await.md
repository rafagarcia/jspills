---
title: Async await
description: Summarized definition of Async await
layout: ../../layouts/MainLayout.astro
---

Una función async es una función declarada con la palabra clave async, y en donde la palabra clave await se permite dentro de ella. Las palabras claves async y await permiten un comportamiento asíncrono, basado en una promesa, redactada en un estilo mas limpio, evitando la necesidad de configurar explícitamente cadenas de promesas.

Las funciones async también pueden ser definidas como expresiones.

_Fuente: [**MDN Web docs**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)_

```js
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```