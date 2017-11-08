class Queue  {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // Adds a value to the end of the chain
  enqueue(value) {
    // Check to see if value is defined
    if (value) {
        this.storage[this.count] = value;
        this.count++;
    }
  }

  // Removes a value from the beginning of the chain
  dequeue() {
    // Check to see if queue is empty
    if (this.count - this.lowestCount === 0) {
        return undefined;
    }

    var result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // Returns the length of the queue
  size() {
    return this.count - this.lowestCount;
  }
}

export default Queue;
