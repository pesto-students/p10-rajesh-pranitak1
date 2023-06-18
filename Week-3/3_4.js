function createStack() {
const items = []; // private array

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // returns 5
console.log(stack.items); // undefined (cannot access items directly)
  