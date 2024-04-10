class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = new Node(value)
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value)
    const oldHead = this.head
    oldHead.prev = newNode
    this.head = newNode
    this.head.next = oldHead
    
    this.length++
    return this
  }
  insert(index, value){
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value)
    const previousNode = this.getTheIndex(index - 1)
    const incomingNode = previousNode.next

    previousNode.next = newNode
    newNode.prev = previousNode
    newNode.next = incomingNode
    incomingNode.prev = newNode

    this.length ++
    return this
  }
  getTheIndex(index) {
    let currentNode = this.head
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  remove(index) {
    if (index >= this.length){
      return
    }

    const previousNode = this.getTheIndex(index - 1)
    const incomingNode = previousNode.next.next

    previousNode.next = incomingNode
    incomingNode.prev = previousNode

    this.length--
    return this
  }
  listValues(){
    const values = []
    let currentNode = this.head
    while (currentNode !== null) {
      values.push(currentNode.value)
      currentNode = currentNode.next
    }
    return values
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList()
myDoublyLinkedList.append(1)
myDoublyLinkedList.append(2)
myDoublyLinkedList.insert(3, 3)
myDoublyLinkedList.append(2)
myDoublyLinkedList.append(3)
myDoublyLinkedList.append(4)
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(6)
myDoublyLinkedList.append(7)
myDoublyLinkedList.append(8)
myDoublyLinkedList.remove(2)
myDoublyLinkedList.remove(2)