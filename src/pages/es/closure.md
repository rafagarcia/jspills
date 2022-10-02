---
title: Closure
description: Definición resumida de Closure
layout: ../../layouts/MainLayout.astro
---

En javascript, cada función en ejecución, bloque de código o secuencia de comandos tiene un objeto asociado conocido como **Entorno léxico**. Se crea un nuevo entorno léxico cada vez que se ejecuta una función. Si la función tiene más de dos niveles de funciones internas anidadas, primero se busca en el entorno léxico más interno, luego en el externo y así sucesivamente hasta el final de la cadena.

Si escribimos una función anidada de dos niveles, cuando esta función se llama varias veces, cada invocación tendrá su propio entorno léxico, con variables locales y parámetros específicos para esa ejecución.

Un **closure** es una **función con acceso a su ámbito de función externo incluso después de que la función externa haya sido retornada. Esto significa que un closure puede recordar y acceder a variables y argumentos de su función externa incluso después de que se haya ejecutado la función**.

**La función definida en el closure recuerda el entorno en el que fue creada**.

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

El siguiente ejemplo es un contador con variable local y protegida _i_. La función interna creó un contexto de ejecución independiente que contenía la variable _i_. La función devuelta puede hacer referencia a la variable _i_ incluso después de ejecutar la función. Por lo tanto, cada vez que se invoca count, la variable _i_ se incrementa desde el valor anterior.

**El closure mantiene el contexto de ejecución**.

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

_Fuente: [**React hooks redux in 48 hrs.**](https://www.amazon.com/React-Hooks-Redux-hours-JavaScript-ebook/dp/B0987SZHW4)_

