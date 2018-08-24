// 链表

// 节点
function Node (element) {
    this.element = element
    this.next = null
}

// 链表
function LList () {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
    this.findPrevious = findPrevious
    this.remove = remove
    this.display = display
}

function find (item) {
    let currNode = this.head
    while (currNode.element !== item) {
        currNode = currNode.next
    }

    return currNode
}

function insert (newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    newNode.next = current.text
    current.next = newNode
}

function display () {
    let currNode = this.head
    while (!(currNode.next === null)) {
        console.log(currNode.next)
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

function findPrevious (item) {
    let currNode = this.head
    while (!(currNode.next === null) && currNode.next.element !== item) {
        currNode = currNode.next
    }

    return currNode
}

function remove (item) {
    let prevNode = this.findPrevious(item)
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next
    }
}

// 双向链表
// 循环链表

export { LList }
