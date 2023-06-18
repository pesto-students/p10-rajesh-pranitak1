class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    // Push operation
    enqueue(value) {
      this.stack1.push(value);
    }
  
    // Pop operation
    dequeue() {
      if (this.stack2.length === 0) {
        // Transfer elements from stack1 to stack2 in reverse order
        while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      // If stack2 is not empty, pop the top element
      if (this.stack2.length !== 0) {
        return this.stack2.pop();
      }
  
      // If both stacks are empty, the queue is empty
      return null;
    }
  }

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: null (queue is empty)


// Time Complexity: Push operation: O(1)
// Time Complexity: Pop operation: O(1) amortized

// Space Complexity: O(n)
