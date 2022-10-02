---
title: Fetch
description: Summarized definition of Fetch
layout: ../../layouts/MainLayout.astro
---

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP channel, such as requests and responses. It also provides a global fetch() method that provides an easy and logical way to asynchronously fetch resources over the network.

A basic fetch request is really simple to do:

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are retrieving a JSON file over the network and printing to the console.
The simplest use of fetch() takes one argument (the path of the resource you want to fetch)
and returns a Promise object containing the response, a Response object.

This is of course an HTTP response not the JSON file. To extract the content
in the body of the JSON from the response, we use the json() method (defined in the Body mixin,
which is implemented by the Request and Response objects).

## Providing request options

The fetch() method can optionally accept a second parameter, an init object.
which allows you to control a number of different settings:

```js
// Example implementing the POST method:
async function postData(url = '', data = {}) {
  // default options marked with a *
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

## Checking the request is successful

A promise fetch() request will be rejected with TypeError when a network error is encountered,
though this usually means permission issues or the like — for example, a 404 does not constitute
a network error. An accurate way to check that the fetch() request is successful is to check
if the promise has been resolved, in addition to checking that the Response.ok property has the value true that
indicates that the status of the HTTP request is OK (code 200-299). The code would be something like this:

```js
fetch('flores.jpg').then(function(response) {
  if(response.ok) {
    response.blob().then(function(miBlob) {
      var objectURL = URL.createObjectURL(miBlob);
      miImagen.src = objectURL;
    });
  } else {
    console.log('Network response OK but HTTP Response not OK');
  }
})
.catch(function(error) {
  console.log('There was a problem with the fetch request:' + error.message);
});

```

_Source: [**MDN Web Docs**](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)_
