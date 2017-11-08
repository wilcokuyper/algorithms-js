export default class  {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(val) {
    if (val) {
        this.storage[this.count] = val;
        this.count++;
    }
  }

  dequeue() {
    if (this.count - this.lowestCount === 0) {
        return undefined;
    }

    const result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }
}
