class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
    this.answer = [];
  }
  push(value) {
    this.array.push(value);
    this.length++;
  }
  printSize() {
    this.answer.push(this.length);
  }
  isEmpty() {
    this.answer.push(this.length === 0 ? 1 : 0);
  }
  pop() {
    if (this.length <= 0) {
      this.answer.push(-1);
    } else {
      this.answer.push(this.array.pop());
      this.length--;
    }
  }
  top() {
    if (this.length <= 0) {
      this.answer.push(-1);
    } else {
      this.answer.push(this.array[this.length - 1]);
    }
  }
}

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const commands = input.slice(1);
const stack = new Stack();

for (let command of commands) {
  const [action, value] = command.split(" ");
  switch (action) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      stack.pop();
      break;
    case "size":
      stack.printSize();
      break;
    case "empty":
      stack.isEmpty();
      break;
    case "top":
      stack.top();
      break;
  }
}

console.log(stack.answer.join("\n"));
