/* 1 --> 2 --> 3 --> 4 --> 5 --> null

let singleLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next : {
        value: 3,
        next : {
          value: 4,
          next: null
        }
      }
    }
  }
}
*/
class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode /// la propiedad next de la cola es cambiada al nuevo nodo
    this.tail = newNode // no se que hace
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
  
    const newNode = new Node(value);
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
  
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
  }
  
  remove(index) {
    if (index >= this.length) {
      return;
    }
  
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
  
    currentNode.next = currentNode.next.next;
    this.length--;
  }
  
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  
}
let myLinkedList = new LinkedList(1)
