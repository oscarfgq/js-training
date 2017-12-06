'use strict';

var LinkedList = (function () {
  function LinkedList() {    // returned ~ exposed
    this.length = 0;
    this.head = null;
  }

  function Node(element) {   // Not exposed
    this.element = element;
    this.next = null;
  };

  LinkedList.prototype.append = function (element) {
    var node = new Node(element);
    if (!this.head) this.head = node;
    else {
      var current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    ++this.length;
  };

  LinkedList.prototype.insert = function (position, element) {
    if (position < 0 || position > this.length) console.log('Invalid position');
    else {
      var node = new Node(element);
      if (!position) {
        node.next = this.head;
        this.head = node;
      } else {
        var current = this.head;
        for (var i = 0; i < position-1; i++) current = current.next;
        node.next = current.next;
        current.next = node;
      }
      ++this.length;
    }
  };

  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position > this.length) console.log('Invalid position!');
    else {
      var current = this.head;
      if (!position) this.head = current.next;
      else {
        for (var i = 0; i < position-1; i++) current = current.next;
        current.next = current.next.next;
      }
      --this.length;
    }
  };

  LinkedList.prototype.remove = function (element) {
    var position = this.indexOf(element);
    if (position !== -1) this.removeAt(position);
  };

  LinkedList.prototype.indexOf = function (element) {
    var position = 0;
    var current = this.head;
    do {
      if (current.element === element) return position;
      current = current.next;
      ++position;
    } while (current);
    return -1;
  };

  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };

  LinkedList.prototype.size = function () {
    return this.length;
  };

  LinkedList.prototype.toString = function () {
    var output = '';
    var current = this.head;
    while (current) {
      output += current.element + ' ';
      current = current.next;
    }
    return output;
  };

  LinkedList.prototype.print = function () {
    console.log(this.toString());
  };

  return LinkedList;
})();


var myLL = new LinkedList();

myLL.append(13);    // 13
myLL.append(7);     // 13 7
myLL.append(10);    // 13 7 10
myLL.insert(1, 4);  // 13 4 7 10
myLL.removeAt(2);   // 13 4 10
myLL.insert(3, 3);  // 13 4 10 3
myLL.remove(10);    // 13 4 3
myLL.append(17);    // 13 4 3 17
myLL.insert(0, 2);  // 2 13 4 3 17
myLL.insert(4, 6);  // 2 13 4 3 6 17
myLL.remove(9);     // 2 13 4 3 6 17
myLL.remove(4);     // 2 13 3 6 17
myLL.removeAt(3);   // 2 13 3 17
myLL.append(0);     // 2 13 3 17 0
myLL.print();
