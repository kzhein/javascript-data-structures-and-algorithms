// {
//   "root": {
//     "value": 10,
//     "left": {
//       "value": 5,
//       "left": {
//         "value": 2,
//         "left": null,
//         "right": null
//       },
//       "right": {
//         "value": 7,
//         "left": null,
//         "right": null
//       }
//     },
//     "right": {
//       "value": 13,
//       "left": {
//         "value": 11,
//         "left": null,
//         "right": null
//       },
//       "right": {
//         "value": 16,
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
}
