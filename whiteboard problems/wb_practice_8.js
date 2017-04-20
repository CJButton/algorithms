

// Bonus Stack:
// Implement a stack with a method max that returns the maximum value of
// the stack. max should run in O(1) time, no matter what operations are
// performed on the stack.
// FILO

class MinMaxStack {
  constructor() {
    this.stack = [];
  }

  minNum() {
    if (this.stack.length === 0) return "stack is empty"

    return this.stack[this.stack.length - 1].min;
  }

  maxNum() {
    if (this.stack.length === 0) return "stack is empty"

    return this.stack[this.stack.length - 1].max;
  }

  push(el) {
    if (this.stack.length === 0) {
      this.stack.push({val: el, max: el, min: el});
    } else {
      this.stack.push({
        val: el,
        max: Math.max(this.stack[this.stack.length - 1].max, el),
        min: Math.min(this.stack[this.stack.length - 1].min, el)
      });
    }
  }

  pop() {
    return this.stack.pop();
  }

}

let stack = new MinMaxStack();
// stack.push(5);
// stack.push(6);
// stack.push(3);
// stack.push(4);
// stack.push(2);
// stack.push(1);
// console.log(stack.maxNum());
// console.log(stack.stack);
// stack.push(2);
// stack.pop();
// console.log(stack.minNum());
// console.log(stack.maxNum());
// console.log(stack.stack);
// console.log(stack.max);




// Stack Queue
// Implement a queue using stacks. That is, write enqueue and dequeue
// using only push and pop operations.
// FIFO

// In terms of performance, enqueue should be O(1), but dequeue may be
// worst-case O(n). In terms of ammortized time, dequeue should be O(1).
// Prove that your solution accomplishes this.

class StackQueue {
  constructor() {
    this.in = new MinMaxStack();
    this.out = new MinMaxStack();
  }

  length() {
    return this.in.stack.length + this.out.stack.length
  }

  min() {
    let mins = [];

    if (this.in.stack.length > 0) {
      mins.push(this.in.stack[this.in.stack.length - 1].min);
    }

    if (this.out.stack.length > 0) {
      mins.push(this.out.stack[this.out.stack.length - 1].min);
    }

    return mins.reduce((a, b) => {
      return Math.min(a, b);
    })
  }

  max() {
    let maxes = [];

    if (this.in.stack.length > 0) {
      maxes.push(this.in.stack[this.in.stack.length - 1].max);
    }

    if (this.out.stack.length > 0) {
      maxes.push(this.out.stack[this.out.stack.length - 1].max);
    }

    return maxes.reduce((a, b) => {
      return Math.max(a, b);
    })
  }

  enqueue(el) {
    this.in.push(el);
  }

  dequeue() {
    if (this.out.stack.length === 0) {
      for (var i = this.in.stack.length - 1; i >= 0; i--) {
        this.out.push(this.in.pop().val);
      }
    }
    this.out.pop()
  }

}


const q = new StackQueue;
// q.enqueue(5);
// q.enqueue(6);
// q.enqueue(7);
// q.enqueue(8);
// q.enqueue(9);
// q.enqueue(10);
// q.dequeue();
// q.dequeue();
// console.log(q.min());
// console.log(q.max());
// But wait - isn't moving every item from our @in stack to the @out
// stack an O(n) operation? Does this make dequeueing an O(n) operation?
// While toppling the stack is an O(n) operation, each O(n) operation
// gives us n free dequeues. Since we get n free dequeues for every O(n)
// topple and n / n is 1, dequeueing is an O(1) amortized operation.




// Windowed Max Range
// Given an array, and a window size w, find the maximum max - min
// within a range of w elements.

const windowed = (arr, wind) => {

  let nums = new StackQueue();
  let currentMax = null;


  for (var i = 0; i <= arr.length; i++) {
    if (i < wind) {
      nums.enqueue(arr[i]);
    }

    if (i >= wind) {
      windowMax = (nums.max() - nums.min());
      if (windowMax > currentMax) currentMax = windowMax;
      nums.dequeue();
      nums.enqueue(arr[i]);
    }
    if (i === arr.length) {
      return currentMax;
    }
  }


}


console.log(windowed([1, 0, 2, 5, 4, 8], 2));
console.log(windowed([1, 0, 2, 5, 4, 8], 3));
console.log(windowed([1, 0, 2, 5, 4, 8], 4));
console.log(windowed([1, 3, 2, 5, 4, 8], 5));

// windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
// windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
// windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
// # still 6!
// windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8








// Binary Max-Heap
class BinaryMaxHeap {
  constructor() {
    this.content = [],
    this.head = null;
  }

  push(el) {
    this.content.push(el);
    this.bubbleup(this.content.length - 1, el);
  }

  bubbleup(childIdx, el) {
    let prnt = this.parent(childIdx);

    if (el > this.content[prnt]) {
      let swap = this.content[prnt];
      this.content[childIdx] = swap
      this.content[prnt] = el;
      this.bubbleup(prnt, el)
    }
    // we need to update the head, in case it has changed
    this.head = this.content[0];
  }

  delete() {
    this.content[0] = this.content[this.content.length - 1];
    this.bubbledown(0, this.content[0]);
    this.content.pop();
  }

  bubbledown(idx, el) {
    let children = this.children(idx);

    let max;
    max = (this.content[children[0]] < this.content[children[1]]) ?
        children[1] : children[0]

    if (this.content[max] > el) {
      let swap = this.content[max];
      this.content[max] = el;
      this.content[idx] = swap;
      this.bubbledown(max, el);
    }

  }

  children(idx) {
    let left = (idx * 2) + 1;
    let right = (idx * 2) + 2;
    let kids = [];
    if (left < this.content.length - 1) {
      kids.push(left);
    }
    if (right < this.content.length - 1) {
      kids.push(right);
    }
    return kids;

  }

  parent(childIdx) {
    let parentN = Math.floor((childIdx + 1) / 2) - 1;
    let parent = this.content[parentN];
    if (this.content.length === 1) {
      return null;
    } else {
      return parentN;
    }

  }

}

let heap = new BinaryMaxHeap();
// heap.push(5)
// heap.push(6)
// heap.push(22)
// heap.push(4)
// heap.push(3)
// heap.push(7)
// heap.push(8)
// console.log(heap.head);
// heap.push(15)
// heap.push(16)
// heap.push(17)
// heap.push(11)
// heap.push(12)
// console.log(heap.content);
// heap.delete();
// console.log(heap.content);
// heap.delete();
// console.log(heap.content);
// heap.delete();
// console.log(heap.content);
// heap.delete();
// console.log(heap.content);
// heap.delete();
// console.log(heap.content);

// I give you a scrambled list of n unique integers between 0 and n.
// Tell me what number is missing.

// O(n) for time;
// O(1) for space;
const missing2 = (arr) => {

  // the plus one is for the missing element
  let total = (arr.length + 1) * arr.length / 2;
  let real = arr.reduce((accum, el) => {
    return accum + el;
  });
  return real - total - 1;
}

// console.log(missing2([1, 5, 9, 7, 6, 2, 3, 8])); // => 4 is missing


// O(n) for time
// O(n) for space
const missing = (arr) => {

  let found = new Set;
  arr.forEach((el) => {
    found.add(el);
  });
  let num = null;

  for (var i = 1; i < arr.length - 1; i++) {
    if (!found.has(i)) {
      num = i;
    }
  }
  return num;
}

// console.log(missing([1, 5, 9, 7, 6, 2, 3, 8])); // => 4 is missing
