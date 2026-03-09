class Queue {
  constructor() {
    this.array = [];
    this.head = 0;
    this.answer = [];
  }
  push(value) {
    this.array.push(value);
  }
  pop() {
    if (this.getSize() <= 0) {
      this.answer.push(-1);
    } else {
      this.answer.push(this.array[this.head]);
      this.head++;
    }
  }
  getSize() {
    return this.array.length - this.head;
  }
  size() {
    this.answer.push(this.array.length - this.head);
  }
  empty() {
    this.answer.push(this.getSize() === 0 ? 1 : 0);
  }
  front() {
    if (this.getSize() <= 0) {
      this.answer.push(-1);
    } else {
      this.answer.push(this.array[this.head]);
    }
  }
  back() {
    if (this.getSize() <= 0) {
      this.answer.push(-1);
    } else {
      this.answer.push(this.array[this.array.length - 1]);
    }
  }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const commands = input.slice(1);
const queue = new Queue();

for (let command of commands) {
  const [action, value] = command.split(" ");

  switch (action) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      queue.pop();
      break;
    case "size":
      queue.size();
      break;
    case "empty":
      queue.empty();
      break;
    case "front":
      queue.front();
      break;
    case "back":
      queue.back();
      break;
  }
}

console.log(queue.answer.join("\n"));
