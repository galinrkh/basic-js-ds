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

    let currentVertex = this.vertex;

    while (currentVertex) {
      if (newNode.data < currentVertex.data) {
        if (!currentVertex.left) {
          currentVertex.left = newNode;
          return;
        }
        currentVertex = currentVertex.left;
      }
      else {
        if (!currentVertex.right) {
          currentVertex.right = newNode;
          return;
        }
        currentVertex = currentVertex.right;
      }
    }
  }

  has(data) {
    if (!this.find(data)) {
      return false;
    }
    return true;
  }

  find(data) {
    let currentVertex = this.vertex;

    if (!currentVertex) {
      return null;
    }

    while (currentVertex) {
      if (data < currentVertex.data) {
        currentVertex = currentVertex.left;
      }
      else if (data > currentVertex.data) {
        currentVertex = currentVertex.right;
      }
      else {
        return currentVertex;
      }
    }
    return null;
  }

  remove(data) {

    this.vertex = removeVertex(this.vertex, data)

    function removeVertex(currentVertex, data) {
      if (!currentVertex) {
        return null;
      }

      if (data < currentVertex.data) {
        currentVertex.left = removeVertex(currentVertex.left, data)
        return currentVertex;
      }
      else if (data > currentVertex.data) {
        currentVertex.right = removeVertex(currentVertex.right, data)
        return currentVertex;
      }
      else {
        if (!currentVertex.left && !currentVertex.right) {
          return null;
        }
      }

      if (!currentVertex.left) {
        currentVertex = currentVertex.right;
        return currentVertex;
      }
      if (!currentVertex.right) {
        currentVertex = currentVertex.left;
        return currentVertex;
      }

      let minVertex = currentVertex.right;

      while (minVertex.left) {
        minVertex = minVertex.left;
      }
      currentVertex.data = minVertex.data;
      currentVertex.right = removeVertex(currentVertex.right, minVertex.data);
      return currentVertex;
    }
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