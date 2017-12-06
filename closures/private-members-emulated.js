'use strict';

var counter = (function() {
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

})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
