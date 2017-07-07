<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="html">
      
    </div>
    {{ num + 1 }}
    {{ status ? 'success' : 'fail' }}
    <div>
      <a v-bind:href="link" v-bind:title="msg">百度</a>
      <p v-for="(item, index) in list">
        {{ item.name }} - {{ item.age }} - {{ index }}
      </p>
    </div>
    <div>
      <p v-for="(value, key) in obj">
        {{ key + ': ' + value }}
      </p>
    </div>
    <div>
      <p v-if="status">A</p>
      <p v-else>B</p>
      <button v-on:click="toggle">toggle</button>
    </div>
    <div>
      <p>子组件</p>
      <banner @my-event="onComaMyEvent"></banner>
    </div>
    <div>
      <input type="text" v-model="text">
      <p>{{ text }}</p>
    </div>
    <div>
      <p>计算属性</p>
      {{ myValueWithoutNum }}
    </div>
    <br>
    <hr>
    <br>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import banner from './banner'
export default {
  components: {
    banner
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
      }
    }
  },
  methods: {
    toggle: function(){
      this.status = !this.status;
    },
    onComaMyEvent(parmfromA){
      console.log('onComaMyEvent ' + parmfromA)
    }
  },
  computed: {
    myValueWithoutNum: function(){
      return this.text.replace(/\d/g, '')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
