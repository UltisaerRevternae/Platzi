class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(...value) {
    value.map((data) => {
      const newNode = new Node(data);
      let isRoot = this.root
      isRoot === null 
        ? this.root = newNode
        : this.insertNode(this.root, newNode);
    })
  
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  searchNode(value, node = this.root) {
    if (node === null) {
      return null; 
    }
    if (node.value === value) {
      return node;
    } else if (value < node.value) {
      return this.searchNode(value, node.left);
    } else {
      return this.searchNode(value, node.right);
    }
  }
  
}

const tree = new BinarySearchTree();
tree.insert(10 , 11)
tree.insert(4)
tree.insert(6)
tree.insert(100)
