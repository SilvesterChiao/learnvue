<template>
    <div style="flex: 1;">
        <div class="template">
            <h1>模板语法</h1>
            <div>
                <h3>插值</h3>
                <h5>文本</h5>
                <input type="text" v-model="msg">
                <p>
                    这里是通过 {{ tmpl }} 绑定的，会随着data变化 {{ msg }}</p>
                <p v-once>
                    这里是通过 v-once 绑定的，不会变的 {{ msg }}
                </p>
                <h5>原始HTML</h5>
                <p v-html="rawHtml"></p>
            </div>
            <div>
                <h3>指令</h3>
            </div>
            <div>
                <h3>缩写</h3>
            </div>
        </div>
        <div class="computed">
            <h1>计算属性</h1>
            <p>
                <input type="text" v-model="question">
                <br> question: {{ question }} <br> new question: {{ newQuestion }} <br> answer: {{ answer }}
            </p>
        </div>
        <div class="if">
            <h1>条件渲染</h1>
            <p>
                <button @click="toggleSeen">toggle</button>
                <span v-if="seen">显示</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-template',
    data () {
        return {
            tmpl: '{{  }}',
            msg: '模板语法',
            rawHtml: '<span style="color: red;">html</span>',
            question: '',
            answer: '',
            seen: true
        }
    },
    methods: {
        getAnswer (width = 10) {
            this.answer = '呵呵' + width
            this.answer = `呵呵${width}`
        },
        toggleSeen () {
            this.seen = !this.seen
            this.$nextTick(() => {
                console.log('dom更新了')
            })
        }
    },
    computed: {
        newQuestion () {
            return this.question.split('').reverse().join('')
        }
    },
    watch: {
        question: function (newValue, oldValue) {
            this.getAnswer(20)
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
