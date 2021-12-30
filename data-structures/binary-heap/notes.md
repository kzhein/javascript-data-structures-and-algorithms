## Binary Heap

A Binary Heap is either Min Heap or Max Heap.

### Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is always greater than its child nodes
- In a Max Binary Heap, the parent is greater than the children, but there are no guarantees between sibling nodes
- A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

### Visualization

https://visualgo.net/en/heap

### Big O of Binary Heaps

Insertion - O(log N)

Removal - O(log N)

Search - O(N)

## Priority Queue

A priority queue is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. Although you can implement it in other ways, using a data structure called heap is a great way because of the largest and smallest element at the root of the tree for a max-heap and a min-heap respectively.
