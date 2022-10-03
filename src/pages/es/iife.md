---
title: IIFE
description: Definición resumida de IIFE
layout: ../../layouts/MainLayout.astro
---

Las expresiones de función invocadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen. Es un patrón de diseño también conocido cómo **función autoejecutable** y se compone de dos partes:

1. La primera parte es la función anónima con alcance léxico encerrado por el operador de agrupación () que impide acceder a variables fuera del IIFE o contaminar el scope global.
2. La segunda parte crea la expresión de función cuya ejecución es inmediata (), siendo interpretado directamente en el motor de JavaScript.

La función se convierte en una expresión de función que es ejecutada inmediatamente. La variable dentro de la expresíon no es accesible desde afuera.

```js
  (function () {
    var aName = "Barry";
  })();
  // Variable name is not accessible from the outside scope
  aName // throws "Uncaught ReferenceError: aName is not defined"
```

Asignar el IIFE a una variable almacena el valor retornado, no la definición de la función.

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

_Fuente: [**MDN web docs.**](https://developer.mozilla.org/es/docs/Glossary/IIFE)_

