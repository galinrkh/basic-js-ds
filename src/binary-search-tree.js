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

  root() {                                      // возвращаем корневой узел дерева

    return this.vertex;

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

  has(data) {                                     // возвращаем true, если узел с data имеется в дереве и false, если нет

    if (!this.find(data)) {
      return false;
    }
    return true;

  }

  find(data) {                                    // возвращаем узел с data, если узел с data имеется в дереве и null, если нет

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

  remove(data) {                                      // удаляем узел с data из дерева, если узел с data имеется в дереве

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

  min(vertex = this.vertex) {                              // возвращаем минимальное значение, хранящееся в дереве (или null, если у дерева нет узлов)

    if (!vertex.left) {
      return vertex.data;
    }
    return this.min(vertex.left);

  }

  max(vertex = this.vertex) {                              // возвращаем максимальное значение, хранящееся в дереве (или null, если у дерева нет узлов)

    if (!vertex.right) {
      return vertex.data;
    }
    return this.max(vertex.right);

  }

}