class Queue {
   constructor() {
      this.items = [];
   }

   // Add an element to the end of the queue
   enqueue(element) {
      this.items.push(element);
   }

   // Remove and return the front element from the queue
   dequeue() {
      if (this.isEmpty()) {
         return "Queue is empty";
      }
      return this.items.shift();
   }

   // Return the front element of the queue without removing it
   front() {
      if (this.isEmpty()) {
         return "Queue is empty";
      }
      return this.items[0];
   }

   // Check if the queue is empty
   isEmpty() {
      return this.items.length === 0;
   }

   // Return the number of elements in the queue
   size() {
      return this.items.length;
   }

   // Clear the queue
   clear() {
      this.items = [];
   }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Size of queue:", queue.size()); // Output: 3
console.log("Front element:", queue.front()); // Output: 10

queue.dequeue();
console.log("Front element after dequeue:", queue.front()); // Output: 20

console.log("Is queue empty?", queue.isEmpty()); // Output: false

queue.clear();
console.log("Is queue empty after clearing?", queue.isEmpty()); // Output: true
