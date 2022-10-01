---
title: Currying
description: Summarized definition of Hoisting
layout: ../../layouts/MainLayout.astro
---

Currying es un proceso de programación funcional en el que podemos transformar una función con múltiples argumentos en una secuencia de funciones anidadas. Devuelve una nueva función que espera el siguiente argumento en línea.


En otras palabras, cuando una función, en lugar de tomar todos los argumentos a la vez, toma el primero y devuelve una nueva función que toma el segundo y devuelve una nueva función que toma el tercero, y así sucesivamente, hasta que todos los argumentos hayan terminado.

Es decir, cuando convertimos una llamada de función sum(1,2,3) en sum(1)(2)(3)

El número de argumentos que una función toma se conoce como `arity`

```js
  function sum(a, b) {
      // do something
  }
  function _sum(a, b, c) {
      // do something
  }
```

La función sum toma dos argumentos (función 2-arity) y _sum recibe tres argumentos (función 3-arity)

Las funciones curried se construyen encadenando closures a través de la definición y el retorno inmediato posterior de sus funciones internas simultáneamente.

## ¿Por qué son útiles?

* Currying nos ayuda a evitar pasar la misma variable una y otra vez.
* Ayuda a crear una `higher order function`

El currying transforma una función con múltiples argumentos en una secuencia o serie de funciones, tomando cada una de ellas un único argumento.

Veamos un ejemplo:

```js
  function sum(a, b, c) {
    return a + b + c;
  }
  sum(1,2,3); // 6
```

Como vemos, esta es una función con todos sus argumentos. Vamos a crear una versión curried de la función y veamos como la llamaríamos, obteniendo el mismo resultado, en una serie de llamadas:

```js
  function sum(a) {
    return (b) => {
      return (c) => {
          return a + b + c
      }
    }
  }
  console.log(sum(1)(2)(3)) //6
```

_Source: [**Currying in JavaScript - Medium post**](https://medium.com/swlh/currying-in-javascript-bbe4ddedf86b)_


