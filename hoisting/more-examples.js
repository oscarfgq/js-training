'use strict';

/* Example 2 */
num = 6;
num + 7;
var num;  // hoists var declaration, so it gives no errors


/* Example 3 */
var x = 1;
console.log(x + " " + y);   // '1 undefined'
var y = 2;                  // initialize (!= declare) y => NO HOIST
var z;                      // z is undefined
console.log(y + ' ' + z);   // '2 undefined'
z = 3;                      // initializes z after using it
