'use strict';

function makeCounter() {
  var privateCounter = 0;   // not exposed

  function changeBy(val) {  // not exposed
    privateCounter += val;
  }

  function increment() {
    changeBy(1);
  }

  function decrement() {
    changeBy(-1);
  }

  function value() {
    return privateCounter;
  }

  return {  // revealing module pattern
    increment: increment,
    decrement: decrement,
    value: value
  };
}

var counter1 = makeCounter();
var counter2 = makeCounter();

console.log(counter1.value());
console.log(counter2.value());
counter1.increment();
counter1.increment();
counter2.decrement();
console.log(counter1.value());
console.log(counter2.value());
counter2.increment();
counter1.decrement();
console.log(counter1.value());
console.log(counter2.value());
