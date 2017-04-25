

class DoubleNode {
  constructor(val, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  push(val) {
    let newNode = new DoubleNode(val);

    if (this.head === null) {
      this.head = newNode;
    } else if (this.tail == null) {
      this.tail = newNode;
      this.head.next = this.tail;
      this.tail.prev = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

  }

  delete(val) {
    if (this.head.val === val) {
      return this.head = this.head.next;
    } else if (this.tail.val === val) {
      return this.tail = this.tail.prev;
    }

    let missing = true;
    let node = this.head;
    while (missing) {
      node.val === val ? missing = false : node = node.next
    }

    // after we have found the node
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  find(val) {
    if (this.head.val === val) return this.head;
    if (this.tail.val === val) return this.tail;

    let missing = true;
    let node = this.head;
    while (missing) {
      node.val === val ? missing = false : node = node.next

      if (node === this.tail) {
        return "node not found"
      }
    }
  }
}

let double = new DoubleLinkedList;
// double.push(5)
// double.push(10)
// double.push(15)
// double.push(20)
// double.push(25)
// double.push(30)
// double.delete(20)
// console.log(double.find(20));
// console.log(double);







// Single Linked List
class SingleNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}



// insert
// delete
// transversal (find)

class SingleLinkList {
  constructor() {
    this.head = null
  }

  push(val) {
    if (this.head === null) this.head = new SingleNode(val);

    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new SingleNode(val);

  }

  delete(val) {
    let node = this.head;
    let missing = true;
    while (missing) {
      if (node.next.val === val) {
        missing = false
      } else {
        node = node.next;
      }
    }
    node.next.next === null ? node.next = null : node.next = node.next.next;
    console.log(node.val);
    console.log(node.next);
    console.log(node.next.val);
  }

}

let list = new SingleLinkList
// list.push(1)
// list.push(2)
// list.push(3)
// list.delete(2)
// console.log(list);
