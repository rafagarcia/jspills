---
title: Memoization
description: Definición resumida de memoization
layout: ../../layouts/MainLayout.astro
---

**Memoización** es una técnica de optimización que aumenta el rendimiento de una función al recordar sus resultados calculados previamente. Como los objetos de JavaScript se comportan como matrices asociativas, pueden actuar como cachés. Cada vez que se llama a una función memorizada, sus parámetros se usan para indexar el caché. Si los datos están presentes, se pueden devolver sin ejecutar toda la función. Sin embargo, si los datos no se almacenan en caché, la función se ejecuta y el resultado se agrega al caché.

La función memorizada debe ser pura. Una **función pura** devolverá la misma salida para una entrada determinada, sin importar cuántas veces se llame. Esto hace que el caché funcione como se esperaba. El valor de una función pura no se vuelve a calcular.

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
