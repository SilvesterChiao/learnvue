// 二叉树
// 节点, 根节点, 父节点, 子节点, 叶子节点, 左节点, 右节点, 左子树, 右子树, 路径, 键值
// 层, 深度, 遍历

// 定义节点
function Node (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

// 显示节点
function show () {
    return this.data
}

// 二叉查找树
function BST () {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.preOrder = preOrder
    this.postOrder = postOrder
    this.getMin = getMin
    this.getMax = getMax
    this.find = find
}

// 插入节点
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
// 左中右
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

// 查找最小值
function getMin () {
    var current = this.root
    while (!(current.left === null)) {
        current = current.left
    }

    return current
}

// 查找最大值
function getMax () {
    var current = this.root
    while (!(current.right === null)) {
        current = current.right
    }

    return current
}

// 查找给定值
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
