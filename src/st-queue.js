const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor() {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    const temp = new ListNode(value)
    if (this.start === null) {
      this.start = temp;
      this.end = temp;
    } else {
      this.end.next = temp;
      this.end = temp;
    }
  }

  dequeue() {
    let startElement;
    if (this.start != null) {
      startElement = this.start.value;
      this.start = this.start.next;
    }
    return startElement;
  }

}



