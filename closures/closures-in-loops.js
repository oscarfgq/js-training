'use strict';

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    // var item = helpText[i];  -- 1
    let item = helpText[i];     // 2
    document.getElementById(item.id).onfocus = function () { showHelp(item.help); };
  }
}

setupHelp();


/**
  1. leads to unexpected behavior because item.help will be known when the onfocus callbacks are executed (by that time the loop will be terminated with i = 2)
  2. works because every closure assigned to onfocus binds to the current value of item (block-scoped)
*/
