class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items.push(element);
    return ++this.count;
  }

  pop() {
    if (this.count === 0) return undefined;
    this.count--;
    return this.items.pop();
  }
}
