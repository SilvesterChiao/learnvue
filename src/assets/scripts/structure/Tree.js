// 二叉树
function Node (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show () {
    return this.data
}

function BST () {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.preOrder = preOrder
    this.postOrder = postOrder
    this.getMin = getMin
    this.getMax = getMax
}

function insert (data) {
    var n = new Node(data, null, null)
    if (this.root === null) {
        this.root = n
    } else {
        var current = this.root
        var parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current === null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current === null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

// 中序遍历
function inOrder (node) {
    if (!(node == null)) {
        inOrder(node.left)
        console.log(node.show() + ' ')
        inOrder(node.right)
    }
}

// 先序遍历
function preOrder (node) {
    if (!(node === null)) {
        console.log(node.show() + ' ')
        preOrder(node.left)
        preOrder(node.right)
    }
}

// 后序遍历
function postOrder (node) {
    if (!(node === null)) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show() + ' ')
    }
}

function getMin () {
    var current = this.root
    while (!(current.left === null)) {
        current = current.left
    }

    return current
}

function getMax () {
    var current = this.root
    while (!(current.right === null)) {
        current = current.right
    }

    return current
}

function find (data) {
    var current = this.root
    while (current !== null) {
        if (current.data === data) {
            return current
        } else if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }

    return null
}

export { BST }