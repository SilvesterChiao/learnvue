// 列表

function List () {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
    this.clear = clear
    this.find = find
    this.toString = toString
    this.insert = insert
    this.append = append
    this.remove = remove
    this.front = front
    this.end = end
    this.prev = prev
    this.next = next
    this.currPos = currPos
    this.moveTo = moveTo
    this.getElement = getElement
    this.length = length
    this.contains = contains
}

// append: 给列表添加元素
function append (element) {
    this.dataStore[this.listSize++] = element
}

// remove: 从列表中删除元素
function find (element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return i
        }
    }

    return -1
}

// find: 在列表中查找某一元素
function remove (element) {
    let foundAt = this.find(element)
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1)
        --this.listSize
        return true
    }

    return false
}

// length: 列表中有多少个元素
function length () {
    return this.listSize
}

// toString: 显示列表中的元素
function toString () {
    return this.dataStore
}

// insert: 向列表中插入一个元素
function insert (element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element)
        ++this.listSize
        return true
    }

    return false
}

// clear: 清空列表中所有元素
function clear () {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
}

// contains: 判断给定值是否在列表中
function contains (element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true
        }
    }

    return false
}

// 遍历列表

function front () {
    this.pos = 0
}

function end () {
    this.pos = this.listSize - 1
}

function prev () {
    if (this.pos > 0) {
        --this.pos
    }
}

function next () {
    if (this.pos < this.listSize - 1) {
        ++this.pos
    }
}

function currPos () {
    return this.pos
}

function moveTo (position) {
    this.pos = position
}

function getElement () {
    return this.dataStore[this.pos]
}

export { List }
