---
title: Fetch
description: Definición resumida de Fetch
layout: ../../layouts/MainLayout.astro
---

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

Una petición básica de fetch es realmente simple de realizar.

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

```

Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola.
El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener)
y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.

Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido
en el cuerpo del JSON desde la respuesta, usamos el método json()(definido en el mixin de Body,
el cual está implementado por los objetos Request y Response).

## Suministrando opciones de petición

El método fetch() puede aceptar opcionalmente un segundo parámetro, un objeto init
que permite controlar un numero de diferentes ajustes:

```js
// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', /* no-referrer, *no-referrer-when-downgrade, origin,
    origin-when-cross-origin, same-origin, strict-origin,
    strict-origin-when-cross-origin, unsafe-url */
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

```

## Comprobando que la petición es satisfactoria

Una petición promise fetch() (en-US) será rechazada con TypeError cuando se encuentre un error de red,
aunque esto normalmente significa problemas de permisos o similares — por ejemplo, un 404 no constituye
un error de red. Una forma precisa de comprobar que la petición fetch() es satisfactoria pasa por comprobar
si la promesa ha sido resuelta, además de comprobar que la propiedad Response.ok tiene el valor true que
indica que el estado de la petición HTTP es OK (código 200-299). El código sería algo así:

```js
fetch('flores.jpg').then(function(response) {
  if(response.ok) {
    response.blob().then(function(miBlob) {
      var objectURL = URL.createObjectURL(miBlob);
      miImagen.src = objectURL;
    });
  } else {
    console.log('Respuesta de red OK pero respuesta HTTP no OK');
  }
})
.catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
});

```

_Fuente: [**MDN Web Docs**](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)_