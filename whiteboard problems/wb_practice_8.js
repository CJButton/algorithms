

// Binary Max-Heap
class BinaryMaxHeap {
  constructor() {
    this.content = [];
  }

  push(el) {
    this.content.push(el);
    this.bubbleup(this.content.length - 1, el);
  }

  // inserting a new object into the heap
  bubbleup(childIdx, el) {
    let prnt = this.parent(childIdx);

    if (el > this.content[prnt]) {
      let swap = this.content[prnt];
      this.content[childIdx] = swap
      this.content[prnt] = el;
      this.bubbleup(prnt, el)
    }
  }

  delete() {
    this.content[0] = this.content[this.content.length - 1];
    this.bubbledown(0, this.content[0]);
    this.content.pop();
  }

  bubbledown(idx, el) {
    let children = this.children(idx);
  }

  children(idx) {
    let left = (idx * 2) + 1;
    let right = (idx * 2) + 2;
    return [left, right];

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
heap.push(5)
heap.push(6)
heap.push(4)
heap.push(3)
heap.push(7)
heap.push(8)
heap.delete();
console.log(heap);

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
