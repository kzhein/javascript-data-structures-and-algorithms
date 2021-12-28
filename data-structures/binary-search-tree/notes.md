## Binary Search Tree

### How Binary Search Trees Work

- Every parent node has at most two children
- Every node to the left of a parent node is always less than the parent
- Every node to the right of a parent node is always greater than the parent

### Visualization

https://visualgo.net/en/bst

### Big O of Binary Search Trees

Insertion - O(log n)

Searching - O(log n)

NOT guaranteed!

### Tree Traversal

Time complexity is the same for BFS (Breadth First Search) and DFS (Depth First Search). Space complexity depends on the structure of the tree. If the tree is really wide, BFS could take up a lot more space for the queue. If the tree is really deep and long, DFS could take up more space.

#### DFS variants use cases

**InOrder** - Used commonly with Binary Search Trees. We get all nodes in the tree in their underlying order.

**PreOrder** - Can be used to "export" a tree structure so that it is easily reconstructed or copied because you can easily know the root node.
