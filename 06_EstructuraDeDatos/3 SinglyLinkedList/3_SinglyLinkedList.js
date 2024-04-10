class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinked {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }
  append(value){
    const newNode = new Node(value) // Nuevo nodo para la cola
    this.tail.next = newNode  // apunta al ultimo next nulo y lo toma como referencia 
    this.tail = newNode // La nueva cola
    this.length++

    return this
  }
  prepend(value){
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode

    this.length++
    return this
  }
  insert(index, value) {
    // Al momento de querer insertar el nuevo nodo con su indice
    // nos devolvemos al nodo acterior y hacemos que el siguiente sea el que apunte a este
    // entrelanzando el nuevo con la cadena final
    // luego entrelazamos el nuevo con la cadena inicial
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1)
    const holdingPointer = firstPointer.next
    firstPointer.next = newNode
    newNode.next = holdingPointer

    this.length++

    return this
  }

  getTheIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    return currentNode
  }

  remove(index){
    if (index >= this.length){
      return
    }

    const previousNode = this.getTheIndex(index - 1)
    const newNode = previousNode.next.next
    previousNode.next = newNode

    this.length--;

    return this
  }

  listNext(){
    const listValuesNext = []
    let currentNode = this.head
    while (currentNode !== null) {
      listValuesNext.push(currentNode.value)
      currentNode = currentNode.next
    }
    return listValuesNext
  }
}

let singlyLinkedList = new SinglyLinked(1)
singlyLinkedList.append(2)
singlyLinkedList.append(3)
singlyLinkedList.append(4)
singlyLinkedList.append(5)
singlyLinkedList.append(6)
singlyLinkedList.append(7)
singlyLinkedList.append(8)
