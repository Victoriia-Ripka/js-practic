"use strict";

// в ретурн покласти оцей вираз, а не робити змінну
// function isAdult(age) {
//   // const passed = age >= 18;
//   // return passed;
//   return age >= 18;
// }
// const a = 20;
// console.log(a);
// console.log(isAdult(a));

function checkStorage(available, ordered) {
  let message = "The order is accepted, our manager will contact you";
  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } 
  return message;
}


checkStorage(0, 10);
checkStorage(10, 10);
checkStorage(10, 0);