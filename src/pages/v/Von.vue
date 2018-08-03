<template>
    <div>
        <h1>{{ msg }}</h1>
        <div id="example-1">
            <h3>事件监听</h3>
            <p>可以用
                <code>v-on</code>指令监听DOM事件来触发一些JavaScript代码</p>
            <button v-on:click="counter += 1">增加 1</button>
            <p>这个按钮被点击了 {{ counter }} 次</p>
        </div>

        <hr>

        <div id="example-2">
            <h3>方法事件处理器</h3>
            <p>许多事件处理的逻辑都很复杂，所以直接把JavaScript代码写在
                <code>v-on</code>指令中是不可行的。因此
                <code>v-on</code>可以接收一个定义的方法来调用</p>
            <!-- 'greet' 是在下面定义的方法名 -->
            <button v-on:click="greet">Greet</button>
        </div>

        <hr>

        <div id="example-3">
            <h3>内联处理器方法</h3>
            <p>除了直接绑定到一个方法，也可以用内联JavaScript语句</p>
            <button v-on:click="say('hi')">Say hi</button>
            <button v-on:click="say('what')">Say what</button>
        </div>

        <div id="example-4">
            <p>有时也需要在内联语句处理器中访问原生DOM事件。可以用特殊变量
                <code>$event</code>把它传入方法</p>
            <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
        </div>

        <hr>

        <div id="example-5">
            <h3>事件修饰符</h3>
            <p>在事件处理程序中调用
                <code>event.preventDefault()</code>或
                <code>event.stopPropagation()</code>是非常常见的需求。尽管我们可以在methods中轻松实现这点，但更好的方式是：methods只有纯粹的数据逻辑，而不是去处理DOM事件细节</p>
            <p>为了解决这个问题，Vue.js为
                <code>v-on</code>提供了事件修饰符。通过由点(.)表示的指令后缀来调用修饰符</p>
            <ul>
                <li>.stop</li>
                <li>.prevent</li>
                <li>.capture</li>
                <li>.self</li>
                <li>.once</li>
            </ul>
        </div>

        <hr>

        <div id="example-6">
            <h3>按键修饰符</h3>
            <ul>
                <li>.enter</li>
                <li>.tab</li>
                <li>.delete</li>
                <li>.esc</li>
                <li>.space</li>
                <li>.up</li>
                <li>.down</li>
                <li>.left</li>
                <li>.right</li>
            </ul>
            <form>
                <input type="text" v-on:keyup="submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-on',
    data () {
        return {
            msg: 'v-on',
            counter: 0,
            name: 'Vuejs'
        }
    },
    methods: {
        greet (event) {
            // 'this'在方法里指当前Vue实例
            alert('Hello ' + this.name + '!');
            // 'event'是原生DOM事件
            alert(event.target.tagName)
        },
        say (message) {
            alert(message)
        },
        warn (message, event) {
            if (event) event.preventDefault()
            alert(message)
        },
        submit (event) {
            console.log(event.key)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
