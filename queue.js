/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this.size[this.last] = val;
    this.last ++;
    return val;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let removeVal =  this.size[this.first];
    delete this.val[this.first];
    this.first++;

    if(Queue.length > 0 ){
      console.log("There is still items in the que")
    } else{
      console.log(`The que in now empty${this.val}.`)
    }
    return removeVal
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.size[this.first];
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.last == 0;
  }
}

module.exports = Queue;
