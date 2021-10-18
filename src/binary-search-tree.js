const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(root = null) {                        // создаем через конструктор и инициализируем root
    this.vertex = root;
  }

  root() {                                          // возвращаем корневой узел дерева

    return this.vertex;

  }

  add(data) {                                       // добавляем узел с data к дереву

    const newNode = new Node(data);                 // создаем новый объект через конструктор new

    if (!this.vertex) {                             // если узел пустой (стартовый момент), то
      this.vertex = newNode;                        // то присваеваем ему newNode,
      return;                                       // и возвращаем
    }

    let currentVertex = this.vertex;

    while (currentVertex) {                         // перебираем циклом по всем вложенностям дерева до тех пор пока они не закончатся
      if (newNode.data < currentVertex.data) {      // если data меньше чем текущий узел, то кладем его влево
        if (!currentVertex.left) {                  // если текущий узел отсутствует
          currentVertex.left = newNode;             // о присваеваем ему newNode,
          return;                                   // и возвращаем
        }
        currentVertex = currentVertex.left;
      }
      else {                                        // иначе кладем его вправо (всё тоже самое)
        if (!currentVertex.right) {
          currentVertex.right = newNode;
          return;
        }
        currentVertex = currentVertex.right;
      }
    }

  }

  has(data) {

    if (!this.find(data)) {                          // если узел с data отсутсвует в дереве, 
      return false;                                  // то возвращаем false,
    }
    return true;                                     // иначе возвращаем true

  }

  find(data) {                                       // возвращаем узел с data, если узел с data имеется в дереве и null, если нет

    let currentVertex = this.vertex;

    if (!currentVertex) {                            // если узел с data отсутсвует в дереве,
      return null;                                   // то возвращаем null
    }

    while (currentVertex) {                         // перебираем циклом по всем вложенностям дерева до тех пор пока они не закончатся
      if (data < currentVertex.data) {              // если data меньше текущего узла, 
        currentVertex = currentVertex.left;         // то присваеваем ему левое значение
      }
      else if (data > currentVertex.data) {         // иначе если data больше текущего узла
        currentVertex = currentVertex.right;        // то присваеваем ему правое значение
      }
      else {
        return currentVertex;                       // иначе вернем текущий узел равный null
      }
    }
    return null;                                    // по заверщению цикла вернем null

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