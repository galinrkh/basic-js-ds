const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(root = null) {                    // создаем через конструктор и инициализируем root
    this.vertex = root;
  }

  root() {
    return this.vertex;                         // возвращаем корневой узел дерева
  }

  add(data) {                                   // добавляем узел с data к дереву
    const newNode = new Node(data);
    if (!this.vertex) {
      this.vertex = newNode;
      return;
    }

    let currentNode = this.vertex;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    }
    return false;
  }

  find(data) {
    let temp = this.vertex;

    while (temp) {
      if (data < temp.data) {
        temp = temp.left;
      } else if (data > temp.data) {
        temp = temp.right;
      } else {
        return temp;
      }
    }
    return null;
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}