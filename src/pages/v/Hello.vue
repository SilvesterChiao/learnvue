<template>
    <div class="hello">
        <div v-html="html">

        </div>
        {{ num + 1 }} {{ status ? 'success' : 'fail' }}
        <div>
            <a v-bind:href="link" v-bind:title="msg">百度</a>
            <h3>v-for</h3>
            <p v-for="(item, index) in list" :class="{odd: index % 2}" :key="index">
                {{ item.name }} - {{ item.age }} - {{ index }}
            </p>
        </div>
        <div>
            <p v-for="(value, key) in obj" :key="key">
                {{ key + ': ' + value }}
            </p>
        </div>
        <div>
            <p v-if="status">A</p>
            <p v-else>B</p>
            <button v-on:click="toggle">toggle</button>
        </div>
        <div>
            <h3>子组件</h3>
            <banner @my-event="onComaMyEvent" number=4>
                <p slot="header">header</p>
                <p slot="footer">footer</p>
            </banner>
        </div>
        <div>
            <input type="text" v-model="text">
            <p>{{ text }}</p>
        </div>
        <div>
            <p>计算属性</p>
            {{ myValueWithoutNum }}
        </div>
        <div>
            <p>axios</p>
            <ul>
                <li v-for="item in user" :key="item.id">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <br>
        <hr>
        <br>
        <!-- <h2>Essential Links</h2>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank">Forum</a>
            </li>
            <li>
                <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
            </li>
            <br>
            <li>
                <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
            </li>
        </ul> -->
    </div>
</template>

<script>
import axios from 'axios'
import banner from '../../components/banner'
import Dog from '../../assets/scripts/es6/class'
import Animal from '../../assets/scripts/es6/modules'
import { person, volume } from '../../assets/scripts/es6/modules/index'

export default {
    components: {
        banner
    },
    name: 'hello',
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
        },
        getUser () {
            var vm = this
            axios.get('http://localhost:3000/user')
                .then(function (response) {
                    vm.user = response.data
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    },
    computed: {
        myValueWithoutNum: function () {
            return this.text.replace(/\d/g, '')
        }
    },
    created () {
        var black = new Dog()
        black.say('你好我叫小黑')
        // this.getUser();

        var animal = new Animal('小白', 'white')
        animal.sayName()
        var s = new Set()
            ;[2, 3, 5, 4, 2, 2].map(x => s.add(x))
        for (var i of s) {
            console.log(i)
        }

        console.log('person', person)
        console.log('volume', volume)
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
