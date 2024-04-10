class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null
    this.bottom = null
    this.length = 0;
  }
  pick(){
    return this.top
  }
  push(value){
    const newNode = new Node(value)
    if (this.length === 0){
      this.top = newNode
      this.bottom = newNode
    } else {
      const topElement = this.top
      this.top = newNode
      this.top.next = topElement
    }

    this.length++
    return this
  }
  pop(){
    const topNew = this.top.next
    this.top = topNew
    this.length--
    
    return this
  }
}

const newStack = new Stack()
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(5)
newStack.push(6)
newStack.push(7)
newStack.push(8)
newStack.push(9)
