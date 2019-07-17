"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);


const message = document.querySelector('.form__message--js');
const load = document.querySelector('.form__button--load--js');
const save = document.querySelector('.form__button--save--js');

save.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(message.value);
  localStorage.setItem('message', message.value);
});

load.addEventListener('click', (e) => {
  e.preventDefault();
  message.innerHTML = localStorage.getItem('message');
});