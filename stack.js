/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this.last.push(val);
  }
  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  
  pop() {
    let removeItem =  this.first.shift(val);
    if(Queue.length > 0 ){
      console.log("There is still items in the que")
    } else{
      console.log(`The que in now empty${this.val}.`)
    }
    return removeItem
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.size[this.first.length -1];
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.last == 0;
  }
}

module.exports = Stack;
