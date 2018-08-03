<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <h3>组件</h3>
            <p>{{ total }}</p>
            <my-component message="hello" v-on:increment="incrementTotal"></my-component>
            <my-component message="message" v-on:increment="incrementTotal"></my-component>
            <my-component message="fuck" v-on:increment="incrementTotal"></my-component>
        </div>
    </div>
</template>

<script>
var Child = {
    props: ['message'],
    template: '<div>这里是子组件{{ message }}<button v-on:click="incrementTotal">{{ counter }}</button></div>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementTotal: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
}

export default {
    name: 'component',
    data () {
        return {
            msg: 'component',
            total: 0
        }
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
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
