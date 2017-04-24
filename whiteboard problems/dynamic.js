
// Dynamic Array in JS

// Push O(1)
// Pop O(1)
// Shift O(n)
// Unshift O(n) >> all following elements must be moved
// Resize >> doubles each time >> place each el in new Array


class Dynamic {
  constructor() {
    this.arr = [null, null];
    this.size = 2;
    this.index = 0;
  }

  // works
  push(el) {
    this.arr[this.index] = el;
    if (this.index + 1 >= this.size) {
      this.resize();
    }
    this.index += 1;
  }

  // works
  pop() {
    this.arr[this.index - 1] = null;
    this.index -= 1;
  }

  // works
  shift() {
    for (var i = 0; i < this.index; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.index -= 1;
  }

  // works
  unshift(el) {
    if (this.index + 1 >= this.size) {
      this.resize(); // make enough space for the unshifted element
    }

    for (var i = this.index; i >= 1; i--) {
      this.arr[i] = this.arr[i - 1];
    }
    this.arr[0] = el;
    this.index += 1;
  }

  // works
  resize() {
    let newArr = [];
    for (var i = 0; i < this.size * 2; i++) {
      newArr.push(null);
    }

    for (var i = 0; i <= this.index; i++) {
      newArr[i] = this.arr[i];
    }
    this.size = this.size * 2;
    this.arr = newArr;
  }
}

let dynamic = new Dynamic()
dynamic.push(5)
console.log(dynamic);
dynamic.unshift(25)
dynamic.unshift(10)
dynamic.unshift(15)
dynamic.unshift(20)
console.log(dynamic);
// console.log(dynamic);
// console.log(dynamic);
// dynamic.unshift(15)
