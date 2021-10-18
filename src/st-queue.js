const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

  constructor(start = null, end = null) {       // создаем и инициализируем очередь через конструктор
    this.start = start;                         //
    this.end = end;                             //
  }

  getUnderlyingList() {
    return this.start;                          // возвращаем связный список, лежащий в основе данной очереди
  }

  enqueue(value) {                              // помещаем value в конец очереди
    const temp = new ListNode(value);
    if (this.start) {
      this.end.next = temp;
      this.end = temp;
    }
    else {
      this.start = temp;
      this.end = temp;
    }
  }

  dequeue() {
    let startElement;
    if (this.start) {
      startElement = this.start.value;          // извлекаем значение с начала очереди 
      this.start = this.start.next;             // и удаляем его
    }
    return startElement;
  }

}



