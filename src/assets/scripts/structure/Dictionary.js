// 字典
function Dictionary () {
    this.dataStore = []
    this.add = add
    this.find = find
    this.remove = remove
    this.showAll = showAll
    this.count = count
    this.clear = clear
}

function add (key, value) {
    this.dataStore[key] = value
}

function find (key) {
    return this.dataStore[key]
}

function remove (key) {
    delete this.dataStore[key]
}

function showAll () {
    console.log(Object.keys(this.dataStore))
    for (var key of Object.keys(this.dataStore).sort()) {
        console.log(key + '->' + this.dataStore[key])
    }
}

function count () {
    let n = 0
    for (let key of Object.keys(this.dataStore)) {
        ++n
    }

    return n
}

function clear () {
    for (let key of Object.keys(this.dataStore)) {
        delete this.dataStore[key]
    }
}

export { Dictionary }
