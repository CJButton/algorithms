

class RingBuffer {
  constructor() {
    this.size = 2;
    this.arr = [null, null];
    this.len = 0;
    this.idx = 0;
    this.first = 0;
    this.last = 1;
  }

  push(val) {
    if (this.len + 1 === this.size) this.resize();

    this.arr[this.idx] = val;
    this.idx += 1;
  }

  pop() {

  }

  shift() {

  }

  unshift() {

  }

  resize() {

  }


}

const ring = new RingBuffer;
ring.push(5)
console.log(ring);
