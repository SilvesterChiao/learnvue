// Promise
// resolve方法可接受一个Promise实例, 并且决定第一个Promise实例的状态
// then方法接收两个方法, 返回一个新的Promise实例
export default function (flag) {
    return new Promise((resolve, reject) => {
        if (flag) {
            resolve()
        } else {
            reject()
        }
    })
}

export function timeout (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
    })
}
export function loadImageAsync (url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = function () {
            resolve(image)
        }
        image.onerror = function () {
            reject(new Error('Could not load image at ' + url))
        }
        image.src = url
    })
}

export function getJSON (url) {
    const promise = new Promise((resolve, reject) => {
        const handler = function () {
            if (this.readyState !== 4) {
                return
            }
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }

        const client = new XMLHttpRequest()
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()
    })

    return promise
}
