class Stack {
   constructor() {
      this.items = [];
   }

   // Add an element to the top of the stack
   push(element) {
      this.items.push(element);
   }

   // Remove and return the top element from the stack
   pop() {
      if (this.isEmpty()) {
         return "Stack is empty";
      }
      return this.items.pop();
   }

   // Return the top element of the stack without removing it
   peek() {
      if (this.isEmpty()) {
         return "Stack is empty";
      }
      return this.items[this.items.length - 1];
   }

   // Check if the stack is empty
   isEmpty() {
      return this.items.length === 0;
   }

   // Return the number of elements in the stack
   size() {
      return this.items.length;
   }

   // Clear the stack
   clear() {
      this.items = [];
   }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Size of stack:", stack.size()); // Output: 3
console.log("Top element:", stack.peek()); // Output: 30

stack.pop();
console.log("Top element after pop:", stack.peek()); // Output: 20

console.log("Is stack empty?", stack.isEmpty()); // Output: false

stack.clear();
console.log("Is stack empty after clearing?", stack.isEmpty()); // Output: true
