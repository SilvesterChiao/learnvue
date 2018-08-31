<template>
    <div class="introduce">
        <div>
            <ul>
                <li>
                    <router-link to="/v/template">模板语法</router-link>
                    <router-link to="/v/computed">计算属性</router-link>
                    <router-link to="/v/v-bind">Class与Style绑定</router-link>
                    <router-link to="/v/v-if">条件渲染</router-link>
                    <router-link to="/v/v-for">列表渲染</router-link>
                    <router-link to="/v/v-on">事件处理器</router-link>
                    <router-link to="/v/v-model">表单</router-link>
                    <router-link to="/v/components">组件</router-link>
                    <router-link to="/v/prop">属性</router-link>
                    <router-link to="/v/events">自定义事件</router-link>
                    <router-link to="/v/slot">插槽</router-link>
                    <router-link to="/v/dynamic">动态组件</router-link>
                    <router-link to="/v/transitions">过渡效果</router-link>
                </li>
            </ul>
        </div>
        <!-- <div>
            <h3>声明式渲染</h3>
            <p>
                {{ msg }}
                <br>
                <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
            </p>
        </div> -->
        <!-- <div>
            <h3>条件与循环</h3>
            <p v-if="seen">现在你看到我了</p>
            <br>
            <ol>
                <li v-for="(todo, index) in todos" :key="index">
                    {{ todo.text }}
                </li>
            </ol>
        </div> -->
        <!-- <div>
            <h3>处理用户输入</h3>
            <p>{{ msg }}</p>
            <button v-on:click="reverseMessage">逆转消息</button>
        </div> -->
        <!-- <div>
            <p>Vue还提供了
                <code>v-model</code>指令，它能轻松实现表单输入和应用状态之间的双向绑定。</p>
            <p>{{ msg }}</p>
            <input type="text" v-model="msg">
        </div> -->
        <!-- <div v-html="html">

        </div> -->
        <!-- {{ num + 1 }} {{ status ? 'success' : 'fail' }} -->
        <!-- <div>
            <a v-bind:href="link" v-bind:title="msg">百度</a>
            <p v-for="(item, index) in list" :key="index">
                {{ item.name }} - {{ item.age }} - {{ index }}
            </p>
        </div> -->
        <!-- <div>
            <p v-for="(value, key) in obj" :key="key">
                {{ key + ': ' + value }}
            </p>
        </div> -->
        <!-- <div>
            <p v-if="status">A</p>
            <p v-else>B</p>
            <button v-on:click="toggle">toggle</button>
        </div> -->
        <!-- <div>
            <p>子组件</p>
            <banner @my-event="onComaMyEvent" number=4>
                <p slot="header">header</p>
                <p slot="footer">footer</p>
            </banner>
        </div> -->
        <!-- <div>
            <input type="text" v-model="text">
            <p>{{ text }}</p>
        </div> -->
        <!-- <div>
            <p>计算属性</p>
            {{ myValueWithoutNum }}
        </div> -->
        <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import banner from '../../components/banner'
export default {
    components: {
        banner
    },
    name: 'VueIndex',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            message: '页面加载于 ' + new Date(),
            seen: true,
            todos: [
                {
                    text: '学习 JavaScript'
                },
                {
                    text: '学习 Vue'
                },
                {
                    text: '整个牛项目'
                }
            ],
            text: '胡怒火空港',
            html: '<ul><li>火影忍者</li><li>死神</li><li>海贼王</li></ul>',
            num: 1,
            status: true,
            link: 'https://www.baidu.com',
            list: [
                {
                    name: '李雷',
                    age: 15
                },
                {
                    name: '韩梅梅',
                    age: 15
                }
            ],
            obj: {
                name: '李雷',
                age: 15
            },
            user: []
        }
    },
    methods: {
        reverseMessage () {
            this.msg = this.msg.split('').reverse().join('')
        },
        toggle: function () {
            this.status = !this.status
        },
        onComaMyEvent (parmfromA) {
            console.log('onComaMyEvent ' + parmfromA)
        }
    },
    computed: {
        myValueWithoutNum: function () {
            return this.text.replace(/\d/g, '')
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

ul,
ol {
    list-style-type: none;
    padding: 0;
}

li {
    /*display: inline-block;*/
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
