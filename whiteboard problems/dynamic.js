
// Dynamic Array in JS

// Push O(1)
// Pop O(1)
// Shift O(n)   >> amortized
// Unshift O(n) >> amortized
// Resize >> doubles each time >> place each el in new Array
// Indexing O(1)
class Dynamic {
  constructor() {
    this.arr = [null, null];
    this.size = 2;
    this.index = 0;
  }

  // works
  push(el) {
    if (this.index + 1 >= this.size) this.resize();
    this.arr[this.index] = el;
    this.index += 1;
    return this.arr.slice(0, this.index);
  }

  // works
  pop() {
    this.arr[this.index - 1] = null;
    this.index -= 1;
    return this.arr.slice(0, this.index);
  }

  // works
  shift() {
    for (var i = 0; i < this.index; i++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.index -= 1;
    return this.arr.slice(0, this.index);
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
    return this.arr.slice(0, this.index);
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

// var t1 = performance.now();
console.log(dynamic.push(5));
// var t2 = performance.now();
// console.log(t2 - t1);

dynamic.push(25)
dynamic.push(10)
dynamic.push(15)
console.log(dynamic);
// console.log(dynamic.unshift(100));
// console.log(dynamic);
// console.log(dynamic);
// dynamic.unshift(15)
