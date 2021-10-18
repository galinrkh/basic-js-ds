const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


module.exports = class Stack {

  constructor(stack = []) {                       // создаем и инициализируем стек в виде массива через конструктор
    this.stack = stack;
  }

  push(element) {                                 // реализуем интерфейс добавления элементов на верх стека
    this.stack.push(element);                     // через метод .push()
  }

  pop() {                                         // реализуем интерфейс удаления верхнего элемента из стека
    return this.stack.pop();                      // через метод .pop()
  }

  peek() {                                        // реализуем интерфейс получения верхнего элемента из стека, без его удаления
    return this.stack[this.stack.length - 1];     // через возврат последнего элемента, полученного по индексу [длина стека - 1]
  }
}


// module.exports = class Stack {

//   constructor(stack = []) {
//     this.stack = stack.reverse();
//   }

//   push(element) {
//     // this.stack.reverse();    
//     this.stack.unshift(element);
//     this.stack.reverse();
//   }

//   pop() {
//     // this.stack.reverse();    
//     this.stack.shift();
//     this.stack.reverse();
//   }

//   peek() {
    // // this.stack.reverse();
    // return this.stack[0];
    // this.stack.reverse();
//   }
// }