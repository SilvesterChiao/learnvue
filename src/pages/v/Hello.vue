<template>
    <div class="hello">
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
import Dog from '../../assets/scripts/es6/class'
import Animal from '../../assets/scripts/es6/modules'
import { person, volume } from '../../assets/scripts/es6/modules/index'

export default {
    name: 'hello',
    data () {
        return {
            user: []
        }
    },
    methods: {
        getUser () {
            var vm = this
            axios.get('http://localhost:3000/user')
                .then(function (response) {
                    vm.user = response.data
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        getInfo () {
            fetch('http://192.168.0.121:3004/sites').then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created () {
        // this.getUser();
        this.getInfo()
        var black = new Dog()
        black.say('你好我叫小黑')

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
