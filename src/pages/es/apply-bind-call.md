---
title: Apply, bind y call
description: Definción resumida de Apply, bind and call
layout: ../../layouts/MainLayout.astro
---

**Apply** y **call** tienen un uso similar. Ejecutan una función en el contexto o alcance del primer argumento que pasa. Son funciones que solo pueden ser llamadas en otras funciones.

## Call

Con **call**, los argumentos subsiguientes se pasan a la función tal como están.

## Apply

**Apply** espera que el segundo argumento sea una matriz que se descompone como argumentos para la función llamada.

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

Bind puede ser utilizado por cada función. Devuelve una función enlazada con el contexto correcto _this_ para llamar a la función original cuando se ejecuta más tarde. Bind se puede usar cuando la función debe llamarse más tarde en ciertos eventos.

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


_Fuente: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_