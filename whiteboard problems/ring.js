

class RingBuffer {
  constructor() {
    this.size = 2;  // array size
    this.arr = [null, null];  // the array
    this.total = 0;   // number of elements
    this.idx = 0;   // last element
    this.first = 0; // zeroth element of the arr (not necessarily 0)
  }

  // works
  push(val) {
    if (this.total + 1 > this.size) this.resize();

    this.arr[this.idx] = val;
    this.idx = this.idx + 1 === this.size ? this.idx = 0 : this.idx += 1;
    this.total += 1;
  }

  // works
  pop() {
    this.arr[this.idx - 1] = null;
    this.idx = this.idx - 1 < 0 ? this.size - 1 : this.idx -= 1
    this.total -= 1;
  }

  // works
  shift() {
    this.arr[this.first] = null;
    this.first = this.first + 1 === this.size ? this.first = 0 : this.first += 1;
    this.total -= 1;
  }

  // works
  unshift(el) {
    if (this.total + 1 > this.size) this.resize();

    this.first = this.first - 1 < 0 ? this.size - 1 : this.first -= 1;
    this.arr[this.first] = el;
    this.total += 1;
  }

  // works
  resize() {
    let newArr = [];

    // place null placeholder values
    for (var i = 0; i < this.size * 2; i++) {
      newArr.push(null);
    }

    let newIdx = 0;
    for (var i = this.first; i < this.size; i++) {
      newArr[newIdx] = this.arr[i]
      newIdx += 1;
    }
    for (var i = 0; i < this.idx ; i++) {
      newArr[newIdx] = this.arr[i];
      newIdx += 1;
    }
    console.log(this.arr);
    console.log(newArr);
    console.log();

    this.size *= 2;
    this.arr = newArr;
    this.idx = newIdx;
    this.first = 0;

  }


}

const ring = new RingBuffer;
ring.push(5)
ring.push(10)
ring.unshift(15)
ring.unshift(20)
ring.unshift(25)
ring.shift()
ring.push(30)
ring.pop()
console.log(ring);
// ring.shift()
// console.log(ring);
// ring.push(15)
// ring.push(20)
// ring.shift()
// ring.push(25)
// console.log(ring);
