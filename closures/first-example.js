'use strict';

function makeFunc() {
  var name = 'Oscar';
  function displayName() { console.log(name); }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
