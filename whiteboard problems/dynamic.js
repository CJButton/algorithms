
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

  push(el) {
    this.arr[this.index] = el;
    if (this.index + 1 >= this.size) {
      resize();
    }
    this.index += 1;
  }

  pop() {
    this.arr[this.index] = null;
    this.index -= 1;
  }

  shift() {
    for (var i = 1; i < this.arr.length; i++) {
      this.arr[i - 1] = this.arr[i];
    }
    this.index -= 1;
  }

  unshift(el) {
    if (this.arr.length + 1 === this.size) {
      resize(1); // make enough space for the unshifted element
    } else {
      for (var i = this.arr.length - 1; i > 1; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[0] = el;
  }

  // n here is the starting point for when we move all els to new array
  resize(n = 0) {
    let newArr = [];
    for (var i = 1; i < this.size * 2; i++) {
      newArr.push(null);
    }
    for (var i = n; i < newArr.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }


}

let dynamic = new Dynamic()
console.log(dynamic);
