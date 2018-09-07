// 数组测试平台
function CArray (numElements) {
    this.dataStore = []
    this.pos = 0
    this.numElements = numElements
    this.insert = insert
    this.toString = toString
    this.clear = clear
    this.setData = setData
    this.swap = swap
    this.bubbleSort = bubbleSort
    this.selectionSort = selectionSort
    this.insertionSort = insertionSort

    for (let i = 0; i < numElements; ++i) {
        this.dataStore[i] = i
    }
}

function setData () {
    for (let i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}

function clear () {
    for (let i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = 0
    }
}

function insert (element) {
    this.dataStore[this.post++] = element
}

function toString () {
    var retstr = ''
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + ' '
        if ((i > 0) & (i % 10 == 0)) {
            retstr += '\n'
        }
    }
    return retstr
}

function swap (arr, index1, index2) {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// 冒泡排序
function bubbleSort () {
    let numElements = this.dataStore.length
    let temp
    for (let outer = numElements; outer >= 2; --outer) {
        for (let inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1)
            }
        }
        console.log(this.toString())
    }
}

// 选择排序
function selectionSort () {
    var min, temp
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer
        for (
            var inner = outer + 1;
            inner <= this.dataStore.length - 1;
            ++inner
        ) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner
            }
        }
        swap(this.dataStore, outer, min)
        console.log(this.toString())
    }
}

// 插入排序
function insertionSort () {
    let temp, inner
    for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer]
        inner = outer
        while (inner > 0 && this.dataStore[inner - 1] >= temp) {
            this.dataStore[inner] = this.dataStore[inner - 1]
            --inner
        }
        this.dataStore[inner] = temp
    }
}

export { CArray }
