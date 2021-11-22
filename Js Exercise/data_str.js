//! ======stack======>
class Stack {
  constructor() {
    this.array = new Array();
  }
  add(item) {
    this.array.push(item);
  }
  remove() {
    this.array.pop();
  }
}
let stack = new Stack();
stack.add(15);
stack.add(16);
stack.add(17);
stack.remove();
console.log(stack);

//! =====queue=====>
class Queue {
  constructor() {
    this.array = new Array();
  }
  add(item) {
    this.array.push(item);
  }
  remove() {
    this.array.shift();
  }
}
let queue = new Queue();
queue.add(15);
queue.add(16);
queue.add(17);
queue.remove();
console.log(queue);

//! =====ListNode=====>
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);
console.log(list.head);
