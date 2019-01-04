<template>
    <div style="flex: 1;">
        <h1>{{ msg }}</h1>
        <div>
            <h3>组件</h3>
            <p>{{ total }}</p>
            <el-button type="primary" @click="initComent">初始化</el-button>
            <my-component message="hello" v-on:increment="incrementTotal" ref="com1"></my-component>
            <my-component message="message" v-on:increment="incrementTotal"></my-component>
            <my-component message="fuck" v-on:increment="incrementTotal"></my-component>
            <component-main></component-main>
            <el-button type="primary" @click="sendNotify">发送notify</el-button>
        </div>
    </div>
</template>

<script>
// import的方式与此相同
// import Child from './Child.vue'
var Child = {
    props: ['message'],
    template: '<div>这里是子组件{{ message }}<button v-on:click="incrementTotal">{{ counter }}</button></div>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        init () {
            console.log('init')
        },
        incrementTotal: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
}

export default {
    name: 'components',
    data () {
        return {
            msg: 'component',
            total: 0
        }
    },
    methods: {
        initComent () {
            this.$refs.com1.init()
        },
        incrementTotal: function () {
            this.total += 1
        },
        sendNotify () {
            this.$notify({
                type: 'info',
                title: '发送nofify',
                duration: 3000
            })
        }
    },
    components: {
        'my-component': Child
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
