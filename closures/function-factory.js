'use strict';

function makeAdder(x) {
  return function(y) { return x + y; };
}

var add5 = makeAdder(5);    // add5 is a closure that holds 5 in its lex env
var add10 = makeAdder(10);  // add10 is a closure with the same function body def, but with diff lex env

console.log(add5(2));  // 7
console.log(add10(2)); // 12
