// {
//   "root": {
//     "value": 10,
//     "left": {
//       "value": 6,
//       "left": {
//         "value": 3,
//         "left": null,
//         "right": null
//       },
//       "right": {
//         "value": 8,
//         "left": null,
//         "right": null
//       }
//     },
//     "right": {
//       "value": 15,
//       "left": null,
//       "right": {
//         "value": 20,
//         "left": null,
//         "right": null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined; // how we handle duplicates is really up to the special case of what we're doing. In our case, we will just ignore them

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }

  // Tree Traversal - Breadth First Search
  BFS() {
    let node = null;
    const data = [],
      queue = [];

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Tree Traversal - Depth First Search (PreOrder)
  DFSPreOrder() {
    const data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

//        10
//     6     15
//   3   8      20
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
