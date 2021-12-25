class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  enqueue(element) {
    this.items.push(element);
    return ++this.count;
  }

  dequeue() {
    if (this.count === 0) return undefined;

    this.count--;
    return this.items.shift();
  }
}
