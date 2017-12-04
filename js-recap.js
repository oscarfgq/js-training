'use strict';

// console.log(productId);  // undefined
// var productId = 12;

// y = 'Hi!';
// console.log(y);      // Hi!
// var y;

// console.log(x);      // ReferenceError: x is not defined
// let x = 12;


// let name = 'Oscar';
// console.log(name);   // Oscar

// let name;
// console.log(name);   // undefined


// let productId = 12;
// { productId = 2000; }
// console.log(productId);   // 2000

// var productId = 12;
// { /*var*/ productId = 2000; }
// console.log(productId);   // 2000

// let productId = 12;
// { let productId = 2000; }
// console.log(productId);   // 12


// { productId = 2000; }
// console.log(productId);   // ReferenceError: productId is not defined

// { var productId = 2000; }
// console.log(productId);   // 2000

// { let productId = 2000; }
// console.log(productId);   // ReferenceError: productId is not defined


// function updateProductId() {
//   productId = 12;
// }
//
// let productId = null;
// updateProductId();
// console.log(productId);    // 12


// let productId = 42;
// for (let productId = 0; productId < 10; productId++) {}
// console.log(productId);     // 42


// let updateFunctions = [];
// for (var i = 0; i < 2; i++) {
//   updateFunctions.push(function () { return i; });
//   console.log(updateFunctions[i]());
// }
// console.log(updateFunctions[0]());  // 2 (a closure is over the variable i)
// console.log(updateFunctions[1]());  // 2 (a closure is over the variable i)


let updateFunctions = [];
for (let i = 0; i < 2; i++) {
  updateFunctions.push(function () { return i; });
}
console.log(updateFunctions[0]());  // 0
