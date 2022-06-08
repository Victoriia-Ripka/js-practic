// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// const a = 20;
// console.log(a);
// console.log(isAdult(a));

//в ретурн покласти оцей вираз, а не робити змінну



// const a = 20;
// const message = "hello world!";

// console.log(a);
// console.log(message);



function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  const keptMoney = customerCredits - totalPrice;

  if( keptMoney < 0){
    message = "Insufficient funds!";
  } else {
    message = "You ordered ${orderedQuantity} droids, you have ${keptMoney} credits left";
  }

  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(500, 10, 5000));