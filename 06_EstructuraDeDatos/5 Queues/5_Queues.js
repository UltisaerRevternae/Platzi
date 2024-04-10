class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queues {
  constructor(){
    this.top = null
    this.bottom = null
    this.length = 0;
  }
  peek(){
    return this.top
  }
  enqueue(value){
    const newNode = new Node(value)
    if (this.length === 0){
      this.top = newNode
      this.bottom = newNode
    } else {
      this.bottom.next = newNode; // Enlazar el actual bottom con el nuevo nodo
      this.bottom = newNode; // Actualizar bottom para que apunte al nuevo nodo
    }

    this.length++
    return this
  }
  dequeue(){
    const topNew = this.top.next
    this.top = topNew
    this.length--
    
    return this
  }
}

const newQueues = new Queues()
newQueues.enqueue(1)
newQueues.enqueue(2)
newQueues.enqueue(3)
newQueues.enqueue(4)
newQueues.enqueue(5)
newQueues.enqueue(6)
newQueues.enqueue(7)
newQueues.enqueue(8)
newQueues.enqueue(9)
