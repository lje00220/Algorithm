class Queue {
  constructor() {
    this.array = [];
    this.head = 0;
  }
  enqueue(value) {
    this.array.push(value);
  }
  getSize() {
    return this.array.length - this.head;
  }
  pop() {
    this.head++;
  }
  dequeue() {
    const value = this.array[this.head];
    this.enqueue(value);
    this.head++;
  }
}

const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const queue = new Queue();

for (let i = 1; i < N + 1; i++) {
  queue.enqueue(i);
}

while (queue.getSize() !== 1) {
  queue.pop();
  queue.dequeue();
}

console.log(queue.array[queue.array.length - 1]);
